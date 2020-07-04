## CSS Prefix 溯源

老师的脑图补充了一个角落，把 CSS property 分成了 property with vender prefix 和 standard property。之前有看到过 CSS 工作组前联合主席的一篇博文，关于浏览器前缀的发展历史，做了简单总结。

### 诞生历史

最早是由来自 Adobe 的 Mike Wexler 于98年9月提议，其目的是允许浏览器厂商给 CSS 提供私有的属性扩展，并且和未来的 CSS 不冲突。

> In order to allow vendors to add private properties using the CSS syntax and avoid collisions with future CSS versions, we need to define a convention for private properties. Here is my proposal (slightly different than was talked about at the meeting). Any vendors that defines a property that is not specified in this spec must put a prefix on it. That prefix must start with a '-', followed by a vendor specific abbreviation, and another '-'. All property names that DO NOT start with a '-' are RESERVED for using by the CSS working group.

### 演变

CSS 工作组对此的讨论逐渐演变成了厂商私有属性还是试验性的 featuer, 在后一种情况里，这些前缀是应当在这个 feature 被标准化后被**移除**的。

不幸的是，有些带有浏览器前缀的试验性 feature 对于开发者太有用了，它们在互联网上快速蔓延，CSS 渐变在当时就是一个例子，开发者不得不产出好几个版本的样式来容纳各个浏览器厂商不同的实现。

不幸的是，有些带有前缀的属性需要花费非常长的时间来被标准化，由此导致的是所有人都开始在生产环境上使用这些带有前缀的属性。

再一次不幸的是，浏览器厂商并没有遵守它们自己制定的规则。因为这些带有前缀的属性被大范围使用，它们同时维护着这些属性的早期实现和语法以及与此对应的更加现代化的实现（又或者是彼时 CSS 工作组草案里的内容）。

Webkit 和 Chrome 的快速增长使得带有前缀的属性被开发人员广泛采用，它们逐渐变得对 Web 有害，很荒谬的一个结果就是，其他浏览器厂商也会认真考虑自己也实现带有 -webkit- 前缀的属性（或至少是模仿）。

### 应对

对试验性的技术（广义上）增加开关（默认关闭），已经可以在较新的浏览器上看到这个。但是对 CSS 前缀的支持默认还是开的，如果默认关闭，可能成千上万的网站就挂了，无论如何都一个艰难的决定。

但是浏览器厂商应该考虑的是，试验性的 feature 终归是试验性的，无论它们传播得有多广。如果一项试验性技术的**标准化**过于缓慢，就该考虑默认关闭这项试验性 feature。



### 参考文献

G. (2015, July 30). *CSS Vendor Prefixes*. Glazblog. http://www.glazman.org/weblog/dotclear/index.php?post/2015/07/30/CSS-Vendor-Prefixes