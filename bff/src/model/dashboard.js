import db from '../model/data'

export default {
  default (id) {
    const { management, points } = db.selectByUser(id)
    const knowledgeNivel = db.knowledgeByAreaByUser(id)
    const monthlyEvolutionByKnowledge = db.monthlyEvolutionByAreaByUser(id)
    const monthlyEvolution = db.monthlyEvolutionByUser(id)

    return {
      cards: {
        monthlyEvolution,
        behavioral: 0,
        management,
        points,
      },
      graphics: {
        monthlyEvolutionByKnowledge,
        knowledgeByArea: {
          series: knowledgeNivel,
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
      newConquests: [
        {
          title: 'Louco pelo conhecimento',
          message: 'Voce atribuiu 50 cursos em menos de 1 mes',
          congratulation: 'Voce acaba de ganhar 100 pontos. Parabens',
          date: '12/08/2020'
        },
        {
          title: 'Guerreiro Sábio',
          message: 'Voce atribuiu 25 cursos em menos de 1 mes',
          congratulation: 'Voce acaba de ganhar 80 pontos. Parabens',
          date: '05/07/2020'
        },
        {
          title: 'Pequeno mestre',
          message: 'Voce atribuiu 10 cursos em menos de 1 mes',
          congratulation: 'Voce acaba de ganhar 50 pontos. Parabens',
          date: '11/06/2020'
        },
      ]
    }
  },
  techLead () {
    
  },
}
