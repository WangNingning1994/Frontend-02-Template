### 泛用语言分类方法

- 非形式语言（例如自然语言，语法松散）

- 形式语言（形式化定义，如计算机语言，按乔姆斯基谱系可做如下分类）
  
  - 0 无限制
  - 1 上下文相关
  - 2 上下文无关
  - 3 正则
  
  对这部分暂时只要有感性认识即可

### BNF

对计算机语言的语法作出形式化的定义，支持递归， 一点考古：

> In the 1950s, Noam Chomsky realized that the syntax of a sentence can be represented by a tree, and the rules for building syntactically correct sentences can be written as an equational, inductive definition. Chomsky called the definition a *grammar*. (John Backus and Peter Naur independently discovered the same concept, and for this reason, a grammar is sometimes called *BNF (Backus-Naur form) notation*.)

### 基本类型

- Number
  - 理解 IEEE 754 双精度浮点数标准，这部分较为困难，目前可以完成下面三部分
    - 用累乘2的方法把十进制小数转换为二进制小数
    - 用科学记数法表示一个带有小数位的二进制数
    - 知道 IEEE 754 规定的64 位中的存在符号位，指数位（包含偏移量），小数位的划分
- String
  - Unicode，基本可以理解为给所有字符分配了一个唯一的数字
  - UTF-16/UTF-8，Unicode 的编码方式，Unicode 本身并没有规定字符如何存储
- Object
  - 属性
    - 数据属性和访问器属性
    - 属性拥有一些特征值，这些特征值可以理解为“属性的属性”，诸如 [[configurable]], [[writable]], [[enumerable]], 可使用 Object.defineProperty 来修改这些特征值
  - 原型机制

