# 動態網頁管理與多網站按鈕跳轉功能規格 (Multi-Site & Auto-Redirect Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** allow administrators to continuously add multiple custom websites/pages while retaining all existing pages and presets.
- **[REQ-PAGE-02]** If an administrator inputs a complete web URL (`http://` or `https://`) in the "Slug" field or "外部跳轉網址" field, the system **SHALL** automatically parse it as an external redirect URL and sanitize the Slug automatically.
- **[REQ-PAGE-03]** For every page configured with an external URL, the system **SHALL** render a prominent button displaying the website title (e.g. `🔗 前往【特生考試服務服務雲】 ↗`).
- **[REQ-PAGE-04]** Clicking the website title button **SHALL** automatically redirect and open the target website in a new browser tab.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 新增多個網站並測試按鈕自動跳轉
- **GIVEN** 管理員在控制台新增「特生考試服務服務雲」，網址填寫 `https://regal-tiramisu-ecaf8b.netlify.app/`
- **WHEN** 管理員儲存後返回前台
- **THEN** 前台版面上顯示醒目的「🔗 前往 特生考試服務服務雲 ↗」按鈕，點擊該按鈕自動跳轉至 Netlify 服務網站，且原先的特教網頁與門戶均完好保留。
