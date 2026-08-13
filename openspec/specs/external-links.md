# 外部連結與導向功能規格 (External Links Spec)

## Requirement Statements (EARS-style)

- **[REQ-LINK-01]** The system **SHALL** display the 4 core special education website links directly on the main Home View (`#home`).
- **[REQ-LINK-02]** The system **SHALL NOT** render a redundant "特教核心連結" link button in the top navigation bar.
- **[REQ-LINK-03]** The system **SHALL** pre-load ONLY the 4 official core portals: "教育部全國特教通報網", "全國教師在職進修網", "花蓮縣特殊教育資源網", and "教育部全國特殊教育資訊網-研習報名".
- **[REQ-LINK-04]** The system **SHALL** open external links in a new browser tab (`target="_blank" rel="noopener noreferrer"`).

## Scenarios (BDD Given/When/Then)

### Scenario 1: 首頁直接呈現核心連結
- **GIVEN** 使用者進入網站首頁 (`#home`)
- **WHEN** 畫面載入完成
- **THEN** 首頁直接包含 4 大特教核心官方連結卡片，且頂部導覽列無「特教核心連結」冗餘按鈕。
