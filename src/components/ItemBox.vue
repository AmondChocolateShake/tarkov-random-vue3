<template lang="">
    <div id="Mod">
        <div class="itemImg">
            <img class="icon" src="https://assets.tarkov.dev/5a01ad4786f77450561fda02-8x.webp" alt="">
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
    data() {
        return {
            modName:"AK Kiba Arms VDM CS gas tube"
        }
    },

}
</script>
<style>
    #Mod{
        display: flex;
        justify-content: space-between;
        align-items: center;


        /* margin-top: 10px; */
        border: 3px solid rgba(255, 255, 255, 80%);
        width:100%;
        height:100px;
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
        width:100px;
        height:100px;
        color: rgba(255, 255, 255, 80%);
    }
    .itemImg > div{
        height:20px
    }

</style>