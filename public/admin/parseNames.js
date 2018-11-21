var NameParserService = (function () {
    function NameParserService() {
    }
    NameParserService.prototype.parseNames = function (blobInput) {
        var lines = blobInput.split(/\r?\n/);
        return lines.map(function (line) {
            var pieces = line.split('|');
            return {
                email: pieces[0],
                firstName: pieces[1],
                lastName: pieces[2],
            };
        });
    };
    return NameParserService;
}());
angular.module('app').service('nameParser', NameParserService);
//# sourceMappingURL=parseNames.js.map