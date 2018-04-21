# 快速开始

```
# bash
npm install -S vue-lui

# main.js
import VueLui from 'vue-lui'
Vue.use(VueLui);

# html
<v-col>
  <v-row>
    <v-text>Hello World!</v-text>
  </v-row>
  <v-row>
    <v-text>Hey, man! Welcome to a simple world!</v-text>
  </v-row>
</v-col>
```

# 关于Vue-LUI

Vue-LUI是一款以轻量为原则而开发的移动端UI控件库。

LUI = Light + UI。

Vue-LUI试图删除一切的无用库，更多地用css实现功能。

作者信奉Linux的哲学，一个软件只做一件事，做好一件事。

LUI不会涉足es6、css3、vue、vue-router、vuex以及用户的布局习惯所在的领域。

相反，LUI严重依赖上述各库。

LUI仅仅搭建了一个行列布局的框架，里面的东西LUI不会过问。

甚至不会写任何多余的css代码。

您看到的Demo美也好，丑也罢，那都是css的事。

单纯的LUI很显然的丑到家的。

# LUI做了什么

在其它的框架中，多将容器与控件分离而谈。LUI也不例外。LUI核心思想在容器层。

LUI认为，没有什么布局容器是flexbox所不能实现的。因此LUI的核心就是两个flex容器，一个叫Row，另一个叫Col。

其它容器统统不需要，但手动实现起来，并不难。

如果您实在想要一键式布局，为什么不去用Element-UI呢？

# LUI控件

LUI实现了以下的控件。

文档可能不会及时更新，具体的实现细节以及事件、属性等细节可以看源码中的注释。

|tag|控件名|说明|
|-|-|-|
|row|行布局|LUI的核心控件|
|col|列布局|LUI的核心控件|
|popup|弹窗|用于临时覆盖当前布局|
|line|文本|可用作按钮、链接|

等等，是不是忘了输入框了？

自己去实现吧，LUI认为简单地实现输入框不过就是对html5的输入框的单纯封装，为什么还要去实现呢？

注意，出于兼容性的考量，LUI也采用了框架所惯用的`l-row`与`l-col`之类的前缀的格式。

# LUI容器实现思路

下面是一些常用的容器的实现思路。

|容器|实现思路|
|-|-|
|导航栏|行-多列-文本按钮|
|侧边栏|路由-列-多行-文本按钮|
|表单|列-多行-多列-标签&输入框|

这些容器也是有实现的，不过可能要您手动导入了。

您可以看到，源码中`src/containers/*`中有很多封装好的组件，但是LUI并不会默认调用它们。您可以采用下面的方式一键引入（就像作者一样，那些本不过就是作者的自用库罢了）：

```js
Vue.use(VueLui, {containers: true});
```