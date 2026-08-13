# TZ-NutriQ｜食品營養成分查詢

TZ-NutriQ 是以瀏覽器為基礎的食品營養成分查詢與比較工具。使用者可以在頁面中選擇食物與營養項目，查看資料表、營養指標與圖表化結果。專案採純 HTML、CSS 與 JavaScript 實作，不需要後端伺服器或建置工具即可部署。

## 主要功能

| 功能 | 說明 |
| --- | --- |
| 食品查詢 | 以本機 CSV 資料載入食品與營養成分，提供選擇與檢視介面。 |
| 營養比較 | 依選定食品與營養項目呈現比較結果。 |
| 圖表視覺化 | 使用 Chart.js 與資料標籤外掛呈現圖表。 |
| 分頁／版本實驗 | `index.html` 為主要入口；`index_nutric_v1.html`、`index_nutric_v2.html` 與 `index_nutric_v4.html` 保留不同版本的介面實驗。 |
| 靜態部署 | 透過 GitHub Pages workflow 發布整個 repository 的靜態檔案。 |

## 技術與外部資源

- 原生 HTML、CSS 與 JavaScript
- [Chart.js](https://www.chartjs.org/)
- [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/)
- [Papa Parse](https://www.papaparse.com/)：解析 CSV 資料
- Google Fonts：Noto Sans TC 與 Inter

外部前端套件目前由 CDN 載入，因此預覽與正式部署需要可連線至相應 CDN。若要支援完全離線使用，應改為將相依資源納入專案並同步更新授權與版本資訊。

## 資料檔案

```text
nutric1688/
├── index.html              # 主要使用者入口
├── index_nutric_v1.html    # 歷史／實驗版本 1
├── index_nutric_v2.html    # 歷史／實驗版本 2
├── index_nutric_v4.html    # 歷史／實驗版本 4
├── DRI.csv                 # 營養素參考資料
├── Message.csv             # 介面訊息或文字資料
├── food_data_a.csv         # 食品營養資料
├── logo.png                # 品牌圖示
└── .github/workflows/      # GitHub Actions 部署設定
```

CSV 欄位若有增刪或改名，必須同步檢查 `index.html` 中的欄位讀取、篩選與圖表邏輯；否則頁面可能載入成功但顯示空白或不完整結果。

## 本機預覽

此專案會以 `fetch()` 讀取 CSV，不能直接雙擊 `index.html` 使用 `file://` 開啟。請在 repository 根目錄啟動簡易 HTTP 伺服器：

```bash
python3 -m http.server 8000
```

接著開啟 <http://localhost:8000/>。若要預覽其他版本，則直接造訪相應路徑，例如 <http://localhost:8000/index_nutric_v4.html>。

## GitHub Pages 部署

`.github/workflows/static.yml` 會在推送至 `main` 分支或手動執行 workflow 時，將 repository 根目錄部署至 GitHub Pages。啟用方式如下：

1. 在 repository 的 **Settings → Pages** 將來源設為 **GitHub Actions**。
2. 推送至 `main`，或從 **Actions** 手動執行 **Deploy static content to Pages**。
3. 開啟 GitHub Pages 顯示的網址，確認 `index.html`、CSV 與圖片均可載入。

## 驗證清單

發布前請在桌面與行動瀏覽器各檢查一次：食品選單是否有資料、CSV 讀取是否成功、圖表是否正常繪製、不同版本頁面是否能開啟，以及瀏覽器主控台是否出現 CORS、404 或欄位解析錯誤。

## 資料與使用限制

本專案提供的是營養資訊查詢與展示介面，不是醫療診斷或個人化飲食處方。正式對外使用前，請確認 CSV 資料的來源、更新日期、單位與適用地區，並由具備相關資格的人員審核營養與健康表述。repository 目前未附獨立 LICENSE；如需重用程式碼、資料或圖像，請先確認授權範圍。
