<template>
  <div id="grid">
  </div>
</template>
<script>
const $ = window.$
export default {
  data () {
    return {
      dataResource: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.oltable()
    })
  },
  created () {
    let data = [
      {
        business: 'thinkT',
        CAOL: 88,
        ConfirmOL: 67,
        Oct: 355,
        Nov: 155,
        Dec: 78,
        Q3: 3333,
        updateTime: new Date().toLocaleDateString(),
        updatePerson: 'zcy',
        CAOL1: 74,
        ConfirmOL1: 444
      },
      {
        business: 'thinkT2',
        CAOL: 43,
        ConfirmOL: 17,
        Oct: 200,
        Nov: 80,
        Dec: 76,
        Q3: 232,
        updateTime: new Date().toLocaleDateString(),
        updatePerson: 'zcy',
        CAOL1: 23,
        ConfirmOL1: 313
      },
      {
        business: 'thinkT2',
        CAOL: 43,
        ConfirmOL: 17,
        Oct: 200,
        Nov: 80,
        Dec: 76,
        Q3: 232,
        updateTime: new Date().toLocaleDateString(),
        updatePerson: 'zcy',
        CAOL1: 23,
        ConfirmOL1: 323
      },
      {
        business: 'thinkT3',
        CAOL: 88,
        ConfirmOL: 57,
        Oct: 89,
        Nov: 13,
        Dec: 22,
        Q3: 232,
        updateTime: new Date().toLocaleDateString(),
        updatePerson: 'zcy',
        CAOL1: 314,
        ConfirmOL1: 32256
      }
    ]
    this.dataResource = data.map(item => {
      item.Q3 = (+item.Oct) + (+item.Nov) + (+item.Dec)
      return item
    })
    // console.log(this.dataResource)
  },
  methods: {
    oltable () {
      let vm = this
      $('#grid').kendoGrid({
        toolbar: ['excel', 'save', 'cancel'],
        sortable: true,
        columnMenu: true,
        filterable: true,
        resizable: true,
        width: '800px',
        editable: true,
        reorderable: true,
        pageable: {
          pageSize: 8,
          numeric: true
        },
        columns: [
          {
            title: '业务线',
            field: 'business'
          },
          {
            title: '营销目标',
            columns: [
              { field: 'Oct' },
              { field: 'Nov' },
              { field: 'Dec' },
              { field: 'Q3' }
            ]
          },
          {
            title: '月度OL',
            columns: [
              {
                title: 'CA OL',
                field: 'CAOL'
              },
              {
                title: 'Confirm OL',
                field: 'ConfirmOL'
              }
            ]
          },
          {
            title: '季度OL',
            columns: [
              {
                title: 'CA OL',
                field: 'CAOL1'
              },
              {
                title: 'Confirm OL',
                field: 'ConfirmOL1'
              }
            ]
          },
          {
            title: '更新人',
            field: 'updatePerson',
            editable: (item) => !item.updatePerson
          },
          {
            title: '更新时间',
            field: 'updateTime',
            editable: (item) => !item.updateTime
          }
        ],
        dataSource: vm.dataResource,
        // scrollable: true,
        excel: {
          fileName: '新增family.xlsx'
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
