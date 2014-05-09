<?
/*
   _______   ______  __  _____  _______________  ________  ___   __  ___
  / __/ _ | / __/\ \/ / /  _/ |/ / __/_  __/ _ |/ ___/ _ \/ _ | /  |/  /
 / _// __ |_\ \   \  / _/ //    /\ \  / / / __ / (_ / , _/ __ |/ /|_/ / 
/___/_/ |_/___/   /_/ /___/_/|_/___/ /_/ /_/ |_\___/_/|_/_/ |_/_/  /_/  
                                                                        
*/
?>

<html>
<head><title>jQuery Instagram REAL EASY display!</title>
   
<style>

body {
	margin-bottom: 200px;
}

/*this is where jQuery appends the instagram json response*/
#instagram {
	float: left;
	padding: 20px;
}

/*around each image*/
.instagram-wrap {
	float: left;
	position: relative;
	background: white;
	padding: 5px;
	margin: 15px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.instagram-wrap .likes {
	height: 16px;
	position: absolute;
	left: 10px;
	top: 10px;
	padding: 0 5px 0 22px;
	line-height: 16px;
	border: 1px solid #ddd;
	background: white url('fav.png') no-repeat 2px 0;
	opacity: 0.6;
}

/*does what it says*/
.clearfix {
	 clear:both;
}

/*wrapper for more pics*/
#showMore{
	background: #202628;
	margin: 20px 15px 28px;
	text-align: center;
}

/*button for more pics if available*/
#more {
padding: 10px;
margin: 20px;
color: #CCC;
font-size: 20px;
line-height: 22px;
display: block;
font-family: "brandon_bold",Arial,Helvetica,sans-serif;
}

</style>



<div id="page">
<div id="main_content_wrapper" class="clearfix">
<div id="content_wrapper_box">




<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"></script>
<style>
#main-navigation #navigation li.has-drop-down.trend{display: none;}

/******  hide the footer for easier dev *********/
#sticky-footer-wrap{/* display: none; */ }

/******  hide the footer flyouts for easier dev *********/
.sticky-flyout, #Footer_Flyout_1, #Footer_Flyout_2{ /* display: none !important; */ }
</style>

<!-- !DELIVERY: OVERAL STARTS 		--> 



<script type="text/javascript" >
////////////////////////////////
//
// CONFIGURATION VARIABLES http://stuffthatspins.com/2014/03/11/display-instagram-hashtag-and-user-picture-stream-really-easy-with-jquery-and-json/
//
////////////////////////////////

var access_token = "32001032.5b9e1e6.619a2bd583d44c49a4188244af0cf8af"; //*** YOU NEED TO GET YOUR OWN ACCESS TOKEN FROM INSTAGRAM
//http://instagram.com/developer/authentication/
//http://dmolsen.com/2013/04/05/generating-access-tokens-for-instagram/

var resolution = "thumbnail"; // resolution: low_resolution, thumbnail, standard_resolution
var user_id = "32001032"; //userid
var hashtag = "baby"; // #hashtag
var last_url = "";

//HASHTAG URL - USE THIS URL FOR HASHTAG PICS
//var start_url = "https://api.instagram.com/v1/tags/"+hashtag+"/media/recent/?access_token="+access_token;
//USER URL - USE THIS URL FOR USER PICS
var start_url =  "https://api.instagram.com/v1/tags/"+hashtag+"/media/recent/?access_token="+access_token;

//https://api.instagram.com/v1/tags/racehungry/media/recent?access_token=1836…6303057241113856435_1395676110362&_=1395676128688&max_tag_id=1343521624608

function loadEmUp(next_url){

	//console.log("loadEmUp url:" + next_url);
	url = next_url;
	
	$(function() {
	    $.ajax({
		    	type: "GET",
		        dataType: "jsonp",
		        cache: false,
		        url: url ,
		        success: function(data) {
		        
		  		next_url = data.pagination.next_url;
		  		//count = data.data.length;
		  		//three rows of four
		  		count = 100; 
		
		  		//uncommment to see da codez
		        //console.log("count: " + count );
		        //console.log("next_url: " + next_url );
				//console.log("data: " + JSON.stringify(data) );
				
	            for (var i = 0; i < count; i++) {
						if (typeof data.data[i] !== 'undefined' ) {
						//console.log("id: " + data.data[i].id);
							$("#instagram").append("<div class='instagram-wrap' id='pic-"+ data.data[i].id +"' ><a target='_blank' href='" + data.data[i].link +"'><span class='likes'>"+data.data[i].likes.count +"</span><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>"
						);  
						}  
	      		}     
		  			  	
		  		console.log("next_url: " + next_url);
		  		$("#showMore").hide();
		  		if (typeof next_url === 'undefined' || next_url.length < 10 ) {
			  		console.log("NO MORE");
			  		$("#showMore").hide();
			  		$( "#more" ).attr( "next_url", "");
		  		}
		  		
		  		
	      		else {
			        //set button value
			        console.log("displaying more");
			        $("#showMore").show();
			        $( "#more" ).attr( "next_url", next_url);
			        last_url = next_url;
		      		
	      		}
	        }
	    });
	});
}

	


//CALL THE SCRIPT TO START...
$( document ).ready(function() {
	
	//APPEND LOAD MORE BUTTON TO THE BODY...

	//start your engines
	loadEmUp(start_url);

	
});

</script>



</head>

<body>

<div>
	<h1>INSTAGRAM - Yeh Boy! </h1>
	<!-- instagram pics -->
	<div id="instagram"></div>
	<div class='clearfix'></div>
	<!-- button -->

</div>


</body>
</html>

