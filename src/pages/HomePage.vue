<template>
  <q-page class="flex flex-center bg-grey-10">
    <div>
      <p class="text-white text-h3">Sergio Correia</p>
      <p class="text-white text-h5">Creative Frontend Developer</p>
    </div>
    <q-card class="my-card q-mt-lg" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Design</div>
        <div class="text-h5 q-mt-sm q-mb-xs">San Francisco</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="View project" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card q-mt-lg" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Development</div>
        <div class="text-h5 q-mt-sm q-mb-xs">San Francisco</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="View project" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      expanded: false
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>