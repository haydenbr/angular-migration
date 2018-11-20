(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/angularjs-imports.ts":
/*!**********************************!*\
  !*** ./src/angularjs-imports.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/admin */ "./src/app/admin/index.ts");
/* harmony import */ var _app_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/home */ "./src/app/home/index.ts");
/* harmony import */ var _app_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/nav */ "./src/app/nav/index.ts");
/* harmony import */ var _app_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/profile */ "./src/app/profile/index.ts");
/* harmony import */ var _app_security__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/security */ "./src/app/security/index.ts");
/* harmony import */ var _app_sessions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/sessions */ "./src/app/sessions/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/shared */ "./src/app/shared/index.ts");











/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/admin/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/admin/services/index.ts");




/***/ }),

/***/ "./src/app/admin/components/admin-login/admin-login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-login/admin-login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Admin Login</h1>\n\n<form class=\"form\">\n  <div class=\"row\">\n  <div class=\"form-group col-sm-6\">\n    <input type=\"text\" autofocus placeholder=\"Email Address\" ng-model=\"$ctrl.email\" class=\"form-control\">\n  </div>\n  </div>\n  <div class=\"row\">\n  <div class=\"form-group col-sm-6\">\n    <input type=\"password\" placeholder=\"Password\" ng-model=\"$ctrl.password\" class=\"form-control\">\n  </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n    <button class=\"btn btn-primary\" ng-click=\"$ctrl.login()\">Login</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-login/admin-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/admin-login/admin-login.component.ts ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('adminLogin', {
    template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin/components/admin-login/admin-login.component.html"),
    bindings: {},
    controller: function ($location, currentIdentity, auth, toastr) {
        this.loggedIn = currentIdentity.authenticated();
        if (this.loggedIn) {
            $location.path('/home');
        }
        this.login = function () {
            auth
                .login({
                username: this.email,
                password: this.password
            })
                .then(function () {
                $location.path('/home');
            }, function (err) {
                toastr.error(err);
            });
        };
    }
});


/***/ }),

/***/ "./src/app/admin/components/create-users/create-users.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/create-users/create-users.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n\n<h1>Create Users</h1>\n<p>Enter Email Addresses here. One on each line, First and Last Name Pipe Separated</p>\n<textarea name=\"emailAddresses\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\"\n  placeholder=\"Email Addresses\" ng-model=\"$ctrl.namesblob\"></textarea>\n<br>\n<button class=\"btn btn-primary\" ng-click=\"$ctrl.import()\">Create Users</button>\n"

/***/ }),

/***/ "./src/app/admin/components/create-users/create-users.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/create-users/create-users.component.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var CreateUsersComponent = /** @class */ (function () {
    function CreateUsersComponent(parseNames, users, toastr) {
        this.parseNames = parseNames;
        this.users = users;
        this.toastr = toastr;
    }
    CreateUsersComponent.prototype.import = function () {
        var _this = this;
        var people = this.parseNames(this.namesblob);
        people.forEach(function (person) {
            return _this.users
                .createNewUser({
                email: person.email,
                password: 'pass',
                firstName: person.firstName,
                lastName: person.lastName,
            })
                .catch(function () {
                _this.toastr.error('User already exists: ' + person.email);
            });
        });
        this.toastr.success('Users Created!');
    };
    return CreateUsersComponent;
}());
angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('createUsers', {
    template: __webpack_require__(/*! ./create-users.component.html */ "./src/app/admin/components/create-users/create-users.component.html"),
    bindings: {},
    controller: CreateUsersComponent
});


/***/ }),

/***/ "./src/app/admin/components/index.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/components/index.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-login/admin-login.component */ "./src/app/admin/components/admin-login/admin-login.component.ts");
/* harmony import */ var _create_users_create_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-users/create-users.component */ "./src/app/admin/components/create-users/create-users.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results/results.component */ "./src/app/admin/components/results/results.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/admin/components/user-details/user-details.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/components/user-list/user-list.component.ts");







/***/ }),

/***/ "./src/app/admin/components/results/results.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/results/results.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n<h1>Results</h1>\n\n<session-detail-with-votes session=\"session\" ng-repeat=\"session in $ctrl.allSessions\"></session-detail-with-votes>\n"

