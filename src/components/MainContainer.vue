<template lang="">
    <div class="main">
        <div class="weapon">
            <WeaponBox/>
        </div>
        <div class="itemListBox">
            <ItemList/>
        </div>
    </div>
    <GenBtn/>
</template>

<script>
import WeaponBox from './WeaponBox.vue';
import ItemList from './ItemList.vue';
import GenBtn from './GenBtn.vue';

export default {
    name:"MainContainer",
    components:{
        WeaponBox,
        ItemList,
        GenBtn
    }

}
</script>
<style>
    .main{

        width: 500px;
        height: 600px;
        background-color: #1e1e1e;
        border-radius: 15px;
        border:2px solid rgba(255, 255, 255, 80%);
    }

    .generateBtn{
        color: aliceblue;
    }

    .weapon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        border-bottom: 3px solid rgba(255,255,255,80%);
    }

    .itemListBox{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height:400px;
        min-height: 400px;
    }

</style>