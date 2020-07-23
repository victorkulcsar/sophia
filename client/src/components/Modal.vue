<template>
  <div class="v-overlay v-overlay--active theme--dark">
    <div class="v-overlay__scrim" />
    <div class="v-dialog__content v-dialog__content--active">
      <div class="v-dialog v-dialog--active">
        <div class="v-card theme--light">
          <div class="v-card__title">Adicionar conhecimento</div>
          <div class="v-card__text">
            teste
          </div>
          <div class="v-card__actions">
            <button class="v-btn v-btn--flat v-btn--text theme--light v-size--default">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-dialog__content {
  &--active {
    z-index: 202;
  }
}
.v-overlay {
  &__scrim {
    opacity: 0.46; 
    background-color: rgb(33, 33, 33); 
    border-color: rgb(33, 33, 33);
  }

  &--active {
    z-index: 201;
  }
}
</style>