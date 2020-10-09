<template>
  <div class="contact__form">
    <transition name="fade">
      <Modal :closeModal="closeModal" v-show="isModalVisible" ref="modal">
        <p>Thanks{{this.name ? ' ' + this.name : ''}}, your message has been sent.</p>
      </Modal>
    </transition>
    <div class="contact__form-intro">
      <h1>Hey! Wanna hangout tonight ?<br/>
        Don't hesitate to drop me a message.</h1>
    </div>
    <form action="">
      <div class="form-group">
        <Label for="name">Full Name</Label>
        <input type="text" id="name" placeholder="John Doe" v-model="name">
      </div>
      <div class="form-group">
        <Label for="email">Email Address</Label>
        <input type="email" id="email" placeholder="John" v-model="email">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="4" placeholder="Hey! Wanna hangout tonight ?" v-model="message"></textarea>
      </div>
      <div class="form-group">
        <Button text="Send" :event="sendForm"/>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal";
export default {
  components: {Button, Modal},
  data: function() {
    return {
      name: '',
      email: '',
      message: '',
      isModalVisible: false
    }
  },
  methods: {
    sendForm() {
      this.isModalVisible= true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.contact__form {
  display: flex;
  margin-top: 30px;

  &-intro {
    width: 50%;
    padding-right: 30px;
    text-align: left;
  }
  form {
    width: 50%;
    padding-left: 30px;

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }

      label {
        color: #737373;
        margin-bottom: 5px;
        font-size: 14px;
      }

      textarea {
        border: none;
        background-color: #FAFAFB;
        width: 100%;
        padding: 10px;
        font-size: 16px;
      }

      input {
        padding: 10px;
        background-color: #FAFAFB;
        border: none;
        font-size: 16px;

        &[type=text], &[type=email] {
          width: 100%;
        }

      }
    }
  }
}
</style>