'use strict';

define(['js/app/app'], function(app) {

    var injectParams = ['$location'];
    var DocsController = function($location) {

        var vm = this;
        vm.str = 'Hello World!';

        vm.showMsg = function() {
            //alert(vm.str);
        };

        function init(){
          vm.showMsg();
        }

        init();
    };

    DocsController.$inject = injectParams;

    app.register.controller('DocsController', DocsController);

});
