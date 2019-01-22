<template>
  <div class="flex flex-col md:flex-row items-center">
    <section class="w-full md:w-1/2 bg-library relative">
      <img align="Dublin City" class="bg-dublin transition-all-1000" src="~assets/bg.jpg">
      <div class="w-full h-full flex items-center justify-center min-h-screen-1/2 md:min-h-screen">
        <a
          class="mx-auto block flex flex-col items-center justify-center no-underline"
          href="https://www.meetup.com/DublinVueJS/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <Logo class="max-h-screen-2/3 w-full" />
        </a>
      </div>
    </section>
    <section class="md:w-1/2 min-h-screen-1/2 md:min-h-screen flex items-center justify-center">
      <div class="px-10">
        <h1 class="text-4xl md:text-5xl font-normal pt-8 md:py-8">
          <span class="font-bold text-blue" v-text="'Welcome'" /> to VueJS Dublin.
        </h1>
        <p class="text-lg md:text-xl font-normal py-6 mb-4 md:my-8">
          We are VueJS meet up that meets once a month, for more details on the meet-ups
          you can find more information on our
          <a
            class="underline inline-block"
            href="https://www.meetup.com/DublinVueJS/"
            rel="noreferrer noopener"
            target="_blank"
            v-text="'meetup.com page'"
          />.
        </p>

        <div class="mb-8 md:mb-0">
          <a
            class="inline-block rounded-full px-4 py-2 bg-vue hover:bg-green transition-all-250 shadow-lg hover:shadow-none text-white no-underline text-xl mr-4"
            href="https://www.meetup.com/DublinVueJS/"
            rel="noreferrer noopener"
            target="_blank"
            v-text="'Join us'"
          />

          <a
            class="inline-block rounded-full px-4 py-2 bg-blue hover:bg-blue-light transition-all-250 shadow-md hover:shadow-none text-white no-underline text-xl"
            href="https://github.com/vuejs-dublin/talks"
            rel="noreferrer noopener"
            target="_blank"
            v-text="'Submit a talk'"
          />
        </div>
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

<style scoped>
  *:hover > .bg-dublin {
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
  }
</style>
