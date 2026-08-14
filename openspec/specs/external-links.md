# 特教核心連結與手機導覽列功能規格 (External Links & Mobile Nav Spec)

## Requirement Statements (EARS-style)

- **[REQ-RWD-05]** On mobile screens (< 768px), the top navbar **SHALL** render the hamburger button (`#mobileToggleBtn`) with a minimum touch size of 48x48 pixels on the far right without horizontal overflow or clipping.
- **[REQ-RWD-06]** Expanding the mobile hamburger drawer **SHALL** present "首頁", "校內特教業務", and "管理控制台" items clearly.
- **[REQ-RWD-07]** Tapping "校內特教業務" in the mobile drawer **SHALL** navigate to `#internal` and collapse the drawer automatically.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 手機點開三條橫線進入校內特教業務
- **GIVEN** 使用者以手機開啟網站
- **WHEN** 點擊右上角三條橫線按鈕展開選單，並點擊「🔒 校內特教業務」
- **THEN** 選單自動平滑關閉，畫面瞬間切換至校內特教業務密碼輸入驗證版面。
