<template>
    <div class="genBtn" on-click="">
        Generate
    </div>
</template>
<script>
export default {
    name:"GenBtn",
    setup(){
        

    }
}
</script>
<style>
    .genBtn{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100px;
        height: 70px;
        

        font-size: 20px;
        color: white;
        background-color: #6a6a6a;
        
        border: 4px solid rgba(255,255,255,80%);
        border-radius: 10px;

        margin-top: 20px;
    }
</style>