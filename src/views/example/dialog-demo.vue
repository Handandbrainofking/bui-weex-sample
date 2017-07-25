<template>
    <div>

        <bui-header
                title="弹出层"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="span1">
            <bui-button value="打开窗口" @click="open"></bui-button>
        </div>

        <!--自定义Dialog-->
        <bui-dialog  @btnClick="onDialogCallback"  @maskClick="maskClick" :show="showDialog">
            <text>欢迎使用BUI-Weex!</text>
            <text>基于阿里weex构建的一套高质量UI框架</text>
        </bui-dialog>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    var buiweex = require("bui-weex");

    export default {
        data: function(){
            return {
                leftItem: {
                    icon: 'icon-back',
                },
                showDialog: false
            }
        },
        components: {
            'bui-dialog': buiweex.buiDialog
        },

        methods: {
            "back": function () {
                buiweex.pop();
            },
            "open": function () {
                this.showDialog = true;
            },
            "onDialogCallback": function (text) {
                this.showDialog = false;
                buiweex.toast(text)
            },
            "maskClick":function () {
                this.showDialog = false;
                buiweex.toast("close")
            }
        }
    }
</script>