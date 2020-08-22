<template>
  <section class="app-sidebar ">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img src="../../assets/images/person/pessoa.svg" alt="image"/>
              <span class="online-status online"></span>
            </div>
            <div class="profile-name">
              <p class="name">Laercio Nogueira</p>
              <p class="designation">Developer</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <ItemMenu
          name="Dashboard"
          icon="01.png"
          to="/dashboard"
        />

        <ItemMenu
          name="Conhecimento"
          icon="09.png"
          to="/skill"
        />

        <ItemMenu
          name="Guru"
          icon="08.png"
          to="/guru"
        />

        <ItemMenu
          name="Quest"
          icon="04.png"
          to="/quest"
        />

        <span v-if="false">

          <ItemMenu
            name="Widgets"
            icon="02.png"
            to="/widgets"
          />

          <ItemMenuCollapse name="Sample Pages" icon="08.png">
            <template #item_menu>
              <ItemMenu name="Login" to="/login" />
              <ItemMenu name="Register" to="/register" />
              <ItemMenu name="404" to="/404" />
              <ItemMenu name="500" to="/500" />
            </template>
          </ItemMenuCollapse>

          <ItemMenuCollapse name="UI Components" icon="03.png">
            <template #item_menu>
              <ItemMenu to="/alerts" name="Alerts" />
              <ItemMenu to="/badges" name="Badges" />
              <ItemMenu to="/breadcrumbs" name="Breadcrumbs" />
              <ItemMenu to="/carousel" name="Carousel" />
              <ItemMenu to="/dropdowns" name="Dropdowns" />
              <ItemMenu to="/typography" name="Typography" />
              <ItemMenu to="/paginations" name="Paginations" />
              <ItemMenu to="/tooltips" name="Tooltips" />
              <ItemMenu to="/progress" name="Progress" />
              <ItemMenu to="/tabs" name="Tabs" />
              <ItemMenu to="/modals" name="Modals" />
            </template>
          </ItemMenuCollapse>

          <ItemMenu
            name="Tables"
            icon="06.png"
            to="/tables"
          />

          <ItemMenu
            name="Icons"
            icon="07.png"
            to="/icons"
          />

          <ItemMenu
            name="Form"
            icon="04.png"
            to="/forms"
          />
        </span>
      </ul>
    </nav>
  </section>
</template>

<script>
import ItemMenu from '../../components/Menu/ItemMenu'
import ItemMenuCollapse from '../../components/Menu/ItemMenuCollapse'

export default {
  components: {
    ItemMenu,
    ItemMenuCollapse
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
