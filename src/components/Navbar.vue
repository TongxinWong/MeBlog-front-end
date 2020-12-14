<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>
          <span>Me</span>
          <span class="font-weight-light">Blog</span>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="grey">
        <v-icon large>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="blue-grey lighten-1">
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
