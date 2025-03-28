<template>
    <div class="footer">
       

        <el-row :gutter="20" class="footer-top">
            <el-col 
            :xs="24"
            :sm="6" class="footer-logo">
            <div class="logo"><img src="../assets/Symbol.png"><h4>Xunion</h4></div>
            <p>hallo@xunion.com</p>
            </el-col>
            <el-col :xs="24"
            :sm="8">
                <ul>
                <p>Products</p>
                <li v-for="(item,index) in productsData" :key="index">
                    <a :href="item.link" target="_blank">{{ item.name }}</a></li>
            </ul>
            </el-col>
            <el-col :xs="24"
            :sm="8"> 
                <ul>
                <p>Resources</p>
                <li><a href="https://doc.xunion.io/" target="_blank">Guides & tutorials</a></li>
            </ul>    
            </el-col>
        </el-row>
       

        <div class="footer-script">
            <p>©2025 Xunion</p>
            <div class="">
                <a href="https://x.com/xunionofficial" target="_blank"><img src="../assets/twitter.png"/></a>
                <a href="https://github.com/artixv" target="_blank"><img src="../assets/github.png" style="margin:0 20px"/></a>
                <a href="https://t.me/ConfluxWeb3China" target="_blank"><img src="../assets/email.png"/></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const productsData = ref([
    {name:'Swap',link:'https://www.xunion.io/#/x-dex/swap'},
    {name:'Libra USD',link:'ttps://www.xunion.io/#/x-libra-usd'},
    {name:'Lending',link:'https://www.xunion.io/#/x-lending/dashboard'}
])

</script>


<style lang="scss">
.footer{
    color:#fff;
    background:#000;
    .footer-top{
        display:flex;
        padding:5%;
        .el-col{
            margin-bottom:20px;
        }
        .footer-logo{
           
            .logo{
                display:flex;
                align-items:center;
                
                img{
                    margin-right:10px;
                }
            }
            p{
                padding-top:10%;
            }
        }

        a{
            color:#fff;
            &:hover{
                color:#6E5DE6
            }
        }
        
    }
    .footer-right{
        display:flex;
        flex-wrap:wrap;
        flex:1;
    }
    ul{
       
        p{
            color:#eee;
            font-size:16px;
            font-weight:bold;
        }
        li{
            font-size:14px;
        }
    }

    .footer-script{
        display:flex;
        align-items: center;
        justify-content: space-between;
        border-top:1px solid #aeadb3;
        padding:2% 5%;
    }
}
</style>