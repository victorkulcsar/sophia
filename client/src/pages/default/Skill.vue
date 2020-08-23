<template>
  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card shadow">
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

              <template v-slot:cell(Conhecimento)="item">
                <b-form-spinbutton
                  class="spinbutton_skill"
                  id="sb-days"
                  v-model="item.item.value"
                  :formatter-fn="skillCheck"
                  min="0"
                  max="3"
                  @input="changeKnowledge(item)"
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
import knowledgeApi from '../../api/knowledgeApi'

export default {
  methods: {
    skillCheck (value) {
      return this.skill[value]
    },
    rowClass (item, type) {
      item._rowVariant = this.class[item.value]
    },
    async changeKnowledge ({ item }) {
      console.log(item)
      const { value, id } = item
      await knowledgeApi.setNewKnowledge({
        skill: value,
        id
      })
    }
  },
  async mounted () {
    const { data } = await knowledgeApi.getKnowledge()
    this.data = data
  },
  data: () => ({
    skill: ['Não sei', 'Sei Pouco', 'Sem Bem', 'Domino'],
    class: ['danger', 'warning', 'primary', 'success'],
    data: [],
    fields: [
      { key: 'Area' },
      { key: 'Sub' },
      { key: 'Tecnologia' },
      { key: 'Conhecimento', label: '' }
    ]
  })
}
</script>

<style scoped lang="scss">
.spinbutton_skill {
  background: white;
  width: 170px;
  text-align: center;
  font-family: "Poppins",sans-serif;
  border-radius: 20px;

}
</style>
