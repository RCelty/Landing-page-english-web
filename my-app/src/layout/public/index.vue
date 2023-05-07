<template>
  <v-app>
    <PublicHeader />
    <div>
      <router-view />
    </div>
  </v-app>
</template>
<script>
import DropDownMenu from '@/component/base/DropDownMenu.vue';
import PublicHeader from '@/layout/public/component/_Header.vue';

export default {
  components: {
    DropDownMenu, PublicHeader
  },
  data: () => ({
    menu: [
      { title: "Link 1", routeName: "link1" },
      { title: "Link 2" },
      { title: "Link 3" }
    ]
  })
}
</script>