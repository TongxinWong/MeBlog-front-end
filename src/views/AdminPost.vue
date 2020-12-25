<template>
    <v-container class="px-8 d-flex flex-column align-center">
        <v-text-field outlined label="请输入标题" style="min-width:40%;"
            v-model="post.title"
        />

        <v-combobox  label="文章分类" v-model="selectCategory" multiple :items="allCategories"
            class="mt-n3"
        ></v-combobox>

        <v-chip-group class="mt-n4 mb-4">
            <v-chip v-for="(tag,index) in post.tags" :key="index" close @click:close="deleteTag(tag.name)">
                {{tag.name}}
            </v-chip>
            <v-chip complete style="width:130px;" close close-icon="mdi-plus" @click:close="addTag(newTagText)" >
                <v-text-field style="text-align:center;position:relative;top:4px;left:5px;margin-right:5px;"
                    label="新增标签" single-line dense v-model="newTagText">
                </v-text-field>
            </v-chip>
        </v-chip-group>

        <mavon-editor 
            v-model="post.content" 
            ref="md"
            style="min-height: 600px;z-index:0;max-width:95%;"
        />
        <v-btn color='success' large style="min-width:20%;margin:40px 0px;">
            提交
        </v-btn>
        <v-snackbar v-model="showTagWarning" color="red">tag名不能重复！</v-snackbar>
    </v-container>
</template>
<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
//import { config } from 'vue/types/umd'

export default {
    components:{
        mavonEditor
    },
    data(){
        return {
            selectCategory:[],
            allCategories:[],
            showTagWarning:false,
            newTagText:'',
            post:{
                title:'',
                summary:'',
                content:'',
                gmtCreate:'',
                gmtModified:''
            }
        }
    },
    props:[
        'id'
    ],
    methods:{
        addTag(tagName){
            let f = this.post.tags.find((item)=>item.name==tagName)
            if(f){
                this.showTagWarning = true;
                return
            }
            this.post.tags.push({
                name:tagName
            })
            this.newTagText = ''
        },
        deleteTag(tagName){
            this.post.tags = this.post.tags.filter((item)=>item.name != tagName)
        }
    },
    created(){
        this.$api.getPost(this.id).then((res)=>{
            this.post = res
            this.post.content = res.body && res.body.content
            console.log(res)
            let r = []
            this.post.categories.forEach(ele=>{
                r.push(ele.name)
            })
            this.selectCategory = r
        })
        // 获取所有分类
        this.$api.getCategories().then(res=>{
            let r = []
            res.forEach(ele => {
                r.push(ele.name)
            });
            this.allCategories = r
        })
    }
}
</script>