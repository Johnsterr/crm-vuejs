<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <!-- Загрузчик до момента получения данных -->
    <Loader v-if="loading" />

    <!-- Блок с информацией после получения данных -->
    <div v-else class="row">
      <!-- Состояние счета -->
      <HomeBill
        :rates="currency.rates"
      />
      <!-- Курс валют -->
      <HomeCurrency
        :rates="currency.rates"
        :date="currency.date"
      />
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'Home',
  metaInfo () {
    return {
      title: this.$title('Page_Home')
    }
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted () {
    // Получение данных о курсе валют
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  methods: {
    async refresh () {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  components: {
    HomeBill, HomeCurrency
  }
}
</script>
