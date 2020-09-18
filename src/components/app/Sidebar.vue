<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact">
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: localizeFilter('SideBar_Bill'), url: '/', exact: true },
      { title: localizeFilter('SideBar_History'), url: '/history' },
      { title: localizeFilter('SideBar_Planning'), url: '/planning' },
      { title: localizeFilter('SideBar_NewRecord'), url: '/record' },
      { title: localizeFilter('SideBar_Categories'), url: '/categories' }
    ]
  })
}
</script>