/***/ }),

/***/ "./src/app/admin/components/results/results.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/results/results.component.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('results', {
    template: __webpack_require__(/*! ./results.component.html */ "./src/app/admin/components/results/results.component.html"),
    bindings: {
        allSessions: '<'
    },
    controller: function () {
        this.allSessions.sort(function (session1, session2) {
            return session2.voteCount - session1.voteCount;
        });
    },
});


/***/ }),

/***/ "./src/app/admin/components/user-details/user-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/user-details/user-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n<div class=\"jumbotron\">\n  <h1>{{$ctrl.user.firstName}} {{$ctrl.user.lastName}}\n    <span class=\"badge\" ng-show=\"$ctrl.user.isAdmin\">Admin</span>\n  </h1>\n  <p>{{$ctrl.user.email}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/user-details/user-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/user-details/user-details.component.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('userDetails', {
    template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/admin/components/user-details/user-details.component.html"),
    bindings: {
        allUsers: '<'
    },
    controller: function ($routeParams) {
        this.user = this.allUsers.find(function (user) { return user.id === parseInt($routeParams.id); });
    },
});


/***/ }),

/***/ "./src/app/admin/components/user-list/user-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/user-list/user-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n<h1>User List</h1>\n\n<a ng-href=\"#/admin/users/{{user.id}}\" zoom-in class=\"btn btn-primary btn-spaced\" ng-repeat=\"user in $ctrl.allUsers\">\n  {{user.firstName}}\n  {{user.lastName}}\n</a>\n"

/***/ }),

/***/ "./src/app/admin/components/user-list/user-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/user-list/user-list.component.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('userList', {
    template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/admin/components/user-list/user-list.component.html"),
    bindings: {
        allUsers: '<'
    },
    controller: function () {
        this.allUsers.sort(function (user1, user2) {
            if (user1.firstName < user2.firstName)
                return -1;
            if (user1.firstName === user2.firstName)
                return 0;
            if (user1.firstName > user2.firstName)
                return 1;
        });
    },
});


/***/ }),

/***/ "./src/app/admin/index.ts":
/*!********************************!*\
  !*** ./src/app/admin/index.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.module */ "./src/app/admin/admin.module.ts");



/***/ }),

/***/ "./src/app/admin/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/services/index.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parseNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parseNames */ "./src/app/admin/services/parseNames.ts");



/***/ }),

