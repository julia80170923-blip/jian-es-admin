/**
 * 吉安國小特教行政網站 (Ji-an ES Special Education Admin App)
 * OpenSpec (Spec-Driven Development, SDD) Engine & Password Protection
 */

// 1. 吉安國小特教預載核心資料 (Presets - 4 大核心門戶)
const DEFAULT_PRESETS = {
  links: [
    {
      id: "link-core-101",
      title: "教育部全國特教通報網",
      url: "https://www.set.edu.tw",
      category: "行政公務系統",
      description: "全國特教學生資格通報、特教身分查詢、鑑定安置與公務填報。",
      icon: "shield-check",
      isPinned: true,
      order: 1
    },
    {
      id: "link-core-102",
      title: "全國教師在職進修資訊網",
      url: "https://www1.inservice.edu.tw/",
      category: "教學與研習平台",
      description: "特教法定研習時數報名、研習紀錄查詢與融合教育研習證明。",
      icon: "book-open",
      isPinned: true,
      order: 2
    },
    {
      id: "link-core-103",
      title: "花蓮縣特殊教育資源網",
      url: "https://special.hlc.edu.tw",
      category: "行政公務系統",
      description: "花蓮縣特教專團物理/職能/語言治療申請、心評與巡迴輔導業務門戶。",
      icon: "activity",
      isPinned: true,
      order: 3
    },
    {
      id: "link-core-104",
      title: "教育部全國特殊教育資訊網-研習報名",
      url: "https://special.moe.gov.tw/study.php",
      category: "教學與研習平台",
      description: "教育部全國特教研習、學術研討會與特教教師增能培訓報名門戶。",
      icon: "graduation-cap",
      isPinned: true,
      order: 4
    }
  ],
  pages: [
    {
      id: "page-sp-101",
      title: "115學年度資源班課程規劃與課表說明",
      slug: "resource-class-timetable",
      targetSection: "public",
      category: "資源班專區",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## 資源班課程規劃與特色

花蓮縣吉安國小資源班秉持「適性發展、個別化支援」之核心理念，為抽離與外掛課程學生提供最優質的特殊教育服務。

### 一、 服務對象與抽離科目
1. **國語文抽取/抽離班**：著重識字、閱讀理解與句型摘要。
2. **數學抽離班**：著重建構數學概念、應用題語意拆解與實作操作。
3. **學習策略與情緒行為輔導**：協助學生增進專注力、社會技巧與自我管理能力。

### 二、 115 學年度資源班上課守則
- 請依照課表時間於鐘響後 **3 分鐘內** 至資源班教室報到。
- 攜帶原班課本、資源班專用作業本與基本文具。
- 尊重同儕，遵守「專心聽、齊心學」之課堂規範。`
    },
    {
      id: "page-sp-102",
      title: "115學年度身心障礙學生轉介前介入觀察指引",
      slug: "referral-guidelines-teacher",
      targetSection: "teacher", // 🍎 導師專區
      category: "轉介與輔導",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## 身心障礙學生轉介前介入指引 (導師專區資源)

本指引提供吉安國小普通班導師參考實施。

### 一、 轉介前介入 6 大步驟
1. **導師觀察與初篩**：發現學生學習或行為適應明顯落後同儕時，記錄觀察行為表。
2. **實施普通教育輔導措施**：實施至少 **6 週** 之教學策略調整與輔導介入。
3. **輔導室個案研討**：填寫「轉介前介入觀察表」送交輔導室特教組。
4. **施測與心評排程**：特教團隊協助實施魏氏智力測驗或其他適性評量工具。
5. **校內鑑輔初審**：召開校內特教推行委員會 (特推會) 審查個案資料。
6. **送陳花蓮縣鑑輔會**：依花蓮縣政府規定時程送陳鑑定安置。`
    },
    {
      id: "page-sp-103",
      title: "IEP 個別化教育計畫會議流程與填寫指引",
      slug: "iep-guidelines",
      targetSection: "public",
      category: "IEP個案管理",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## IEP 個別化教育計畫 (Individualized Education Program)

依據《特殊教育法》第 28 條規定，學校應為每位經鑑輔會鑑定通過之特教學生訂定 IEP 個別化教育計畫。

### 一、 IEP 會議辦理時程
| 項目 | 辦理時間 | 參與人員 |
| --- | --- | --- |
| **期初 IEP 會議** | 開學後 **30 日內** 召開 | 導師、特教教師、家長、行政代表、專團人員 |
| **期末 IEP 檢討** | 學期結束前 **2 週** 完成 | 導師、特教教師、家長 |

### 二、 導師與科任教師協助重點
- **評量調整申請**：若學童需延長考試時間、報讀服務或放大試卷，請於 IEP 會議中確認並登錄。
- **轉介前介入**：普通班導師若發現潛在特殊需求學童，請先進行至少 6 週之轉介前介入觀察。`
    },
    {
      id: "page-sp-embed-104",
      title: "花蓮縣特教專團與專業服務系統 (網頁畫面內嵌範例)",
      slug: "hlc-special-ed-embed",
      targetSection: "public",
      category: "特教業務專區",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## 花蓮縣特教專團與專業服務系統 (即時內嵌視窗)

以下為「花蓮縣特殊教育資源網」即時內嵌網頁畫面：

<iframe src="https://special.hlc.edu.tw" width="100%" height="650px" style="width:100%; height:650px; border:1px solid #e2e8f0; border-radius:8px;"></iframe>`
    }
  ]
};

