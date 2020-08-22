<template>
  <li class="nav-item">
    <span class="nav-link" v-b-toggle="`${keyToggle}`">
      <img
        class="menu-icon"
        :src="image"
        alt="menu icon"
        v-if="icon"
      >
      <span class="menu-title">
        {{ name }}
      </span>
      <i class="menu-arrow" />
    </span>
    <b-collapse :id="keyToggle">
      <ul class="nav flex-column sub-menu">
        <slot name="item_menu"></slot>
      </ul>
    </b-collapse>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    to: String
  },
  computed: {
    image () {
      return require(`../../assets/images/menu_icons/${this.icon}`)
    }
  },
  data: () => ({
    keyToggle: `key-toggle[${Math.random()}]`
  })
}
</script>

<style scoped lang="scss">
.nav-link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem 1.875rem;
  white-space: nowrap;
  height: 52px;
  color: #4a4949;

  & .menu-icon {
  margin-right: 1.25rem;
  width: 16px;
  line-height: 1;
  }

  & img {
      vertical-align: middle;
      border-style: none;
  }

  & .menu-title {
    color: inherit;
    display: inline-block;
    font-size: .875rem;
    line-height: 1;
    vertical-align: middle;
  }
}
</style>
