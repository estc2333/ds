// 队列
// FIFO先进先出（排队买票；打印文件）
// 顶部移除（出队），尾部插入新元素（入队）
class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0 // 用来追踪第一个元素 
        this.items = {}
    }

    enqueue(element) { //  尾部插入新元素
        this.items[this.count] = element
        this.count++  // 将元素加入队列后，count 变量加 1
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
}

const myQueue = new Queue()
console.log(myQueue.isEmpty()) // true
console.log('----')
myQueue.enqueue(1)
myQueue.enqueue(2)
console.log(myQueue); // Queue { count: 2, lowestCount: 0, items: { '0': 1, '1': 2 } }
myQueue.dequeue()
console.log(myQueue) // Queue { count: 2, lowestCount: 1, items: { '1': 2 } }
myQueue.dequeue()
console.log(myQueue) // Queue { count: 2, lowestCount: 2, items: {} }

console.log(myQueue.isEmpty())   // true
