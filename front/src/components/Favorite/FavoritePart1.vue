<template>
  <div id="fav_part1">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="list">
      <div class="title">
        <div class="section">حذف</div>
        <div class="section">تصویر</div>
        <div class="section">محصول</div>
        <div class="section">قیمت</div>
        <div class="section">افزودن به سبد</div>
      </div>
      <div class="product" v-for="i in archive" :key="i._id">
        <div class="info">
          <i class="fa fa-close" @click="delete_fav(i._id)"></i>
        </div>
        <div class="info">
          <img
            :src="
              require(`../../assets/image/products/${i.category}/${i.image}`)
            "
            alt=""
          />
        </div>
        <div class="info">{{ i.name }} {{ i.model }}</div>
        <div class="info">{{ i.price }}</div>
        <div class="info">
          <div class="cart" @click="add_cart(i._id)">
            <span>افزودن به سبد</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "ّFavoritePart1",
  data() {
    return {
      aa: null,
      archive: null,
      i: 1,
    };
  },
  methods: {
    add_cart(id) {
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
    delete_fav(id) {
      localStorage.removeItem(id);
      window.location.reload();
    },
  },
  mounted() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      axios
        .post("http://localhost:1200/favorite", {
          id: localStorage.getItem(keys[i]),
        })
        .then((response) => {
          values.push(response.data);
        });
      //values.push(localStorage.getItem(keys[i]));
    }
    this.archive = values;
  },
};
</script>

<style>
#fav_part1 {
  width: 100%;
  background: var(--bgcolor);
  height: 500px;
  display: flex;
}
#fav_part1 .list {
  width: 90%;
  background-color: white;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
#fav_part1 .list .title {
  background: #ebebeb;
  width: 97%;
  height: 50px;
  margin-right: auto;
  margin-top: 20px;
  margin-left: auto;
  border-bottom: 3px solid #c40316;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#fav_part1 .list .title .section {
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#fav_part1 .list .product {
  background: white;
  width: 97%;
  height: 110px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #e1e1e1;
}
#fav_part1 .list .product .info {
  width: 20%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #e1e1e1;
}
#fav_part1 .list .product:last-child {
  border-left: none;
}
#fav_part1 .list .product img {
  height: 85px;
  width: 85px;
}
#fav_part1 .list .product i {
  color: rgba(0, 0, 0, 0.651);
  cursor: pointer;
}
#fav_part1 .list .product i:hover {
  transition: 0.2s all;
  scale: 1.1;
  color: black;
}
#fav_part1 .list .product .cart {
  border: 2px solid #ebebeb;
  height: 45px;
  line-height: 41px;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  max-width: 220px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(193, 11, 11);
}
#fav_part1 .list .product .cart span {
  font-size: 12px;
  color: white;
}
#fav_part1 .list .product .cart:hover {
  transition: 0.1s all ease-in-out;
  background-color: rgb(84, 25, 25);
}
#fav_part1 .list .product .cart:hover span {
  color: white;
}
</style>
