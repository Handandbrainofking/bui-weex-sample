<template>
    <div>
        <bui-header
                title="下拉菜单(bui-dropdown)"
                :leftItem="leftItem"
                @centerClick="centerClick"
                @leftClick="back">
        </bui-header>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="打开下拉菜单" @click="open"></bui-button>
        </div>

        <bui-dropdown ref="dropdown" :center=true>
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

        <div class="center" style="padding: 10px">
            <bui-button type="warning" value="打开下拉菜单" @click="open"></bui-button>
        </div>

         <div class="center" style="padding: 10px">
            <bui-button type="warning" value="打开上拉菜单" @click="openUp"></bui-button>
        </div>
        <bui-dropdown ref="upshows" :center=true>
            <bui-cell @click="cellClick" title="娱乐新闻"></bui-cell>
            <bui-cell @click="cellClick" title="体育新闻"></bui-cell>
            <bui-cell @click="cellClick" title="社交媒体"></bui-cell>
        </bui-dropdown>

        <bui-popupshow v-model="showUp" ref="upshow">
            <bui-cell  title="娱乐新闻"></bui-cell>
            <bui-cell  title="体育新闻"></bui-cell>
            <bui-cell  title="体育新闻"></bui-cell>
        </bui-popupshow>
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
                showUp:false
            }
        },
        methods: {
            back () {
                this.$pop();
            },
            open(event) {
                this.$refs.dropdown.show(event);
            },
            openUp(event){
                this.$refs.upshows.show(event);
            },
            cellClick(){
                this.$refs.dropdown.hide();
            },
            centerClick(e){
                this.$refs.dropdown.show(e);
            }
        }
    }
</script>
<style>

</style>