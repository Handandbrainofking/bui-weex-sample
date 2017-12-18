<template>
    <div>
        <bui-header
                title="搜索框(bui-searchbar)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div>
            <text class="h4">类型1</text>
            <bui-searchbar-center @search="onSearch"></bui-searchbar-center>
            <text class="h4">类型2</text>
            <bui-searchbar-left @search="onSearch"></bui-searchbar-left>
        </div>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>

<style>

</style>

<script>
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                items:[
                    {key:1,title:'全部',select:true},
                    {key:2,title:'选项一',select:false},
                    {key:3,title:'选项二',select:false},
                    {key:4,title:'选项三',select:false}
                ]
            }
        },
        methods: {
            back() {
                this.$pop();
            },
            onSearch(value){
                this.$toast(value);
            }
        }
    }
</script>