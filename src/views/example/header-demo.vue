<template>
    <div>
        <bui-header
                title="头部"
                :leftItem="leftItem"
                :rightItem="rightItem"
                @leftClick="back"
                @rightClick="rightclick"
                @centerClick="centerclick">
        </bui-header>

        <div style="padding: 10px" class="span1">
            <text class="h4">居中对齐</text>
            <bui-header :title="'开发者中心'"
                        :ios=false
                        :leftItem="leftItem"
                        :rightItem="rightMenu"></bui-header>

            <text class="h4">左边对齐</text>
            <bui-header :ios=false
                        :styleEx="style1"
                        :leftItem="leftMenu"
                        :rightItem="rightMenu">
                <bui-icon slot="right" :name="'icon-search'" size="45px" color="#ffffff" class="pdl10"></bui-icon>
            </bui-header>

            <text class="h4">换个颜色</text>
            <bui-header :ios=false
                        :styleEx="style2"
                        :leftItem="leftMenu"
                        :rightItem="rightMenu">
                <bui-icon slot="right" :name="'icon-search'" size="45px" color="#ffffff" class="pdl10"></bui-icon>
            </bui-header>
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
                    icon: 'icon-back'
                },
                rightItem: {
                    text: '更多'
                },
                rightMenu: {
                    icon: 'icon-menu'
                },
                leftMenu: {
                    icon: 'icon-back',
                    text: '新闻中心'
                },
                style1: {
                    'background-color': '#ff4e24',
                },
                style2: {
                    'background-color': '#00c277'
                }
            }
        },
        methods: {
            "back": function () {
                buiweex.pop();
                buiweex.toast('left')
            },
            "rightclick": function () {
                buiweex.toast('right')
            },
            "centerclick": function () {
                buiweex.toast('center')
            }
        }
    }
</script>
<style>
    .pdl10 {
        padding-left: 10px;
    }
</style>