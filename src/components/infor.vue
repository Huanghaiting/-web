<template>
  <div>
<div class="jumpbox"
          >
              <span>{{subject.title}}{{subject.original_title}}</span>
              <span>{{subject.year}}</span>

              <div class="block">
                <el-rate
                  v-if="subject.rating.average > 0"
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
              <div>{{subject.durations[0]}}</div>
              <div>
                <p>导演 {{subject.directors[0].name}}</p>
                <p>主演 {{subject.casts[0].name}}/{{subject.casts[1].name}}/{{subject.casts[2].name}}</p>
              </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'inFor',
  props: ['subject'],
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumpbox {
  width: 220px;
  height: 200px;
  border: 1px solid rgb(216, 216, 216);
  background-color: rgb(255, 255, 255);
}
</style>
