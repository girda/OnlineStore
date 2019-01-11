<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel
            delimiter-icon="stop"
            prev-icon="mdi-arrow-left"
            next-icon="mdi-arrow-right"
          >
            <v-carousel-item
              contain
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="(product, i) in products"
          :key="i"
        >
          <v-card class="cart">
            <router-link
              :aria-label="product.title"
              :to="'/product/' + product.id"
            >
              <v-img
                :src="product.imageSrc"
                height="250px"
              ></v-img>
            </router-link>

            <v-card-title primary-title>
              <div>
                <h3 class="cart__title">{{ product.title }}</h3>
                <div class="cart__descrabe">
                  <p class="cart__description">{{ product.description.substring(0, 60) }}...</p>
                  <span class="cart__price">Price: ${{ product.price }}</span>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" :to="'/product/' + product.id">Description</v-btn>
              <v-btn flat color="orange">Add to cart</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
export default {
  computed: {
    promoProducts () {
      return this.$store.getters.promoProducts
    },
    products () {
      return this.$store.getters.products
    }
  }
}
</script>

<style lang="sass" scoped>
.cart

</style>
