<template>
    <div>
        <bui-header
                title="选项卡"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <bui-content class="span1">
            <list class="bui-list">
                <cell class="bui-cell" v-for="item in listData" @click="jumpTo(item)">
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.text}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </bui-content>
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
                listData: [
                    {'text': '选项卡示例(顶部)', 'url': 'tabbar-demo.weex.js'},
                    {'text': '选项卡示例(底部)', 'url': 'tabbar-demo-bottom.weex.js'},
                    {'text': '自定义选项卡', 'url': 'tabbar-demo-custom.weex.js'},
                    {'text': '选项卡(非slider实现)', 'url': 'tabbar-advanced.weex.js'},
                ]
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "jumpTo": function (item) {
                if (item.url) {
                    buiweex.push(buiweex.getContextPath() + "/" + item.url)
                }
            }
        }
    }
</script>