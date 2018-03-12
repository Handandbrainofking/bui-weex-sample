<template>
    <div>
        <bui-header
                title="单选（bui-radio）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;flex: 1">
            <scroller>
                <text class="h4">横向单选</text>
                <bui-radio v-model="selectedValue" :items="items"></bui-radio>
                <text class="h4 mT50">垂直单选(文字右边)</text>
                <bui-radio v-model="selectedValue" @change="changeValue" direction="vertical" :items="items"></bui-radio>
                <text class="h4 mT50">垂直单选(文字左边)</text>
                <bui-radio-list v-model="selectedValue" @change="changeValue" :items="items"></bui-radio-list>
                <text class="h4 mT50">单选场景案例</text>
                <text style="text-align: center;background-color: #ff9900;padding: 30px;border-radius: 10px;color: #fff;" @click="open1()">弹出层单选列表</text>
            </scroller>
        </div>
        <bui-popup v-model="showPopup1" height="400">
            <scroller style="padding: 20px;">
                <div style="flex-direction: row;">
                    <text style="flex: 9;font-size:30px;color: #888888">请选择下列选项</text>
                    <text style="margin-bottom: 20px;flex: 1;text-align: right;color: #03A9F4" @click="confirm">确定</text>
                </div>
                <bui-radio-list v-model="selectedValue" @change="changeValue" :items="items"></bui-radio-list>
            </scroller>
        </bui-popup>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style scoped>
    .titleEx{
        margin-bottom: 20px;
        background-color: #f8f8f8;
        padding: 8px;
    }
    .mT50{
        margin-top: 50px;
    }
</style>

<script>
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                showPopup1: false,
                changevalue: '',
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
            open1() {
                this.showPopup1 = true;
                this.changevalue = this.selectedValue;
            },
            changeValue(value){
                this.$toast(value);
            },
            confirm(){
                this.$toast(JSON.stringify(this.changevalue));
                this.showPopup1 = false;
            }
        }
    }
</script>