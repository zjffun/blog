---
updated: 'Sat, 23 May 2020 03:49:00 GMT'
date: 'Sat, 23 May 2020 03:49:00 GMT'
---

遍历 JObject：<https://www.newtonsoft.com/json/help/html/JObjectProperties.htm>

遍历 JArray：

```
string json = @"[
  'Small',
  'Medium',
  'Large'
]";

JArray jarray = JArray.Parse(json);

for (int i = 0; i < jarray.Count; i++)
{
    Console.WriteLine(jarray[i]);
}
```

查找并遍历：<https://www.newtonsoft.com/json/help/html/QueryJsonSelectTokenJsonPath.htm>

# 例子：

打开 Feature 和 Addition 这两个 JSON 字符串，并去除全部空字符（我这回的数据只有三层，不知道数据层数时要递归遍历）

```
private JToken Preprocessing(DataTable tbl)
        {
            JArray jr = JArray.Parse(SerializeToJson(tbl));

            for (int i = 0; i < jr.Count; i++)
            {
                foreach (JProperty p in jr[i].ToObject<JObject>().Properties())
                {
                    if (p.Name.Equals("Feature") || p.Name.Equals("Addition"))
                    {
                        p.Value = JObject.Parse(p.Value.ToString());
                        jr[i][p.Name] = p.Value;
                        foreach (JProperty subp in p.Value.ToObject<JObject>().Properties())
                        {
                            jr[i][p.Name][subp.Name] = Regex.Replace(subp.Value.ToString(), @"\s", "");
                        }
                    }
                    else
                    {
                        jr[i][p.Name] = Regex.Replace(p.Value.ToString(), @"\s", "");
                    }

                }
            }
            return jr;

        }
```
