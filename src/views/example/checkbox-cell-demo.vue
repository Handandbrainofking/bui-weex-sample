<template>
    <div>
        <bui-header
                title="多选（bui-checkbox）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px">
            <bui-checkbox-cell v-model="selectedValue" @change="changeValue"  direction="vertical" :items="items"></bui-checkbox-cell>
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
                    {value:"1",title:'全部1'},
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