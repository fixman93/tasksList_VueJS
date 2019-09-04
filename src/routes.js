import Home from './pages/Home.vue'
import ListDetails from './pages/ListDetails.vue'
export const routes = [
  { path: '/', component: Home },
  { path: '/listDetails/:id', component: ListDetails }
]