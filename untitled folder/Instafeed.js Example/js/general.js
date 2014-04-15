/*$(document).ready(function() {
	
	//initial
	$('#content').load('content/home.html');

	//handle menu clicks
	$('nav li a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('content/' + page + '.html');
		return false;
	});

}); */
/*
$(document).ready(function()){
	var interests = ["technology.", "learning.", "coding.", "Disney.", "hackathons.", "food.", "life."];
	var i = 0;
	var textarea = $('#subtitle p');
	 setInterval(function () {
         if (i % 4 === 0) textarea.text(interests[i / 4]);
         else textarea.text(textarea.text() + '.');
         ((i / 4) < interests.length) ? i++ : i = 0;
     }, 500);
});
*/

 $(document).ready(function () {

     var loadList = [
         "Loading the good stuff",
         "Painting Mona Lisa",
         "Just a second longer",
         "Or not",
         "Oh! We forgot to plug it in",
         "That's better",
         "Well",
         "Maybe not",
         "Wondering why",
         "your internet is so slow",
         "Still",
         "Loading"];

     var i = 0;
     var textarea = $('#container #content .intro p');

     setInterval(function () {
         if (i % 4 === 0) textarea.text(loadList[i / 4]);
         else textarea.text(textarea.text() + '.');
         ((i / 4) < loadList.length) ? i++ : i = 0;
     }, 500);

 });




