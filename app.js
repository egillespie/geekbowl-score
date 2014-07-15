(function(){
    var app = angular.module('app', []);

    app.controller('gameController', function($scope){
        $scope.teamOne = {
            name: 'Team One',
            score: 0
        };

        $scope.teamTwo = {
            name: 'Team Two',
            score: 0
        };

        $scope.changeTeamOneName = function(){
            $scope.teamOne.name = prompt('New Team Name', $scope.teamOne.name);
        };

        $scope.changeTeamTwoName = function(){
            $scope.teamTwo.name = prompt('New Team Name', $scope.teamTwo.name);
        };

        var interval;
        var buzzer = new Audio("buzzer.mp3");


        var createTimer = function(seconds){
            clearInterval(interval);

            var markup = "&nbsp;";
            for (var i = 0; i < (seconds * 2) - 1; i++) {
                markup += "<div class='cell'></div>";
            }
            markup += "&nbsp;";
            $(".counter").html(markup);

            interval = setInterval(function countdown(){
                if ($(".cell").length) {
                    $(".cell:first").remove();
                    $(".cell:last").remove();
                    if (!$(".cell").length) {
                        buzzer.play();
                    }
                } else {
                    clearInterval(interval);
                }
            }, 900);
        };

        var clearTimer = function(){
            clearInterval(interval);
            $(".counter").html("&nbsp;&nbsp;");
        };

        $scope.handleKeypress = function($event){
            switch ($event.keyCode) {
                case 49: // '1'
                    $scope.teamOne.score++;
                    break;
                case 33: // '!'
                    $scope.teamOne.score--;
                    break;
                case 50: // '2'
                    $scope.teamTwo.score++;
                    break;
                case 64: // '@'
                    $scope.teamTwo.score--;
                    break;
                case 48: // '0'
                    createTimer(10);
                    break;
                case 53: // '5'
                    createTimer(5);
                    break;
                case 45: // '-'
                    clearTimer();
                    break;
            }
        };
    });
})();
