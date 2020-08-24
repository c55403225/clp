<template>
    <ve-liquidfill :data="chartData" :settings='chartSettings' height='100%'></ve-liquidfill>
</template>

<script>
    function getColor(value){
        // console.log(value)


        return value > 0 && value <= 0.5 ? 'rgba(97,216,0,0.7)'
               :value > 0.5 && value <= 0.8 ? 'rgba(204,178,26,0.7)'
               : value > 0.8 ? 'rgba(241,47,28,0.7)' : '#c7c7cb'
    }
     export default{
        data(){
             return{
             chartData:{
                 columns:['title','percent'],
                 rows:[{
                     title:'支付转换率',
                      percent:0.9856
                 }]
             },
             chartSettings:{ }
            }
        },
        mounted(){
            this.chartSettings = {
                 seriesMap:{
                    支付转换率:{
                         radius:'80%',
                         label:{
                            formatter:(v) =>{
                                     return `${Math.floor(v.data.value * 100)}%`
                                 },
                                  textStyle:{
                                 fontSize:36,
                                 color:'#999',
                                 fontWeight:'normal'
                             },
                             //水球title位置超过数据的颜色
                             position:['50%','50%'],
                             //水波纹
                             insideColor:'#fff'
                            
                         },
                         //改变边框样式
                         outline:{
                             itemStyle:{
                                 borderColor:'#aaa4a4',
                                 borderWidth:1,
                                 color:'none',
                                 shadowBlur:0,
                                 shadowColor:'#fff'
                             },
                             //外边框和内边框边距
                             borderDistance:0.
                         },
                         backgroundStyle:{
                             color:'#fff'
                         },
                         itemStyle:{
                            shadowBlur:0,
                            shaodwColor:'#fff'
                         },
                         amplitude:8,
                         color:[getColor(this.chartData.rows[0].percent)]
                    }
                 }
             
            }
        }
     }  
</script>
<style lang="scss">

</style>