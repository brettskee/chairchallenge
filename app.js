// app.js
// Brett Levenson, 5/14/15

// Run code for the following problem
// Imaging a room with 100 chairs in a circle. The first chair is numbered 1, then 2 and so on. Chair 100 is next to chair 1.
// Now imagine we start removing chairs from the room in the following pattern, first the first, then the third, then the 6th and so on.
// This process continues until the survivor is left. Which of the original chairs will that be?


// Require our DoublyLinked Circular List as the underlying data structure

var CircularLinkedList = require('./CircularLinkedList.js');

// Went a little bit further than necessary here I suppose. 
// I made it so you can modify the number of chairs to fill the room with
// so it will perform the same operation on a number other than 100 chairs.
var fillRoom = function(room, numChairs) {
	// This fills the room with 100 chairs, each with the right number
	for(var i = 0; i < numChairs; i++) {
		room.append(i+1);
	}
}

var removeChairs = function(room) {
	// Now we start by removing the first chair (the head in the linked list) with an iterative value of 0
	// Then for each successive move, we increment the number of chairs to skip by 1

	var skipCount = 0; // this will determine the number of chairs to skip before removal

	while(room.count > 1) {
		for(var i = 0; i < skipCount; i++) {
			 room.toNext();
		}
		room.removeCurrent();
		skipCount++; // increment the skipcount by 1
	}

	// Once we are here there is only 1 chair left so we know who the survivor is
	return room.current.value;
}


var main = function() {
	// This function calls the others

	// Set up our room
	var room = new CircularLinkedList();
	fillRoom(room, 100);

	var survivor = removeChairs(room); // Function removes chairs and returns the surviving "chair" (don't really need to do this since 'room' is a reference type)
	console.log("The survivor is in chair number:", survivor);

}


// Now run main to activate the program
main();

