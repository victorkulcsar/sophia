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

        <v-card
          class="mx-auto"
          tile
        >
          <v-list flat>
            <v-subheader>
              <h3>
                Os cursos abaixos são os aconselhados para melhoria
              </h3>
            </v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>MongoDB</v-list-item-title>
                <v-list-item-subtitle>
                  <a href="https://docs.mongodb.com/">
                    https://docs.mongodb.com
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Oracle Database</v-list-item-title>
                <v-list-item-subtitle>
                  <a href="https://docs.oracle.com/en/database/">
                    https://docs.oracle.com/en/database
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Maven</v-list-item-title>
                <v-list-item-subtitle>
                  <a href="https://maven.apache.org/guides/index.html">
                    https://maven.apache.org/guides/index.html
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Spring Framework</v-list-item-title>
                <v-list-item-subtitle>
                  <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/">
                    https://docs.spring.io/spring/docs/current/spring-framework-reference/
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Spring MVC</v-list-item-title>
                <v-list-item-subtitle>
                  <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html">
                    https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html
                  </a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
        </v-list>

        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  components: { Navbar },
  data: () => ({
    menus: {
      items: [
        { item: 'Principal', link: '/dashboard' },
        { item: 'Graficos', link: '/graphic' },
        { item: 'Usuarios', link: '/users' },
        { item: 'Edição', link: '/editor' },
      ],
      dropdown: []
    },
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'dashboard',
      },
      {
        text: 'Recommended',
        disabled: false,
        href: 'recommeded',
      },
    ],
  })
}
</script>