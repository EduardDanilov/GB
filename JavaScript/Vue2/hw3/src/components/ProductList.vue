<template>
    <div class="prodlist">
        <div class="name">{{ product.name }}</div>
        <div class="price">{{ formattedPrice }}</div>
        <div class="isavailable">
            {{ product.isAvailable ? "Available" : "Out of stock" }}
        </div>
    </div>
</template>
<script>
export default {
  name: 'ProductList',
  props: {
    product: {
    //   type: Object,
    //   required: true
    }
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      return formatter.format(this.product.price);
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
