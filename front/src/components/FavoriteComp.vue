<template>
  <div id="fav">
    <Header></Header>
    <FavoritePart1></FavoritePart1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import FavoritePart1 from "./Favorite/FavoritePart1.vue";
import Footer from "./Footer.vue";

export default {
  name: "ّFavoriteComp",
  data() {
    return {
    };
  },
  components: { Header, FavoritePart1, Footer },
  metaInfo: {
    title: "مورد علاقه ها",
  },
};
</script>

