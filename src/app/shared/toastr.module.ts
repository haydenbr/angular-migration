import * as angular from 'angular';
import * as toastr from 'toastr';

(() => {
  let toastrModule = angular.module('toastr', []);
  toastr.options.timeOut = 1000;
  toastrModule.value('toastr', toastr);
})();
