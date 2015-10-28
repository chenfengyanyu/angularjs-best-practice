'use strict';

define(['js/app/app'], function(app) {

    var injectParams = ['$location'];
    var ChatController = function($location) {

        var vm = this;
        vm.str = 'chat!!!';

        vm.showMsg = function() {
            //alert(vm.str);
        };

        function init(){
          vm.showMsg();
        }

        init();
    };

    ChatController.$inject = injectParams;

    app.register.controller('ChatController', ChatController);

});
