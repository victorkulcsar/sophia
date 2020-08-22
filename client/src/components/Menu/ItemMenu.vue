<template>
  <li class="nav-item">
    <a class="nav-link" :href="to">
      <img
        class="menu-icon"
        :src="image"
        alt="menu icon"
        v-if="icon"
      >
      <span class="menu-title">
        {{ name }}
      </span>
    </a>
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
    icons: {
      icon1: require('../../assets/images/menu_icons/01.png'),
      icon2: require('../../assets/images/menu_icons/02.png'),
      icon3: require('../../assets/images/menu_icons/03.png'),
      icon4: require('../../assets/images/menu_icons/04.png'),
      icon5: require('../../assets/images/menu_icons/05.png')
    }
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
