# 動態網頁管理與刪除雙重防護功能規格 (Page Management & Delete Guard Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The Admin Control Panel page deletion function **SHALL** support dual parameters (`id, index`) to guarantee 100% successful deletion of the clicked row regardless of duplicated names or slugs.
- **[REQ-PAGE-02]** When deleting a page, the system **SHALL** immediately update the table UI and show a confirmation notification.
- **[REQ-PAGE-03]** Upon deleting any page, the system **SHALL** display an "Undo" Toast notification allowing the user to restore the deleted page with a single click.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 控制台精準刪除重名項目
- **GIVEN** 管理員在控制台擁有重複名稱的項目（如兩筆「資源班課表」）
- **WHEN** 管理員點擊第二筆項目的 `[ 🗑 刪除 ]` 按鈕
- **THEN** 系統透過傳入列索引精準移除該第二筆資料，表格即時重新渲染並顯示成功刪除。
