---
updated: 'Thu, 28 Feb 2019 06:35:09 GMT'
date: 'Fri, 31 Aug 2018 13:03:53 GMT'
---

以前上学就学过，现在工作又遇到了，拿出来复习一下（看的很老的博客讲的都比较细了，不知道最近又有没有新方法）

1.  引射线法：从被判断的点发射一条射线，与多边形有奇数个交点则在多边形内
2.  面积和法：从多边形一顶点出发，计算被判断的点和相邻两点组成的三角形的面积和（可用 1/2 \* 向量叉乘求），面积和与多边形面积相等则在多边形内
3.  夹角和法：从多边形一顶点出发，计算被判断的点和多边形相邻两顶点的夹角和（可用向量点积推出的夹角公式求），夹角和为 360 则在多边形内部
4.  遮罩法：生成多边形的位图（多边形内部区域置为指定的颜色），找出将被判断点处位图的颜色，为指定的颜色则在内部

这几种方法除了遮罩法别的在判断凹多边形都得注意下细节，比如：

-   夹角和法的射线正好卡在拐角处。
-   面积和法、夹角和法顺时针为加，逆时针为减（要是都按加算的话肯定会算多了。。）

# JS 使用引射线法实现

已经有大神写出来了：[substack/point-in-polygon: determine if a point is inside a polygon](https://github.com/substack/point-in-polygon)

```js
/**
 * 判断点与多边形位置关系
 * @param  {Array<number>} point 待判断的点
 * @param  {Array<Array<number>>} vs    多边形点数组
 * @return {bool}       是否在内部
 */
function inside(point, vs){
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    // 依次遍历多边形的每个边
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = 
            ((yi > y) != (yj > y)) // 判断该点纵坐标是否在线段最高点和最低点之间[注1]
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi); // 判断该点向x轴正方向发出的射线是否穿过线段[注2]
            
        if (intersect) inside = !inside;
    }

    return inside;
}

inside([0.5,2.5], [[1,1], [2,2], [1,3]])// false
inside([1.5,2], [[1,1], [2,2], [1,3]])// true

// 在边上的点又是什么情况？
inside([1.5,1.5], [[1,1], [2,2], [1,3]])// false
inside([1,2], [[1,1], [2,2], [1,3]])// true
```

## 注 1：判断该点纵坐标是否在线段最高点和最低点之间

这里有 5 种情况：

```
      false (F!=F)

------false (F!=F)-------yi

      true  (T!=F)

------true  (T!=F)-------yj

      false (T!=T)
```

## 注 2：判断该点向 x 轴正方向发出的射线是否穿过线段

1.  计算改点平行于 X 轴的直线与该线段所在直线的交点的横坐标：`(xj - xi) * (y - yi) / (yj - yi) + xi`
2.  判断该点横坐标是否小于交点的横坐标与孰大孰小：`x < 交点的横坐标`

# C# 实现

// 上面说的都没用到 =\_=，C# 自带一个检测的方法

```
/* 说明：
 * 1. 虽然地球是圆的但中国坐标都是正的这么处理也没毛病
 * 
 * 2. 经纬度一般小数点前3位后6位一共9位
 * 
 *    PointF（float）：32位，1位符号，8位指数，23位尾数。
 *    2^23 = 8,388,608 精度6-7位
 *    float不够用
 * 
 *    Point（int）：32位，1位符号，31位数
 *    2^31 = 2,147,483,648 精度9-10位
 *    int够用，但经测试只能乘100000，精确到小数点后5位（米级）
 *    乘1000000，精确到小数点后6位（分米级）时会全返回False，可能内部计算时越界了
 *    
 *    计算时全是按双精度算的够用
*/

// 创建多边形区域
GraphicsPath gp = new GraphicsPath();
Region region = new Region();
gp.Reset();
gp.AddPolygon(new Point[]{
    new Point((int)(28.87243083439048 * 100000.0), (int)(106.83294296264648 * 100000.0)),
    new Point((int)(28.87243083439048 * 100000.0), (int)(106.84285640716554 * 100000.0)),
    new Point((int)(28.880735867389312 * 100000.0), (int)(106.84285640716554 * 100000.0)),
    new Point((int)(28.880735867389312 * 100000.0), (int)(106.83294296264648 * 100000.0)),
    new Point((int)(28.87243083439048 * 100000.0), (int)(106.83294296264648 * 100000.0))
});
region.MakeEmpty();
region.Union(gp);

//判断点是否在多边形区域里
bool result1 = region.IsVisible(new Point((int)(28.87243083439048 * 100000.0), (int)(106.83294296264648 * 100000.0)));
bool result2 = region.IsVisible(new Point((int)(39.904030 * 100000.0), (int)(116.407526 * 100000.0)));
Console.WriteLine(result1.ToString());
Console.WriteLine(result2.ToString());
Console.ReadLine();
```
