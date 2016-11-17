
import Landing from './layouts/Landing'
import FilesPlace from './layouts/FilesPlace'
import NotFound from './layouts/NotFound'

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
    component: NotFound
  }
]

export default [].concat(main, error)
