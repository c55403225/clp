<template>
  <div class="conner">11111111</div>
</template>
 
<script>
    import 'echarts-liquidfill'
   export default{
       mounted(){
           const data = [0.68]
           const chart = this.$echarts.init(document.getElementById('conner'))
           chart.setOption({
               series:[{
                //    name:'水球图',
                   type:'liquidFill',
                   data
               }]
           })

                 }
 }
</script>
<style lang="scss">
    #conner{
        width: 100%;
        height: 100%;
    }
</style>