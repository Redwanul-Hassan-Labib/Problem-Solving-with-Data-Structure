//TODO create a stack


export default class Stack{
    constructor(){
        this.item = []
    }

    push(value){
        this.item.push(value)
    }
    pop(){
        if (this.isEmpty()) {
            return undefined
        }
       return this.item.pop()
    }

    peek(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[this.item.length - 1]
    }


    isEmpty(){
        return this.item.length === 0;
    }

    print(){
        console.log(this.item.slice().reverse().join(" -> "));
    }
}

const stack = new Stack()



stack.push(10)
stack.push(20)
stack.push(30)

stack.print()


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

