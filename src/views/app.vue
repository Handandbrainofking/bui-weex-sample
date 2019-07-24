<template>
    <div class="flex-column center">
        <!-- <weex-image src="/image/logo.png" width="150px" height="150px"></weex-image> -->
        <text class="h2">Weex</text>
        <text class="h4">专注为Weex前端开发者提供高质量UI组件</text>
        <!-- <weex-button type="primary" value="快速体验" @click="jumpTo"></weex-button> -->

    </div>
</template>

<script>
    const globalEvent = weex.requireModule('globalEvent');

    module.exports = {
        data: function () {
            return {}
        },
        methods: {
            jumpTo () {
                // this.$alert(22);
                // this.linkapi.getLoginInfo((res) => {
                //     this.$alert(11);
                //     this.$alert(res);
                //     let user = [];
                //     user.push(res.userId);
                //     let ss = {
                //         pickUsers: 0,
                //         groupName: "333",
                //         isPublic: 1
                //     };
                //     this.$alert(ss);
                //     this.linkapi.createGroup(ss, (resp) => {
                //         this.$alert("suc");
                //         this.$alert(resp);
                //     }, (error) =>{
                //         this.$alert("error");
                //         this.$alert(error);
                //     });
                // });

                var url = "index.js";
                this.$push(url);
            }
        },
        components: {
            // "bui-image": buiImage.buiImage
        },
        mounted: function () {
            globalEvent.addEventListener("androidback",(e)=> {
                this.$pop();
            });
        }
    }
</script>

<style lang="sass" scoped>
@import "../css/common.css"
</style>


