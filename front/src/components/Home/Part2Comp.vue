<template>
  <div id="part2_home">
    <div class="categories">
      <div class="row1">
        <div class="row11">
          <div class="info">
            <router-link to="/shop/clothes"><h4>لباس و پوشاک</h4></router-link>
            <h5>{{ clothes2 }} محصول</h5>
          </div>
          <img
            style="height: 59px; width: 58px"
            src="../../assets/image/s-product/Clothing.jpg"
            alt=""
          />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/design"><h4>دکور و مبلمان</h4></router-link>
            <h5>{{design2}} محصول</h5>
          </div>
          <img src="../../assets/image/s-product/category7.jpg" alt="" />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/pc"><h4>کامپیوتر و لپ تاپ</h4></router-link>
            <h5>{{ pc2 }} محصول</h5>
          </div>
          <img src="../../assets/image/s-product/category2.jpg" alt="" />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/headphone"><h4>هدفون</h4></router-link>
            <h5>{{ headephone2 }} محصول</h5>
          </div>
          <img
            style="height: 80px; width: 80px"
            src="../../assets/image/s-product/1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="row2">
        <div class="row11">
          <div class="info">
            <router-link to="/shop/phone"><h4>گوشی موبایل</h4></router-link>
            <h5>{{phone2}} محصول</h5>
          </div>
          <img src="../../assets/image/s-product/category1.jpg" alt="" />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/accessories"
              ><h4>لوازم جانبی</h4></router-link
            >
            <h5>{{accessories2}} محصول</h5>
          </div>
          <img src="../../assets/image/s-product/category3.jpg" alt="" />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/body"><h4>قطعات بدنه</h4></router-link>
            <h5>{{body2}} محصول</h5>
          </div>
          <img src="../../assets/image/s-product/category10.jpg" alt="" />
        </div>
        <div class="row11">
          <div class="info">
            <router-link to="/shop/network"><h4>ابزار شبکه</h4></router-link>
            <h5>{{network2}} محصول</h5>
          </div>
          <img
            id="img1"
            src="../../assets/image/s-product/network.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Part2Comp",
  data() {
    return {
      clothes: [],
      clothes2: null,
      design: [],
      design2: null,
      pc: [],
      pc2: null,
      headephone: [],
      headephone2: null,
      phone: [],
      phone2: null,
      accessories: [],
      accessories2: null,
      body: [],
      body2: null,
      network: [],
      network2: null,
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://localhost:1200/find_category/clothes")
      .then((response) => {
        this.clothes = response.data;
        this.clothes2 = this.clothes.length;
      });
    axios.get("http://localhost:1200/find_category/design").then((response) => {
      this.design = response.data;
      this.design2 = this.design.length;
    });
    axios.get("http://localhost:1200/find_category/pc").then((response) => {
      this.pc = response.data;
      this.pc2 = this.pc.length;
    });
    axios
      .get("http://localhost:1200/find_category/headphone")
      .then((response) => {
        this.headephone = response.data;
        this.headephone2 = this.headephone.length;
      });
    axios.get("http://localhost:1200/find_category/phone").then((response) => {
      this.phone = response.data;
      this.phone2 = this.phone.length;
    });
    axios
      .get("http://localhost:1200/find_category/accessories")
      .then((response) => {
        this.accessories = response.data;
        this.accessories2 = this.accessories.length;
      });
    axios.get("http://localhost:1200/find_category/body").then((response) => {
      this.body = response.data;
      this.body2 = this.body.length;
    });
    axios
      .get("http://localhost:1200/find_category/network")
      .then((response) => {
        this.network = response.data;
        this.network2 = this.network.length;
      });
  },
};
</script>

<style>
#part2_home {
  height: 400px;
  width: 100%;
  background: var(--bgcolor);
  display: flex;
  justify-content: center;
  align-items: center;
}
#part2_home .categories {
  height: 300px;
  width: 85%;
  background-color: white;
  border: 1px solid #e8e5e5;
}
#part2_home .categories .row1 {
  height: 150px;
  width: 100%;
  border-bottom: 1px solid #e8e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part2_home .categories .row2 {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part2_home .categories .row1 .row11,
#part2_home .categories .row2 .row11 {
  height: 150px;
  width: 25%;
  border-left: 1px solid #e8e5e5;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#part2_home .categories .row11:hover {
  transition: 0.19999s all ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
#part2_home .categories #img1 {
  height: 75px;
  width: 75px;
}
#part2_home .categories a {
  color: black;
  font-size: 13.8px;
}
#part2_home .categories a:hover {
  transition: 0.1s all;
  color: rgba(255, 0, 0, 0.724);
}
</style>
