<template>
<div>
	<md-toolbar class="fix">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <router-link to="/home-detail/">
                <md-button class="md-icon-button" @click="$router.push(-1)">
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
            <md-button class="md-icon-button"  @click="$router.push('/')">
              <md-icon>home</md-icon>
            </md-button>
          </div>
        </div>
        </md-toolbar>
		<md-content>
            <div style="height: 80px"></div>
            <div class="sweet-home">
                <md-list class="md-double-line">
                    <clus-omit v-for="(item,index) in cluster_list" :name="item['Information']" :room_id="item['Room_ID']" :key="index" :edit_state="editState" @renewClusterList="renewList()"/>
                </md-list>
                <md-divider></md-divider>
                <br/>
            </div>
		</md-content>
        <md-dialog-prompt
            :md-active.sync="editName"
            v-model="newName"
            md-title="New Cluster"
            md-input-placeholder="Type my name..."
            md-confirm-text="Done" @md-confirm = "editName = false; addCluster(); newNameSubmit = true;"/>
        <md-dialog-confirm
            :md-active.sync="newNameSubmit"
            md-title="New Cluster"
            :md-content="return_message"
            md-confirm-text="Done" @md-confirm = "newNameSubmit = false;editState = false; renewList();"/>
</div>
</template>

<style lang="scss" scoped>
.md-dialog {
    width: 250px;
    height:240px;
}
.warning-margin {
    margin: 20px
}
.md-toolbar.fix.md-theme-default{
    background-color: #ffffff;
}
.fix{
    position:fixed;
    z-index: 100;
}

</style>

<script>
import ClusOmit from '../components/ClusOmit.vue'
import axios from 'axios'
import Nothing from '../components/Nothing.vue'
export default {
  name: 'Clusters',
  components:{
      ClusOmit,
      Nothing
  },
  data: () => ({
        editState: false,
        cluster_list: [],
        cluster_count: 0,
        editName: false,
        newName: "",
        newNameSubmit: false,
        submitReturn: false,
        return_message: ""
  }),
  created: function(){
    var that = this
    axios({
        method: 'post',
        url: this.$url,
        headers:{
            "Content-type": "application/x-www-form-urlencoded"
        },
        data:{
            "Function":"get_house_room",
            "House_ID": that.$root.$house_id
        }
        }).then(function(response){
            console.log(response.data)
            var res = response.data
            if(res["Status"] == 200){
                that.nothing = false
                that.cluster_list = that.cluster_list.concat(res["Room[]"])
                that.cluster_count += res["Room_Amount"]
                console.log(that.cluster_list)
            }
            else{
                that.nothing = true
            }
        }).catch(function(error){
            console.log(error)
            
    })
  },
  // 计算当前窗口的高度并进行设备适配
  methods:{
      addCluster: function(){
            var that = this
            axios({
                method: 'post',
                url: this.$url,
                headers:{
                    "Content-type": "application/x-www-form-urlencoded"
                },
                data:{
                    "Function":"add_host_room",
                    "Address": that.$root.$house_address,
                    "Type":that.newName,
                    "Information": that.newName,
                    "House_ID": that.$root.$house_id
                }
                }).then(function(response){
                    console.log(response.data)
                    var res = response.data
                    if(res["Status"] == 200){
                        that.return_message = "Operate Successfully!"
                        that.submitReturn = true
                    }
                    else{
                        that.return_message = res["status"] + ": Permission Denied"
                    }
                }).catch(function(error){
                    console.log(error)
                    that.return_message = "500: Internal Server Error"
            })
      },
      renewList: function(){
        var that = this
        this.cluster_list = []
        this.cluster_count = 0
        axios({
            method: 'post',
            url: this.$url,
            headers:{
                "Content-type": "application/x-www-form-urlencoded"
            },
            data:{
                "Function":"get_house_room",
                "House_ID": that.$root.$house_id
            }
            }).then(function(response){
                console.log(response.data)
                var res = response.data
                if(res["Status"] == 200){
                    that.cluster_list = that.cluster_list.concat(res["Room[]"])
                    that.cluster_count += res["Room_Amount"]
                    console.log(that.cluster_list)
                }
                else{
                    throw res["status"] + ": something bad happend"
                }
            }).catch(function(error){
                console.log(error)
        })
      }
  }
}
</script>
