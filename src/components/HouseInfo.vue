<template>
    <div>
        <md-toolbar class="fix">
		<div class="md-toolbar-row">
			<div class="md-toolbar-section-start">
				<router-link to="/">
					<md-button class="md-icon-button"  @click="$router.go(-1)">
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
		</md-toolbar>
		<md-content>
        
		<div class="sweet-home">
            <div style="height:80px"></div>
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
					<div class="md-title">{{house_name}}</div>
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
                    <span>{{owner}}</span>
                    <span>Representative</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>Renter</md-subheader>
                <md-list-item>
                    <md-icon class="md-primary">person</md-icon>
                    <div class="md-list-item-text">
                    <span>{{renter}}</span>
                    <span>Representative</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>House Management</md-subheader>
                <md-list-item>
                    <md-icon class="md-primary">apps</md-icon>
                    <div class="md-list-item-text">
                    <span>Facilities</span>
                    </div>
                    <md-button class="md-icon-button md-list-action" @click="$router.push('/home-detail/'+houseID+'/clusters')">
                    <md-icon>keyboard_arrow_right</md-icon>
                    </md-button>
                </md-list-item>
                <router-link to="/smart-home">
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
                <router-link to="/clusters">
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
                <router-link to="/#">
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
		</md-content>
    </div>
</template>


<script>
export default {
    name:"HouseInfo",
    props: {
        houseID: String
    },
    data: () => ({
        house_name: "",
        owner: "",
        renter: ""
    }),
    created: function() {
        if(this.houseID == "white-house"){
            this.house_name =  "white house"
            this.owner = "donald trump"
            this.renter = "shenzijin"
        }
        else{
            this.house_name =  "default name"
            this.owner = "default name"
            this.renter = "default name"
        }
    },
    methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
        }
    }
}
</script>

<style lang="scss" scoped>
	.md-card{
		margin-left: 20px !important;
		margin-right:20px !important;
	}
    .fix{
        position:fixed
    }
    .md-toolbar.fix.md-theme-default{
        background-color: var(--md-theme-default-toolbarvariant, #ffffff);
    }
</style>


