# 特教核心連結與全裝置自適應規格 (External Links & RWD Spec)

## Requirement Statements (EARS-style)

- **[REQ-RWD-01]** The web application **SHALL** adapt seamlessly to all device screen sizes ranging from 320px up to 4K displays.
- **[REQ-RWD-02]** On screen widths less than 768px, the top navigation menu **SHALL** collapse into a touch-friendly hamburger button and slide-out mobile drawer.
- **[REQ-RWD-03]** All interactive buttons and link targets **SHALL** maintain a minimum touch area of 44x44 pixels for optimal mobile touch usability.
- **[REQ-RWD-04]** Embedded webpage `<iframe>` viewports **SHALL** scale fluidly based on screen height and width without causing horizontal page overflow.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 手機端選單展開與切換
- **GIVEN** 使用者以手機 (375px 寬度) 開啟網站
- **WHEN** 點擊頂部漢堡按鈕 (`#mobileToggleBtn`)
- **THEN** 側滑選單平滑展開，點擊「首頁」或「校內特教業務」時自動切換視圖並平滑收合選單。
