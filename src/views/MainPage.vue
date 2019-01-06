<template>
    <div class="page-container">
		<md-app :md-scrollbar = "false" md-waterfall md-mode="fixed-last" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
			<md-app-toolbar class="md-large md-dense md-primary md-elevation-13">
					<div class="md-toolbar-row">
					<div class="md-toolbar-section-start">
						<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
						<md-icon>menu</md-icon>
						</md-button>

						<span class="md-title">HouseHub</span>
					</div>
					<div class="md-toolbar-section-end">
						<md-button class="md-icon-button">
						<md-icon>more_vert</md-icon>
						</md-button>
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
			</md-app-toolbar>
			<md-app-drawer :md-active.sync="menuVisible">
					<md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
						<md-list>
						<router-link to="/login">
							<md-list-item v-if="!isLogin">
								<md-icon>person</md-icon>
								<span class="md-list-item-text">Login</span>
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
			</md-app-drawer>
			<md-app-content v-if="isLogin">
					<component v-bind:is="currentTabComponent"></component>
			</md-app-content>
		</md-app>
    </div>
</template>


<script>

import Scroll from './Scroll.vue'
import HomeList from './HomeList.vue'
import HouseList from './HouseList.vue'
import OrderList from './OrderList.vue'

export default {
	name: "MainPage",
	components : {
		Scroll,
		HomeList,
		HouseList,
		OrderList
	},
	data: () => ({
		menuVisible: false,
		currentTabComponent: "Scroll"
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
.md-app-content .md-card{
  margin-left: 0px !important;
  margin-right: 0px !important;
}
 .md-toolbar.md-theme-default.md-primary{
    background-image: url("../assets/JShine.jpg");
    background-repeat: no-repeat;
}
.md-tabs.md-theme-default.md-primary .md-tabs-navigation{
	background-color: transparent;
}
</style>