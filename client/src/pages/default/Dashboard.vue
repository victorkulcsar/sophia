<template lang="html">
  <section class="dashboard">
    <div class="row">
      <Card
        :title="{
          text: 'Evolução mensal',
          icons: 'mdi-gauge text-info'
        }"
        :value="`${info.cards.monthlyEvolution}%`"
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
        :value="`${info.cards.behavioral}%`"
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
        :value="`${info.cards.management}`"
      />

      <Card
        :title="{
          text: 'Pontos',
          icons: 'mdi-dumbbell text-danger'
        }"
        :value="`${info.cards.points}`"
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
                    v-bind="info.graphics.monthlyEvolutionByKnowledge"
                  />
                </div>

                <div class="col-md-6">
                  <Charts
                    title="Conhecimento por Area"
                    type="bar"
                    v-bind="info.graphics.knowledgeByArea"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="info.newConquests.length">
      <div class="col-12 grid-margin">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Novas Conquistas</h5>
            <div class="fluid-container">

              <div
                class="row ticket-card mt-3 pb-2 border-bottom"
                v-for="(item, key) in info.newConquests"
                :key="key"
              >
                <div class="col-md-1">
                  <img class="img-sm mb-2 mb-md-0" src="../../assets/images/objetivo.svg" alt="profile image">
                </div>
                <div class="ticket-details col-md-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">{{item.title}}:</p>
                    <p class="font-weight-bold mb-0 ellipsis">{{item.message}}</p>
                  </div>
                  <p class="text-small text-gray">{{item.congratulation}}</p>
                  <div class="row text-muted d-flex mb-2 mb-md-0">
                    <div class="col-xl-4 d-sm-flex">
                      <p class="Last-responded mr-2 mb-0">{{item.date}}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dashboardApi from '../../api/dashboardApi'
import Card from '../../components/Card/Card'
import Charts from '../../components/Chart/Charts'
export default {
  components: {
    Card,
    Charts
  },
  async mounted () {
    const { data } = await dashboardApi.getDashboard()
    this.info = data
  },
  data: () => ({
    info: {
      cards: {
        monthlyEvolution: 0,
        behavioral: 0,
        management: 'None',
        points: 0
      },
      graphics: {
        monthlyEvolutionByKnowledge: {
          series: [{
            name: 'Conhecimento',
            data: []
          }],
          options: {
            xaxis: {
              categories: []
            }
          }
        },
        knowledgeByArea: {
          series: [],
          options: {
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
                horizontal: false
              }
            },
            xaxis: {
              categories: []
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          }
        }
      },
      newConquests: []
    }
  })
}
</script>

<style scoped lang="scss">

</style>
