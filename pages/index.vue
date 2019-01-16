<template>
  <div class="flex items-center">
    <section class="w-1/2 bg-library relative">
      <img align="Dublin City" class="bg-dublin" src="~assets/bg.jpg">
      <div class="w-full h-full flex items-center justify-center min-h-screen">
        <a
          class="mx-auto block flex flex-col items-center justify-center no-underline"
          href="https://www.meetup.com/DublinVueJS/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Logo class="h-screen-2/3" />
        </a>
      </div>
    </section>
    <section class="w-1/2">
      <div class="px-10 text-center">
        <h1 class="text-5xl font-normal py-8 mb-8">
          <span class="font-bold text-blue" v-text="'Welcome'" /> to VueJS Dublin.
        </h1>
        <p class="text-2xl font-normal py-6">
          We are a group for anyone interested in Vue.js and the ecosystem around it. Usually, we try to host one event
          per month. More details can be found on our
          <a
            class="underline inline-block"
            href="https://www.meetup.com/DublinVueJS/"
            rel="noreferrer noopener"
            target="_blank"
            v-text="'meetup.com page'"
          />.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/assets/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .bg-dublin:hover {
    filter: grayscale(10%);
    transition: all 1s;
  }

  .bg-dublin {
    @apply

    .absolute .w-full .h-full
  ;
    object-fit: cover;
    filter: grayscale(66%);
    transform: scaleX(-1); /* TODO: Just swap the image around */
    transition: all 1s;
  }
</style>
