<template lang="">
    <div v-if="isLoading">...loading</div>
    <div v-else>
        <div class="main">
            <div class="weapon">
                <WeaponBox :weaponName = "weaponName.value" :imgLink= "imgLink.value"/>
            </div>
            <div class="itemListBox">
                <ItemList :modList= "modSlots.value"/>
            </div>
        </div>
        <GenBtn @click= "generateRandomData"/>
    </div>
</template>

<script setup>
    import { onBeforeMount, ref } from 'vue';

    const weaponName=ref('');
    const imgLink=ref('');
    const modSlots=ref([]);
    const isLoading=ref(true);

    onBeforeMount(() => {
        generateRandomData()
    });

    function generateRandomData(){fetch('http://localhost:3000/weapon/generate', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({})
        })
        .then( res => res.json() )
        .then(data =>{
            weaponName.value=data.name;
            imgLink.value=data.imgLink;
            modSlots.value=data.modSlots;
            isLoading.value=false;
            console.log(data);
            console.log(isLoading);
        });
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