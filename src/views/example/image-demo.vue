<template>
    <div>
        <bui-header
                title="图片"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>


        <scroller class="span1" style="padding: 10px">
            <div style="height: 2500px">
                <text class="h4">加载远程图片</text>
                <bui-image width="260px" height="260px" @load="onLoad()"
                           src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>

                <text class="h4">加载工程目录的图片(固定放在image目录下)</text>
                <bui-image src="/image/demo.png" width="300px" height="300px"></bui-image>
                <text class="h4">使用placeholder</text>
                <bui-image width="260px" placeholder="/image/demo.png" height="260px" @load="onLoad()"
                           src="https://img.alicdn.1com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-5601.jpg"></bui-image>
                <text class="h4">圆角图片(radius="30px")</text>
                <bui-image width="560px" height="560px"
                           radius="30px"
                           src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
                <text class="h4">实现background-image的效果</text>

                <div>
                    <bui-image width="750px" height="750px"
                               src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></bui-image>
                    <div class="title">
                        <text style="font-size:50px; color: #ff0000">Hello，Bui-Weex.</text>
                    </div>
                </div>

            </div>
        </scroller>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>


<script>
    const dom = weex.requireModule('dom');
    var buiweex = require("bui-weex");
    export default {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back'
                }
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "onLoad": function (e) {
                buiweex.toast("image load finished.");
            },
            "imgClick": function () {

            }
        }
    }
</script>

<style>
    .title {
        position: absolute;
        top: 50px;
        left: 10px;
    }
</style>