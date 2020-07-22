<template>
  <div>
  <Navbar logged />
    <div class="dashboard">
      <div class="container">
        <div class="row">
          manager
            <v-col  cols="12" sm="12">
              <v-simple-table >
              <template v-slot:top>
                <v-text-field v-model="search" label="Pesquisar" />
              </template>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left" id="1">Sub</th>
                      <th class="text-left" id="2">Tecnologia</th>
                      <th class="text-left" id="3">Descrição</th>
                      <th class="text-left" id="4">Conhecimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filtered" :key="item.name">
                      <td>{{ item.sub }}</td>
                      <td>{{ item.tecnologia }}</td>
                      <td>{{ item.descricao }}</td>
                      <td>
                        <select>
                          <option 
                            v-for="(nivel, index) in conhecimento" 
                            :key="index"
                            :value="index"
                            :selected="index === item.conhecimento"
                          >
                            {{ nivel }}
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  computed: {
    filtered () {
        return this.search ? 
          this.desserts
            .filter(item => item.conhecimento === this.search) :
          this.desserts
      },
  },
  data: () => ({
    search: "",
    conhecimento: ['Não sei', 'Sei pouco', 'Sei bem', 'Domino'],
    desserts: [
      {
        sub: 'Analytics',
        tecnologia: 'Google Analytics',
        descricao: "",
        conhecimento: 1
      },
      {
        sub: 'Analytics',
        tecnologia: 'Google Tag Manager',
        descricao: "",
        conhecimento: 0
      },
      {
        sub: 'DevOps',
        tecnologia: 'Mongo DB',
        descricao: "Banco de dados não relacional",
        conhecimento: 3
      },
      {
        sub: 'DevOps',
        tecnologia: 'Oracle Database',
        descricao: "Banco de dados",
        conhecimento: 2
      },
      {
        sub: 'DevOps',
        tecnologia: 'Git',
        descricao: "Versionamento de codigo",
        conhecimento: 1
      },
      {
        sub: 'DevOps',
        tecnologia: 'Jenkins',
        descricao: "CI",
        conhecimento: 3
      },
      {
        sub: 'DevOps',
        tecnologia: 'ESLint',
        descricao: "",
        conhecimento: 0
      },
    ],
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