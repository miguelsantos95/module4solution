

(function (window) {
  var names = ["Daniel", "John", "Jenna", "Julio", "Paul", "Frank", "Larry", "Paula", "Laura", "Jason", "Jimenez"];

  
  for (var name in names) {
    


    var firstLetter = names[name].charAt(0);
    firstLetter = firstLetter.toLowerCase();

    
    if (firstLetter == "j") {
      
      byeSpeaker.speak(names[name]);
    } else {
     
      helloSpeaker.speak(names[name]);
    }
  }

})(window);