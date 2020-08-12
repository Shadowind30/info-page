(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RouterComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterComponents", function() { return RouterComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/left-sidebar/left-sidebar.component */ "./src/app/components/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/right-sidebar/right-sidebar.component */ "./src/app/components/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/repo-card-container/repo-card-container.component */ "./src/app/components/repo-card-container/repo-card-container.component.ts");







const routes = [
    { path: 'about-me', component: _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["LeftSidebarComponent"] },
    { path: 'repos', component: _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_4__["RepoCardContainerComponent"] },
    { path: 'skills', component: _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["RightSidebarComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const RouterComponents = [
    _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["LeftSidebarComponent"],
    _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_4__["RepoCardContainerComponent"],
    _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["RightSidebarComponent"]
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/left-sidebar/left-sidebar.component */ "./src/app/components/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/repo-card-container/repo-card-container.component */ "./src/app/components/repo-card-container/repo-card-container.component.ts");
/* harmony import */ var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/right-sidebar/right-sidebar.component */ "./src/app/components/right-sidebar/right-sidebar.component.ts");







function AppComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tabs View\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-left-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-repo-card-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-right-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to my page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Github Repos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.view = localStorage.getItem('view') || 'full';
    }
    toggleView() {
        if (this.view === 'full') {
            this.view = 'tabs';
        }
        else {
            this.view = 'full';
        }
        localStorage.setItem('view', this.view);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 4, consts: [["id", "tab-buttons"], ["routerLink", "/about-me", 3, "click", 4, "ngIf"], ["routerLink", "/", 3, "click", 4, "ngIf"], ["id", "content", 4, "ngIf"], ["class", "navigation", 4, "ngIf"], [1, "single-tab"], ["routerLink", "/about-me", 3, "click"], ["routerLink", "/", 3, "click"], ["id", "content"], [1, "navigation"], [1, "buttons"], ["routerLink", "/about-me", "routerLinkActive", "button-active"], ["routerLink", "/repos", "routerLinkActive", "button-active"], ["routerLink", "/skills", "routerLinkActive", "button-active"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_button_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 10, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view === "tabs");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["LeftSidebarComponent"], _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_4__["RepoCardContainerComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["RightSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["#content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#tab-buttons[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 1%;\n  padding: 2%;\n}\n\n.buttons[_ngcontent-%COMP%]   .button-active[_ngcontent-%COMP%] {\n  background-color: #777;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsV0FBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7QUFDRDs7QUFFQTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnR7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3RhYi1idXR0b25ze1xyXG5cdHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uYnV0dG9ucyBidXR0b257XHJcblx0bWFyZ2luOiAxJTtcclxuXHRwYWRkaW5nOiAyJTtcclxufVxyXG5cclxuLmJ1dHRvbnMgLmJ1dHRvbi1hY3RpdmV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzc3NztcclxuXHRjb2xvcjogI2ZmZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/__ivy_ngcc__/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_github_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/github-info.service */ "./src/app/shared/github-info.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spinner-loader/spinner-loader.component */ "./src/app/components/spinner-loader/spinner-loader.component.ts");
/* harmony import */ var _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/left-sidebar/left-sidebar.component */ "./src/app/components/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/repo-card-container/repo-card-container.component */ "./src/app/components/repo-card-container/repo-card-container.component.ts");
/* harmony import */ var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/right-sidebar/right-sidebar.component */ "./src/app/components/right-sidebar/right-sidebar.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_github_info_service__WEBPACK_IMPORTED_MODULE_5__["GithubInfoService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["LeftSidebarComponent"], _components_repo_card_container_repo_card_container_component__WEBPACK_IMPORTED_MODULE_10__["RepoCardContainerComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"], _components_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerLoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["RouterComponents"],
                    _components_spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerLoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
                ],
                providers: [_shared_github_info_service__WEBPACK_IMPORTED_MODULE_5__["GithubInfoService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/left-sidebar/left-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/left-sidebar/left-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/github-info.service */ "./src/app/shared/github-info.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner-loader/spinner-loader.component */ "./src/app/components/spinner-loader/spinner-loader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LeftSidebarComponent_app_spinner_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner-loader");
} }
function LeftSidebarComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function LeftSidebarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user.name);
} }
function LeftSidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.bio);
} }
function LeftSidebarComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.summary.trim() || "Add a Summary", " ");
} }
function LeftSidebarComponent_textarea_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeftSidebarComponent_textarea_6_Template_textarea_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.summary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.summary);
} }
function LeftSidebarComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftSidebarComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setCanEdit(ctx_r9.canEdit); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.canEdit ? "Save" : "Edit", " ");
} }
class LeftSidebarComponent {
    constructor(githubInfo) {
        this.githubInfo = githubInfo;
        this.canEdit = false;
        this.summary = localStorage.summary || '';
        this.isLoading = true;
    }
    setCanEdit() {
        this.canEdit = !this.canEdit;
        if (!this.canEdit) {
            this.saveSummary();
        }
    }
    saveSummary() {
        if (!this.summary)
            return;
        localStorage.setItem('summary', this.summary);
    }
    ngOnInit() {
        this.githubInfo.getUser()
            .subscribe((data) => {
            this.user = data;
            this.isLoading = false;
        });
    }
}
LeftSidebarComponent.ɵfac = function LeftSidebarComponent_Factory(t) { return new (t || LeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__["GithubInfoService"])); };
LeftSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftSidebarComponent, selectors: [["app-left-sidebar"]], decls: 8, vars: 7, consts: [["id", "container"], [4, "ngIf"], ["alt", "user", 3, "src", 4, "ngIf"], ["class", "name", 4, "ngIf"], ["class", "role", 4, "ngIf"], ["class", "summary", 4, "ngIf"], ["rows", "10", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "click", 4, "ngIf"], ["alt", "user", 3, "src"], [1, "name"], [1, "role"], [1, "summary"], ["rows", "10", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function LeftSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeftSidebarComponent_app_spinner_loader_1_Template, 1, 0, "app-spinner-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LeftSidebarComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeftSidebarComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeftSidebarComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeftSidebarComponent_p_5_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LeftSidebarComponent_textarea_6_Template, 2, 1, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LeftSidebarComponent_button_7_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["#container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  align-self: center;\n  background: #aaa;\n  color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 40%;\n  border-radius: 50%;\n  margin-top: 2%;\n}\n\n.name[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  font-size: 1.5em;\n  text-align: center;\n}\n\n.role[_ngcontent-%COMP%] {\n  font-size: 1.15em;\n  text-align: center;\n}\n\np.summary[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  text-align: center;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  margin: 5%;\n  padding: 2%;\n  resize: none;\n  border: 5% solid;\n  background: #333;\n  color: #fff;\n  font-size: 1.15em;\n  width: 80%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 20%;\n  padding: 2%;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Msa0JBQUE7RUFDRCxnQkFBQTtFQUNBLFdBQUE7QUFDRDs7QUFFQTtFQUNDLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcdFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogI2FhYTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW1nIHtcclxuXHR3aWR0aDogNDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLm5hbWV7XHJcblx0bWFyZ2luLXRvcDogNSU7XHJcblx0Zm9udC1zaXplOiAxLjVlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yb2xle1xyXG5cdGZvbnQtc2l6ZTogMS4xNWVtO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucC5zdW1tYXJ5e1xyXG5cdGZvbnQtc2l6ZTogMS4zZW07XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuXHRtYXJnaW46IDUlO1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cdHJlc2l6ZTogbm9uZTtcclxuXHRib3JkZXI6IDUlIHNvbGlkO1xyXG5cdGJhY2tncm91bmQ6ICMzMzM7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAxLjE1ZW07XHJcblx0d2lkdGg6IDgwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHR3aWR0aDogMjAlO1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cdG1hcmdpbi1ib3R0b206IDIlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-sidebar',
                templateUrl: './left-sidebar.component.html',
                styleUrls: ['./left-sidebar.component.scss']
            }]
    }], function () { return [{ type: _shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__["GithubInfoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/repo-card-container/repo-card-container.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/repo-card-container/repo-card-container.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RepoCardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoCardContainerComponent", function() { return RepoCardContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/github-info.service */ "./src/app/shared/github-info.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner-loader/spinner-loader.component */ "./src/app/components/spinner-loader/spinner-loader.component.ts");





function RepoCardContainerComponent_app_spinner_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner-loader");
} }
function RepoCardContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stars: ", repo_r2.stargazers_count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](repo_r2.language || "not available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", repo_r2.clone_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class RepoCardContainerComponent {
    constructor(githubInfo) {
        this.githubInfo = githubInfo;
        this.isLoading = true;
    }
    ngOnInit() {
        this.githubInfo.getRepos()
            .subscribe((data) => {
            this.githubRepos = [...data];
            this.isLoading = false;
        });
    }
}
RepoCardContainerComponent.ɵfac = function RepoCardContainerComponent_Factory(t) { return new (t || RepoCardContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__["GithubInfoService"])); };
RepoCardContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RepoCardContainerComponent, selectors: [["app-repo-card-container"]], decls: 6, vars: 3, consts: [["id", "center-container"], [4, "ngIf"], [1, "wrapper"], ["class", "card-container", 4, "ngFor", "ngForOf"], [1, "card-container"], [1, "top"], [1, "title"], [1, "star-text"], [1, "bottom"], [1, "language"], [1, "link", 3, "href"]], template: function RepoCardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepoCardContainerComponent_app_spinner_loader_1_Template, 1, 0, "app-spinner-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RepoCardContainerComponent_div_5_Template, 11, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLoading ? "Loading..." : "Github Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.githubRepos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _spinner_loader_spinner_loader_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerLoaderComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #f33;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3em;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2%;\n}\n\n.top[_ngcontent-%COMP%] {\n  background: #999;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  text-align: center;\n}\n\nh3[_ngcontent-%COMP%], .star-text[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 5%;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  background: #4d4d4d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.language[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  font-size: 2em;\n  margin-right: 10%;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvLWNhcmQtY29udGFpbmVyL3JlcG8tY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQUQ7O0FBR0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFBRDs7QUFHQTtFQUNDLGtCQUFBO0VBQ0EsY0FBQTtBQUFEOztBQUdBO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQUQ7O0FBR0E7RUFDQyxnQkFBQTtBQUFEOztBQUlBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQUREOztBQU1BO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUFIRDs7QUFNQTtFQUNDLG1CQUFBO0VBQ0EsYUFBQTtFQUNDLHVCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNDLFVBQUE7QUFIRDs7QUFPQTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUpEOztBQU9BO0VBQ0MsV0FBQTtBQUpEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvLWNhcmQtY29udGFpbmVyL3JlcG8tY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndyYXBwZXJ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5uby1kYXRhe1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogI2YzMztcclxufVxyXG5cclxuaDEge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVye1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4udG9we1xyXG5cdGJhY2tncm91bmQ6ICM5OTk7XHJcblx0XHJcbn1cclxuXHJcbi50aXRsZXtcclxuXHRmb250LXNpemU6IDEuMjVlbTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuaDMsIC5zdGFyLXRleHR7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmJvdHRvbXtcclxuXHRiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxhbmd1YWdle1xyXG5cdHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcblxyXG4ubGlua3tcclxuXHRjb2xvcjojZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LXNpemU6IDJlbTtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcblx0Y29sb3I6ICNjY2M7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepoCardContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-repo-card-container',
                templateUrl: './repo-card-container.component.html',
                styleUrls: ['./repo-card-container.component.scss']
            }]
    }], function () { return [{ type: _shared_github_info_service__WEBPACK_IMPORTED_MODULE_1__["GithubInfoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/right-sidebar/right-sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/right-sidebar/right-sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function RightSidebarComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add a skill from the form below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightSidebarComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_li_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const skill_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setUpdate(skill_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_li_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const skill_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeSkill(skill_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isUpdating);
} }
function RightSidebarComponent_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightSidebarComponent_input_6_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.formValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.formValue);
} }
class RightSidebarComponent {
    constructor() {
        this.skills = this.getSkills() || [];
        this.canEdit = false;
        this.formValue = '';
        this.isUpdating = false;
        this.isAdding = false;
        this.isNotUpdating = true;
        this.tempSkill = '';
    }
    setEdit() {
        if (!this.canEdit && !this.isUpdating) {
            this.isAdding = true;
        }
        if (this.canEdit && !this.isUpdating) {
            this.addSkill(this.formValue);
        }
        if (this.canEdit && this.isUpdating) {
            this.updateSkill(this.tempSkill);
            this.clearForm();
        }
        this.canEdit = !this.canEdit;
    }
    addSkill(newSkill) {
        if (!newSkill || this.checkSkill())
            return;
        this.skills.push(newSkill.toUpperCase());
        this.clearForm();
        this.saveSkills();
    }
    getSkills() {
        return JSON.parse(localStorage.getItem('skills'));
    }
    getSkill(skillName) {
        return this.getSkills().find(skill => skill === skillName);
    }
    clearForm() {
        this.formValue = '';
        this.tempSkill = '';
        this.isAdding = false;
        this.isUpdating = false;
    }
    setUpdate(currentSkill) {
        if (!this.isUpdating) {
            this.setEdit();
        }
        this.formValue = currentSkill;
        this.isUpdating = true;
        this.tempSkill = currentSkill;
    }
    checkSkill() {
        const existentSkill = this.getSkill(this.formValue.toUpperCase());
        if (!!existentSkill) {
            alert(`Skill '${existentSkill}' already exists`);
            this.clearForm();
            return true;
        }
    }
    updateSkill(currentSkill) {
        if (!currentSkill || this.checkSkill())
            return;
        const index = this.skills.indexOf(this.getSkill(currentSkill));
        this.skills[index] = this.formValue.toUpperCase();
        this.saveSkills();
    }
    removeSkill(skillName) {
        this.skills = this.skills.filter(skill => skill !== skillName);
        this.saveSkills();
    }
    saveSkills() {
        localStorage.setItem('skills', JSON.stringify(this.skills));
    }
    ngOnInit() {
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(); };
RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 11, vars: 5, consts: [["id", "container"], [1, "title"], [4, "ngIf"], [1, "skills"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "save-button", 3, "click"], [3, "disabled", "click"], [3, "ngModel", "ngModelChange"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RightSidebarComponent_p_3_Template, 2, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RightSidebarComponent_li_5_Template, 7, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RightSidebarComponent_input_6_Template, 1, 1, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightSidebarComponent_Template_button_click_9_listener() { return ctx.setEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skills.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.formValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.canEdit === true ? "Save" : "Add Skill", "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["div#container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #ccc;\n  text-decoration: none;\n}\n\nh1.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nul.skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n}\n\nli[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin: 5%;\n  padding: 5%;\n  resize: none;\n  border: 5% solid;\n  background: #333;\n  color: #fff;\n  font-size: 1.15em;\n}\n\nbutton[_ngcontent-%COMP%]:not(.save-button) {\n  width: 40%;\n  padding: 2%;\n  margin: 2%;\n  text-align: center;\n}\n\nbutton.save-button[_ngcontent-%COMP%] {\n  width: 40%;\n  padding: 2%;\n  margin-bottom: 10%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUVBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRDs7QUFFQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjY29udGFpbmVyLHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjY2NjO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEudGl0bGV7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG51bC5za2lsbHN7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubGkge1xyXG5cdHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG5cdG1hcmdpbjogNSU7XHJcblx0cGFkZGluZzogNSU7XHJcblx0cmVzaXplOiBub25lO1xyXG5cdGJvcmRlcjogNSUgc29saWQ7XHJcblx0YmFja2dyb3VuZDogIzMzMztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LXNpemU6IDEuMTVlbTtcclxufVxyXG5cclxuYnV0dG9uOm5vdCguc2F2ZS1idXR0b24pIHtcclxuXHR3aWR0aDogNDAlO1xyXG5cdHBhZGRpbmc6IDIlO1xyXG5cdG1hcmdpbjogMiU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24uc2F2ZS1idXR0b24ge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0cGFkZGluZzogMiU7XHJcblx0bWFyZ2luLWJvdHRvbTogMTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-sidebar',
                templateUrl: './right-sidebar.component.html',
                styleUrls: ['./right-sidebar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/spinner-loader/spinner-loader.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/spinner-loader/spinner-loader.component.ts ***!
  \***********************************************************************/
/*! exports provided: SpinnerLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerLoaderComponent", function() { return SpinnerLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SpinnerLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerLoaderComponent.ɵfac = function SpinnerLoaderComponent_Factory(t) { return new (t || SpinnerLoaderComponent)(); };
SpinnerLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerLoaderComponent, selectors: [["app-spinner-loader"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function SpinnerLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  background: #000000;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n\n.loader[_ngcontent-%COMP%] {\n  color: #000000;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: relative;\n  font-size: 11px;\n  transform: translateZ(0);\n  animation-delay: -0.16s;\n}\n\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  left: -1.5em;\n  animation-delay: -0.32s;\n}\n\n.loader[_ngcontent-%COMP%]:after {\n  left: 1.5em;\n}\n\n@keyframes load1 {\n  0%, 80%, 100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyLWxvYWRlci9zcGlubmVyLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsbUJBQUE7RUFFQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLHdCQUFBO0VBRUEsdUJBQUE7QUFFRjs7QUFBQTs7RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBRUEsdUJBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFVQTtFQUNFO0lBR0UsZUFBQTtJQUNBLFdBQUE7RUFDRjtFQUNBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Bpbm5lci1sb2FkZXIvc3Bpbm5lci1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDEgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBsb2FkMSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogNGVtO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gIG1hcmdpbjogODhweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBjb250ZW50OiAnJztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSB7XHJcbiAgbGVmdDogLTEuNWVtO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuLmxvYWRlcjphZnRlciB7XHJcbiAgbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkMSB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkMSB7XHJcbiAgMCUsXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwO1xyXG4gICAgaGVpZ2h0OiA0ZW07XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIC0yZW07XHJcbiAgICBoZWlnaHQ6IDVlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner-loader',
                templateUrl: './spinner-loader.component.html',
                styleUrls: ['./spinner-loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/github-info.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/github-info.service.ts ***!
  \***********************************************/
/*! exports provided: GithubInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubInfoService", function() { return GithubInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class GithubInfoService {
    constructor(http) {
        this.http = http;
        this.user = 'Shadowind30';
    }
    getUser() {
        return this.http.get(`https://api.github.com/users/${this.user}`);
    }
    getRepos() {
        return this.http.get(`https://api.github.com/users/${this.user}/repos`);
    }
}
GithubInfoService.ɵfac = function GithubInfoService_Factory(t) { return new (t || GithubInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GithubInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GithubInfoService, factory: GithubInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GithubInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\info-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map