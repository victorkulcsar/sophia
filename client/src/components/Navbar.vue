<template>
<div class="navbar-custom">
  <div class="md-toolbar" :class="{'md-elevation-1': logged}">
    <p class="navbar-custom--text-logo">
      <img src="../assets/logo1.svg" alt="logo" class="logo--image">
    <p>
    <div class="navbar-custom--divider"></div>

    <div class="md-toolbar-section-start">
      <button 
        class="md-button item-menu"
        :md-ripple="false"
        @click="() => $route.push(menu.link)"
        v-for="(menu, index) in menus.items"
        :key="index"
      >
        {{ menu.item }}
      </button>
    </div>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{}">
        <v-btn
          icon
          @click.stop="toggleMenu"
        >
          <img src="../assets/user.png" alt="user" class="user--image">
        </v-btn>
      
      </template>
    
    </v-menu>

    <div class="v-list" v-if="showMenu" @blur="showMenu = false" @click.stop>
      <div class="v-list__menu">
        <div class="v-list__menu--title">Gisele Jeanne</div>
        <div 
          class="v-list__menu--item" 
          v-for="(menu, index) in menus.dropdown" 
          :key="index">
            {{menu.item}}
        </div>
        <div class="v-list__menu--item">Configurações</div>
        <div 
          class="v-list__menu--item"
          @click="logout"
          v-if="!logged"
        >
          Sair
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    menus: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('hash');
      this.$route.push("/")
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
      this.showMenu && this.$nextTick(() => {
        document.addEventListener('click', this.hide)
      })
    },
    hide: function() {
      this.showMenu = false
      document.removeEventListener('click', this.hide)
    }
  },
  data: () => ({
    showMenu: false
  })
}
</script>

<style lang="scss" scoped>
.navbar-custom {
  &--text-logo {
    color: white;
    font-size: 15px;
    font-weight: bold;
  }

  & .logo--image {
    width: 70px;
    margin-top: 10px;
  }

  & .md-toolbar{
    background: #42b883
  }

  & .item-menu {
    color: white;
    font-weight: 700;
  }

  & .md-button:not([disabled]):hover:before {
    background: #42b883
  }

  &--button {
    // color: $color-secondary;
    font-weight: 500;

    &::before {
      background: white !important;
    }
  }

  &--divider {
    border-right: 1px solid #ccc;
    width: 1px;
    height: 30px;
    margin: 0 10px;
  }

  &--logo {
    width: 100px;
    padding: 0px 5px;
    cursor: pointer;
  }
}

.user--image {
  width: 30px;
  border-radius: 300px;
}

.v-list {
  background: white;  
  position: absolute;
  right: 15px;
  top: 50px;
  line-height: 2.5;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

  &__menu {

    &--title {
      padding: 0 16px;
      color: gray;
    }

    &--item {
      font-family: Ubuntu-Light;
      color: black;
      cursor: pointer;
      padding: 0 16px;
    
      &:hover {
        background: #ddd;
      }
    } 
  }

  .active {
    background: #ddd;
  }
}
</style>