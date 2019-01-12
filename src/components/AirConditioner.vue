<template>
	<div class="viewport">
		<md-app :md-scrollbar = "false" md-waterfall   md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
			<md-app-toolbar>
					<div class="md-toolbar-row">
						<div class="md-toolbar-section-start">
							<md-button class="md-icon-button"  @click="$router.go(-1)">
								<md-icon>keyboard_arrow_left</md-icon>
							</md-button>
							<span class="md-title">House Details</span>
						</div>
						<div class="md-toolbar-section-end">
							<md-button class="md-icon-button"  @click="$router.push('/')">
								<md-icon>home</md-icon>
							</md-button>
						</div>
					</div>
			</md-app-toolbar>
			<md-app-content>
			<div class="sweet-home">
				<md-list class="md-double-line">
					<md-subheader>Switch</md-subheader>
					<md-list-item>
						<md-switch v-model="boolean" class="md-primary">ON</md-switch>
					</md-list-item>
					<md-divider></md-divider>
					<md-subheader>Mode</md-subheader>
					<md-list-item>
						<md-radio v-model="ratio" value="colder" class="md-primary">Colder</md-radio>
						<md-radio v-model="ratio" value="heater">Heater</md-radio>
					</md-list-item>
					<md-divider></md-divider>
					<md-subheader>Temperature</md-subheader>
					<md-list-item>
						<div class="md-list-item-text">
							<div class = "md-headline">{{temper}}°F</div>
						</div>
						<md-button class="md-icon-button md-primary md-raised" @click="minus()">
							<md-icon>remove</md-icon>
						</md-button>
						<md-button class="md-icon-button md-primary md-raised" @click="add()">
							<md-icon>add</md-icon>
						</md-button>
					</md-list-item>
				</md-list>
				<md-divider></md-divider>
				<br/>
			</div>
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
.md-card.md-theme-default.md-primary.orange-primary{
    background-color: orange;
}
.md-card.md-theme-default.md-primary.grey-primary{
    background-color: rgb(175, 174, 174);
}
</style>

<script>
export default {
  name: 'AC',
  data: () => ({
		menuVisible: false,
		houseName: "White House",
		boolean: true,
		temper: 79,
		ratio: 'heater'
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
	},
	add: function(){
		if(this.temper < 90) this.temper+=1
	},
	minus: function(){
		if(this.temper > 60) this.temper-=1
	}
  }
}
</script>
