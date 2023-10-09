<template>
    <div class="Mod">
        <div class="itemImg">
            <img class="icon" src={{imgLink}} alt="">
            <!-- <div>scope</div> -->
        </div>
        <div class="name">
            <div>{{modName}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ItemBox',
    props:{
        modName:String,
        imgLink:String,
    }

}
</script>
<style>
    .Mod{
        display: flex;
        justify-content: space-between;
        align-items: center;


        /* margin-top: 10px; */
        border: 1px solid rgba(255, 255, 255, 80%);
        width:100%;
        height:70px;
    }

    .icon{
        width:75%;
        height:75%;
        border:2px solid rgba(255, 255, 255, 80%);
        background-color:#121212;
    }
    .name{
        width: 350px;
        color: rgba(255, 255, 255, 80%);
    }
    
    .itemImg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:70px;
        height:100%;
        color: rgba(255, 255, 255, 80%);
    }
    .itemImg > div{
        height:20px
    }

</style>