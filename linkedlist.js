/* ----------------------------------------A class to crate the nodes ---------------------------------------- */

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

/* ----------------------------------------A class to create the linked list ---------------------------------------- */
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    };


    /* ----------------------------------------Methods ---------------------------------------- */

    // Add to end Method
    addToEnd(data) {
        // Create a new node with the given value
        const newNode = new Node(data, null);
        // Ask if the list is empty or not
        if (!this.head) {
            // If the list is empty, then put the created node to the head
            this.head = newNode;
        }
        else {
            let current = this.head;
            // A loop to obtain the last element by asking if the next value is a null
            while (current.next) {
                // If not, the current values will be the next ones
                current = current.next;
            }
            // And the next values will be new nodes with the given values, every time the method is called.
            current.next = newNode;
        }
        // Finally increment the size of the list
        this.size += 1;
    }


    // Add to Middle Method
    addToMiddle(data) {

        let internSize = 0;
        let middleFlag = Math.floor(this.size / 2);
        const newNode = new Node(data, null);
        let current = this.head;
        let previous;



        if (this.size === 0 || this.size === 1) {
            console.log("There is no more than 2 nodes to put this one in the middle of them");
        }
        else {

            while (internSize < middleFlag) {
                internSize += 1;
                previous = current;
                current = current.next;
            }

            newNode.next = current;
            previous.next = newNode;
        }
        this.size += 1;
    }


    // Add to start Method
    addToStart(data) {
        const newNode = new Node(data, null);
        let previous = null;
        if (!this.head) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size += 1;

    }



    // Remove from end Method
    removeEnd() {
        let previous = null;
        let current = this.head;

        if (!this.head) {
            console.log("There is nothing to be removed");
        }
        else {
            while (current != null) {
                if (current.next === null) {
                    if (this.size === 1) {
                        this.head = null;
                        this.size -= 1;
                    } else {
                        previous.next = null;
                        this.size -= 1;
                    }
                }
                previous = current;
                current = current.next;
            }
        }
    }


    // Remove from middle Method
    removeMiddle() {
        let internSize = 0;
        let middleFlag = Math.floor(this.size / 2) - 1;
        let current = this.head;
        let previous;



        if (!this.head) {
            console.log("There is nothing to be removed");
        }
        else {

            while (internSize <= middleFlag) {
                internSize += 1;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size -= 1;
    }


    // Remove from start Method
    removeStart() {
        let previous = null;
        if (!this.head) {
            console.log("There is nothing to be removed");
            this.head = null;
        }
        else {
            let current = this.head.next;
            this.head = current;
            this.size -= 1;

        }

    }


    // Sort Method
    sortList() {
        let aux;
        let i = this.size;
        while (i > 0) {
            let current = this.head;
            while (current.next != null) {
                if (current.data < current.next.data) {
                    aux = current.data;
                    current.data = current.next.data;
                    current.next.data = aux;
                }
                current = current.next;
            }
            i -= 1;
        }
    }

    // Reverse the list Method
    reverseList() {
        let previous = null;
        let next = null;
        let current = this.head;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }


}

module.exports.Linkedlist = Linkedlist;