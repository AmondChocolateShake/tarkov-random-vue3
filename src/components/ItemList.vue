<template>
    <div class="ItemList">
        <ItemBox/>
        
    </div>
</template>
<script>
import ItemBox from './ItemBox.vue';

export default {
    props:{
        modList:Array
    },
    name:"ItemList",
    components:{
        ItemBox
    }
}
</script>
<style>
    .ItemList{
        display: flex;
        width: 90%;
        height: 90%;
    }
    
</style>