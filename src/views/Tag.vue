<template>
  <div class="tag">
    <v-subheader class="grey--text">标签</v-subheader>
    <v-container class="my-5 mx-1">
      <v-col cols="12" md="9" offset="0" offset-md="2" class="d-flex justify-center flex-wrap" >
        <v-chip v-for="tag in tags" :key="tag.id" @click="clickTag(tag.id)"
        depressed
        class="ma-3 align-self-center rounded-pill"
        :style="randomTagStyle()">
          {{tag.name}}
        </v-chip>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags:{}
    }
  },
  methods:{
    clickTag(tagId){
      console.log(this.$router.push({name:"TagPosts", params:{id:tagId}}))
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
  },
  created(){
    this.$api.getTags().then((res)=>{
      this.tags = res
    })
  }
};
</script>
