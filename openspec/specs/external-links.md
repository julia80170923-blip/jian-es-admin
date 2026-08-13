# 特教核心連結與導覽列功能規格 (External Links & Navbar Spec)

## Requirement Statements (EARS-style)

- **[REQ-LINK-01]** The system top navigation bar **SHALL ONLY** display "首頁", "校內特教業務", and "管理控制台".
- **[REQ-LINK-02]** The system top navigation bar **SHALL NOT** contain dropdown menus for "資源班專區", "IEP個案管理", or "公開特教專區".
- **[REQ-LINK-03]** The Home view **SHALL** render the 4 Core Special Education Portals directly as pinned link cards.

## Scenarios (BDD Given/When/Then)

### Scenario 1: 導覽列極簡選單驗證
- **GIVEN** 訪客或教職員開啟網站
- **WHEN** 頂部導覽列載入完成
- **THEN** 導覽列僅顯示首頁、校內特教業務與管理控制台按鈕，不含有資源班專區、IEP個案管理或公開特教專區選單。
