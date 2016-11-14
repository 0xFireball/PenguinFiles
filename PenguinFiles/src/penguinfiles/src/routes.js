
import Landing from './layouts/Landing'
import FilesPlace from './layouts/FilesPlace'

const main = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/landing',
    redirect: '/'
  },
  {
    path: '/files',
    name: 'files-places',
    component: FilesPlace
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
