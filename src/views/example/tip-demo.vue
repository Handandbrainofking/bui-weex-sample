<template>
    <div>
        <bui-header
                title="提示"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>


        <div style="padding: 10px;">
            <bui-tip value="bui-weex success tip."></bui-tip>
            <bui-tip type="info" value="bui-weex info tip."></bui-tip>
            <bui-tip type="warning" value="bui-weex warning tip."></bui-tip>
            <bui-tip type="danger"
                     value="bui-weex 是专门为weex开发者打造的高质量UI组件"></bui-tip>
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
                    icons: 'icon-back'
                },
            }
        },
        components: {
            'bui-tip': buiweex.buiTip
        },
        methods: {
            "back": function () {
                buiweex.pop();
            }
        }
    }
</script>