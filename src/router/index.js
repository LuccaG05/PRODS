import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriasView from '../views/CategoriasView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import CadastroCategoriaView from '../views/CadastroCategoriaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriasView
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosView
    },
    {
      path: '/cadastroCategoria',
      name: 'cadastroCategoria',
      component: CadastroCategoriaView
    }
  ]
})

export default router
