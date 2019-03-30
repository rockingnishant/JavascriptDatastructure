const Node=require('./Node')
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    add(element){
        let node =new Node(element)
        let temp;

        if(this.head==null){
            this.head=node;
        }else{
            temp=this.head
            while(temp.next){
                temp=temp.next;
            }

            //add node
            temp.next=node;
        }
        this.size++;
    }
    isEmpty(){
        console.log("Inside empty")
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