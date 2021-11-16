// 双端队列
// 允许同时从前端和后端添加和移除元素的特殊队列。  普通队列前端移除，后端添加
// 双端队列同时遵守了先进先出和后进先出原则，可以说它是把队列和栈相结合的一种数据结构。

class Deque {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    size() {
        return this.count - this.lowestCount
      }

    isEmpty() {
        return this.size() === 0
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    addFront(element) {
        if(this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) { // 队列不为空，且已经有元素从被前端删除，此时lowestCount > 0
            this.lowestCount--  // 将lowestCount 减1，把新元素放在这个位置，就是最前端的位置
            this.items[this.lowestCount] = element
        } else { // 队列不为空，且没有元素从被前端删除，此时lowestCount = 0
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]  // ？需要将所有元素 后移一位，来空出第一个位置(把原本元素this.items[i] 重新赋值为它的前一位的值，因此是元素后移)
              }
              this.count++
              this.lowestCount = 0
              // 不能丢失已有的值，需要从最后一位开始迭代所有的值，并为元素赋上索引值减 1 位置的值
              // 在所有的元素都完成移动后，第一位将是空闲状态，这样就可以用需要添加的新元素来覆盖它了
              this.items[0] = element 
        }
    }
}


const myDeque = new Deque()
console.log(myDeque.isEmpty())  // true

myDeque.addBack(6)
console.log(myDeque.isEmpty()) // false
console.log(myDeque) // Deque { count: 1, lowestCount: 0, items: { '0': 6 } }
myDeque.addBack(7)
console.log(myDeque) // Deque { count: 2, lowestCount: 0, items: { '0': 6, '1': 7 } }
myDeque.addFront(5)
console.log(myDeque) // Deque { count: 3, lowestCount: 0, items: { '0': 5, '1': 6, '2': 7 } }

