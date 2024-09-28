<template>
  <div id="part1_home">
    <div class="up">
      <div class="right">
        <div id="category" class="category">
          <router-link to="/shop/clothes"
            ><div id="cat1" class="list-cat1" @mousemove="open('det1')">
              <span>لباس و پوشاک</span><i class="fa fa-angle-left"></i></div
          ></router-link>
          <router-link to="/shop/design"
            ><div id="cat2" class="list-cat1" @mousemove="open('det2')">
              <span>دکور و مبلمان</span><i class="fa fa-angle-left"></i></div
          ></router-link>
          <router-link to="/shop/pc"
            ><div id="cat4" class="list-cat1" @mousemove="open('det3')">
              <span>کامپیوتر و لپ تاپ</span
              ><i class="fa fa-angle-left"></i></div
          ></router-link>
          <router-link to="/shop/headphone"
            ><div id="cat3" class="list-cat1">
              <span>هدفون</span>
            </div></router-link
          >
          <router-link to="/shop/phone"
            ><div id="cat5" class="list-cat2">
              <span>گوشی موبایل</span>
            </div></router-link
          >
          <router-link to="/shop/accessories"
            ><div id="cat6" class="list-cat2">
              <span>لوازم جانبی</span>
            </div></router-link
          >
          <router-link to="/shop/body"
            ><div id="cat7" class="list-cat2">
              <span>قطعات بدنه</span>
            </div></router-link
          >
          <router-link to="/shop/network"
            ><div id="cat8" class="list-cat2">
              <span>ابزار شبکه</span>
            </div></router-link
          >
        </div>
        <div class="detali-category">
          <div id="det1" class="clothes det1" @mouseleave="close('det1')">
            <div id="c1" class="c1">
              <router-link id="c-title" to="/shop/clothes/clothe"
                ><div class="c-title"><span>لباس ها</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/clothes/clothe/zir"
                  ><div class="c-item1">زیر پیراهن</div></router-link
                >
                <router-link to="/shop/clothes/clothe/after"
                  ><div class="c-item1">عصرانه</div></router-link
                >
                <router-link to="/shop/clothes/clothe/dealy"
                  ><div class="c-item1">روزانه</div></router-link
                >
                <router-link to="/shop/clothes/clothe/sport"
                  ><div class="c-item1">ورزشی</div></router-link
                >
              </div>
            </div>
            <div id="c2" class="c1">
              <router-link id="c-title" to="/shop/clothes/bag"
                ><div class="c-title"><span>کیف ها</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/clothes/bag/koole"
                  ><div class="c-item1">کوله پشتی</div></router-link
                >
                <router-link to="/shop/clothes/bag/school"
                  ><div class="c-item1">کیف مدرسه</div></router-link
                >
                <router-link to="/shop/clothes/bag/baby"
                  ><div class="c-item1">کودکانه</div></router-link
                >
                <router-link to="/shop/clothes/bag/hande"
                  ><div class="c-item1">کیف دستی</div></router-link
                >
              </div>
            </div>
            <div id="c3" class="c1">
              <router-link id="c-title" to="/shop/clothes/shoes"
                ><div class="c-title"><span>کفش ها</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/clothes/shoes/chakme"
                  ><div class="c-item1">چکمه</div></router-link
                >
                <router-link to="/shop/clothes/shoes/rahati"
                  ><div class="c-item1">صندل و راحتی</div></router-link
                >
                <router-link to="/shop/clothes/shoes/sport"
                  ><div class="c-item1">ورزشی</div></router-link
                >
                <router-link to="/shop/clothes/shoes/charm"
                  ><div class="c-item1">چرمی</div></router-link
                >
              </div>
            </div>
            <div id="c4" class="c1">
              <router-link id="c-title" to="/shop/clothes/mark"
                ><div class="c-title"><span>پوشاک</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/clothes/mark/jacet"
                  ><div class="c-item1">ژاکت</div></router-link
                >
                <router-link to="/shop/clothes/mark/coats"
                  ><div class="c-item1">کت ها</div></router-link
                >
                <router-link to="/shop/clothes/mark/barani"
                  ><div class="c-item1">بارانی</div></router-link
                >
                <router-link to="/shop/clothes/mark/t-shirt"
                  ><div class="c-item1">تیشرت ها</div></router-link
                >
              </div>
            </div>
          </div>
          <div id="det2" class="design det2" @mouseleave="close('det2')">
            <div id="c5" class="c1">
              <router-link id="c-title" to="/shop/design/chair"
                ><div class="c-title"><span>صندلی</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/design/chair/dinner"
                  ><div class="c-item1">نهار خوری</div></router-link
                >
                <router-link to="/shop/design/chair/sleep-room"
                  ><div class="c-item1">اتاق خواب</div></router-link
                >
                <router-link to="/shop/design/chair/home"
                  ><div class="c-item1">خانه و اداره</div></router-link
                >
                <router-link to="/shop/design/chair/hall"
                  ><div class="c-item1">اتاق نشیمن</div></router-link
                >
              </div>
            </div>
            <div id="c6" class="c1">
              <router-link id="c-title" to="/shop/design/lighting"
                ><div class="c-title"><span>نورپردازی</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/design/lighting/roof"
                  ><div class="c-item1">نورپردازی سقفی</div></router-link
                >
                <router-link to="/shop/design/lighting/wall"
                  ><div class="c-item1">نورپردازی دیواری</div></router-link
                >
                <router-link to="/shop/design/lighting/out-home"
                  ><div class="c-item1">نورپردازی بیرون خانه</div></router-link
                >
                <router-link to="/shop/design/lighting/smart"
                  ><div class="c-item1">نورپردازی هوشمند</div></router-link
                >
              </div>
            </div>
            <div id="c7" class="c1">
              <router-link id="c-title" to="/shop/design/sofa"
                ><div class="c-title"><span>مبل</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/design/sofa/parche"
                  ><div class="c-item1">مبل های پارچه ای</div></router-link
                >
                <router-link to="/shop/design/charm"
                  ><div class="c-item1">مبل های چرمی</div></router-link
                >
                <router-link to="/shop/design/sofa/rahati"
                  ><div class="c-item1">مبل های راحتی</div></router-link
                >
                <router-link to="/shop/design/sofa/sleep"
                  ><div class="c-item1">مبل های تخت خوابی</div></router-link
                >
              </div>
            </div>
          </div>
          <div id="det3" class="pc det3" @mouseleave="close('det3')">
            <div id="c8" class="c1">
              <router-link id="c-title" to="/shop/pc/computer"
                ><div class="c-title"><span>کامپیوتر</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/pc/computer/new"
                  ><div class="c-item1">کامپیوتر نو</div></router-link
                >
                <router-link to="/shop/pc/computer/old"
                  ><div class="c-item1">کامپیوتر کارکرده</div></router-link
                >
              </div>
            </div>
            <div id="c9" class="c1">
              <router-link id="c-title" to="/shop/pc/laptop"
                ><div class="c-title"><span>لپ تاپ</span></div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/pc/laptop/new"
                  ><div class="c-item1">لپ تاپ نو</div></router-link
                >
                <router-link to="/shop/pc/laptop/stock"
                  ><div class="c-item1">لپ تاپ استوک</div></router-link
                >
              </div>
            </div>
            <div id="c10" class="c1">
              <router-link id="c-title" to="/shop/pc/bel-laptop"
                ><div class="c-title">
                  <span>لوازم جانبی لپ تاپ</span>
                </div></router-link
              >
              <div class="c-item">
                <router-link to="/shop/pc/bel-laptop/cover"
                  ><div class="c-item1">کیف، کوله، کاور</div></router-link
                >
                <router-link to="/shop/design/cabl"
                  ><div class="c-item1">کابل HDMI، AUX</div></router-link
                >
                <router-link to="/shop/pc/bel-laptop/mouse-keyboard"
                  ><div class="c-item1">موس و کیبورد</div></router-link
                >
                <router-link to="/shop/pc/bel-laptop/cooling"
                  ><div class="c-item1">خنک کننده</div></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <div class="image">
          <img
            id="slider_image"
            src="../../assets/image/sliders/slider1.jpg"
            alt=""
          />
        </div>
        <div class="icon">
          <i @click="slider('name1', 1)" class="fa fa-circle"></i>
          <i @click="slider('name2', 2)" class="fa fa-circle"></i>
          <i @click="slider('name3', 3)" class="fa fa-circle"></i>
          <i @click="slider('name4', 4)" class="fa fa-circle"></i>
        </div>
        <div class="name">
          <div id="name1" class="name1 choose" @click="slider('name1', 1)">
            <span>کلکسیون بهار 1402</span>
          </div>
          <div @click="slider('name2', 2)" id="name2" class="name1">
            <span>صندلی چوبی مینیمال</span>
          </div>
          <div id="name3" class="name1" @click="slider('name3', 3)">
            <span>جدیدترین برنامه های موبایل</span>
          </div>
          <div id="name4" class="name1" @click="slider('name4', 4)">
            <span>جدیدترین مدل های گوشی</span>
          </div>
        </div>
        <div class="discriptions">
          <div id="desc1" class="desc1">
            <div class="title">
              <span>محصولات محبوب</span>
            </div>
            <div class="des">
              <h2>بهار</h2>
              <h2>محصولات 1402</h2>
            </div>
            <div class="dis">
              <h3>تخفیف 30 درصد این هفته</h3>
            </div>
            <router-link to="/pop-discount-spring"
              ><div class="visit"><span>بررسی</span></div></router-link
            >
          </div>
          <div id="desc2" class="desc2">
            <div class="title">
              <span>فروش ویژه</span>
            </div>
            <div class="des">
              <h2>صندلی</h2>
              <h2>مینیمال 1402</h2>
            </div>
            <div class="dis">
              <h3>تخفیف 30 درصد این هفته</h3>
            </div>
            <router-link to="/super-discount-spring"
              ><div class="visit"><span>بررسی</span></div></router-link
            >
          </div>
          <div id="desc3" class="desc3">
            <div class="title">
              <span>محصولات جدید</span>
            </div>
            <div class="des">
              <h2>کسب و کار</h2>
              <h2>برنامه های موبایل</h2>
            </div>
            <div class="dis">
              <h3>تخفیف 30 درصد این هفته</h3>
            </div>
            <router-link to="/new-moblie-app-discount-spring"
              ><div class="visit"><span>بررسی</span></div></router-link
            >
          </div>
          <div id="desc4" class="desc4">
            <div class="title">
              <span>محصولات جدید</span>
            </div>
            <div class="des">
              <h2>جدیدترین</h2>
              <h2>گوشی های 1402</h2>
            </div>
            <div class="dis">
              <h3>تخفیف 30 درصد این هفته</h3>
            </div>
            <router-link to="/new-moblie-discount-spring"
              ><div class="visit"><span>بررسی</span></div></router-link
            >
          </div>
        </div>
      </div>
      <div class="left">
        <router-link to="/shop/organic"
          ><div class="adv">
            <img src="../../assets/image/adv/banner1.jpg" alt="" /></div
        ></router-link>
        <router-link to="/shop/pc/bel-laptop/joystick"
          ><div class="adv">
            <img src="../../assets/image/adv/banner2.jpg" alt="" /></div
        ></router-link>
        <router-link to="/shop/design/sofa/rahati"
          ><div class="adv">
            <img src="../../assets/image/adv/banner3.jpg" alt="" /></div
        ></router-link>
      </div>
    </div>
    <div class="down">
      <div class="down1">
        <img src="../../assets/image/about/shipping1.png" alt="" />
        <div class="info">
          <h4>ارسال رایگان</h4>
          <h5>ارسال رایگان به تمام نقاط کشور</h5>
        </div>
      </div>
      <div class="down1">
        <img src="../../assets/image/about/shipping2.png" alt="" />
        <div class="info">
          <h4>ارسال رایگان</h4>
          <h5>ارسال رایگان به تمام نقاط کشور</h5>
        </div>
      </div>
      <div class="down1">
        <img src="../../assets/image/about/shipping3.png" alt="" />
        <div class="info">
          <h4>ارسال رایگان</h4>
          <h5>ارسال رایگان به تمام نقاط کشور</h5>
        </div>
      </div>
      <div class="down1">
        <img src="../../assets/image/about/shipping4.png" alt="" />
        <div class="info">
          <h4>ارسال رایگان</h4>
          <h5>ارسال رایگان به تمام نقاط کشور</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import console from 'console';

