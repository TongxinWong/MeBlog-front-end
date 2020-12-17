<template>
  <div class="tag">
    <v-subheader class="grey--text">标签</v-subheader>
    <v-container class="my-5 mx-1">
      <v-col cols="12" md="9" offset="0" offset-md="2" class="d-flex justify-center flex-wrap" >
        <v-chip v-for="tag in tags" :key="tag" @click="clickTag(tag)"
        depressed
        class="ma-3 align-self-center rounded-pill"
        :style="randomTagStyle()">
          {{tag}}
        </v-chip>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags:[
        'JavaEE',
        'Python',
        'C++',
        'JavaScript',
        'html',
        'css',
        'scss',
        '编译原理',
        '计算机图形学',
        '证券投资学',
        '屁眼子小分队',
        '大屁眼子',
        '没屁眼字',
        '好汀！'
      ]
    }
  },
  methods:{
    clickTag(tagName){
      tagName
      window.open('https://www.baidu.com','_blank')
    },
    randomTagStyle(){
      const rdMax = 20;
      const base = 10;
      let rd = Math.random() * rdMax;
      let size = parseInt(rd) + base;
      let opacity = (0.5 + 0.5 * rd / rdMax);
      // let fontOpacity = parseInt((0.2 + 0.8 * rd / rdMax)*255);
      //   'color':'#000000'+fontOpacity.toString(16)
      // console.log(fontOpacity.toString(16))
      return {
        'padding':size*0.55+10+'px',
        'font-size':size+'px',
        opacity
      }
    }
  }
};
</script>
