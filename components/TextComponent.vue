<template>
  <div>
    <p>{{ textStrings }}</p>
  </div>
</template>
<script>
export default {
  props: {
    textStrings: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
p {
  font-family: InputMonoCondensed;
  font-size: 1.1rem;
  word-wrap: break-word;
  line-height: 30px;
}
</style>