// 2. State & Storage Engine
class SpecialEdAppState {
  constructor() {
    this.STORAGE_KEY_PAGES = "jian_es_sp_pages";
    this.STORAGE_KEY_LINKS = "jian_es_sp_links";
    
    this.pages = this.loadPages();
    this.links = this.loadLinks();
    this.isUnlocked = sessionStorage.getItem("jian_sp_unlocked") === "true";
    this.isAdminUnlocked = sessionStorage.getItem("jian_sp_admin_unlocked") === "true";
  }

  loadPages() {
    const data = localStorage.getItem(this.STORAGE_KEY_PAGES);
    return data ? JSON.parse(data) : [...DEFAULT_PRESETS.pages];
  }

  loadLinks() {
    const data = localStorage.getItem(this.STORAGE_KEY_LINKS);
    return data ? JSON.parse(data) : [...DEFAULT_PRESETS.links];
  }

  savePages() {
    localStorage.setItem(this.STORAGE_KEY_PAGES, JSON.stringify(this.pages));
  }

  saveLinks() {
    localStorage.setItem(this.STORAGE_KEY_LINKS, JSON.stringify(this.links));
  }

  resetToPresets() {
    this.pages = [...DEFAULT_PRESETS.pages];
    this.links = [...DEFAULT_PRESETS.links];
    this.savePages();
    this.saveLinks();
  }

  unlockInternal(password) {
    if (password === "8523984") {
      this.isUnlocked = true;
      sessionStorage.setItem("jian_sp_unlocked", "true");
      return true;
    }
    return false;
  }

  unlockAdmin(password) {
    if (password === "8523984") {
      this.isAdminUnlocked = true;
      sessionStorage.setItem("jian_sp_admin_unlocked", "true");
      return true;
    }
    return false;
  }

  lockInternal() {
    this.isUnlocked = false;
    sessionStorage.removeItem("jian_sp_unlocked");
  }

  // Page CRUD
  addOrUpdatePage(pageData) {
    const index = this.pages.findIndex(p => p.id === pageData.id || (pageData.id === "" && p.slug === pageData.slug));
    if (index >= 0) {
      this.pages[index] = { ...this.pages[index], ...pageData, updatedAt: new Date().toISOString().split("T")[0] };
    } else {
      const newPage = {
        id: pageData.id || "page-custom-" + Date.now(),
        targetSection: pageData.targetSection || "public",
        updatedAt: new Date().toISOString().split("T")[0],
        ...pageData
      };
      this.pages.unshift(newPage);
    }
    this.savePages();
  }

  deletePage(id) {
    this.pages = this.pages.filter(p => p.id !== id);
    this.savePages();
  }

  // Link CRUD
  addOrUpdateLink(linkData) {
    const index = this.links.findIndex(l => l.id === linkData.id);
    if (index >= 0) {
      this.links[index] = { ...this.links[index], ...linkData };
    } else {
      const newLink = {
        id: linkData.id || "link-custom-" + Date.now(),
        order: this.links.length + 1,
        ...linkData
      };
      this.links.unshift(newLink);
    }
    this.saveLinks();
  }

  deleteLink(id) {
    this.links = this.links.filter(l => l.id !== id);
    this.saveLinks();
  }
}

