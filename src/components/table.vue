<template>
     <div class="table">
         <table>
             <tr>
                 <td class="one"></td>
                 <slot name="name"><td>姓名</td></slot>
                 <slot name="password"><td>密码</td></slot>
                 <slot name="other1"></slot>
                 <slot name="other2"></slot>
                 <slot name="action"><td>操作</td></slot>
            </tr>
            <slot name="main">
                <slot name="indexs"><td></td></slot>
                <slot name="names"><td></td></slot>
                <slot name="passwords"><td></td></slot>
                <slot name="other1s"><td></td></slot>
                <slot name="other2s"><td></td></slot>
                <slot name="actions" class="actions"><td></td></slot>
            </slot>   
         </table>
     </div>
</template>
<script>
export default {
}
</script>
<style scoped>
table{
    border:1px solid #ebebeb;
    border-collapse: collapse;
    background-color:white;
    width:98%;
    margin:20px 0 0 19px;
}
td{
    border: 1px solid #ebebeb;
    text-align: center;
    height:40px;
}
tr{
    width:100%;
}
.one{
    width:100px;
}
.actions{
    width:300px;
}
</style>