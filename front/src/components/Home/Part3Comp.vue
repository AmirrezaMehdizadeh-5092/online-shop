<template>
  <div id="part3_home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="title">
      <h2>محصولات پرفروش</h2>
      <div class="line"></div>
      <div class="item">
        <h3 @click="best_selling_phone()">گوشی موبایل</h3>
        <h3 @click="best_selling_pc()">کامپیوتر و لپ تاپ</h3>
        <h3 @click="best_selling_headphone()">هدفون</h3>
        <h3 @click="best_selling_accessories()">لوازم جانبی</h3>
      </div>
    </div>
    <div class="row">
      <div
        class="row1"
        v-for="(item, index) in best_selling"
        :key="item._id"
        @mousemove="option_open(index)"
        @mouseleave="option_close(index)"
      >
        <div
          class="image"
          @mousemove="change_img(index, item.category)"
          @mouseleave="defualt_img(index, item.category)"
        >
          <router-link :to="item.href"
            ><img
              v-bind:id="'best_selling_img' + index"
              :src="
                require(`../../assets/image/products/${item.category}/${item.image}`)
              "
          /></router-link>
        </div>
        <div class="info">
          <div class="name">
            <router-link :to="item.href"
              ><span>{{ item.name }} {{ item.model }}</span></router-link
            >
          </div>
          <div class="price">
            <span>{{ item.price }} تومان </span>
          </div>
        </div>
        <div v-bind:id="'guid' + index" class="guid">
          <div
            @mousemove="fav_open(index)"
            @mouseleave="fav_close(index)"
            @click="add_fav(item._id)"
          >
            <i class="fa fa-heart-o"></i>
          </div>
        </div>
        <div class="option">
          <div v-bind:id="'aa1' + index" class="aa1">
            <span>افزودن به علاقه مندی ها</span>
          </div>
          <div v-bind:id="'aa2' + index" class="aa2">
            <span>افزودن سبد خرید</span>
          </div>
        </div>
        <div
          class="cart"
          @click="add_to_cart(item._id)"
          :id="'cart' + index"
          @mousemove="cart_open(index)"
          @mouseleave="cart_close(index)"
        >
          <span>افزودن به سبد خرید</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Part3Comp",
  data() {
    return {
      best_selling: [],
      aa: null,
      find_pro: null,
      index2: null,
      modal: null,
      span: null,
      i: 1,
    };
  },
  methods: {
    option_open(index) {
      document.getElementById(`guid${index}`).style.visibility = "visible";
      document.getElementById(`cart${index}`).style.visibility = "visible";
    },
    option_close(index) {
      document.getElementById(`guid${index}`).style.visibility = "hidden";
      document.getElementById(`cart${index}`).style.visibility = "hidden";
    },
    change_img(index, category) {
      this.index2 = index;
      this.find_pro = ++this.index2 + "." + this.index2++;
      document.getElementById(
        `best_selling_img${index}`
      ).src = require(`../../assets/image/products/${category}/${this.find_pro}.jpg`);
    },
    defualt_img(index, category) {
      this.index2 = index;
      this.find_pro = ++this.index2;
      document.getElementById(
        `best_selling_img${index}`
      ).src = require(`../../assets/image/products/${category}/${this.find_pro}.jpg`);
    },
    fav_open(index) {
      document.getElementById(`aa1${index}`).style.visibility = "visible";
    },
    fav_close(index) {
      document.getElementById(`aa1${index}`).style.visibility = "hidden";
    },
    add_fav(id) {
      var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
      while (i--) {
        values.push(localStorage.getItem(keys[i]));
      }
      var s = values.indexOf(id);
      console.log(s);
      if (s == -1) {
        localStorage.setItem(id, id);
        this.i++;
        swal({
          icon: "success",
          text: "مصحول به لیست علاقه مندی های شما اضافه شد",
        });
      } else if (s == 0 || s == 1) {
        swal({
          icon: "error",
          text: "محصول به لیست علاقه مندی های شما اضافه شده است",
        });
      }
    },
    add_to_cart(id) {
      if (this.$cookies.isKey(id) == false) {
        this.$cookies.set(`${id}`, id);
        swal({
          icon: "success",
          text: "مصحول به سبد خرید اضافه شد",
        });
      } else {
        swal({
          icon: "error",
          text: "مصحول به سبد خرید اضافه شده است",
        });
      }
    },
    cart_open(index) {
      document.getElementById(`aa2${index}`).style.visibility = "visible";
    },
    cart_close(index) {
      document.getElementById(`aa2${index}`).style.visibility = "hidden";
    },
    view_open(index) {
      document.getElementById(`aa2${index}`).style.visibility = "visible";
    },
    view_close(index) {
      document.getElementById(`aa2${index}`).style.visibility = "hidden";
    },
    best_selling_phone() {
      axios.get("http://localhost:1200/best_selling/phone").then((response) => {
        this.best_selling = response.data;
        this.best_selling.splice(8);
      });
    },
    best_selling_pc() {
      axios.get("http://localhost:1200/best_selling/pc").then((response) => {
        this.best_selling = response.data;
        this.best_selling.splice(8);
      });
    },
    best_selling_headphone() {
      axios
        .get("http://localhost:1200/best_selling/headphone")
        .then((response) => {
          this.best_selling = response.data;
          this.best_selling.splice(8);
        });
    },
    best_selling_accessories() {
      axios
        .get("http://localhost:1200/best_selling/accessories")
        .then((response) => {
          this.best_selling = response.data;
          this.best_selling.splice(8);
        });
    },
  },
  mounted() {
    axios.get("http://localhost:1200/best_selling/phone").then((response) => {
      this.best_selling = response.data;
      this.best_selling.splice(8);
    });
  },
};
</script>

