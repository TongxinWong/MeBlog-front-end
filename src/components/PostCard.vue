<template>
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
        <v-btn class="ml-2" outlined rounded small @click="$router.push('/post/'+post.id)">阅读</v-btn>
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
</template>

<script>
export default {
    data() {
        return {
            imgDefaultUrl: 'https://i.loli.net/2020/11/30/ydch8VbqxuHwi7v.png',
        }
    },
    props:[
        'post'
    ]
}
</script>