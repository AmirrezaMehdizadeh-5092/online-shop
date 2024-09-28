<template>
  <div id="header">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="up">
      <div class="right">
        <span>ارسال رایگان - ضمانت بازگشت وجه 30 روزه</span>
      </div>
      <div class="left">
        <span>تلفن تماس: 52294920-051</span>
        <span id="sps">|</span>
        <span> ضمانت کیفیت محصولات</span>
      </div>
    </div>
    <div class="down">
      <div class="part1">
        <div class="right">
          <img src="../assets/image/logo.png" alt="" />
        </div>
        <div class="center">
          <div class="link1"><router-link to="/">خانه</router-link></div>
          <div class="link2"><router-link to="/blog">بلاگ</router-link></div>
          <div class="link3" @mousemove="open_page">
            <router-link to=""
              >صفحات<i class="fa fa-caret-down"></i
            ></router-link>
          </div>
          <div class="link4">
            <router-link to="/about">درباره ما</router-link>
          </div>
          <div class="link5">
            <router-link to="/contact">تماس با ما</router-link>
          </div>
        </div>
        <div class="left">
          <router-link to="/favorite"
            ><div class="fav"><i class="fa fa-heart-o"></i></div
          ></router-link>
          <div class="fav_num">{{ fav_num }}</div>
          <router-link to="/cart"
            ><div class="cart"><i class="fa fa-cart-plus"></i></div
          ></router-link>
          <div class="cart_num">{{cart_num}}</div>
        </div>
        <div class="show" id="show" @mouseleave="close_page">
          <router-link id="link_page" to="/about"
            ><div class="page_link"><span>درباره ما</span></div></router-link
          >
          <router-link id="link_page1" to="/question"
            ><div class="page_link">
              <span>سوالات متداول</span>
            </div></router-link
          >
          <router-link id="link_page2" to="/shop"
            ><div class="page_link">
              <span>فروشگاه</span>
            </div></router-link
          >
          <router-link id="link_page3" to="/contact"
            ><div class="page_link"><span>تماس</span></div></router-link
          >
          <router-link id="link_page4" to="/login"
            ><div class="page_link"><span>ورود</span></div></router-link
          >
        </div>
      </div>
      <div class="part2">
        <div class="left">
          <div class="category" @click="open_close_category">
            <span>دسته بندی</span>
            <img src="../assets/image/hamburger.jpg" alt="" />
          </div>
        </div>
        <div class="center">
          <div class="search-box">
            <input
              type="text"
              placeholder="جستجوی محصول ..."
              name="search"
              ref="search"
            />
          </div>
          <div class="search-btn"><span>جستجو</span></div>
        </div>
        <div class="right">
          <router-link to="/login"
            ><div class="log-reg">
              <span>ورود</span>
              <span>|</span>
              <span>ثبت نام</span>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {
      a: null,
      fav_num: null,
      cart_num : null,
    };
  },
  methods: {
    open_page() {
      document.getElementById("show").style.border = "1px solid #e1e1e1";
      document.getElementById("show").style.height = "300px";
      document.getElementById("show").style.opacity = "1";
      document.getElementById("link_page").style.visibility = "visible";
      document.getElementById("link_page1").style.visibility = "visible";
      document.getElementById("link_page2").style.visibility = "visible";
      document.getElementById("link_page3").style.visibility = "visible";
      document.getElementById("link_page4").style.visibility = "visible";
    },
    close_page() {
      if (document.getElementById("show").style.height == "300px") {
        document.getElementById("show").style.height = "0";
      }
      document.getElementById("show").style.border = "none";
      document.getElementById("show").style.opacity = "0";
      document.getElementById("link_page").style.visibility = "hidden";
      document.getElementById("link_page1").style.visibility = "hidden";
      document.getElementById("link_page2").style.visibility = "hidden";
      document.getElementById("link_page3").style.visibility = "hidden";
      document.getElementById("link_page4").style.visibility = "hidden";
    },
    open_close_category() {
      this.a = document.getElementById("category");
      if (this.a.style.height != "0px") {
        document.getElementById("det1").style.visibility = "hidden";
        document.getElementById("det2").style.visibility = "hidden";
        document.getElementById("det3").style.visibility = "hidden";
        //document.getElementById("cat9").style.visibility = "hidden";
        document.getElementById("cat8").style.visibility = "hidden";
        document.getElementById("cat7").style.visibility = "hidden";
        document.getElementById("cat6").style.visibility = "hidden";
        document.getElementById("cat5").style.visibility = "hidden";
        document.getElementById("cat4").style.visibility = "hidden";
        document.getElementById("cat3").style.visibility = "hidden";
        document.getElementById("cat2").style.visibility = "hidden";
        document.getElementById("cat1").style.visibility = "hidden";
        this.a.style.height = "0px";
        setTimeout(() => {
          this.a.style.border = "none";
        }, 450);
      } else {
        this.a.style.border = "2px solid rgb(197, 52, 52)";
        /*document.getElementById("det1").style.visibility = "hidden";
        document.getElementById("det2").style.visibility = "hidden";
        document.getElementById("det3").style.visibility = "hidden";*/
        setTimeout(() => {
          document.getElementById("cat1").style.visibility = "visible";
          document.getElementById("cat2").style.visibility = "visible";
          document.getElementById("cat3").style.visibility = "visible";
          document.getElementById("cat4").style.visibility = "visible";
          document.getElementById("cat5").style.visibility = "visible";
          document.getElementById("cat6").style.visibility = "visible";
          document.getElementById("cat7").style.visibility = "visible";
          document.getElementById("cat8").style.visibility = "visible";
          //document.getElementById("cat9").style.visibility = "visible";
          this.a.style.height = "500px";
        }, 5);
      }
    },
  },
  mounted() {
    this.fav_num = localStorage.length;
    this.cart_num = this.$cookies.keys().length;
  },
};
</script>

