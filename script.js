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
    let file = "lang.json";
    // Use separate file for state-specific pages
    if (window.location.pathname.includes("andaman")) {
      file = "andaman.json";
    } 
    else if (window.location.pathname.includes("andhrapradesh")) {
      file = "andhrapradesh.json";
    } 
    else if (window.location.pathname.includes("ban")) {
      file = "ban.json";
    }
    else if (window.location.pathname.includes("bap")) {
      file = "bap.json";
    }
    else if (window.location.pathname.includes("bkar")) {
      file = "bkar.json";
    }else if (window.location.pathname.includes("bmp")) {
      file = "bmp.json";
    }else if (window.location.pathname.includes("bodi")) {
      file = "bodi.json";
    }else if (window.location.pathname.includes("bsap")) {
      file = "bsap.json";
    }else if (window.location.pathname.includes("bsbi")) {
      file = "bsbi.json";
    }else if (window.location.pathname.includes("bsd")) {
      file = "bsd.json";
    }else if (window.location.pathname.includes("bsg")) {
      file = "bsg.json";
    }else if (window.location.pathname.includes("bsgu")) {
      file = "bsgu.json";
    }else if (window.location.pathname.includes("bshar")) {
      file = "bshar.json";
    }else if (window.location.pathname.includes("bshp")) {
      file = "bshp.json";
    }else if (window.location.pathname.includes("bsj")) {
      file = "bsj.json";
    }else if (window.location.pathname.includes("bsjk")) {
      file = "bsjk.json";
    }else if (window.location.pathname.includes("bsk")) {
      file = "bsk.json";
    }else if (window.location.pathname.includes("bskar")) {
      file = "bskar.json";
    }else if (window.location.pathname.includes("bsl")) {
      file = "bsl.json";
    }else if (window.location.pathname.includes("bsm")) {
      file = "bsm.json";
    }else if (window.location.pathname.includes("bsmah")) {
      file = "bsmah.json";
    }else if (window.location.pathname.includes("bsor")) {
      file = "bsor.json";
    }else if (window.location.pathname.includes("bsr")) {
      file = "bsr.json";
    }else if (window.location.pathname.includes("bstn")) {
      file = "bstn.json";
    }else if (window.location.pathname.includes("bsu")) {
      file = "bsu.json";
    }else if (window.location.pathname.includes("bsup")) {
      file = "bsup.json";
    }else if (window.location.pathname.includes("bswb")) {
      file = "bswb.json";
    }else if (window.location.pathname.includes("btn")) {
      file = "btn.json";
    }else if (window.location.pathname.includes("bu")) {
      file = "bu.json";
    }else if (window.location.pathname.includes("bwb")) {
      file = "bwb.json";
    }else if (window.location.pathname.includes("goa")) {
      file = "goa.json";
    }else if (window.location.pathname.includes("j&k")) {
      file = "j&k.json";
    }else if (window.location.pathname.includes("jharkhand")) {
      file = "jharkhand.json";
    }else if (window.location.pathname.includes("ladakh")) {
      file = "ladakh.json";
    }
    
const res = await fetch(file);

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
      "mission-heading", "mission-text","andaman_title","andaman_heading",
      "andaman_1","andaman_2","andaman_3","andaman_4","andaman_5",
      "andaman_6","andaman_7","andaman_8","andaman_9","np_ap_title","np_ap_1","np_ap_2","np_ap_3",
      "ban","gnbr","bap_title","bap","shbr","bkar","nbr","svbr","bmp","pbr","aabr","pbr2",
      "bodi","sbr","bsap_title","bs1","bs2","bs3","bs4","bs5","bs6","bs7",
      "bsbi_heading","kanwar","bdelhi","najafgarh","bsgoa_heading","salim_ali",
      "bsg","nal","thol","khij","por","okha","bsh1","bs1","bs2","bs3","bs4",
      "bshp_heading","bshp_1","bird_jh","udhwa","bkj","hokersar","haigam",
      "bsk_heading","bsk1","bsk2","bsk3","bsk4","bsk5","bsk_heading",
      "bsk1","bsk2","bsk3","bsk4","bsk5","bsk6","bsk7","bsk8","bslh","pitti","bitra",
      "bsm","lengteng","bs_heading","bs1","bs2","bs3","bs4","badi_2","bs1","bs2","bs3","bs4",
      "bsr_heading","bsr_1","bsr_2","bsr_3","bstn","vedanthangal","koonthankulam","vaduvoor","chitrangudi",
      "kanjirankulam","calimere","udayamarthandapuram","kariyapatti","bodu","asan","benog",
      "bsup_heading","bakhira","nawabganj","samaspur","sandi","sur","vijay","okhla","patna",
      "bswb_heading","bswb1","bswb2","bswb3","brtn","br1","br2","br3","br_uk","nanda",
      "brwb_heading","sundarban","darjeeling","goa_np_heading","goa_np_1","jk_np_heading","dachigam",
      "kishtwar","kazinag","jh_np_heading","betla","ladakh_heading","hemis_link"
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
