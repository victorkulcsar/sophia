<template>
  <div class="row">
    <div class="col-12">
      <b-list-group>
        <h4> Os cursos abaixos são os aconselhados para melhoria:</h4>

        <b-list-group-item>
            MongoDB -
            <a href="https://docs.mongodb.com/">
              https://docs.mongodb.com
            </a>
        </b-list-group-item>

        <b-list-group-item>
          Oracle Database -
          <a href="https://docs.oracle.com/en/database/">
            https://docs.oracle.com/en/database
          </a>
        </b-list-group-item>

        <b-list-group-item>
          Maven -
          <a href="https://maven.apache.org/guides/index.html">
            https://maven.apache.org/guides/index.html
          </a>
        </b-list-group-item>

        <b-list-group-item>
          Spring Framework -
          <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/">
            https://docs.spring.io/spring/docs/current/spring-framework-reference/
          </a>
        </b-list-group-item>

        <b-list-group-item>
          Spring MVC -
          <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html">
            https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html
          </a>
        </b-list-group-item>
      </b-list-group>
    </div>

    <div class="col-12">
      <alerts/>
      <badges/>
      <breadcrumbs/>
      <buttons/>
      <dropdowns/>
      <icons/>
      <modals/>
      <paginations/>
      <progress/>
      <tables/>
      <typography/>
      <tabs/>
      <tooltips/>
      <forms/>
      <tabs/>
      <carousel/>
    </div>
  </div>
</template>

<script>
import alerts from '../../components/alerts'
import badges from '../../components/badges'
import breadcrumbs from '../../components/breadcrumbs'
import buttons from '../../components/buttons'
import carousel from '../../components/carousel'
import dropdowns from '../../components/dropdowns'
import icons from '../../components/icons'
import modals from '../../components/modals'
import paginations from '../../components/paginations'
import progress from '../../components/progress'
import tables from '../../components/tables'
import typography from '../../components/typography'
import tabs from '../../components/tabs'
import tooltips from '../../components/tooltips'
import forms from '../../components/forms'

export default {
  components: {
    alerts,
    badges,
    breadcrumbs,
    buttons,
    carousel,
    dropdowns,
    icons,
    modals,
    paginations,
    progress,
    tables,
    typography,
    tabs,
    tooltips,
    forms
  },
  data: () => ({
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'dashboard'
      },
      {
        text: 'Recommended',
        disabled: false,
        href: 'recommeded'
      }
    ]
  })
}
</script>
