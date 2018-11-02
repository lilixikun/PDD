<template>
    <div class="login">
        <div class="login-content" >
            <div class="login-logo">
                <img src="./images/lk_logo_sm.png" alt="" srcset="" style="width:80%">
            </div>
            <div class="login-way">
                <span :class="{current:isCurrent}" @click="currentChange(true)">验证码登陆</span>
                <span :class="{current:!isCurrent}" @click="currentChange(false)">密码登陆</span>
            </div>
            <form action="" class="login-form">
              <div v-show="isCurrent">
                   <div class="login-message">
                        <input type="tel" placeholder="手机号" v-model="phone" maxlength="11">
                    </div> 
                    <div class="login-message">
                        <input type="text" placeholder="验证码" v-model="code">
                        <button 
                         class="get-verification"
                         :class="{phone_right:phoneTest&&canClick,disable:!canClick}"
                         @click.prevent="getCode()"
                         :disabled="!canClick||!phoneTest"
                         >
                         {{buttonTitle}}
                         </button>
                    </div> 
                </div>
                <div v-show="!isCurrent">
                     <div class="login-message">
                        <input type="text" placeholder="用户名/手机/邮箱" v-model="user_name">
                    </div> 
                    <div class="login-message">
                        <input :type="showPwd==true?'text':'password'" placeholder="密码" v-model="password">
                        <img :src="showPwd==true?img1:img2" alt="" @click.prevent="showPwd=!showPwd" width="20">
                    </div> 
                   <div class="login-message">
                        <input type="text" placeholder="验证码" v-model="captcha">
                        <img src="http://localhost:3000/api/captcha" alt="" @click.prevent="getCaptcha()" ref="captcha" height="45">
                    </div> 
                </div>
                <section class="login-hint">
                    温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
                    <a href="javascript:;">服务协议与隐私政策</a>
                </section>
                <button class="login-submit" @click.prevent="submit()">登陆</button>
                <button class="login-back">返回</button>
            </form>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import { getPhoneCode, codeLogin ,loginPwd,getUserInfo} from "../../api/index";
export default {
  name: "Login",
  data() {
    return {
      isCurrent: true,
      phone: "",
      code: "",
      password: "",
      user_name: "",
      captcha: "",
      showPwd: true,
      canClick: true,
      count: 0,
      buttonTitle: "获取验证码",
      img1: require("./images/show_pwd.png"),
      img2: require("./images/hide_pwd.png")
    };
  },
  computed: {
    phoneTest() {
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
    }
  },
  mounted: function() {},
  methods: {
    currentChange(type) {
      this.isCurrent = type;
    },
    getCaptcha() {
      this.$refs.captcha.src = "http://localhost:3000/api/captcha?time=" + new Date();
    },
    //获取验证码
    async getCode() {
      let count = 10;
      this.canClick = false;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        count--;
        if (count === 0) {
          clearInterval(this.interval);
          this.buttonTitle = "重新发送!";
          this.canClick = true;
        } else {
          this.buttonTitle = count + "S后再发送";
        }
      }, 1000);

      getPhoneCode(this.phone)
        .then(data => Toast(`发送成功,验证码${data.message}`))
        .then();
    },
    async submit() {
      if (this.isCurrent) {
        if (!this.phoneTest) {
          Toast("请输入有效的手机号!");
          return;
        } else if (!this.code) {
          Toast("请输入验证码");
          return;
        }
        const res = await codeLogin({ phone: this.phone, code: this.code });
        if (res.code == 200) {
            getUserInfo();
        }else{
            Toast(res.message); 
        }
      } else {
        if (!this.user_name) {
          Toast("请输入用户名");
          return;
        } else if (!this.password) {
          Toast("请输入密码!");
          return;
        } else if (!this.captcha) {
          Toast("请输入验证码!");
          return;
        }
        const res=await loginPwd({name:this.user_name,password:this.password,captcha:this.captcha});
        if(res.code!=200){
            Toast(res.message);
            this.$refs.captcha.src = "http://localhost:3000/api/captcha?time=" + new Date();
        }else{
            
        }
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.login {
    width: 100%;
    height: 100%;
    background: #fff;

    .login-content {
        width: 80%;
        padding-top: 60px;
        margin: 0 auto;
        text-align: center;

        .login-logo {
            font-size: 40px;
            font-weight: bold;
            color: mediumpurple;
        }

        .login-way {
            padding-top: 40px;
            padding-bottom: 10px;

            span {
                padding-bottom: 4px;
                color: #333;
                font-size: 14px;

                &:first-child {
                    margin-right: 40px;
                }

                &.current {
                    color: mediumpurple;
                    font-weight: 700;
                    border-bottom: 2px solid #9370db;
                }
            }
        }

        .login-form {
            margin-top: 10px;

            input {
                width: 100%;
                height: 45px;
                border-radius: 4px;
                padding-left: 8px;
                outline: 0;
                box-sizing: border-box;
                border: 1px solid #ddd;
                font: 400 14px Arial;
            }

            button:active {
                top: 1px;
                position: relative;
            }

            input:focus {
                border: 1px solid mediumpurple;
            }

            &.disable {
                background-color: #ddd;
                border-color: #ddd;
                color: #57a3f3;
                cursor: not-allowed;
            }

            .login-hint {
                margin-top: 12px;
                color: #999;
                font-size: 12px;
                line-height: 20px;

                a {
                    color: mediumpurple;
                }
            }

            .login-message {
                width: 100%;
                height: 45px;
                background: #FFF;
                font-size: 14px;
                margin-top: 10px;
                position: relative;

                .get-verification {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    border: 0;
                    color: #cccccc;
                    outline: 0;
                    background: transparent;
                    font-size: 14px;

                    &.phone_right {
                        color: purple;
                    }
                }

                img {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    display: block;
                    border: 0;
                    transform: translateY(-50%);
                }
            }

            .login-submit {
                width: 100%;
                height: 42px;
                background: mediumpurple;
                text-align: center;
                line-height: 42px;
                border-radius: 4px;
                color: #ffffff;
                font-size: 16px;
                border: 0;
                outline: none;
                margin-top: 30px;
            }

            .login-back {
                display: block;
                width: 100%;
                height: 42px;
                margin-top: 15px;
                border-radius: 4px;
                background: transparent;
                border: 1px solid mediumpurple;
                outline: none;
                color: mediumpurple;
                text-align: center;
                font-size: 16px;
                line-height: 42px;
            }
        }
    }
}
</style>

