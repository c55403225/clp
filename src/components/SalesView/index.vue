<template>
   <div class="sales-view">
     
    <el-card shadow="hover" :body-style="{padding:'0 0 20px 0'}">
      <template v-slot:header> <!-- 定制header插槽 -->
          <div class="menu-wrapper">
                <el-menu
                  mode='horizontal'
                  :default-active='activeIndex'
                  @select="onMenuSelect"
                  class="sales-view-menu"

                >
                  <el-menu-item index="1">销售额</el-menu-item>
                  <el-menu-item index="2">访问量</el-menu-item>
                </el-menu>
                <div class="menu-right">
                      <el-radio-group
                        size="small"
                        v-model="radio1"
                      >
                      <el-radio-button label='今日' />
                      <el-radio-button label='本周' />
                      <el-radio-button label='本月' />
                      <el-radio-button label='今年' />
                      </el-radio-group>
                 
                 <el-date-picker
                      v-model="value1"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                      size="small"
                      class="selase-view-data-picker">
                      >
                      
                </el-date-picker>
                </div>
          </div>
      </template>
      <template>
        <div class="seles-view-chart-wraaper">
          <v-chart :options="chartOptions" />
          <div class="seles-view-list-weappre">
            <div class="seles-view-title">排行榜
            <div class="list-item-weapper">
              <div class="list" v-for='item in Daker' :key='item.number'>
                <div  :class="['list-item-number',+ item.number < 4 ?'top-number' : '']">{{item.number}}</div>
                <div class="list-item-name">{{item.name}}</div>
                <div class="list-item-money">{{item.money}}</div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
   </div>
</template>

<script>
export default {
    data(){
      return {
        activeIndex:'1',
        radio1:'今日',
        value1:null,
        chartOptions:{
          title:{
            text:'年度销售额',
            textStyle:{
              fontSize:12,
              color:'#666'
            },
            left:25,
            top:20
          },
          xAxis:{
            type:'category',
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick:{
              alignWithLabel:true,//去除X轴小竖线
              lineStyle:{
                color:'#999'
              },
              axisLine:{
                lineStyle:{
                  color:'#999'
                },
                axisLabel:{
                  color:'#333'
                }
              }
            },
          },
          yAxis:{
            //隐藏纵坐标
            axisLine:{
              show:false
            },
            // 隐藏纵坐标开头小竖线
            axisTick:{
              show:false
            },
            //将X轴变成虚线
            splitLine:{
              lineStyle:{
                type:'dotted',
                color:'#eee'
              }
            }
          },
          series:[{
            type:'bar',
            barWidth:'35%',
            data:[200,250,300,350,300,250,300,250,300,350,300,250]
          }],
           color:['#3398DB'],
           grid:{
             top:70,
             left:60,
             right:60,
             bottom:50
           }
        },
       
        Daker:[
          {number:1,name:'肯德基',money:'323,234'},
          {number:2,name:'麦当劳',money:'299,132'},
          {number:3,name:'肯德基',money:'283,998'},
          {number:4,name:'海底捞',money:'266,223'},
          {number:5,name:'西贝筱面村',money:'223,445'},
          {number:6,name:'汉堡王',money:'219,663'},
          {number:7,name:'真功夫',money:'200,997'}
          ],
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    methods:{
      onMenuSelect(index){
        this.activeIndex=index
        console.log(this.activeIndex)
      }
    }
};
</script>

<style scoped lang='scss'>
.sales-view {
  margin-top: 20px;
    .menu-wrapper{
         display: flex;
         position: relative;
         .sales-view-menu{
           width: 100%;
           padding-left: 20px;
           .el-menu-item{
             height: 50px;
             line-height: 50px;
             margin: 0 20px;
           }
         }
         .menu-right{
           position:absolute;
           right: 20px;
           top: 0;
           display: flex;
           align-items: center;
           justify-self: flex-end;
           height: 50px;
           .selase-view-data-picker{
             margin-left: 20px;
           }
         }
    }
    .seles-view-chart-wraaper{
      display: flex;
      height: 270px;
      .echarts{
        flex: 0 0 70%;
        width: 70%;
        height: 100%;
        // background: chocolate; 
      }
      .seles-view-list-weappre{
        flex:1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .seles-view-title{
          margin-top: 20px;
          font-size: 12px;
          color: #666;
          font-weight: 500;
        }
        .list-item-weapper{
          margin-top: 15px;
          .list{
              display: flex;
              align-items: center;
              font-size: 12px;
              height: 20px;
              padding: 6px 20px 6px 0;
              .list-item-number{
                display: flex;
                justify-content: center;
                align-items: center;
                color:#333;
                width:20px;
                height: 20px;
                &.top-number{
                  border-radius: 50%;
                  background: #000;
                  color: #fff;
                  font-weight: 500;
                }
              }
              .list-item-name{
                margin-left: 20px;
                color: #333;
              }
              .list-item-money{
                flex:1;
                text-align: right;
              }
            }
        }
        
      }
    }
}


</style>
