<template>
  <div>
    <b-card class="shadow">
      <div class="row">
          <div class="col-8">
            <h4 class="card-title">Edição de conhecimento</h4>
          </div>
          <div class="col-4">
            <b-button variant="danger" class="right" :disabled="!checkbox.length">Remover</b-button>
            <b-button variant="primary" class="right" v-b-modal.modal-1>Adicionar</b-button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <b-table
              bordered
              outlined
              responsive
              head-variant="light"
              :items="data"
              :fields="fields"
              ticky-header="200px"
            >
              <template v-slot:cell(check)="item">
                <b-form-checkbox
                  v-model="item.item.check"
                />
              </template>
            </b-table>
          </div>
        </div>
    </b-card>
    <b-modal id="modal-1" title="Adicione novo conhecimento">
      <p class="my-4">Novo conhecimento</p>
    </b-modal>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Dashboard',
  async created () {
    // const { data } = await axios.get('/editor/data')
    // this.data = data.data
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
    legends: ['area', 'sub', 'tecnologia'],
    checkbox: [],
    data: [
      {
        Area: 'Backend',
        Sub: 'Banco de dados',
        Tecnologia: 'MongoDB',
        value: 1,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'NodeJS',
        Tecnologia: 'Oracle Database',
        value: 3,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Java',
        Tecnologia: 'Maven',
        value: 2,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Test',
        Tecnologia: 'Spring Framework',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Sistemas',
        Tecnologia: 'Spring MVC',
        value: 3,
        _rowVariant: ''
      },
      {
        Area: 'Frontend',
        Sub: 'Linguagem',
        Tecnologia: 'CSS',
        value: 2,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'NodeJS',
        Tecnologia: 'Oracle Database',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Java',
        Tecnologia: 'Maven',
        value: 1,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Test',
        Tecnologia: 'Spring Framework',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Sistemas',
        Tecnologia: 'Spring MVC',
        value: 3,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Banco de dados',
        Tecnologia: 'MongoDB',
        value: 1,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'NodeJS',
        Tecnologia: 'Oracle Database',
        value: 2,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Java',
        Tecnologia: 'Maven',
        value: 3,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Test',
        Tecnologia: 'Spring Framework',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Sistemas',
        Tecnologia: 'Spring MVC',
        value: 1,
        _rowVariant: ''
      },
      {
        Area: 'Frontend',
        Sub: 'Linguagem',
        Tecnologia: 'Javascript',
        value: 3,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'NodeJS',
        Tecnologia: 'Oracle Database',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Java',
        Tecnologia: 'Maven',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Test',
        Tecnologia: 'Spring Framework',
        value: 0,
        _rowVariant: ''
      },
      {
        Area: 'Backend',
        Sub: 'Sistemas',
        Tecnologia: 'Spring MVC',
        value: 0,
        _rowVariant: ''
      }
    ],
    fields: [
      { key: 'check' },
      { key: 'Area' },
      { key: 'Sub' },
      { key: 'Tecnologia' }
    ]
  })
}
</script>

<style lang="scss">
.modal-backdrop {
  opacity: 0.6
}
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
