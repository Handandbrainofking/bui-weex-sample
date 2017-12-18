<template>
    <div>
        <bui-header
                title="上拉菜单(bui-actionsheet)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div class="center" style="padding:10px;">
            <bui-button type="warning" value="上拉菜单" @click="open()"></bui-button>
        </div>

        <!--自定义上拉菜单-->
        <bui-actionsheet
                :items="actionsheetItems"
                v-model="showBar"
                @itemClick="actionsheetItemClick"
                @btnClick="actionsheetBtnClick"
                ref="actionsheet"
        ></bui-actionsheet>

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
                showBar: false,
                actionsheetItems: ['复制文字', '收藏动态']
            }
        },
        methods: {
            "back": function () {
                this.$pop();
            },
            //打开上拉菜单
            open() {
                this.showBar = true;
                this.$refs.actionsheet.show();
            },
            actionsheetItemClick(item) {
                this.$toast(item)
                this.showBar = false;
            },
            actionsheetBtnClick() {
                this.showBar = false;
            }
        }
    }
</script>
<style>

</style>