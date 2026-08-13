# 動態網頁管理與畫面內嵌功能規格 (Page Management & Web Embedding Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** allow dynamic page contents to render embedded external websites via `<iframe>` HTML tags.
- **[REQ-PAGE-02]** The Admin Panel Markdown toolbar **SHALL** provide a dedicated button `[ 內嵌網頁 (iframe) ]` to instantly insert high-definition iframe embed code (`<iframe src="https://..." width="100%" height="650px"></iframe>`).
- **[REQ-PAGE-03]** The system **SHALL** provide an optional "外部跳轉網址 (選填)" (`externalUrl`) field in the Page Creation form.
- **[REQ-PAGE-04]** If a page has an `externalUrl` specified, clicking the page link in the navigation menu or card grid **SHALL** directly open the target external URL in a new browser tab.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 網頁內容嵌入外部網站畫面
- **GIVEN** 管理員在控制台編輯網頁內容
- **WHEN** 管理員點擊工具列「內嵌網頁 (iframe)」按鈕，填入 URL `https://special.hlc.edu.tw` 並發布
- **THEN** 前台打開該網頁時，頁面內包含一個寬 100%、高 650px 的獨立視窗，直接展示目標網站畫面。

### Scenario 2: 設定選單點擊自動跳轉外站
- **GIVEN** 管理員在【外部跳轉網址 (選填)】填寫 `https://www.set.edu.tw` 並發布
- **WHEN** 訪客點擊導覽列中的該網頁項目
- **THEN** 系統直接在新分頁中開啟 `https://www.set.edu.tw` 網站畫面。
