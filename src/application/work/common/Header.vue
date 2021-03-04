<template>
<div>
  <div class="navbar">
    <div class="navbar_tool" style="  font-size: 30px;">
      <a-row type="flex">
        <a-col :span="8" style="height: 100%">

          <div class="git_style">
            <a-icon type="github" />
            <a href="https://github.com/lumusen0305/AI_Bartender">View Code</a>
          </div>
        </a-col>

        <a-col :span="8" style="
  text-align: center;
  font-size: 35;
  padding-top: 0.2%;
  padding-right: 5%;
">
          <a-icon type="windows" theme="filled"  style="padding-right: 20px;padding-left: 20px;" />
          <a-icon type="apple" theme="filled" style="padding-right: 20px;padding-left: 20px;"/>
          <a-icon type="android" theme="filled" style="padding-right: 20px;padding-left: 20px;"/>
        </a-col>

        <a-col :span="8" >
<!--          <a-modal v-model="visible" title="Modal" ok-text="确认" cancel-text="取消" @ok="hideModal">-->
<!--          <div @click="showModal" class="login_style">-->
<!--            <a-icon type="login" style="  cursor: pointer;"/>-->
<!--          </div>-->
<!--            </a-modal>-->
        </a-col>
      </a-row>
    </div>
  </div>
  <div>
    <div id="bg" ref="bg" :style="bgStyle" class="animation"/>
<!--    <a-button class="button" shape="round" size="large" ghost>-->
<!--      123123123-->
<!--    </a-button>-->
    <div>
      <transition name="fade" mode="in-out">
      <a-button type="primary" @click="showModal1" class="button" size="large" shape="round">
        Get Your Recommendation
      </a-button>
      </transition>
      <a-modal v-model="my_visible" title="Choose Your Recommendation" @ok="handleOk1"  height="500">
        <div class="inside">
             <a-popover title="MUSIC" >
      <template slot="content">
        <a-card hoverable style="width:330px">
          <div class="music">
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=280 height=460 src="//music.163.com/outchain/player?type=0&id=5146965725&auto=1&height=430"></iframe>
          </div>

<!--          <a-card-meta title="Europe Street beat">-->
<!--            <template slot="description">-->
<!--              www.instagram.com-->
<!--            </template>-->
<!--          </a-card-meta>-->
        </a-card>
      </template>
      <a-button type="primary"shape="round" size="large">
        <a-icon type="cloud" />
        Music
      </a-button>
    </a-popover>
             <a-popover title="Wallpaper"  >
      <template slot="content">
        <a-card hoverable style="width: 240px">
          <img
              slot="cover"
              alt="example"
              src="../../../assets/img/sad.jpg"
          />
          <a-card-meta>
            <template slot="description">
              <a-button type="primary" icon="download" :size="size">Download</a-button>
            </template>
          </a-card-meta>
        </a-card>
      </template>
      <a-button type="primary"shape="round" size="large" >
        <a-icon type="cloud" />
        Wallpaper
      </a-button>
    </a-popover>


          <div>
            <a-button type="primary" @click="showModal2" shape="round" size="large">
              <a-icon type="cloud" />
              Cocktails
            </a-button>

            <a-modal v-model="wine_visible" title="WINE" @ok="handleOk2">
              <div class="inside">
              <a-card hoverable style="width: 300px">
                <img
                    slot="cover"
                    alt="example"
                    src="../../../assets/img/sadwine.png"
                />
                <a-card-meta title="">
                  <template slot="description">
                    Sazerac的历史悠久，但配方里，唯一不曾改变过的仅仅是苦精Peychaud's Bitters。威士忌做的基酒，很柔和圆润，Absinthe的味道若隐若现，给人感觉愤怒、恐惧。
                  </template>
                </a-card-meta>
              </a-card>
              </div>
            </a-modal>
            <a-modal v-model="adult_visible" title="Basic Modal" @ok="handleOk3" centered>
              <p class="alert">CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
              CONFIRM THAT YOU ARE OVER 18
              </br>
              </br>
                CONFIRM THAT YOU ARE OVER 18</p>



            </a-modal>
          </div>



        </div>
      </a-modal>
    </div>
    <a-popover title="Title" class="emotion">
      <template slot="content">
        <a-card hoverable style="width: 240px">
          <img
              slot="cover"
              alt="example"
              src="../../../assets/img/sadtest.png"
          />
          <a-card-meta title="Europe Street beat">
            <template slot="description">
              Your Emotion result
            </template>
          </a-card-meta>
        </a-card>
      </template>
      <a-button type="danger"shape="round" size="small">
        <a-icon type="cloud" />
        Your Emotion result
      </a-button>
    </a-popover>
    <div>
      <a-button type="primary" @click="showModal" class="button1" shape="round" size="large">
        Upload Yoru Emotion
      </a-button>
      <a-modal v-model="visible" title="Upload Your Emotion" @ok="hideModal">
        <a-upload
            list-type="picture"
            name="upload"
            :multiple="true"
            action="http://127.0.0.1:5000/picupload"
            :headers="headers"
            @change="handleChange"
        >
          <a-button> <a-icon type="upload" /> Click to Upload </a-button>
        </a-upload>

        <div class="camera_outer">
          <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
          <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
          <div v-if="imgSrc" class="img_bg_camera">
            <p>效果预览</p>
            <img :src="imgSrc" alt class="tx_img" />
          </div>
          <div>
            <a-button @click="getCompetence()">Open camara</a-button>
            <a-button @click="stopNavigator()">Close Camara</a-button>
            <a-button @click="setImage()">Upload</a-button>
          </div>
        </div>
      </a-modal>
    </div>

  </div>

