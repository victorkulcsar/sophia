<template lang="html">
  <section class="dashboard">
    <div class="row">
      <Card
        :title="{
          text: 'Evolução mensal',
          icons: 'mdi-gauge text-info'
        }"
        value="18%"
        :subtitle="{
          text: '32% no mes anterior',
          icons: 'mdi-alert-octagon'
        }"
      />

      <Card
        :title="{
          text: 'Comportamental',
          icons: 'mdi-rocket text-warning'
        }"
        value="25%"
        :subtitle="{
          text: '12% no mes anterior',
          icons: 'mdi-alert-octagon'
        }"
      />

      <Card
        :title="{
          text: 'Gerencia',
          icons: 'mdi-city text-teal'
        }"
        value="B2B Care"
      />

      <Card
        :title="{
          text: 'Pontos',
          icons: 'mdi-dumbbell text-danger'
        }"
        value="200"
      />

    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card shadow">
          <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <Charts
                    title="Evolução mensal de conhecimento"
                    :series="[{
                      name: 'Conhecimento',
                      data: [30, 36, 42, 45, 60, 62]
                    }]"
                    :options="{
                      xaxis: {
                        categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
                      }
                    }"
                  />
                </div>

                <div class="col-md-6">
                  <Charts
                    title="Conhecimento por Area"
                    type="bar"
                    :series="[{
                      name: 'Domino',
                      data: [44, 55, 41]
                    }, {
                      name: 'Sei bem',
                      data: [13, 23, 20]
                    }, {
                      name: 'Sei pouco',
                      data: [11, 17, 15]
                    }, {
                      name: 'Não sei',
                      data: [21, 7, 25]
                    }]"
                    :options="{
                      chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        stackType: '100%',
                        toolbar: {
                          show: true
                        },
                        zoom: {
                          enabled: true
                        }
                      },
                      responsive: [{
                        breakpoint: 480,
                        options: {
                          legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                          }
                        }
                      }],
                      plotOptions: {
                        bar: {
                          horizontal: false,
                        },
                      },
                      xaxis: {
                        categories: ['BackEnd', 'FrontEnd', 'DevOps'],
                      },
                      legend: {
                        position: 'right',
                        offsetY: 40
                      },
                      fill: {
                        opacity: 1
                      }
                    }"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Card from '../../components/Card/Card'
import Charts from '../../components/Chart/Charts'
import { data } from './data/modelo.json'
import Laercio from './data/22.json'
import Jose from './data/23.json'
import Marcelo from './data/24.json'
import Pedro from './data/25.json'
import Joao from './data/26.json'

export default {
  name: 'Dashboard',
  components: {
    Card,
    Charts
  },

  mounted () {
    axios.get('/data/squads')
  },

  methods: {
    legendSkill (skill) {
      const legendSkill = {
        0: 'Não sei',
        1: 'Sei pouco',
        2: 'Sei bem',
        3: 'Domino'
      }
      return legendSkill[skill] || 'Não sei'
    },
    setSkillColor (skill) {
      const skillColor = {
        0: 'danger',
        1: 'warning',
        2: 'info',
        3: 'success'
      }
      return skillColor[skill] || 'danger'
    }
  },
  data: () => ({
    menus: {
      items: [
        { item: 'Principal', link: '/dashboard' },
        { item: 'Graficos', link: '/graphic' },
        { item: 'Usuarios', link: '/users' },
        { item: 'Edição', link: '/editor' }
      ],
      dropdown: [
        { item: 'Todas Squads' },
        { item: 'Foo Fighter' },
        { item: 'The Who' }
      ]
    },
    modelo: data,
    users: [Laercio, Jose, Marcelo, Pedro, Joao]
  })
}
</script>

<style lang="scss" >
.dashboard {
  background: #eee;
  &__body {
    height: 100vh;
  }

  & .board {
    width: 1000px;
    margin-left: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;

    & .todo {
      .board-column-header {
        background: #4A9FF9;
      }
    }
    & .working {
      .board-column-header {
        background: #f9944a;
      }
    }
    & .done {
      .board-column-header {
        background: #2ac06d;
      }
    }
  }
}
</style>
