'use strict';

app.controller('MusicCtrl', function($scope){

SC.initialize({
  client_id: 'a885a23b699ae618ef1432d2686ac385',
  redirect_uri: 'http://namnguyen.io/callback.html'
});

$scope.getTrack = function(trackUrl){
	SC.oEmbed(trackUrl, 
			{color: 'ff0066'},  
			document.getElementById('soundcloud-player'));
}

});