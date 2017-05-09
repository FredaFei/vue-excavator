<template>
  <div>
    <div class="common-title">
      <span>(您已创建<i>{{lists.length}}</i>个收货地址)</span>
      <a href="javascript:;" @click='editAddress(null)'>添加新地址</a>
    </div>
    <div class="address-manage mt13" v-if="!edit">
      <table>
          <thead>
              <td>收货人</td>
              <td>电话/手机</td>
              <td>所在地区</td>
              <td class="full-address">详细地址</td>
              <td>邮编</td>
              <td>操作</td>
          </thead>
          <tr v-for="(item,index) in lists">
              <td>{{item.name}}</td>
              <td>{{item.mobile}}</td>
              <td>{{item.province}}{{item.city}}</td>
              <td>{{item.district}}{{item.address}}</td>
              <td>{{item.zipCode}}</td>
              <td class="address-act">
                  <a class="ftheme-color" href="javascript:;" @click='editAddress(item)'>修改</a>
                  <a class="fbtn-color" href="javascript:;" @click='deleteAddress({id:item.id,index})'>删除</a>
                  <a v-if='item.acquiesce === 2' href="javascript:;" @click='setDefault({address: item})'>设为默认</a>
                  <span v-if='item.acquiesce === 1' style="color:gray;">默认地址</span>
              </td>
          </tr>
      </table>
      <pagination :total='total' :display='5' :page-size='pageSize' :page-num='pageNum'></pagination>
    </div>
    <edit-address :add="add" v-else></edit-address>
  </div>
</template>

<script src="./address.js"></script>

<style src="./personalsetting.scss" lang="scss"></style>
