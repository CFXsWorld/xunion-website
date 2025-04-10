<template>
  <el-row :gutter="40" class="content-box content-box-1">
    <el-col :xs="24" :sm="12">
      <img src="../assets/img1.png" width="100%" style="max-width: 400px" />
    </el-col>
    <el-col :xs="24" :sm="12">
      <div class="">
        <h2>Super Libra Coin</h2>
        <p>
          Super Libra Coin (xUSD) is the decentralized, overcollateralized
          stablecoin that serves as the native currency of the Xunion Protocol.
        </p>
        <a
          href="https://www.xunion.io/#/x-dex/swap"
          target="_blank"
          style="color: #6e5de6; font-size: 18px"
          >learn more</a
        >
      </div>
    </el-col>
  </el-row>

  <div class="content-box" style="margin-top: 120px">
    <h2 style="margin-bottom: 60px">
      Access and Unlock <span class="purple-txt">DeFi</span>
    </h2>
    <el-row :gutter="40" class="defi-box">
      <el-col
        class="box-item"
        :xs="24"
        :sm="12"
        v-for="(item, index) in defiData"
        :key="index"
        @click="jumpToPage(item.link)"
        style="border-radius: 10px"
      >
        <h3 class="item-title" style="font-size: 20px">
          <img :src="item.icon" />{{ item.title }}
        </h3>
        <p style="line-height: 1.2; font-size: 18px">{{ item.con }}</p>
      </el-col>
    </el-row>
  </div>
  <div class="content-box">
    <h2>Audited and Verified</h2>
    <p class="verified-txt" style="font-size: 20px">
      Backed by multiple audits from leading security firms in the industry.
    </p>
    <el-row :gutter="20" class="verified-box">
      <el-col
        :xs="24"
        :sm="12"
        class="box-item"
        v-for="(item, index) in VerifiedData"
        :key="index"
        style="border-radius: 20px"
      >
        <img :src="item.icon" />
        <p>{{ item.con }}</p>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref } from "vue";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

import salus from "../assets/salus.png";
import beosin from "../assets/beosin.png";

const defiData = ref([
  {
    title: "DEX",
    icon: icon1,
    con: "The most user-friendly dex to trade",
    link: "https://www.xunion.io/#/x-dex/swap",
  },
  {
    title: "Super Libra Coin",
    icon: icon2,
    con: "A decentralized excess collateralized stablecoin",
    link: "https://www.xunion.io/#/x-libra-usd",
  },
  {
    title: "Lending",
    icon: icon3,
    con: "Borrow, lend and earn",
    link: "https://www.xunion.io/#/x-lending/dashboard",
  },
  {
    title: "Governance",
    icon: icon4,
    con: "The Protocol is governed by the XUN token holder community through procedures, voting, and smart contract execution",
  },
]);

const VerifiedData = ref([
  { icon: salus, con: "SECURITY AUDIT" },
  { icon: beosin, con: "SECURITY AUDIT" },
]);

const jumpToPage = (link) => {
  window.open(link, "_blank");
};
</script>

<style lang="scss">
.el-col {
  margin-right: -20px; /* 半 gutter 值 */
}
.content-box {
  padding: 2% 10%;
  &.content-box-1 {
    display: flex;
    align-items: center;
    p {
      font-size: 1.4em;
      line-height: 1.4;
      padding: 4% 0;
    }
  }

  .purple-txt {
    color: #6e5de6;
  }

  .defi-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-item {
      padding: 4% 2% !important;
      background: #fff;
      border-radius: 5px;
      margin-bottom: 40px;
      border: 2px solid #fff;
      cursor: pointer;
      &:hover {
        border: 2px solid transparent;
        border-image: linear-gradient(135deg, #defde8 0%, #5e50ee 100%) 1;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      }
      .item-title {
        display: flex;
        align-items: center;
        img {
          margin-right: 2%;
        }
      }
      p {
        line-height: 1.2;
        padding: 2% 0;
      }
    }
  }

  .verified-txt {
    padding: 4% 0;
  }

  .verified-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-item {
      padding: 4% 2% !important;
      background: #000;
      border-radius: 4px;
      text-align: center;
      color: #6c6c6c;
      margin-bottom: 20px;
      margin-right: -20px;
    }
  }
}
</style>
