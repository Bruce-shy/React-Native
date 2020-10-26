React-Native 编写的应用的样式不是靠css来实现的，而是依赖JavaScript来为你的应用来添加样式

### 1. 声明样式, 导入必要文件

```
import React, { StyleSheet } from "react-native";
```

```
const styles = StyleSheet.create({
    base: {
        width: 38,
        height: 38,
    },
    background: {
        backgroundColor: '#222222',
    },
    active: {
        borderWidth: 2,
        borderColor: ‘#ff00ff',
    },
});
```

调用了React-Native的一个构造方法，传入一个对象生成style。区别是把Css的命名由`-`连字符改成驼峰写法，长度单位不用加单位`px`,字符串比如色值需要加引号写成字符串。

### 2. 样式使用

所有的核心组件都支持样式属性

```
<View style={styles.base}></View>
```

当你需要多个属性类的时候，可以传入一个数组

```
<View style={[styles.base,styles.backgroundColor]}></View>
```

在两个样式有冲突的情况下，以右边的值优先，有些情况下可以加一些条件判断样式是否加载

```
<View style={[styles.base,this.state.active&&styles.active]} />
```

也可以在组件中render样式，这种做法并不推荐，就像html页面中行内样式不推荐一样。

```
<View
  style={[styles.base,{width:this.state.width, height:this.state.width*this.state.aspectRatio}]}
/>
```

### 3. 布局-flexbox

“弹性布局”，用来为盒状模型提供最大的灵活性。采用flex布局的元素，称为flex容器，简称“容器”。他的所有子元素自动成为容器成员，称为flex项目，简称“项目”。

container 的属性：

```
flexDirection:‘row‘|‘column‘
//主轴的方向，水平 | 垂直，默认是 column ，item会按照主轴方向排列。
 
flexWrap:‘warp‘|‘nowrap’
//flexbox 会默认将所有元素基于一行，这个属性表示是否折行。
nowrap  项目沿主轴方向布局，超出容器长度的部分不可见                    
wrap       项目沿主轴布局所需长度大于容器总长度时，分行布局，所有项目内容都可见
 
alignItems:‘flex-start’|’flex-end’|’center’|‘stretch‘
//表示item在 cross axis 上的对齐方式，基于cross axis的顶部｜基于cross axis的底部｜基于cross axis的中部｜布满整个。
交叉轴方向对齐方式，默认值flex-start，即交叉轴开端
 
justifyContent:‘flex-start’|‘flex-end‘|‘center‘|‘space-between‘|’space-around’
//表示item在 main axis 上的对齐方式，基于主轴开始｜基于主轴结束｜居中｜左右两边对齐，item间隔相等｜每个item两端间隔相等。
主轴方向对齐方式，默认值是flex-start，即主轴的开端
```

Item 属性

```
flex:1
布局权重
>=0 项目占位权重
1:0：flex=0的项目占用空间仅为内容所需空间，flex=1的项目会占据其余所有空间
alignSelf:‘flex-start’|’flex-end’|’center’
项目交叉轴方向自身对齐方式
```

### 4. RN 常用样式总结

背面可见性

```
backfaceVisibility enum('visible', 'hidden')
```

背景颜色

```
backgroundColor string
```

边框颜色

```
borderColor string
borderTopColor string
borderRightColor string
borderBottomColor string
borderLeftColor string
```

边框圆角半径

```
borderRadius number
borderTopLeftRadius number
borderTopRightRadius number
borderBottomLeftRadius number
borderBottomRightRadius number
```

边框样式

```
borderStyle enum('solid', 'dotted', 'dashed')
```

边框宽度

```
borderWidth number
borderTopWidth number
borderRightWidth number
borderBottomWidth number
borderLeftWidth number
```

不透明度

```
opacity number
```

填充

```
overflow enum('visible', 'hidden')
```

字体颜色

```
color string
```

字体

```
fontFamily string
```

字体大小

```
fontSize number
```

字体样式

```
fontStyle enum('normal', 'italic')
```

字体粗细

```
fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
```

字间距

```
letterSpacing number
```

行间距

```
lineHeight number
```

字体对齐方式

```
textAlign enum("auto", 'left', 'right', 'center', 'justify')
```

宽高

```
width number
height number
```

项目对齐

```
alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
```

自身对齐

```
alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
```

边框宽度

```
borderBottomWidth number
borderLeftWidth number
borderRightWidth number
borderTopWidth number
borderWidth number
```

弹性伸缩

```
flex number
```

弹性伸缩方向

```
flexDirection enum('row', 'column')
```

弹性伸缩包裹

```
flexWrap enum('wrap', 'nowrap')
```

证明内容

```
justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
```

外边距

```
margin number
marginBottom number
marginLeft number
marginRight number
marginTop number
marginHorizontal number//设置item的水平外边距
marginVertical number//设置item的垂直外边距
```

内边距

```
padding number
paddingBottom number
paddingLeft number
paddingRight number
paddingTop number
paddingHorizontal number//设置item的水平内边距
paddingVertical number
```

位置 (绝对，相对)

```
position enum('absolute', 'relative')
```

上下左右

```
right number
top number
left number
bottom number
```

Transform 属性变化

```
transform [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}] 
```

属性矩阵

```
transformMatrix TransformMatrixPropType 
```

