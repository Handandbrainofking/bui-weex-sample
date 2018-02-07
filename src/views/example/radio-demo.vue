<template>
    <div>
        <bui-header
                title="单选（bui-radio）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px">
            <text class="h4">横向单选</text>
            <bui-radio v-model="selectedValue" :items="items"></bui-radio>
            <text class="h4">垂直单选</text>
            <bui-radio v-model="selectedValue" @change="changeValue" direction="vertical" :items="items"></bui-radio>
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
                selectedValue:"2",
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
                this.$toast(value);
            }
        }
    }
</script>