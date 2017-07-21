<template>
    <div>
        <bui-header
                :title="'左右图标列表'"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>
        <div class="span1">
            <list class="bui-list">
                <cell class="bui-cell-large" v-for="item in messageList" v-on:swipe="onSwpie()">
                    <div class="bui-list-left">
                        <bui-image class="bui-list-thumb" radius="50px" v-bind:src="item['l-icon']"></bui-image>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                        <text class="bui-list-subtitle">{{item.subtitle}}</text>
                    </div>
                    <div class="bui-list-right">
                        <bui-icon name="icon-go"></bui-icon>
                    </div>
                </cell>
            </list>
        </div>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<script>
    var icon = "/image/demo.png";

    var buiweex=require("bui-weex");
    export default {
        data: function(){
            return {
                leftItem: {
                    icons: 'icon-back',
                },
                messageList: [
                    {'l-icon': icon, 'title': '在线客服', 'subtitle': '亲,使用过程中有任何问题可以联系我！'},
                    {'l-icon': icon, 'title': 'SherryLee', 'subtitle': '请问，我们现在有北京国药的项目吗？'},
                    {'l-icon': icon, 'title': '积分商城', 'subtitle': '品高币积分变动提醒'},
                    {'l-icon': icon, 'title': '吐槽群', 'subtitle': '赵文卓：明天下午吧，上午有个面试!'},
                    {'l-icon': icon, 'title': '播云客', 'subtitle': '五一特辑 | 劳动节无需劳动 | 优雅地吐槽你地工作还能领劳动节津贴'},
                    {'l-icon': icon, 'title': '下一代开发平台', 'subtitle': '冯大大：Weex要快速上'},
                    {'l-icon': icon, 'title': '假勤', 'subtitle': '申请状态提醒[结束]'}
                ]
            }
        },
        components: {},
        methods: {
            "back": function () {
                buiweex.pop();
            },
            "onSwpie": function () {
                buiweex.toast("swpie event");
            }
        }
    }
</script>