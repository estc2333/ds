# 数组：使用场景
> **场景**：

数组存储一系列**同一种数据类型**的值。虽然在 JavaScript 里，也可以在数组中保存不同类型
的值，但最好避免这么做。

比如同类型平均气温，适合存放在数组中。

>**添加元素**

1. 通过长度和索引, 添加末位元素

```
let numbers = [0,1,2]
numbers[numbers.length] = 3;
```

2. push()

```
numbers.push(4,5,6)    
```

3. splice()

```
numbers.splice(numbers.length, 0,7,8) 
```

4. unshift()

```
添加到开头
numbers.unshift(-1)     // 返回长度
```

>**删除元素**

1. pop()   返回被删除的元素
2. shift()  返回被删除的元素
3. splice(startIndex, deleteCount, insertItems)    返回**由被删除的元素组成的一个数组**
4. 应该始终使用splice、pop 或 shift方法来删除数组元素，避免用delete() // delete直接置为undefined

>**二维数组**

可以用嵌套的for循环进行遍历
```
function printMatrix(myMatrix) {
      for (let i = 0; i < myMatrix.length; i++) {
        for (let j = 0; j < myMatrix[i].length; j++) {
          console.log(myMatrix[i][j]);
        } 
      }
    }
```