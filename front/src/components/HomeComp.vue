<template>
  <div id="Home">
    <Header></Header>
    <Part1Comp></Part1Comp>
    <Part2Comp></Part2Comp>
    <Part3Comp></Part3Comp>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Part1Comp from "./Home/Part1Comp.vue";
import Part2Comp from "./Home/Part2Comp.vue";
import Part3Comp from "./Home/Part3Comp.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomeComp",
  data() {
    return {};
  },
  components: { Header, Part1Comp, Part2Comp, Part3Comp, Footer },
  metaInfo: {
    title: "صفحه اصلی",
  },
};
</script>

<style></style>
