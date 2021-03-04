<template>

  <div id="components-layout-demo-basic">

    <div class="navbar">
      <div class="navbar_tool">
        <a-row type="flex">
          <a-col :span="8" style="height: 100%">
            <div class="git_style">
              <a-icon type="github" />
              <a href="https://github.com/lumusen0305/AI_Bartender">View Code</a>
            </div>
          </a-col>
          <a-col :span="8" class="version_style">
            <a-icon type="windows" theme="filled"  style="padding-right: 20px;padding-left: 20px;"/>
            <a-icon type="apple" theme="filled" style="padding-right: 20px;padding-left: 20px;"/>
            <a-icon type="android" theme="filled" style="padding-right: 20px;padding-left: 20px;"/>
          </a-col>
          <a-col :span="8" >
            <div @click="showModal" class="login_style">
              <a-icon type="login" style="  cursor: pointer;"/>
              <a-modal v-model="visible" title="Modal" ok-text="确认" cancel-text="取消" @ok="hideModal">

                <div>
                  <div class="login">
                    <a-input ref="userNameInput" v-model="userName" placeholder="Your username">
                      <a-icon slot="prefix" type="user" />
                    </a-input>
                    <br />
                    <br />
                    <a-input ref="passwordinput" v-model="password" placeholder="Your password">
                      <a-icon slot="prefix" type="fire" />
                    </a-input>
                    <br />
                    <br />

                    <div name="register">
                      <a @click="showRegister">
                        没有账号？...
                      </a>
                      <a-modal v-model="registerVisible" title="Basic Modal"ok-text="确认" cancel-text="取消" @ok="hideRegister">
                        <a-input ref="userNameInput" v-model="userName" placeholder="Register Your username">
                          <a-icon slot="prefix" type="user" />
                        </a-input>
                        <br />
                        <br />
                        <a-input ref="passwordinput" v-model="password" placeholder="Enter Your password">
                          <a-icon slot="prefix" type="fire" />
                        </a-input>
                        <br />
                        <br />
                        <div>
                          <a-select default-value="+86" style="width: 120px" @change="handleChange" class="verified" Style="width: 100px">
                            <a-select-option value="+86">
                              CHINA +86
                            </a-select-option>
                            <a-select-option value="+81">
                              JAPAN +81
                            </a-select-option>
                            <a-select-option value="+1">
                              AMERICA +1
                            </a-select-option>
                          </a-select>
                          <a-input ref="passwordinput" v-model="password" placeholder="Enter Your Phone number" class="verifiedcode" style="width: 340px">
                            <a-icon slot="prefix" type="bell" />
                          </a-input>
                        </div>
                        <br />
                        <br />
                        <a-input-search
                            placeholder="Enter your verfied code"
                            enter-button="Get Your verfied code"
                            size="default"
                            @search="onSearch"
                        />
                        <a-icon slot="prefix" type="user" />
                      </a-modal>
                    </div>

                  </div>
                </div>



              </a-modal>
            </div>
          </a-col>

        </a-row>
      </div>
    </div>
    <a-layout>
      <a-layout-header>
        <div class="title_bg">
          <a-carousel autoplay effect="fade" pauseOnFocus="false" autoplaySpeed="15">
            <div><img src="../../assets/img/lunbowine2.jpg"></div>
            <div><img src="../../assets/img/lunbowine3.jpg"></div>
            <div><img src="../../assets/img/lubomusic2.jpg"></div>
            <div><img src="../../assets/img/lunbomusic3.jpg"></div>
            <div><img src="../../assets/img/lunboview.jpg"></div>
            <div><img src="../../assets/img/lunboview2.jpg"></div>
          </a-carousel>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div style="padding-top: 3%">
          <span class="introduce_title_style">
            "EMOTIONAL LEADS FANSTAIC LIFE"
          </span>
        </div>

        <div>

          <div id="bg" ref="bg" :style="bgStyle" class="animation"/>

          <a-button type="" ghost size="large" class="button" @click="jumpToWine">
            BEGIN YOUR TRAVEL
          </a-button>
        </div>

        <a-row >
