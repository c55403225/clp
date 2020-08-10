  <template>
  <div class="common-card">
   
    <common-card 
      title='累计订单量'
      value='￥3,800,85'
    >
    <template>
      <div id="total-orders-chart" :style="{width:'100%',height:'100%'}"></div>
    </template>
     <template
    v-slot:footer
    >
        <span>昨日订单量 </span>
      <span class='emphasis'>5,646,42</span>
    </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from './../mixins/commonCardMixins'
export default {
 mixins:[commonCardMixins],
 mounted(){
   const chart = document.getElementById('total-orders-chart');
   var myChart = this.$echarts.init(chart);
   myChart.setOption({
     xAxis:{
       type:'category',
       show:false,
       //默认会占padding,全屏需置为false
       boundaryGap:false
     },
     yAxis:{
       show:false
     },
     series:[{
       type:'line',
       data:[620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],
       //展示阴影部分面积
       areaStyle:{
         color:'purple'
       },
       //平滑的展示
       smooth:true,
       //去掉折线图的线
       lineStyle:{
         width:0,
         
       },
       //去掉折线图的点(透明度设为0)
       itemStyle:{
         opacity:0,
       }
     }],
     //都占满全屏
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

