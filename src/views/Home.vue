<template>
  <div class="home">
    <v-subheader class="grey--text">首页</v-subheader>
    <v-container class="my-5">
      <v-row>
        <v-col v-for="i in colNum" :cols="12/colNum" :key="i">
          <v-col
            v-for="post in getColPosts(i)"
            :key="post.id"
            cols="12"
          >
            <post-card :post="post"></post-card>
          </v-col>
        </v-col>
      </v-row>
      <v-pagination v-model="page" color="grey" :length="4" class="mt-5"></v-pagination>
    </v-container>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {
  components:{
    PostCard
  },
  data: () => ({
    page:1,
    posts: []
  }),
  computed:{
    colNum(){
      let sizeColMap = {
        xs:1,
        sm:2,
        md:3,
        lg:3,
        xl:3
      }
      return sizeColMap[this.$vuetify.breakpoint.name]
    },
    // 返回响应布局下指定列数的post
    getColPosts(){
      return function(colIndex){
        return this.posts.filter((item,index)=>!((index-colIndex+1) % this.colNum))
      }
    }
  },
  methods: {
    getAllPosts(){
      this.$api.getAllPosts().then((res) => {
        res.forEach((ele) => {
          ele.show = false;
        })
        this.posts = res
      })
    },
  },
  created() {
    this.getAllPosts();
  },
};
</script>
