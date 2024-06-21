<script>
export default {
  props: ['cardsList'],
  data() {
    return {
      probability: ''
    }
  },
  methods: {
    calculator() {
      this.probability = 0;
      let total = 40;
      let hand_total = 5
      this.probability = this.probabilityGroupInHand(total, hand_total, this.cardsList.length) * 100
    },

    probabilityGroupInHand(t, h, group) {
      const totalWays = this.combination(t, h);
      const favorableWays = this.combination(t - group, h - group);

      return favorableWays / totalWays;
    },

    combination(n, r) {
      return this.factorial(n) / (this.factorial(r) * this.factorial(n - r));
    },

    factorial(n) {
      if (n === 0 || n === 1) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    },
  }
}
</script>
<template>
      <div @click="calculator">Ready? Go!</div>
      <div v-if="probability">
      {{probability}}
      </div>
</template>