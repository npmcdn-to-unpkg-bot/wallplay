var ref;
var http;
var store = {};


function homeSetup() {

	extractFeatureImage();
	extractProjectImage();
	extractSpaceImage();
}

function projectSetup() {

	extractProjectImage();
}

function spacesSetup() {

	extractSpaceImage();
}


function extractFeatureImage(){
	
	var featuredRef = firebase.database().ref('featured/');
	var ul = document.getElementById("featured_links");

	featuredRef.orderByChild("priority").on("child_added", function(snapshot) {
		var links = snapshot.val().link;
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.setAttribute("src" , links);
		li.appendChild(img);
		ul.appendChild(li);
		
		// console.log(links);
	});
}

function extractProjectImage(){
	
	var projectsRef = firebase.database().ref('projects/');
	var ul = document.getElementById("all_link_list");

	projectsRef.orderByChild("priority").on("child_added", function(snapshot) {
		var links = snapshot.val().link;
		var li = document.createElement("li");
		var img = document.createElement("img");
		var imgID = "draggable-img";
		img.setAttribute("src" , links);
		img.setAttribute("id", imgID);
		li.appendChild(img);
		ul.appendChild(li);
		Draggable.create("#draggable-img", {
			bounds: document.getElementById("all_link_list")
		});
		// console.log(img);
		// console.log(links);
	});
}

function extractSpaceImage(){
	
	var featuredRef = firebase.database().ref('spaces/');
	var ul = document.getElementById("all_link_list");

	featuredRef.orderByChild("priority").on("child_added", function(snapshot) {
		var links = snapshot.val().link;
		var li = document.createElement("li");
		var img = document.createElement("img");
		img.setAttribute("src" , links);
		li.appendChild(img);
		ul.appendChild(li);
		
		// console.log(links);
	});
}

// code for Search Queries

/* Is called when user clicks on searchbar. 
Makes searchbar get rid of value of "Search..." */
// function active(){
// 	var searchBar = document.getElementById("search-bar");

// 	if(searchBar.value == "search:"){
// 		searchBar.value = "";
// 		searchBar.placeholder = "search:"
// 		console.log("active searchbar")
// 	}
// }

// function inactive(){
// 	var searchBar = document.getElementById("search-bar");

// 	if(searchBar.value == "search:"){
// 		searchBar.value = "search:";
// 		searchBar.placeholder = "";
// 		console.log("inactive searchbar")

// 	}
// }

// function setup(){
// 	initializeFirebase();
// 	var database = firebase.database();
// 	var featuredRef = database.ref("featured/");
// 	setupIndex(featuredRef);
// }

// /* Takes in the corresponding reference of posts, goes through each initial
// child inside the reference and whenever one is added, creates a copy of the JSON object, and stores it inside a global dictionary 'store' */

// function setupIndex(ref){
// 	ref.on("child_added", function(snapshot){
// 		var doc = {
// 			'tag': snapshot.val().tag,
// 			'url': snapshot.val().url,
//             'priority': snapshot.val().priority
// 		};
//         store[doc.url] = {priority: doc.priority, url: doc.url, tag: doc.tag};
//         console.log(doc.url + " added to index");
// 	});
// }

// /* Is called when the user clicks the 'Go' button. Will take the value
// inside the searchBar, and check the dictionary index for the tag.
// If the typedValue is contained inside the post's tag node, it will 
// display it. Otherwise, it'll return a "not found" message and continue */

// function search(){
// 	var inputHandle = document.getElementById("search-bar");
// 	var typedValue = inputHandle.value;
// 	console.log("typedValue is " + typedValue);

//     for(post in store){
//     	console("for loop tried")
//         if(store[post].tag.indexOf(typedValue) > -1) {
//             displayElement(store, post);
//             console.log(store[post].url + " is the url");
//         }
//         else{
//             console.log("not found");
//         }
//     }
// }

// /* Takes in the dictionary elements, and creates the subsequent
// elements, in order to add the images to the existing page's 
// links page */
// function displayElement(store, post) {

//     var ul = document.getElementById("featured_links");
//     var li = document.createElement("li");
//     var a = document.createElement("a");
//     var img = document.createElement("img");
//     var p = document.createElement("p");
    
// 	a.setAttribute("href", store[post].url); //Makes picture clickable to link that 'links' is
// 	img.setAttribute("src" , store[post].url);
// 	img.setAttribute("id", "item");
//     p.innerHTML = "Tags: " + store[post].tag;
//     p.setAttribute("id", "description");      
    
// 	a.appendChild(img);
// 	li.appendChild(a);
//     li.appendChild(p); //Makes the p element under the image
// 	ul.appendChild(li);
// }