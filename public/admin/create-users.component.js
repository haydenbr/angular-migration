var CreateUsersComponent = (function () {
    function CreateUsersComponent(nameParser, users, toastr) {
        this.nameParser = nameParser;
        this.users = users;
        this.toastr = toastr;
    }
    CreateUsersComponent.prototype.import = function () {
        var _this = this;
        var people = this.nameParser.parseNames(this.namesblob);
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
angular.module('app').component('createUsers', {
    templateUrl: '/admin/create-users.component.html',
    bindings: {},
    controller: CreateUsersComponent
});
//# sourceMappingURL=create-users.component.js.map