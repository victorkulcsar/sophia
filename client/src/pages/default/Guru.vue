<template>
<div>
  <Navbar :menus="menus"/>

  <v-breadcrumbs :items="items" />

  <v-container fluid>
    <v-row
      :align="alignment"
      :justify="justify"
      class="grey lighten-5"
    >
      <v-col>
        
        <SimpleTable> 
          <template v-slot:th>
            <th
              class="text-left" 
              v-for="(legend, index) in legends" 
              :key="index"
              :id="index"
            >
              {{ legend.toUpperCase() }}
            </th>
            <th id="0" />
          </template>

          <template v-slot:td>
            <Fragment 
              v-for="(item, index) in filtered" 
              :key="index"
            >
              <tr>
                <td>{{ item.area }}</td>
                <td>{{ item.sub }}</td>
                <td>{{ item.tecnologia }}</td>
                <td>
                  <button @click="() => item.open = !item.open">
                    <img src="../../assets/arrow-down.svg" alt="arrow-down" width="20px">
                  </button>
                </td> 
              </tr>
              <tr v-if="item.open" class="sub-item">
                <td>Laercio Nogueria</td>
                <td>Analista de Desenvolvimento</td>
                <td>Dex</td>
                <td>laercio.nogueira@telefonica.com</td>
              </tr>
              <tr v-if="item.open" class="sub-item">
                <td>Marcela Salvadori</td>
                <td>Analista de Desenvolvimento</td>
                <td>Equipe 2</td>
                <td>marcela.salvadori@telefonica.com</td>
              </tr>
              <tr v-if="item.open" class="sub-item">
                <td>Fernando Silva</td>
                <td>Arquitetura</td>
                <td>Equipe 3</td>
                <td>silva.fernando@telefonica.com</td>
              </tr>
              <tr v-if="item.open" class="sub-item">
                <td>Marcelo Ricardo</td>
                <td>Analista de Desenvolvimento</td>
                <td>Equipe 1</td>
                <td>marcelo.ricardo@telefonica.com</td>
              </tr>
            </Fragment>
          </template>
        </SimpleTable>
  
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue'
import SimpleTable from '../../components/SimpleTable.vue'
import { Fragment } from 'vue-fragment'

export default {
  components: { Navbar, SimpleTable, Fragment },
  computed: {
    filtered () {
      return this.search ? 
        this.data
          .filter(item => item.conhecimento === this.search) :
        this.data
      },
  },
  async created() {
    const { data } = await axios.get("/data")
    this.data = data.map(item => ({
      ...item,
      open: false,
    }));
  },
  data: () => ({
    data: [],
    legends: ["area", "sub", "tecnologia"],
    search: "",
    menus: [
      { item: 'Principal', link: '/dashboard' },
      { item: 'Gurus', link: '/guru' },
      { item: 'Recomendação', link: '/recommended' },
    ],
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'dashboard',
      },
      {
        text: 'Guru',
        disabled: false,
        href: 'guru',
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
.sub-item {
  background-color: #d4edda;
  color: #155724;
  border-bottom: 2px solid red;
}
</style>