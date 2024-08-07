---
updated: 'Sat, 29 Jun 2019 16:40:14 GMT'
date: 'Thu, 28 Feb 2019 06:35:09 GMT'
---

ArcGIS API for JavaScript（3.x）如何加载天地图《[ArcGIS API for Javascript 加载天地图（经纬度投影） - 张凯强 - 博客园](https://www.cnblogs.com/zhangkaiqiang/p/7358627.html)》这篇文章已经写的很好了，但放到 4.x 上没法用，这里我将他的方法升级到 4.x 版本供大家参考。（4.x 修改了挺多东西）

# 在线预览：[ArcGIS TianDiTu](https://codepen.io/1010543618/pen/bPLNOE)

# 代码：

```html
<!DOCTYPE html>
<html style="height: 100%;">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"/>
  <title>天地图底图加载（经纬度版本）</title>
  <link rel="stylesheet" href="https://js.arcgis.com/4.7/esri/css/main.css">
  <script src="https://js.arcgis.com/4.7/"></script>
</head>
<body style="height: 100%;">
  <!-- 100vh兼容性不好 -->
  <div id="map-container" style="width: 100%;height: 100%;"></div>
  <script type="text/javascript">

  // ==========================================
  // 测试版本：V4.7
  // ==========================================

  require([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/WebTileLayer',
    'esri/layers/support/TileInfo',
    'dojo/domReady!'
    ],function(Map, MapView, WebTileLayer, TileInfo){
    
      // 我们是通过瓦片形式加载天地图的
      // 天地图根据投影又分为两种：墨卡托和经纬度
      // 经纬度投影的情况下比较复杂，且需要注意的地方比较多，加载过程如下

      // 首先我们设定瓦片信息，天地图经纬度地图的切片信息全部使用该信息设定
      var tileInfo = new TileInfo({
        dpi: 90.71428571427429,
        rows : 256,
        cols : 256,
        compressionQuality : 0,
        origin : {
          x : -180,
          y : 90
        },
        spatialReference : {
          wkid : 4326
        },
        lods : [
          {level : 2,levelValue: 2, resolution : 0.3515625, scale : 147748796.52937502},
          {level : 3,levelValue: 3, resolution : 0.17578125, scale : 73874398.264687508},
          {level : 4,levelValue: 4,resolution : 0.087890625, scale : 36937199.132343754},
          {level : 5,levelValue: 5, resolution : 0.0439453125, scale : 18468599.566171877},
          {level : 6,levelValue: 6, resolution : 0.02197265625, scale : 9234299.7830859385},
          {level : 7,levelValue: 7, resolution : 0.010986328125, scale : 4617149.8915429693},
          {level : 8,levelValue: 8, resolution : 0.0054931640625, scale : 2308574.9457714846},
          {level : 9,levelValue: 9, resolution : 0.00274658203125, scale : 1154287.4728857423},
          {level : 10,levelValue: 10, resolution : 0.001373291015625, scale : 577143.73644287116},
          {level : 11,levelValue: 11, resolution : 0.0006866455078125, scale : 288571.86822143558},
          {level : 12,levelValue: 12, resolution : 0.00034332275390625, scale : 144285.93411071779},
          {level : 13,levelValue: 13, resolution : 0.000171661376953125, scale : 72142.967055358895},
          {level : 14,levelValue: 14, resolution : 8.58306884765625e-005, scale : 36071.483527679447},
          {level : 15,levelValue: 15, resolution : 4.291534423828125e-005, scale : 18035.741763839724},
          {level : 16,levelValue: 16, resolution : 2.1457672119140625e-005, scale : 9017.8708819198619},
          {level : 17,levelValue: 17, resolution : 1.0728836059570313e-005, scale : 4508.9354409599309},
          {level : 18,levelValue: 18, resolution : 5.3644180297851563e-006, scale : 2254.4677204799655},
          { level: 19,levelValue: 19, resolution: 2.68220901489257815e-006, scale: 1127.23386023998275 },
          { level: 20,levelValue: 2, resolution: 1.341104507446289075e-006, scale: 563.616930119991375 }
        ]
      })

      // 根据尝试得到如下经验：
      // 当WebTiledLayer 初始化时设置了 tileInfo 属性时，模板字段必须去掉 $ 也就是 {……} 而不是 ${……}
      // 同时不要相信文档中的替换说明

      // 在加载经纬度地图的时候我们需要使用 {subDomain}, {col}, {row}, {level}分别替换服务器列表，瓦片列编号，瓦片行编号，当前缩放(显示)级别
      // 经纬度矢量地图瓦片的URL:
      // http://t4.tianditu.com/DataServer?T=vec_c&x=27&y=3&l=5

      // 分析上述 URL 我们知道，域名中的 t4 部分代表子域字段，参数列表中的TILECOL, TILEROW, TILEMATRIX 分别对应列编号， 行编号，缩放(显示)级别， 对这几个部分进行替换，得到 url 模板如下
      // http://{subDomain}.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}
      // 经过查询资料天地图瓦片可用子域分别有 t0,t1,t2,t3,t4,t5,t6,t7 八个子域
      // 根据现有信息新建 WebTiledLayer 如下

      var layer = WebTileLayer('http://{subDomain}.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=174705aebfe31b79b3587279e211cb9a',{
        // subDomains: ['t0','t1','t2','t3','t4','t5','t6','t7'],
        subDomains: ['t0'],
        tileInfo: tileInfo
      })
      var layer_anno = WebTileLayer('http://{subDomain}.tianditu.com/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=174705aebfe31b79b3587279e211cb9a',{
        //subDomains: ['t0','t1','t2','t3','t4','t5','t6','t7'],
        subDomains: ['t0'],
        tileInfo: tileInfo
      })

      // 创建地图，不设置底图，如果设置底图会造成坐标系无法被转换成 ESPG:4326 (WGS1984)
      var map = new Map({
        spatialReference : {
          wkid : 4326
        },
        basemap: {
          baseLayers: [layer, layer_anno]
        }
      });

      // 创建MapView
      var view = new MapView({
        container: "map-container",
        spatialReference : {
          wkid : 4326
        },
        map: map,
        center: [121.67, 42.01],
        //1:scale的图
        scale: 2000
      });


      // 下面提供几个天地图经纬度投影的图层地址以及转换后的URL模板

      // ============================================================================================================================================================================================

      // 经纬度矢量底图
      // http://t4.tianditu.com/DataServer?T=vec_c&x=28&y=4&l=5
      // http://{subDomain}.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}

      // 经纬度矢量中文注记（配合矢量底图使用）
      // http://t0.tianditu.com/DataServer?T=cva_c&x=28&y=4&l=5
      // http://{subDomain}.tianditu.com/DataServer?T=cva_c&x={col}&y={row}&l={level}

      // 经纬度矢量英文注记（配合矢量底图使用）
      // http://t0.tianditu.cn/eva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eva&tileMatrixSet=c&TileMatrix=10&TileRow=158&TileCol=821&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/eva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eva&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度矢量蒙古文注记（配合矢量底图使用）
      // http://t7.tianditu.cn/mva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mva&tileMatrixSet=c&TileMatrix=10&TileRow=158&TileCol=823&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/mva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mva&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度矢量维吾尔文注记（配合矢量底图使用）
      // http://t5.tianditu.cn/wva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wva&tileMatrixSet=c&TileMatrix=3&TileRow=0&TileCol=6&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/wva_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wva&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // ============================================================================================================================================================================================

      // 经纬度影像底图
      // http://t3.tianditu.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix=5&TileRow=4&TileCol=26&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度行政边界（配合经纬度影像底图使用）
      // http://t3.tianditu.cn/ibo_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=c&TileMatrix=10&TileRow=160&TileCol=849&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/ibo_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度中文注记（配合经纬度影像底图使用）
      // http://t5.tianditu.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix=5&TileRow=4&TileCol=26&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度英文注记（配合经纬度影像底图使用）
      // http://t4.tianditu.cn/eia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eia&tileMatrixSet=c&TileMatrix=7&TileRow=18&TileCol=106&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/eia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eia&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度蒙古文注记（配合经纬度影像底图使用）
      // http://t2.tianditu.cn/mia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mia&tileMatrixSet=c&TileMatrix=7&TileRow=20&TileCol=105&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/mia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mia&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度维吾尔文注记（配合经纬度影像底图使用）
      // http://t6.tianditu.cn/wia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wia&tileMatrixSet=c&TileMatrix=7&TileRow=19&TileCol=106&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/wia_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wia&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // ============================================================================================================================================================================================

      // 经纬度地形底图
      // http://t4.tianditu.cn/ter_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=c&TileMatrix=5&TileRow=5&TileCol=26&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/ter_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度行政边界（配合地形底图使用）
      // http://t0.tianditu.cn/tbo_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=tbo&tileMatrixSet=c&TileMatrix=5&TileRow=5&TileCol=23&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/tbo_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=tbo&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度中文注记（配合经纬度地形底图使用）
      // http://t6.tianditu.cn/cta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=c&TileMatrix=5&TileRow=4&TileCol=26&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/cta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度英文注记（配合经纬度地形底图使用）
      // http://t6.tianditu.cn/eta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eta&tileMatrixSet=c&TileMatrix=7&TileRow=20&TileCol=106&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/eta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=eta&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度蒙古文注记（配合经纬度地形底图使用）
      // http://t7.tianditu.cn/mta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mta&tileMatrixSet=c&TileMatrix=7&TileRow=19&TileCol=105&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/mta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=mta&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度维吾尔文注记（配合经纬度地形底图使用）
      // http://t0.tianditu.cn/wta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wta&tileMatrixSet=c&TileMatrix=7&TileRow=19&TileCol=106&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/wta_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wta&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // ============================================================================================================================================================================================

      // 经纬度水系
      // http://t4.tianditu.cn/wat_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wat&tileMatrixSet=c&TileMatrix=4&TileRow=0&TileCol=14&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/wat_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=wat&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 经纬度铁路
      // http://t3.tianditu.cn/raw_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=raw&tileMatrixSet=c&TileMatrix=9&TileRow=77&TileCol=414&style=default&format=tiles
      // http://{subDomain}.tianditu.cn/raw_c/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=raw&tileMatrixSet=c&TileMatrix={level}&TileRow={row}&TileCol={col}&style=default&format=tiles

      // 总结一下：
      //
      // 1. 对于经纬度投影切片的加载直接使用 WebTiledLayer 就可以直接加载，但是不能直接设置底图，同时需要设置切片信息，并且在添加图层之后使用 centerAndZoom 方法设置地图的坐标为 ESPG:4326 (WGS1984)
      // 2. 对于URL模板的替换需要注意使用的是 {subDomain}, {col}, {row}, {level} 进行对应字段的替换，不要相信文档中的 ${X}, ${Y} ,${Z} 等
      // 3. 天地图目前的子域为 t0,t1,t2,t3,t4,t5,t6,t7
  })
  </script>
</body>
</html>
```
