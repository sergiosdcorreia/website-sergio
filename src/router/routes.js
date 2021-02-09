
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/HomePage.vue') },
      { path: '/photography', component: () => import('pages/PhotoGallery.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/project/:id', name: "project", component: () => import('pages/Project.vue'), props: true }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
