# 動態網頁管理功能規格 (Page Management Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** allow administrators to create a new page with custom title, category, URL slug, target section, and Markdown content.
- **[REQ-PAGE-02]** The system **SHALL** allow dynamic pages to be assigned to either the **Public Section (🌐 網站連結庫/公開專區)** or **Internal Section (🔒 校內特教業務版面)**.
- **[REQ-PAGE-03]** The system **SHALL** enforce password authentication (`8523984`) before granting access to the Internal Special Ed Section.
- **[REQ-PAGE-04]** The system **SHALL** automatically insert public dynamic pages into top navigation dropdowns, while keeping internal pages restricted to the password-protected internal section.
- **[REQ-PAGE-05]** The system **SHALL** persist dynamic page state to LocalStorage with client-side privacy protection.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 新增網頁歸類至校內特教業務版面
- **GIVEN** 管理員開啟「新增特教網頁」表單
- **WHEN** 管理員輸入標題「115學年度身心障礙學生轉介前介入評估表」、發布位置選擇「校內特教業務版面」並儲存
- **THEN** 一般訪客於前台公開選單無法看到該網頁，僅在輸入密碼 `8523984` 解鎖校內特教業務版面後方可閱讀。

### Scenario 2: 校內業務版面密碼驗證
- **GIVEN** 訪客點擊頂部導覽列「🔒 校內特教業務」
- **WHEN** 訪客輸入正確密碼 `8523984`
- **THEN** 系統解鎖校內專區，展示校內特教網頁與內部業務文件。
