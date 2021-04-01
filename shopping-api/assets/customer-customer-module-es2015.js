(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-primary\">\r\n    <div class=\"container\">\r\n        <h2>Customer Header</h2>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"container\" style=\"min-height: 600px;\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"container\">\r\n    <h2>Customer Footer</h2>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/add/add.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/add/add.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3 mb-4\">\n            <form [formGroup]=\"userReg\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    User Registration\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"form-group\">\n                        <label>Full Name</label>\n                        <input [ngClass]=\"{'is-invalid' : submitCheck && userReg.controls.name.errors }\" formControlName=\"name\" type=\"text\" class=\"form-control\" />\n                        <div *ngIf=\"submitCheck && userReg.controls.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.name.errors.required\">\n                                Please Insert Your Full Name\n                            </div>\n                           \n                        </div>\n                    </div>\n                    \n                   \n                    \n                    \n                    \n                   \n                    <div class=\"form-group\">\n                        <label>Select Image</label>\n                        <input type=\"file\" #image [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.image.errors }\" formControlName=\"image\" class=\"form-control\">\n                        <div *ngIf=\"submitCheck && userReg.controls.image.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.image.errors.required\">\n                                Select Your Image\n                            </div>\n                        </div>\n                    </div>\n\n                   \n                    <div class=\"form-group\">\n                        <label>City</label>\n                        <select [ngClass]=\"{'is-invalid': submitCheck && userReg.controls.city.errors }\" class=\"form-control\" formControlName=\"city\">\n                            <option value=\"\">Select</option>\n                            <option value=\"indore\">Indore</option>\n                            <option value=\"mumbai\">Mumbai</option>\n                            <option value=\"pune\">Pune</option>\n                            <option value=\"delhi\">Delhi</option>\n\n                        </select>\n                        <div *ngIf=\"submitCheck && userReg.controls.city.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"userReg.controls.city.errors.required\">\n                                Please Select Your City\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer\">\n                    <button type=\"submit\" (click)=\"save(image)\" class=\"btn btn-success\">Signup</button>\n                </div>\n            </div>\n            </form>\n\n\n\n            <!-- <button [ngClass]=\"{'btn-danger btn-sm' : x}\" class=\"btn\" (click)=\"demo()\">OK</button> -->\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/info/info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/info/info.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<Br />\r\n<br />\r\n<p #x>Shubham</p>\r\n\r\n<button (click)=\"demo(x)\">Ok</button>\r\n\r\n<h5 #y (click)=\"demo2(y)\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores id vitae maiores laboriosam quia temporibus ipsum eveniet. Commodi earum sint id rerum exercitationem debitis velit, facere odio quos tempora explicabo!</h5>\r\n\r\n<input type=\"text\" #z (mouseover)=\"demo3(z)\" />\r\n<br />\r\n<img src=\"./assets/images/1.jpg\" height=\"50\" #img (click)=\"demo4(img)\"/>\r\n\r\n\r\n<Br />\r\n<Br />\r\n\r\n<input type=\"file\" #file (change)=\"upload(file)\"/>\r\n<Br />\r\n<button (click)=\"upload(file)\">Upload</button>\r\n<br />\r\n<br />\r\n<span *ngFor=\"let x of arr\">\r\n\r\n    <img src=\"{{ x }}\" height=\"200\" width=\"200\" />\r\n</span>\r\n<Br />\r\n<Br />\r\n<Br />\r\n<Br />");

/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _pages_info_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/info/info.component */ "./src/app/customer/pages/info/info.component.ts");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/customer/pages/add/add.component.ts");






const routes = [
    {
        path: "",
        component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        children: [
            {
                path: "",
                component: _pages_info_info_component__WEBPACK_IMPORTED_MODULE_4__["InfoComponent"]
            },
            {
                path: "add",
                component: _pages_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"]
            }
        ]
    }
];
let CustomerRoutingModule = class CustomerRoutingModule {
};
CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomerRoutingModule);



/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CustomerComponent = class CustomerComponent {
    constructor() { }
    ngOnInit() {
    }
};
CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")).default]
    })
], CustomerComponent);



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _pages_info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/info/info.component */ "./src/app/customer/pages/info/info.component.ts");
/* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/customer/pages/add/add.component.ts");









let CustomerModule = class CustomerModule {
};
CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"], _pages_info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"], _pages_add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], CustomerModule);



/***/ }),

/***/ "./src/app/customer/pages/add/add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/customer/pages/add/add.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3BhZ2VzL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/customer/pages/add/add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/pages/add/add.component.ts ***!
  \*****************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AddComponent = class AddComponent {
    constructor(_fb, _http) {
        this._fb = _fb;
        this._http = _http;
        this.submitCheck = false;
        this.userReg = this._fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    save(image) {
        this.submitCheck = true;
        if (this.userReg.invalid) {
            return;
        }
        // console.log(image.files[0]);
        let form = new FormData();
        form.append("image", image.files[0]);
        // form.append("name", this.userReg.value.name);
        // form.append("city", this.userReg.value.city);
        form.append("formdata", JSON.stringify(this.userReg.value));
        // we have to convert object to string
        this._http.post("http://localhost:3000/api/add", form).subscribe((result) => {
            console.log(result);
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.scss */ "./src/app/customer/pages/add/add.component.scss")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/customer/pages/info/info.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/customer/pages/info/info.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL3BhZ2VzL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/customer/pages/info/info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/pages/info/info.component.ts ***!
  \*******************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InfoComponent = class InfoComponent {
    constructor(_http) {
        this._http = _http;
        this.arr = [];
    }
    ngOnInit() {
    }
    demo(a) {
        console.log(a.innerHTML);
    }
    demo2(b) {
        console.log(b.innerHTML);
    }
    demo3(c) {
        console.log(c.value);
        c.value = "james";
    }
    demo4(d) {
        // console.log(d.getAttribute("src"));
        d.setAttribute("src", "./assets/images/2.jpg");
    }
    upload(image) {
        // console.log(image.files[0]);
        var file = image.files[0];
        var form = new FormData(); // create a form with enctype
        form.append("image", file);
        this._http.post("http://localhost:3000/api/upload", form).subscribe((result) => {
            console.log(result);
            this.arr.push(result.path);
            console.log(this.arr);
        });
    }
};
InfoComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/pages/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.scss */ "./src/app/customer/pages/info/info.component.scss")).default]
    })
], InfoComponent);

/*
  <h1>hello</h1>

  tag.innerHTML

  <input type="text" />

  tag.value

  <img src="" />

  <table border="1">

  tag.getAttribute("border")










*/ 


/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es2015.js.map