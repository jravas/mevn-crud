<template>
  <div class="container" v-if="item">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="display-4">{{ item.name }}</h1>
        <hr class="my-4">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p class="lead">{{ item.content }}</p>
        <hr class="my-4">
      </div>
    </div>
    <div class="row justify-content-md-end">
      <div class="col-md-1">
        <button type="button" class="btn btn-outline-danger" @click="deleteItem()">Delete</button>
      </div>
      <div class="col-md-1">
        <router-link :to="{ name: 'edit', params: { id: item._id } }" class="btn btn-outline-warning">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  computed: {
    item () {
      return this.$store.getters.getItemById(this.$route.params.id)
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch('deleteItem', this.$route.params.id)
      this.$router.push('/')
    }
  }
}
</script>
