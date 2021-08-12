<template>
  <div id="tearcherEcharts">

  </div>
</template>

<script>
export default {
    props:{
        dataYear:{
            type:Array
        },dataFinish:{
            type:Array
        },dataNotFinish:{
            type:Array
        }
    },
    watch:{
       dataYear(newVal,oldVal){
           this.echarts()
       }
    },
  methods:{
    echarts(){
 var chartDom = document.getElementById('tearcherEcharts');
var myChart = this.$echarts.init(chartDom);
var option;

option = {
    title: {
        text: '学生事件处理情况',
        textStyle:{
            color:"white"
        }
    },
    textStyle:{
        color:"white"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['处理完事件', '未处理事件']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: this.dataYear
    },
    series: [
        {
            name: '处理完事件',
            type: 'bar',    
            data: this.dataFinish
        },
        {
            name: '未处理事件',
            type: 'bar',
            data: this.dataNotFinish
        }
    ]
};

option && myChart.setOption(option);

  }
  }
}
</script>

<style scoped> 
#tearcherEcharts{
    width:900px;
    height:300px;
}
</style>