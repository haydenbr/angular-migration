(function() {
  let toastrModule = angular.module('toastr', []);

  window['toastr'].options.timeOut = 1000;

  toastrModule.value('toastr', window['toastr']);

}());
