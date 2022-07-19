// first we created our nodes that will hold the data 

class Node {
    constructor(data){
      this.data = data
      this.next = null; 
    }
    setNextNode(node){
    if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
    
    getNextNode(){
      return this.next;
    }
  }
  //  creating the linked list class 
  class LinkedList {
    constructor(){
      this.head = null;
    }
  //  created a constructor to set the head for the linked list as null
    addHead(data){
      let newHead = new Node(data)
      let currentHead = this.head;
      //  declaring variables created a new node that will be the head of the list and a current node to point to this.head 
     this.head = newHead
      // setting head to fill in the variable for new head
      if (currentHead) {
        this.head.setNextNode(currentHead) 
      }
      // if there is value in current head then set the head to have a next node pointer to current head 
    }
    
    addTail(data){
      let tail = this.head; 
      if (!tail) {
        this.head = new Node(data)
        //  if there is no data to be a tail create a new node of data set it to the head of the list 
        
      } else {
        // if there is data then 
        while (tail.getNextNode()) {
          // while tail has data to get next node 
          tail = tail.getNextNode()
        }
        // set the tail to get next node 
        tail = tail.setNextNode(new Node(data))
        //  setting the tail as the next node of data pushing through to a new node 
      }
      
      
    }
    removeHead(){
      let removedHeadNode = this.head; 
      //  allocating new variable to hold the head 
      if (!removedHeadNode) return 
    //  if there is no node to remove just return 
      this.head = removedHeadNode.getNextNode()
      //  setting the head to equal the next node on the list 
      return removedHeadNode.data
      //  return the data that was removed 
    }
  
    
    printList(){
      let currentNodeInList = this.head;
      let output = '|start==>  '
      while(currentNodeInList){
        output += currentNodeInList.data + ' ';
        currentNodeInList = currentNodeInList.getNextNode();
      }
      output += ' <==End|'
      console.log(output)
    }
  
   
    
  
        
    
    
  }
  
  const people = new LinkedList();
  
  people.addHead('Maxxx')
  people.addTail('Bob')
  people.addTail('Timm')
  people.addHead('Angel')
  people.addTail('Jenn')
  people.printList();
  // people.removeTail();
  // people.printList();
  // swapNodes(people,'Maxxxxx','Jennnnn')
  
  
   // Swapping Elements in Linked List 
  // to swap the two nodes, first find them 
  // keep track of the node that precedes them (prev node) and then reset pointers 
  // 1) Establish a function called swapNodes that takes in the list, and data1 and data2
  // 2) set up 4 variables:
  //   a) set node1 and node2 to equal the head of the list
  //   b) set node1Prev and node2Prev to equal null for now
  // 
  // 3) Create a while loop that runs while (node1 !== null )
  //4) While in the loop check if node1.data equals data1
  // 5) if there's a match we will break (this breaks out of the loop)
  // 6) if there's no match then we reset the node1Prev to equal node1 and then move node1 to the next node (node1 = node1.getNextNode())
  // 7) we then repeat the above steps for data2/node2
  // 8) outside of the while loops 
  // 9) check for edge cases 
    // 10) check to see if (node1 == null || node2 == null){
    // if its null console.log(explain that a match was not found)
    //   then return
    // }
    // if (data1 == data2){
    // return 
    // }
    // if (data1 === data2) {
  //   console.log('Elements are the same - no swap needed.');
  //   return;
  // }
    // 11) set node1Prev and Node2 prev next node starting with prev1
    // 12) if (node1Prev === null) if it is { : the head node has to have null before it 
    // set the list.head = node2; 
    // else {
    // node1Prev.setNextNode(node2)
    // }
    // }
    // 13) repeate the same steps for node2 prev node 
    // 14) updating the nodes next pointers -> next steps below vv
    // YOU MUST create var  = to hold node1.getNextNode()
    // node1.setNextNode(node2.getNextNode())
    // node2.setNextNode(var)
    
    //  time and space: space - o(1) time o(n)
  
  const swapNodes = (list,data1,data2) =>{
    console.log(`We will be swapping ${data1} with ${data2}.`)
    
    let node1 = list.head;
    let node2 = list.head;
    let node1Prev = null;
    let node2Prev = null;
  
    if(data1 === data2){
      console.log("They're the same!!");
      return;
    }
  
    while(node1 !== null){
      if(node1.data === data1){
        break;
      }
      node1Prev = node1;
      node1 = node1.getNextNode();
    }
    
    while(node2 !== null){
      if(node2.data === data2){
        break;
      }
      node2Prev = node2;
      node2 = node2.getNextNode();
    }
  
    if(node1 === null || node2 === null){
      console.log("Error, swap is not possible");
      return;
    }
  
    if(node1Prev === null){
      list.head = node2;
    } else{
      node1Prev.setNextNode(node2);
    }
    
    if(node2Prev === null){
      list.head = node1;
    } else{
      node2Prev.setNextNode(node1);
    }
     
    let temp = node1.getNextNode();
    node1.setNextNode(node2.getNextNode());
    node2.setNextNode(temp);
  }
  
  swapNodes(people,'Maxxx','Jenn')
  people.printList()
  
  
  
  const nthLastNode = (list, n) => {
    let nthLastNodePointer = null;
    let tailPointer = list.head;
    let count = 0;
    while (tailPointer) {
      tailPointer = tailPointer.getNextNode();
      if (count >= n) {
        if (nthLastNodePointer === null) {
          nthLastNodePointer = list.head;
        }
        nthLastNodePointer = nthLastNodePointer.getNextNode();
      }
      count++
    }
    return nthLastNodePointer;
  };
  
  // Test your function yourself:
  console.log(nthLastNode(people, 3));
  
  
  const findMiddle = (linkedList) =>{
    let fast = linkedList.head;
    let slow = linkedList.head;
  
    while(fast !== null){
      fast = fast.getNextNode();
      
      if(fast){
        fast = fast.getNextNode();
        slow = slow.getNextNode();
      }
    }
    // while(fast !== null && fast.getNextNode() !== null){
     
    //     fast = fast.getNextNode();
    //     slow = slow.getNextNode();
    // }
  
    return slow;
  }
  
  console.log(findMiddle(people));
  
  
  
  //Some common interview question 
  
  
  // find a cycle : if the linked list nodes connect to another node  
  // use two pointers and see if the nodes meet aka LINK for a cycle if so return true else return flase 
  
  // const hasCycle = list => {
  //   let fast = head; 
  //   let slow = head; 
  //   while( fast && fast.next){
  //     fast = fast.next.next
  //     slow = slow.next
  
  //     if (fast === slow) return true;
  //   }
  //   return false;
  // }
  
  