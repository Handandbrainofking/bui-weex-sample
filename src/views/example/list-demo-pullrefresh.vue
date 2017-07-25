<template>
    <div>
        <bui-header
                title="下拉刷新&加载更多"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <list class="bui-list" @loadmore="onLoadmore($event)" loadmoreoffset="2">
            <!--刷新组件-->
            <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)"
                     :display="refreshing ? 'show' : 'hide'">
                <bui-icon :name="refreshIcon" size="40px" style="margin-right: 5px;"></bui-icon>
                <text class="bui-refresh-indicator">{{refreshText}}</text>
            </refresh>
            <cell class="bui-cell-xlarge" v-for="i in list">
                <div class="bui-list-main">
                    <text class="bui-list-title">第{{i}}行数据</text>
                </div>
            </cell>
            <!--加载更多-->
            <loading class="bui-loading" @loading="onLoading" :display="showLoading ? 'show' : 'hide'">
                <text class="bui-loading-indicator" v-if="showLoading">{{loadingText}}</text>
                <loading-indicator class="bui-indicator"></loading-indicator>
            </loading>
        </list>
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
                LOADMORE_COUNT: 4,
                LOADMORE: [7, 8, 9, 9, 10],
                refreshing: false,
                showLoading: false,
                refreshIcon: "icon-todown",
                refreshText: "下拉刷新...",
                loadingText: "加载更多数据...",
                list: [1, 2, 3, 4, 5],
                newList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},

        methods: {
            "back": function () {
                buiweex.pop();
            },
            //refresh下拉放手后的文字与图标
            "onRefresh": function (e) {
                this.refreshing = true;
                //下面代码是模拟异步请求效果
                setTimeout(() => {
                    this.refreshIcon = "icon-checkbox-on";
                    this.refreshText = "刷新成功";

                    setTimeout(() => {
                        this.refreshing = false;
                        this.list = this.newList;
                    }, 300);

                }, 500);
            },
            //refresh下拉放手前的文字与图标
            "onPullingdown": function (e) {
                //默认refresh文字与图标
                this.refreshIcon = "icon-todown";
                this.refreshText = "下拉可以刷新...";
                //下拉一定距离时文字与图标
                if (Math.abs(e.pullingDistance) > 60) {
                    console.log("松开即可刷新");
                    this.refreshIcon = "icon-toup";
                    this.refreshText = "松开即可刷新...";
                }
            },
            "onLoading": function (e) {
                buiweex.toast("loading");
                this.showLoading = true;
                setTimeout(() => {
                    const length = this.list.length;
                    this.showLoading = false;
                    if (length > 60) {
                        this.loadingText = '没有更多数据了'
                        return
                    } else {
                        this.loadingText = '加载更多数据...'
                        for (let i = length; i < length + this.LOADMORE_COUNT; ++i) {
                            this.list.push(i + 1)
                        }
                    }
                }, 2000);
            }
        }
    }
</script>