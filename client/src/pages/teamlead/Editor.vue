<template>
  <div>
    <div class="row">
      <div class="col-9"></div>
        <div class="col-3">
          <button class="btn primary right" @click="() => dialog = true">
            Adicionar
          </button>
          <button class="btn error right" :disabled="!checkbox.length">
            Remover
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
        </div>
      </div>
    <Modal v-if="dialog"/>
  </div>
</template>

<script>
import axios from 'axios'
import Modal from '../../components/Modal.vue'

export default {
  name: 'Dashboard',
  components: {
    Modal
  },
  async created () {
    const { data } = await axios.get('/editor/data')
    this.data = data.data
  },
  methods: {
    checkAll (event) {
      if (event.target.checked) {
        this.data.forEach(({ id }) => this.checkbox.push(id))
      } else {
        this.checkbox = []
      }
    }
  },
  data: () => ({
    dialog: false,
    data: [],
    legends: ['area', 'sub', 'tecnologia'],
    checkbox: []
  })
}
</script>

<style lang="scss">
.dashboard {
  background: #eee;
  &__body {
    height: 100vh;
  }

  & .board {
    width: 1000px;
    margin-left: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;

    & .todo {
      .board-column-header {
        background: #4A9FF9;
      }
    }
    & .working {
      .board-column-header {
        background: #f9944a;
      }
    }
    & .done {
      .board-column-header {
        background: #2ac06d;
      }
    }
  }
}
</style>