/***/ "./src/app/admin/services/parseNames.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/services/parseNames.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').factory('parseNames', function () { return function (blobInput) {
    var lines = blobInput.split(/\r?\n/);
    lines.forEach(function (line, idx) {
        var pieces = line.split('|');
        lines[idx] = {
            email: pieces[0],
            firstName: pieces[1],
            lastName: pieces[2],
        };
    });
    return lines;
}; });


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').config(function ($routeProvider) {
    var routeResolvers = {
        loggedIn: function (auth) { return auth.requireLogin(); },
        waitForAuth: function (auth) { return auth.waitForAuth(); },
        requireAdmin: function (auth) { return auth.requireAdmin(); },
        userSessions: function (sessions, currentIdentity, auth) {
            return auth
                .requireLogin()
                .then(function () { return sessions.getSessionsByUser(currentIdentity.currentUser.id); });
        },
        allSessions: function (sessions, auth) {
            return auth.requireLogin().then(function () { return sessions.getAllSessions(); });
        },
        allUsers: function (users, auth) {
            return auth.requireLogin().then(function () { return users.getAllUsers(); });
        },
    };
    $routeProvider
        .when('/admin/login', {
        template: '<admin-login></admin-login>',
        resolve: {
            currentAuth: routeResolvers.waitForAuth,
        },
    })
        .when('/admin/results', {
        template: '<results all-sessions="$resolve.allSessions"></results>',
        resolve: {
            admin: routeResolvers.requireAdmin,
            allSessions: routeResolvers.allSessions,
        },
    })
        .when('/admin/users/:id', {
        template: '<user-details all-users="$resolve.allUsers"></user-details>',
        resolve: {
            admin: routeResolvers.requireAdmin,
            allUsers: routeResolvers.allUsers,
        },
    })
        .when('/users', {
        template: '<user-list all-users="$resolve.allUsers"></user-list>',
        resolve: {
            admin: routeResolvers.requireAdmin,
            allUsers: routeResolvers.allUsers,
        },
    })
        .when('/admin/createusers', {
        template: '<create-users></create-users>',
        resolve: {
            admin: routeResolvers.requireAdmin,
        },
    })
        .when('/home', {
        template: '<home user-sessions="$resolve.userSessions"></home>',
        resolve: {
            login: routeResolvers.loggedIn,
            userSessions: routeResolvers.userSessions,
        },
    })
        .when('/profile', {
        template: '<profile></profile>',
        resolve: {
            userProfile: routeResolvers.loggedIn,
        },
    })
        .when('/createsession', {
        template: '<create-new-session user-sessions="$resolve.userSessions"></create-new-session>',
        resolve: {
            userSessions: routeResolvers.userSessions,
        },
    })
        .when('/login', {
        template: '<login></login>',
        resolve: {
            currentAuth: routeResolvers.waitForAuth,
        },
    })
        .when('/logout', {
        template: '<logout></logout>',
    })
        .otherwise('/home');
});


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var app = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app', ['ngRoute', 'toastr']);
app.run(function ($rootScope, $location) {
    return $rootScope.$on('$routeChangeError', function (e, next, prev, err) {
        if (err === 'AUTH_REQUIRED') {
            $location.path('/login');
        }
        if (err === 'NOT_AUTHORIZED') {
            $location.path('/home');
        }
    });
});
angular__WEBPACK_IMPORTED_MODULE_0__["element"](document).ready(function () { return angular__WEBPACK_IMPORTED_MODULE_0__["bootstrap"](document.body, ['app']); });


/***/ }),

/***/ "./src/app/home/components/create-new-session/create-new-session.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/home/components/create-new-session/create-new-session.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n\n<h1>Create New Session</h1>\n\n<form class=\"form\">\n  <div class=\"form-group\">\n    Give your session a title\n    <input required type=\"text\" placeholder=\"Title\" ng-model=\"$ctrl.title\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    Enter a length, from 2 minutes to 30 minutes\n    <input required type=\"number\" placeholder=\"Length in Minutes\"\n      ng-model=\"$ctrl.length\" class=\"form-control\" min=\"2\" max=\"30\">\n  </div>\n  <div class=\"form-group\">\n    Describe your session\n    <textarea required name=\"\" id=\"\" cols=\"30\" rows=\"4\"\n      ng-model=\"$ctrl.abstract\" class=\"form-control\"\n      placeholder=\"Abstract\"></textarea>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <button class=\" btn btn-primary btn-sm\" ng-click=\"$ctrl.create()\">Create</button>\n    </div>\n  </div>\n</form>\n\n<h2>Your Other Sessions</h2>\n<div ng-repeat=\"session in $ctrl.userSessions\">\n  <session-detail session=\"session\" initial-collapsed=\"false\"></session-detail>\n</div>\n"

/***/ }),

/***/ "./src/app/home/components/create-new-session/create-new-session.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/home/components/create-new-session/create-new-session.component.ts ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var CreateNewSessionComponent = /** @class */ (function () {
    function CreateNewSessionComponent(currentIdentity, sessions) {
        this.currentIdentity = currentIdentity;
        this.sessions = sessions;
    }
    CreateNewSessionComponent.prototype.create = function () {
        var _this = this;
        var newUserSession = {
            title: this.title,
            length: parseInt(this.length),
            abstract: this.abstract,
            userFirstName: this.currentIdentity.currentUser.firstName,
            userLastName: this.currentIdentity.currentUser.lastName,
            userId: this.currentIdentity.currentUser.id,
        };
        this.sessions.createNewSession(newUserSession).then(function (response) {
            console.log(response);
            _this.userSessions.push(response.data);
        });
    };
    return CreateNewSessionComponent;
}());
angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('createNewSession', {
    template: __webpack_require__(/*! ./create-new-session.component.html */ "./src/app/home/components/create-new-session/create-new-session.component.html"),
    bindings: {
        userSessions: '<',
    },
    controller: CreateNewSessionComponent
});


