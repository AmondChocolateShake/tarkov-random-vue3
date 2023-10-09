<template lang="">
    <div class="main">
        <div class="weapon">
            <WeaponBox/>
        </div>
        <div class="itemListBox">
            <ItemList :modList="modList"/>
        </div>
    </div>
    <GenBtn @click="generateRandomData"/>
</template>

<script>
import WeaponBox from './WeaponBox.vue';
import ItemList from './ItemList.vue';
import GenBtn from './GenBtn.vue';
import { ref } from 'vue';

export default {
    name:"MainContainer",
    components:{
        WeaponBox,
        ItemList,
        GenBtn
    },
    setup(){

        
        let modList=ref([]);
        const setModList=(data)=>{
            modList.value=data;
        }

        async function generateRandomData(){
            await fetch('http://localhost:3000/weapon/generate', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({})
            }).then( res => res.json() )
            // setModList(res);
        }

        return(
            generateRandomData(),
            setModList(),
            modList
        )

        
        

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