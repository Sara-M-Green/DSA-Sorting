class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }

    }

    insertBefore(newItem, nextItem) {

        if (!this.head) {
          return null;
        }
    
        if (this.head.value === nextItem) {
          this.insertFirst(newItem);
        }
    
        let currNode = this.head;
        let previousNode = this.head;
    
        while ((currNode !== null) && (currNode.value !== nextItem)) {
          previousNode = currNode;
          currNode = currNode.next;
        }
    
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        let newNode = new _Node(newItem, previousNode.next);
        previousNode.next = newNode;
    }

    insertAfter(newItem, prevItem) {
        if (!this.head) {
          return null;
        }
        let currNode = this.head;
    
        while ((currNode !== null) && (currNode.value !== prevItem)) {
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log('Item not found');
          return;
        }
        if (prevItem.next === null) {
          this.insertLast(newItem);
          return;
        }
        let newNode = new _Node(newItem, currNode.next);
        currNode.next = newNode;
    }

    insertAt(item, index) {
        if (this.head === null) {
            this.insertFirst(item)
            return
        }

        let currNode = this.head
        let currIndex = 1

        while (currIndex < index - 1) {
            currNode = currNode.next
            currIndex++
        }

        const tempNode = new _Node(item, currNode.next)

        currNode.next = tempNode

    }



    find(item) {
        // start at the head
        let currNode = this.head

        // If the list is empty
        if (!this.head) {
            return null
        }

        // Check for the item
        while (currNode.value !== item) {
            // Return null if it's the end of the list and item is not
            // on list
            if (currNode.next === null) {
                return null
            }

            else {
                // otherwise, keep looking
                currNode = currNode.next
            }

            // Found it
            return currNode 
        }
    }

    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null
        }

        // If the node to be removed is the head, make the 
        // next node head

        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // Start at the head
        let currNode = this.head
        // keep track of previous
        let previousNode = this.head

        while((currNode !== null) && (currNode.value !== item)) {
            // save the previous node
            previousNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Item not found')
        }

        previousNode.next = currNode.next

    }
}

function display(llist) {
    let currNode = llist.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
}

module.exports = LinkedList
module.exports = {display}