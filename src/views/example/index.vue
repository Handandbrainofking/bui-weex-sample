<template>
    <div>
        <bui-header title="BUI-Sample" :leftItem="leftItem" @leftClick="back">
        </bui-header>
        <scroller>
            <catalog title="Layout"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="index" v-for="(item,index) in layout">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Base"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="index" v-for="(item,index) in base">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Form"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="index" v-for="(item,index) in form">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="Popup"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="index" v-for="(item,index) in popup">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
            <catalog title="More"></catalog>
            <bui-cell @cellClick="jumpTo(item.url)" :title="item.name" :key="index" v-for="(item,index) in more">
                <bui-icon slot="action" name="ion-ios-arrow-right"></bui-icon>
            </bui-cell>
        </scroller>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    import catalog from '../catalog.vue';
    const globalEvent = weex.requireModule('globalEvent');
    module.exports = {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                layout: [
                    {name: "布局(flexbox)", text: "", url: "flex-box-demo.weex.js"},
                ],
                base:[
                    {name: "按钮(bui-button)", text: "", url: "button-demo.weex.js"},
                    {name: "图标(bui-icon)", text: "", url: "icon-demo.weex.js"},
                    {name: "图片(bui-image)", text: "", url: "image-demo.weex.js"},
                    {name: "提示(bui-tip)", text: "", url: "tip-demo.weex.js"},
                    {name: "面板(bui-panel)", text: "", url: "panel-demo.weex.js"},
                    {name: "头部(bui-header)", text: "", url: "header-demo.weex.js"},
                    {name: "列表(bui-list)", text: "", url: "list-demo-pullrefresh.weex.js"},
                    {name: "滑动菜单(bui-swipe-cell)", text: "", url: "swipe-cell-demo.weex.js"},
                    {name: "选项卡(bui-tabbar)", text: "", url: "tabbar-demo.weex.js"},
                    {name: "选项卡(bui-tabbar-scroller)", text: "", url: "tabbar-scroller-demo.weex.js"},
                    {name: "选项卡(bui-ep-slider)", text: "", url: "ep-slider-demo.weex.js"},
                    {name: "选项卡(bui-timeline)", text: "", url: "timeline-demo.weex.js"},
                ],
                form:[
                    {name: "单元格(bui-cell)", text: "", url: "cell-demo.weex.js"},
                    {name: "单选(bui-radio)", text: "", url: "radio-demo.weex.js"},
                    {name: "多选(bui-checkbox)", text: "", url: "checkbox-demo.weex.js"},
                    {name: "数字加减(bui-number-input)", text: "", url: "input-number-demo.weex.js"},
                ],
                popup:[
                    {name: "弹出框(bui-dialog)", text: "", url: "dialog-demo.weex.js"},
                    {name: "上拉菜单(bui-actionsheet)", text: "", url: "actionsheet-demo.weex.js"},
                    {name: "下拉菜单(bui-dropdown)", text: "", url: "dropdown-demo.weex.js"},
                    {name: "弹出层(bui-popup)", text: "", url: "popup-demo.weex.js"}
                ],
                more:[
                    {name: "懒加载(bui-lazy-render)", text: "", url: "lazy-render-demo.weex.js"},
                    {name: "轮播图片(bui-image-slider)", text: "", url: "slider-demo.weex.js"},
                    {name: "搜索框(bui-searchbar)", text: "", url: "searchbar-demo.weex.js"},
                    {name: "富文本(bui-richcell)",text:"",url:"richcell-demo.weex.js"},
                    {name: "多格筛选(bui-grid-select)",text:"",url:"grid-select-demo.weex.js"},
                    {name: "流程图(bui-flow)",text:"",url:"flow-demo.weex.js"},
                ]
            }
        },
        components: {
            catalog
        },
        methods: {
            jumpTo (file) {
                if (file) {
                    var url = this.$getContextPath() + "/" + file;
                    this.$push(url);
                }
            },
            back () {
                this.$pop();
            }
        },
        mounted: function () {
            globalEvent.addEventListener("androidback",(e)=> {
                this.$pop();
            });
        }
    }
</script>
