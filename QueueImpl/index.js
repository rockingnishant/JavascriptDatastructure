const Queue=require('./Queue')
let q=new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(4);
q.deQueue();
q.deQueue();
q.deQueue();
q.deQueue();

