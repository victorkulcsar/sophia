<template>
  <div>
  <Navbar :menus="menus"/>
    <v-container>
      <v-row
        :align="alignment"
        :justify="end"
        class="grey lighten-5"
      >
        <v-col cols="9" />
        <v-col cols="3">
          <v-btn small class="primary right" @click="() => dialog = true">
            Adicionar
          </v-btn>
          <v-btn 
            small 
            class="error right"
            :disabled="!checkbox.length"
          >
            Remover
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
      >
        <v-col>
          <SimpleTable> 
            <template v-slot:th>
              <th id="0" class="text-left">
                <div>
                  <i aria-hidden="true" class="v-icon notranslate mdi mdi-checkbox-marked theme--light primary--text"></i>
                  <input 
                    @change="checkAll"
                    type="checkbox"
                  >
                </div>
              </th>
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
                v-for="item in data" 
                :key="item.name"
              >
                <td>
                  <div>
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-checkbox-marked theme--light primary--text"></i>
                    <input 
                      id="input-1840" 
                      role="checkbox" 
                      type="checkbox" 
                      :value="item.id"
                      v-model="checkbox"
                    >
                  </div>
                </td>
                <td>{{ item.area }}</td>
                <td>{{ item.sub }}</td>
                <td>{{ item.tecnologia }}</td>
              </tr>
            </template>
          </SimpleTable>
        </v-col>
      </v-row>
    </v-container>
    <Modal v-if="dialog"/>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue'
import SimpleTable from '../../components/SimpleTable.vue'
import Modal from '../../components/Modal.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar, SimpleTable, Modal
  },
  async created() {
    const { data } = await axios.get("/editor/data")
    this.data = data.data;
  },
  methods: {
    checkAll(event) {
      if (event.target.checked) {
        this.data.forEach(({ id }) => this.checkbox.push(id))
      } else {
        this.checkbox = []
      }
    }
  },
  data: () => ({
    dialog: false,
    menus: [
      { item: 'Principal', link: '/dashboard' },
      { item: 'Graficos', link: '/graphic' },
      { item: 'Usuarios', link: '/users' },
      { item: 'Edição', link: '/editor' },
    ],
    data: [],
    legends: ["area", "sub", "tecnologia"],
    checkbox: [],
  })
}
</script>

<style lang="scss">
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