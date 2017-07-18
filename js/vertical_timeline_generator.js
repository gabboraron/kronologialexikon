"use strict"
var nrOfEvents = 0;
var currentEvent = 0;
var eventsList = [];
var event_main_html = "";
	var event_main_html1 = '<header itemscope itemtype="timeline"> <h1>'; // here goes the main title
	var event_main_html1_1 = '</h1> </header> <section id="cd-timeline" class="cd-container">';
	var event_main_html2 = '</section> <!-- cd-timeline -->'; 

/*navButtonShowOrHide();
// hide the "prev event" button for the default & if the vent is the first event of the timeline
function navButtonShowOrHide() {
	if (currentEvent == 0) {
		document.getElementById('Prevslide').style.display = "none";
	} else {
		document.getElementById('Prevslide').style.display = "block";
	}
}*/

//show the current event / all events
showCurrentAndAllEvents();

	function showCurrentAndAllEvents() {
		document.getElementById('current_event_and_all').innerHTML = currentEvent + '/' + nrOfEvents;
	}

// the html files for the timeline

	//timeline frame
		var timeline_frame1 = '	<header> <h1>Responsive Vertical Timeline</h1> </header> <section id="cd-timeline" class="cd-container">';
		var timeline_frame2 = ' </section> <!-- cd-timeline -->';

	//event frame
		var timeline_event_frame1 = '<div class="cd-timeline-block"> <div class="cd-timeline-img cd-location"> <img src="img/cd-icon-location.svg" alt="Location"> </div> <!-- cd-timeline-img --> <div class="cd-timeline-content"><h2>'; //here goes the title of event
		var timeline_event_frame2 = ' </h2>'; //title ends, after this comes the media if it is
		var timeline_event_frame3 = ' <p>'; //description of event comes here
		var timeline_event_frame4 = ' </p><span class="cd-date">'; //events date/main title comes here
		var timeline_event_frame5 = ' </span> </div> <!-- cd-timeline-content --> </div> <!-- cd-timeline-block -->'; //event ends here

