// @@iterator  对象
// ES2015 还为 Array 类增加了一个@@iterator 属性，需要通过 Symbol.iterator 来访问。

// 数组的 **iterator** 方法，默认情况下，与 [values()]函数返回值相同。 //MDN


    var arr = ['a', 'b', 'c']
    var iArr = arr[Symbol.iterator]()
    for(let letter of iArr) {
        console.log(letter) 
    }
// a
// b
// c

// 或者不断调用迭代器的 next 方法，就能依次得到数组中的值
// 数组中的所有值都迭代完之后，iterator.next().value  会返回 undefined
console.log(iArr.next().value) // undefined 因为之前已经迭代完了

// 数组的entries，keys和values方法

// values() 方法返回一个新的可迭代数组对象，该对象包含数组每个索引的值
let a = [9,8,7]
const value = a.values()
console.log(value)  // Object [Array Iterator] {}
for(let v of value) {
    console.log(v)   // 9  8  7
}


// entries 方法返回包含键值对的迭代器
const en = a.entries()
console.log(en)  // Object [Array Iterator] {}
for(let e of en) {
    console.log(e)  // [ 0, 9 ] [ 1, 8 ] [ 2, 7 ]
}

// Array.from 方法从一个类似数组或可迭代对象创建一个新的数组实例。
console.log(Array.from('foo')) //   ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x ===2 )) //   [false, true, false]