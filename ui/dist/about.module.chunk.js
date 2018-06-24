webpackJsonp(["about.module"],{

/***/ "../../../../../src/app/+about/about.common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHARED_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENT_DECLARATIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common__ = __webpack_require__("../../../../../src/app/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_routes__ = __webpack_require__("../../../../../src/app/+about/about.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__ = __webpack_require__("../../../../../src/app/+about/components/about/about.component.ts");
// vendor dependencies

// app




var SHARED_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */],
    __WEBPACK_IMPORTED_MODULE_2__common__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__about_routes__["a" /* AboutRoutes */]),
    __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild(),
];
var COMPONENT_DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_4__components_about_about_component__["a" /* AboutComponent */]
];


/***/ }),

/***/ "../../../../../src/app/+about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_common__ = __webpack_require__("../../../../../src/app/+about/about.common.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: __WEBPACK_IMPORTED_MODULE_1__about_common__["b" /* SHARED_MODULES */].slice(),
            declarations: __WEBPACK_IMPORTED_MODULE_1__about_common__["a" /* COMPONENT_DECLARATIONS */].slice(),
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "../../../../../src/app/+about/about.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_about_about_component__ = __webpack_require__("../../../../../src/app/+about/components/about/about.component.ts");
// app

var AboutRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__components_about_about_component__["a" /* AboutComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/+about/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\"\r\n    [innerText]=\"'about.title' | translate\"></h1>\r\n<p class=\"description\"\r\n    [innerText]=\"'about.description' | translate\"></p>\r\n"

/***/ }),

/***/ "../../../../../src/app/+about/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/+about/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'seed-about',
            template: __webpack_require__("../../../../../src/app/+about/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/+about/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map