<template>
  <div class="big-emoji">
    {{ altcode }}
  </div>
</template>

<script>
export default {
  name: 'Emoji',
  props: {
    altcode: String
  }
}
</script>

<style lang="scss">
  .big-emoji {
    display: inline-block;
    font-size: 100px;
  }
</style>