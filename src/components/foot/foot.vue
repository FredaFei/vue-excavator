<template>
    <div id="foot" class="ft wrapper-width">
        <div class="main-content-w">
            <ul class="ft-resourceCenter">
                <li>
                    <i class="ft-guide"></i>
                    <h5>购物指南</h5>
                    <a href="helpCenter.html">购物流程</a>
                    <a href="helpCenter.html">会员介绍</a>
                    <a href="helpCenter.html">常见问题</a>
                </li>
                <li>
                    <i class="ft-service"></i>
                    <h5>售后服务</h5>
                    <a href="helpCenter.html">售后政策</a>
                    <a href="helpCenter.html">价格保护</a>
                    <a href="helpCenter.html">退款说明</a>
                </li>
                <li>
                    <i class="ft-payment"></i>
                    <h5>支付方式</h5>
                    <a href="helpCenter.html">货到付款</a>
                    <a href="helpCenter.html">在线支付</a>
                    <a href="helpCenter.html">分期付款</a>
                </li>
                <li>
                    <i class="ft-delivery"></i>
                    <h5>送货方式</h5>
                    <a href="helpCenter.html">配送服务查询</a>
                    <a href="helpCenter.html">配送费收取标准</a>
                    <a href="helpCenter.html">上门自提</a>
                </li>
            </ul>
            <div class="ft-info">
                <div class="ft-info-logo">
                    <i class="logo-white"></i>
                    <p>饥人谷挖掘机服务平台</p>
                </div>
                <div class="ft-info-content">
                    <p>饥人谷挖掘机服务热线：13800138000  电子邮箱：13800138000@163.com</p>
                    <p>饥人谷挖掘机设备有限公司版权所有2012-2016  京ICP 备12345</p>
                </div>
                <div class="ft-info-qr">
                     <img src="./imgs/download-qr-img.jpg" />
                     <p>扫一扫下载APP</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
      name: 'foot'
    }
</script>
<style lang="scss">
    @import "../../modules/sass/variables.scss";
    .wrapper-width {
      min-width: 1200px;
    }

    .ft {
      background-color: #181818;
    }

    .ft-resourceCenter {
      overflow: hidden;
      padding: 20px 0 20px 20px;
      border-bottom: 1px solid #fff;
      li {
        float: left;
        width: 21%;
        padding: 0 2%;
        i {
          display: block;
          height: 96px;
          width: 96px;
          margin: 20px auto 20px;
        }
        .ft-guide {
          background: url(./imgs/ft-guide.png) no-repeat center;
        }
        .ft-service {
          background: url(./imgs/ft-service.png) no-repeat center;
        }
        .ft-payment {
          background: url(./imgs/ft-payment.png) no-repeat center;
        }
        .ft-delivery {
          background: url(./imgs/ft-delivery.png) no-repeat center;
        }
        h5 {
          font-size: 18px;
          line-height: 24px;
          text-align: center;
          color: #fff;
          padding-bottom: 10px;
        }
        a {
          display: block;
          font-size: 14px;
          line-height: 26px;
          text-align: center;
          color: #999;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }

    .ft-info {
      height: 230px;
      p {
        text-align: center;
        color: #999;
        font-size: 14px;
      }
      .ft-info-logo {
        float: left;
        width: 20%;
        .logo-white {
          display: block;
          height: 90px;
          width: 90px;
          margin: 30px auto 5px;
          background: url(./imgs/3.gif) no-repeat center;
        }
      }
      .ft-info-content {
        float: left;
        width: 60%;
        padding-top: 75px;
        font-size: 14px;
        line-height: 24px;
      }
      .ft-info-qr {
        float: right;
        width: 20%;
        img {
          display: block;
          margin: 30px auto 10px;
        }
      }
    }

</style>

