const Home = {
  template: '<h2>文章列表</h2>'
}

const aHome = {
  template: '<h2>视频列表</h2>'
}

const Event = {
  template: '<h2>新闻条目</h2>'
}
const aEvent = {
  template: '<h2>新闻条目</h2>'
}
const bEvent = {
  template: '<h2>新闻条目</h2>'
}

const Comment={
  template: '<h2>广告栏</h2>'
}
const aComment = {
  template: '<h2>视频内容</h2>'
}



const routes = [
  {
    path: '/',
    components: {
      default:Home,
      a:aHome,
    }
  },
  {
    path: '/events',
    components: {
      default:Event,
      a:aEvent,
      b:bEvent,
    }
  },
  {
  	path:'/comments',
  	 components: {
      default:Comment,
      a:aComment,
    }
  }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
const app = new Vue({
  el:'#app',
  router
})
