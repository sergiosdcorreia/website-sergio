<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!--
        <q-avatar class="q-ml-md">
          <img src="SergioFoto200.png">
        </q-avatar>

        <q-toolbar-title>
          Sérgio Correia
        </q-toolbar-title>
        -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="text-grey-1"
      show-if-above
      bordered
      content-class="bg-grey-10"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-1"
        >
          Menu
        </q-item-label>
        <q-item
          to="/"
          active-class="menu-active"
          class="text-grey-1"
          clickable
          exact
        >
          <q-item-section
            avatar
          >
            <q-icon name="home" color="grey-1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          to="/photography"
          active-class="menu-active"
          class="text-grey-1"
          clickable
        >
          <q-item-section
            avatar
          >
            <q-icon name="camera" color="grey-1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Photo Gallery</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          to="/whoishe"
          active-class="menu-active"
          class="text-grey-1"
          clickable
        >
          <q-item-section
            avatar
          >
            <q-icon name="account_box" color="grey-1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Who Is He?</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          to="/about"
          active-class="menu-active"
          class="text-grey-1"
          clickable
        >
          <q-item-section
            avatar
          >
            <q-icon name="info" color="grey-1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="sass">
  .menu-active
    color: #FF824A !important
  .q-layout__section--marginal
    background-color: #27282B
</style>