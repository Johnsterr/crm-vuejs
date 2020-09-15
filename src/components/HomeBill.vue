<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>
        <!-- Вывод списка валют -->
        <p
          v-for="cur of currencies"
          :key="cur"
          class="currency-line">
          <span>
            {{getCurrency(cur) | currency(cur)}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    // Объект интересующих валют
    currencies: ['RUB', 'USD', 'EUR']
  }),
  computed: {
    base () {
      // Приводим базовую валюту к рублям
      // eslint-disable-next-line dot-notation
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency (currency) {
      // Производим вычесления относительно рубля и других валют
      return this.base * this.rates[currency]
    }
  }
}
</script>
