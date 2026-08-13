# 外部連結管理功能規格 (External Links Spec)

## Requirement Statements (EARS-style)

- **[REQ-LINK-01]** The system **SHALL** pre-load ONLY the 4 official core special education portals: "教育部全國特教通報網", "全國教師在職進修網", "花蓮縣特殊教育資源網", and "教育部全國特殊教育資訊網-研習報名".
- **[REQ-LINK-02]** The system **SHALL** allow administrators to add, edit, reorder, or delete external links via the Admin Control Panel.
- **[REQ-LINK-03]** The system **SHALL** provide a real-time search input for users to quickly filter core links by title, category, or description.
- **[REQ-LINK-04]** The system **SHALL** open external website links in a new browser tab (`target="_blank" rel="noopener noreferrer"`) for security and privacy.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 預載僅保留 4 大核心連結
- **GIVEN** 使用者點擊「還原預設資料」或首次開啟網站
- **WHEN** 載入外部連結大廳
- **THEN** 畫面僅精準展示 4 個官方指定核心特教連結，無其他非必要連結。