// Global App Instance
const appState = new SpecialEdAppState();

// 3. UI Controller & Renderer
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initRouter();
  renderApp();
  initAdminModal();
  initInternalPasswordModule();
});

function initIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Router Manager (#home, #internal, #page/:slug)
function initRouter() {
  window.addEventListener("hashchange", handleRouteChange);
  handleRouteChange();
}

function handleRouteChange() {
  let hash = window.location.hash || "#home";

  if (hash === "#links") {
    hash = "#home";
    history.replaceState(null, "", "#home");
  }

  const routes = document.querySelectorAll(".view-section");
  const navItems = document.querySelectorAll(".nav-item");

  routes.forEach(view => view.classList.remove("active"));
  navItems.forEach(item => item.classList.remove("active"));

  if (hash.startsWith("#page/")) {
    const slug = hash.replace("#page/", "");
    renderDynamicPageView(slug);
    document.getElementById("viewPage").classList.add("active");
  } else if (hash === "#internal") {
    renderInternalView();
    document.getElementById("viewInternal").classList.add("active");
    const internalNav = document.querySelector('[data-route="internal"]');
    if (internalNav) internalNav.classList.add("active");
  } else {
    renderHomeView();
    document.getElementById("viewHome").classList.add("active");
    const homeNav = document.querySelector('[data-route="home"]');
    if (homeNav) homeNav.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 主渲染器
function renderApp() {
  renderNavDropdowns();
  renderHomeStats();
  renderHomePinnedLinks();
  renderHomePages();
  updateAdminTables();
}

function renderHomeView() {
  renderHomeStats();
  renderHomePinnedLinks();
  renderHomePages();
}

// 導覽列動態下拉選單 (選單點擊若有 externalUrl 則開啟外站)
function renderNavDropdowns() {
  const publicPublished = appState.pages.filter(p => p.isPublished && (p.targetSection === "public" || p.targetSection === "teacher" || !p.targetSection));
  const resourcePages = publicPublished.filter(p => p.category === "資源班專區");
  const iepPages = publicPublished.filter(p => p.category === "IEP個案管理");
  const generalPages = publicPublished.filter(p => p.category !== "資源班專區" && p.category !== "IEP個案管理");

  const buildItemsHtml = (pages) => {
    if (pages.length === 0) return `<span class="dropdown-item text-muted">暫無公開頁面</span>`;
    return pages.map(p => {
      const href = p.externalUrl ? p.externalUrl : `#page/${p.slug}`;
      const target = p.externalUrl ? 'target="_blank" rel="noopener noreferrer"' : '';
      const icon = p.externalUrl ? 'external-link' : 'file-text';
      return `
        <a href="${href}" ${target} class="dropdown-item">
          <i data-lucide="${icon}"></i> ${escapeHtml(p.title)}
        </a>
      `;
    }).join("");
  };

  document.getElementById("dropdownMenuResource").innerHTML = buildItemsHtml(resourcePages);
  document.getElementById("dropdownMenuIEP").innerHTML = buildItemsHtml(iepPages);
  document.getElementById("dropdownMenuGeneral").innerHTML = buildItemsHtml(generalPages);
  
  initIcons();
}

// 首頁數據統計
function renderHomeStats() {
  document.getElementById("statLinksCount").innerText = appState.links.length;
  document.getElementById("statTeacherPagesCount").innerText = appState.pages.filter(p => p.isPublished && p.targetSection === "teacher").length;
  document.getElementById("statPagesCount").innerText = appState.pages.filter(p => p.isPublished && (p.targetSection === "public" || !p.targetSection)).length;
  document.getElementById("statInternalPagesCount").innerText = appState.pages.filter(p => p.targetSection === "internal").length;
}

// 首頁 4 大核心特教門戶
function renderHomePinnedLinks() {
  const grid = document.getElementById("homePinnedLinksGrid");
  grid.innerHTML = appState.links.map(link => buildLinkCardHtml(link)).join("");
  initIcons();
}

// 首頁動態網頁渲染：分別渲染「導師專區 (teacher)」與「公開特教專區網頁 (public)」
function renderHomePages() {
  // 1. 動態渲染「導師專區網頁」
  const teacherPages = appState.pages.filter(p => p.isPublished && p.targetSection === "teacher");
  const teacherGrid = document.getElementById("homeTeacherPagesGrid");

  if (teacherPages.length === 0) {
    teacherGrid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1;">目前尚無歸類至導師專區之動態網頁。可於管理控制台新增網頁並選擇「導師專區」。</p>`;
  } else {
    teacherGrid.innerHTML = teacherPages.map(page => {
      const href = page.externalUrl ? page.externalUrl : `#page/${page.slug}`;
      const target = page.externalUrl ? 'target="_blank" rel="noopener noreferrer"' : '';
      const btnText = page.externalUrl ? '開啟目標網站 <i data-lucide="external-link"></i>' : '閱讀文章 <i data-lucide="chevron-right"></i>';

      return `
        <div class="page-card shadow-sm border-warning">
          <div class="page-card-header">
            <span class="badge badge-accent">🍎 導師專區</span>
            <h3 class="page-card-title">${escapeHtml(page.title)}</h3>
          </div>
          <p class="page-card-excerpt">${escapeHtml(cleanMarkdownExcerpt(page.content))}</p>
          <div class="page-card-meta">
            <span>更新：${page.updatedAt}</span>
            <a href="${href}" ${target} class="btn btn-outline btn-sm">${btnText}</a>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. 動態渲染「公開特教專區網頁」
  const publicPages = appState.pages.filter(p => p.isPublished && (p.targetSection === "public" || !p.targetSection));
  const publicGrid = document.getElementById("homePagesGrid");

  if (publicPages.length === 0) {
    publicGrid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1;">目前尚無公開發布之特教專區網頁。</p>`;
  } else {
    publicGrid.innerHTML = publicPages.map(page => {
      const href = page.externalUrl ? page.externalUrl : `#page/${page.slug}`;
      const target = page.externalUrl ? 'target="_blank" rel="noopener noreferrer"' : '';
      const btnText = page.externalUrl ? '開啟目標網站 <i data-lucide="external-link"></i>' : '閱讀全文 <i data-lucide="chevron-right"></i>';

      return `
        <div class="page-card shadow-sm">
          <div class="page-card-header">
            <span class="badge badge-primary">${escapeHtml(page.category)}</span>
            <h3 class="page-card-title">${escapeHtml(page.title)}</h3>
          </div>
          <p class="page-card-excerpt">${escapeHtml(cleanMarkdownExcerpt(page.content))}</p>
          <div class="page-card-meta">
            <span>更新：${page.updatedAt}</span>
            <a href="${href}" ${target} class="btn btn-outline btn-sm">${btnText}</a>
          </div>
        </div>
      `;
    }).join("");
  }

  initIcons();
}

function buildLinkCardHtml(link) {
  return `
    <div class="link-card shadow-sm">
      <div>
        <div class="link-card-header">
          <div class="link-card-title">
            <div class="link-icon-wrapper"><i data-lucide="${link.icon || 'external-link'}"></i></div>
            <h3>${escapeHtml(link.title)}</h3>
          </div>
          ${link.isPinned ? '<span class="badge badge-accent"><i data-lucide="pin" style="width:12px"></i> 核心門戶</span>' : ''}
        </div>
        <p class="link-description">${escapeHtml(link.description)}</p>
      </div>
      <div class="link-card-footer">
        <span class="badge">${escapeHtml(link.category)}</span>
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          開啟官方網站 <i data-lucide="external-link"></i>
        </a>
      </div>
    </div>
  `;
}

// 4. 校內密碼防護版面邏輯
function initInternalPasswordModule() {
  const form = document.getElementById("internalPasswordForm");
  const passInput = document.getElementById("internalPasswordInput");
  const relockBtn = document.getElementById("btnRelockInternal");

  form.onsubmit = (e) => {
    e.preventDefault();
    const inputVal = passInput.value.trim();
    if (appState.unlockInternal(inputVal)) {
      renderInternalView();
      alert("密碼驗證成功！已成功解鎖校內特教業務版面。");
    } else {
      alert("密碼錯誤！無法解鎖校內特教業務版面。");
      passInput.value = "";
      passInput.focus();
    }
  };

  relockBtn.onclick = () => {
    appState.lockInternal();
    renderInternalView();
    alert("已重新鎖定校內特教業務版面。");
  };
}

function renderInternalView() {
  const passwordCard = document.getElementById("internalPasswordCard");
  const unlockedContent = document.getElementById("internalUnlockedContent");
  const pagesGrid = document.getElementById("internalPagesGrid");

  if (appState.isUnlocked) {
    passwordCard.classList.add("hidden");
    unlockedContent.classList.remove("hidden");

    const internalPages = appState.pages.filter(p => p.targetSection === "internal");
    if (internalPages.length === 0) {
      pagesGrid.innerHTML = `<p class="text-muted" style="grid-column:1/-1;">目前尚無專屬於校內特教業務版面的網頁。可在管理控制台新增網頁並選擇「校內特教業務版面」。</p>`;
    } else {
      pagesGrid.innerHTML = internalPages.map(page => {
        const href = page.externalUrl ? page.externalUrl : `#page/${page.slug}`;
        const target = page.externalUrl ? 'target="_blank" rel="noopener noreferrer"' : '';
        const btnText = page.externalUrl ? '開啟外部檔案 <i data-lucide="external-link"></i>' : '開啟檔案 <i data-lucide="chevron-right"></i>';

        return `
          <div class="page-card shadow-sm border-warning">
            <div class="page-card-header">
              <span class="badge badge-accent"><i data-lucide="lock" style="width:12px;"></i> 校內業務</span>
              <h3 class="page-card-title">${escapeHtml(page.title)}</h3>
            </div>
            <p class="page-card-excerpt">${escapeHtml(cleanMarkdownExcerpt(page.content))}</p>
            <div class="page-card-meta">
              <span>更新：${page.updatedAt}</span>
              <a href="${href}" ${target} class="btn btn-outline btn-sm">${btnText}</a>
            </div>
          </div>
        `;
      }).join("");
    }
  } else {
    passwordCard.classList.remove("hidden");
    unlockedContent.classList.add("hidden");
  }

  initIcons();
}

// 5. 動態網頁視圖渲染
function renderDynamicPageView(slug) {
  const page = appState.pages.find(p => p.slug === slug);
  const container = document.getElementById("pageContentRenderer");

  if (!page) {
    document.getElementById("pageDisplayTitle").innerText = "404 - 找不到網頁";
    document.getElementById("pageBreadTitle").innerText = "未找到";
    document.getElementById("pageDisplayCategory").innerText = "系統提示";
    document.getElementById("pageDisplayDate").innerText = "-";
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i data-lucide="file-question" style="width:64px; height:64px; color: var(--text-muted);"></i>
        <h2 style="margin-top: 1rem;">抱歉，此特教網頁不存在或已被隱藏</h2>
        <a href="#home" class="btn btn-primary" style="margin-top: 1.5rem;">返回特教首頁</a>
      </div>
    `;
    initIcons();
    return;
  }

  if (page.targetSection === "internal" && !appState.isUnlocked) {
    document.getElementById("pageDisplayTitle").innerText = "🔒 密碼保護網頁";
    document.getElementById("pageBreadCategory").innerText = "校內特教業務";
    document.getElementById("pageBreadTitle").innerText = "權限受限";
    document.getElementById("pageDisplayCategory").innerText = "密碼防護中";
    document.getElementById("pageDisplayDate").innerText = page.updatedAt;

    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i data-lucide="shield-alert" style="width:64px; height:64px; color: var(--warning);"></i>
        <h2 style="margin-top: 1rem;">此頁面為校內特教業務密碼保護文件</h2>
        <p class="text-muted" style="margin-top: 0.5rem;">您必須先進入「校內特教業務版面」並輸入正確授權密碼解鎖後，方可閱讀本文檔。</p>
        <a href="#internal" class="btn btn-primary" style="margin-top: 1.5rem;"><i data-lucide="key"></i> 前往校內版面解鎖</a>
      </div>
    `;
    initIcons();
    return;
  }

  document.getElementById("pageDisplayTitle").innerText = page.title;
  document.getElementById("pageBreadCategory").innerText = page.targetSection === "internal" ? "校內特教業務" : (page.targetSection === "teacher" ? "導師專區" : page.category);
  document.getElementById("pageBreadTitle").innerText = page.title;
  document.getElementById("pageDisplayCategory").innerText = page.category;
  document.getElementById("pageDisplayDate").innerText = page.updatedAt;

  const sectionBadge = document.getElementById("pageDisplaySectionBadge");
  if (page.targetSection === "internal") {
    sectionBadge.innerHTML = `<i data-lucide="lock" style="width:12px"></i> 校內版面`;
    sectionBadge.classList.remove("hidden");
  } else if (page.targetSection === "teacher") {
    sectionBadge.innerHTML = `🍎 導師專區`;
    sectionBadge.classList.remove("hidden");
  } else {
    sectionBadge.classList.add("hidden");
  }

  if (window.marked) {
    container.innerHTML = marked.parse(page.content);
  } else {
    container.innerHTML = `<pre>${escapeHtml(page.content)}</pre>`;
  }

  document.getElementById("editCurrentPageBtn").onclick = () => {
    openAdminModalDirect("tabPages");
    editAdminPage(page.id);
  };

  initIcons();
}

// 6. 後台管理控制台 Modal (Admin Panel Controller - 密碼防護 8523984)
function initAdminModal() {
  const modal = document.getElementById("adminModal");
  const authModal = document.getElementById("adminAuthModal");
  const openBtn = document.getElementById("openAdminBtn");
  const closeBtn = document.getElementById("closeAdminBtn");
  const closeAuthBtn = document.getElementById("closeAdminAuthBtn");
  const authForm = document.getElementById("adminAuthForm");
  const adminPassInput = document.getElementById("adminPasswordInput");

  const triggerAdminModal = (defaultTab = "tabPages") => {
    if (appState.isAdminUnlocked) {
      openAdminModalDirect(defaultTab);
    } else {
      adminPassInput.value = "";
      authModal.classList.add("active");
      adminPassInput.focus();
    }
  };

  openBtn.onclick = () => triggerAdminModal();

  closeAuthBtn.onclick = () => authModal.classList.remove("active");
  authModal.onclick = (e) => {
    if (e.target === authModal) authModal.classList.remove("active");
  };

  authForm.onsubmit = (e) => {
    e.preventDefault();
    const val = adminPassInput.value.trim();
    if (appState.unlockAdmin(val)) {
      authModal.classList.remove("active");
      openAdminModalDirect();
    } else {
      alert("密碼錯誤！無法開啟管理控制台。");
      adminPassInput.value = "";
      adminPassInput.focus();
    }
  };

  closeBtn.onclick = () => modal.classList.remove("active");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
  };

  const tabBtns = modal.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.onclick = () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      modal.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    };
  });

  const homeSearchInput = document.getElementById("homeSearchInput");
  const homeSearchBtn = document.getElementById("homeSearchBtn");

  const executeHomeSearch = () => {
    const val = homeSearchInput.value.trim().toLowerCase();
    if (val) {
      const matchPage = appState.pages.find(p => p.title.toLowerCase().includes(val) || p.slug.toLowerCase().includes(val));
      if (matchPage) {
        window.location.hash = `#page/${matchPage.slug}`;
      } else {
        alert(`搜尋「${val}」：未找到完全匹配的標題，請參閱首頁導師專區與核心連結。`);
      }
    }
  };

  if (homeSearchBtn) homeSearchBtn.onclick = executeHomeSearch;
  if (homeSearchInput) homeSearchInput.onkeypress = (e) => {
    if (e.key === "Enter") executeHomeSearch();
  };

  document.getElementById("btnCreateNewPage").onclick = () => showPageForm();
  document.getElementById("btnCancelPageForm").onclick = () => hidePageForm();
  document.getElementById("btnCreateNewLink").onclick = () => showLinkForm();
  document.getElementById("btnCancelLinkForm").onclick = () => hideLinkForm();

  // 綁定 Markdown 工具列按鈕
  document.querySelectorAll(".md-btn").forEach(btn => {
    btn.onclick = () => {
      const textarea = document.getElementById("formPageContent");
      if (btn.id === "btnAddIframeCode") {
        // 點擊「內嵌網頁 (iframe)」按鈕，彈出網址輸入框
        const inputUrl = prompt("請輸入要內嵌呈現在網頁中的目標網站 URL：", "https://special.hlc.edu.tw");
        if (inputUrl && inputUrl.trim() !== "") {
          const iframeCode = `\n\n<iframe src="${inputUrl.trim()}" width="100%" height="650px" style="width:100%; height:650px; border:1px solid #e2e8f0; border-radius:8px;"></iframe>\n\n`;
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          const text = textarea.value;
          textarea.value = text.substring(0, start) + iframeCode + text.substring(end);
          textarea.focus();
        }
        return;
      }

      const prefix = btn.dataset.md;
      if (prefix) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        textarea.value = text.substring(0, start) + prefix + text.substring(end);
        textarea.focus();
      }
    };
  });

  document.getElementById("pageForm").onsubmit = (e) => {
    e.preventDefault();
    const targetSec = document.getElementById("formPageTargetSection").value;
    const extUrl = document.getElementById("formPageExternalUrl").value.trim();

    const pageData = {
      id: document.getElementById("formPageId").value,
      title: document.getElementById("formPageTitle").value.trim(),
      slug: document.getElementById("formPageSlug").value.trim().toLowerCase().replace(/\s+/g, "-"),
      targetSection: targetSec,
      externalUrl: extUrl,
      category: document.getElementById("formPageCategory").value,
      isPublished: document.getElementById("formPagePublished").checked,
      content: document.getElementById("formPageContent").value
    };

    appState.addOrUpdatePage(pageData);
    renderApp();
    hidePageForm();
    
    let targetName = "🌐 網站連結庫 / 公開特教專區";
    if (targetSec === "teacher") targetName = "🍎 導師專區";
    if (targetSec === "internal") targetName = "🔒 校內特教業務版面";
    
    alert(`特教網頁已成功儲存！發布位置：${targetName}。`);
  };

  document.getElementById("linkForm").onsubmit = (e) => {
    e.preventDefault();
    const linkData = {
      id: document.getElementById("formLinkId").value,
      title: document.getElementById("formLinkTitle").value.trim(),
      url: document.getElementById("formLinkUrl").value.trim(),
      category: document.getElementById("formLinkCategory").value,
      description: document.getElementById("formLinkDescription").value.trim(),
      isPinned: document.getElementById("formLinkPinned").checked
    };

    appState.addOrUpdateLink(linkData);
    renderApp();
    hideLinkForm();
    alert("核心特教連結已儲存！");
  };

  document.getElementById("btnExportBackup").onclick = exportBackupJson;
  document.getElementById("btnTriggerImport").onclick = () => document.getElementById("importJsonFile").click();
  document.getElementById("importJsonFile").onchange = importBackupJson;
  document.getElementById("btnResetPresets").onclick = () => {
    if (confirm("確定要將連結與網頁還原為吉安國小預載的 4 大核心門戶預設值嗎？")) {
      appState.resetToPresets();
      renderApp();
      alert("已成功還原為 4 大核心特教門戶與吉安國小預設值！");
    }
  };
}

