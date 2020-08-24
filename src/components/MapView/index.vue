
<template>
  <div class="map-view">
      <div class="left">
        <b-map-scatter />
      </div>
      <div class="right">
        <template>
          <el-card shadow='hover'>
              <template v-slot:header>
                <div class="title">用户月同比增长</div>
              </template>
              <template>
                <div class="chart-weapper">
                  <LiquidFill />
                </div>
              </template>
          </el-card>
          <el-card shadow='hover'>
            <template v-slot:header>
                <div class="title">热门搜索</div>
              </template>
              <template>
                <div class="chart-weapper">
                  <wordCard />
                </div>
              </template>
          </el-card>
        </template>
      </div>
  </div>
</template>

<script>
import BMapScatter from '../BMapScatter/index'
import LiquidFill from '../LiquidFill/index'
import wordCard from '../wordCard/index'
export default {
  components:{
    BMapScatter,
    LiquidFill,
    wordCard
  }
};
</script>

<style lang='scss' scoped>
.map-view{
  display: flex;
  margin-top: 20px;
  .left{
    flex:'0 0 80%';
    width: 80%;
    height: 600px;
    }
  .right{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 600px;
    .title{
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
    }
    .chart-weapper{
      width: 100%;
      height: 190px;
    }
  }
}
</style>
