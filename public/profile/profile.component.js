angular.module('app').component('profile', {
    templateUrl: '/profile/profile.component.html',
    bindings: {},
    controller: function ($location, toastr, currentIdentity) {
        this.profile = angular.copy(currentIdentity.currentUser);
        this.save = function () {
            currentIdentity.updateUser(this.profile);
            toastr.success('Profile Saved!');
        };
        this.cancel = function () {
            $location.path('/home');
        };
    }
});
//# sourceMappingURL=profile.component.js.map