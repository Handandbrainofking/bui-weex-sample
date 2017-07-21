<template>
    <div>
        <bui-header
                title="文本 h1 ~ h5"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="span1 center" style="padding: 10px">
            <text>默认文字大小</text>
            <text class="h5">...h5...</text>
            <text class="h4">...h4...</text>
            <text class="h3">...h3...</text>
            <text class="h2">...h2...</text>
            <text class="h1">...h1...</text>
        </div>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>

    var buiweex = require("bui-weex");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back',
                }
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>