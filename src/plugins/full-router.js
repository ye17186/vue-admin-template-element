const initFullRouters = function () {
  return {
    path: '/a',
    name: 'Admin',
    component: () => import('../components/yc/YcLayout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/admin/Home'),
        meta: {
          title: '首页',
          icon: 'el-icon-exp-home',
          hidden: true
        }
      }, {
        path: 'p1',
        name: 'Page1',
        component: () => import('../views/admin/page1/Page1'),
        meta: {
          title: 'Page1',
          icon: 'el-icon-setting'
        }
      }, {
        path: 'p2',
        name: 'Page2',
        component: () => import('../views/admin/EmptyPage'),
        meta: {
          title: 'Page2',
          icon: 'el-icon-exp-account'
        },
        children: [
          {
            path: 'p2-1',
            name: 'Page2-1',
            component: () => import('../views/admin/page2/page2-1/Page2-1'),
            meta: {
              title: 'Page2-1',
              icon: 'el-icon-exp-usergroup',
              authCode: 'B'
            }
          }, {
            path: 'p2-Detail/:detailId',
            name: 'Page2-Detail',
            component: () => import('../views/admin/page2/page2-1/SubDetail'),
            meta: {
              title: 'Page2-Detail',
              icon: 'el-icon-setting',
              hidden: true
            }
          }, {
            path: 'p2-2',
            name: 'Page2-2',
            component: () => import('../views/admin/page2/Page2'),
            meta: {
              key: 'Page2-2',
              title: 'Page2-2',
              icon: 'el-icon-exp-usergroup',
              authCode: 'A'
            }
          }
        ]
      }
    ]
  }
}

export function getFullRouters () {
  return initFullRouters()
}
