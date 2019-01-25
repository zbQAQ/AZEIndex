<template>
  <div class="temp">
    <nav class="navbar myNavbar navbar-fixed-top">
      <div class="container myContainer">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed myToggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand myNavbrand" href="#">
            <img src="../../assets/logo.png" class="logo" alt="安志生态">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-right myNavCollapse" id="bs-example-navbar-collapse-1" >
          <ul class="nav navbar-nav myNav" id="navbar">
            <li v-for="(item, index) in navlist" :key="index" v-bind:class="{'active':curPage === item.path}">
              <a :href="'#/' + item.path" @click="changePath(item.path)">{{item.name}}</a>
            </li>
            
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      navlist: [
        {path: 'home', name: '首页'},
        {path: 'aboutme', name: '关于我们'},
        {path: 'news', name: '新闻中心'},
        {path: 'resolve', name: '解决方案'},
        {path: 'cuscase', name: '客户案例'},
        {path: 'contact', name: '联系我们'},
      ],
      curPage: 'home',
    }
  },
  mounted() {
    let regExp1 = /\/(\S*)\//  //有子路由的正则
    let regExp2 = /\/(\S*)/    //没有子路由的正则
    let path = this.$route.path
    let hasNum = 0

    path.split('').map(v => {
      if(v === '/') {hasNum++}
    })

    if(hasNum > 1) {
      path = path.match(regExp1)[1]
    }else {
      path = path.match(regExp2)[1]
    }

    //同步新闻详情和方案详情
    if(path === 'NewsChild') {
      path = 'news'
    }else if(path === 'resoDetail') {
      path = 'resolve'
    }

    this.curPage = path
    
    $(window).scroll(function () {
      //小屏幕下的导航条折叠
      if ($(window).width() < 768) {
        //点击导航链接之后，把导航选项折叠起来
        $(".myNavCollapse li").click(function () {
          $(".myNavCollapse").collapse('hide');
        });
        //滚动屏幕时，把导航选项折叠起来
        $(window).scroll(function () {
          $(".myNavCollapse").collapse('hide');
        });
      }
    });
  },
  methods: {
    changePath(name) {
      this.curPage = name
    }
  }
}


</script>

<style scoped>
.temp {
  padding-top: 70px;
}
.logo {
  width: auto;
}
.myNavbar{
  background: #0251d9;
  border-radius: 0px;
  border-width: 0 0 0px;
}
.myNavbar .myContainer {
  height: 70px;
}

.myNavbar .myContainer .myToggle{
  border-color: #ccc;
  margin-top: 20px;
}
.myNavbar .myContainer .myToggle .icon-bar{
  background: #f7f7f7;
}

.myNavbar .myContainer .myNavbrand {
  height: 70px;
}
.myNav>li>a {
  line-height: 35px;
  font-size: 16px;
}
.myNavCollapse {
  background: #0251d9;
}
.myNav li {
  transition: 0.4s ease;
  /* border-left: 5px solid transparent; */
}
.myNav li a {
  color: #fff;
}
.myNav li:hover{
  background-color: #14469c;
  border-left: 5px solid #C5C5C5;
}
.myNav li a:hover, .myNav li a:focus{
  background-color: transparent;
}
.myNav li.active{
  background-color: #14469c;
  border-left: 5px solid #C5C5C5;
}

@media (min-width: 768px) {
  /** 屏宽大于768 **/
  
  .myNav li {
    border-left: 0;
    border-top: 5px solid transparent;
  }
  .myNav li:hover{
    border-left: 0;
    border-top: 5px solid #C5C5C5;
    background-color: #14469c;
  }
  .myNav li.active{
    border-left: 0;
    border-top: 5px solid #C5C5C5;
  }
  .resolve{
    transform: translateY(0)
  }
}
</style>
