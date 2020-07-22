<template>
<div class="navbar-custom">
  <div class="md-accent md-toolbar" :class="{'md-elevation-1': logged}">
    Sophia
    <div 
      class="navbar-custom--divider"
      v-if="logged"
    >
    </div>

    <div class="md-toolbar-section-start navbar-custom-menu">
      <!-- <button 
        class="navbar-custom-menu--button md-button navbar-custom--button"
        :md-ripple="false"
        @click="() => $route.push('/register')"
        v-if="logged"
      >
        Cadastro
      </button>
      <button 
        class="navbar-custom-menu--button md-button navbar-custom--button"
        :md-ripple="false"
        @click="() => $route.push('/list')"
        v-if="logged"
      >
        Listar
      </button> -->
    </div>

    <div class="md-toolbar-section-end">
      <button
        :md-ripple="false" 
        class="navbar-custom--button md-button navbar-custom--button"
        @click="() => $route.push('/login')"
        data-test-button-goto-login
        v-if="!logged"
        >
          Login
        </button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    logged: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.navbar-custom {
  & .md-button {
    color: #42b883;
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