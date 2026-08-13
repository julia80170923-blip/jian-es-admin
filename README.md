# 吉安國小特教行政資訊網 (Ji-an ES Special Education Admin Portal)

基於 **OpenSpec (Spec-Driven Development, SDD)** 規範開發之花蓮縣吉安國民小學專屬特教行政門戶網站。

---

## 🌟 核心特色 (Key Features)

1. **OpenSpec 規範驅動開發 (Spec-Driven Development)**：
   - 專案架構與需求完全符合 OpenSpec 規範，包含 `openspec.json` 宣告、`proposal.md` 提案說明、`design.md` 架構設計與 `specs/` 功能規格文檔。
2. **特教相關網站連結庫 (Categorized Special Ed Links)**：
   - 預載全國與花蓮縣核心特教網站（如教育部特教通報網、花蓮縣特教專團管理系統、全國教師在職進修網、公務雲等）。
   - 支援實時關鍵字搜尋與分類過濾（行政公務系統、教學與研習平台、特教與輔導資源、校園常用服務）。
3. **隨時自訂與動態新增特教網頁 (Dynamic Page Management)**：
   - 特教團隊可在「後台控制台」中隨時新增、編輯或隱藏自訂特教頁面（如 IEP 填寫指引、資源班課表、考試服務規章）。
   - 新增之網頁會自動同步至網站頂部導覽列下拉選單。
   - 支援標準 Markdown 語法輸入與即時渲染（包含標題、表格、引用區塊、清單與超連結）。
4. **零負擔與零維護成本 (Zero-Cost Hosting)**：
   - 完全採用靜態 HTML5 / CSS3 / ES6 架構，資料同步至瀏覽器 LocalStorage，並提供 JSON 格式之完整備份與匯入功能。
   - 可直接部署於 GitHub Pages、Netlify 或學校現有網頁伺服器。

---

## 📁 專案與 OpenSpec 目錄結構

```
jian-es-admin/
├── openspec/                     # OpenSpec 規格文檔目錄
│   ├── openspec.json             # OpenSpec 主專案宣告檔
│   ├── proposal.md               # 專案提案：目標、背景與使用者情境
│   ├── design.md                 # 系統架構、元件與 Data Schema 設計
│   └── specs/
│       ├── external-links.md     # 外部連結管理規格 (EARS 需求 + BDD 情境)
│       └── page-management.md    # 動態網頁管理規格 (EARS 需求 + BDD 情境)
├── index.html                    # 網站主結構視圖
├── styles.css                    # 質感 CSS 設計系統 (特教主題調色與 RWD)
├── app.js                        # 前端 SPA 路由 + CRUD + Markdown 渲染引擎
├── netlify.toml                  # Netlify 部署設定
└── README.md                     # 本說明文件
```

---

## 🚀 部署指南 (Deployment)

### 部署至 GitHub Pages
1. 將本專案推送至 GitHub 儲存庫：
   ```bash
   git init
   git add .
   git commit -m "feat: complete Ji-an ES Special Ed Admin portal with OpenSpec specs"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/jian-es-admin.git
   git push -u origin main
   ```
2. 進入 GitHub Repository -> **Settings** -> **Pages**。
3. Source 選擇 `Deploy from a branch`，Branch 選擇 `main` / `/root`。
4. 儲存後數分鐘即可在 `https://YOUR_USERNAME.github.io/jian-es-admin/` 開啟網站！

---

## 🛠️ 開發與測試說明 (Development & OpenSpec Verification)

- **直接預覽**：使用任何現代瀏覽器開啟 `index.html` 即可完整運行與測試後台管理面板。
- **編輯特教網頁/連結**：點擊頂部導覽列右側「**管理控制台**」，即可新增特教網頁或外部連結。
- **資料備份**：控制台提供「匯出 JSON 備份」與「選擇檔案並匯入」，方便同仁進行跨裝置資料移轉與還原。