/***/ }),

/***/ "./src/app/home/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n\n<h2 style=\"margin-top:30px\">Unreviewed Sessions</h2>\n<unreviewed-talk session=\"$ctrl.currentSessionToReview\" vote-no=\"$ctrl.voteNo()\" vote-yes=\"$ctrl.voteYes()\"></unreviewed-talk>\n<hr style=\"margin-top:20px\">\n<h3>Your Sessions\n<a zoom-in class=\"btn btn-primary btn-xs\" href=\"#/createsession\">Create a New Session</a>\n</h3>\n\n<div ng-repeat=\"session in $ctrl.userSessions\">\n  <session-detail session=\"session\" initial-collapsed=\"true\"></session-detail>\n</div>\n"

/***/ }),

/***/ "./src/app/home/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/components/home/home.component.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var HomeComponent = /** @class */ (function () {
    function HomeComponent(currentIdentity, sessions, unreviewedSessionCount) {
        this.currentIdentity = currentIdentity;
        this.sessions = sessions;
        this.unreviewedSessionCount = unreviewedSessionCount;
    }
    HomeComponent.prototype.$onInit = function () {
        this.currentUser = this.currentIdentity.currentUser;
        this.setNextSessionToReview();
    };
    HomeComponent.prototype.setNextSessionToReview = function () {
        var _this = this;
        this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then(function (response) { return _this.currentSessionToReview = response.data; });
    };
    HomeComponent.prototype.voteYes = function () {
        var _this = this;
        this.sessions
            .incrementVote(this.currentSessionToReview.id)
            .then(function () { return _this.sessions.addReviewedSession(_this.currentUser.id, _this.currentSessionToReview.id); })
            .then(function () {
            _this.setNextSessionToReview();
            _this.unreviewedSessionCount.updateUnreviewedSessionCount();
        });
    };
    ;
    HomeComponent.prototype.voteNo = function () {
        var _this = this;
        this.sessions
            .addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
            .then(function () {
            _this.setNextSessionToReview();
            _this.unreviewedSessionCount.updateUnreviewedSessionCount();
        });
    };
    ;
    return HomeComponent;
}());
angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('home', {
    template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/components/home/home.component.html"),
    bindings: {
        userSessions: '<',
    },
    controller: HomeComponent
});


/***/ }),

/***/ "./src/app/home/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/home/components/index.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_new_session_create_new_session_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-new-session/create-new-session.component */ "./src/app/home/components/create-new-session/create-new-session.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/components/home/home.component.ts");
/* harmony import */ var _unreviewed_talk_unreviewed_talk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unreviewed-talk/unreviewed-talk.component */ "./src/app/home/components/unreviewed-talk/unreviewed-talk.component.ts");





/***/ }),

/***/ "./src/app/home/components/unreviewed-talk/unreviewed-talk.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/components/unreviewed-talk/unreviewed-talk.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ng-show=\"!!$ctrl.session\">\n  <div  class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      {{$ctrl.session.title}}\n    </div>\n    <div class=\"panel-body\">\n      <p><strong>{{$ctrl.session.length | talkDuration}}</strong></p>\n      <p>{{$ctrl.session.abstract}}</p>\n    </div>\n  </div>\n\n  <span>Are you interested in this session?</span>\n  <button class=\"btn btn-primary btn-xs\" ng-click=\"$ctrl.yes()\">Yes</button>\n  <button class=\"btn btn-warning btn-xs\" ng-click=\"$ctrl.no()\">No</button>\n</div>\n<div ng-show=\"!$ctrl.session\" class=\"alert alert-success\" role=\"alert\">\n  You have reviewed all the submitted sessions\n</div>\n"

/***/ }),

