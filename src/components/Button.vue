<template>
  <button type="submit" class="btn btn-submit" @click="event">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    event: Function
  }
}
</script>

<style scoped lang="scss">
.btn {
  background-color: #42b983;
  color: white;
  border-radius: 10px;
  padding: 12px 25px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: background-color .3s;

  &:hover {
    background-color: #40ac7d;
    transition: background-color .3s;
  }
}
</style>