function openAdminModalDirect(defaultTab = "tabPages") {
  const modal = document.getElementById("adminModal");
  modal.classList.add("active");
  updateAdminTables();

  const tabBtn = modal.querySelector(`[data-tab="${defaultTab}"]`);
  if (tabBtn) tabBtn.click();
}

function updateAdminTables() {
  document.getElementById("countAdminPages").innerText = appState.pages.length;
  document.getElementById("countAdminLinks").innerText = appState.links.length;

  const pagesBody = document.getElementById("adminPagesTableBody");
  pagesBody.innerHTML = appState.pages.map(page => {
    let sectionBadge = '<span class="badge badge-primary">🌐 公開專區</span>';
    if (page.targetSection === 'teacher') sectionBadge = '<span class="badge badge-accent">🍎 導師專區</span>';
    if (page.targetSection === 'internal') sectionBadge = '<span class="badge badge-warning"><i data-lucide="lock" style="width:12px"></i> 校內業務</span>';

    return `
      <tr>
        <td>
          <strong>${escapeHtml(page.title)}</strong>
          ${page.externalUrl ? '<br><span class="domain-text text-primary"><i data-lucide="external-link" style="width:12px;"></i> 外跳: ' + escapeHtml(page.externalUrl) + '</span>' : ''}
        </td>
        <td>${sectionBadge}</td>
        <td><code>${escapeHtml(page.slug)}</code></td>
        <td><span class="badge">${escapeHtml(page.category)}</span></td>
        <td>${page.isPublished ? '<span class="text-success"><i data-lucide="check-circle"></i> 發布中</span>' : '<span class="text-muted">草稿</span>'}</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="editAdminPage('${page.id}')"><i data-lucide="edit"></i> 編輯</button>
          <button class="btn btn-danger btn-sm" onclick="deleteAdminPage('${page.id}')"><i data-lucide="trash-2"></i> 刪除</button>
        </td>
      </tr>
    `;
  }).join("");

  const linksBody = document.getElementById("adminLinksTableBody");
  linksBody.innerHTML = appState.links.map(link => `
    <tr>
      <td><strong>${escapeHtml(link.title)}</strong></td>
      <td><a href="${link.url}" target="_blank" class="text-primary">${escapeHtml(link.url)}</a></td>
      <td><span class="badge">${escapeHtml(link.category)}</span></td>
      <td>${link.isPinned ? '<span class="text-accent">★ 核心門戶</span>' : '一般'}</td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editAdminLink('${link.id}')"><i data-lucide="edit"></i> 編輯</button>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminLink('${link.id}')"><i data-lucide="trash-2"></i> 刪除</button>
      </td>
    </tr>
  `).join("");

  initIcons();
}

