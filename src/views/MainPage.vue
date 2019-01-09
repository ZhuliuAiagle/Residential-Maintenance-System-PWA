<template>
    <div>
			<md-toolbar class="md-large md-dense md-primary md-elevation-13 fix">
				<div class="md-toolbar-row">
				<div class="md-toolbar-section-start">
					<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
					<md-icon>menu</md-icon>
					</md-button>
					<img src="../assets/house_repair_w.png" style="width:20px"/>
					<span class="md-title all-title">HouseHub</span>
				</div>
				<div class="md-toolbar-section-end">
					<md-badge class="md-primary" md-content="12">
						<md-button class="md-icon-button">
								<md-icon>mail_outline</md-icon>
						</md-button>
					</md-badge>
				</div>
				</div>
				<div class="md-toolbar-row">
					<md-tabs class="md-primary" @md-changed = "checkNewTab">
						<md-tab id="tab-home" md-label="HOME"></md-tab>
						<md-tab id="tab-details" md-label="RENT"></md-tab>
						<md-tab id="tab-owner" md-label="properties"></md-tab>
						<md-tab id="tab-order" md-label="ORDERS"></md-tab>
					</md-tabs>
				</div>
			</md-toolbar>
			<md-drawer :md-active.sync="menuVisible" class="fix">
					<md-toolbar class="md-transparent" md-elevation="0">Settings</md-toolbar>
						<md-list>
							<md-list-item>
								<img src="../assets/house_repair.png" style="width: 100px; margin-left: 30px"/>
							</md-list-item>
							<br/>
							<md-divider></md-divider>
							<br/>
						<router-link to="/login">
							<md-list-item v-if="!isLogin">
								<md-icon>person</md-icon>
								<span class="md-list-item-text">Sign In</span>
							</md-list-item>
						</router-link>
						<md-list-item v-if="isLogin">
							<md-icon>person</md-icon>
							<span class="md-list-item-text">Jackie Chan</span>
						</md-list-item>
						<md-list-item v-if="isLogin" @click="logout()">
							<md-icon>error</md-icon>
							<span class="md-list-item-text">Log out</span>
						</md-list-item>
						</md-list>
			</md-drawer>
			<md-content>
				<div class="fill"></div>
				<div v-if="isLogin">
					<component v-bind:is="currentTabComponent"></component>
				</div>
				<div v-if="!isLogin">
					<no-login></no-login>
				</div>
				<div style="height: 100px"></div>
			</md-content>
			<!-- <BarRouter></BarRouter>	 -->
    </div>
</template>


<script>

import Scroll from './Scroll.vue'
import HomeList from './HomeList.vue'
import HouseList from './HouseList.vue'
import OrderList from './OrderList.vue'
import NoLogin from './NoLogin.vue'
import BarRouter from '../components/BottomBar.vue'

export default {
	name: "MainPage",
	components : {
		Scroll,
		HomeList,
		HouseList,
		OrderList,
		NoLogin,
		BarRouter
	},
	data: () => ({
		menuVisible: false,
		currentTabComponent: "Scroll",
		screenHeight: document.body.innerHeight
	}),
	methods:{
		currentWindowHeights: function(){
		return window.innerHeight.toString()
		},
		checkNewTab: function(activeTab){
			if(activeTab == "tab-home"){
				this.currentTabComponent = "Scroll"
			}else if(activeTab == "tab-details"){
				this.currentTabComponent = "HomeList"
			}else if(activeTab == "tab-owner"){
				this.currentTabComponent = "HouseList"
			}else if(activeTab == "tab-order"){
				this.currentTabComponent = "OrderList"
			}else{
				this.currentTabComponent = "Scroll"
			}
		},
		logout:function(){
			localStorage.removeItem("jinboshabi");
			this.$router.push("/login");
		}
	},
	computed:{
		isLogin: function(){
			var usr = localStorage.getItem("jinboshabi");
			if(usr != null){
				return true;
			}
			return false;
		}
	}
}

</script>

<style>
.md-drawer {
    width: 200px;
    max-width: calc(100vw - 125px);
}
.md-card{
  margin-left: 10px !important;
  margin-right: 10px !important;
}
 .md-toolbar.md-theme-default.md-primary{
    background-image: url("../assets/Amin.jpg");
    background-repeat: no-repeat;
	background-size:100%;
}
.md-tabs.md-theme-default.md-primary .md-tabs-navigation{
	background-color: transparent;
}
.fix{
	position:fixed;
}
.fill{
	height: 100px
}
</style>