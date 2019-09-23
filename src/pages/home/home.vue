<template>
  <div class="principal">
    <div class="conteudo">
      <div>
        <div class="card">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
          </div>
        </div>
      </div>
    </div>
    <div class="rodape"></div>
  </div>
</template>

<script>
import { getAll, getById } from "../../services/tiponivel";
export default {
  name: "home",
  metaInfo: {
    title: "Learn Motion",
    titleTemplate: "%s | Home"
  },
  data() {
    return {};
  },
  computed: {},
  created: function (){
    this.buscaTodos();
  },
  methods: {
    buscaTodos() {
      getAll()
        .then(r => {
          console.log(r.data);
        })
        .catch(e => console.log(e.message));
    }
  }
};
</script>
