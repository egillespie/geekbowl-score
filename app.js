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
            }
        };
    });
})();
