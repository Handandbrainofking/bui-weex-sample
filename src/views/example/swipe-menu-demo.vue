<template>
    <div>
        <bui-header
                title="滑动菜单"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>


        <div style="padding: 10px;flex: 1">
            <scroller>
                <text class="h4 titleEx">简单滑动菜单-手势向左边滑动</text>
                <bui-swipe-menu :items="btnAry1"
                                :title="'品高好声音'"></bui-swipe-menu>
                <text class="h4 titleEx mT50">滑动菜单-菜单按钮操作</text>
                <bui-swipe-menu @clickmenu="clickmenu"
                                :items="btnAry1"
                                :title="'品高好声音'"></bui-swipe-menu>
                <text class="h4 titleEx mT50">场景1-组件扩展案例</text>
                <bui-swipe-menu :items="btnAry1"
                                :title="'品高好声音'">
                    <text slot="title">--扩展部分--</text>
                </bui-swipe-menu>
                <text class="h4 titleEx mT50">场景2-与列表结合案例</text>
                <div v-for="(i, index) in items" :key="index">
                    <bui-swipe-menu :items="btnAry"
                                    :title="i.title"
                                    :index="index"
                                    ref="swipebtn"
                                    @swipe="setkey"
                                    @click="closeswipe"></bui-swipe-menu>
                </div>
            </scroller>
        </div>
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
    var animation = weex.requireModule('animation');
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                btnAry1: [
                    {
                        'title': '取消',
                        'bgcolor' : '#c6c7c8'
                    },
                    {
                        'title': '标记',
                        'bgcolor' : '#3399ff'
                    }
                ],
                btnAry: [
                    {
                        'title': '取消',
                        'bgcolor' : '#c6c7c8'
                    },
                    {
                        'title': '删除',
                        'bgcolor' : '#fa3300'
                    },
                    {
                        'title': '标记',
                        'bgcolor' : '#3399ff'
                    }
                ],
                items: [
                    {
                        'title':'行无止尽'
                    },
                    {
                        'title':'柠檬'
                    },
                    {
                        'title':'品高'
                    },
                    {
                        'title':'云应用平台'
                    }
                ],
                indexkey: '',
            }
        },
        components: {},

        methods: {
            back() {
                this.$pop();
            },

            clickmenu(e){
                if(e == 0){
                    this.$toast(this.btnAry1[e-0].title);
                }else if(e == 1){
                    this.$toast(this.btnAry1[e-0].title);
                }
            },
            setkey(e){
                if(this.indexkey.length != 0 && this.indexkey != e) this.$refs.swipebtn[this.indexkey-0]._close();
                this.indexkey = e;
            },
            closeswipe(){
                this.$refs.swipebtn[this.indexkey-0]._close();
            }

        }
    }
</script>