<!--          <a-col :span=4 :offset="5" class="card_style">-->
<!--            <a-card hoverable style="width: 200px ;" @click="jumpToWine">-->
<!--              <img-->
<!--                  slot="cover"-->
<!--                  alt="example"-->
<!--                  src="../../assets/img/wine1.jpg"-->
<!--              />-->
<!--              <a-card-meta title="選酒">-->
<!--                <template slot="description">-->
<!--                  基於AI選取適合你的事物-->
<!--                </template>-->
<!--              </a-card-meta>-->
<!--            </a-card>-->
<!--          </a-col>-->
<!--          <a-col :span=4 :offset="1" class="card_style">-->
<!--            <a-card hoverable style="width: 200px ;" >-->
<!--              <img-->
<!--                  slot="cover"-->
<!--                  alt="example"-->
<!--                  src="../../assets/img/song1.jpg"-->
<!--              />-->
<!--              <a-card-meta title="選歌" @click="jumpToSong">-->
<!--                <template slot="description">-->
<!--                  基於AI選取適合你的事物-->
<!--                </template>-->
<!--              </a-card-meta>-->
<!--            </a-card>-->
<!--          </a-col>-->
<!--          <a-col :span=4 :offset="1" class="card_style" @click="jumpToWallpaper">-->
<!--            <a-card hoverable style="width: 200px ;" >-->
<!--              <img-->
<!--                  slot="cover"-->
<!--                  alt="example"-->
<!--                  src="../../assets/img/view1.jpg"-->
<!--              />-->
<!--              <a-card-meta title="選壁紙">-->
<!--                <template slot="description">-->
<!--                  基於AI選取適合你的事物-->
<!--                </template>-->
<!--              </a-card-meta>-->
<!--            </a-card>-->
<!--          </a-col>-->
        </a-row>
      </a-layout-content>
      <a-layout-footer>
        <span class="copyright">
          Copyright 619 DANIEM&LUMUSEN&LZC</span>
      </a-layout-footer>
    </a-layout>

  </div>
</template>

<style lang = 'scss'>
.button
{
  position:fixed;
  top:300px;right:0;bottom:0;left:0;
  margin:auto;
}
.copyright
{
  font-family: Georgia, serif;
  font-size: 10px;
  align-content: center;
  color: white;
  top: 50%;
  float: bottom;
}
@keyframes bg {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--x-offset)));
  }
}

.animation {
  animation: bg 13s linear infinite;
}

body { height: 100%; padding: 0; margin: 0; }
.ant-layout{
  height: 230%;
}
#components-layout-demo-basic {
  padding: 0;
  box-sizing: border-box ;
  position: relative;
  text-align: center;
  height: 100%;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
  padding: 0;
  height: 5%;
  background-color: black;
}
#components-layout-demo-basic .ant-layout-header {
  height: 44%;
  padding: 0;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  /*background: rgba(230, 230, 230,1);*/
  /*color: #fff;*/
  background: black;
  line-height: 1.5;
  padding: 0;
  height: 10%;
}
.verified
{
  width: 35%;
  margin-top: 35px;
  margin-left:10px;
  float:left;
}
.verifiedcode
{
  width: 35%;
  margin-top: 35px;
  margin-right:10px;
  float:right;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
.title_bg{
  /*background: url("../../assets/img/bg_1.jpg") no-repeat;*/
  background-size:100% 100%;
  height: 100%;
  text-align: center;
  color: white;
}
html,body,#root{
  width: 100%;
  height: 100%;
}
.introduce_title_style{
  font-family: Georgia, serif;
  font-size: 40px;
  color: white;
}
.git_style{
  height: 100%;
  width: 100%;
  text-align: left;
  font-size: 25;
  padding-top: 1%;
  padding-left: 5%;
}
.login_style{
  height: 100%;
  width: 100%;
  text-align: right;
  font-size: 35;
  padding-top: 1%;
  padding-right: 5%;
}
.title_bg_font{
  position: relative;
  width:100px;
  height:50px;
  top:40%;
  transform:translateY(-50%);
  /*background:#095;*/
}
.card_style{
  padding-top: 5%;
}
.version_style{
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 35;
  padding-top: 0.2%;
  padding-right: 5%;
}
.navbar {
  z-index:9999 ;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  height: 54px;
  width: 100%;
  /*border-top: 1px solid #ddd;*/
  border-bottom: 3px solid #ff0000;
}
.navbar_tool{
  width: 100%;
  height: 100%;
}
</style>
<style scoped lang = 'scss'>
$bg-img: "../../assets/img/123123123.png";

/* bg */

#bg {
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: url(#{$bg-img}) top left;
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 100%;
  position: absolute;
  left: 0;
  top: 1090px;
}

/* overlay */

@keyframes overlay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}



</style>
<script>
export default {
  data() {
    return {
      visible: false,
      registerVisible:false,
      bgStyle: {
        width: null,
        '--x-offset': null
      },
      image: {
        width: 1920,
        height: 900,
      }
    };
  },
  created() {
    const fun = () => {
      const clientHeight = document.body.clientHeight | (document.documentElement && document.documentElement.clientHeight)
      const xOffset = parseInt(this.image.width / this.image.height * clientHeight)
      this.bgStyle['--x-offset'] = xOffset + 'px'
      this.bgStyle.width = document.body.clientWidth + xOffset + 'px'
    }
    window.onresize = () => {
      fun()
      // 重置 animation 保证变量加载
      this.$refs.bg.classList.remove('animation')
      setTimeout(() => {
        this.$refs.bg.classList.add('animation')
      }, 100)
    }
    fun()
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: '确认',
        cancelText: '取消',
      });
    },
    jumpToWallpaper(){
    },
    jumpToSong(){
      document.location.href = "/work#/Index";
    },
    jumpToWine(){
      document.location.href = "/work#/Index";

    },
    showRegister() {
      this.visible=false;
      this.registerVisible = true;
    },
    hideRegister() {
      this.registerVisible = false;
    },
  },
};
</script>
