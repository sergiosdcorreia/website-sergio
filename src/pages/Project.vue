<template>
  <q-page class="bg-page">
    <template
      v-if="!loadingProjects"
    >
      <div class="flex fit justify-center">
        <q-card
          class="my-card bg-grey-10 q-ma-md"
          bordered
          flat
        >
          <q-card-section>
            <div class="text-overline text-orange-9">{{ project.area }}</div>
            <div class="text-h5 text-white q-mt-sm q-mb-xs">{{ project.title }}</div>
            <div class="text-caption text-grey">
              {{ project.description }}
            </div>
          </q-card-section>
          <q-img
            :src="project.thumbnail"
          />
          <div v-if="project.image1">
            <q-img
              :src="project.image1"
            />
          </div>
          <div v-if="project.image2">
            <q-img
              :src="project.image2"
            />
          </div>
          <div v-if="project.image3">
            <q-img
              :src="project.image3"
            />
          </div>


          <!-- <q-card-actions>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </q-card-actions> -->

        </q-card>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center fit row wrap">
        <q-card flat class="skeleton-card q-ma-md q-pa-md col-sm-12 col-md-6">
          <q-skeleton height="350px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
        <q-card flat class="skeleton-card q-ma-md q-pa-md col-sm-12 col-md-6">
          <q-skeleton height="350px" square />

          <q-card-section>
            <q-skeleton type="text" class="text-subtitle1" />
            <q-skeleton type="text" width="50%" class="text-subtitle1" />
            <q-skeleton type="text" class="text-caption" />
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'Project',
  props: [
    'id'
  ],
  data() {
    return {
      projectId: this.$route.params.id,
      projects: [],
      loadingProjects: false
    }
  },
  computed: {
    project() {
      return this.projects.find(
        project => project.id === this.projectId
      )
    }
  },
  methods: {
    getProjects() {
      this.loadingProjects = true
      this.$axios.get(`${ process.env.API }/projects`).then(response => {
        this.projects = response.data
        this.loadingProjects = false
      }).catch(err => {
        this.$q.dialog({
          title: 'Error',
          message: 'Could not download projects.'
        })
        this.loadingProjects = false
      })
    },
    //getProject(id) {
    //  return this.projects.find(project => project.id === id)
    //}
  },
  created() {
    this.getProjects()
  }
}
</script>

<style lang="sass" scoped>
.bg-page
  background-color: #27282B
.page-title
  height: 80vh
.my-card
  background-color: #24272B
  width: 100%
  max-width: 1200px
  height: fit-content
.skeleton-card
  width: 100%
  max-width: 1200px
</style>
