<template>
  <q-page class="flex flex-center bg-grey-10">
    <div>
      <p class="text-white text-h3">Sergio Correia</p>
      <p class="text-white text-h5">Creative Frontend Developer</p>
    </div>
    <template>
      <q-card
        v-for="project in projects"
        :key="project.id"
        class="my-card q-mt-lg"
        bordered
        flat
      >
        <q-img
          :src="project.thumbnail"
        />

        <q-card-section>
          <div class="text-overline text-orange-9">{{ project.area }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ project.title }}</div>
          <div class="text-caption text-grey">
            {{ project.description }}
          </div>
        </q-card-section>

        <q-card-actions>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
          </ul>
        </q-card-actions>

        <q-card-actions>
          <q-btn flat color="primary" label="View project" />
        </q-card-actions>
      </q-card>
    </template>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      projects: [
        {
          id: 1,
          thumbnail: 'https://cdn.quasar.dev/img/parallax2.jpg',
          area: 'Development',
          title: 'BelayCords',
          description: 'A website designed by Sergio Correia'
        },
        {
          id: 2,
          thumbnail: 'https://cdn.quasar.dev/img/parallax2.jpg',
          area: 'Development',
          title: 'BelayCords',
          description: 'A website designed by Sergio Correia'
        },
        {
          id: 3,
          thumbnail: 'https://cdn.quasar.dev/img/parallax2.jpg',
          area: 'Development',
          title: 'BelayCords',
          description: 'A website designed by Sergio Correia'
        },

      ],
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