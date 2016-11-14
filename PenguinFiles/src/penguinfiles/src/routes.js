
import Landing from './layouts/Landing'

const main = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/landing',
    redirect: '/'
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Landing // Use Error404
  }
]

export default [].concat(main, error)