export default {
  name: "Part1Comp",
  data() {
    return {
      a: null,
      im: "slider2.jpg",
      b: null,
      c: null,
      item: null,
      s: null,
      aa: null,
      bb: null,
      cc: null,
      zz: null,
    };
  },
  methods: {
    slider(input, index) {
      document.getElementById(
        "slider_image"
      ).src = require(`../../assets/image/sliders/slider${index}.jpg`);
      this.aa = [...document.querySelector(".discriptions").children];
      this.aa.forEach((element) => {
        element.style.visibility = "hidden";
      });
      document.getElementById(`desc${index}`).style.visibility = "visible";
      this.s = [...document.querySelector(".name").children];
      this.s.forEach((element) => {
        element.classList.remove("choose");
      });
      document.getElementById(input).classList.add("choose");
    },
    open(cls) {
      this.bb = [...document.querySelector(".detali-category").children];
      this.bb.forEach((element) => {
        element.classList.remove("acc");
      });
      document.getElementById(cls).classList.add("acc");
    },
    close(cls) {
      this.bb = [...document.querySelector(".detali-category").children];
      this.bb.forEach((e) => {
        e.classList.remove("acc");
        this.cc = [...document.querySelector(`.${cls}`).children];
        this.cc.forEach((element) => {
          element.classList.remove("acc1");
        });
      });
    },
  },
};
</script>

