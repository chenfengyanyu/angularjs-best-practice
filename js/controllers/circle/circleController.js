'use strict';

define(['js/app/app'], function(app) {

    var injectParams = ['$location'];
    var CircleController = function($location) {

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

    CircleController.$inject = injectParams;

    app.register.controller('CircleController', CircleController);

});
