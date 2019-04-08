
<template>

  <div>
    <div class="searchbox">
<a href="#" class="logo">豆瓣电影</a>
      <el-input class="inputtop"
        placeholder="搜电影 / 影人 / 标签"
        v-model="input23"
      >
      </el-input>
      <el-button class="searchtype" icon="el-icon-search"></el-button>
    </div>

    <h2 class="showing">{{title}}</h2>
    <!-- <inFor class="informa" v-bind:subject="subject" v-show="isShow" > </inFor> -->
    <div class="title">

      <ul>

        <inFor
          v-bind:style="sidebox"
          v-if="subject!=null"
          class="informa"
          v-bind:subject="subject"
          v-show="isShow"
        > </inFor>

        <li
          v-for="(subject,index) in subjects"
          :key="subject.id"
          @mouseenter="changestyle(index)"
          :class="{current:num==index}"
        >

          <div class="imgbox">
            <!-- @mouseleave="leave()"  -->
            <a
              @mouseenter="enter(index)"
              @mouseleave="leave()"
              :title="subject.title"
            ><img
                :src="subject.images.small"
                :alt="subject.title"
              >
            </a>

          </div>

          <div class="namebox"><a
              href="#"
              :title="subject.title"
            >{{subject.title}}</a></div>

          <div class="block">
            <el-rate
              v-if="subject.rating.average>0"
              v-bind:value="subject.rating.average/2"
              disabled
            >
            </el-rate>
            <div
              class="noneaverage"
              v-else
            >
              暂无评分
            </div>
            <span
              class="averagebox"
              v-if="subject.rating.average>0"
            >
              {{subject.rating.average}}
            </span>
            <div v-else></div>
          </div>

        </li>

      </ul>

    </div>

  </div>
</template>

<script>
import inFor from './infor'

export default {
  name: 'home',
  components: {
    inFor
  },

  data () {
    return {
      title: '',
      value: '',
      subject: null,
      subjects: [],
      isShow: false,
      num: 0,
      sidebox: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0
      },
      input23: ''
    }
  },

  methods: {
    enter: function (index) {
      this.isShow = true
      this.subject = this.subjects[index]
    },
    leave: function () {
      this.isShow = false
    },
    changestyle (index) {
      this.num = index
      this.sidebox.left = (this.num % 5) * 160 + 160 + 'px'
      this.sidebox.top = Math.floor(this.num / 5) * 240 + 180 + 'px'
      // if (this.num <= 4 * 1 + 0) {
      //   this.sidebox.top = 105 + 'px'
      // } else if (this.num <= 4 * 2 + 1) {
      //   this.sidebox.top = 105 + 240 + 'px'
      // } else if (this.num <= 4 * 3 + 2) {
      //   this.sidebox.top = 105 + 240 + 240 + 'px'
      // } else if (this.num <= 4 * 4 + 3) {
      //   this.sidebox.top = 105 + 240 + 240 + 240 + 'px'
      // } else if (this.num <= 4 * 5 + 4) {
      //   this.sidebox.top = 105 + 240 + 240 + 240 + 240 + 'px'
      // }
    }
  },
  created () {
    this.$axios.get('/apis/v2/movie/in_theaters?city=广州&apikey=0b2bdeda43b5688921839c8ecb20399b').then(data => {
      this.title = data.data.title
      this.subjects = data.data.subjects
      // this.subject = this.subjects[0]
      console.log(this.subjects[0])
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.searchbox{
  position: relative;
   width: 100%;
}
.logo{
  color: rgb(34, 135, 212);
  font: 1.5em sans-serif;
}
.inputtop{
  width: 300px;
}
.showing{
  text-align: left;

}
.searchtype{
  border: none;
  color:#fff;
  font-size: 15px;

  background-color: rgb(140,150,150);
}
.searchtype i{
  text-align: center;
}
.title {
  width: 800px;
  /* margin: 0 auto; */
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  display: inline-block;
  width: 20%;
  margin-top: 10px;
  padding: 0;
  list-style: none;
}
/*.imgbox {
  position: relative;
  width: 100%;
} */
.imgbox img {
  width: 128px;
  height: 180px;
  max-width: 100%;
}

.namebox {
  margin: 5px 0;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #333;
}
.block {
  position: relative;
}
.averagebox {
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 12px;
  color: #f7ba2a;
}
.noneaverage {
  font-size: 12px;
}

/* .informa {
  position: absolute;
  left: 280px;
  top: 25px;
  z-index: 1;
} */
</style>