function showPageForm(page = null) {
  document.getElementById("pageFormContainer").classList.remove("hidden");
  if (page) {
    document.getElementById("pageFormTitle").innerText = "編輯特教網頁";
    document.getElementById("formPageId").value = page.id;
    document.getElementById("formPageTitle").value = page.title;
    document.getElementById("formPageSlug").value = page.slug;
    document.getElementById("formPageTargetSection").value = page.targetSection || "public";
    document.getElementById("formPageExternalUrl").value = page.externalUrl || "";
    document.getElementById("formPageCategory").value = page.category;
    document.getElementById("formPagePublished").checked = page.isPublished;
    document.getElementById("formPageContent").value = page.content;
  } else {
    document.getElementById("pageFormTitle").innerText = "新增特教網頁";
    document.getElementById("pageForm").reset();
    document.getElementById("formPageId").value = "";
    document.getElementById("formPageTargetSection").value = "public";
    document.getElementById("formPageExternalUrl").value = "";
    document.getElementById("formPagePublished").checked = true;
  }
}

function hidePageForm() {
  document.getElementById("pageFormContainer").classList.add("hidden");
}

window.editAdminPage = function(id) {
  const page = appState.pages.find(p => p.id === id);
  if (page) showPageForm(page);
};

window.deleteAdminPage = function(id) {
  if (confirm("確定要刪除此特教網頁嗎？")) {
    appState.deletePage(id);
    renderApp();
  }
};

