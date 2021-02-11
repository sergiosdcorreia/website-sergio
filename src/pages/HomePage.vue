<template>
  <q-page class="bg-page">
    <div class="page-title flex flex-center row">
      <div class="col-12 col-md-4 q-px-md">
        <p class="text-white text-h4 text-weight-bold">Sérgio Correia is a creative frontend developer, who builds a better web</p>
        <p class="text-white text-subtitle1">Sometimes he also takes photographs, feel free to fork some code or get in touch to build <b>sergiosdcorreia@gmail.com</b></p>
      </div>
    </div>
    <template
      v-if="!loadingProjects"
    >
      <div class="flex fit row wrap justify-center">
        <q-card
          v-for="project in projects"
          :key="project.id"
          class="my-card bg-grey-10 q-ma-md col-sm-12 col-md-6"
          bordered
          flat
        >
          <q-img
            :src="project.thumbnail"
          />

          <q-card-section>
            <div class="text-overline text-orange-9">{{ project.area }}</div>
            <div class="text-h5 text-white q-mt-sm q-mb-xs">{{ project.title }}</div>
            <div class="text-caption text-grey">
              {{ project.description }}
            </div>
          </q-card-section>

          <!-- <q-card-actions>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </q-card-actions> -->

          <q-card-actions>
            <q-btn
              :to="{name: 'project', params: { id: project.id }}"
              color="primary"
              label="View project"
              flat
              append
            />
          </q-card-actions>
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
  name: 'HomePage',
  data() {
    return {
      projects: [],
      loadingProjects: false
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
    }
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
  max-width: 350px
  height: fit-content
.skeleton-card
  width: 100%
  max-width: 350px
</style>