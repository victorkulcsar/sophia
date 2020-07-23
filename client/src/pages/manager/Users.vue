<template>
<div>
  <Navbar :menus="menus"/>
    <v-container>
      <v-row>
        <v-col class="select-user">
          <span>Selecione um usuario:</span>
          <select @change="selectedUser">
            <option value="1">Laercio</option>
            <option value="2">Pedro</option>
            <option value="3">Marcelo</option>
            <option value="4">Joao</option>
          </select>
        </v-col>
      </v-row>
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
      >
        <v-col>
          <Charts
            title="Evolução mensal de conhecimento"
            :series="data[selected].chart1.series"
            :options="data[selected].chart1.options"
          />
        </v-col>
        <v-col>
          <Charts
            title="Conhecimento por Area"
            type="bar"
            :series="data[selected].chart2.series"
            :options="data[selected].chart2.options"
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
  computed: {
    selected() {
      return this.selected
    }
  },
  methods: {
    selectedUser(event) {
      this.selected = event.target.value;
    }
  },
  data: () => ({
    selected: 1,
    menus: [
      { item: 'Principal', link: '/dashboard' },
      { item: 'Graficos', link: '/graphic' },
      { item: 'Usuarios', link: '/users' },
      { item: 'Edição', link: '/editor' },
    ],
    data: {
      1: {
        chart1: {
          series:[{
            name: 'skill',
            data: [30, 36, 42, 45, 60, 62]
          }],
          options:{
            xaxis: {
              categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
            }
          }
        },
        chart2: {
          series:[
            {
              name: 'Domino',
              data: [12, 40, 31]
            }, {
              name: 'Sei bem',
              data: [19, 43, 30]
            }, {
              name: 'Sei pouco',
              data: [11, 11, 22]
            }, {
              name: 'Não sei',
              data: [29, 17, 45]
            }
          ],
          options:{
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
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
          }
        }
      },
      2: {
        chart1: {
          series:[{
            name: 'skill',
            data: [33, 39, 48, 56, 70, 82]
          }],
          options:{
            xaxis: {
              categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
            }
          }
        },
        chart2: {
          series:[
            {
              name: 'Domino',
              data: [41, 34, 34]
            }, {
              name: 'Sei bem',
              data: [13, 20, 10]
            }, {
              name: 'Sei pouco',
              data: [17, 18, 33]
            }, {
              name: 'Não sei',
              data: [24, 27, 35]
            }
          ],
          options:{
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
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
          }
        }
      },
      3: {

        chart1: {
          series:[{
            name: 'skill',
            data: [30, 31, 31, 32, 35, 35]
          }],
          options:{
            xaxis: {
              categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
            }
          }
        },
        chart2: {
          series:[
            {
              name: 'Domino',
              data: [24, 25, 51]
            }, {
              name: 'Sei bem',
              data: [43, 13, 20]
            }, {
              name: 'Sei pouco',
              data: [21, 37, 25]
            }, {
              name: 'Não sei',
              data: [31, 17, 15]
            }
          ],
          options:{
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
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
          }
        }
      },
      4: {

        chart1: {
          series:[{
            name: 'skill',
            data: [15, 18, 22, 25, 30, 32]
          }],
          options:{
            xaxis: {
              categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']
            }
          }
        },
        chart2: {
          series:[
            {
              name: 'Domino',
              data: [14, 35, 11]
            }, {
              name: 'Sei bem',
              data: [23, 23, 20]
            }, {
              name: 'Sei pouco',
              data: [21, 67, 75]
            }, {
              name: 'Não sei',
              data: [41, 17, 15]
            }
          ],
          options:{
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
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
          }
        }
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.select-user {
  background: #eee;

  & select {
    width: 300px;
    border-bottom: 1px solid silver;
    margin-left: 5px;
  }
}
</style>