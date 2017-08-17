import cloud from './demo/cloud/route'
import osp from './demo/osp/route'

const test = r => require.ensure([], () => r(require('demo/test/test')), 'test')
const tabel =  r => require.ensure([], () => r(require('demo/test/table1')), 'test')
const tabelDemo =  r => require.ensure([], () => r(require('demo/table/table')), 'test')
const comTable =  r => require.ensure([], () => r(require('demo/owns/listTable/comperhensiveTable')), 'test')
const editTable = r => require.ensure([], () => r(require('demo/owns/listTable/editTable')), 'test')

export default[
  {
    path : '/',
    component : require('./module/index/index.vue'),
    children : [
      {
        name: 'Home',
        path: '',
        component: require('./module/index/home.vue')
      }, {
        name: 'Trouble',
        path: '/trouble',
        component: require('./module/trouble/trouble.vue')
      },{
        name: 'Trouble1',
        path: '/trouble/1',
        component: require('./module/trouble/trouble.vue')
      },{
        name: 'Trouble2',
        path: '/trouble/2',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'trouble1',
        path: '/trouble1',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble2',
        path: '/trouble2',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble3',
        path: '/trouble3',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble4',
        path: '/trouble4',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble11',
        path: '/trouble11',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble12',
        path: '/trouble12',
        component: require('./module/trouble/trouble.vue')
      }, {
        name: 'Trouble13',
        path: '/trouble13',
        component: require('./module/trouble/trouble.vue')
      },{
        path : '*',
        component : {
          template: '<div>not found</div>'
        }
      }
    ]
  }, {
    name : 'Login',
    path : '/login',
    component : require('./module/login/login.vue')
  }, {
    name : '管理门户示例',
    path : '/portal',
    component : require('./demo/portal/portal.vue')
  },  {
    name : 'table示例',
    path : '/demo-table',
    component : tabelDemo
  },
  {
    name : 'test',
    path : '/test',
    component : test
  },
  {
    name : 'table',
    path : '/table',
    component : tabel
  },
  {
    name : 'conperhensiveTable',
    path : '/comTable',
    component :  comTable
  },
  {
    name : 'editTable',
    path : '/edit-table',
    component : editTable
  },
  ...cloud, 
  ...osp, {
    path : '*',
    component : {
      template: '<div>not found</div>'
    }
  }
]
