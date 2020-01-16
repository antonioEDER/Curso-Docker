<template>
  <div class="home">
    <p>ADD NOMES</p>
    <form @submit="add">
      <label for="">Nome</label>
      <input v-model="username" type="text" name="username" id="" required>
      <input v-model="useremail" type="text" name="useremail" id="" required>
      <button type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data: function () {
    return {
      username: null,
      useremail: null
    }
  },
  methods: {
    add (e) {
      let params = {
        username: this.username,
        useremail: this.useremail
      }
      this.axios.post('http://localhost:3000/add', params).then((response) => {
        alert('Cadastro realizado!')
      })
      e.preventDefault();
    }
  }


}
</script>
