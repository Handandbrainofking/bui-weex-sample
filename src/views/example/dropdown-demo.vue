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

        <bui-dropdown v-model="showDropdown" ref="dropdown" center=true>
            <bui-cell title="娱乐新闻"></bui-cell>
            <bui-cell title="体育新闻"></bui-cell>
            <bui-cell title="社交媒体"></bui-cell>
        </bui-dropdown>
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
                showDropdown: false
            }
        },
        methods: {
            back () {
                this.$pop();
            },
            open(event) {
                this.showDropdown = true;
                this.$refs.dropdown.show(event);
            },
            centerClick(e){
                this.showDropdown = true;
                this.$refs.dropdown.show(e);
            }
        }
    }
</script>
<style>

</style>