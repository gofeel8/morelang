<template>
    <div class="page-not-found">
        <h1 class="title">
            404<br>Not Found
        </h1>
        <div class="desc">
            The Page you're looking for was not found.
        </div>
        <button class="go-back-btn btn btn-primary" type="button" @click="goBack()">돌아 가기</button>
    </div>    
</template>

<script>
    export default {
        name: "notFound"
        ,
        methods:{
             goBack() {
                 this.$router.go(-1);
             }
        }
    }
</script>

<style scoped>
    .page-not-found {
        max-width: 500px;
        margin: 0 auto;
        margin-top: 50px;
        padding: 40px;
        border: 1px solid #c8c8c8;
        text-align: center;
    }

    .page-not-found .title {
        font-size: 50px;
        letter-spacing: 10px;
        margin-bottom: 10px;
    }

    .page-not-found .desc {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .go-back-btn {
        min-width: 160px;
    }
</style>