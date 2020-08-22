<template>
  <div class="row">
    <div class="col-12 shadow">
      <b-card>
        <h4 class="card-title">Gurus</h4>

        <b-table
          bordered
          responsive
          head-variant="light"
          :items="data"
          :fields="fields"
          ticky-header="200px"
          tbody-tr-class="info"
        >

        <template v-slot:cell(Gurus)>
          <a href="#">mostrar</a>
        </template>
        </b-table>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: 0,
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
      { key: 'Gurus' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.sub-item {
  background-color: #d4edda;
  color: #155724;
  border-bottom: 2px solid red;
}
</style>
