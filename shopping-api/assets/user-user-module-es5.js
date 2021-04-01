function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/about/about.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/about/about.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>about works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>contact works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"text-center\">\n                Welcome to Dashboard\n            </h2>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"featured spad\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"section-title\">\n                    <h2>Featured Product</h2>\n                </div>\n                <div class=\"featured__controls\">\n                    <ul>\n                        <li class=\"active\" data-filter=\"*\">All</li>\n                        <li data-filter=\".oranges\">Oranges</li>\n                        <li data-filter=\".fresh-meat\">Fresh Meat</li>\n                        <li data-filter=\".vegetables\">Vegetables</li>\n                        <li data-filter=\".fastfood\">Fastfood</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row featured__filter\">\n            <!-- <pre>{{ allProduct | json }}</pre> -->\n            <app-product-box [p]=\"p\" *ngFor=\"let p of allProduct\"></app-product-box>\n            \n        </div>\n    </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    User Login\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <label>Username/Email</label>\n                        <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" />\n                    </div>\n                    <p class=\"text-danger text-center\">{{ msg }}</p>\n\n                </div>\n                <div class=\"card-footer\">\n                    <button class=\"btn btn-success\" (click)=\"do_login()\">Login</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-4\">\n    <div class=\"row\">\n        <div class=\"col-md-8 offset-md-2\">\n            <h3>Your Profile</h3>\n            <table class=\"table table-dark\">\n                <tr>\n                    <td>Full Name</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>Username</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>Address</td>\n                    <td></td>\n                </tr>\n\n                <tr>\n                    <td>Gender</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>City</td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>Contact</td>\n                    <td></td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/signup/signup.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/signup/signup.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPagesSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3 mb-4\">\n            <form [formGroup]=\"userReg\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    User Registration\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <label>Full Name</label>\n                        <input [ngClass]=\"{'is-invalid' : submitCheck && userReg.controls.name.errors }\" formControlName=\"name\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.name.errors.required\">\n                                Please Insert Your Full Name\n                            </div>\n                           \n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label>Username/Email</label>\n                        <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.username.errors }\" formControlName=\"username\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.username.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.username.errors.required\">\n                                Insert Your Username/Email Id\n                            </div>\n                            <div *ngIf=\"userReg.controls.username.errors.email\">\n                                Email Id is not correct\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Password</label>\n                        <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.password.errors }\" formControlName=\"password\" type=\"password\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.password.errors.required\">\n                                Please Insert Your Password\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Re-Password</label>\n                        <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.re_password.errors }\" formControlName=\"re_password\" type=\"password\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.re_password.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.re_password.errors.required\">\n                                Please Insert Your Re-Password\n                            </div>\n                            <div *ngIf=\"userReg.controls.re_password.errors.reErr\">\n                                Password and Re-Password should be same\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Contact</label>\n                        <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.contact.errors }\" formControlName=\"contact\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.contact.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.contact.errors.required\">\n                                Please Insert Your Contact Number\n                            </div>\n                           <div *ngIf=\"userReg.controls.contact.errors.conErr\">\n                               Insert geater then 10 digit\n                           </div>\n                           <div *ngIf=\"userReg.controls.contact.errors.numErr\">\n                            Insert Numbers Only\n                        </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Address</label>\n                        <textarea [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.address.errors }\" formControlName=\"address\" class=\"form-control\"></textarea>\n                        <div *ngIf=\"submitCheck && userReg.controls.address.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.address.errors.required\">\n                                Please Insert Your Address\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Gender</label>\n                        <br />\n                        Male <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.gender.errors }\" type=\"radio\" value=\"male\" formControlName=\"gender\"/>\n                        Female <input [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.gender.errors }\" type=\"radio\" value=\"female\" formControlName=\"gender\"/>\n                        <div *ngIf=\"submitCheck && userReg.controls.gender.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.gender.errors.required\">\n                                Please Select Your Gender\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <select [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.city.errors }\" class=\"form-control\" formControlName=\"city\">\n                            <option value=\"\">Select</option>\n                            <option value=\"indore\">Indore</option>\n                            <option value=\"mumbai\">Mumbai</option>\n                            <option value=\"pune\">Pune</option>\n                            <option value=\"delhi\">Delhi</option>\n\n                        </select>\n                        <div *ngIf=\"submitCheck && userReg.controls.city.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.city.errors.required\">\n                                Please Select Your City\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" (click)=\"save()\" class=\"btn btn-success\">Signup</button>\n                </div>\n            </div>\n            </form>\n\n\n\n            <!-- <button [ngClass]=\"{'btn-danger btn-sm' : x}\" class=\"btn\" (click)=\"demo()\">OK</button> -->\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/footer/footer.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/footer/footer.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer spad\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"footer__about\">\n                    <div class=\"footer__about__logo\">\n                        <a href=\"./index.html\"><img src=\"/assets/img/logo.png\" alt=\"\"></a>\n                    </div>\n                    <ul>\n                        <li>Address: 60-49 Road 11378 New York</li>\n                        <li>Phone: +65 11.188.888</li>\n                        <li>Email: hello@colorlib.com</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-6 offset-lg-1\">\n                <div class=\"footer__widget\">\n                    <h6>Useful Links</h6>\n                    <ul>\n                        <li><a href=\"#\">About Us</a></li>\n                        <li><a href=\"#\">About Our Shop</a></li>\n                        <li><a href=\"#\">Secure Shopping</a></li>\n                        <li><a href=\"#\">Delivery infomation</a></li>\n                        <li><a href=\"#\">Privacy Policy</a></li>\n                        <li><a href=\"#\">Our Sitemap</a></li>\n                    </ul>\n                    <ul>\n                        <li><a href=\"#\">Who We Are</a></li>\n                        <li><a href=\"#\">Our Services</a></li>\n                        <li><a href=\"#\">Projects</a></li>\n                        <li><a href=\"#\">Contact</a></li>\n                        <li><a href=\"#\">Innovation</a></li>\n                        <li><a href=\"#\">Testimonials</a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-12\">\n                <div class=\"footer__widget\">\n                    <h6>Join Our Newsletter Now</h6>\n                    <p>Get E-mail updates about our latest shop and special offers.</p>\n                    \n                        <input type=\"text\" placeholder=\"Enter your mail\">\n                        <button type=\"submit\" class=\"site-btn\">Subscribe</button>\n                    \n                    <div class=\"footer__widget__social\">\n                        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-instagram\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-pinterest\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"footer__copyright\">\n                    <div class=\"footer__copyright__text\"><p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class=\"fa fa-heart\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p></div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n\n<script src=\"/assets/js/jquery-3.3.1.min.js\"></script>\n    <script src=\"/assets/js/bootstrap.min.js\"></script>\n    <script src=\"/assets/js/jquery.nice-select.min.js\"></script>\n    <script src=\"/assets/js/jquery-ui.min.js\"></script>\n    <script src=\"/assets/js/jquery.slicknav.js\"></script>\n    <script src=\"/assets/js/mixitup.min.js\"></script>\n    <script src=\"/assets/js/owl.carousel.min.js\"></script>\n    <script src=\"/assets/js/main.js\"></script>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/header/header.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/header/header.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"/assets/css/bootstrap.min.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/font-awesome.min.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/elegant-icons.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/nice-select.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/jquery-ui.min.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/owl.carousel.min.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/slicknav.min.css\" type=\"text/css\">\n    <link rel=\"stylesheet\" href=\"/assets/css/style.css\" type=\"text/css\">\n\n   \n\n  <!-- Humberger Begin -->\n  \n  <div class=\"humberger__menu__wrapper\">\n      <div class=\"humberger__menu__logo\">\n          <a href=\"#\"><img src=\"/assets/img/logo.png\" alt=\"\"></a>\n      </div>\n      <div class=\"humberger__menu__cart\">\n          <ul>\n              <li><a href=\"#\"><i class=\"fa fa-heart\"></i> <span>1</span></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span>3</span></a></li>\n          </ul>\n          <div class=\"header__cart__price\">item: <span>$150.00</span></div>\n      </div>\n      \n      <nav class=\"humberger__menu__nav mobile-menu\">\n          <ul>\n              <li class=\"active\"><a href=\"./index.html\">Home</a></li>\n              <li><a href=\"./shop-grid.html\">Shop</a></li>\n              <li><a href=\"#\">Pages</a>\n                  <ul class=\"header__menu__dropdown\">\n                      <li><a href=\"./shop-details.html\">Shop Details</a></li>\n                      <li><a href=\"./shoping-cart.html\">Shoping Cart</a></li>\n                      <li><a href=\"./checkout.html\">Check Out</a></li>\n                      <li><a href=\"./blog-details.html\">Blog Details</a></li>\n                  </ul>\n              </li>\n              <li><a href=\"./blog.html\">Blog</a></li>\n              <li><a href=\"./contact.html\">Contact</a></li>\n          </ul>\n      </nav>\n      <div id=\"mobile-menu-wrap\"></div>\n      <div class=\"header__top__right__social\">\n          <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a>\n      </div>\n      <div class=\"humberger__menu__contact\">\n          <ul>\n              <li><i class=\"fa fa-envelope\"></i> hello@colorlib.com</li>\n              <li>Free Shipping for all Order of $99</li>\n          </ul>\n      </div>\n  </div>\n  <!-- Humberger End -->\n\n  <!-- Header Section Begin -->\n  <header class=\"header\">\n      <div class=\"header__top\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6\">\n                      \n                  </div>\n                  <div class=\"col-lg-6 col-md-6\">\n                      <div class=\"header__top__right\">\n                          \n                         <ng-template [ngIf]=\"_loginServ.isLoggedIn()\" [ngIfElse]=\"beforeLogin\">\n                            <div class=\"header__top__right__auth\">\n                                <a style=\"display: inline-block !important;\" routerLink=\"/dashboard\"> Dashboard</a>\n                                <a style=\"display: inline-block !important; margin-left: 30px;\" routerLink=\"/profile\"> Profile</a>\n                                <a style=\"display: inline-block !important; margin-left: 30px;\" (click)=\"_loginServ.logout()\"> Logout</a>\n                            </div>\n                         </ng-template>\n                         <ng-template #beforeLogin>\n                            <div class=\"header__top__right__auth\">\n                                <a style=\"display: inline-block !important;\" routerLink=\"/login\"><i class=\"fa fa-user\"></i> Login</a>\n                                <a style=\"display: inline-block !important; margin-left: 30px;\" routerLink=\"/signup\"><i class=\"fa fa-user\"></i> Signup</a>\n                            </div>\n\n                         </ng-template>\n                          \n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-3\">\n                  <div class=\"header__logo\">\n                      <a href=\"./index.html\"><img src=\"/assets/img/logo.png\" alt=\"\"></a>\n                  </div>\n              </div>\n              <div class=\"col-lg-6\">\n                  <nav class=\"header__menu\">\n                      <ul>\n                          <li class=\"active\"><a routerLink=\"\">Home</a></li>\n                          <li><a routerLink=\"/contact\">Contact</a></li>\n                          <!-- <li><a href=\"#\">Pages</a>\n                              <ul class=\"header__menu__dropdown\">\n                                  <li><a href=\"./shop-details.html\">Shop Details</a></li>\n                                  <li><a href=\"./shoping-cart.html\">Shoping Cart</a></li>\n                                  <li><a href=\"./checkout.html\">Check Out</a></li>\n                                  <li><a href=\"./blog-details.html\">Blog Details</a></li>\n                              </ul>\n                          </li> -->\n                          <li><a routerLink=\"/about\">About</a></li>\n                          \n                      </ul>\n                  </nav>\n              </div>\n              <div class=\"col-lg-3\">\n                  <div class=\"header__cart\">\n                      <ul>\n                         \n                          <li><a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span>3</span></a></li>\n                      </ul>\n                      \n                  </div>\n              </div>\n          </div>\n          <div class=\"humberger__open\">\n              <i class=\"fa fa-bars\"></i>\n          </div>\n      </div>\n  </header>\n  <!-- Header Section End -->\n\n  <!-- Hero Section Begin -->\n  <section class=\"hero\">\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-lg-3\">\n                  <div class=\"hero__categories\">\n                      <div class=\"hero__categories__all\">\n                          <i class=\"fa fa-bars\"></i>\n                          <span>All departments</span>\n                      </div>\n                      <!-- <pre>{{ cateArr | json }}</pre> -->\n                      <ul>\n                          <li *ngFor=\"let c of cateArr\">\n                              <a href=\"#\">{{ c.name }}</a>\n                          </li>\n                          \n                      </ul>\n                  </div>\n              </div>\n              <div class=\"col-lg-9\">\n                  \n                  <!-- <div class=\"hero__item set-bg\" data-setbg=\"/assets/img/hero/banner.jpg\">\n                      <div class=\"hero__text\">\n                          <span>FRUIT FRESH</span>\n                          <h2>Vegetable <br />100% Organic</h2>\n                          <p>Free Pickup and Delivery Available</p>\n                          <a href=\"#\" class=\"primary-btn\">SHOP NOW</a>\n                      </div>\n                  </div> -->\n                  <div class=\"hero__item set-bg\">\n                    <img src=\"/assets/img/hero/banner.jpg\" />  \n                  </div>\n                  \n              </div>\n          </div>\n      </div>\n  </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/product-box/product-box.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/product-box/product-box.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSharedProductBoxProductBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-lg-3 col-md-4 mb-4\">\n    <div class=\"card\" style=\"width:250px\">\n        <img class=\"card-img-top\" src=\"./assets/img/featured/feature-2.jpg\" alt=\"Card image\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{ p.name }}</h4>\n          <p class=\"card-text\">{{ p.price }}</p>\n          <a href=\"#\" class=\"btn btn-primary\">More</a>\n        </div>\n      </div>   \n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div style=\"min-height: 700px;\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./src/app/helper/validation.helper.ts":
  /*!*********************************************!*\
    !*** ./src/app/helper/validation.helper.ts ***!
    \*********************************************/

  /*! exports provided: chekPass, conNum, conLength, demo, hello */

  /***/
  function srcAppHelperValidationHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "chekPass", function () {
      return chekPass;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "conNum", function () {
      return conNum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "conLength", function () {
      return conLength;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "demo", function () {
      return demo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hello", function () {
      return hello;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function chekPass() {
      return function (userReg) {
        var pass = userReg.controls.password;
        var repass = userReg.controls.re_password;

        if (repass.errors && !repass.errors.reErr) {
          return;
        }

        if (pass.value != repass.value) {
          repass.setErrors({
            reErr: true
          });
        } else {
          repass.setErrors(null);
        }
      };
    }

    function conNum() {
      return function (userReg) {
        var contact = userReg.controls.contact;

        if (contact.errors && !contact.errors.numErr) {
          return;
        }

        if (isNaN(contact.value) == true) {
          contact.setErrors({
            numErr: true
          });
        } else {
          contact.setErrors(null);
        }
      };
    } // isNaN


    function conLength() {
      return function (userReg) {
        var contact = userReg.controls.contact;

        if (contact.errors && !contact.errors.conErr) {
          return;
        }

        if (contact.value.length < 10) {
          contact.setErrors({
            conErr: true
          });
        } else {
          contact.setErrors(null);
        }
      };
    }

    function demo() {
      return function (f) {
        if (f.controls.name.errors && !f.controls.name.errors.xyz) {
          return;
        }

        if (f.controls.name.value != "rohit") {
          f.controls.name.setErrors({
            xyz: true
          });
        } else {
          f.controls.name.setErrors(null);
        }
      };
    }

    function hello() {
      return function (c) {
        var x = c.controls.city;
        /*
        1. city emply
        2. city is not equal indore
        3. city is indore
            */

        if (x.errors && !x.errors.getError) {
          return;
        }

        if (x.value != "indore") {
          x.setErrors({
            getError: true
          });
        } else {
          x.setErrors(null);
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(_http) {
        _classCallCheck(this, CategoryService);

        this._http = _http;
      }

      _createClass(CategoryService, [{
        key: "getAll",
        value: function getAll() {
          return this._http.get("http://localhost:3000/api/category");
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(_http) {
        _classCallCheck(this, ProductService);

        this._http = _http;
      }

      _createClass(ProductService, [{
        key: "getProduct",
        value: function getProduct() {
          return this._http.get("http://localhost:3000/api/product");
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/user/guard/backdoor.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/user/guard/backdoor.guard.ts ***!
    \**********************************************/

  /*! exports provided: BackdoorGuard */

  /***/
  function srcAppUserGuardBackdoorGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackdoorGuard", function () {
      return BackdoorGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BackdoorGuard = /*#__PURE__*/function () {
      function BackdoorGuard(_router) {
        _classCallCheck(this, BackdoorGuard);

        this._router = _router;
      }

      _createClass(BackdoorGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (localStorage.getItem("token")) {
            return true;
          } else {
            this._router.navigate(["/login"]);

            return false;
          }
        }
      }]);

      return BackdoorGuard;
    }();

    BackdoorGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    BackdoorGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BackdoorGuard);
    /***/
  },

  /***/
  "./src/app/user/pages/about/about.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/user/pages/about/about.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/pages/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/pages/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppUserPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/user/pages/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/pages/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/pages/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/pages/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppUserPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/user/pages/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/dashboard/dashboard.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/user/pages/dashboard/dashboard.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/pages/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/pages/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppUserPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/user/pages/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/user/pages/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/pages/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/pages/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUserPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(_proServ) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this._proServ = _proServ;
        this.allProduct = [];

        this._proServ.getProduct().subscribe(function (result) {
          _this.allProduct = result;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/user/pages/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/user/pages/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/pages/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/pages/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/user/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_loginServ, _router) {
        _classCallCheck(this, LoginComponent);

        this._loginServ = _loginServ;
        this._router = _router;
        this.user = {
          username: "",
          password: ""
        };
        this.msg = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "do_login",
        value: function do_login() {
          var _this2 = this;

          this._loginServ.login(this.user).subscribe(function (result) {
            // console.log("***********", result);
            if (result) {
              // console.log(result);
              localStorage.setItem("token", result);

              _this2._router.navigate(["/dashboard"]);
            }
          }, function (err) {
            console.log("-----------", err.error);

            if (err.error.type == 1) {
              _this2.msg = "This Username and Password is Incorrect !";
            }

            if (err.error.type == 2) {
              _this2.msg = "This Password is Incorrect !";
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/user/pages/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/profile/profile.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/pages/profile/profile.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/pages/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/user/pages/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppUserPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/user/services/user.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(_userServ) {
        _classCallCheck(this, ProfileComponent);

        this._userServ = _userServ;

        this._userServ.userInfo().subscribe(function (result) {
          console.log(result);
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/user/pages/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/user/pages/signup/signup.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/user/pages/signup/signup.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPagesSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/pages/signup/signup.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/pages/signup/signup.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _helper_validation_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../helper/validation.helper */
    "./src/app/helper/validation.helper.ts");
    /* harmony import */


    var _services_signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/signup.service */
    "./src/app/user/services/signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(_fb, _signupServ, _router) {
        _classCallCheck(this, SignupComponent);

        this._fb = _fb;
        this._signupServ = _signupServ;
        this._router = _router;
        this.obj = {
          name: "",
          age: null,
          city: ""
        };
        this.submitCheck = false;
        this.x = false;
        this.userReg = this._fb.group({
          name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          re_password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: [Object(_helper_validation_helper__WEBPACK_IMPORTED_MODULE_3__["conNum"])(), Object(_helper_validation_helper__WEBPACK_IMPORTED_MODULE_3__["conLength"])(), Object(_helper_validation_helper__WEBPACK_IMPORTED_MODULE_3__["chekPass"])()]
        });
      }

      _createClass(SignupComponent, [{
        key: "demo",
        value: function demo() {
          this.x = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          this.submitCheck = true;

          if (this.userReg.invalid) {
            return;
          } // console.log(this.userReg.value);


          this._signupServ.save(this.userReg.value).subscribe(function (result) {
            // console.log(result);
            _this3._router.navigate(["/login"]); // res.redirect("/login");

          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/user/pages/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/pipe/demo.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/user/pipe/demo.pipe.ts ***!
    \****************************************/

  /*! exports provided: DemoPipe */

  /***/
  function srcAppUserPipeDemoPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoPipe", function () {
      return DemoPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DemoPipe = /*#__PURE__*/function () {
      function DemoPipe() {
        _classCallCheck(this, DemoPipe);
      }

      _createClass(DemoPipe, [{
        key: "transform",
        value: function transform(value) {
          return null;
        }
      }]);

      return DemoPipe;
    }();

    DemoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'demo'
    })], DemoPipe);
    /***/
  },

  /***/
  "./src/app/user/services/login.service.ts":
  /*!************************************************!*\
    !*** ./src/app/user/services/login.service.ts ***!
    \************************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppUserServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(_http, _router) {
        _classCallCheck(this, LoginService);

        this._http = _http;
        this._router = _router;
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(obj) {
          return this._http.post("http://localhost:3000/api/auth", obj);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("token");

          this._router.navigate(["/login"]);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          if (localStorage.getItem("token")) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/user/services/signup.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/services/signup.service.ts ***!
    \*************************************************/

  /*! exports provided: SignupService */

  /***/
  function srcAppUserServicesSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupService", function () {
      return SignupService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SignupService = /*#__PURE__*/function () {
      function SignupService(_http) {
        _classCallCheck(this, SignupService);

        this._http = _http;
      }

      _createClass(SignupService, [{
        key: "save",
        value: function save(obj) {
          return this._http.post("http://localhost:3000/api/signup", obj);
        }
      }]);

      return SignupService;
    }();

    SignupService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SignupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignupService);
    /*
    
    
    
    
    */

    /***/
  },

  /***/
  "./src/app/user/services/user.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/services/user.service.ts ***!
    \***********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http) {
        _classCallCheck(this, UserService);

        this._http = _http;
      }

      _createClass(UserService, [{
        key: "userInfo",
        value: function userInfo() {
          return this._http.get("http://localhost:3000/api/user", {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          });
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/user/shared/footer/footer.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user/shared/footer/footer.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/shared/footer/footer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user/shared/footer/footer.component.ts ***!
    \********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUserSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/user/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/user/shared/header/header.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user/shared/header/header.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/shared/header/header.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user/shared/header/header.component.ts ***!
    \********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppUserSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/login.service */
    "./src/app/user/services/login.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(_cateServ, _loginServ) {
        var _this4 = this;

        _classCallCheck(this, HeaderComponent);

        this._cateServ = _cateServ;
        this._loginServ = _loginServ;
        this.cateArr = [];

        this._cateServ.getAll().subscribe(function (result) {
          _this4.cateArr = result;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/user/shared/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/user/shared/product-box/product-box.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/user/shared/product-box/product-box.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSharedProductBoxProductBoxComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hhcmVkL3Byb2R1Y3QtYm94L3Byb2R1Y3QtYm94LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/shared/product-box/product-box.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/shared/product-box/product-box.component.ts ***!
    \******************************************************************/

  /*! exports provided: ProductBoxComponent */

  /***/
  function srcAppUserSharedProductBoxProductBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductBoxComponent", function () {
      return ProductBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductBoxComponent = /*#__PURE__*/function () {
      function ProductBoxComponent() {
        _classCallCheck(this, ProductBoxComponent);
      }

      _createClass(ProductBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductBoxComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductBoxComponent.prototype, "p", void 0);
    ProductBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shared/product-box/product-box.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-box.component.scss */
      "./src/app/user/shared/product-box/product-box.component.scss"))["default"]]
    })], ProductBoxComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/user/pages/about/about.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/user/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/user/pages/home/home.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/user/pages/login/login.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/user/pages/signup/signup.component.ts");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/user/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _guard_backdoor_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./guard/backdoor.guard */
    "./src/app/user/guard/backdoor.guard.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/user/pages/profile/profile.component.ts");
    /*
      :4200 ---- home
      :4200/about
      :4200/contact
      :4200/login
      :4200/signup
    
    */


    var routes = [{
      path: "",
      component: _user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
      children: [{
        path: "",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: "about",
        component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }, {
        path: "contact",
        component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
      }, {
        path: "login",
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
      }, {
        path: "signup",
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
      }, {
        path: "dashboard",
        canActivate: [_guard_backdoor_guard__WEBPACK_IMPORTED_MODULE_10__["BackdoorGuard"]],
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
      }, {
        path: "profile",
        canActivate: [_guard_backdoor_guard__WEBPACK_IMPORTED_MODULE_10__["BackdoorGuard"]],
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
      }]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.component.scss":
  /*!******************************************!*\
    !*** ./src/app/user/user.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/user/user.component.scss"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/user/pages/home/home.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/user/pages/about/about.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/user/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/user/pages/login/login.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/user/pages/signup/signup.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/user/shared/header/header.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/user/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/product-box/product-box.component */
    "./src/app/user/shared/product-box/product-box.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _services_signup_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/signup.service */
    "./src/app/user/services/signup.service.ts");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/login.service */
    "./src/app/user/services/login.service.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/user/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/user/pages/profile/profile.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/user/services/user.service.ts");
    /* harmony import */


    var _pipe_demo_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipe/demo.pipe */
    "./src/app/user/pipe/demo.pipe.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _shared_product_box_product_box_component__WEBPACK_IMPORTED_MODULE_13__["ProductBoxComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _pipe_demo_pipe__WEBPACK_IMPORTED_MODULE_22__["DemoPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"], _services_category_service__WEBPACK_IMPORTED_MODULE_16__["CategoryService"], _services_signup_service__WEBPACK_IMPORTED_MODULE_17__["SignupService"], _services_login_service__WEBPACK_IMPORTED_MODULE_18__["LoginService"], _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=user-user-module-es5.js.map