<style>
#part3_home {
  width: 100%;
  background: var(--bgcolor);
}
#part3_home .title {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
#part3_home .title h2 {
  font-size: 27px;
}
#part3_home .title .line {
  height: 2.5px;
  width: 200px;
  position: absolute;
  background-color: red;
  top: 75px;
}
#part3_home .title .item {
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#part3_home .title .item h3 {
  font-weight: lighter;
  font-size: 14px;
  cursor: pointer;
}
#part3_home .title .item h3:hover {
  transition: 0.1s all ease-in-out;
  color: red;
}
#part3_home .row {
  width: 85%;
  border-bottom: 1px solid #e8e5e5;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  flex-wrap: wrap;
}
#part3_home .row .row1 {
  height: 550px;
  width: 25%;
  border-left: 1px solid #e8e5e5;
  margin: 1px 0;
  position: relative;
  margin-bottom: 100px;
}
#part3_home .row .row1:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
#part3_home .row .row1:hover .info {
  height: 190px;
}
#part3_home .row .row1 .image {
  height: 400px;
  width: 100%;
  margin-top: 0px;
}
#part3_home .row .row1 .image img {
  height: 400px;
  width: 100%;
}
#part3_home .row .row1 .info {
  height: 150px;
  width: 100%;
  margin-top: 0px;
  background-color: white;
}
#part3_home .row .row1 .info .name {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part3_home .row .row1 .info .name span {
  color: #007bff;
  text-align: center;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
}
#part3_home .row .row1 .info .name span:hover {
  text-decoration: underline;
  color: brown;
}
#part3_home .row .row1 .info .price {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
#part3_home .row .row1 .info .price span {
  color: brown;
  font-size: 16px;
  font-weight: bold;
}
#part3_home .row .row1 .guid {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 345px;
  left: 125px;
  visibility: hidden;
}
#part3_home .row .row1 .guid div {
  height: 47px;
  width: 62px;
  background-color: white;
  border: 1px solid #e8e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 5px;
}
#part3_home .row .row1 .guid div:hover {
  transition: 0.2s all ease-in-out;
  background-color: rgb(201, 8, 8);
}
#part3_home .row .row1 .guid div:hover i {
  color: white;
}
#part3_home .row .row1 .option .aa1 {
  height: 30px;
  width: 130px;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 305px;
  left: 90px;
  visibility: hidden;
}
#part3_home .row .row1 .option .aa1 span,
#part3_home .row .row1 .option .aa2 span {
  color: white;
  font-size: 12px;
}
#part3_home .row .row1 .option .aa2 {
  height: 30px;
  width: 100px;
  background-color: rgb(0, 0, 0);
  border-radius: 5px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 480px;
  left: 105px;
  visibility: hidden;
}
#part3_home .row .row1 .option .choose {
  visibility: hidden;
}
#part3_home .row .row1 .cart {
  border: 2px solid #ebebeb;
  height: 45px;
  line-height: 41px;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  max-width: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  top: 515px;
  left: 50px;
  visibility: hidden;
}
#part3_home .row .row1 .cart:hover {
  transition: 0.1s all ease-in-out;
  background-color: rgb(193, 11, 11);
}
#part3_home .row .row1 .cart:hover span {
  color: white;
}
</style>
