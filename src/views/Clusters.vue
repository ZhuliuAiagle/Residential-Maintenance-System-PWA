<template>
<div class="page-container">
	<md-app :md-scrollbar = "false" md-waterfall md-mode="fixed" v-bind:style="{'height':currentWindowHeights() + 'px', border: '1px 1px solid rgba(#000, .12)'}">
				<md-app-toolbar>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/home-detail/">
                <md-button class="md-icon-button" @click="$router.go(-1)">
                <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
            </router-link>
            <span class="md-title">Clusters</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button"  v-if = "editState" @click="editName = true">
                <md-icon>add</md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="editState = !editState">
                <md-icon v-if = "!editState">edit</md-icon>
                <md-icon v-if = "editState">done_all</md-icon>
            </md-button>
            <md-button class="md-icon-button"  @click="$router.go('/')">
              <md-icon>home</md-icon>
            </md-button>
          </div>
        </div>
        </md-app-toolbar>
		<md-app-content>
            <div class="sweet-home">
                <md-list class="md-double-line">
                    <md-list-item>
                        <div class="md-list-item-text">
                        <span>Unclassified</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                        <div class="md-list-item-text">
                        <span>My bedroom</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-list-action md-accent" v-if="editState" @click="deleteDialog = true">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                        <div class="md-list-item-text">
                        <span>Bathroom</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-list-action md-accent" v-if="editState" @click="deleteDialog = true">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                        <div class="md-list-item-text">
                        <span>Living Room</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-list-action md-accent" v-if="editState" @click="deleteDialog = true">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                        <div class="md-list-item-text">
                        <span>Kitchen</span>
                        </div>
                        <md-button class="md-icon-button md-list-action">
                        <md-icon>keyboard_arrow_right</md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-list-action md-accent" v-if="editState" @click="deleteDialog = true">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-list-item>
                    <md-list-item>
                            <div class="md-list-item-text">
                            <span>Kids' Bedroom</span>
                            </div>
                        <router-link to="/home-detail/clusters/devices">
                            <md-button class="md-icon-button md-list-action">
                            <md-icon>keyboard_arrow_right</md-icon>
                            </md-button>
                        </router-link>
                        <md-button class="md-icon-button md-list-action md-accent" v-if="editState" @click="deleteDialog = true">
                            <md-icon>delete</md-icon>
                        </md-button>
                    </md-list-item>
                </md-list>
                <md-divider></md-divider>
                <br/>
                <md-dialog :md-active.sync = "deleteDialog">
                    <md-dialog-title>Warning!</md-dialog-title>
                    <md-content class = "warning-margin">Are you sure to delete this cluster as well as its member, or just simply dissolve it? (its members will be kept in 'Unclassified')</md-content>
                    <md-dialog-actions>
                        <md-button class="md-primary" @click="deleteDialog = false">Cancel</md-button>
                        <md-button class="md-primary">Dissolve</md-button>
                        <md-button class="md-accent">Delete</md-button>
                    </md-dialog-actions>
                </md-dialog>
                <md-dialog :md-active.sync = "deleteDialog">
                    <md-dialog-title>Warning!</md-dialog-title>
                    <md-content class = "warning-margin">Are you sure to delete this cluster as well as its member, or just simply dissolve it? (its members will be kept in 'Unclassified')</md-content>
                    <md-dialog-actions>
                        <md-button class="md-primary" @click="deleteDialog = false">Cancel</md-button>
                        <md-button class="md-primary">Dissolve</md-button>
                        <md-button class="md-accent">Delete</md-button>
                    </md-dialog-actions>
                </md-dialog>
                <md-dialog-prompt
                    :md-active.sync="editName"
                    v-model="newName"
                    md-title="New Cluster"
                    md-input-placeholder="Type my name..."
                    md-confirm-text="Done" @md-confirm = "editName = false; newNameSubmit = true;"/>
                <md-dialog-confirm
                    :md-active.sync="newNameSubmit"
                    md-title="New Cluster"
                    md-content = "Successfully Create New Cluster"
                    md-confirm-text="Done" @md-confirm = "newNameSubmit = false; editState = false"/>
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
.md-dialog {
    width: 250px;
    height:250px;
}
.warning-margin {
    margin: 20px
}
</style>

<script>
export default {
  name: 'Clusters',
  data: () => ({
		menuVisible: false,
        houseName: "White House",
        editState: false,
        deleteDialog: false,
        editName: false,
        newName: "",
        newNameSubmit: false
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
