const Node = require('./Node')
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front
    }


    enQueue(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.front = this.back = node;
        } else {
            this.back.next = node
            this.back = node
        }
        this.printQueue()
    }
    deQueue() {
        let node =this.front;
        //if queue is not empty
        if (!this.isEmpty()) {
            this.front = this.front.next
        }
      // check if front is null/past the end of the queue
      if(!this.front){
          this.back=null;
      }

      this.printQueue();
      //return the node at front of the queue
      return node;
      

    }
    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        }else{
            let temp = this.front;
            let tempArray = [];
            while (temp) {
                tempArray.push(temp.value)
                temp = temp.next
            }
            console.log(tempArray.join(','))
        }
      
    }
}

module.exports = Queue