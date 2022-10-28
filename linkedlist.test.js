let modulo = require('./linkedlist');


describe("Testing a linked list", () => {

    it("Add a value at the end", () => {
        // Create an object
        let linkedlist = new modulo.Linkedlist();

        // Create the nodes to be equal
        const node = {
            data: 9,
            next: null
        };
        const node2 = {
            data: 9,
            next: {
                data: 8,
                next: null
            }
        };
        const node3 = {
            data: 9,
            next: {
                data: 8,
                next: {
                    data: 7,
                    next: null
                }
            }
        };

        // Test the add to the end method
        linkedlist.addToEnd(9)
        expect(linkedlist.head).toEqual(node)
        linkedlist.addToEnd(8)
        expect(linkedlist.head).toEqual(node2)
        linkedlist.addToEnd(7)
        expect(linkedlist.head).toEqual(node3)

        // Aditional expects
        expect(linkedlist.addToEnd).toBeDefined()
    })

    it("Remove a value from the end", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can remove them later
        linkedlist.addToEnd(6)
        linkedlist.addToEnd(7)
        linkedlist.addToEnd(8)

        // Create the nodes to be equal
        const node = {
            data: 6,
            next: null
        };
        const node2 = {
            data: 6,
            next: {
                data: 7,
                next: null
            }
        };
        // Test the remove from the end method
        linkedlist.removeEnd()
        expect(linkedlist.head).toEqual(node2)
        linkedlist.removeEnd()
        expect(linkedlist.head).toEqual(node)
        linkedlist.removeEnd()
        expect(linkedlist.head).toBe(null)

        // Aditional expects
        expect(linkedlist.removeEnd).toBeDefined()
    })

    it("Add a value at the beginning", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Create the nodes to be equal
        const node = {
            data: 1,
            next: null
        };
        const node2 = {
            data: 2,
            next: {
                data: 1,
                next: null
            }
        };
        const node3 = {
            data: 3,
            next: {
                data: 2,
                next: {
                    data: 1,
                    next: null
                }
            }
        };


        // Test the add to Start method
        linkedlist.addToStart(1)
        expect(linkedlist.head).toEqual(node)
        linkedlist.addToStart(2)
        expect(linkedlist.head).toEqual(node2)
        linkedlist.addToStart(3)
        expect(linkedlist.head).toEqual(node3)

        // Aditional expects
        expect(linkedlist.addToStart).toBeDefined()
    })


    it("Remove from the beginning", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can remove them later
        linkedlist.addToEnd(6)
        linkedlist.addToEnd(7)
        linkedlist.addToEnd(8)

        // Create the nodes to be equal
        const node = {
            data: 8,
            next: null
        };
        const node2 = {
            data: 7,
            next: {
                data: 8,
                next: null
            }
        };
        // Test the remove from the end method
        linkedlist.removeStart()
        expect(linkedlist.head).toEqual(node2)
        linkedlist.removeStart()
        expect(linkedlist.head).toEqual(node)
        linkedlist.removeStart()
        expect(linkedlist.head).toBe(null)

        // Aditional expects
        expect(linkedlist.removeStart).toBeDefined()
    })


    it("Add a value at the middle", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can put a new node between them later
        linkedlist.addToEnd("start")
        linkedlist.addToEnd("end")

        // Create the nodes to be equal
        const node = {
            data: "start",
            next: {
                data: "middle",
                next: {
                    data: "end",
                    next: null
                }
            }
        };
        const node2 = {
            data: "start",
            next: {
                data: "middle2",
                next: {
                    data: "middle",
                    next: {
                        data: "end",
                        next: null
                    }
                }
            }
        };
        const node3 = {
            data: "start",
            next: {
                data: "middle2",
                next: {
                    data: "middle3",
                    next: {
                        data: "middle",
                        next: {
                            data: "end",
                            next: null
                        }
                    }
                }
            }
        };

        // Test the add to middle method
        linkedlist.addToMiddle("middle")
        expect(linkedlist.head).toEqual(node)
        linkedlist.addToMiddle("middle2")
        expect(linkedlist.head).toEqual(node2)
        linkedlist.addToMiddle("middle3")
        expect(linkedlist.head).toEqual(node3)

        // Aditional expects
        expect(linkedlist.addToMiddle).toBeDefined()

    })


    it("Remove from the middle", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can remove some of them from the middle of the list
        linkedlist.addToEnd("start")
        linkedlist.addToEnd("end")
        linkedlist.addToMiddle("middle")
        linkedlist.addToMiddle("middle2")
        linkedlist.addToMiddle("middle3")

        // Create the nodes to be equal
        const nodo = {
            data: "start",
            next: {
                data: "end",
                next: null
            }
        };
        const nodo2 = {
            data: "start",
            next: {
                data: "middle2",
                next: {
                    data: "end",
                    next: null
                }
            }
        };
        const nodo3 = {
            data: "start",
            next: {
                data: "middle2",
                next: {
                    data: "middle",
                    next: {
                        data: "end",
                        next: null
                    }
                }
            }
        };


        // Test the remove from the middle method
        linkedlist.removeMiddle()
        expect(linkedlist.head).toEqual(nodo3)
        linkedlist.removeMiddle()
        expect(linkedlist.head).toEqual(nodo2)
        linkedlist.removeMiddle()
        expect(linkedlist.head).toEqual(nodo)

        // Aditional expects
        expect(linkedlist.removeMiddle).toBeDefined()
    })


    it("Sort the list", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can remove some of them from the middle of the list
        linkedlist.addToEnd(5)
        linkedlist.addToEnd(10)
        linkedlist.addToEnd(7)
        linkedlist.addToEnd(8)

        // Create the nodes to be equal
        const nodo = {
            data: 10,
            next: {
                data: 8,
                next: {
                    data: 7,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            }
        };

        // Test the sort list method
        linkedlist.sortList()
        expect(linkedlist.head).toEqual(nodo)
        // Aditional expects
        expect(linkedlist.sortList).toBeDefined()
    })


    it("Reverse the list", () => {
        // Create an oject
        let linkedlist = new modulo.Linkedlist();

        // Add nodes to the list so we can remove some of them from the middle of the list
        linkedlist.addToEnd(5)
        linkedlist.addToEnd(8)
        linkedlist.addToEnd(3)
        linkedlist.addToEnd(9)

        /*                  The initiallist must be this way: 5 --> 8 --> 3 --> 9                        */
        /*      After applying the reverse method, it must be this way: 9 --> 3 --> 8 --> 5               */


        // Create the nodes to be equal
        const nodo = {
            data: 9,
            next: {
                data: 3,
                next: {
                    data: 8,
                    next: {
                        data: 5,
                        next: null
                    }
                }
            }
        };

        /* Order the list chech the reverse */


        // Test the reverse (bigger to lower)list method
        linkedlist.reverseList()
        expect(linkedlist.head).toEqual(nodo)

        /*-------------- Order the list chech the reverse ------------- */
        let linkedlistSorted = new modulo.Linkedlist();

        // Add nodes to the list so we can remove some of them from the middle of the list
        linkedlistSorted.addToEnd(5)
        linkedlistSorted.addToEnd(8)
        linkedlistSorted.addToEnd(3)
        linkedlistSorted.addToEnd(9)
        // This will sort the list from bigger to lower
        linkedlistSorted.sortList()

        const nodeSortedReversed = {
            data: 3,
            next: {
                data: 5,
                next: {
                    data: 8,
                    next: {
                        data: 9,
                        next: null
                    }
                }
            }

        };

        // Test the reverse method and validates with an already sorted list
        linkedlistSorted.reverseList()
        expect(linkedlistSorted.head).toEqual(nodeSortedReversed)

        // Aditional expects
        expect(linkedlist.reverseList).toBeDefined()

    })

})