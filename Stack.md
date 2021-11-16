栈（stack）是一种遵循后进先出(`LIFO`)原则的有序集合。只允许在**一端(**栈顶**)**进行插入和删除操作

一个 **栈(stack)** 是一种抽象数据类型,用作表示元素的集合,具有两种主要操作:

- **push**, 添加元素到栈的顶端(末尾);
- **pop**, 移除栈最顶端(末尾)的元素.

“后进先出(LIFO = last in, first out)” (餐厅摞盘子)

**用数组模拟栈：利用push pop实现LIFO**

```javaScript
class Stack {
  constructor () {
    this.items = []
  }
// 添加push方法，往栈顶（末尾）加元素
  push (items) {
    this.items.push(items)
  }
// pop方法，移除栈顶（末尾）的元素
  pop () {
    return this.items.pop()
  }
// 查看最后一个元素，index：长度-1
  peek () {
    return this.items[this.length - 1]
  }
// 判断是否为空
  isEmpty () {
    return this.items.length === 0
  }
// 长度 
  size () {
    return this.items.length
  }
// 清空
  clear () {
    return this.items = []
  }
}

```


利用栈实现十进制转二进制

``` javaScript
function decimalToBinary(decNum) {
	const stack = new Stack()
	let binaryString = ''
	while(decNum > 0) {
		stack.push(decNum % 2)
		decNum = Math.floor(decNum / 2)
	}
	while(!stack.isEmpty()) {
		binaryString += stack.pop()
	}
    return  binaryString
}

console.log(decimalToBinary(233)); // 11101001
```