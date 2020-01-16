<template>
  <div class="home">
    <p>ADD NOMES</p>
    <form @submit="add">
      <label for="">Nome</label>
      <input v-model="nome" type="text" name="" id="" required>
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
      nome: null
    }
  },
  methods: {
    add (e) {

      this.axios.post('http://api:9000/add').then((response) => {
        alert('Cadastro realizado!')
      })
      e.preventDefault();
    }
  }


}
</script>
