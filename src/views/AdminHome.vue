<template>
    <v-container>
        <v-data-table
            :headers="headers"
            :items="tableData"
            :items-per-page="10"
            :search="search"
            class="px-4"
        >
            <template v-slot:top>
                <div class="d-flex align-center justify-space-between">
                    <v-text-field
                    v-model="search"
                    label="搜索(请输入关键字)"
                    style="max-width:300px;display:inline-block;"
                    ></v-text-field>
                    <v-btn rounded color="green" class="mr-16" style="color:white"
                        @click="$router.push('admin/newpost')"
                    >新增</v-btn>
                </div>
            </template>
            <template v-slot:[`item.action`]="{item}">
                <v-btn outlined rounded small color="blue"
                    @click="editPost(item.id)"
                    class="mr-2"
                >修改</v-btn>
                <v-btn outlined rounded small color='error'
                    @click="confirmDelete = true;confirmDeleteItem = item;"
                >删除</v-btn>
            </template>
        </v-data-table>
        <v-dialog v-model="confirmDelete" width="500">
            <v-card>
                <v-card-title class="headline grey lighten-2">
                    你确定要删除这篇文章吗？
                </v-card-title>
                <v-card-text class="body-1 mt-6">
                    <div>标题：{{confirmDeleteItem.title}}</div>
                    <div>创建时间：{{confirmDeleteItem.gmtCreate}}</div>
                    <div>简介：{{confirmDeleteItem.summary}}</div>
                </v-card-text> 
                <div class="d-flex justify-center pb-6">
                    <v-btn color="error" rounded @click="deletePost(confirmDeleteItem.id)">删除</v-btn>
                </div>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            tableData:[],
            headers:[
                { text:'标题', value:'title' },
                { text:'创建时间', value:'gmtCreate', align:'center'},
                { text:'简介', value:'summary', width:'300', align:'center'},
                { text:'操作', value:'action', align:'center'},
            ],
            confirmDelete:false,
            confirmDeleteItem:{
                title:'',
                summary:'',
            },
        }
    },
    created(){
        this.$api.getAllPosts().then((res) => {
            this.tableData = res
        })
    },
    methods:{
        editPost(postId){
            this.$router.push('admin/post/'+postId)
        },
        deletePost(postId){
            this.$api.deletePost(postId).then(res=>{
                console.log(res)
                location.reload()
            })
            this.confirmDelete = false
        }
    }
}
</script>

<style scoped>
    .me-summary{
        max-width:200px;
        color:blue;
    }
</style>