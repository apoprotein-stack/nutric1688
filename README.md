# TZnutirc｜營養智慧 × 大腦健康

**TZnutirc** 整合兩大核心功能：

1. **食品營養成分查詢** — 單品查詢、國人膳食標準、配方熱量逆推與圖表視覺化  
2. **Brain Lab 大腦年齡小遊戲** — 麻將消除、2048 等益智模組，訓練空間推理與工作記憶

專案採純 HTML、CSS、JavaScript 實作，無需後端或建置工具即可部署。

---

## 快速開始

| 頁面 | 路徑 | 說明 |
|------|------|------|
| **入口首頁** | [`portal.html`](portal.html) | 雙核心導覽（營養 × 大腦） |
| **營養查詢** | [`index.html`](index.html) | TZ 營養工具（U1／U2／U3） |
| **大腦年齡** | [`sirt-game/index.html`](sirt-game/index.html) | Brain Lab 遊戲入口 |
| 麻將消除 | [`sirt-game/demo/`](sirt-game/demo/) | 五關漸進麻將接龍 |
| 2048 | [`sirt-game/games/2048/`](sirt-game/games/2048/) | 數字滑動合併 |

> 建議以 `portal.html` 作為對外入口；營養頁 header 亦含「🧠 大腦年齡」選單連結。

---

## 主要功能

### 營養查詢（index.html）

| 模組 | 說明 |
|------|------|
| 單品查詢 (U1) | 以本機 CSV 載入食品與營養成分，檢視表格與圖表 |
| 國人標準 (U2) | 對照國人膳食營養素參考攝取量（DRI） |
| 配方熱量逆推 (U3) | 多食材混合配方的熱量與營養估算 |
| 圖表視覺化 | Chart.js 圓餅／長條圖與資料標籤 |

### Brain Lab（sirt-game/）

| 遊戲 | 狀態 | 訓練重點 |
|------|------|----------|
| 麻將消除 | 已上線 | 空間推理、觀察力 |
| 2048 | 已上線 | 工作記憶、規劃 |
| 記憶配對 | 規劃中 | 短期記憶 |

---

## 專案結構

```text
nutric1688/
├── portal.html              # 入口首頁（TZnutirc 品牌）
├── index.html               # 營養查詢主工具
├── brain-nav.js             # 營養頁注入「大腦年齡」選單
├── logo.png                 # 品牌圖示
├── DRI.csv                  # 營養素參考資料
├── Message.csv              # 介面訊息文字
├── food_data_a.csv          # 食品營養資料
├── index_nutric_v1.html     # 歷史／實驗版本
├── index_nutric_v2.html
├── index_nutric_v4.html
├── sirt-game/               # Brain Lab（整合自 sirt-game repo）
│   ├── index.html           # 大腦年齡遊戲入口
│   ├── demo/                # 麻將消除
│   └── games/2048/          # 2048
├── PORTAL.md                # 整合說明（開發用）
└── .github/workflows/       # GitHub Pages 部署
```

---

## 技術與外部資源

- 原生 HTML、CSS、JavaScript
- [Chart.js](https://www.chartjs.org/) + [chartjs-plugin-datalabels](https://chartjs-plugin-datalabels.netlify.app/)
- [Papa Parse](https://www.papaparse.com/)：解析 CSV
- Google Fonts：Noto Sans TC、Inter

外部套件由 CDN 載入，預覽與正式部署需可連線至對應 CDN。若要完全離線使用，請將相依資源納入專案。

---

## 本機預覽

本專案以 `fetch()` 讀取 CSV，**不可**直接用 `file://` 開啟。請在 repository 根目錄啟動 HTTP 伺服器：

```bash
python3 -m http.server 8000
```

然後開啟：

- 入口：<http://localhost:8000/portal.html>
- 營養：<http://localhost:8000/index.html>
- 大腦：<http://localhost:8000/sirt-game/index.html>

---

## GitHub Pages 部署

`.github/workflows/static.yml` 會在推送至 `main` 或手動執行 workflow 時，將根目錄部署至 GitHub Pages。

1. **Settings → Pages** → 來源設為 **GitHub Actions**
2. 推送至 `main`，或從 **Actions** 手動執行 **Deploy static content to Pages**
3. 建議將站點首頁導向 `portal.html`（可於 Pages 設定或另設 `index` 轉址）

---

## 驗證清單

發布前請在桌面與行動瀏覽器檢查：

- [ ] `portal.html` 雙卡導覽與連結正常
- [ ] 營養頁三個模組（U1／U2／U3）資料與圖表可載入
- [ ] header「🧠 大腦年齡」可進入 Brain Lab
- [ ] 麻將消除、2048 可遊玩
- [ ] 瀏覽器主控台無 CORS、404 或 CSV 解析錯誤

---

## 資料與使用限制

本專案提供營養資訊查詢與休閒益智體驗，**非正式醫療診斷或個人化飲食處方**。正式對外使用前，請確認 CSV 資料來源、更新日期、單位與適用地區，並由具備相關資格者審核營養與健康表述。

Repository 目前未附獨立 LICENSE；重用程式碼、資料或圖像前請先確認授權範圍。
