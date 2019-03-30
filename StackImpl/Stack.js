//It only contains top
const Node = require('./Node')
class Stack{
    constructor(){
        this.top = null
    }
    push(value){
      console.log('PUSH')
      let node =new Node(value,this.top)
      this.top=node
      this.print()
     
    }

    pop(){
        let value=null
        if(this.top){
            value=this.top.value
            this.top=this.top.nextNode

        }
        this.print()
        return value
    }

    print(){
        let ptr=this.top

        while(ptr){
            console.log(ptr.value)
            ptr=ptr.nextNode
        }
        console.log('-------------------')
    }
}

module.exports = Stack

