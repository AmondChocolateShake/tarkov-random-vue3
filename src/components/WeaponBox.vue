<template>
    <div id="weaponBox">
        <div class="imgBox">
            <img class="inspectImg" src="https://assets.tarkov.dev/5841474424597759ba49be91-image.webp" alt="Picture of Gun">
        </div>
        <div class="weapon_name">
            <div>
                {{weaponName}}
            </div>
        </div>
    </div>
</template>
<script>
import { onBeforeMount } from 'vue';
export default {
    name:'WeaponBox',
    props:{
        weaponName:String,
        imgLink:String
    },
    setup(){

        

        onBeforeMount(()=>{
            

        });
        return{
        }

    }
}
</script>
<style>
    #weaponBox{
        display: flex;
        align-items: center;
        color: aliceblue;

        width: 350px;
        height: 150px;
        border:3px solid rgba(255,255,255,80%);
        border-radius: 15px;
    }
    .weapon_name{
        display: flex;
        justify-content: center;
        width: 100px;

    }

    .imgBox{
        width:250px;
        height: 150px;
        border-right: 3px solid rgba(255,255,255,80%);
    }

    .inspectImg{
        border-top-left-radius:15px;
        border-bottom-left-radius: 15px;
        width:100%;
        height: 100%;
    }
</style>