/***/ "./src/app/home/components/unreviewed-talk/unreviewed-talk.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/components/unreviewed-talk/unreviewed-talk.component.ts ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('unreviewedTalk', {
    template: __webpack_require__(/*! ./unreviewed-talk.component.html */ "./src/app/home/components/unreviewed-talk/unreviewed-talk.component.html"),
    bindings: {
        session: '=',
        voteYes: '&',
        voteNo: '&',
    },
    controller: function () {
        this.yes = function () {
            this.voteYes();
        };
        this.no = function () {
            this.voteNo();
        };
    },
});


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/home/components/index.ts");



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.module */ "./src/app/home/home.module.ts");



/***/ }),

/***/ "./src/app/nav/components/index.ts":
/*!*****************************************!*\
  !*** ./src/app/nav/components/index.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/components/nav/nav.component.ts");



/***/ }),

/***/ "./src/app/nav/components/nav/nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/nav/components/nav/nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"navbar navbar-fixed-top navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\"><a href=\"/\" class=\"navbar-brand\">Lightning Talks</a></div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#/\">Home <span class=\"badge\">{{$ctrl.unreviewedSessionCount.value}}</span> </a></li>\n        <li><a href=\"#/createsession\">Create Session</a></li>\n        <li><a href=\"#/profile\">Profile</a></li>\n        <li><a href=\"#/admin/createusers\" ng-show=\"$ctrl.currentUser.isAdmin\">Create Users</a></li>\n        <li><a href=\"#/admin/results\" ng-show=\"$ctrl.currentUser.isAdmin\">Results</a></li>\n        <li><a href=\"#/users\" ng-show=\"$ctrl.currentUser.isAdmin\">Users</a></li>\n        <li><a href=\"#/logout\">Logout</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-right navbar nav\">\n        <li class=\"navbar-text\">\n          Welcome {{$ctrl.currentUser.firstName}} {{$ctrl.currentUser.lastName}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/components/nav/nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/nav/components/nav/nav.component.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('nav', {
    template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/components/nav/nav.component.html"),
    bindings: {},
    controller: function (currentIdentity, sessions, unreviewedSessionCount) {
        this.currentUser = currentIdentity.currentUser;
        unreviewedSessionCount.updateUnreviewedSessionCount();
        this.unreviewedSessionCount = unreviewedSessionCount;
    },
});


/***/ }),

/***/ "./src/app/nav/index.ts":
/*!******************************!*\
  !*** ./src/app/nav/index.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.module */ "./src/app/nav/nav.module.ts");



/***/ }),

/***/ "./src/app/nav/nav.module.ts":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/nav/components/index.ts");



/***/ }),

/***/ "./src/app/profile/components/index.ts":
/*!*********************************************!*\
  !*** ./src/app/profile/components/index.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/components/profile/profile.component.ts");



/***/ }),

/***/ "./src/app/profile/components/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/profile/components/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav></nav>\n\n<h1>User Profile</h1>\n\n<form class=\"form-inline\">\n  <label for=\"firstName\">First Name</label>\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\"\n    class=\"form-control\" ng-model=\"$ctrl.profile.firstName\">\n\n  <label for=\"lastName\">Last Name</label>\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\"\n    class=\"form-control\" ng-model=\"$ctrl.profile.lastName\">\n\n  <br><br>\n  <button class=\"btn btn-primary btn-sm\" ng-click=\"$ctrl.save()\">Save</button>\n  <button class=\"btn btn-warning btn-sm\" ng-click=\"$ctrl.cancel()\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "./src/app/profile/components/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/profile/components/profile/profile.component.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('profile', {
    template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/components/profile/profile.component.html"),
    bindings: {},
    controller: function ($location, toastr, currentIdentity) {
        this.profile = angular__WEBPACK_IMPORTED_MODULE_0__["copy"](currentIdentity.currentUser);
        this.save = function () {
            currentIdentity.updateUser(this.profile);
            toastr.success('Profile Saved!');
        };
        this.cancel = function () {
            $location.path('/home');
        };
    }
});


/***/ }),

/***/ "./src/app/profile/index.ts":
/*!**********************************!*\
  !*** ./src/app/profile/index.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.module */ "./src/app/profile/profile.module.ts");



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/profile/components/index.ts");



/***/ }),

