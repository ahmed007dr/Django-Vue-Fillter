<template>
    <div class="container px-3">
      <form>
        <div>
          <label for="brandfilter" class="form-label">Filter by brand</label>
          <div v-for="brand in brands" :key="brand.id" class="checkbox-item">
            <input 
              type="checkbox"
              :value="brand.id"
              :id="'brand-' + brand.id"
              class="form-check-input" 
              v-model="selectedBrands"
            >
            <label :for="'brand-' + brand.id" class="form-label">{{ brand.name }}</label>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BrandFilter',
    data() {
      return {
        brands: [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'iPhone' },
          { id: 3, name: 'Samsung' }
        ],
        selectedBrands: []
      };
    },
    watch: {
      selectedBrands() {
        this.$emit('brands-updated', this.selectedBrands);
      }
    }
  }
  </script>
  
  <style>
  .checkbox-item {
    margin-bottom: 8px;
  }
  .checkbox-item input[type='checkbox'] {
    margin-right: 10px;
  }
  </style>
  