<template>
    <div class="p-r span1">
        <bui-header
                title="弹出下拉框"
                :leftItem="leftItem"
                @leftClick="back"
                @centerClick="openDropdown4($event)">
        </bui-header>

        <list class="bui-list">
            <cell class="bui-cell" @click="openDropdown($event)">
                <div class="bui-list-main">
                    <text class="bui-list-title">自适应点击元素宽度下拉菜单</text>
                </div>
                <div class="bui-list-right">
                    <bui-icon name="icon-go"></bui-icon>
                </div>
            </cell>
            <cell class="bui-cell" @click="openDropdown2($event)">
                <div class="bui-list-main">
                    <text class="bui-list-title">默认下拉菜单</text>
                </div>
                <div class="bui-list-right">
                    <bui-icon name="icon-go"></bui-icon>
                </div>
            </cell>
            <cell class="bui-cell-large">
                <div class="bui-list-main">
                    <text class="bui-list-title">右边图标下拉菜单</text>
                </div>
                <div class="bui-list-right">
                    <bui-icon name="icon-go" @click="openDropdown3($event)"></bui-icon>
                </div>
            </cell>
        </list>

        <bui-dropdown
                :show="showDropdown"
                @close="closeDropdown"
                ref="dropdown">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in actionList"  @click="closeDropdown">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :show="showDropdown2"
                @close="closeDropdown2"
                ref="dropdown2">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in actionList" @click="closeDropdown2">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :show="showDropdown3"
                @close="closeDropdown3"
                ref="dropdown3">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in actionList"  @click="closeDropdown3">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>

        <bui-dropdown
                :showArrow=true
                :center=true
                :show="showDropdown4"
                @close="closeDropdown4"
                ref="dropdown4">
            <div class="bui-list">
                <div class="bui-cell" v-for="item in actionList"  @click="closeDropdown4">
                    <div class="bui-list-left">
                        <bui-icon :name="item['l-icon']"></bui-icon>
                    </div>
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.title}}</text>
                    </div>
                </div>
            </div>
        </bui-dropdown>
    </div>

</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>


<script>
    var buiweex = require("bui-weex");
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'icon-back'
                },
                showDropdown: false,
                showDropdown2: false,
                showDropdown3: false,
                showDropdown4: false,
                showLoading: false,
                actionList: [
                    {'l-icon': "icon-home", 'title': '在线客服'},
                    {'l-icon': "icon-user", 'title': 'SherryLee'},
                    {'l-icon': "icon-msg", 'title': '积分商城'},
                    {'l-icon': "icon-liwu", 'title': '播云客'}
                ]
            }
        },
        components: {
            'bui-dropdown': buiweex.buiDropdown
        },

        methods: {
            "back": function () {
                buiweex.pop();
            },
            "openDropdown": function (event) {
                this.showDropdown = true;
                this.$nextTick(e=>{
                    this.$refs.dropdown.open(event);
                })
            },
            "openDropdown2": function (event) {
                this.showDropdown2 = true;
                this.$nextTick(e=>{
                    this.$refs.dropdown2.open(event);
                });
            },
            "openDropdown3": function (event) {
                this.showDropdown3 = true;
                this.$nextTick(e=>{
                    this.$refs.dropdown3.open(event);
                });
            },
            "openDropdown4": function (event) {
                this.showDropdown4 = true;
                this.$nextTick(e=>{
                    this.$refs.dropdown4.open(event);
                });
            },
            "closeDropdown": function () {
                this.showDropdown = false;
            },
            "closeDropdown2": function () {
                this.showDropdown2 = false;
            },
            "closeDropdown3": function () {
                this.showDropdown3 = false;
            },
            "closeDropdown4": function () {
                this.showDropdown4 = false;
            },
        },
        mounted () {

        },
        created: function () {

        }
    }
</script>
<style>

</style>