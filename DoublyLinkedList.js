// <- 1 <==> 2 <==> 3 -> 


//  when adding to list keep track of and set the node's previous pointer && update the tail if necessary. 

// adding to head 
// need to check if there is a current head and if there isnt then the list is empty, make new node both head and tail o flist are set to null 
// if list is not empty then 
// 1) set currenthead.prev = newHead 
// 2) set newHead.next = currentHead
// 3)  set new head.prev == null 

// adding to the tail 
// two cases: if (list == null ){ make a new node head and tail and set the pointers to null
// else if not empty then 
// 1) set currentTail.next = new tail 
// 2) set newTail .prev == currentTail
//  3) set newTail.next = null;

// removing from head and tail 
// head: updating pointer set newHead.prev == null
// update the property of the list 
// if (head === tail ) remove tail as well 
// tail: updating pointer and the end of the list 
// set newtail.next = null and update property of list 


// removing middle of list 
//  set removednode.prev.next = nextnode 
// set the removednode.next = prev node 

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.previous = null;
    }
    //  we need two pointers for doubly linked list 
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class')
      }
    }
  
    setPreviousNode(node) {
      if (node instanceof Node || node === null) {
        this.previous = node;
      } else {
        throw new Error('Previous node must be a member of the Node class')
      }
    }
  
    getNextNode() {
      return this.next;
    }
  
    getPreviousNode() {
      return this.previous;
    }
  }
  
  
  //  creating the class for our doublyLinkedList 
  
  class Doubly {
    constructor(){
      this.head = null; 
      this.tail = null; 
    }
    //  creating the head of the list and the tail of the list 
  
    //  adding to the head of the doubly linked list 
    // currentHead = this.head && newhead = new Node(data)
    // 1) check to see if there is a current head to the list 
   
    // 2) if the list is not empty (currentHead)
    // 3) set currentHead.setPreviousNode(pass the new node)
    // 4) set the new head to current head (newHead.setNewNode(currentHead))
    // 5) update the head prop (this .head = newHead)
    // 6) case: if (!this.Tail) list is empty 
    //  update tail prop to be new head (this.tail = newHead)
    addHead(data) {
      let newHead = new Node(data);
      let currentHead = this.head;
      if(currentHead){
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
      }
      this.head = newHead;
      if(!this.tail){
        this.tail = newHead;
      }
    }
  
    // creating the tail of the list 
    // variables newTail = new Node(data) && currentTail = this.tail;
    // 1) check to see if current tail in list 
    // 2) if the list isnt empty (currentTail)
    // 3) set currentTail next node to new tail (currentTail.setnextNode(newTail))
    // 4) newTail.setPreviousNode(currentTail)
    // 5) update out tail property (this.tail = newTail)
    //  6) case: if (!this.head) : meaning list was empty 
    // 7) update head prop to be new tail (this.head = newTail)
  
    addTail(data){
      let newTail = new Node(data);
      let currentTail = this.tail;
      if(currentTail){
        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
      }
      this.tail = newTail;
      if(!this.head){
        this.head = newTail;
      }
    }
  // removing the head from the doubly linked list 
    // variable const removedHead = this.head; 
    // 1) check to see if there is a current head to the list if (!removedHead) return
    // 2) if there is something in the list update the list head to be current head next node (this.head = removedHead.getNextNode())
    // 3) if list had more than one element if(this.head)
    // 4) this.head.setPreviousNode(null) : setting the heads previous node 
    // 5) if (removedHead === this.head) : only one element call on the removeTail function to make changes to the tail of the list 
    // 6) return removedHead.data
    removeHead(){
      let removedHead = this.head;
      if(!removedHead){
        return;
      }
      this.head = removedHead.getNextNode();
      if(this.head){
        this.head.setPreviousNode(null);
      }
      if(removedHead === this.tail){
        this.removeTail();
      }
      return removedHead.data;
    }
  
    // removing the tail from the doubly linked list 
    // var: removedTail = this.tail 
    // 1) check to see if currentTail is in the list if (!removedTail) return : list is empty 
    // 2) update the list tail to be prev node (this.tail = removedTail.getPreviousNode())
    // 3) list had more than one element set tail next node to nul 
    // if(this.tail) this.tail.setNextNode(null)
    // 4) if removedTail was the only element in the list then call on removeHead()
    // if (removedTail === this.head) this.removeHead()
    // return removedTail.data
   removeTail() {
     let removedTail = this.tail;
     if(!removedTail){
       return;
     }
     this.tail = removedTail.getPreviousNode();
     if(this.tail){
       this.tail.setNextNode(null);
     }
     if(removedTail === this.head){
       this.removeHead();
     }
     return removedTail.data;
   }
    
  // removing a node by value in the list 
    // var: let nodeToRemove; currentNode = this.head; 
    // 3) while (currentNode !== null) : something is in the current node 
    // 4) if there is a matching currentNode.data to equal the data
    //  5)  nodeToRemove = currentNode
    //  6) break; 
    // 7) out of the if currentNode = currentNode.getNextNode() : current node = to currentNode.next node
    // 8) if there is no nodeToRemove then return null;
    // 9) actually remove the node -> next steps vv
    // 10) if (nodeToRemove == this.head) this.removeHead() 
    // 11) else if ( nodeToremove === this.tail ) this.removeTail()
    // 12) else  {
    //       const nextNode = nodeToRemove.getNextNode() : next node == next node of node to remove
    //     const previousNode = nodeToRemove.getPreviousNode() prev node == prev node of node to remove 
       // nextNode.setPreviousNode(previousNode) next node prev node = previous node 
       // previousNode.setNextNode(nextNode) prev node next node = next node 
         // }
    // 14) return nodeToRemove
    
    removeByValue(data){
      let nodeToRemove;
      let currentNode = this.head;
      while(currentNode !== null){
        if(currentNode.data === data){
          nodeToRemove = currentNode;
          break;
        }
        currentNode = currentNode.getNextNode();
      }
        if(!nodeToRemove){
          return null;
        }
        if(nodeToRemove === this.head){
          this.removeHead();
        } else if(nodeToRemove === this.tail){
          this.removeTail();
        }else{
          const nextNode = nodeToRemove.getNextNode();
          const previousNode = nodeToRemove.getPreviousNode();
          nextNode.setPreviousNode(previousNode);
          previousNode.setPreviousNode(nextNode);
        }
        return nodeToRemove;
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
  
  
  
  
  const person = new Doubly();
  person.printList() 
  person.addHead('Jenn')
  person.addHead('Angel')
  person.addHead('Max')
  person.addTail('Bob')
  person.printList() 
    person.removeHead()
  person.printList() 
    person.removeTail()
  person.printList() 
  person.removeByValue('Jenn')
  person.printList() 