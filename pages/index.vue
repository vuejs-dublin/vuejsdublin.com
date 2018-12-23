<template>
  <section class="flex flex-col items-center">
    <h1 class="text-5xl font-normal py-8 mb-8">
      VueJS Dublin Meetup
    </h1>
    <h2 class="text-2xl font-normal py-6">
      Full website is coming soon!
    </h2>
    <a class="mx-auto" href="https://www.meetup.com/DublinVueJS/" rel="noreferrer noopener" target="_blank">
      <Logo class="h-screen-2/3" />
    </a>
  </section>
</template>

<script>
import Logo from '~/assets/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>
