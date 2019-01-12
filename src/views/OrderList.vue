<template>
    <div>
		<br/>
		<nothing v-if="loading_success==2"></nothing>
		<div style="text-align:center" v-if="loading_success==0">
			<md-progress-spinner  md-mode="indeterminate" :md-diameter="50"></md-progress-spinner>
		</div>
		<div v-if="loading_success==1">
			<order-omit v-for="(item, index) in order_list" :order_id = "item['Order_ID']" :house_id="item['House_ID']" :facility_id="item['Facility_ID']" :status="item['Order_Status']" :key = "index"></order-omit>
		</div>
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
import OrderOmit from '../components/OrderOmit.vue'
import Nothing from '../components/Nothing.vue'
import axios from 'axios'
export default {
  name: 'OrderList',
  components : {
	OrderOmit,
	Nothing
  },
  created:function(){
    const that = this
	var userID = localStorage.getItem("username")
    axios({
      method: 'post',
      url: this.$url,
      headers:{
        "Content-type": "application/x-www-form-urlencoded"
      },
      data:{
        "Function":"UserGetOrder",
        "User_ID": userID,
        "User_Type":"Landlord"
      }
    }).then(function(response){
      var res = response.data
      that.order_count += res["Order"].length
      that.order_list = that.order_list.concat(res["Order"])
      that.loading_success = 1
    }).catch(function(error){
		console.log(error)
		that.loading_success = 2
	})
  },
  data: () => ({
	menuVisible: false,
	order_count:0,
	order_list:[],
	loading_success: 0
  }),
  // 计算当前窗口的高度并进行设备适配
  methods:{
    currentWindowHeights: function(){
      return window.innerHeight.toString()
    }
  }
}
</script>