<style>
#header {
  width: 100%;
  height: 250px;
}
#header .up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
}
#header .up .right {
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
}
#header .up .left {
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: end;
  align-items: center;
}
#header .up .left span {
  margin: 0 20px;
}
#sps {
  font-weight: 100;
  color: rgb(180, 212, 240);
}
#header .down .part1 {
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
}
#header .down .part1 .right {
  height: 110px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part1 .center {
  height: 110px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#header .down .part1 .center i {
  padding-right: 10px;
}
#header .down .part1 .center a {
  color: black;
}
#header .down .part1 .center div {
  padding: 7px 7px;
}
#header .down .part1 .center .link1 {
  border-bottom: 2px solid black;
}
#header .down .part1 .center .link2,
#header .down .part1 .center .link3,
#header .down .part1 .center .link4,
#header .down .part1 .center .link5 {
  border-bottom: 0;
}
#header .down .part1 .center .link2:hover,
#header .down .part1 .center .link3:hover,
#header .down .part1 .center .link4:hover,
#header .down .part1 .center .link5:hover {
  border-bottom: 2px solid black;
}
#header .down .part1 .show {
  transition: 0.4s all ease-in-out;
  height: 0px;
  width: 200px;
  background-color: white;
  position: absolute;
  top: 125px;
  left: 640px;
  opacity: 0;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
#header .down .part1 .show .page_link {
  width: 150px;
  height: 50px;
  margin: 5px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}
#header .down .part1 .show a {
  color: black;
  font-weight: 400;
  font-size: 13px;
  visibility: hidden;
}
#header .down .part1 .show a:hover {
  transition: 0.3s all;
  color: rgba(255, 0, 0, 0.735);
}
#header .down .part1 .left {
  height: 110px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
#header .down .part1 .left .fav_num {
  height: 27px;
  width: 27px;
  background: #c40316;
  color: #fff;
  font-size: 13px;
  position: absolute;
  border-radius: 50%;
  left: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part1 .left .cart_num {
  height: 27px;
  width: 27px;
  background: #c40316;
  color: #fff;
  font-size: 13px;
  position: absolute;
  border-radius: 50%;
  left: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part1 .left div {
  margin: 0 25px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  cursor: pointer;
}
#header .down .part1 .left div i {
  color: black;
}
#header .down .part1 .left .fav,
#header .down .part1 .left .cart {
  height: 60px;
  width: 65px;
  border: 1px solid #cecbcbfb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part2 {
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
}
#header .down .part2 .left {
  height: 75px;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part2 .left .category {
  height: 55px;
  width: 275px;
  background: #c40316;
  border-radius: 4px;
  margin-right: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
#header .down .part2 .left .category span {
  color: white;
  padding-right: 15px;
}
#header .down .part2 .left .category img {
  padding-left: 15px;
  width: 50px;
  height: 30px;
}
#header .down .part2 .center {
  height: 75px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header .down .part2 .center div {
  margin: 0 0px;
}
#header .down .part2 .center input {
  height: 55px;
  width: 550px;
  border: 1.5px solid #dad9d9;
  outline: none;
  padding: 10px 20px;
}
#header .down .part2 .center .search-btn {
  height: 55px;
  width: 125px;
  background: #c40316;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#header .down .part2 .center .search-btn span {
  color: white;
}
#header .down .part2 .center .search-btn:hover {
  transition: 0.2s;
  background: rgba(0, 0, 0, 0.753);
}
#header .down .part2 .right {
  height: 75px;
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#header .down .part2 .right .log-reg {
  height: 55px;
  width: 150px;
  border: 1.5px solid #e1e1e1;
  border-radius: 20px;
  margin-left: 85px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
#header .down .part2 .right .log-reg:hover {
  transition: 0.1s;
  border: 2px solid #e1e1e1;
}
#header .down .part2 .right .log-reg span {
  font-size: 13px;
  font-weight: 400;
}
</style>