</div>
</template>



<style>

body { height: 100%; padding: 0; margin: 0; }

@keyframes bg {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--x-offset)));
  }
}
.title_bg{
  background-size:100% 100%;
  height: 100%;
  text-align: center;
  color: white;
}

.animation {
  animation: bg 13s linear infinite;
}
.git_style{
  height: 100%;
  width: 100%;
  text-align: left;
  font-size: 25;
  padding-top: 1%;
  padding-left: 5%;

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


$bg-img: "../../../assets/img/smile.jpg";

#bg {
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: url(#{$bg-img}) top left;
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0px;
}
.music
{
  float: left;
}
.emotion
{
  position: absolute;
  background-color: orchid;
  top: 100%;
  left: 90%;
  margin-top: -100px;
  margin-left: -100px;
}
.alert
{
  color: red;
}
.inside
{
  display: flex;
  justify-content: space-around;
}
.button
{
  position: absolute;
  background-color: #1c8d63;
  top: 55%;
  left: 55%;
  margin-top: -100px;
  margin-left: -100px;


}
.button1
{
  position: absolute;
  background-color: #1c8d63;
  top: 55%;
  left: 40%;
  margin-top: -100px;
  margin-left: -100px;
  opacity: 100;
}
.button2{

  position: absolute;
  //background-color: orchid;
  top: 40%;
  left: 70%;
  margin-top: -100px;
  margin-left: -100px;
}
.modal
{
  position: absolute;
  //background-color: orchid;
  top: 70%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
}
</style>
<script>
import bus from './bus';

export default {
  data() {
    return {
      visible: false,
      my_visible:false,
      wine_visible:false,
      adult_visible:false,
      registerVisible:false,
      bgStyle: {
        width: null,
        '--x-offset': null
      },
      image: {
        width: 1920,
        height: 1792,
      },
      headers: {
        authorization: 'authorization-text',
      },
      url_get:"",

      videoWidth: 300,
      videoHeight: 300,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo:false
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
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    showModal() {
      this.visible = true;
    },
    handleOk1(){

      this.my_visible = false;

    },
    showModal1(){
      this.my_visible=true;

    },
    showModal2()
    {
      this.wine_visible=true;
      this.adult_visible=true;
    },
    handleOk2()
    {
      this.wine_visible = false;
    },
    handleOk3()
    {
      this.adult_visible=false;
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
      document.location.href = "/work";
    },
    jumpToSong(){
      document.location.href = "/work";

    },
    jumpToWine(){
      document.location.href = "/work";

    },
    showRegister() {
      this.visible=false;
      this.registerVisible = true;
    },
    hideRegister() {
      this.registerVisible = false;
    },
    getCompetence() {
      var _this = this;
      _this.thisCancas = document.getElementById("canvasCamera");
      _this.thisContext = this.thisCancas.getContext("2d");
      _this.thisVideo = document.getElementById("videoCamera");
      _this.thisVideo.style.display = 'block';
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {//不存在则报错
            return Promise.reject(
                new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(stream) {
            // 旧的浏览器可能没有srcObject
            if ("srcObject" in _this.thisVideo) {
              _this.thisVideo.srcObject = stream;
            } else {
              // 避免在新的浏览器中使用它，因为它正在被弃用。
              _this.thisVideo.src = window.URL.createObjectURL(stream);
            }
            _this.thisVideo.onloadedmetadata = function(e) {
              _this.thisVideo.play();
            };
          })
          .catch(err => {
            console.log(err);
          });
    },
    //  绘制图片（拍照功能）
    setImage() {
      var _this = this;
      // canvas画图
      _this.thisContext.drawImage(
          _this.thisVideo,
          0,
          0,
          _this.videoWidth,
          _this.videoHeight
      );
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL("image/png");
      _this.imgSrc = image;//赋值并预览图片
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop();
    }
  },
}
</script>
