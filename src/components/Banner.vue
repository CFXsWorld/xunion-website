<template>
  <div
    class="banner"
    style="font-family: 'Fira Mono', monospace !important; height: 100vh"
  >
    <div class="banner-head" style="padding-top: 20px">
      <div class="web-title">
        <img src="../assets/Symbol.png" width="40px" height="40px" />
      </div>
      <div class="right">
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-sub-menu index="1">
            <template #title>
              <span style="font-size: 18px; font-weight: bold">Projects</span>
            </template>
            <el-menu-item
              v-for="(item, index) in subMenu"
              :key="index"
              @click="menuEvent(item.link)"
              >{{ item.name }}</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="2" @click="menuEvent(docUrl)">
            <span style="font-size: 18px; font-weight: bold">Resources</span>
          </el-menu-item>
        </el-menu>
        <el-button
          type="primary"
          @click="openWeb"
          class="open-app-btn"
          style="font-size: 14px; border-radius: 12px"
          >Open App</el-button
        >
      </div>
    </div>

    <div class="banner-con">
      <motion.div
        :initial="{ opacity: 0.9, scale: 0.9 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }"
      >
        <h1>{{ bannerTxt }}</h1>
      </motion.div>
      <motion.div
        :initial="{ opacity: 0.8, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }"
      >
        <p class="tip">{{ bannerTip }}</p>
      </motion.div>
      <el-button
        type="primary"
        @click="openWeb"
        style="border-radius: 12px; margin-top: 20px"
      >
        Get started
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { motion } from "motion-v";
const bannerTxt = ref("Unlock the full potential of DeFi");
const bannerTip = ref("Swap,supply,borrow and stable coin");

const subMenu = ref([
  { name: "X-Dex", link: "https://app.xunion.io/#/x-dex/swap" },
  { name: "X-Super Libra Coin", link: "https://app.xunion.io/#/x-libra-usd" },
  { name: "X-Lending", link: "https://app.xunion.io/#/x-lending/dashboard" },
]);

const docUrl = ref("https://doc.xunion.io/");

const openWeb = () => {
  window.open("https://app.xunion.io/#/x-dex/swap", "_blank");
};

const menuEvent = (link) => {
  window.open(link, "_blank");
};
</script>
<style lang="scss">
@media (max-width: 768px) {
  .open-app-btn {
    display: none !important;
  }
}
.flex-grow {
  flex-grow: 1;
}
.banner {
  background-color: #000;
  background-image: url("../assets/banner.png");
  background-position: top center;
  color: #fff;
  .banner-head {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
  }

  .web-title {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    img {
      margin-right: 5px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }

  .el-menu {
    background: transparent;
  }
  .el-menu--horizontal.el-menu {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    color: #fff;
  }

  .el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    color: #fff;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: transparent;
    color: #6e5de6;
  }

  .el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
    background: transparent;
    color: #6e5de6;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    color: #6e5de6 !important;
    border: none;
  }

  .el-button--primary {
    background: #6e5de6 !important;
    border-color: #6e5ee6 !important;
    &:hover {
      border-color: #6e5ee6 !important;
    }
  }

  .banner-con {
    text-align: center;
    padding: 18% 10%;
    .tip {
      padding: 2% 0;
      font-size: 1.4em;
    }
  }
}

@media (max-width: 768px) {
  .pc-only {
    display: none;
  }
}

.el-popper.is-light,
.el-popper.is-light > .el-popper__arrow:before {
  background: #1a1a1a !important;
  border: 1px solid #7e7e7e !important;
  border-radius: 8px;
}
.el-menu--popup {
  border: 1px solid #7e7e7e;
  border-radius: 16px !important;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
  background: #1a1a1a !important;
}

.el-menu--popup-container {
  .el-menu {
    background: #1a1a1a;
  }
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
  color: #fff !important;
}
.el-menu--horizontal .el-menu .el-menu-item:hover,
.el-menu--horizontal .el-menu .el-sub-menu__title:hover {
  color: #6e5ee6 !important;
}
</style>
