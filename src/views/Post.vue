<template>
    <div>
        <!-- todo：添加标签，跳转到相应标签页面 -->
        <div class="text-h3 text-center mt-10">{{post.title}}</div>
        <div class="text-center my-2 text--secondary">
            <v-icon size="20" style="vertical-align:text-bottom;">mdi-clock-time-four</v-icon>
            创建于：{{post.gmtCreate}}&nbsp;&nbsp;|&nbsp;&nbsp;
            <v-icon size="20" style="vertical-align:text-bottom;">mdi-clock-time-four-outline</v-icon>
            更新于：{{post.gmtModified}}
        </div>
        <v-col class="text-center py-0">
            <router-link v-for="tag in post.tags" :key="tag.id" :to="'/tag/'+tag.id+'/posts'"
            class="mx-2 black--text text--secondary">
                <v-icon size="16" style="vertical-align:inherit;">mdi-tag-outline</v-icon>{{tag.name}}
            </router-link>
        </v-col>
        <v-col class="px-10 text-center text--secondary">
            {{post.summary}}
        </v-col>
        <v-row>
            <v-col class="px-10 markdown-body" cols="12" sm="10" offset-sm="1">
                <vue-markdown :source='post.content?post.content:undefined'>
                </vue-markdown>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="10" offset-sm="1">
                <div id="gitalk-container"></div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
    components:{
        VueMarkdown
    },
    data() {
        return {
            post:{
                title:'',
                summary:'',
                content:'',
                gmtCreate:'',
                gmtModified:''
            },
            gitalk: new Gitalk({
                clientID: 'f95ac14741bbe5099cbb',
                clientSecret: '615c181f6e193c373752e7cf7d4f6901591a499d',
                repo: 'MeBlog-Comments',
                owner: 'TongxinWong',
                admin: ['TongxinWong'],
                id: location.pathname,      // Ensure uniqueness and length less than 50
                distractionFreeMode: false, // Facebook-like distraction free mode
                labels: ['Gitalk', location.pathname],
                number: parseInt(location.pathname.substring(6))
            })
        }
    },
    props:[
        'id'
    ],
    created(){
        this.$api.myRequest('post/'+this.id).then((res)=>{
            this.post = res
            this.post.content = res.body && res.body.content
        })
    },
    mounted(){
        this.gitalk.render('gitalk-container')
    }
}
</script>