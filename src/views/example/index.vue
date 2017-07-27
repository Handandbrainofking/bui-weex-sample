<template>
    <div>

        <bui-header
                title="BUI-Sample"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <list class="bui-list">
            <cell class="bui-cell" v-for="item in data" @click="jumpTo(item.url)">
                <div class="bui-list-left">
                    <bui-image width="80px" height="80px" radius="40px" src="/image/demo.png"></bui-image>
                </div>
                <div class="bui-list-main">
                    <text class="bui-list-title">{{item.name}}</text>
                    <text class="bui-list-subtitle">{{item.text}}</text>
                </div>
                <div class="bui-list-right">
                    <bui-icon name="icon-go"></bui-icon>
                </div>
            </cell>
        </list>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    var buiweex = require("bui-weex");

    module.exports = {
        data: function () {
            return {
                leftItem: {
                    icons: 'icon-back'
                },
                data: [
                    {name: "布局(Flexbox)", text: "", url: "flex-box-demo.weex.js"},
                    {name: "文本(h1 ~ h5)", text: "", url: "text-demo.weex.js"},
                    {name: "字体图标(bui-icon)", text: "", url: "icon-demo.weex.js"},
                    {name: "按钮(bui-button)", text: "", url: "button-demo.weex.js"},
                    {name: "头部(bui-header)", text: "", url: "header-demo.weex.js"},
                    {name: "列表(bui-list)", text: "", url: "list-demo.weex.js"},
                    {name: "面板(bui-panel)", text: "", url: "panel-demo.weex.js"},
                    {name: "选项卡(bui-tabbar)", text: "", url: "tabbar-list-demo.weex.js"},
                    {name: "提示(bui-tip)", text: "", url: "tip-demo.weex.js"},
                    {name: "图片(bui-image)", text: "", url: "image-demo.weex.js"},
                    {name: "表单元素", text: "", url: "form-base-demo.weex.js"},
                    {name: "表单布局", text: "", url: "form-layout-demo.weex.js"},
                    {name: "弹出层(bui-dialog)", text: "", url: "dialog-demo.weex.js"},
                    {name: "弹出层(bui-actionsheet)", text: "", url: "actionsheet-demo.weex.js"},
                    {name: "弹出层(bui-dropdown)", text: "", url: "dropdown-demo.weex.js"},
                    {name: "左右侧滑动栏(bui-slider-bar)", text: "", url: "slider-bar-demo.weex.js"},
                    {name: "延迟加载(bui-lazy-render)", text: "", url: "lazy-render-demo.weex.js"},
                    {name: "图片轮播(bui-image-slider)", text: "", url: "slider-demo.weex.js"},
                    {name: "滚动组件(Scroller)", text: "", url: "scroller-demo.weex.js"},
                    {name: "浏览器(web)", text: "", url: "webview-demo.weex.js"},
                    {name: "选择器(Picker)", text: "", url: "picker-demo.weex.js"},
                ]
            }
        },
        methods: {
            jumpTo: function (file) {
                if (file) {
                    buiweex.push(buiweex.getContextPath() + "/" + file, {"name": "buiweex"});
                }
            },
            back: function () {
                buiweex.pop();
            }
        }
    }
</script>
