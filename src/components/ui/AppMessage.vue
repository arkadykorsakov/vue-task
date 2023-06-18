<template>
  <div :class="['alert', message.type]" v-if="message">
    <p class="alert-title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['message']),
    title() {
      const TITLE_MAP = {
        primary: 'УСПЕХ',
        danger: 'ОШИБКА',
        warning: 'ПРЕДУПРЕЖДЕНИЕ'
      }
      return this.message ? TITLE_MAP[this.message.type] : null
    }
  },
  methods: {
    close() {
      this.$store.commit('clearMessage')
    }
  }
}
</script>

<style></style>
