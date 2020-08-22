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
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Novas Conquistas</h5>
            <div class="fluid-container">
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-md-1">
                  <img class="img-sm mb-2 mb-md-0" src="../../assets/images/objetivo.svg" alt="profile image">
                </div>
                <div class="ticket-details col-md-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Pequeno mestre:</p>
                    <p class="font-weight-bold mb-0 ellipsis">Voce atribuiu 10 cursos em menos de 1 mes</p>
                  </div>
                  <p class="text-small text-gray">Voce acaba de ganhar 50 pontos. Uau!</p>
                  <div class="row text-muted d-flex mb-2 mb-md-0">
                    <div class="col-xl-4 d-sm-flex">
                      <p class="Last-responded mr-2 mb-0">14/07/2020</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-md-1">
                  <img class="img-sm mb-2 mb-md-0" src="../../assets/images/objetivo.svg" alt="profile image">
                </div>
                <div class="ticket-details col-md-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Guerreiro Sábio:</p>
                    <p class="font-weight-bold mb-0 ellipsis">Voce atribuiu 25 cursos em menos de 1 mes</p>
                  </div>
                  <p class="text-small text-gray">Voce acaba de ganhar 50 pontos. Parabens</p>
                  <div class="row text-muted d-flex mb-2 mb-md-0">
                    <div class="col-xl-4 d-sm-flex">
                      <p class="Last-responded mr-2 mb-0">11/07/2020</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-md-1">
                  <img class="img-sm mb-2 mb-md-0" src="../../assets/images/objetivo.svg" alt="profile image">
                </div>
                <div class="ticket-details col-md-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Louco pelo conhecimento:</p>
                    <p class="font-weight-bold mb-0 ellipsis">Voce atribuiu 50 cursos em menos de 1 mes</p>
                  </div>
                  <p class="text-small text-gray">Voce acaba de ganhar 50 pontos. Parabens</p>
                  <div class="row text-muted d-flex mb-2 mb-md-0">
                    <div class="col-xl-4 d-sm-flex">
                      <p class="Last-responded mr-2 mb-0">05/06/2020</p>
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
import Card from '../../components/Card/Card'
import Charts from '../../components/Chart/Charts'
export default {
  components: {
    Card,
    Charts
  }
}
</script>

<style scoped lang="scss">

</style>
