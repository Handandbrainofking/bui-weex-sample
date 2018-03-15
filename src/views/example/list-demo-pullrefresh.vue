<template>
    <div>
        <bui-header
                title="下拉刷新&加载更多"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <list class="bui-list" loadmoreoffset="2">
            <!--下拉刷新组件-->
            <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown"
                     :display="refreshing ? 'show' : 'hide'">
                <text class="bui-refresh-indicator">{{refreshText}}</text>
            </refresh>

            <cell class="bui-cell-large" v-for="i in list">
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
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                LOADMORE_COUNT: 4,
                LOADMORE: [7, 8, 9, 9, 10],
                refreshing: false,
                showLoading: false,
                refreshText: "下拉刷新...",
                loadingText: "加载更多数据...",
                list: [1, 2, 3, 4, 5],
                newList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        components: {},

        methods: {
            back() {
                this.$pop();
            },
            onRefresh(e) {
                this.refreshing = true;
                //模拟异步请求效果
                this.refreshText = "刷新成功";
                setTimeout(() => {
                    this.refreshing = false;
                    this.list = this.newList;
                }, 1000);
            },
            onPullingdown(e) {
                this.refreshText = "下拉可以刷新...";
                //下拉到一定距离时改变文字
                if (Math.abs(e.pullingDistance) > 100) {
                    this.refreshText = "松开即可刷新...";
                }
            },
            onLoading(e) {
                this.showLoading = true;
                setTimeout(() => {
                    const length = this.list.length;
                    this.showLoading = false;
                    if (length > 30) {
                        this.loadingText = '没有更多数据了'
                        return
                    } else {
                        this.loadingText = '加载更多数据...'
                        for (let i = length; i < length + this.LOADMORE_COUNT; ++i) {
                            this.list.push(i + 1)
                        }
                    }
                }, 2000);
            },
        }
    }
</script>