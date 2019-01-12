<template>
      <div>
          <br>
          <nothing v-if="loading_success==2"></nothing>
          <div style="text-align:center" v-if="loading_success==0">
          <md-progress-spinner  md-mode="indeterminate" :md-diameter="50"></md-progress-spinner>
          </div>
          <house-omit v-for="(item,index) in house_list" role = 'Landlord' :house_owner="item['Owner_ID']" :house_id="item['House_ID']" :house_address="item['Address']" :house_name="item['House_Name']" :house_renter="item['House_Renter']" :key = "index"></house-omit>
          <md-speed-dial :class="bottomPosition" style="position:fixed; z-index: 120" @click.native="addState = true">
            <md-speed-dial-target>
              <md-icon>add</md-icon>
            </md-speed-dial-target>
          </md-speed-dial>
          <md-dialog :md-active.sync="addState" class="new-house-dialog">
            <md-dialog-title>New House</md-dialog-title>
            <md-content style="margin:20px">
                <md-field>
                    <label>Name</label>
                    <md-input v-model="new_house_name"></md-input>
                </md-field>
                <md-field>
                    <label>Address</label>
                    <md-input v-model="new_house_address"></md-input>
                </md-field>
                <md-field>
                    <label>Information</label>
                    <md-input v-model="new_house_information"></md-input>
                </md-field>
            </md-content>
            <md-dialog-actions>
                <md-button class = "md-primary" @click="addState = false;">CANCEL</md-button>
                <md-button class = "md-primary" @click="addState = false; newHouse()">ADD</md-button>
            </md-dialog-actions>
        </md-dialog>
        <md-dialog-confirm
            :md-active.sync="return_success"
            md-title="New House"
            :md-content="return_message"
            md-confirm-text="Done" @md-confirm="return_success = false;renewList();"/>
      </div>
</template>

<style lang="scss" scoped>
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .ac-img{
    display: flex;
    align-items: center;
    margin-left: 17px;
  }
</style>

<script>
import HouseOmit from '../components/HouseOmit.vue'
import Nothing from '../components/Nothing.vue'
import axios from 'axios'

export default {
  name: 'HouseList',
  components:{
    HouseOmit,
    Nothing
  },
  data: () => ({
    menuVisible: false,
    house_count: 0,
    house_list:[],
    loading_success:0,
    bottomPosition: 'md-bottom-right md-fixed',
    new_house_name: "",
    new_house_address: "",
    new_house_information: "",
    addState: false,
    return_success : false,
    return_message : ""
  }),
  created: function(){
    const that = this
    var userID = localStorage.getItem("username")
    axios({
      method: 'post',
      url: this.$url,
      headers:{
        "Content-type": "application/x-www-form-urlencoded"
      },
      data:{
        "Function":"get_host_house",
        "User_ID": userID
      }
    }).then(function(response){
      var res = response.data
      that.house_count = res["House_Amount"]
      that.house_list = that.house_list.concat(res["House[]"])
      that.loading_success = 3
      that.loading_success = 1
    }).catch(function(error){
      alert(error)
      that.loading_success = 2
    })
  },
  
  methods:{
    newHouse: function(){
        const that = this
        var userID = localStorage.getItem("username")
        axios({
          method: 'post',
          url: this.$url,
          headers:{
            "Content-type": "application/x-www-form-urlencoded"
          },
          data:{
            "Function":"add_host_house",
            "Owner_ID": userID,
            "House_Name": that.new_house_name,
            "Address": that.new_house_address,
            "Information":that.new_house_information
          }
        }).then(function(response){
          var res = response.data
          if(res["Status"] == 200){
              that.return_message = "Operate successfully!"
              that.return_success = true
          }
          else{
            that.return_message = "400: Server Temporarily Unaccessible"
            that.return_success = true
          }
        }).catch(function(error){
          console.log(error)
          that.return_message = "500: Internal Server Error"
          that.return_success = true
      })
    },
    renewList: function(){
      this.house_count = 0;
      this.house_list = [];
      const that = this
      var userID = localStorage.getItem("username")
      that.loading_success = 0
      axios({
        method: 'post',
        url: this.$url,
        headers:{
          "Content-type": "application/x-www-form-urlencoded"
        },
        data:{
          "Function":"get_host_house",
          "User_ID": userID
        }
      }).then(function(response){
        var res = response.data
        that.house_count = res["House_Amount"]
        that.house_list = that.house_list.concat(res["House[]"])
        that.loading_success = 3
        that.loading_success = 1
      }).catch(function(error){
        alert(error)
        that.loading_success = 2
      })
    }
  }
}
</script>


<style>
.new-house-dialog{
    height: 400px;
    width: 280px;
    z-index: 999;
}
</style>
