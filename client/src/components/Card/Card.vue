<template lang="html">
  <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
    <div class="card card-statistics ">
      <div class="card-body shadow">
        <div class="d-flex justify-content-between flex-wrap">
          <div>
            <i :class="`mdi ${title.icons} icon-lg`"></i>
          </div>
          <div>
            <p class="card-text text-right">
              {{ title.text }}
            </p>
            <div class="fluid-container">
              <h3 class="card-title font-weight-bold text-right mb-0">
                {{ value }}
              </h3>
            </div>
          </div>
        </div>
        <p class="text-muted mt-3" v-if="subtitle">
          <i :class="`mdi ${subtitle.icons} mr-1`" aria-hidden="true"></i>
          {{ subtitle.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      text: String,
      icons: String
    },
    value: String,
    subtitle: {
      text: String,
      icons: String
    }
  }
}
</script>
