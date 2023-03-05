
// implement a queue with two stacks

export class MyQueue {
    
    constructor() {

    }

    public stack1:number[] = []
    public stack2:number[] = []

    push(x: number): void {
        this.stack1.push(x)
    }

    pop(): number {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop() as number)
            }
        }
        return this.stack2.pop() as number
    }

    peek(): number {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop() as number)
            }
        }
        return this.stack2[this.stack2.length - 1]
    }

    empty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0
    }
}