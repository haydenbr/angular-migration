angular.module('app').component('unreviewedTalk', {
    templateUrl: '/home/unreviewed-talk.component.html',
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
//# sourceMappingURL=unreviewed-talk.component.js.map