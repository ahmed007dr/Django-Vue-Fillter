<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <FilterProducts @brands-updated="updateFilteredProducts" />
      </div>
      <div class="col-lg-9">
        <ProductsList :products="filteredProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import FilterProducts from '@/components/FilterProducts.vue'; 
import { products } from '@/temp-data';

export default {
  name: 'ProductsPage',
  components: {
    ProductsList,
    FilterProducts
  },
  data() {
    return {
      products: products,
      filteredProducts: products
    };
  },
  methods: {
    updateFilteredProducts(selectedBrands) {
      this.filteredProducts = selectedBrands.length === 0
        ? this.products
        : this.products.filter(product => selectedBrands.includes(product.brand));
    }
  }
}
</script>
