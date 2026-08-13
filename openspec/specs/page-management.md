# 動態網頁管理與單一刪除防護功能規格 (Deletion Guard & Undo Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** automatically inspect and assign a non-empty, unique ID to every page stored in LocalStorage upon initialization.
- **[REQ-PAGE-02]** The deletion operation **SHALL** use `splice(index, 1)` targeting the exact matched page ID, ensuring that deleting one page NEVER affects or removes any other pages.
- **[REQ-PAGE-03]** Upon deleting any page, the system **SHALL** display an "Undo" Toast notification allowing the user to restore the deleted page with a single click.
- **[REQ-PAGE-04]** The system **SHALL** maintain an automatic historical snapshot in LocalStorage prior to any deletion operation, enabling one-click snapshot restoration in the Admin Control Panel.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 安全刪除單一特教網站
- **GIVEN** 管理員在控制台擁有 5 個自訂特教網站
- **WHEN** 管理員點擊刪除其中 1 個網站
- **THEN** 系統僅精準移除該 1 個網站，其餘 4 個網站完全保留不被影動，且畫面上方顯示「已刪除──[↶ 立即復原 (Undo)]」浮動通知。

### Scenario 2: 點擊復原按鈕復原刪除網站
- **GIVEN** 管理員剛刪除了一個網站
- **WHEN** 管理員點擊浮動通知中的「↶ 立即復原 (Undo)」
- **THEN** 被刪除的網站立即完好恢復並同步儲存至 LocalStorage。