/***/ "./src/app/security/components/index.ts":
/*!**********************************************!*\
  !*** ./src/app/security/components/index.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/security/components/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/security/components/logout/logout.component.ts");




/***/ }),

/***/ "./src/app/security/components/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/security/components/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Please Login</h1>\n\n<p>Enter your attendee email address</p>\n<form class=\"form\">\n  <div class=\"row\">\n    <div class=\"form-group col-sm-6\">\n      <input type=\"text\" autofocus placeholder=\"Email Address\" ng-model=\"$ctrl.email\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button class=\"btn btn-primary\" ng-click=\"$ctrl.login()\">Login</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/security/components/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/security/components/login/login.component.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

var LoginCtrl = /** @class */ (function () {
    function LoginCtrl($location, currentIdentity, auth, toastr) {
        this.$location = $location;
        this.currentIdentity = currentIdentity;
        this.auth = auth;
        this.toastr = toastr;
    }
    LoginCtrl.prototype.$onInit = function () {
        if (this.currentIdentity.authenticated()) {
            this.$location.path('/home');
        }
    };
    LoginCtrl.prototype.login = function () {
        var _this = this;
        this.auth
            .login({
            username: this.email,
            password: 'pass',
        })
            .then(function () { return _this.$location.path('/home'); })
            .catch(function (err) { return _this.toastr.error(err); });
    };
    ;
    return LoginCtrl;
}());
angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('login', {
    template: __webpack_require__(/*! ./login.component.html */ "./src/app/security/components/login/login.component.html"),
    bindings: {},
    controller: LoginCtrl
});


/***/ }),

/***/ "./src/app/security/components/logout/logout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/security/components/logout/logout.component.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('logout', {
    bindings: {},
    controller: function ($location, auth) {
        auth.logout();
        $location.path('/login');
    },
});


/***/ }),

/***/ "./src/app/security/index.ts":
/*!***********************************!*\
  !*** ./src/app/security/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _security_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.module */ "./src/app/security/security.module.ts");



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/security/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/security/services/index.ts");




/***/ }),

/***/ "./src/app/security/services/auth.ts":
/*!*******************************************!*\
  !*** ./src/app/security/services/auth.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').factory('auth', function ($http, currentIdentity) { return ({
    login: function (credentials) {
        return $http
            .post('http://localhost:8801/api/login', credentials)
            .then(function (response) { return currentIdentity.setUser(response.data.user); })
            .catch(function () {
            throw 'Invalid Credentials';
        });
    },
    logout: function () {
        return $http
            .post('http://localhost:8801/api/logout')
            .then(function () { return currentIdentity.clearUser(); })
            .catch(function () {
            throw 'Error Logging Out';
        });
    },
    waitForAuth: function () {
        return $http.get('http://localhost:8801/api/currentIdentity').then(function (response) {
            if (!!response.data) {
                currentIdentity.setUser(response.data);
            }
            return currentIdentity;
        });
    },
    requireLogin: function () {
        return this.waitForAuth().then(function () { return currentIdentity.authenticated() || Promise.reject('AUTH_REQUIRED'); });
    },
    requireAdmin: function () {
        return this.waitForAuth().then(function () {
            return (currentIdentity.authenticated() &&
                currentIdentity.currentUser.isAdmin) ||
                Promise.reject('AUTH_REQUIRED');
        });
    },
}); });


/***/ }),

/***/ "./src/app/security/services/currentIdentity.ts":
/*!******************************************************!*\
  !*** ./src/app/security/services/currentIdentity.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').factory('currentIdentity', function ($http) {
    return {
        currentUser: null,
        setUser: function (user) {
            this.currentUser = user;
        },
        clearUser: function () {
            this.currentUser = null;
        },
        authenticated: function () {
            return !!this.currentUser;
        },
        updateUser: function (newUserObj) {
            var _this = this;
            return $http
                .put('http://localhost:8801/api/users/' + this.currentUser.id, newUserObj)
                .then(function () {
                _this.currentUser.firstName = newUserObj.firstName;
                _this.currentUser.lastName = newUserObj.lastName;
            })
                .catch(function () {
                throw 'Error Logging Out';
            });
        },
    };
});


/***/ }),

