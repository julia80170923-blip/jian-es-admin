/**
 * 吉安國小特教行政網站 (Ji-an ES Special Education Admin App)
 * OpenSpec (Spec-Driven Development, SDD) Engine & Password Protection
 */

// 1. 吉安國小特教預載核心資料 (Presets - 4 大核心門戶 & 特教服務雲)
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
      id: "page-custom-exam-cloud",
      title: "特生考試服務服務雲",
      slug: "special-exam-service-cloud",
      targetSection: "internal", // 🔒 校內特教業務
      category: "資源班專區",
      externalUrl: "https://regal-tiramisu-ecaf8b.netlify.app/",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `點擊下方按鈕將自動跳轉開啟「特生考試服務服務雲」官方網站。`
    },
    {
      id: "page-sp-101",
      title: "115學年度資源班課程規劃與課表說明",
      slug: "resource-class-timetable",
      targetSection: "public",
      category: "資源班專區",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## 資源班課程規劃與特色

花蓮縣吉安國小資源班秉持「適性發展、個別化支援」之核心理念，為抽離與外掛課程學生提供最優質的特殊教育服務。`
    },
    {
      id: "page-sp-102",
      title: "115學年度身心障礙學生轉介前介入觀察指引",
      slug: "referral-guidelines-teacher",
      targetSection: "teacher", // 🍎 導師專區
      category: "轉介與輔導",
      isPublished: true,
      updatedAt: "2026-08-13",
      content: `## 身心障礙學生轉介前介入指引 (導師專區資源)`
    }
  ]
};

// 2. State & Storage Engine (雙重精準刪除防護 id + index)
class SpecialEdAppState {
  constructor() {
    this.STORAGE_KEY_PAGES = "jian_es_sp_pages";
    this.STORAGE_KEY_LINKS = "jian_es_sp_links";
    this.STORAGE_KEY_SNAPSHOT = "jian_es_sp_snapshot";

    this.lastDeletedPage = null;
    this.pages = this.loadPages();
    this.links = this.loadLinks();
    this.isUnlocked = sessionStorage.getItem("jian_sp_unlocked") === "true";
    this.isAdminUnlocked = sessionStorage.getItem("jian_sp_admin_unlocked") === "true";
  }

  loadPages() {
    const data = localStorage.getItem(this.STORAGE_KEY_PAGES);
    let loaded = data ? JSON.parse(data) : [...DEFAULT_PRESETS.pages];
    
    // 唯一 ID 自動修復機制
    let modified = false;
    const seenIds = new Set();

    loaded.forEach((page, idx) => {
      if (!page.id || page.id === "" || seenIds.has(page.id)) {
        page.id = "page-uuid-" + Date.now() + "-" + idx + "-" + Math.random().toString(36).substring(2, 6);
        modified = true;
      }
      seenIds.add(page.id);
    });

    if (modified || !data) {
      localStorage.setItem(this.STORAGE_KEY_PAGES, JSON.stringify(loaded));
    }

    return loaded;
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

  addOrUpdatePage(pageData) {
    const uniqueId = pageData.id || ("page-uuid-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6));
    const index = this.pages.findIndex(p => p.id === pageData.id && pageData.id !== "");

    if (index >= 0) {
      this.pages[index] = { ...this.pages[index], ...pageData, updatedAt: new Date().toISOString().split("T")[0] };
    } else {
      const newPage = {
        id: uniqueId,
        targetSection: pageData.targetSection || "public",
        updatedAt: new Date().toISOString().split("T")[0],
        ...pageData
      };
      this.pages.unshift(newPage);
    }
    this.savePages();
  }

  // 雙重精準刪除機制 (id 比對 ＋ index 雙重扣除，100% 成功刪除)
  deletePage(id, index) {
    // 1. 自動保存歷史備份快照
    localStorage.setItem(this.STORAGE_KEY_SNAPSHOT, JSON.stringify(this.pages));

    let targetIdx = -1;
    if (id && id !== "") {
      targetIdx = this.pages.findIndex(p => p.id === id);
    }
    if (targetIdx < 0 && typeof index === "number" && index >= 0 && index < this.pages.length) {
      targetIdx = index;
    }

    if (targetIdx >= 0) {
      this.lastDeletedPage = this.pages.splice(targetIdx, 1)[0];
      this.savePages();
      showUndoToast(this.lastDeletedPage.title);
    }
  }

  undoDeletePage() {
    if (this.lastDeletedPage) {
      this.pages.unshift(this.lastDeletedPage);
      this.savePages();
      const restoredTitle = this.lastDeletedPage.title;
      this.lastDeletedPage = null;
      hideUndoToast();
      renderApp();
      alert(`已成功復原刪除的「${restoredTitle}」！`);
    }
  }

  restoreSnapshot() {
    const snapshot = localStorage.getItem(this.STORAGE_KEY_SNAPSHOT);
    if (snapshot) {
      this.pages = JSON.parse(snapshot);
      this.savePages();
      renderApp();
      alert("已成功從歷史安全快照復原資料！");
    } else {
      alert("未找到近期的歷史安全快照。");
    }
  }

  // Link CRUD
  addOrUpdateLink(linkData) {
    const index = this.links.findIndex(l => l.id === linkData.id);
    if (index >= 0) {
      this.links[index] = { ...this.links[index], ...linkData };
    } else {
      const newLink = {
        id: linkData.id || ("link-custom-" + Date.now()),
        order: this.links.length + 1,
        ...linkData
      };
      this.links.unshift(newLink);
    }
    this.saveLinks();
  }

  deleteLink(id, index) {
    let targetIdx = this.links.findIndex(l => l.id === id);
    if (targetIdx < 0 && typeof index === "number" && index >= 0 && index < this.links.length) {
      targetIdx = index;
    }
    if (targetIdx >= 0) {
      this.links.splice(targetIdx, 1);
      this.saveLinks();
    }
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
  initUndoToast();
});

function initIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

let undoTimer = null;
function showUndoToast(title) {
  const toast = document.getElementById("toastUndo");
  const toastText = document.getElementById("toastUndoText");
  if (!toast) return;

  toastText.innerText = `已成功刪除：「${title}」`;
  toast.classList.remove("hidden");

  if (undoTimer) clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    hideUndoToast();
  }, 10000);
}

