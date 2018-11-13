<template>
    <div class="wrapper">
        <image style="width:750px;height: 457px;position: absolute;left:0;top:0;" ref="headerBg" resize="cover" src="http://cdn.zwwill.com/yanxuan/imgs/bg5.png"></image>
        <scroller ref="contentScroller" style="background-color: #dddddd;margin-top: 200px;flex: 1">
            <div>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <text>ss</text>
                <!-- 省略非关键代码 -->
            </div>
            <div class="fbs">
                <text>fbs</text>
                <!-- 省略非关键代码 -->
            </div>
        </scroller>
    </div>
</template>

<script>
    const binding = weex.requireModule('weex-bindingx');    //引入 bindingx
    export default {
        mounted(){
            this.headerBgBinding();
        },
        beforeDestroy(){
            this.headerBgBindingDestory();
        },
        methods: {
            headerBgBinding(){
                let self = this,
                    scroller = self.$refs.contentScroller.ref,
                    headerBg = self.$refs.headerBg.ref;

                self.$alert(22);

                let bindingResult = binding && binding.bind({
                    eventType:'scroll',
                    anchor:scroller,
                    props:[
                        {
                            element:headerBg,
                            property:'transform.scale',
                            expression:{
                                origin:'y<0?(1-y/500):(1+y/500)'
                            }
                        },
                        {
                            element:headerBg,
                            property:'transform.translateY',
                            expression:{
                                origin:'-y/2'
                            }
                        }
                    ]
                },function(e){
                    self.$alert(11);
                });
                self.gesToken = bindingResult.token;
            },
            headerBgBindingDestory(){
                let self = this;
                if(self.gesToken != 0) {
                    binding.unbind({
                        eventType:'scroll',
                        token:self.gesToken
                    })
                    self.gesToken = 0;
                }
            }
        }
    }
</script>