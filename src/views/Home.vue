<template>
  <div class="home">
    <v-subheader class="grey--text">首页</v-subheader>
    <v-container class="my-5">
      {{colNum}}
      <v-row>
        <v-col v-for="i in colNum" :cols="12/colNum" :key="i">
          <v-col
            v-for="post in getColPosts(i)"
            :key="post.id"
            cols="12"
          >
            <v-card color="grey lighten-1" dark outlined>
              <v-img
                v-if="post.imgUrl === null"
                contain
                class="white--text align-end"
                :src="imgDefaultUrl"
              >
              </v-img>

              <v-img
                v-else
                contain
                class="white--text align-end"
                :src="post.imgUrl"
              >
              </v-img>

              <v-card-title>{{ post.title }}</v-card-title>

              <v-card-subtitle class="pb-0">
                {{ post.gmtCreate }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn class="ml-2" outlined rounded small>阅读</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="post.show = !post.show">
                  <v-icon>{{
                    post.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="post.show">
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ post.summary }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
      <v-pagination v-model="page" color="grey" :length="4" class="mt-5"></v-pagination>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    page:0,
    imgDefaultUrl: 'https://i.loli.net/2020/11/30/ydch8VbqxuHwi7v.png',
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
    getAllPosts: function() {
      axios.get('http://localhost:8081/post').then(
        (response) => (
          response.data.forEach((element) => {
            element.show = false;
          }),
          (this.posts = response.data)
        )
      );
    },
  },
  created: function() {
    this.getAllPosts();
  },
};
</script>
