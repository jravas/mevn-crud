<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <ul class="list-group" v-if="items">
        <li class="list-group-item" v-for="(item, i) in items" :key="i"><router-link :to="{ name: 'item', params: { id: item._id } }">{{ item.name }}</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
  }
}
</script>
