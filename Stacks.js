class Stack {

    constructor() {
    this.items = []
    this.count = 0
}
  // adding elements to the top of stack
push(num){

    this.items[this.count] = num
  // pushing the nums into item and also incremeting the count of num |

    this.count += 1
  console.log(`This is ${num} and this is it's index ${this.count - 1}`)
    return this.count - 1
}
  // return and remove top element in stack 
  // and return undefined if stack is empty 

  pop() {
    if (this.count == 0) return undefined
    let deleteTheItem = this.items[this.count - 1]
    this.count --
    console.log(`${deleteTheItem} was removed`)
    return deleteTheItem
  }

  // peek to see whats on top : no removing 

  peek() {
    // to get top level element since its zero based use -1 
    console.log(`top num is ${this.items[this.count - 1]}`)
    return this.items[this.count - 1]
  
  }
    // check if stack is empty 

    isEmpty(){
      console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty');
      return this.count == 0
    }
  // check the size of stack 

  size(){
    console.log(`this is the size ${this.count}`)
    return this.count
  }
  // print elemtns in stack 

  print(){
    let str = ''
    for (let i = 0; i < this.count; i++){
      str += this.items[i] + ' '
        // to append the this.items
    }
    return str
  }
    // clear the stack 
  clear(){
    this.items = []
    this.count = 0
    console.log('stack is cleared')
    return this.items
  }

  maxNum() {
    let minVal = Math.min(this.items[this.count - 1])
    console.log(`this is min val : ${minVal}`)
    return minVal
  }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

stack.push(400)

stack.peek()
// stack.clear()
stack.pop()
stack.size()
stack.maxNum()
console.log(stack.print())
// stack.clear()
stack.isEmpty()
stack.pop()
stack.size()
console.log(stack.print())