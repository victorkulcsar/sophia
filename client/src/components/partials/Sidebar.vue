<template>
  <section class="app-sidebar ">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">

          <div class="nav-link">
            <div class="profile-image">
              <img :src="imageAvatar" alt="image"/>
              <span class="online-status online"></span>
            </div>
            <div class="profile-name">
              <p class="name">{{ getUser.name || 'carregando...' }}</p>
              <p class="designation">{{ getUser.area || 'carregando...'}}</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>

        <ItemMenu
          name="Dashboard"
          icon="01.png"
          to="/dashboard"
        />

        <div v-if="getUser.role === 'default'">

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
            name="Desafio"
            icon="04.png"
            to="/quest"
          />
      </div>

      <div v-if="getUser.role === 'teamlead'">
        <ItemMenu
          name="Graficos"
          icon="05.png"
          to="/graphic"
        />

        <ItemMenu
          name="Usuarios"
          icon="08.png"
          to="/users"
        />

        <ItemMenu
          name="Editor"
          icon="04.png"
          to="/editor"
        />
      </div>

    </ul>
    </nav>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemMenu from '../../components/Menu/ItemMenu'
import ItemMenuCollapse from '../../components/Menu/ItemMenuCollapse'

export default {
  components: {
    ItemMenu,
    ItemMenuCollapse
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    imageAvatar () {
      const { avatar } = this.getUser
      return !avatar
        ? require(`../../assets/images/user.png`)
        : require(`../../assets/images/avatar/${avatar}`)
    }
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
