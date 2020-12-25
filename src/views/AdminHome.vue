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
                    <v-btn rounded color="green" class="mr-16" style="color:white">新增</v-btn>
                </div>
            </template>
            <template v-slot:[`item.action`]="{item}">
                <v-btn outlined rounded small color="blue"
                    @click="editPost(item.id)"
                    class="mr-2"
                >修改</v-btn>
                <v-btn outlined rounded small color='error'>删除</v-btn>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            posts:Array,
            tableData:[],
            headers:[
                { text:'标题', value:'title' },
                { text:'创建时间', value:'gmtCreate', align:'center'},
                { text:'简介', value:'summary', width:'300', align:'center'},
                { text:'操作', value:'action', align:'center'},
            ]
        }
    },
    created(){
        this.$api.getAllPosts().then((res) => {
            this.tableData = res
            console.log(res)
        })
    },
    methods:{
        editPost(postId){
            postId
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