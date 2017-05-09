<template>
    <div class="monthControl"> <!-- 租 -->
            <dd class="num">
                <a class="icon-jian" href="javascript:;" :class="{'active': month<=3}" @click='reduceMonth'></a>
                <input type="text" disabled v-model.number='month'>
                <a class="icon-jia" href="javascript:;" @click='addMonth'></a>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'monthControl',
        props: ['mon'],
        data(){
            return{
                month: this.mon
            }
            
        },
        methods: {
            reduceMonth() {
                if (this.month===3) {
                    return
                }
                this.month--;
            },

            addMonth() {
                this.month++;
            }
        }
    }
</script>

<style lang="scss">
    @import "../../modules/icon/style.css";
    @import "../../modules/sass/variables.scss";
    .num{
        font-size: 0;
        width: 100px;
        font-size: 0;
        input {
            border: 0 none;
            width: 40px;
            height: 16px;
            line-height: 16px;
            font-size: 14px;
            padding: 0 5px;
            text-align: center;
            color: #3b3b3b;
            vertical-align: middle;
        }
        a {
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
            line-height: 16px;
            color: $theme-color;
            &.active {
                color: #ddd;
                cursor: no-drop;
            }
        }
    }
</style>