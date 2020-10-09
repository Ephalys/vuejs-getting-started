<template>
  <div class="contact">
    <Emoji altcode="🙋🏻‍♂️"/>
    <ContactForm/>
  </div>
</template>
<script>
import Emoji from "@/components/Emoji";
import ContactForm from "@/components/ContactForm";
export default {
  components: {ContactForm, Emoji}
}
</script>
<style scoped lang="scss">
.contact {

}
</style>