const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
    };
  },
  methods: {
    updatedCart(id) {
      this.cart.push(id);
    },
  },
});