//creating an event
	var notificationAboutElement= "";

	/* *** */
	//main title
	var timelineTitle = " ";
	document.getElementById("main_title_set").addEventListener("click", function(){
    	timelineTitle = document.getElementById('main_title').value;
    	
    	notificationAboutElement = "This title set: " + timelineTitle;
    	notifyMe(notificationAboutElement);
	});


	/* *** */
	//media
	var eventDate = "";
	document.getElementById("time_interval_set").addEventListener("click", function(){
    	eventDate = document.getElementById('from_time_interval').value;
    	
    	notificationAboutElement = "This Date/Event added: " + eventDate;
    	notifyMe(notificationAboutElement);
	});

	var eventTitle = "";
	document.getElementById("title_set").addEventListener("click", function(){
    	eventTitle = document.getElementById('title').value;

    	notificationAboutElement = "This title added: " + eventTitle;
    	notifyMe(notificationAboutElement);
	});

	var eventPicture = "";
	document.getElementById("picture_set").addEventListener("click", function(){
    	var pictureLink = "";
    	var pictureDescription = "";
    	var pictureHtml1 = '<img src="'; //pictures link
    	var pictureHtml2 = '" alt="'; //pictures description
    	var pictureHtml3 = '">'; //end of pic
    	
    	pictureLink = document.getElementById('picture').value;
    	pictureDescription  = document.getElementById('picture_describe').value;

    	eventPicture = pictureHtml1 + pictureLink + pictureHtml2 + pictureDescription + pictureHtml3;

    	notificationAboutElement = "This picture added: " + pictureLink;
    	notifyMe(notificationAboutElement);
    	notificationAboutElement = "with this alt: " + pictureDescription;
    	notifyMe(notificationAboutElement);
	});

	var eventMap = "";
	document.getElementById("map_set").addEventListener("click", function(){
    	var mapLink = "";    	
    	var mapHtml1 = '<div class="responsive-embed">'; //responsive embed format
    	var mapHtml2 = '</div>'; //end of map
    	
    	mapLink = document.getElementById('map').value;

    	eventMap = mapHtml1 + mapLink + mapHtml2;

    	notificationAboutElement = "This map added: " + mapLink;
    	notifyMe(notificationAboutElement);
	});

	var eventVideo = "";
	document.getElementById("video_set").addEventListener("click", function(){
    	var videoLink = "";
    	var videoHtml1 = '<div class="responsive-embed">'; //video embed format
    	var videoHtml2 = '</div>'; //end of video
    	
    	videoLink = document.getElementById('video').value;

    	eventVideo = videoHtml1 + videoLink + videoHtml2;

    	notificationAboutElement = "This video added: " + videoLink;
    	notifyMe(notificationAboutElement);
	});

	var eventWebsite = "";
	document.getElementById("website_set").addEventListener("click", function(){
    	var websiteLink = "";
    	var websiteHtml1 = '<div class="responsive-embed"><iframe width="device-width" height="450" src="'; //here comes the website's link
    	var websiteHtml2 = '" frameborder="0" allowfullscreen></iframe></div>'; //end of iframe
    	
    	websiteLink = document.getElementById('website').value;

    	eventWebsite = websiteHtml1 + websiteLink + websiteHtml2;

    	notificationAboutElement = "This website added: " + websiteLink;
    	notifyMe(notificationAboutElement);
	});

	var eventPrezi = "";
	document.getElementById("prezi_set").addEventListener("click", function(){
    	var preziLink = "";
    	var preziHtml1 = '<div class="responsive-embed">'; //responsive embed format 
    	var preziHtml2 = '</div>'; //end of map
    	
    	preziLink = document.getElementById('prezi').value;

    	eventPrezi = preziHtml1 + preziLink + preziHtml2;

    	notificationAboutElement = "This prezi added: " + preziLink;
    	notifyMe(notificationAboutElement);
	});

	var eventshareableFile = "";
	document.getElementById("shareable_set").addEventListener("click", function(){
    	var shareableLink = "";
    	var shareHtml1 = '<div class="responsive-embed">'; //responsive embed format 
    	var shareHtml2 = '</div>'; //end of map
    	
    	shareableLink = document.getElementById('shareable').value;

    	eventshareableFile = shareHtml1 + shareableLink + shareHtml2;

    	notificationAboutElement = "This shareable thing: " + shareableLink;
    	notifyMe(notificationAboutElement);
	});

	/* *** */
	//text

	var eventText = "";
	document.getElementById("text_set").addEventListener("click", function(){
    	var text = "";
    	
    	text = document.getElementById('text').value;

    	eventText = text;

    	notificationAboutElement = "This text added: " + text;
    	notifyMe(notificationAboutElement);
	});

	/* *** */
	//quote

	var eventQuote = "";
	document.getElementById("quote_set").addEventListener("click", function(){
    	var quote = "";
    	var quoteHtml1 = '<p class="quote"><br>'; //quote 
    	var quoteHtml2 = '<br></p>'; //end of quote
    	quote = document.getElementById('quote').value;

    	eventQuote = quoteHtml1 + quote + quoteHtml2;

    	notificationAboutElement = "This quote added: " + quote;
    	notifyMe(notificationAboutElement);
	});

	/* *** */
	//link

	var eventLink = "";
	document.getElementById("link_set").addEventListener("click", function(){
    	var link = "";
    	var linkTitle = "";
    	var linkHtml1 = '<a href="'; //link 
    	var linkHtml2 = '">';
    	var linkHtml3 = '</a>'; //end of link
    	link = document.getElementById('link').value;
    	linkTitle = document.getElementById('titleoflink').value;

    	eventLink = linkHtml1 + link + linkHtml2 + linkTitle + linkHtml3;

    	notificationAboutElement = "This link added: " + link;
    	notifyMe(notificationAboutElement);
	});

	/* *** */
	//adding notification when something added to timeline
	var doYouWantNotificains = -1;
	// request permission on page load
	document.addEventListener('DOMContentLoaded', function () {
	  if (!Notification) {
	    alert('Desktop notifications not available in your browser. Try Chromium.'); 
	    return;
	  }

	  if (Notification.permission !== "granted")
	    Notification.requestPermission();
	});

	function notifyMe(notificationAboutElement) {
	  if (Notification.permission !== "granted")
	    Notification.requestPermission();
	  else {
	    var notification = new Notification('Timeline creator:', {
	      icon: '../css/ikonok/kicsi-aranyos.jpg',
	      body: notificationAboutElement,
	    });

	    notification.onclick = function () {
	      window.open("http://stackoverflow.com/a/13328397/1269037");      
	    };

	  }

	}

