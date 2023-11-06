<template>
    <div class="prodlist">
        <div class="name">{{ product.name }}</div>
        <div class="price">{{ product.price }}</div>
        <div class="isavailable">{{ product.isAvailable ? 'Available' : 'Out of stock' }}</div>
    </div>
</template>
<script>
export default {
  name: 'ProductList',
  props: {
    product: {
      type: Object,
    }
  },
  methods: {
    sortUp () {
      this.productList = this.productList.sort((a, b) =>
        a.price > b.price ? 1 : -1)
    },
    sortDown () {
      this.productList = this.productList.sort((a, b) =>
        a.price < b.price ? 1 : -1)
    }
  }
}
</script>
<style>
.prodlist {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
}
</style>