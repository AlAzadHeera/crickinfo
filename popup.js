$(function(){
	$("#playMusic").click(function(){
			console.log("clicked");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {todo: "playMusic"})
			})
	})
	
		$("#pauseMusic").click(function(){
			console.log("clicked");
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {todo: "pauseMusic"})
			})
	})
})