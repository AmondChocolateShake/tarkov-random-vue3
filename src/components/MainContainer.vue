<template>
    <div v-if="isLoading.value">...loading</div>
    <div v-else>
        <div class="main">
            <div class="weapon">
                <WeaponBox :weaponName = "weaponName" :imgLink= "imgLink"/>
            </div>
            <div class="itemListBox">
                <!-- <ItemList :modList= "modSlots"/> -->
            </div>
        </div>
        <div class="generateBtnBox">
            <GenBtn/>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue';
    import WeaponBox from './WeaponBox.vue';
    import GenBtn from './GenBtn.vue';
    export default {

        components:{
            WeaponBox,
            GenBtn,
        },

        setup(){
            const weaponName=ref('hel');
            const imgLink=ref('https://assets.tarkov.dev/5841474424597759ba49be91-image.webp');
            // const modSlots=ref([]);
            const isLoading=ref(true);
            
            return {
                weaponName,
                imgLink,
                isLoading
            };
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

    .generateBtnBox{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        

        width:100%,
        
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