// CircularLinkedList.js
// Brett Levenson, 5/14/15

// Circular Linked List (singly linked)



var Node = {
	value: null,
	next: null,
	prev: null
};

function CircularLinkedList() {
	// We need to have a head (to track the first node)
	// a count: to track if we have 0 or 1 nodes
	// a tail: to track the last node in the list
	// a current: we don't need this, but I want it so I can remember the last location in the list

	this.current = null; // tracks the current "location" in the list
	this.head = null; // tracks the 1st node in the list (where the circular closing occurs)
	this.tail = null;
	this.count = 0;
}

CircularLinkedList.prototype.append = function(value) {
	// Prepare a new node to insert
	var node = Object.create(Node);
	node.value = value;

	if(this.count === 0) {
		// count is 0, so this list is new, which requires some special considerations
		this.head = this.tail = this.current = node;
	}

	// Now we have to add a node in between head and tail and link everything up:
	// 5 operations to link everything up on insert
	// 1. Set new node prev to tail
	// 2. Set new node next to head
	// 3. Set tail next to new node
	// 4. Set head prev to new node
	// 5. Set tail to new node

	node.prev = this.tail;
	node.next = this.head;
	this.tail.next = this.head.prev = node;
	this.tail = node;

	// incr the count
	this.count++;
};

// These two functions move us around the list
CircularLinkedList.prototype.toNext = function() {
	this.current = this.current.next;

	
};

CircularLinkedList.prototype.toPrev = function() {
	this.current = this.current.prev;

	
};

// Remove a node from the list
CircularLinkedList.prototype.removeCurrent = function() {
	// We can remove the current node by setting next of the previous node to next of the current node
	// and prev of the next node to previous of the current node

	// SPECIAL CASE: If we're dealing with the tail, or the head
	// Something is wrong here. Set some breakpoints and debug or just use an if/elif/else
	if(this.current === this.head) {
	    // console.log("The head.");
		this.head = this.current.next;
	} else if (this.current === this.tail) {
	    // console.log("The tail");
		this.tail = this.current.prev;
	}


	this.current.prev.next = this.current.next;
	this.current.next.prev = this.current.prev;
	this.current = this.current.next; // Set new current node to be the node after the removed node


	this.count--; // Reduce the list count
};  


module.exports = CircularLinkedList; // Export this functionality when require is called on this file.





