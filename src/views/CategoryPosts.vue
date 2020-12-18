<template>
    <div class="mx-10 ">
        <div class="my-2 text-h2 text-center">
            {{categoryName}}
        </div>
        <v-row>
            <v-col v-for="post in posts" :key="post.id" cols="12" sm="6" md="4">
                <post-card :post="post">
                </post-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {
    components:{
        PostCard
    },
    data() {
        return {
            categoryName:null,
            posts:[]
        }
    },
    props:[
        'id'
    ],
    created(){
        this.$api.getCategoryPosts(this.id).then((res)=>{
            this.categoryName = res.name
            res.posts.forEach((ele) => {
                ele.show = false;
            })
            this.posts = res.posts
        })
    }
}
</script>