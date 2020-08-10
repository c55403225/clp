 <template>
  <div class="common-card">
    <common-card 
      title='累计用户数'
      value='1,087,520'
    >
    <template>
      <div id="charts-total" :style="{width:'100%',height:'100%'}"></div>
    </template>
     <template
    v-slot:footer
    >
      <div class="day-bi">
          <span>日同比 </span>
          <span class='emphasis'>8.73%</span>
          <div class="top-angle"></div>
           <span class="month">月同比 </span>
          <span class='emphasis'>35.91%</span>
          <div class="buttom-angle"></div>
      </div>
    </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixins from './../mixins/commonCardMixins'
export default {
 mixins:[commonCardMixins],
 mounted(){
   const chart = document.getElementById('charts-total');
   var myChart = this.$echarts.init(chart);
   myChart.setOption({
     grid:{
       top:0,
       bottom:0,
       left:0,
       right:0
     },
     xAxis:{
       type:'value',
       show:false
     },
     yAxis:{
       type:'category',
       show:false
     },
     series:[{
       type:'bar',
       stack:'总量',//相同名称的系列合并
       data:[200],      
       barWidth:10,
       itemStyle:{
         color:'#45c946'
       }
     },{
       type:'bar',
       stack:'总量',//相同名称的系列合并
       data:[210],
       itemStyle:{
         color:'#eee '
       }
     },
       {
         type:'custom',
         stack:'总量',
         data:[200],
         //绘制自定义的图形
         renderItem:(params,api)=>{//两个属性提供了很多数据和api
           const value = api.value([0])//第一条数据的值
           const endPoint = api.coord([value,0])//获取当前坐标
           
           //返回值,返回绘制的图形
           return{
             type:'group',//分组(会允许传入Children),就可以放入多组数据
             position:endPoint,//绘图的坐标系
             children:[{
               type:'path',//绘制的类型(线段)
                shape:{//绘图的形状
                d:'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',//SVG图像内容
                x:-5,//X轴相对偏移量
                y:-20,//Y轴相对偏移量
                width:10,//图标的宽
                height:10,//图标的高
                layout:'cover'
                      },
                style:{
                fill:'#45c946'//填充色
                 }
                },
                {
               type:'path',//绘制的类型(线段)
                shape:{//绘图的形状
                d:'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',//SVG图像内容
                x:-5,//X轴相对偏移量
                y:10 ,//Y轴相对偏移量
                width:10,//图标的宽
                height:10,//图标的高
                layout:'cover'
                      },
                style:{
                fill:'#45c946'//填充色
                 }
                }
             ],
            
           }
         }
       }
       ]
   })
 }
};
</script>

<style lang='scss'>
.day-bi{
  display: flex;
  align-items: center;
  .month{
    margin-left: 10px;
  }
}
</style>
