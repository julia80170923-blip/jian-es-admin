# 動態網頁管理與安全驗證功能規格 (Page Management & Security Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** allow administrators to select one of 3 target sections when publishing a page: **"🌐 網站連結庫 / 公開特教專區" (`public`)**, **"🍎 導師專區" (`teacher`)**, or **"🔒 校內特教業務版面" (`internal`)**.
- **[REQ-PAGE-02]** Pages assigned to **"🍎 導師專區" (`teacher`)** **SHALL** be dynamically rendered under the "導師專區" section on the Home View.
- **[REQ-PAGE-03]** The system **SHALL NOT** render any hardcoded static preview cards in the "導師專區" or "校內常用特教表單與個案工具" sections.
- **[REQ-PAGE-04]** The system **SHALL NOT** provide an "新增網頁" button directly on the front-end Home View; page creation **SHALL** only be accessed via the password-protected Admin Control Panel (`⚙️ 管理控制台`).
- **[REQ-PAGE-05]** The system **SHALL** enforce password authentication (`8523984`) before granting access to the Admin Control Panel Modal or Internal Special Ed Section.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 發布動態網頁至導師專區
- **GIVEN** 管理員在控制台開啟「新增特教網頁」表單
- **WHEN** 管理員填寫標題「身心障礙學生轉介前介入指引」、發布位置選擇「🍎 導師專區 (所有人可瀏覽)」並儲存
- **THEN** 前台首頁的「導師專區」版面自動即時顯示該篇動態文章圖卡。

### Scenario 2: 前台按鈕清理
- **GIVEN** 訪客瀏覽首頁「公開特教專區網頁」區塊
- **WHEN** 畫面載入完成
- **THEN** 標頭右側不含有任何「⊕ 新增網頁」按鈕。
