const Node=require('./Node')
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    add(element){
        let node =new Node(element)
        let current;

        if(this.head==null){
            this.head=node;
        }else{
            current=this.head
            while(current.next){
                current=current.next;
            }

            //add node
            current.next=node;
        }
        this.size++;
    }
    isEmpty(){
        return this.size===0;
    }
    sizeOfList(){
        console.log(this.size)
    }

    printList(){
        let curr=this.head;
        let str=""
        while(curr){
            str+=curr.element + " ";
            curr=curr.next
        }
        console.log(str);
    }
}
module.exports=LinkedList