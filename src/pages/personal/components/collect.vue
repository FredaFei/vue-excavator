<template>
  <div>
    <ul class="my-collection products-lists" v-if="lists&&lists.length">
      <li v-for="item in lists">
        <a :href="'detail.html?id='+item.id+'&state='+item.isHot" @click='toDetail()'><img :src="item.image"></a>
        <span class="hot-logo" v-if='item.isHot === 1'>热卖</span>
        <div class="products-lists-item">
          <h4>{{item.name}}</h4>
          <div class="adaptation-situation">
            <h5>适配挖掘机</h5>
            <p v-for='adapter in item.adapterForkliftType'>{{adapter}}</p>
          </div>
          <dl>
            <dt>单价：</dt>
            <dd><i>{{item.discount}}</i>元</dd>
          </dl>
        </div>
        <button @click='addCart(item)'>加入购物车</button>
      </li>
    </ul>
    <pagination :total='10' :display='5' :page-size='10' :page-num='1'></pagination>
  </div>
</template>

<script>
  import collect from 'js/collectService.js'
  import Pagination from 'components/pagination/pagination.vue'
  import bus from 'js/bus.js'
  export default {
    name: 'collect',
    data() {
      return {
        lists: ''
      }
    },
    created() {
      this.getLists()
    },
    methods: {
      getLists() {
        collect.lists().then(res => {
          this.lists = res.data.list
        })
      },
      toDetail() {

      },
      addCart(item) {
        bus.$emit('addCart',item)
      }
    },
    components: {
      Pagination
    }
  }
</script>

<style lang="scss">
  @import "../../../modules/sass/variables.scss";
  .my-collection {
    padding: 13px 40px;
  }

  .products-lists {
    margin-left: -6px;
    margin-right: -6px;
    overflow: hidden;
    li {
      position: relative;
      float: left;
      // width: 48%;
      // margin:0 6px 12px 6px;
      width: 47%;
      margin: 0 10px 12px 10px;
      border: 1px solid #ececec;
      overflow: hidden;
      img {
        float: left;
        display: block;
        height: 167px;
        width: 167px;
      }
      .hot-logo {
        position: absolute;
        left: -30px;
        top: 10px;
        display: block;
        font-size: 14px;
        height: 30px;
        width: 100px;
        line-height: 30px;
        color: #fff;
        background: $btn-color;
        text-align: center;
        transform: rotate(-45deg);
      }
    }
    button {
      position: absolute;
      right: 10px;
      bottom: 10px;
      height: 20px;
      padding: 0 10px;
      text-align: center;
      color: #fff;
      background-color: $theme-color;
    }
  }

  .products-lists-item {
    position: relative;
    float: left;
    width: 165px;
    padding: 12px 0 0 50px;
    background-color: #fff;
    h4 {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      margin: 0;
    }
    span {
      display: block;
      font-size: 12px;
      color: $btn-color;
      line-height: 24px;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .accessory-detail {
      margin: 10px 0;
      height: 48px;
      overflow: hidden;
      p {
        font-size: 12px;
        line-height: 16px;
      }
    }
    .adaptation-situation {
      margin: 8px 0;
      h5 {
        font-weight: 400;
        font-size: 12px;
        margin: 0;
      }
      p {
        line-height: 20px;
        margin: 0;
      }
    }
    dl {
      overflow: hidden;
      font-size: 12px;
      line-height: 24px;
    }
    dt {
      float: left;
      width: 40px;
    }
    dd {
      float: left;
      i {
        font-size: 18px;
        color: $btn-color;
      }
    }
    .special {
      margin-left: 50px;
      line-height: 20px;
    }
  }
</style>
