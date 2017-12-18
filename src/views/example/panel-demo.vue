<template>
    <div>
        <bui-header
                title="面板(bui-panel)"
                :leftItem="leftItem"
                @leftClick="back">
        </bui-header>

        <scroller>
                <bui-panel title="Default Panel" border="1">
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                    <text>Default Panel</text>
                </bui-panel>
                <bui-panel title="Primary Panel" type="primary" border="1">
                    <text>Primary Panel</text>
                </bui-panel>
                <bui-panel title="Success Panel" type="success" border="1">
                    <text>Success Panel</text>
                </bui-panel>
                <bui-panel title="Info Panel" type="info" border="1">
                    <text>Info Panel</text>
                </bui-panel>
                <bui-panel title="Warning Panel" type="warning" border="1">
                    <text>Warning Panel</text>
                </bui-panel>
                <bui-panel title="Danger Panel" type="danger" border="1">
                    <text>Danger Panel</text>
                </bui-panel>
        </scroller>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                leftItem: {
                    icon: 'ion-chevron-left'
                },
            }
        },
        methods: {
            back() {
                this.$pop();
            }
        }
    }
</script>