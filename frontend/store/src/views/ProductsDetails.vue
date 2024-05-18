<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="col-lg-6">
        <h2>{{ product.name }}</h2>
        <p>{{ product.brand }}</p>
        <p>{{ product.price }}</p>
        <form method="post" class="row mt-4">
          <div class="col-lg-6">
            <input type="number" value="1" class="form-control">
          </div>
          <div class="col-lg-6">
            <button class="btn btn-success d-block" type="button">Add to Cart</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from '@/temp-data';

export default {
  name: 'ProductDetailPage',
  data() {
    return {
      product: this.getProduct()
    };
  },
  watch: {
    '$route.params.productId': 'updateProduct'
  },
  methods: {
    getProduct() {
      return products.find(product => product.id == this.$route.params.productId);
    },
    updateProduct() {
      this.product = this.getProduct();
    }
  }
}
</script>
