<template>
  <div class="row mt-5">
    <div v-for="product in products" :key="product.id" class="col-lg-3 mb-4">
      <div class="card h-100">
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p>{{ product.brand }}</p>
          <RouterLink class="btn btn-primary" :to="'/' + product.id">Product Details</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'ProductsList',
  components: {
    RouterLink
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>
