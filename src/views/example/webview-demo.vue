<template>
    <div>
        <bui-header
                title="百度一下，你就知道"
                :leftItem="leftItem"
                @leftClick="back">
                <text slot="left" class="close" @click="close">关闭</text>
        </bui-header>
        <div class="span1">
            <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
        </div>
    </div>

</template>
<style>
    .close{
        font-size: 32px;
        color: #ffffff;
    }
    .webview {
        flex: 1;
        height: 750px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
</style>
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<script>
    var webview = weex.requireModule('webview');
    var buiweex = require("bui-weex");
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'icon-back'
                },
                url: 'https://www.baidu.com'
            }
        },
        components: {},
        methods: {
            "back": function () {
                webview.goBack(this.$refs.webview);
            },
            "close":function () {
                buiweex.pop();
            },
            "start": function (event) {
                buiweex.toast('开始加载网页')
            },
            "finish": function (event) {
                buiweex.toast('加载完成')
            },
            "error": function (event) {
                buiweex.toast('出错了')
            }
        },
        mounted:function () {

        }
    }
</script>