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
    }else if (window.location.pathname.includes("maharastra")) {
      file = "maharastra.json";
    }else if (window.location.pathname.includes("odisha")) {
      file = "odisha.json";
    }else if (window.location.pathname.includes("telengana")) {
      file = "telengana.json";
    }else if (window.location.pathname.includes("westbengal")) {
      file = "westbengal.json";
    }else if (window.location.pathname.includes("wsa&n")) {
      file = "wsa&n.json";
    }else if (window.location.pathname.includes("wsap")) {
      file = "wsap.json";
    }else if (window.location.pathname.includes("wsg")) {
      file = "wsg.json";
    }else if (window.location.pathname.includes("wsj")) {
      file = "wsj.json";
    }else if (window.location.pathname.includes("wsj&k")) {
      file = "wsj&k.json";
    }else if (window.location.pathname.includes("wsl")) {
      file = "wsl.json";
    }else if (window.location.pathname.includes("wsm")) {
      file = "wsm.json";
    }else if (window.location.pathname.includes("wso")) {
      file = "wso.json";
    }else if (window.location.pathname.includes("wst")) {
      file = "wst";
    }else if (window.location.pathname.includes("wswb")) {
      file = "wswb.json";
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
      "kishtwar","kazinag","jh_np_heading","betla","ladakh_heading","hemis_link","mh_heading","mh_np1",
      "mh_np2","mh_np3","mh_np4","mh_np5","mh_np6","od_np_title","od_np_heading","od_np_1","od_np_2",
      "ts_heading","ts_np1","ts_np2","ts_np3","wb_np_title","wb_np_heading","wb_np_1","wb_np_2",
      "wb_np_3","wb_np_4","wb_np_5","wb_np_6","wsa_title","wsa_heading","wsa_1",
      "wsa_2","wsa_3","wsa_4","wsa_5","wsa_6","wsa_7","wsa_8","wsa_9","wsap_title","wsap_1","wsap_2","wsap_3",
      "wsap_4","wsap_5","wsap_6","wsap_7","wsap_8","wsap_9","wsap_10","wsap_11","wsap_12","wsap_13",
      "goa_ws_heading","goa_ws_1","goa_ws_2","goa_ws_3","goa_ws_4",
      "goa_ws_5","goa_ws_6","jh_ws_heading","jh_ws_1","jh_ws_2","jh_ws_3","jh_ws_4","jh_ws_5","jh_ws_6","jh_ws_7",
      "jh_ws_8","jh_ws_9","jh_ws_10","jh_ws_11","wildlife_jk_heading","wildlife_jk_1","wildlife_jk_2","wildlife_jk_3",
      "wildlife_jk_4","wildlife_jk_5","wildlife_jk_6","wildlife_jk_7","wildlife_jk_8","wildlife_jk_9","wildlife_jk_10",
      "wildlife_jk_11","wildlife_jk_12","wildlife_jk_13","wildlife_jk_14","ladakh_ws_heading","changthang",
      "karakoram","mh_ws_heading","mh_ws_1","mh_ws_2","mh_ws_3","mh_ws_4","mh_ws_5",
      "mh_ws_6","mh_ws_7","mh_ws_8","ws_od_heading","ws_od_1","ws_od_2","ws_od_3","ws_od_4","ws_od_5","ws_od_6",
      "ws_od_7","ws_od_8","ws_od_9","ws_od_10","ws_od_11","ws_od_12","ws_od_13","ws_od_14","ws_od_15","ws_od_16",
      "ws_od_17","ws_od_18","ws_od_19","wsts_heading","ts_1","ts_2","ts_3","ts_4","ts_5","ts_6","ts_7","ts_8","ts_9",
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
