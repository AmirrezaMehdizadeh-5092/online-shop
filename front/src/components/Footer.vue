<template>
  <div id="footer">
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
    <div class="sec1">
      <div class="join" style="width: 25%">
        <div class="right1">
          <h3>عضویت در خبر نامه</h3>
        </div>
        <div class="right2">
          <span
            >با عضویت از<span style="color: red"> 30% تخفیف</span> بهره مند
            شوید</span
          >
        </div>
      </div>
      <div class="join join2" style="width: 37.4%">
        <p>
          به 226,000+ مشترک ما بپیوندید و از تخفیف های ویژه هفتگی مخصوص مشترکین
          خبرنامه بهره مند شوید.
        </p>
      </div>
      <div class="join join3" style="width: 37.4%">
        <input
          type="email"
          id="email"
          placeholder="آدرس ایمیل شما"
          name="email"
          ref="email"
        />
        <button class="cart" @click="Subscription()">اشتراک</button>
      </div>
    </div>
    <div class="sec2">
      <div class="subsec2" style="width: 25%">
        <div class="title">
          <div class="subtitle">
            <h3>اطلاعات</h3>
            <div class="line"></div>
          </div>
        </div>
        <div class="body">
          <router-link to="/about">درباره ما</router-link>
          <router-link to="/shop">محصولات جدید</router-link>
          <router-link to="/contact">تماس با ما</router-link>
          <router-link to="/login">حساب کاربری</router-link>
          <router-link to="/blog">بلاگ</router-link>
        </div>
      </div>
      <div class="subsec2" style="width: 25%">
        <div class="title">
          <div class="subtitle">
            <h3>حساب کاربری</h3>
            <div class="line"></div>
          </div>
        </div>
        <div class="body">
          <router-link to="/login">حساب کاربری</router-link>
          <router-link to="/cart">سبد خرید</router-link>
          <router-link to="/favorite">علاقه مندی ها</router-link>
          <router-link to="/buy-recording">سابقه خرید</router-link>
          <router-link to="/international">سفارشات بین المللی</router-link>
        </div>
      </div>
      <div class="subsec2" style="width: 25%">
        <div class="title">
          <div class="subtitle">
            <h3>خدمات مشتری</h3>
            <div class="line"></div>
          </div>
        </div>
        <div class="body">
          <router-link to="/sending">نحوه ارسال</router-link>
          <router-link to="/login">حساب کاربری</router-link>
          <router-link to="/map">نقشه سایت</router-link>
          <router-link to="/favorite">علاقه مندی ها</router-link>
          <router-link to="/special">ویژه ها</router-link>
        </div>
      </div>
      <div class="subsec2" style="width: 25%">
        <div class="title">
          <div class="subtitle">
            <h3>اطلاعات تماس</h3>
            <div class="line"></div>
          </div>
        </div>
        <div class="midd">
          <p style="font-size: 14px">تلفن تماس 24 ساعته</p>
          <p style="color: #c40316; font-size: 14px">051-52294920</p>
        </div>
        <div class="foo">
          <p style="font-size: 14px; line-height: 2">
            استان خراسان رضوی تربت حیدریه شهرک ولیعصر فاز 1 مجتمع لاله طبقه 3
            واحد 165
          </p>
        </div>
        <div class="so-network">
          <a target="_blank" href="https://www.instagram.com"><i class="fa fa-instagram"></i></a>
          <a target="_blank" href="https://www.facebook.com"><i class="fa fa-facebook"></i></a>
          <a target="_blank" href="https://www.twitter.com"><i class="fa fa-twitter"></i></a>
          <a target="_blank" href="https://support.google.com/answer/2451065?hl=en"><i class="fa fa-google-plus"></i></a>
        </div>
      </div>
    </div>
    <div class="sec3">
      <span>تمامی حقوق این سایت محفوظ است</span>
    </div>
  </div>
</template>

<style>
#footer {
  width: 100%;
  height: 500px;
  background-color: white;
}
#footer .sec1 {
  height: 150px;
  width: 100%;
  border: 1px solid #e1e1e1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#footer .sec1 .join {
  height: 150px;
}
#footer .sec1 .join .right1 {
  margin-left: auto;
  height: 75px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
