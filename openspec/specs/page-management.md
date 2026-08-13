# 動態網頁管理與安全驗證功能規格 (Page Management & Security Spec)

## Requirement Statements (EARS-style)

- **[REQ-PAGE-01]** The system **SHALL** provide a dedicated "導師專區" (Homeroom Teacher Section) on the Home View containing essential resources for general teachers.
- **[REQ-PAGE-02]** The system **SHALL** require password verification (`8523984`) when a user attempts to open the Admin Control Panel Modal.
- **[REQ-PAGE-03]** The system **SHALL NOT** display any explicit password hint text (such as "提示：預設密碼為吉安國小電話號碼 (8523984)") on the user interface.
- **[REQ-PAGE-04]** The system **SHALL** allow administrators to assign created dynamic pages to either the Public Section or Internal Special Ed Section.
- **[REQ-PAGE-05]** The system **SHALL** enforce password authentication (`8523984`) before granting access to the Internal Special Ed Section.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 進入管理控制台密碼驗證
- **GIVEN** 使用者點擊頂部導覽列「管理控制台」
- **WHEN** 系統彈出密碼輸入框，使用者輸入 `8523984` 並點擊確定
- **THEN** 管理控制台 Modal 成功開啟；若輸入錯誤則提示密碼錯誤並拒絕開啟。

### Scenario 2: 密碼提示文字隱藏
- **GIVEN** 使用者進入「校內特教業務版面」
- **WHEN** 畫面顯示密碼輸入卡片
- **THEN** 卡片下方不含有任何暗示或包含 `8523984` 之明文提示文字。
