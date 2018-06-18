<template>
  <div class="container" v-if="item">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="submtForm()">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="item.name" type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea v-model="item.content" type="text" class="form-control" id="content" placeholder="Content"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditItem',
  computed: {
    item () {
      return this.$store.getters.getItemById(this.$route.params.id)
    }
  },
  methods: {
    submtForm () {
      this.$store.dispatch('editItem', {_id: this.item._id, name: this.item.name, content: this.item.content, date: new Date()})
      // this.name = null
      // this.content = null
      console.log(this.item)
    }
  }
}
</script>
