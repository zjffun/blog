import { DocSearch } from "@docsearch/react";

import "@docsearch/css";

export default function AlgoliaSearch() {
  return (
    <DocSearch
      appId="OQLPOS0MXR"
      indexName="zjffun"
      apiKey="55ac5022b22710e77a53d1bfe1cae34a"
      placeholder="请输入查询内容"
      transformItems={(items) => {
        const filteredItems = items.filter((item) => {
          if (item.url === "https://blog.zjffun.com/") {
            return false;
          }
          return true;
        });
        return filteredItems;
      }}
    />
  );
}
