<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr class="legend">
          <slot name="th"></slot>
        </tr>
      </thead>
      <tbody>
        <slot name="td"></slot>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.legend {
  background: #ddd
}
</style>