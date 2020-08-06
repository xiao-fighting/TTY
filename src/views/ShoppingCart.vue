<template lang="pug">
  #shoppingCart
    h3.text-center.py-5 購物車
    b-table(:items="cart" :fields="fields")(class="text-center")
      template(v-slot:cell(action)="data")
        b-btn(variant="danger" @click="delCart(data.index)") 刪除
    h5.text-center 總共{{cart.length}} 個商品
    h5.text-center 總共{{ totalPrice}} 元

</template>

<script>
export default {
  name: 'shoppingCart',
  data () {
    return {
      fields:
      [
        {
          key: 'name',
          label: '商品'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'acount',
          label: '數量'
        },
        {
          key: 'action',
          label: ''
        },
        {
          key: 'total',
          label: '金額'
        }
      ]
    }
  },
  computed: {
    cart () {
      // 以 getters 取得資料
      return this.$store.getters.cart
    },
    totalPrice () {
      let price = 0
      for (const item of this.cart) {
        price += item.price
      }
      return price
    }
  },
  methods: {
    delCart (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>
