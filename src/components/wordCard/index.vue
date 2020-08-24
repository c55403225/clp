<template>
  <ve-wordcloud :data='chartData' height='100%' :settings='chartSettings'></ve-wordcloud>
</template>
 
<script>
   
    export default {
        data(){
            return{
                chartData:{
                    columns: ['name', 'value'],//第一个参数表示文本 ,第二个参数表示字体大小
                    rows:[
                            {
                            name:'陈理鹏',
                            value:212
                            },
                            {
                            name:'李慧星',
                            value:254
                            },
                            {
                            name:'王岩',
                            value:125
                            },
                            {
                            name:'王甜甜',
                            value:125
                            },
                            {
                            name:'潘星有',
                            value:156
                            },
                            {
                            name:'徐辉',
                            value:125
                            },
                            {
                            name:'吴金荣',
                            value:131
                            },
                            {
                            name:'储晓滨',
                            value:142
                            },
                            {
                            name:'陈超',
                            value:126
                            },
                            {
                            name:'王留恒',
                            value:102
                            },
                            {
                            name:'李佳华',
                            value:191
                            }

                    ]
                },
                chartSettings:{
                    color:['rgba(79,216,0,.7)','rgba(204,178,26,.7)','rgba(255,166,35,.7)','rgba(156,13,113,.7)']
                }
            }
        }
    }

     
</script>
<style lang="scss">

</style>