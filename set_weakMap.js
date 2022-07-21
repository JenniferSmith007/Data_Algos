// 
const stack = []
stack.push(1); 
stack.push(2)
console.log(stack.pop())


const queue = [];
queue.push(1);
queue.push(2);
console.log(queue.shift())



const map = new Map();
map.set('test', 123)
map.set(10, 'ten')
// can use anytype unlike objects 

console.log(map.has(10))
map.delete((10));
console.log(map.has(10))

for ([key, value] of map){
    console.log(key, value)
}

map.forEach((value,key)=> {
    console.log(key,value);
})

//  to get a key that is a string or symbol 

//  to keep order of the insertion 
// have data in array in format can pass into contructor 



// to use an object 
// sending object to server json()
// manually need to set prototype chain 




const set = new Set();
set.add(123)
set.add(456)
console.log(set.has(234))

set.forEach(value => {
    console.log(value)
})

// to remove dup from array
const arr= [1,2,3,3,4,5,5]
console.log(Array.from(new Set(arr)));

// keys can only be objects
const weakSet = new WeakSet(); 

(function(){
const obj = {}
    weakSet.add(obj)

})();
console.log(weakSet.has(obj))

class Node {
    constructor(value){
        this.value = value;
    this.next = null; 
    }

}

class LinkedList {
    constructor (){
        this.head = null;
    }



    addStart(value){
        const node = new Node(value);
        node.next = this.head
        
        this.head = node;
        // node.next = tempHead;

        // node.next = current head 
        // head vari = node 
        // not the actual head 


    }


    addEnd(value){
        const node = new Node(value);
        let curr = this.head 



        if(curr === null){
            this.head = node 
            return; 
            // to end the function 
        }
        while(curr !== null && curr.next != null){
            curr = curr.next;

        }
        curr.next = node;
    }
}
const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3)
console.log(list.head.next.next.value)