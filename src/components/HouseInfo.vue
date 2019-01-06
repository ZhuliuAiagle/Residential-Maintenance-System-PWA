<template>
    <div>
        <md-app :md-scrollbar = "false" md-waterfall md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
        <md-app-toolbar>
		<div class="md-toolbar-row">
			<div class="md-toolbar-section-start">
				<router-link to="/">
					<md-button class="md-icon-button" @click = "$router.go(-1)">
						<md-icon>keyboard_arrow_left</md-icon>
					</md-button>
				</router-link>
				<span class="md-title">House Details</span>
			</div>
			<div class="md-toolbar-section-end">
				<md-button class="md-icon-button"  @click="$router.go('/')">
					<md-icon>home</md-icon>
				</md-button>
			</div>
		</div>
		</md-app-toolbar>
		<md-app-content>
		<div class="sweet-home">
			<md-card>
				<md-card-media-cover md-solid>
				<md-card-media md-ratio="16:9">
					<img src="../assets/wst.jpg" alt="Skyscraper">
				</md-card-media>
				</md-card-media-cover>
				</md-card>
				<md-card class = "md-primary">
				<md-card-header>
					<md-card-header-text>
					<div class="md-title">White House</div>
					<div class="md-subhead">1600 Pennsylvania Ave NW, Washington, DC 20500</div>
					</md-card-header-text>
				</md-card-header>
				<md-card-actions>
					<!-- <md-button>Action</md-button>
					<md-button>Action</md-button> -->
				</md-card-actions>
			</md-card>
			<br/>
			<md-list class="md-double-line">
                <md-divider></md-divider>
                <md-subheader>Owner</md-subheader>
                <md-list-item>
                    <md-icon class="md-primary">person</md-icon>
                    <div class="md-list-item-text">
                    <span>Donald Trump</span>
                    <span>Representative</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>Renter</md-subheader>
                <md-list-item>
                    <md-icon class="md-primary">person</md-icon>
                    <div class="md-list-item-text">
                    <span>Jackie Chan (Me)</span>
                    <span>Representative</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>House Management</md-subheader>
                <router-link to="/home-detail/clusters">
                    <md-list-item>
                        <md-icon class="md-primary">apps</md-icon>
                        <div class="md-list-item-text">
                        <span>Facilities</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-list-item>
                </router-link>
                <router-link to="/home-detail/smart-home">
                    <md-list-item>
                        <md-icon class="md-primary">adb</md-icon>
                        <div class="md-list-item-text">
                        <span>Smart Home</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-list-item>
                </router-link>
                <router-link to="/home-detail/clusters">
                    <md-list-item>
                        <md-icon class="md-primary">build</md-icon>
                        <div class="md-list-item-text">
                        <span>Maintaining</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-list-item>
                </router-link>
                <router-link to="/home-detail/#">
                    <md-list-item>
                        <md-icon class="md-primary">book</md-icon>
                        <div class="md-list-item-text">
                        <span>View General Report</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-list-item>
                </router-link>
            </md-list>
            <md-divider></md-divider>
            <br/>
		</div>
		</md-app-content>
        </md-app>
    </div>
</template>


<script>
export default {
    name:"HouseInfo",
    data: () => ({
        
    }),
    methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
        }
    }
}
</script>

<style lang="scss" scoped>
	.md-app-content .md-card{
		margin-left: 0px !important;
		margin-right: 0px !important;
	}
</style>


