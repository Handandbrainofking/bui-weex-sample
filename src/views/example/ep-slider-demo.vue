<template>
    <div>
        <bui-header title="选项卡(bui-tabbar-scrollor)" :leftItem="leftItem" @leftClick="back"></bui-header>

        <bui-ep-slider :slider-id="sliderId"
                       :auto-play="true"
                       :card-length='cardLength'
                       :card-s="cardSize"
                       :select-index="2"
                       @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected"
                       ref="bui-ep-slider">
            <!--自动生成demo-->
            <div v-for="(v, index) in ary"
                 :key="index"
                 :slot="`card${index}_${sliderId}`"
                 :class="['slider',`slider${index}`]"
                 :accessible="true">
                <text>这里是第{{index + 1}}个滑块</text>
            </div>
            <!--<div class="more-slider"-->
                 <!--slot="pull-more"-->
                 <!--:style="{left: `${cardLength * (cardSize.width + cardSize.spacing)+60}px`,marginLeft:`${(750 - cardSize.width) / 2}px`}">-->
                <!--<text>加载更多</text>-->
            <!--</div>-->
        </bui-ep-slider>
    </div>
</template>

<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style>
    .slider {
        width: 400px;
        height: 300px;
        background-color: #C3413D;
        align-items: center;
        justify-content: center;
    }

    .slider1 {
        background-color: #635147;
    }

    .slider2 {
        background-color: #FFC302;
    }

    .slider3 {
        background-color: #FF9090;
    }

    .slider4 {
        background-color: #546E7A;
    }
</style>
<script>
    export default {
        data: function () {
            return {
                ary: [1,2,3,4,5],
                sliderId: 1,
                cardLength: 5,
                cardSize: {
                    width: 400,
                    height: 300,
                    spacing: 0,
                    scale: 0.8
                }
            }
        },
        methods: {
            wxcEpSliderCurrentIndexSelected (e) {
                const index = e.currentIndex;
                console.log(index);
            }
        },
        created(){
            // this.$refs['bui-ep-slider'].manualSetPage(1);
            // this.$refs['bui-ep-slider'].rebind();
        }
    }
</script>
