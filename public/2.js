(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/router/index.js":
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./resources/js/router/routes.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]); // configure router

var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: _routes__WEBPACK_IMPORTED_MODULE_2__["default"],
  // short for routes: routes
  linkActiveClass: "active"
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/router/routes.js":
/*!***************************************!*\
  !*** ./resources/js/router/routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/layout/dashboard/DashboardLayout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/NotFoundPage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Dashboard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/UserProfile.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Notifications.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Icons.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Maps.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Typography.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/TableList.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
 // GeneralViews

 // Admin pages








var routes = [{
  path: "/",
  component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/layout/dashboard/DashboardLayout.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  redirect: "/dashboard",
  children: [{
    path: "dashboard",
    name: "dashboard",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Dashboard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "stats",
    name: "stats",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/UserProfile.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "notifications",
    name: "notifications",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Notifications.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "icons",
    name: "icons",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Icons.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "maps",
    name: "maps",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Maps.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "typography",
    name: "typography",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/Typography.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, {
    path: "table-list",
    name: "table-list",
    component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/TableList.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }]
}, {
  path: "*",
  component: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/pages/NotFoundPage.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}];
/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

}]);