/***/ "./src/app/security/services/index.ts":
/*!********************************************!*\
  !*** ./src/app/security/services/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./src/app/security/services/auth.ts");
/* harmony import */ var _currentIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentIdentity */ "./src/app/security/services/currentIdentity.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./src/app/security/services/users.ts");





/***/ }),

/***/ "./src/app/security/services/users.ts":
/*!********************************************!*\
  !*** ./src/app/security/services/users.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').factory('users', function ($http) { return ({
    createNewUser: function (newUser) { return $http.post('http://localhost:8801/api/users', newUser); },
    getAllUsers: function () { return $http.get('http://localhost:8801/api/users').then(function (response) { return response.data; }); },
}); });


/***/ }),

/***/ "./src/app/sessions/components/index.ts":
/*!**********************************************!*\
  !*** ./src/app/sessions/components/index.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_detail_session_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail/session-detail.component */ "./src/app/sessions/components/session-detail/session-detail.component.ts");
/* harmony import */ var _session_detail_with_votes_session_detail_with_votes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-detail-with-votes/session-detail-with-votes.component */ "./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.ts");




/***/ }),

/***/ "./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<detail-panel collapsed=\"{{$ctrl.initialCollapsed}}\" title=\"{{$ctrl.session.title}}\">\n  <strong>{{$ctrl.session.voteCount}} votes</strong>\n  <p>{{$ctrl.session.length | talkDuration}}</p>\n  <p><small>{{$ctrl.session.abstract}}</small></p>\n</detail-panel>\n"

/***/ }),

/***/ "./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.ts ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('sessionDetailWithVotes', {
    template: __webpack_require__(/*! ./session-detail-with-votes.component.html */ "./src/app/sessions/components/session-detail-with-votes/session-detail-with-votes.component.html"),
    bindings: {
        session: '=',
        initialCollapsed: '@',
    },
    controller: function () { },
});


/***/ }),

/***/ "./src/app/sessions/components/session-detail/session-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/sessions/components/session-detail/session-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<detail-panel collapsed=\"{{$ctrl.initialCollapsed}}\" title=\"{{$ctrl.session.title}}\">\n  <strong>{{$ctrl.session.length | talkDuration}}</strong>\n  <p><small>{{$ctrl.session.abstract}}</small></p>\n</detail-panel>\n"

/***/ }),

/***/ "./src/app/sessions/components/session-detail/session-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/sessions/components/session-detail/session-detail.component.ts ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('sessionDetail', {
    template: __webpack_require__(/*! ./session-detail.component.html */ "./src/app/sessions/components/session-detail/session-detail.component.html"),
    bindings: {
        session: '=',
        initialCollapsed: '@',
    },
    controller: function () { },
});


/***/ }),

/***/ "./src/app/sessions/index.ts":
/*!***********************************!*\
  !*** ./src/app/sessions/index.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sessions_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessions.module */ "./src/app/sessions/sessions.module.ts");



/***/ }),

/***/ "./src/app/sessions/services/index.ts":
/*!********************************************!*\
  !*** ./src/app/sessions/services/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sessions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessions */ "./src/app/sessions/services/sessions.ts");
/* harmony import */ var _unreviewedSessionCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unreviewedSessionCount */ "./src/app/sessions/services/unreviewedSessionCount.ts");




/***/ }),

/***/ "./src/app/sessions/services/sessions.ts":
/*!***********************************************!*\
  !*** ./src/app/sessions/services/sessions.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').factory('sessions', function ($http, $q) { return ({
    getSessionsByUser: function (userId) {
        return $http.get('http://localhost:8801/api/sessions/user/' + userId).then(function (response) { return response.data; });
    },
    getAllSessions: function () {
        return $http.get('http://localhost:8801/api/sessions').then(function (response) { return response.data; });
    },
    createNewSession: function (newSession) { return $http.post('http://localhost:8801/api/sessions', newSession); },
    getNextUnreviewedSession: function (userId) {
        return $http.get('http://localhost:8801/api/users/' + userId + '/randomUnreviewedSession');
    },
    addReviewedSession: function (userId, sessionId) {
        return $http.post('http://localhost:8801/api/users/' + userId + '/reviewSession/' + sessionId);
    },
    incrementVote: function (sessionId) {
        return $http.put('http://localhost:8801/api/sessions/' + sessionId + '/incrementVote/');
    },
    getUnreviewedCount: function (userId) {
        return $http.get('http://localhost:8801/api/users/' + userId + '/unreviewedSessionCount');
    },
}); });


/***/ }),

