(function(){
    var app = angular.module('game', []);

    app.createTeam = function(){
        var name = "Team";
        return {
            name: name,
            score: 0
        };
    };

    app.controller('gameController', function(){

    });
})();
