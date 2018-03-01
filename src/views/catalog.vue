<template>
    <div class="catalog">
        <text>{{title}}</text>
    </div>
</template>
<style>
    .catalog {
        height: 80px;
        background-color: #FAEBD7;
        padding-left: 20px;
        justify-content: center;
    }
</style>
<script>
    module.exports = {
        props: {
            title: {
                type: String
            }
        }
    }
</script>