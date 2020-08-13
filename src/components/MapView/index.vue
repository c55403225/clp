<template>
<div class="bottom-view">
  <div class="view">
      <el-card shadow="hover" :style="{padding:'0 0 0 0' }">
      <template v-slot:header>
        <div class="title-weapper">关键词搜索</div>
      </template>
    
      <template>
       <div class="chart-weapper">
          <div class="chart-inner">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">93,634</div>
              <v-chart :options='userNumner'/>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">198,782</div>
              <v-chart :options='userNumner'/>
            </div>
       </div>
       <div class="table-weapper">
         <el-table :data="tableData">
            <el-table-column
            prop="rank"
            label="排名"
            width="180" />
            <el-table-column
            prop="keyword"
            label="关键词"
            width="180"
             />
            <el-table-column
            prop="count"
            label="总搜索量"
            />
            <el-table-column
            prop="users"
            label="搜索用户数"
            />

         </el-table>
         <el-pagination 
            layout="prev, pager, next"
            :total="100"
            :page-size="4"
            background 
            @current-change='onPageChange' 

         />
       </div>
       </div>
      </template>
    </el-card>
  </div>
    <div class="view">
      <el-card shadow='hover'>
          <template v-slot:header>
            <div class="title-weapper">
              <div class="title">分类销售排行</div>
              <div class="radio-weapper">
                <el-radio-group v-model='radioSelect' size="small">
                  <el-radio-button label="品类"></el-radio-button>
                   <el-radio-button label="商品"></el-radio-button>
                </el-radio-group>
              </div>
            </div>
          </template>
          <template>
            <div class="chart-weapper">
              <v-chart :options='categoryOptions'/>
            </div>
          </template>
      </el-card>
    </div>
 </div>
</template>

<script>
export default {
  data(){
    return{
      userNumner:{
        xAxis:{
          type:'category',
          //设置0边距
          boundaryGap:false
        },
        yAxis:{
          show:false,
          //自定义距离最高数的范围
          // min:0,
          // max:300
        },
        series:[{
          type:'line',
          data:[100,150,170,160,255,159,251,102,355],
          //设置显示成面积
          areaStyle:{
            color:'rgba(95,187,255,.7)'
          },
          lineStyle:{
            color:'rgb(95,187,255)'
          },
          itemStyle:{
            opacity:0
          },
          //变成平滑的曲线
          smooth:true
        }],
        grid:{
          top:0,
          bottom:0,
          left:0,
          right:0
        }
      },
      sousuoNumber:{},
      tableData:[
        {id:1,rank:1,keyword:'重庆',count:100,users:90,range:'90%'},
        {id:2,rank:2,keyword:'北京',count:100,users:90,range:'90%'},
        {id:3,rank:3,keyword:'乌鲁木齐',count:100,users:90,range:'90%'},
        {id:4,rank:4,keyword:'杭州',count:100,users:90,range:'90%'},
        {id:5,rank:5,keyword:'秦皇岛',count:100,users:90,range:'90%'}
      ],
      radioSelect:'品类',
      categoryOptions:{}
    }
  },
  methods:{
    onPageChange(page){
      console.log('点击'+page)
    },
    renderPieChart(){
      const mokeData = [
        {
          legendname:'大盘鸡',
          value:67,
          percent:'15.40',
          itemStyle:{
            color:'#8d7fec'
          },
          // name:'大盘鸡 | 15.40'
        },
        {
          legendname:'丁丁炒面',
          value:97,
          percent:'22.30',
          itemStyle:{
            color:'#5085f2'
          },
          // name:'丁丁炒面 | 22.30'
        },
        {
          legendname:'过油肉拌面',
          value:92,
          percent:'21.15',
          itemStyle:{
            color:'#e7e702'
          },
          // name:'过油肉拌面 | 21.15'
        },
        {
          legendname:'烤全羊',
          value:100,
          percent:'25.5',
          itemStyle:{
            color:'#e505e4'
          },
          //  name:'烤全羊 | 25.5'
        }
      ]
      this.categoryOptions = {
        title:[
           {
             text:'品类分布',
             textStyle:{
               fontSize:14,
               color:'#666'
             },
             left:20,
             top:20 
           },
           {
             text:'累计订单量',
             subtext:'320 ',
             x:'34.5%',
             y:'47.5%',
             textStyle:{
               color:'#999',
               fontSize:14
             },
             subtextStyle:{
                fontSize:28,
                color:'#333'
             },
             textAlign:'center'
           }
        ],
        series:[{
          name:'品类分布',
          type:'pie',
          data:mokeData,
          label:{
            normal:{
              show:true,
              position:'outter',//标题显示内外(inner是在内部显示)
              formatter:function(params){
                  // console.log(params)
                  return params.data.legendname
              }
            }
          },
          center:['35%','50%'],
          radius:['45%','60%'],
          labelLine:{
            normal:{
              length:5,
              length2:3,
              smooth:true
            }
          },
           //是否按照顺时针排列
           clockwise:false,
          itemStyle:{
            borderWidth:4,
            borderColor:'#fff'
          }
        }],
        legend:{
            //可以滑动
            type:'scroll',
            //垂直分布
            orient:'verticcal',
            height:250,
            left:'70%',
            top:'middle',
            textStyle:{
              color:'#8c8c8c'
            }
        },
        //提示信息定制
        tooltip:{
          trigger:'item',
          formatter:function(params){
            console.log(params)
            const str = params.seriesName + '<br />' + params.marker  + '' + params.data.legendname + '<br />' + '数量: ' + params.data.value + '<br />' + '占比: ' + params.data.percent + '%';
            return str 
          }
        }
      }
    },
    
  },
   mounted(){
    this.renderPieChart()
  }
 
};
</script>

<style lang='scss'>
    .bottom-view{
      display: flex;
      margin: 20px;
      .view{
       flex:1;
       width: 50%;
       box-sizing: border-box;
       &:first-child{
          padding-right: 10px;
       }
       &:last-child{
         padding-left: 20px;
       }
       .el-card__header{
         padding:0 0 0 0;
       }
       .title-weapper{
         display: flex;
         align-items: center;
         line-height: 60px;
         box-sizing: border-box; 
         border-bottom: 1px solid #eee;
         font-size: 14px;
         font-weight: 500;
         padding: 0 0 0 20px;
         .radio-weapper{
           flex: 1;
           display: flex;
           justify-content: flex-end;
           padding-right: 20px;
         }
       }
       .chart-weapper{
         display: flex;
         flex-direction: column;
         height: 452px;
         .chart-inner{
           display: flex;
           padding: 0 10px;
           margin-top: 20px;
           .chart{
             flex: 1;
             padding: 0 10px;
             .chart-title{
               color: #999;
               font-size: 14px;
           }
           .chart-data{
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px ;
           }
           .echarts{
             height: 50px;
           }
           }
         }
         .table-weapper{
           flex: 1;
           margin: 20px;
           padding:0 20px 20px;
           .el-pagination{
             display: flex;
              justify-content: flex-end;
              margin-top: 15px;
           }
         }
       }
      }
    
      
    }
</style>
 