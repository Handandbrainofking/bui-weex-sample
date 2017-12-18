<template>
    <div>
        <bui-header
                title="多选（bui-checkbox）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px">
            <text class="h4">横向多选</text>
            <bui-checkbox :items="items"></bui-checkbox>
            <text class="h4">垂直多选</text>
            <bui-checkbox direction="vertical" :items="items"></bui-checkbox>
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
            }
        }
    }
</script>