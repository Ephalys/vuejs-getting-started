<template>
  <div class="contact__form">
    <transition name="fade">
      <Modal :closeModal="closeModal" v-if="isModalVisible" ref="modal">
        <p>Thanks{{this.name ? ' ' + this.name : ''}}, your message has been sent.</p>
      </Modal>
    </transition>
    <div class="contact__form-intro">
      <h1>Hey! Wanna hangout tonight ?<br/>
        Don't hesitate to drop me a message.</h1>
    </div>
    <form action="" @submit="sendForm" method="post" novalidate ref="form">
      <div v-if="errors.length" class="errors__wrapper">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
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
        <Button text="Send" type="submit"/>
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
      errors: [],
      name: '',
      email: '',
      message: '',
      isModalVisible: false
    }
  },
  methods: {
    sendForm(e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.message) {
        this.errors.push("Message required.");
      }
      if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      let data = {
        'name' : this.name,
        'email' : this.email,
        'message' : this.message
      }
      if (!this.errors.length) {
        console.log('Form send.')
        console.log(data)
        this.isModalVisible= true;
        this.resetForm();
      }
      e.preventDefault();
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.message = '';
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
  flex-wrap: wrap;
  margin-top: 30px;

  .errors__wrapper {
    text-align: left;
  }

  &-intro {
    width: 50%;
    padding-right: 30px;
    text-align: left;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
    }
  }
  form {
    width: 50%;
    padding-left: 30px;
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
    }

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