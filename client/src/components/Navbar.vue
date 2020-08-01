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
        v-for="(menu, index) in menus"
        :key="index"
      >
        {{ menu.item }}
      </button>
    </div>

    <div class="md-toolbar-section-end">
      <button
        :md-ripple="false" 
        class="md-button item-menu"
        @click="logout"
        v-if="!logged"
        >
          sair
        </button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    menus: {
      type: Array,
      default: []
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('hash');
      this.$route.push("/")
    }
  }
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
</style>