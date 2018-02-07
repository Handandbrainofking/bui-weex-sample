<template>
    <div class="center">
        <bui-image src="/image/logo.png" width="244px" height="172px"></bui-image>
        <text class="h2">BUI-Weex</text>
        <text class="h4">专注为Weex前端开发者提供高质量UI组件</text>
        <bui-button type="primary" value="快速体验" @click="jumpTo"></bui-button>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    const globalEvent = weex.requireModule('globalEvent');

    module.exports = {
        data: function () {
            return {}
        },
        methods: {
            jumpTo () {
                var url = this.$getContextPath()+"/index.weex.js";
                this.$push(url);
            }
        },
        components: {},
        mounted: function () {
            globalEvent.addEventListener("androidback", function (e) {
                this.$pop();
            });
        }
    }
</script>