<style>
#part1_home {
  width: 100%;
  height: 750px;
}
#part1_home .up {
  display: flex;
  justify-content: space-evenly;
  height: 500px;
}
#part1_home .up .right {
  height: 500px;
  width: 30%;
  position: relative;
}
#part1_home .up .right .detali-category .acc {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 0.3s all ease-in-out;
  visibility: visible;
}
#part1_home .up .right .category {
  height: 500px;
  width: 72%;
  border: 2px solid rgb(197, 52, 52);
  margin-right: 112px;
  transition: 0.5s all ease-in-out;
  position: absolute;
  z-index: 5;
}
#part1_home .up .right .category a {
  color: rgb(86, 24, 24);
  font-size: 15px;
}
#part1_home .up .right .category a:hover {
  color: rgb(186, 51, 51);
  font-size: 15px;
}
#part1_home .up .right .category span {
  margin-right: 30px;
}
#part1_home .up .right .category i {
  margin-left: 20px;
}
#part1_home .up .right .category .list-cat1 {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin: 20px 0;
  transition: 0.4s all ease-in-out;
}
#part1_home .up .right .category .list-cat2 {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin: 20px 0;
  transition: 0.4s all ease-in-out;
}
#part1_home .up .right .clothes {
  position: absolute;
  z-index: 5;
  height: 225px;
  width: 625px;
  background-color: white;
  top: 25px;
  right: 385px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
