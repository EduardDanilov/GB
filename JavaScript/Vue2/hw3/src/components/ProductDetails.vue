<template>
    <div>
        <ProductList v-for="product in productList" :key="product.id" :product="product"/>
    </div>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
    name: "ProductDetails",
    components: {
        ProductList
    },
    data () {
    return {
      productList: [
        {
          id: 0,
          name: 'milk',
          price: 10,
          isAvailable: true
        },
        {
          id: 1,
          name: 'sugar',
          price: 20,
          isAvailable: false
        },
        {
          id: 2,
          name: 'phone',
          price: 50,
          isAvailable: true
        },
        {
          id: 3,
          name: 'car',
          price: 500000,
          isAvailable: true
        }
      ]
    }
  }
};
</script>
