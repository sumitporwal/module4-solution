(function(window){
var hello={};
hello.speakWord="Hello";
hello.speak= function (names){
	console.log(hello.speakWord+" "+names);
   }
   window.hello=hello;
})(window);