#part1_home .up .right .clothes .c1 {
  height: 225px;
  width: 25%;
}
#part1_home .up .right .clothes .c1 span {
  font-size: 14.5px;
  color: black;
}
#part1_home .up .right .clothes .c1 a {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.82);
  font-weight: 400;
}
#part1_home .up .right .clothes .c1 a:hover,
#part1_home .up .right .clothes .c1 span:hover {
  color: rgb(201, 74, 74);
}
#part1_home .up .right .clothes .c1 .c-title {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .clothes .c1 .c-item1 {
  margin-top: -10px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .design {
  visibility: hidden;
  position: absolute;
  z-index: 5;
  height: 225px;
  width: 625px;
  background-color: white;
  top: 80px;
  right: 385px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .design .c1 {
  height: 225px;
  width: 33.3%;
}
#part1_home .up .right .design .c1 span {
  font-size: 14.5px;
  color: black;
}
#part1_home .up .right .design .c1 a {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.82);
  font-weight: 400;
}
#part1_home .up .right .design .c1 a:hover,
#part1_home .up .right .design .c1 span:hover {
  color: rgb(201, 74, 74);
}
#part1_home .up .right .design .c1 .c-title {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .design .c1 .c-item1 {
  margin-top: -10px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .pc {
  position: absolute;
  z-index: 5;
  height: 225px;
  width: 625px;
  background-color: white;
  top: 135px;
  right: 385px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
#part1_home .up .right .pc .c1 {
  height: 225px;
  width: 33.3%;
}
#part1_home .up .right .pc .c1 span {
  font-size: 14.5px;
  color: black;
}
#part1_home .up .right .pc .c1 a {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.82);
  font-weight: 400;
}
#part1_home .up .right .pc .c1 a:hover,
#part1_home .up .right .pc .c1 span:hover {
  color: rgb(201, 74, 74);
}
#part1_home .up .right .pc .c1 .c-title {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .right .pc .c1 .c-item1 {
  margin-top: -10px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .up .center {
  height: 500px;
  width: 60%;
  position: relative;
}
#part1_home .up .center .image {
  height: 440px;
  width: 89%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
