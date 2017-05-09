<template>
    <div class="countControl">
        <dd class="num">
            <a class="icon-jian" href="javascript:;" :class="{'active': number<=1}" @click='reduceNumber'></a>
            <input type="text" disabled v-model.number='number'>
            <a class="icon-jia" href="javascript:;" @click='addNumber' :class="{'active': number>=merchandise.stock}"></a>
        </dd>
    </div>
</template>

<script>
    export default {
        name: 'countControl',
        props: ['state','merchandise','num'],
        data(){
            return{
                number: this.num
            }
            
        },
        methods: {
            reduceNumber() {
                if (this.number===1) {
                    return 
                }
                this.number--;
            },

            addNumber() {
                if (this.state ===3 && this.number===this.merchandise.stock) {
                    return
                }
                this.number++;
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