<template>
    <div>
        <bui-header
                title="多选（bui-checkbox）"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="padding: 10px;flex: 1">
            <scroller>
                <text class="h4">横向多选</text>
                <bui-checkbox v-model="selectedValue" :items="items"></bui-checkbox>
                <text style="margin-top: 50px;" class="h4">垂直多选(右边文字)</text>
                <bui-checkbox v-model="selectedValue" @change="changeValue"  direction="vertical" :items="items"></bui-checkbox>
                <text style="margin-top: 50px;" class="h4">垂直多选(左边文字)</text>
                <bui-checkbox-list v-model="selectedValue" @change="changeValue" :items="items"></bui-checkbox-list>
                <text style="margin-top: 50px;" class="h4">多选场景案例</text>
                <text style="text-align: center;background-color: #ff9900;padding: 30px;border-radius: 10px;color: #fff;" @click="open1()">弹出层多选列表</text>
            </scroller>
        </div>
        <bui-popup v-model="showPopup1" height="400">
            <scroller style="padding: 20px;">
                <div style="flex-direction: row;">
                    <text style="flex: 9;font-size:30px;color: #888888">请选择下列选项</text>
                    <text style="margin-bottom: 20px;flex: 1;text-align: right;color: #03A9F4" @click="confirm">确定</text>
                </div>
                <bui-checkbox-list v-model="selectedValue" @change="changeValue" :items="items"></bui-checkbox-list>
            </scroller>
        </bui-popup>
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
                showPopup1: false,
                changevalue: '',
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
            open1() {
                this.showPopup1 = true;
                this.changevalue = this.selectedValue;
            },
            changeValue(value){
                this.changevalue = value;
                this.$toast(JSON.stringify(value));
            },
            confirm(){
                this.$toast(JSON.stringify(this.changevalue));
                this.showPopup1 = false;
            }
        }
    }
</script>