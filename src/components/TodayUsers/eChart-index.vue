<template>
  <div class="common-card">
      
   <common-card 
   title='今日交易用户数'
      value='81,014'
    >
      <template>
        <div id="chart-users" :style="{width:'100%',height:'100%'}"></div>
      </template>
        <template
    v-slot:footer
    >
        <span>退货率 </span>
      <span class='emphasis'>5.14%</span>
    </template>
    </common-card>
  </div>
</template>
  

<script>
import commonCardMixins from './../mixins/commonCardMixins'
export default {
 mixins:[commonCardMixins],
 mounted(){
   const chart = document.getElementById('chart-users');
   var myChart = this.$echarts.init(chart);
   myChart.setOption({
     color:'#3398DB',
     series:[{
       type:'bar',
       data:[410,82,200,334,390,330,220,150,82,200,134,290,330,150],
       barWidth:10.5
     }],
     xAxis:{
       type:'category',
       data:['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00'],
       show:false
     },
     yAxis:{
       show:false
     },
     
     grid:{
       top:0,
       bottom:0,
       left:0,
       right:0
     }
   })
 }
};
</script>

<style>
</style>