function showLinkForm(link = null) {
  document.getElementById("linkFormContainer").classList.remove("hidden");
  if (link) {
    document.getElementById("linkFormTitle").innerText = "編輯核心連結";
    document.getElementById("formLinkId").value = link.id;
    document.getElementById("formLinkTitle").value = link.title;
    document.getElementById("formLinkUrl").value = link.url;
    document.getElementById("formLinkCategory").value = link.category;
    document.getElementById("formLinkDescription").value = link.description || "";
    document.getElementById("formLinkPinned").checked = link.isPinned;
  } else {
    document.getElementById("linkFormTitle").innerText = "新增核心連結";
    document.getElementById("linkForm").reset();
    document.getElementById("formLinkId").value = "";
    document.getElementById("formLinkPinned").checked = true;
  }
}

function hideLinkForm() {
  document.getElementById("linkFormContainer").classList.add("hidden");
}

window.editAdminLink = function(id) {
  const link = appState.links.find(l => l.id === id);
  if (link) showLinkForm(link);
};

window.deleteAdminLink = function(id) {
  if (confirm("確定要刪除此核心連結嗎？")) {
    appState.deleteLink(id);
    renderApp();
  }
};

function exportBackupJson() {
  const backupData = {
    appName: "jian-es-special-ed-admin",
    version: "1.3.0",
    exportedAt: new Date().toISOString(),
    pages: appState.pages,
    links: appState.links
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `jian-es-special-ed-backup-${new Date().toISOString().split("T")[0]}.json`);
  downloadAnchor.click();
}

function importBackupJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (Array.isArray(data.pages) && Array.isArray(data.links)) {
        appState.pages = data.pages;
        appState.links = data.links;
        appState.savePages();
        appState.saveLinks();
        renderApp();
        alert("成功匯入 JSON 備份資料！所有公開/導師/校內網頁與核心連結已更新。");
      } else {
        alert("匯入失敗：JSON 格式無效。");
      }
    } catch (err) {
      alert("解析 JSON 失敗：" + err.message);
    }
  };
  reader.readAsText(file);
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function cleanMarkdownExcerpt(mdText) {
  if (!mdText) return "";
  return mdText.replace(/#+\s+/g, "").replace(/\*\*|\*/g, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").substring(0, 120) + "...";
}
