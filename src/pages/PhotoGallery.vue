<template>
  <q-page class="flex flex-center bg-grey-10">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Golden Gate</div>
        <div class="text-subtitle2">by Sérgio Correia</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PhotoGallery'
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>