#part1_home .up .center .image img {
  height: 440px;
  width: 100%;
}
#part1_home .up .center .name {
  height: 60px;
  width: 89%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
#part1_home .up .center .name .name1 {
  height: 60px;
  width: 25%;
  border: 1px solid #e1e1e1;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#part1_home .up .center .name .name1:hover span {
  transition: 0.1s all ease-out;
  color: rgb(245, 55, 55);
}
#part1_home .up .center .name .name1 span {
  font-size: 13px;
}
#part1_home .up .center .name .name1:last-child {
  border-left: 1px solid #e1e1e1;
}
#part1_home .up .center .name .choose {
  border-bottom: 3px solid red;
}
#part1_home .up .center .icon {
  position: absolute;
  top: 410px;
  right: 335px;
  z-index: 6;
}
#part1_home .up .center .icon i {
  color: white;
  margin: 0 7px;
  font-size: 10px;
  cursor: pointer;
}
#part1_home .up .center .icon i:hover {
  color: red;
}
#part1_home .up .center .desc1 {
  position: absolute;
  height: 440px;
  width: 250px;
  top: 0px;
  right: 40px;
}
#part1_home .up .center .desc1 .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
}
#part1_home .up .center .desc1 .title span {
  color: rgb(242, 134, 134);
  font-size: 15px;
}
#part1_home .up .center .desc1 .des h2 {
  font-size: 40px;
  margin: -18px 0;
  margin-right: 50px;
}
#part1_home .up .center .desc1 .dis h3 {
  font-size: 17px;
  margin-top: 40px;
  margin-right: 50px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.655);
}
#part1_home .up .center .desc1 .visit {
  height: 48px;
  width: 150px;
  background: #c40316;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  margin-right: 50px;
  margin-top: 35px;
  cursor: pointer;
}
#part1_home .up .center .desc1 .visit:hover {
  transition: 0.5s all;
  background-color: rgba(0, 0, 0, 0.808);
}
#part1_home .up .center .desc1 .visit span {
  color: white;
}
#part1_home .up .center .desc2 {
  position: absolute;
  height: 440px;
  width: 250px;
  top: 0px;
  right: 40px;
  visibility: hidden;
}
#part1_home .up .center .desc2 .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
}
#part1_home .up .center .desc2 .title span {
  color: rgb(242, 134, 134);
  font-size: 15px;
}
#part1_home .up .center .desc2 .des h2 {
  font-size: 40px;
  margin: -18px 0;
  margin-right: 50px;
}
#part1_home .up .center .desc2 .dis h3 {
  font-size: 17px;
  margin-top: 40px;
  margin-right: 50px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.655);
}
#part1_home .up .center .desc2 .visit {
  height: 48px;
  width: 150px;
  background: #c40316;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  margin-right: 50px;
  margin-top: 35px;
  cursor: pointer;
}
#part1_home .up .center .desc2 .visit:hover {
  transition: 0.5s all;
  background-color: rgba(0, 0, 0, 0.808);
}
#part1_home .up .center .desc2 .visit span {
  color: white;
}
#part1_home .up .center .desc3 {
  position: absolute;
  height: 440px;
  width: 250px;
  top: 0px;
  right: 40px;
  visibility: hidden;
}
#part1_home .up .center .desc3 .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
}
#part1_home .up .center .desc3 .title span {
  color: white;
  font-size: 15px;
}
#part1_home .up .center .desc3 .des h2 {
  font-size: 40px;
  margin: -18px 0;
  margin-right: 50px;
  color: white;
}
#part1_home .up .center .desc3 .dis h3 {
  font-size: 17px;
  margin-top: 40px;
  margin-right: 50px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.655);
}
#part1_home .up .center .desc3 .visit {
  height: 48px;
  width: 150px;
  background: #c40316;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  margin-right: 50px;
  margin-top: 35px;
  cursor: pointer;
}
#part1_home .up .center .desc3 .visit:hover {
  transition: 0.5s all;
  background-color: rgba(0, 0, 0, 0.808);
}
#part1_home .up .center .desc3 .visit span {
  color: white;
}
#part1_home .up .left {
  height: 500px;
  width: 30%;
}
#part1_home .up .center .desc4 {
  position: absolute;
  height: 440px;
  width: 250px;
  top: 0px;
  right: 40px;
  visibility: hidden;
}
#part1_home .up .center .desc4 .title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 200px;
}
#part1_home .up .center .desc4 .title span {
  color: white;
  font-size: 15px;
}
#part1_home .up .center .desc4 .des h2 {
  font-size: 40px;
  margin: -18px 0;
  margin-right: 50px;
  color: white;
}
#part1_home .up .center .desc4 .dis h3 {
  font-size: 17px;
  margin-top: 40px;
  margin-right: 50px;
  font-weight: 400;
  color: white;
}
#part1_home .up .center .desc4 .visit {
  height: 48px;
  width: 150px;
  background: #c40316;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  margin-right: 50px;
  margin-top: 35px;
  cursor: pointer;
}
#part1_home .up .center .desc34 .visit:hover {
  transition: 0.5s all;
  background-color: rgba(0, 0, 0, 0.808);
}
#part1_home .up .center .desc4 .visit span {
  color: white;
}
#part1_home .up .left {
  height: 500px;
  width: 30%;
}
#part1_home .up .left .adv {
  height: 160px;
  width: 300px;
  margin: 5px 1px;
  cursor: pointer;
  position: sticky;
}
#part1_home .up .left .adv img {
  width: 100%;
  height: 160px;
}
#part1_home .up .left .adv:hover img {
  transition: 0.3s all;
  scale: 1.02;
}
#part1_home .down {
  width: 87.6%;
  margin-right: 109px;
  border: 1px solid #e8e5e5;
  height: 115px;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#part1_home .down .down1 {
  height: 110px;
  width: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-left: 1px solid #e8e5e5;
}
#part1_home .down .down1:last-child
{
  border: none;
}
#part1_home .down .down1 .info {
  height: 110px;
  width: 68%;
  margin-right: 20px;
}
</style>
