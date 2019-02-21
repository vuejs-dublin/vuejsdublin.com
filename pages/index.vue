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
          We'd like to wish you a warm welcome to VueJS Dublin!<br><br>
          VueJS Dublin is a community-focused meetup whose aim is to promote Vue.js and its ecosystem.
          We are always looking for speakers or interesting topics people want to know more about.<br>
          Our goal is to have regular meetups suited for newcomers, as well as more experienced developers, 
          to learn, talk and share experiences.
          <br><br>
          We look forward to seeing you.
        </p>

        <div class="my-4 md:my-8">
          <h2 class="pb-4">
            Next Meetup: "{{ $options.meetup.name }}"
          </h2>
          <div class="flex items-center pb-2 mb-2 md:my-4">
            <h3>When? </h3>
            <time class="ml-4 text-grey-darkest" :datetime="$options.meetup.date.toISOString()">
              {{ $options.meetup.date.toLocaleString() }}
            </time>
          </div>
          <div class="flex items-center pb-2 mb-2 md:my-4">
            <h3>Where? </h3>
            <address class="ml-2 text-grey-darkest font-normal" :datetime="$options.meetup.date.toISOString()">
              {{ $options.meetup.location }}
            </address>
          </div>
          <div class="flex items-center pb-2 mb-2 md:my-4">
            <h3 class="mr-5">
              What?
            </h3>
            <p v-if="$options.meetup.topics.includes('To be announced')">
              To be announced! Why don't <strong>you</strong> submit a talk?
            </p>
            <ul v-else>
              <li v-for="topic in $options.meetup.topics" :key="topic" v-text="topic" />
            </ul>
          </div>
        </div>

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
import meetups from '~/data/meetups.json'

export default {
  components: {
    Logo
  },
  meetup: meetups.map((m) => {
    m.date = new Date(m.date)
    return m
  })[0]
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
  }
</style>
