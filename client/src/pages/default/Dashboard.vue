<template>
  <div>
  <Navbar logged />
    <div class="dashboard">
      <div class="container">
        <div class="row">
            <v-col  cols="12" sm="12">
              <SimpleTable> 
                <template v-slot:th>
                  <th
                    class="text-left" 
                    v-for="(legend, index) in legends" 
                    :key="index"
                    :id="index"
                  >
                    {{ legend }}
                  </th>
                  <th id="0"></th>
                </template>

                <template v-slot:td>
                  <tr 
                    v-for="item in filtered" 
                    :key="item.name"
                    :class="checkSkill(item)"
                  >
                    <td>{{ item.area }}</td>
                    <td>{{ item.sub }}</td>
                    <td>{{ item.tecnologia }}</td>
                    <td>
                      <select
                        @change="selectSkill($event, item.id)"
                      >
                        <option
                          v-for="(skill, index) in skills" 
                          :key="index"
                          :selected="parseInt(item.id) === index"
                          :value="index"
                        >
                          {{ skill }}
                        </option>
                      </select> 
                    </td>
                  </tr>
                </template>

              </SimpleTable>
            </v-col>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue'
import SimpleTable from '../../components/SimpleTable.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar, SimpleTable
  },
  async created() {
    const { data } = await axios.get("/data")
    this.data = data;
  },
  computed: {
    filtered () {
      return this.search ? 
        this.data
          .filter(item => item.conhecimento === this.search) :
        this.data
      },
  },
  methods: {
    async selectSkill(event, id) {
      const { data } = await axios.post('/data', {
        skill: event.target.value,
        id
      })
      this.data = data;
    },
    checkSkill(item) {
      console.log(item)
      switch (item.conhecimento) {
        case 0:
          return 'danger';
        case 1:
          return 'warning';
        case 2:
          return 'info';
        case 3:
          return 'success';
        default:
          return '';
      }
    }
  },
  data: () => ({
    skills: ['Não sei', 'Sei pouco', 'Sei bem', 'Domino'],
    data: [],
    legends: ["area", "sub", "tecnologia"],
    search: "",
  })
}
</script>

<style lang="scss" >
.danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;;
}

.info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
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