//save & show the event
	document.getElementById("save_the_event").addEventListener("click", function(){
		eventsList[currentEvent] = "";
		var event_html = timeline_event_frame1 + eventTitle + timeline_event_frame2 + eventPicture + eventMap + eventVideo + eventWebsite + eventPrezi + eventshareableFile + timeline_event_frame3 + eventText + eventQuote + eventLink + timeline_event_frame4 + eventDate + timeline_event_frame5;
		eventsList[currentEvent] = event_html; 

		createTheTimelineHtml();
		clearTheForm(); 
		//navButtonShowOrHide();
		showCurrentAndAllEvents();

		/*SAVE FINALY*/
		if (eventsList.length == 0) {
			document.getElementById("final_save_ok").style.display = 'none';
			document.getElementById("final_save_NOTok").style.display = 'block';
		} else {
			document.getElementById("final_save_ok").style.display = 'block';
			document.getElementById("final_save_NOTok").style.display = 'none';
		}
	});



function clearTheForm() {
	eventTitle = "";
	eventPicture = "";
	eventMap = "";
	eventVideo = "";
	eventWebsite = "";
	eventPrezi = "";
	eventshareableFile = "";
	eventText = "";
	eventQuote = "";
	eventDate = "";
	eventLink = "";
}

//add new event
	document.getElementById("new_event").addEventListener("click", function(){
		if (currentEvent == nrOfEvents) {
			nrOfEvents = nrOfEvents + 1;
			currentEvent = currentEvent + 1;	
		} else {
			nrOfEvents = nrOfEvents + 1;
			currentEvent = nrOfEvents;
		}
		showCurrentAndAllEvents();
	});	


//go back if is clicked
	document.getElementById('Prevslide').addEventListener("click", function(){
		if (currentEvent == 0) {
			notifyMe("There is no more events!");
		} else {
			currentEvent = currentEvent - 1;
			showCurrentAndAllEvents();
		}
	});

//go to the next if is clicked
	document.getElementById('Nextslide').addEventListener("click", function(){
		if (currentEvent == nrOfEvents) {
			notifyMe("There is no more events!");
		} else {
			currentEvent = currentEvent + 1;
			showCurrentAndAllEvents();
		}
	});

//delete event if is clicked
	document.getElementById('delete_the_event').addEventListener("click", function(){
		var restOfTheEvents = []
		var j = 0;
		if (nrOfEvents == 0) {
			notifyMe("There is no more events! You can't delete them!");
		} else {
			for (var i = currentEvent + 1; i <= eventsList.length - 1; i++) {
				restOfTheEvents[j] = eventsList[i];
				j = j+1;
			}
			var jj = 0;
			eventsList.length = eventsList.length -1;
			for (var i = currentEvent; i <= eventsList.length - 1; i++) {
				eventsList[i] = restOfTheEvents[jj];
				jj = jj + 1;
			}

			if (currentEvent > 0) {
				nrOfEvents = nrOfEvents - 1;
				currentEvent = currentEvent -1;				
			} else {
				nrOfEvents = nrOfEvents - 1;
				currentEvent = 0;				
			}

			showCurrentAndAllEvents();
			createTheTimelineHtml();
			clearTheForm();
		}
	});


/*
function createTheTimelineHtml() {
	var eventsOfTheTimeline = "";
	for (var i = eventsList.length - 1; i >= 0; i--) {
		eventsOfTheTimeline += eventsList[i];
	}
	event_main_html = event_main_html1 + timelineTitle + event_main_html1_1 + eventsOfTheTimeline + event_main_html2;
	showTheTimeline();
}*/

/*Finaly save*/
var cover="";
var author = "";
var keywords = [];
var source = []; 
document.getElementById('save_finaly').addEventListener("click", function(){
	cover = document.getElementById('cover').value;
	author = document.getElementById('author').value;
	keywords = document.getElementById('keywords').value.split(",");
	source =  document.getElementById('source').value.split(",");
	
	notificationAboutElement = "Finaly saved this! Now you are done!";
    notifyMe(notificationAboutElement);
});	
/**/

function createTheTimelineHtml() {
	var eventsOfTheTimeline = "";
	for (var i = 0; i <= eventsList.length-1; i++) {
		eventsOfTheTimeline += eventsList[i];
	}
	event_main_html = event_main_html1 + timelineTitle + event_main_html1_1 + eventsOfTheTimeline + event_main_html2;
	showTheTimeline();
}

function showTheTimeline() {
	document.getElementById('content').innerHTML = event_main_html;
	document.getElementById('large_content').innerHTML = event_main_html;
}

//console.info("vertical timeline js ok");