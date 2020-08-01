<template>
<div>
  <Navbar :menus="menus"/>
    <v-container fluid>
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
      >
        <v-col>
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
        </v-col>
        <v-col>
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
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import Charts from '../../components/Charts.vue'

export default {
  components: {
    Navbar, Charts
  },
  methods: {
  },
  data: () => ({
    menus: [
      { item: 'Principal', link: '/dashboard' },
      { item: 'Graficos', link: '/graphic' },
      { item: 'Usuarios', link: '/users' },
      { item: 'Edição', link: '/editor' },
    ],
    options: {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 36, 30, 45, 60, 62]
      }],
      xaxis: {
        categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"]
      }
    }
  })
}
</script>