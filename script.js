let currentLanguage = "en";

// Load language on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  currentLanguage = savedLang;

  // If language dropdown exists (only on home page), attach listener
  const langSelect = document.getElementById("languageSelect");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      switchLanguage(lang);
    });
  }

  // Always apply language
  switchLanguage(currentLanguage);
  fetchWikiFact();
  setInterval(fetchWikiFact, 600000);
});

async function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("preferredLang", lang);

  try {
    const res = await fetch("lang.json");
    const data = await res.json();
    const t = data[lang];

    const keys = [
      "title", "home", "about", "fun_link", "contact_link", "post",
      "table_number", "table_state",
      "np_heading", "ws_heading", "bs_heading", "br_heading", "wr_heading",
      "fact_heading", "email_us", "np", "ws", "bs", "br","state_ap", "state_ap_count",
      "state_od", "state_od_count","state_mh", "state_mh_count","state_jh", "state_jh_count",
      "state_ts", "state_ts_count","state_wb", "state_wb_count","state_an", "state_an_count",
      "state_jk", "state_jk_count","state_ld", "state_ld_count","state_ga", "state_ga_count",
      "state_bi", "state_bi_count","state_dl", "state_dl_count","state_hr", "state_hr_count",
      "state_hp", "state_hp_count","state_mz", "state_mz_count","state_rj", "state_rj_count",
      "state_up", "state_up_count","state_gj", "state_gj_count","state_kl", "state_kl_count",
      "state_tn", "state_tn_count","state_ka", "state_ka_count","state_uk", "state_uk_count",
      "state_mp","state_mp_count","about-heading", "para1", "para2",
      "mission-heading", "mission-text"
   ];

    keys.forEach((key) => {
      const el = document.getElementById(key);
      if (el) el.textContent = t[key];
    });
  } catch (e) {
    console.error("Language load failed:", e);
  }

  fetchWikiFact(); // update fact if present
}

async function fetchWikiFact() {
  const langCode = currentLanguage || "en";
  try {
    const res = await fetch(`https://${langCode}.wikipedia.org/api/rest_v1/page/random/summary`);
    const data = await res.json();
    const fact = data.extract
      ? data.extract.split('. ')[0] + '.'
      : "Couldn’t find a fun fact this time!";
    const factEl = document.getElementById("fact");
    if (factEl) factEl.textContent = fact;
  } catch (e) {
    const factEl = document.getElementById("fact");
    if (factEl) factEl.textContent = "Sorry, no fact available right now.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll(".clickable-row");
  rows.forEach(row => {
    row.addEventListener("click", function () {
      const href = row.getAttribute("data-href");
      if (href) {
        window.location.href = href;
      }
    });
  });
});
