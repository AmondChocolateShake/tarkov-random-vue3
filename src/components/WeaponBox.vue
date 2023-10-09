<template lang="">
    <div id="weaponBox">
        <div class="imgBox">
            <img class="inspectImg" src={{imgLink}} alt="Picture of Gun">
        </div>
        <div class="weapon_name">
            <div>
                {{weaponName}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'WeaponBox',
    props:{
        weaponName:String,
        imgLink:String
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