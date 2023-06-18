<template>
  <div class="card">
    <h1 class="card-title">
      {{ title }}
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  },
  mounted() {
    document.title = `${this.title} | Vue Task`
  }
}
</script>

<style></style>
