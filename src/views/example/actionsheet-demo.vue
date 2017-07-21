<template>
    <div class="p-r span1">
        <bui-header
                title="弹出ActionSheet"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="span1">
            <bui-button value="弹出" @click="openActionsheet()"></bui-button>
        </div>

        <!--自定义上拉菜单-->
        <bui-actionsheet
                :items="actionsheetItems"
                :show="showBar"
                @close="closeActionsheet"
                @itemClick="actionsheetItemClick"
                @btnClick="actionsheetBtnClick"
                ref="actionsheet"
        ></bui-actionsheet>

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
                },
                showBar: false,
                actionsheetItems: ['复制文字', '收藏动态']
            }
        },
        components: {
            'bui-actionsheet': buiweex.buiActionSheet
        },

        methods: {
            "back": function () {
                buiweex.pop();
            },
            //打开上拉菜单
            "openActionsheet": function () {
                this.showBar = true;
                this.$nextTick(e=>{
                    this.$refs.actionsheet.open();
                });
            },
            "closeActionsheet": function () {
                this.showBar = false;
            },
            "actionsheetItemClick": function (item) {
                buiweex.toast(item)
                this.showBar = false;
            },
            "actionsheetBtnClick": function () {
                this.showBar = false;
            }
        }
    }
</script>
<style>

</style>