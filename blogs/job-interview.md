---
title: 工作面试
date: "Fri, 27 May 2022 08:55:13 GMT"
updated: 2024-06-30 21:16:09 +08:00
---

# 流程

## 准备

提前重启电脑，进入会议，检查网络是否畅通，以免影响面试。

## 行为面试

准备：自我介绍和项目经验。简历里出现的内容要做好准备能描述清楚。

自我介绍：开发经验 X 年，目前就职于 X 公司，做 X 事。擅长 X，熟悉 X，了解 X。业余时间做 X 事。

项目经验：STAR (situation, task, action and result)

XX 是服务于 XX 的系统。我负责开发 XX 功能。我使用 XX 进行开发。一共开发了 X 个功能。提高了 XX。节省了 XX。

可能的问题：

- 项目遇到的最大问题？如何解决？
- 和其他成员有什么冲突？如何解决？
- 为什么跳槽？

## 技术面试

- 数据结构和算法
- 专业技能：例如 JS，React

要点：

- 大胆提问，切忌答非所问；
- 问清边界，考虑特殊情况；
- 测试驱动开发；
- 在大脑里跑通代码再提交；
- 计算算法的复杂度。

面对复杂问题：

1.  画图：抽象问题形象化；
2.  举例：抽象问题具体化；
3.  分解：复杂问题简单化。

## 应聘者提问

准备一些问题，根据面试官面试过程介绍的信息提问。

可以问项目和团队等方面的问题。

通用：

- 您觉得就我这次面试有哪些方面可以提高？

一面：

- 项目主要用到的技术栈是什么？
- 项目开发流程是什么样的？

二面：

- 团队正在尝试哪些新技术？
- 团队有什么技术项目？

三面：

- 公司倡导的价值观是什么？具有哪些品质的员工在公司算好员工？
- 团队规模有多大？
- 我应聘的这个职位目前最大的挑战是什么？
- 公司目前盈利怎么样？

四面：

- 工作制度是什么？
- 福利待遇怎么样？
- 每年有几次晋升机会？比例怎么样？

# 突发情况

## 网络不好，卡顿听不清

面试重点是沟通，换其他更好地沟通方式会比卡顿着沟通更好。

1. 尝试切换使用手机网络
2. 切换为使用手机打电话
3. 打字沟通

# 高质量代码

## 代码规范性

注意书写、布局和命名。

## 代码完整性

- 功能测试
- 边界测试
- 负面测试：测试可能的错误输入

错误处理：

- 返回值
- 全局变量
- 异常

## 代码鲁棒性

鲁棒性指程序能判断输入是否合乎规范要求，对不合要求的输入予合理地处理。

防御性编程：预见可能出现问题的地方，并为可能出现的问题制定处理方式（如检查文件名、路径、对象是否为空等）。

# 解决面试题的思路

先讲清楚思路和设计再开始写代码。

1.  画图
2.  举例
3.  分解：分治法，将大问题分解成各个小问题解决

# 优化时间和空间效率

空间换时间对于**嵌入式**的开发要慎重考虑，因为嵌入式系统的内存很有限。

# 面试中的各项能力

## 沟通能力

- 对于不清楚的知识点要勇敢承认，不要不懂装懂
- 英语面试：可以花更多时间练习听力，做到能听懂问题，发音不标准对方也一般能听懂

## 学习能力

- 面试遇到不明白的地方多提问
- 对于没有描述清楚的题目，面试者通过提问来弄明白题目的要求也是面试的一环

## 知识迁移能力

## 抽象建模能力

## 发散思维能力

# 经验

## 一面

60min

- 专业技能（前端知识）：30min
- 算法：20min
- 提问：10min

算法几乎没有时间去推倒重写，所以需要一开始思路就清晰。不要紧张，先想好边界条件的判断再写代码。

## 二面

**多准备项目的讲解和项目中用到的相关的知识**

我发现针对三年以上工作经验的社招，一面后可能就不会单独问专业技能（前端知识）和做算法题了，会针对项目来问。

## 三面

感觉很多时候面试后细想会想出更好的答案，但这并不会影响面试的结果。提高面试的临场发挥需要从日常入手：

1. 锻炼理解问题，首先回答问题最直接的答案，然后再发散。
2. 锻炼标准答案，虽然我们平时可能因为各种原因不会按标准做，但知道有并且能表达出来很重要。
3. 锻炼表达，让对方很容易就听明白。例如：当想法很多时如何确定表达顺序。

很多问题都可以归结到：

- 重要程度和紧急程度
- ROI
- 质量和效率

# Front end

Q: CSS make a box with fixed width-to-height ratio\
A: [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio)

Q: CSS implement 2 column layout, like newspaper\
A: Using [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) property

Q: Different between process and thread\
A: 进程（Process）：给程序独立使用 CPU、主存、I/O 设备的假象。任何时刻操作系统只有一个进程在运行，进程会交错执行（并发运行）。线程（Thread）：一个进程可以包含多个线程。

Q: Garbage collection\
A: Using mark-and-sweep algorithm. This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable". No modern JavaScript engine uses reference-counting for garbage collection anymore. [Memory management - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)

# 参考资料

- [fe-interview-handwrite: 📖 前端面试常见手写题整理](https://github.com/Mayandev/fe-interview-handwrite)
- [web 前端面试（全）](https://vue3js.cn/interview/)
