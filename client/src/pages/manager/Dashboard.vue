<template>
<div>
  <Navbar :menus="menus"/>
  
  <v-container fluid>
    <v-row>
      <v-col>
        <SimpleTable> 
          <template v-slot:th>
            <th class="text-left" id="0">TECNOLOGIA</th>
            <th 
              class="text-left" 
              v-for="(user, index) in users"
              :key="index"
              :id="index"
            >{{ user.name }}</th>
          </template>

          <template v-slot:td>
            <tr v-for="(item, index) in modelo" :key="index">
              <td>{{ item.tecnologia }}</td>
              <td 
                :class="setSkillColor(user[item.id])" 
                v-for="(user, index) in users" 
                :key="index">
                {{ legendSkill(user[item.id]) }}
              </td>
            </tr>
          </template>
        </SimpleTable>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import SimpleTable from '../../components/SimpleTable.vue'
import { data } from './data/modelo.json'
import Laercio from './data/22.json'
import Jose from './data/23.json'
import Marcelo from './data/24.json'
import Pedro from './data/25.json'
import Joao from './data/26.json'

export default {
  name: 'Dashboard',
  components: {
    Navbar, SimpleTable
  },
  methods: {
    legendSkill(skill) {
      const legendSkill = {
        0: 'Não sei',
        1: 'Sei pouco',
        2: 'Sei bem',
        3: 'Domino'
      }
      return legendSkill[skill] || 'Não sei';
    },
    setSkillColor(skill) {
      const skillColor = {
        0: 'danger',
        1: 'warning',
        2: 'info',
        3: 'success',
      }
      return skillColor[skill] || 'danger'
    }
  },
  data: () => ({
    menus: [
      { item: 'Principal', link: '/dashboard' },
      { item: 'Graficos', link: '/graphic' },
      { item: 'Usuarios', link: '/users' },
      { item: 'Edição', link: '/editor' },
    ],
    modelo: data,
    users: [Laercio, Jose, Marcelo, Pedro, Joao],
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

