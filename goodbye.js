(function(window){
var goodbye={};
goodbye.speakWord="Goodbye";
goodbye.speak= function (names){
	console.log(goodbye.speakWord+" "+names);
   }
   window.goodbye=goodbye;
})(window);