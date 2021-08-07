<template>
  <div id="num">
  </div>
</template>
<script>
export default {
  mounted() {
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            120,
            {
              value: 200,
              itemStyle: {
                color: "white",
              },
            },
            150,
            80,
            70,
            110,
            130,
          ],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style scoped>
#num{
   margin-top:50px;
   color:white;
   width:900px;
   height:400px;
}

</style>