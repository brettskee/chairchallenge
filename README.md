# Popsugar Coding Quiz

This coding quiz asked the following question:

Take a second to imagine that you are in a room with 100 chairs arranged in a circle. These chairs are numbered sequentially from One to One Hundred.
At some point in time, the person in chair #1 will be told to leave the room. The person in chair #2 will be skipped, and the person in chair #3 will be told to leave. Next to go is person in chair #6. In other words, 1 person will be skipped initially, and then 2, 3, 4.. and so on. This pattern of skipping will keep going around the circle until there is only one person remaining.. the survivor. Note that the chair is removed when the person leaves the room.

I ended up using a circular linked list as the underlying data structure to hold the "chairs". Because I wanted to do it quickly, I only implemented the methods I would actually need in the data structure rather than all the methods you'd typically have in a Circ Linked List.

Also made it Doubly Linked as this was a better choice in this case.

## Result

With 100 chairs in the room, the survivor should be chair # 11.

## To run it:

> You'll need Node.js

Clone the repo.

From the repo directory, run:
`node app.js`

> Note:
> If you'd like to test the same problem with a different number of chairs, feel free.
> You can simply modify the code in the "main" function in app.js so that the fillRoom() call uses a different value for the 2nd parameter 'numChairs'

Thanks! This was fun!