#footer .sec1 .join .right1 h3 {
  font-size: 20px;
  font-weight: 500;
}
#footer .sec1 .join .right2 {
  margin-left: auto;
  height: 75px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#footer .sec1 .join .right2 span {
  font-size: 14px;
  font-weight: 400;
}
#footer .sec1 .join2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .sec1 .join3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .sec1 .join3 input {
  height: 50px;
  width: 350px;
  border: 1px solid #ebebeb;
  background: none;
  padding: 0 15px 0 158px;
  font-size: 14px;
  color: #666;
  border-radius: 4px;
  text-align: right;
  outline: none;
}
#footer .sec1 .join3 .cart {
  border: 2px solid #ebebeb;
  height: 50px;
  line-height: 41px;
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  max-width: 220px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  background-color: rgb(193, 11, 11);
}
#footer .sec1 .join3 .cart span {
  font-size: 12px;
  color: white;
}
#footer .sec1 .join3 .cart:hover {
  transition: 0.1s all ease-in-out;
  background-color: rgb(84, 25, 25);
}
#footer .sec1 .join3 .cart:hover span {
  color: white;
}
#footer .sec1 .join3 form {
  display: flex;
}
#footer .sec2 {
  width: 100%;
  height: 375px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
}
#footer .sec2 .subsec2 {
  height: 375px;
}
#footer .sec2 .subsec2 .title {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer .sec2 .subsec2 .title h3 {
  font-size: 16px;
  font-weight: 500;
}
#footer .sec2 .subsec2 .title .line {
  width: 40px;
  height: 3px;
  margin-top: -10px;
  background-color: rgb(136, 18, 18);
}
#footer .sec2 .subsec2 .body {
  width: 100%;
  height: 275px;
}
#footer .sec2 .subsec2 .midd {
  width: 100%;
  margin-top: 25px;
  height: 100px;
  text-align: center;
}
#footer .sec2 .subsec2 .foo {
  width: 100%;
  height: 100px;
}
#footer .sec2 .subsec2 .foo p {
  margin: 0 25px;
}
#footer .sec2 .subsec2 .so-network {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#footer .sec2 .subsec2 .so-network i 
{
  font-size: 20px;
  cursor: pointer;
  text-shadow: 13px 1px 25px rgba(128, 0, 0, 0.27);
    color: fuchsia;
}
#footer .sec2 .subsec2 .so-network i:hover 
{
  transition: 0.1s all ;
  scale: 1.2;
  color: #c40316;
}
#footer .sec2 .subsec2 .body a {
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.909);
  text-align: center;
  margin: 25px 0;
}
#footer .sec2 .subsec2 .body a:hover {
  color: #c40316;
}
#footer .sec3
{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #22292f;
}
#footer .sec3 span
{
  font-size: 13px;
  font-weight: 400;
  font-style: italic;
  color: white;
}
</style>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "FooterComp",
  data() {
    return {
      email: null,
    };
  },
  methods: {
    Subscription() {
      this.email = this.$refs.email.value;
      if (!this.email) {
        swal({
          icon: "error",
          text: "لطفا ایمیل خود را وارد کنید",
        });
      } else {
        axios
          .post("http://localhost:1200/subscription", {
            email: this.email,
          })
          .then((response) => {
            switch (response.data) {
              case "Invalid":
                swal({
                  icon: "error",
                  text: "لطفا ایمیل معتبر وارد نمایید",
                }).then(() => {
                  document.getElementById("email").value = "";
                });
                break;
              case "Find":
                swal({
                  icon: "error",
                  text: "شما قبلا در خبرنامه عضو شده اید",
                }).then(() => {
                  document.getElementById("email").value = "";
                });
                break;
              case "Record":
                swal({
                  icon: "success",
                  text: "عضویت شما در خبرنامه با موفقیت انجام شد",
                }).then(() => {
                  window.location.reload();
                });
                break;
              default:
                break;
            }
          });
      }
    },
  },
};
</script>
