<template>
  <nav>
    <v-app-bar flat app hide-on-scroll src="https://i.picsum.photos/id/600/1920/1080.jpg?hmac=qChMCsuIytSAjDY6JwJ_hziMJIKuh0LzIjwZDRdGSPk">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>
          <span>Me</span>
          <span class="font-weight-light">Blog</span>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="grey" @click="$router.push('/admin/login')">
        <v-icon large>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app class="blue-grey lighten-1">
      <v-row class="mt-5 text-center">
        <v-col>
          <v-avatar size="100">
            <img src="https://i.loli.net/2020/12/24/LwVrcGh1s6BqFPf.jpg" alt="Avatar">
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">Your name</p>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {icon: 'mdi-home', text: '首页', route: '/'},
      {icon: 'mdi-archive', text: '归档', route: '/archive'},
      {icon: 'mdi-shape', text: '分类', route: '/category'},
      {icon: 'mdi-tag-multiple', text: '标签', route: '/tag'},
      {icon: 'mdi-information', text: '关于', route: '/about'}
    ]
  })
};
</script>
