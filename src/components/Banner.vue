<template>

  <div class="banner">
    <div class="banner-head">
      <div class="web-title">
        <img src='../assets/Symbol.png' width="40px" height="40px"/><span class="pc-only">Xunion</span>
      </div>
      <div class="right">
        <el-menu
    :default-active="1"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
  
    <el-sub-menu index="1">
      <template #title>Projects</template>
      <el-menu-item v-for="(item,index) in subMenu" :key="index" @click="menuEvent(item.link)">{{ item.name }}</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2"  @click="menuEvent(docUrl)">Resources</el-menu-item>
   
  </el-menu>
  <el-button type="primary" size="small" @click="openWeb">Open App</el-button>
    </div>
      </div>
    

   

  <div class="banner-con">
    <h1>{{bannerTxt}}</h1>
    <p class="tip">{{ bannerTip }}</p>
    <el-button type="primary" @click="openWeb">Get started </el-button>
  </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const bannerTxt = ref('Unlock the full potential of DeFi')
const bannerTip = ref('Swap,supply,borrow and stable coin')

const subMenu = ref([
  {name:'X-Dex',link:'https://www.xunion.io/#/x-dex/swap'},
  {name:'X-Super Libra Coin',link:'https://www.xunion.io/#/x-libra-usd'},
  {name:'X-Lending',link:'https://www.xunion.io/#/x-lending/dashboard'},
])

const docUrl = ref('https://doc.xunion.io/')

const openWeb = () => {
  window.open('https://xunion.io/#/x-dex/swap','_blank')
}

const menuEvent = (link) => {
  window.open(link,'_blank')
}
</script>
<style lang="scss">
.flex-grow {
  flex-grow: 1;
}
.banner{
  background-color:#000;
  background-image: url('../assets/banner.png'); 
  background-position: top center;
  color:#fff;
  .banner-head{
    display:flex;
    justify-content: space-between;
    padding:0 2%;
  }

  .web-title{
    display:flex;
    align-items: center;
    font-weight:bold;
    font-size:18px;
    img{margin-right:5px;}
  }
  .right{
    display:flex;
    align-items: center;
  }

  .el-menu{
    background:transparent;
  
  }
  .el-menu--horizontal.el-menu{
    border-bottom:none;
  }
  .el-menu--horizontal>.el-menu-item{
    color:#fff;
  }

  .el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
    color:#fff;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
    background:transparent;
    color:#6E5DE6;
  }

  .el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover{
    background:transparent;
    color:#6E5DE6;
  }

  .el-menu--horizontal>.el-menu-item.is-active{
    color:#6e5de6 !important;
    border:none;
  }

  .el-button--primary{
    background:#6E5DE6 !important;
    border-color: #6e5ee6 !important;
    &:hover{
      border-color: #6e5ee6 !important;
    }
  }


  .banner-con{
    text-align:center;
    padding: 18% 10%;
    .tip{
      padding:2% 0;
      font-size:1.4em;
    }
  }
}

@media (max-width: 768px) {
      .pc-only {
        display: none;
      }
    }


.el-popper.is-light, .el-popper.is-light>.el-popper__arrow:before {
    background: #1a1a1a !important;
    border: 1px solid #7e7e7e !important;
    border-radius:8px;
  }
  .el-menu--popup{
    border: 1px solid #7e7e7e;
    border-radius:16px !important;
  }

  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-sub-menu__title{
    background: #1a1a1a !important;
  }

  .el-menu--popup-container{
    .el-menu{
      background:#1a1a1a;
    }
  }

  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-sub-menu__title{
    color:#fff !important;
  }
  .el-menu--horizontal .el-menu .el-menu-item:hover, .el-menu--horizontal .el-menu .el-sub-menu__title:hover{
    color:#6e5ee6 !important
  }
</style>