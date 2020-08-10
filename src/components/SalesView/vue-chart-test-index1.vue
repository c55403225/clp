<template>
 
    <v-chart :options='data'/>
   
</template>

<script>
export default {
  data(){
    return{
      data:{
      xAxis:{
        type:'category'
      },
      yAxis:{},
      series:[{
        type:'line',
        data:[150,100,200,265,263,542,462]
      }]
    }
    }
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
