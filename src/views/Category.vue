<template>
  <div class="category">
    <v-subheader class="grey--text">分类</v-subheader>
    <v-container class="my-5">
      <v-col cols="12" md="8" offset="0" offset-md="1">
        <v-treeview :items="items" hoverable open-all open-on-click item-key="name" transition
        return-object>
          <template v-slot:label="{item}">
            <router-link :to="'category/'+item.id+'/posts'"
            class="text-decoration-none black--text" style="border-bottom:1px solid #ccc;font-size:24px;">
              ㆍ{{item.name}}
            </router-link>
          </template>
        </v-treeview>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[
        // {name:'学习',children:[{name:'C++'},{name:'JavaEE'},{name:'Python'}]},
        // {name:'阴阳术',children:[{name:'好汀！'},{name:'跟我有什么关系'}]},
        // {name:'冷笑话',children:[{name:'南京市长江大桥'},{name:'每天起床第一句，先给女友打个气'}]}
      ]
    }
  },
  methods:{
  },
  created(){
    this.$api.getCategories().then((res)=>{
      this.items = res
    })
  }
};
</script>
