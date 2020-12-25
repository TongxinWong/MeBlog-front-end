<template>
    <v-container class="d-flex justify-center align-center flex-column" style="height:70vh;">
        <div class="text-h1 grey--text font-weight-bold">404</div>
        <div class="text-h3 my-6 grey--text">你找的东西不存了噜</div>
        <v-btn outlined x-large color="grey"  @click="$router.push('/')">回到首页</v-btn>
    </v-container>
</template>