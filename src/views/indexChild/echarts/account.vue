<template>
  <div id="account"></div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array
    }
  },
  watch:{
    data(newVal,oldVal){
      this.echarts()
    }
  },
  methods: {
    echarts(){
    var chartDom = document.getElementById("account");
    var myChart = this.$echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "学生来源地",
        left: "center",
        textStyle:{
          color:"white"
        }
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "百分比例",
          type: "pie",
          radius: "50%",
          data:this.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
  }
};
</script>

<style scoped>
#account{
    width:400px;
    height:350px;
    position: absolute;
    right:50px;
    top:600px;
    border:1px solid black
}
</style>