<template>
  <q-page class="page-title flex flex-center">
    <div class="flex flex-center page-height row">
      <div class="col-12 col-md-4 q-px-md">
          <p class="text-white text-h4 text-weight-bold">A self taught photographer</p>
          <p class="text-white text-subtitle1">He loves the feeling of pushing the camera's shutter button.</p>
      </div>
    </div>
    <div class="flex fit row wrap justify-center">
      <q-card
        v-for="photo in photos"
        :key="photo.id"
        class="my-card bg-grey-10 q-ma-md col-sm-12 col-md-6"
      >
        <q-card-section horizontal>
          <q-img
            :src="photo.imgUrl"
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h6 text-white">{{ photo.title }}</div>
          <div class="text-subtitle2 text-grey">{{ photo.description }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
    return {
      photos: [],
      loadingPhotos: false
    }
  },
  methods: {
    getPhotos() {
      this.loadingPhotos = true
      this.$axios.get(`${ process.env.API }/photos`).then(response => {
        this.photos = response.data
        this.loadingPhotos = false
      }).catch(err => {
        this.$q.dialog({
          title: 'Error',
          message: 'Could not download photos.'
        })
        this.loadingPhotos = false
      })
    }
  },
  created() {
    this.getPhotos()
  }
}
</script>

<style lang="sass" scoped>
.page-title
  background-color: #24272B
.page-height
  height: 80vh
.my-card
  width: 100%
  max-width: 300px
  height: fit-content
</style>