<template>
  <div class="use-new-address" >
    <h2></h2>
    <dl>
        <dt>姓名：</dt>
        <dd><input type="text" v-model='addr.name' placeholder="请输入姓名"></dd>
    </dl>
    <dl>
        <dt>手机号：</dt>
        <dd><input type="tel" v-model='addr.mobile' maxlength="11" placeholder="请输入手机号"></dd>
    </dl>
<!--     <dl>
        <dt>邮政编码：</dt>
        <dd><input type="text" v-model='zipCode' maxlength="7" placeholder="请输入邮政编码"></dd>
    </dl> -->
    <dl class="province-choice">
        <dt>地址：</dt>
        <dd>
            <select name="province" id="province" v-model='addr.province' @change='getCity'>
                <option value="">请选择省份</option>
                <option v-for='provinceList in provinceLists' :value="provinceList">{{provinceList}}</option>
            </select>
            <select name="city" id="city" v-model='addr.city' @change='getDistrict'>
                <option value="">请选择市</option>
                <option v-if="cityLists"  v-for='cityList in cityLists' :value="cityList">{{cityList}}</option>
            </select>
            <select name="district" id="district" v-model='addr.district'>
                <option value="">请选择区</option>
                <option v-if="districtLists" v-for='districtList in districtLists' :value="districtList">{{districtList}}</option>
            </select>
            <input type="text" v-model='addr.address' placeholder="请输入详细收货地址">
        </dd>
    </dl>
    <div class="set-default-choice">
        <input type="checkbox" v-model='addr.acquiesce' :true-value="1"
          :false-value="2">设置为默认收货地址
    </div>
    <div class="btn-content">
        <button @click='saveAddress'>确认</button>
        <button class="cancel-btn" @click='cancel'>取消</button>
    </div>
  </div>
</template>

<script src="./editAddress.js"></script>


