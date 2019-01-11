<template>
  <v-container>
    <section class="product mb-3 elevation-10">
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <img :src="product.imageSrc" class="product__img">
        </v-flex>
        <v-flex xs12 lg6>
          <div class="product__info">
            <h3 class="product__title mb-3 mt-3">{{ product.title }}</h3>
            <p class="product__category">
              <span class="product__subtitle">Vendor: </span>{{ product.vendor.charAt(0).toUpperCase() + product.vendor.substr(1) }}
            </p>
            <p class="product__price">
              <span class="product__subtitle">Price: </span>$ {{ product.price }}
            </p>
            <p class="product__color">
              <span class="product__subtitle">Color: </span>
              <span
                :title="product.color"
                :style="{ backgroundColor: product.color }"
                class="product__color--bg"
              ></span>
            </p>
            <p class="product__matirial">
              <span class="product__subtitle">Material: </span>{{ product.material.charAt(0).toUpperCase() + product.material.substr(1) }}
            </p>
            <div class="mb-5">
              <p class="product__subtitle mb-2">Description: </p>{{ product.description }}
            </div>
            <v-btn color="primary">Edit</v-btn>
            <v-btn color="primary">Buy</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product () {
      const id = this.id
      return this.$store.getters.productById(id)
    }
  }
}
</script>

<style lang="sass" scoped>
.product
  display: flex
  align-items: center
  flex-wrap: wrap
  border: 1px solid #1c77ad
  padding: 30px
  margin-bottom: 100px
  &__img
    height: 100%
    width: 550px
    object-fit: contain
  &__info
    margin-left: 50px
    font-size: 20px
    font-weight: 700
  &__title
    font-size: 30px
    color: #1875d0
  &__subtitle
    font-size: 24px
    color: #1875d0
  &__price
    color: red
  &__color
    &--bg
      display: inline-block
      width: 50px
      height: 20px
      border: 1px solid #2b2b2b
      border-radius: 10px

</style>
