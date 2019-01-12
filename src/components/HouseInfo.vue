<template>
    <div>
        <md-toolbar class="fix">
		<div class="md-toolbar-row">
			<div class="md-toolbar-section-start">
				<router-link to="/">
					<md-button class="md-icon-button"  @click="$router.push('/')">
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
            <div style="height:40px"></div>
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
					<div class="md-title">{{$root.$house_name}}</div>
					<div class="md-subhead">{{$root.$house_address}}</div>
					</md-card-header-text>
				</md-card-header>
			</md-card>
			<br/>
			<md-list class="md-double-line">
                <md-divider></md-divider>
                <md-subheader>Owner</md-subheader>
                <md-list-item v-if="$root.$house_owner!=''">
                    <md-icon class="md-primary">person</md-icon>
                    <div class="md-list-item-text">
                    <span>{{$root.$house_owner}}</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>Renter</md-subheader>
                <md-list-item v-if="$root.$role != 'Landlord'">
                    <md-icon class="md-primary">person</md-icon>
                    <div class="md-list-item-text">
                    <span>N/A</span>
                    </div>
                </md-list-item>
                <md-divider></md-divider>
                <md-subheader>House Management</md-subheader>
                <md-list-item>
                    <md-icon class="md-primary">apps</md-icon>
                    <div class="md-list-item-text">
                    <span>Facilities</span>
                    </div>
                    <md-button class="md-icon-button md-list-action" @click="nextCluster()">
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
        
    },
    data: () => ({
        
    }),
    created: function() {

    },
    methods:{
    nextCluster: function(){
        this.$router.push({
            name: 'Clusters'
        })
    }
    }
}
</script>

<style lang="scss" scoped>
	.md-card{
		margin-left: 0px !important;
		margin-right:0px !important;
	}
    .fix{
        position:fixed
    }
    .md-toolbar.fix.md-theme-default{
        background-color: var(--md-theme-default-toolbarvariant, #ffffff);
    }
</style>


