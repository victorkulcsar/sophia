<template>
  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Conhecimentos</h4>

            <b-table
              bordered
              outlined
              responsive
              head-variant="light"
              :items="data"
              :fields="fields"
              :tbody-tr-class="rowClass"
              ticky-header="200px"
            >
              <template v-slot:cell(Conhecimento)="item" s>
                <b-form-spinbutton
                  class="spinbutton_skill"
                  id="sb-days"
                  v-model="item.item.value"
                  :formatter-fn="skillCheck"
                  min="0"
                  max="3"
                />
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    skillCheck (value) {
      return this.skill[value]
    },
    rowClass (item, type) {
      item._rowVariant = this.class[item.value]
    }
  },
  data: () => ({
    value: 0,
    skill: ['Não sei', 'Sei Pouco', 'Sem Bem', 'Domino'],
    class: ['danger', 'warning', 'primary', 'success'],
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
      { key: 'Area' },
      { key: 'Sub' },
      { key: 'Tecnologia' },
      { key: 'Conhecimento' }
    ]
  })
}
</script>

<style scoped lang="scss">
.modelo {
  background: red
}
.spinbutton_skill {
  background: white;
  width: 170px;
  text-align: center;
  font-family: "Poppins",sans-serif;
  border-radius: 20px;

}
</style>
