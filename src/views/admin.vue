<template>
     <div class="admin">
         <admin-top></admin-top>
         <admin-left></admin-left>
         <div class="router"><router-view></router-view></div>
     </div>
</template>
<script>
import adminTop from "@/components/adminTop"
import adminLeft from "@/components/adminLeft"

export default {
   components:{
        adminTop,
        adminLeft
   }
}

</script>
<style scoped>
.admin{
     height:100%;
     background-color: #eaedfa;
}
.router{
     position:absolute;
     left:200px;
     top:80px;
     margin:10px;
     width:89%;
}
</style>