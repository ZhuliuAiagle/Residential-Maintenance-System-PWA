<template>
<div class="page-container">
	<md-app :md-scrollbar = "false" md-waterfall md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
	<md-app-toolbar>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/">
                <md-button class="md-icon-button" @click = "$router.go(-1)">
                <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
            </router-link>
            <span class="md-title">Login</span>
          </div>
          <div class="md-toolbar-section-end">
          </div>
        </div>
        </md-app-toolbar>
		<md-app-content>
			<form novalidate class="md-layout">
				<md-card class="md-layout-item md-size-50 md-small-size-100">
					<br/>
					<md-card-media>
						<img src="../assets/house_repair.png" class="login-icon">
					</md-card-media>
					<md-card-header>
						<div class="md-title"><strong>HouseHub</strong></div>
					</md-card-header>
					<md-card-content>
						<md-field>
							<label>Username</label>
							<md-input v-model = "user"></md-input>
						</md-field>
						<md-field>
							<label>Password</label>
							<md-input type="password" v-model = "password"></md-input>
						</md-field>
					</md-card-content>
					<md-card-actions style="justify-content: center">
						<md-button class="md-raised md-primary login-button" @click="login();">
							SIGN IN
						</md-button>
					</md-card-actions>
					<br/>
					<a href="#">Forgot password?</a>
					<br/>
					<br/>
				</md-card>
			</form>
			<md-dialog-confirm
                    :md-active.sync="error"
                    md-title="Error"
                    md-content = "Service Internal Error(500)"
                    md-confirm-text="Done" @md-confirm = "error = false"/>
		</md-app-content>
	</md-app>
</div>
</template>

<style lang="scss" scoped>
.md-app-content .md-card{
    margin-left: 0px !important;
    margin-right: 0px !important;
	text-align: center;
}
.md-dialog {
    width: 250px;
    height:250px;
}
.warning-margin {
    margin: 20px
}
.login-button{
	width: 300px;
	height: 50px;
}
.login-icon{
	width: 150px;
}

.md-card.md-layout-item.md-size-50.md-small-size-100.md-theme-default{
	background-color: transparent;
}
</style>

<script>
export default {
  name: 'GoodLogin',
  data: () => ({
		menuVisible: false,
        houseName: "White House",
        editState: false,
        deleteDialog: false,
		initial: '',
		user: '',
		password: '',
		error: false,
		loginSuccess: false
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
	},
	login:function(){
		var pas = this.password;
		var usr = this.user;
		localStorage.setItem(usr, pas);
		this.$router.push('/');
	}
  }
}
</script>
