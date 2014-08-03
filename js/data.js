/*
//sample data
var notes = ko.observableArray([
	{"id":1, "content": "The sky is green today."},
	{"id":2, "content": "It's raining."},
	{"id":3, "content": "I need to call mom."},
	{"id":4, "content": "Learn a new language"},
	{"id":5, "content": "Builds can be made on the phonegap website."},
	{"id":6, "content": "the structure should be css, img, js and html. Keep the libraries in lib folder."}
]);
*/

var notes= ko.observableArray(JSON.parse(localStorage.notes));

$(function(){
	$(".new-note-div").hide();
	ko.applyBindings(notes);
});

function showAddNewNote(){
	$(".new-note-div").show();
}

function saveNote(){
	var content = $("#new-note-text").val();
	notes.unshift({"id":1, "content": content});
	$("#new-note-text").val("");
	$(".new-note-div").hide();
	localStorage.setItem("notes", ko.toJSON(notes));
}

function model(){
	var self = this;
	self.itemArray = ko.observableArray();
	self.newItem = ko.observable(new item());
}