/***/ "./src/app/sessions/services/unreviewedSessionCount.ts":
/*!*************************************************************!*\
  !*** ./src/app/sessions/services/unreviewedSessionCount.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app')
    .factory('unreviewedSessionCount', function (sessions, currentIdentity) { return ({
    value: 0,
    updateUnreviewedSessionCount: function () {
        var _this = this;
        sessions
            .getUnreviewedCount(currentIdentity.currentUser.id)
            .then(function (response) { return _this.value = response.data.count; });
    },
}); });


/***/ }),

/***/ "./src/app/sessions/sessions.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sessions/sessions.module.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/sessions/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/sessions/services/index.ts");




/***/ }),

/***/ "./src/app/shared/components/detail-panel/detail-panel.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/detail-panel/detail-panel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading pointable\" ng-click=\"$ctrl.collapse()\">\n    <span>{{$ctrl.title}}</span>\n  </div>\n  <div class=\"panel-body\" ng-hide=\"$ctrl.collapsed\" ng-transclude>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/detail-panel/detail-panel.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/detail-panel/detail-panel.component.ts ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').component('detailPanel', {
    transclude: true,
    template: __webpack_require__(/*! ./detail-panel.component.html */ "./src/app/shared/components/detail-panel/detail-panel.component.html"),
    bindings: {
        title: '@',
        initialCollapsed: '@collapsed'
    },
    controller: function () {
        this.collapsed = (this.initialCollapsed === 'true');
        this.collapse = function () {
            this.collapsed = !this.collapsed;
        };
    }
});


/***/ }),

/***/ "./src/app/shared/components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_panel_detail_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-panel/detail-panel.component */ "./src/app/shared/components/detail-panel/detail-panel.component.ts");



/***/ }),

/***/ "./src/app/shared/directives/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/directives/index.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zoom_in_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zoom-in.directive */ "./src/app/shared/directives/zoom-in.directive.ts");



/***/ }),

/***/ "./src/app/shared/directives/zoom-in.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/zoom-in.directive.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app').directive('zoomIn', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.on('mouseenter', function () {
                el[0].style.transform = "scale(1.1,1.1)";
            });
            el.on('mouseleave', function () {
                el[0].style.transform = "scale(1,1)";
            });
        }
    };
});


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talk_duration_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talk-duration.filter */ "./src/app/shared/pipes/talk-duration.filter.ts");



/***/ }),

/***/ "./src/app/shared/pipes/talk-duration.filter.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/talk-duration.filter.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

angular__WEBPACK_IMPORTED_MODULE_0__["module"]('app')
    .filter('talkDuration', function () { return function (duration) {
    return 'Duration: ' + duration + ' minutes';
}; });


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/app/shared/components/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./src/app/shared/directives/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _toastr_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastr.module */ "./src/app/shared/toastr.module.ts");






/***/ }),

/***/ "./src/app/shared/toastr.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/toastr.module.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_1__);


(function () {
    var toastrModule = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('toastr', []);
    toastr__WEBPACK_IMPORTED_MODULE_1__["options"].timeOut = 1000;
    toastrModule.value('toastr', toastr__WEBPACK_IMPORTED_MODULE_1__);
})();


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularjs_imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularjs-imports */ "./src/angularjs-imports.ts");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/vendor.ts");
// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));




/***/ }),

/***/ "./src/vendor.ts":
/*!***********************!*\
  !*** ./src/vendor.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular_route_angular_route_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-route/angular-route.min.js */ "./node_modules/angular-route/angular-route.min.js");
/* harmony import */ var angular_route_angular_route_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_route_angular_route_min_js__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/haydenbraxton/Projects/learning/Pluralsight/angular-migration/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map