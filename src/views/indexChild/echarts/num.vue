<template>
  <div id="num">
  </div>
</template>
<script>
export default {
  props:{
     data1:{
       type:Array
     },
     data2:{
       type:Array
     }
  },
  watch:{
    data1(newVal,oldVal){
    this.echarts()
    }
  },
  methods: {
    echarts(){
    var chartDom = document.getElementById("num");
    var myChart = this.$echarts.init(chartDom);
    var option;

    option = {
      title:{
         text:"学生人数",
          textStyle:{
            color:"white"
          }
      },
      textStyle:{
         fontSize:18,
         color:"white",
      },
      xAxis: {
        type: "category",
        data:this.data2,
        
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: this.data1,
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  },
  }
}
</script>

<style scoped>
#num{
   margin-top:50px;
   color:white;
   width:900px;
   height:400px;
}

</style>