function hideUndoToast() {
  const toast = document.getElementById("toastUndo");
  if (toast) toast.classList.add("hidden");
}

function initUndoToast() {
  const btnUndo = document.getElementById("btnUndoDelete");
  if (btnUndo) {
    btnUndo.onclick = () => {
      appState.undoDeletePage();
    };
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

// 首頁動態網頁與網站名稱跳轉按鈕渲染
function renderHomePages() {
  const teacherPages = appState.pages.filter(p => p.isPublished && p.targetSection === "teacher");
  const teacherGrid = document.getElementById("homeTeacherPagesGrid");

  if (teacherPages.length === 0) {
    teacherGrid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1;">目前尚無歸類至導師專區之動態網頁。</p>`;
  } else {
    teacherGrid.innerHTML = teacherPages.map(page => buildPageCardHtml(page, true)).join("");
  }

  const publicPages = appState.pages.filter(p => p.isPublished && (p.targetSection === "public" || !p.targetSection));
  const publicGrid = document.getElementById("homePagesGrid");

  if (publicPages.length === 0) {
    publicGrid.innerHTML = `<p class="text-muted" style="grid-column: 1/-1;">目前尚無公開發布之特教專區網頁。</p>`;
  } else {
    publicGrid.innerHTML = publicPages.map(page => buildPageCardHtml(page, false)).join("");
  }

  initIcons();
}

function buildPageCardHtml(page, isTeacher = false) {
  const badgeClass = isTeacher ? 'badge-accent' : 'badge-primary';
  const badgeText = isTeacher ? '🍎 導師專區' : escapeHtml(page.category);
  const borderClass = isTeacher ? 'border-warning' : '';

  if (page.externalUrl) {
    return `
      <div class="page-card shadow-sm ${borderClass}">
        <div class="page-card-header">
          <span class="badge ${badgeClass}">${badgeText}</span>
          <h3 class="page-card-title">${escapeHtml(page.title)}</h3>
        </div>
        <p class="page-card-excerpt">${escapeHtml(cleanMarkdownExcerpt(page.content))}</p>
        <div>
          <a href="${page.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-redirect-target btn-block">
            <i data-lucide="external-link"></i> 前往【${escapeHtml(page.title)}】 ↗
          </a>
        </div>
        <div class="page-card-meta" style="margin-top:0.75rem;">
          <span>外跳連結服務</span>
          <span>更新：${page.updatedAt}</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-card shadow-sm ${borderClass}">
      <div class="page-card-header">
        <span class="badge ${badgeClass}">${badgeText}</span>
        <h3 class="page-card-title">${escapeHtml(page.title)}</h3>
      </div>
      <p class="page-card-excerpt">${escapeHtml(cleanMarkdownExcerpt(page.content))}</p>
      <div class="page-card-meta">
        <span>更新：${page.updatedAt}</span>
        <a href="#page/${page.slug}" class="btn btn-outline btn-sm">閱讀全文 <i data-lucide="chevron-right"></i></a>
      </div>
    </div>
  `;
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
      pagesGrid.innerHTML = `<p class="text-muted" style="grid-column:1/-1;">目前尚無專屬於校內特教業務版面的網頁/網站。</p>`;
    } else {
      pagesGrid.innerHTML = internalPages.map(page => buildPageCardHtml(page, false)).join("");
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

  let bodyHtml = "";
  if (page.externalUrl) {
    bodyHtml += `
      <div style="background: var(--primary-light); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; border: 1px solid #bee3f8; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <strong style="color: var(--primary); font-size: 1.05rem;">🔗 這是外跳服務網站：「${escapeHtml(page.title)}」</strong>
          <p class="text-muted" style="font-size: 0.85rem; margin-top: 0.25rem;">若點擊下方按鈕，瀏覽器將自動在分頁中開啟目標網站。</p>
        </div>
        <a href="${page.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i data-lucide="external-link"></i> 前往【${escapeHtml(page.title)}】網站 ↗
        </a>
      </div>
    `;
  }

  if (window.marked) {
    bodyHtml += marked.parse(page.content);
  } else {
    bodyHtml += `<pre>${escapeHtml(page.content)}</pre>`;
  }

  container.innerHTML = bodyHtml;

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
        if (matchPage.externalUrl) {
          window.open(matchPage.externalUrl, "_blank");
        } else {
          window.location.hash = `#page/${matchPage.slug}`;
        }
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

  document.querySelectorAll(".md-btn").forEach(btn => {
    btn.onclick = () => {
      const textarea = document.getElementById("formPageContent");
      if (btn.id === "btnAddIframeCode") {
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
    let rawSlug = document.getElementById("formPageSlug").value.trim();
    let extUrl = document.getElementById("formPageExternalUrl").value.trim();
    const pageTitle = document.getElementById("formPageTitle").value.trim();

    if (rawSlug.startsWith("http://") || rawSlug.startsWith("https://")) {
      if (!extUrl) {
        extUrl = rawSlug;
      }
      rawSlug = "site-" + Date.now().toString().slice(-6);
    } else {
      rawSlug = rawSlug.toLowerCase().replace(/\s+/g, "-");
    }

    const pageData = {
      id: document.getElementById("formPageId").value,
      title: pageTitle,
      slug: rawSlug,
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
    
    if (extUrl) {
      alert(`已成功儲存外部網站「${pageTitle}」！`);
    } else {
      alert(`特教網頁「${pageTitle}」已成功儲存。`);
    }
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
  document.getElementById("btnRestoreSnapshot").onclick = () => {
    appState.restoreSnapshot();
  };
  document.getElementById("btnResetPresets").onclick = () => {
    if (confirm("確定要還原預載門戶與預設特教網站嗎？")) {
      appState.resetToPresets();
      renderApp();
      alert("已成功還原預設值！");
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
  pagesBody.innerHTML = appState.pages.map((page, index) => {
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
          <button class="btn btn-danger btn-sm" onclick="deleteAdminPage('${page.id}', ${index})"><i data-lucide="trash-2"></i> 刪除</button>
        </td>
      </tr>
    `;
  }).join("");

  const linksBody = document.getElementById("adminLinksTableBody");
  linksBody.innerHTML = appState.links.map((link, index) => `
    <tr>
      <td><strong>${escapeHtml(link.title)}</strong></td>
      <td><a href="${link.url}" target="_blank" class="text-primary">${escapeHtml(link.url)}</a></td>
      <td><span class="badge">${escapeHtml(link.category)}</span></td>
      <td>${link.isPinned ? '<span class="text-accent">★ 核心門戶</span>' : '一般'}</td>
      <td>
        <button class="btn btn-outline btn-sm" onclick="editAdminLink('${link.id}')"><i data-lucide="edit"></i> 編輯</button>
        <button class="btn btn-danger btn-sm" onclick="deleteAdminLink('${link.id}', ${index})"><i data-lucide="trash-2"></i> 刪除</button>
      </td>
    </tr>
  `).join("");

  initIcons();
}

function showPageForm(page = null) {
  document.getElementById("pageFormContainer").classList.remove("hidden");
  if (page) {
    document.getElementById("pageFormTitle").innerText = "編輯特教網頁 / 網站";
    document.getElementById("formPageId").value = page.id;
    document.getElementById("formPageTitle").value = page.title;
    document.getElementById("formPageSlug").value = page.slug;
    document.getElementById("formPageTargetSection").value = page.targetSection || "public";
    document.getElementById("formPageExternalUrl").value = page.externalUrl || "";
    document.getElementById("formPageCategory").value = page.category;
    document.getElementById("formPagePublished").checked = page.isPublished;
    document.getElementById("formPageContent").value = page.content;
  } else {
    document.getElementById("pageFormTitle").innerText = "新增特教網頁 / 網站";
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

// 刪除按鈕雙重防護 (id + index，100% 精準刪除點擊的該列)
window.deleteAdminPage = function(id, index) {
  const page = appState.pages.find(p => p.id === id) || appState.pages[index];
  const nameStr = page ? `「${page.title}」` : "此項目";
  if (confirm(`確定要刪除 ${nameStr} 嗎？`)) {
    appState.deletePage(id, index);
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

window.deleteAdminLink = function(id, index) {
  const link = appState.links.find(l => l.id === id) || appState.links[index];
  const nameStr = link ? `「${link.title}」` : "此連結";
  if (confirm(`確定要刪除 ${nameStr} 嗎？`)) {
    appState.deleteLink(id, index);
    renderApp();
  }
};

function exportBackupJson() {
  const backupData = {
    appName: "jian-es-special-ed-admin",
    version: "1.6.0",
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
        alert("成功匯入 JSON 備份資料！所有網頁與核心連結已恢復。");
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
