const initFullRouters = function () {
  return {
    path: '/a',
    name: 'Admin',
    component: () => import('../../components/layout/YcLayout'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../../views/admin/Home'),
        meta: {
          title: '首页',
          icon: 'el-icon-exp-home',
          hidden: true
        }
      }, {
        path: 'example',
        name: '组件示例',
        component: () => import('../../views/admin/EmptyPage'),
        meta: {
          title: '组件示例',
          icon: 'el-icon-s-grid'
        },
        children: [
          {
            path: 'basic',
            name: 'Basic',
            component: () => import('../../views/admin/EmptyPage'),
            meta: {
              title: 'Basic',
              icon: 'el-icon-c-scale-to-original'
            },
            children: [
              {
                path: 'layout',
                name: 'Layout',
                component: () => import('../../views/admin/example/basic/Layout'),
                meta: {
                  title: 'Layout',
                  icon: 'el-icon-document-copy'
                }
              }, {
                path: 'container',
                name: 'Container',
                component: () => import('../../views/admin/example/basic/Container'),
                meta: {
                  title: 'Container',
                  icon: 'el-icon-document'
                }
              }, {
                path: 'icon',
                name: 'Icon',
                component: () => import('../../views/admin/example/basic/Icon'),
                meta: {
                  title: 'Icon',
                  icon: 'el-icon-finished'
                }
              }, {
                path: 'button',
                name: 'Button',
                component: () => import('../../views/admin/example/basic/Button'),
                meta: {
                  title: 'Button',
                  icon: 'el-icon-search'
                }
              }, {
                path: 'link',
                name: 'Link',
                component: () => import('../../views/admin/example/basic/Link'),
                meta: {
                  title: 'Link',
                  icon: 'el-icon-link'
                }
              }
            ]
          }, {
            path: 'form',
            name: 'Form',
            component: () => import('../../views/admin/EmptyPage'),
            meta: {
              title: 'Form',
              icon: 'el-icon-film'
            },
            children: [
              {
                path: 'radio',
                name: 'Radio',
                component: () => import('../../views/admin/example/form/Radio'),
                meta: {
                  title: 'Radio',
                  icon: 'el-icon-open'
                }
              }, {
                path: 'checkbox',
                name: 'Checkbox',
                component: () => import('../../views/admin/example/form/Checkbox'),
                meta: {
                  title: 'Checkbox',
                  icon: 'el-icon-document-checked'
                }
              }, {
                path: 'input',
                name: 'Input',
                component: () => import('../../views/admin/example/form/Input'),
                meta: {
                  title: 'Input',
                  icon: 'el-icon-edit'
                }
              }, {
                path: 'input-number',
                name: 'InputNumber',
                component: () => import('../../views/admin/example/form/InputNumber'),
                meta: {
                  title: 'InputNumber',
                  icon: 'el-icon-edit-outline'
                }
              }, {
                path: 'select',
                name: 'Select',
                component: () => import('../../views/admin/example/form/Select'),
                meta: {
                  title: 'Select',
                  icon: 'el-icon-scissors'
                }
              }, {
                path: 'area-select',
                name: 'AreaSelect',
                component: () => import('../../views/admin/example/form/AreaSelect'),
                meta: {
                  title: 'AreaSelect',
                  icon: 'el-icon-s-data'
                }
              }
            ]
          }
        ]
      }, {
        path: 'p1',
        name: 'Page1',
        component: () => import('../../views/admin/page1/Page1'),
        meta: {
          title: 'Page1',
          icon: 'el-icon-setting'
        }
      }, {
        path: 'p2',
        name: 'Page2',
        component: () => import('../../views/admin/EmptyPage'),
        meta: {
          title: 'Page2',
          icon: 'el-icon-exp-account'
        },
        children: [
          {
            path: 'p2-1',
            name: 'Page2-1',
            component: () => import('../../views/admin/page2/page2-1/Page2-1'),
            meta: {
              title: 'Page2-1',
              icon: 'el-icon-exp-usergroup',
              authCode: 'B'
            }
          }, {
            path: 'p2-Detail/:detailId',
            name: 'Page2-Detail',
            component: () => import('../../views/admin/page2/page2-1/SubDetail'),
            meta: {
              title: 'Page2-Detail',
              icon: 'el-icon-setting',
              hidden: true
            }
          }, {
            path: 'p2-2',
            name: 'Page2-2',
            component: () => import('../../views/admin/page2/Page2'),
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
