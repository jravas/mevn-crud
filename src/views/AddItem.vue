<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <form @submit.prevent="submtForm()">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="name" type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea v-model="content" type="text" class="form-control" id="content" placeholder="Content"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      name: null,
      content: null
    }
  },
  methods: {
    submtForm () {
      this.$store.dispatch('addItem', {name: this.name, content: this.content, date: new Date()})
      this.name = null
      this.content = null
    }
  }
}
</script>
