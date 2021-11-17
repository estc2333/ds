// 数组内部移动元素成本较高
// 链表中的元素在内存中并不是连续放置的
// 链表每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针或链接)组成（火车）
// 链表添加或移除元素的时候不需要移动其他元素
// 但是，数组可以访问任意位置的元素，链表需要从表头开始迭代找

function defaultEquals (a, b) { // 找到特定的元素
    return a === b;
}

 class Node {  // 展示链表元素的助手类
     constructor (element, next) {
         this.element = element
         this.next = next
     }
}

class LinkedList {
    constructor (equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }

    push(element) {
        const node = new Node(element)
        let currrent
        // 非严格相等，undefined == null； 如果head == null，意味着在向链表添加第一个元素
        if(this.head  == null) { 
            // 因此head的指针指向node元素
            this.head = node
        } else {
            // 向一个不为空的链表尾部添加元素
            // 用current记录当前节点
            currrent = this.head
            // 链表最后一个节点的下一个元素始终是 undefined 或 null
            // 循环，直到找到最后一个节点
            while(currrent.next !== null) {
                currrent = currrent.next
            }
            // 让当前(即最后一个)元素的next指向想要添加到链表的节点
            currrent.next = node
        }
        this.count++
    }
}