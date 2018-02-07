<template>
    <div>
        <bui-header
                title="多选（bui-checkbox）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px">
            <text class="h4">横向多选</text>
            <bui-checkbox v-model="selectedValue" :items="items"></bui-checkbox>
            <text class="h4">垂直多选</text>
            <bui-checkbox v-model="selectedValue" @change="changeValue"  direction="vertical" :items="items"></bui-checkbox>
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
                selectedValue:["1","2"],
                items:[
                    {value:"1",title:'全部'},
                    {value:"2",title:'选项一'},
                    {value:"3",title:'选项二'},
                    {value:"4",title:'选项三'}
                ]
            }
        },
        methods: {
            back() {
                this.$pop();
            },
            changeValue(value){
                this.$toast(JSON.stringify(value));
            }
        }
    }
</script>