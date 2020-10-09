<template>
  <div class="home">
    <Emoji altcode="🤙🏼"/>
    <Title msg="Welcome"/>
    <div class="introduction">
      Call park out she wife face mean. Ye show done an into. Fifteen winding related may hearted colonel are way studied. Meet shew or said like he. Valley silent cannot things so remain oh to elinor. Far merits season better tended any age hunted.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/HelloWorld.vue'
import Emoji from "@/components/Emoji";

export default {
  name: 'Home',
  components: {
    Emoji,
    Title
  }
}
</script>

<style scoped lang="scss">
.home {

  .big-emoji:hover {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .introduction {
    max-width: 70%;
    margin: auto;
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0) rotate(-10deg);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0) rotate(-10deg);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0) rotate(-10deg);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0) rotate(0);
  }
}
</style>