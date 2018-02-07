<template>
    <div>
        <bui-header
                title="富文本(bui-richcell)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <div style="width:500px">
            <bui-richcell :content='content' @click="richClick"></bui-richcell>
        </div>


    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
                content:[
                    {
                        type: 'text',
                        value: '@张指导',
                        theme: 'blue',
                    },
                    {
                        type: 'text',
                        value: '今天去深圳市局开会,与会人数近30人，领导人'
                    },
                    {
                        type: 'text',
                        value: '@鲁琳',
                        theme: 'blue'
                    },
                    {
                        type: 'text',
                        value: '局长对此系统高度重视,请加快'
                    },
                    {
                        type: 'text',
                        value: '#云指挥系统#',
                        theme: 'red',
                    },
                    {
                        type: 'text',
                        value: '项目建设'
                    },
                    {
                        type:'icon',
                        icon:'ion-checkmark-circled',
                        color:'red',
                    },
                    {
                        type: 'text',
                        value: '未来信息化建设的高度我们成为行业领头羊的关键未来信息化建设的高度我们成为行业领头羊的关键！'
                    },
                ]
            }
        },
        methods: {
            back() {
                this.$pop();
            },
            richClick(e,obj){
                this.$toast(JSON.stringify(obj));
            }
        }
    }
</script>