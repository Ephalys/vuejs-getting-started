<template>
  <div class="modal__wrapper">
    <div class="overlay"></div>
    <div class="modal" ref="modal">
      <slot></slot>
      <div class="btn__wrapper">
        <Button :event="closeModal" text="Ok"/>
      </div>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Button from "@/components/Button";
export default {
  components: {Button},
  props: {
    closeModal: Function
  },
  mounted() {
      disableBodyScroll(this.$refs.modal);
  },
  beforeDestroy() {
    enableBodyScroll(this.$refs.modal);
  }
}
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, .6);
  z-index: 2;
}
.modal {
  position: fixed;
  z-index: 3;
  background-color: white;
  top: 50%;
  left: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
</style>