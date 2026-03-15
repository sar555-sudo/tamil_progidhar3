// Smooth-scroll for in-page links (for nicer feel on title/card clicks)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const el = document.querySelector(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Filter buttons for pooja categories
const filterButtons = document.querySelectorAll(".filter-btn");
const poojaCards = document.querySelectorAll(".pooja-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    poojaCards.forEach((card) => {
      const cat = card.getAttribute("data-category");
      if (filter === "all" || filter === cat) {
        card.style.display = "";
        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(4px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 180);
      }
    });
  });
});

// Pooja detail data (Tamil descriptions)
const poojaDetails = {
  ganapathi: {
    title: "தொட்டிலிட்டு குழந்தைக்கு பெயரிடல்",
    subtitle: "தொடக்க வெற்றி, எல்லா திசைகளிலும் காப்பு",
    imageClass: "pooja-img-ganapathi",
    whenTitle: "பெயரிடும் சடங்கு எப்போது செய்யலாம்?",
    benefitsTitle: "சடங்கின் முக்கிய அம்சங்கள்:",
    instructionsTitle: "பெயர் தேர்வு & நடைமுறை:",
    when: [
      "அனைத்து நல்முழுத்த நேரம் கவனித்து செய்க.",
      "இச்சடங்கினை குழந்தை பிறந்த பத்தாம் நாளிலோ அல்லது அதன்மேல் வரும் அண்மை நாட்களில் ஒரு நல்ல நாளிலோ ஆற்றுதல் வேண்டும்." ,
      "அதாவது பத்தாம் நாள் நல்ல நாளாக அமைந்தால் அன்றே வைத்துக் கொள்ளலாம். இல்லையேல் அதற்கு அடுத்து உடனே வரும் நல்ல நாளில் வைத்துக் கொள்ளலாம். ",  
      " இதில் ஒற்றையாக வரும் நாள் இரட்டையாக வரும் நாள், ஆங்கில இரட்டிப்பு மாதம், தமிழ் இரட்டிப்பு மாதம் என்று தமிழ் நெறியில் கிடையாது. "
    ],
    benefits: [
      "ஒருவன் பிறந்தாலும் தீட்டு, மறைந்தாலும் தீட்டு, ஒரு பெண் மகவு பூப்பெய்தாலும் தீட்டு. இந்த தீட்டை தமிழர்கள் தமிழ் வழிபாடு ஆசிரியர் (தமிழ் புரோகிதர்) கொண்டு தான் கழிக்க வேண்டும். (தாங்களாகவே பசு கோமியத்தை இல்லத்தில் தெளித்து கொண்டு தீட்டு கழித்தல் முறையாகாது)  தீட்டு கழிக்க எக்காரணமும் கொண்டு பசுவின் கோமியம் பயன்படுத்த கூடாது. (இது ஒரு 5 அறிவு கொண்ட விலங்கின் கழிவு பொருள்)",
      "தீட்டு கழித்த பிறகு அம்மையப்பர் (சிவபெருமான், பார்வதி) கலசங்கள் நிறுவி எழுந்தருள செய்து வழிபாடு செய்து, அம்மையப்பருக்கு முன்பாக அரிசியில் தாய், தந்தை, ஆசிரியர் நல்ல தமிழ் பெயர் (தமிழ் அருளாளர்கள் அருளிய புனித நூல்களான பன்னிரு திருமுறை, திருப்புகழ், திரு அருட்பா, நாலாயிர திவ்யபிரபந்தம் ஆகியவற்றில் உள்ளது) தேர்ந்தெடுத்து எழுதி சூட்டவும்.",
      " குழந்தையின் காதில் தேர்ந்தெடுத்த பெயரை 3 முறை ஓதவும்.",
      " குழந்தையை தொட்டிலில் இடவும். தமிழ் தாலாட்டு பாடல்களை பாடவும். ",
      "குழந்தை பச்சிளங் குழந்தையாக இருப்பதாலும் தாய் அண்மையில் மகவு ஈட்டியதாலும் வேள்வி செய்யாமல் பெயர் சூட்டலாம், தவறில்லை. தாய் சேய் உடல் நலம் கருதி வேள்வி அமைத்து கொள்ளலாம். தீட்டு கழித்த பிறகும் இல்லத்தில் ரோசாநீர், தீர்த்தப்பொடி கலந்து தினமும் தெளிக்கவும்."
    ],
    instructions: [
      "தங்கள் குழந்தைக்கு பெயர் தேர்ந்தெடுக்க பஞ்சாங்கத்தில் உள்ள 4 எழுத்துகளை விட, இணையத்தில்(Nநுவு) தேடுவதை விட, எண்கணிதம் முறையை விட பல மடங்கு ஆற்றல் மிக்கது தமிழர்களின் புனித நூல்களில் உள்ள பெயர்கள். ",
      "276 தலங்களின் இறைவன் இறைவி பெயர்களும், 63 நாயன்மார்கள் பெயர்களும், சித்தர்களின் பெயர்களும் ஆற்றல் மிக்கது மற்றும் நவீன பெயர்கள். ",
      "இணையத்தில் வடமொழி பெயர்களை ஏற்றி சூழ்ச்சி செய்துள்ளார்கள். தமிழர்களே இணையத்தை நாடாதீர்கள் .",
      "தமிழனுக்கு அடையாளம் தமிழ் பெயர்களே. பிற சமயத்தினர் அவரகளுடைய புனித நூலில் உள்ள பெயர்களைத் தான் இன்றும் தேர்ந்தெடுக்கிறார்கள். "
    ]
  },
  gruhapravesam: {
    title: "மகவுக்கு உணவுட்டல்",
    subtitle: "புதிய இல்லத்தில் தெய்வ இருப்பு, காப்பு, குருபார்வை",
    imageClass: "pooja-img-gruhapravesam",
    whenTitle: "விளக்கம்:",
    benefitsTitle: "நாள் & நேரம்:",
    when: [
      "குழந்தைக்கு ஏறத்தாழ ஐந்தாவது திங்கள்கள் வரை தாய்ப்பால் உணவே போதுமானதாக இருக்கும். குழந்தையை திட உணவிற்கு ஆயத்தம் செய்தல் வேண்டும். புதிய வீடு கட்டி முடித்து, முதல்முறை குடியேறும் முன்.",
      "இதற்காகச் சிலர் கோயிலுக்கு கொண்டு சென்று அங்கே இறைவனுக்கு உணவை நிவேதித்து அதனை ஊட்டுவர். அந்த உணவை கோயில் குருக்களே சமைத்து எடுத்து வருவார். ",
      "நம் வீட்டுக் குழந்தைக்கு நம் வீட்டு உணவை இறைத் தொடர்போடு ஊட்டுவது தானே சிறப்பு.",
      "இச்சடங்கினை, நமது இல்லத்திலே அம்மையப்பர் முன்னிலையில் நம் இல்லத்தில் சமைக்கப்பட்ட உணவை மகவிற்கு ஊட்ட வேண்டும்."
    ],
    benefits: [
      "அனைத்து நல்முழுத்த நேரம் கவனித்து செய்க.",
      " இச்சடங்கினை குழந்தை பிறந்து 5 திங்கள்கள் நிறைவு ஆன பிறகு ஒரு நல்ல நாளில் ஆற்றுதல் வேண்டும். ஆங்கில இரட்டிப்பு மாதம், தமிழ் இரட்டிப்பு மாதம் என்று தமிழ் நெறியில் கிடையாது. ",
      ],
  },
  navagraha: {
    title: "நவகிரக ஹோமம் & சாந்தி",
    subtitle: "ஜாதக தோஷம் குறைப்பு, நவகிரக க்ருபை",
    imageClass: "pooja-img-navagraha",
    whenTitle: "நவகிரக ஹோமம் தேவையான சமயங்கள்:",
    benefitsTitle: "இந்த ஹோமத்தின் பலன்கள்:",
    instructionsTitle: "அன்று பின்பற்ற வேண்டிய வழிமுறை:",
    when: [
      "சனி / ராகு / கேது / சேவாய் போன்ற தோஷங்கள் ஜாதகத்தில் மிகுந்திருக்கும் போது.",
      "தொடர்ச்சியான தோல்வி, தடைகள், மனஅழுத்தம், வேலை இழப்பு போன்ற அனுபவங்கள் இருக்கும் போது.",
      "சந்திர மனநிலை பாதிப்பு, தூக்கம் குறைவு, நிதானம் இழப்பு போன்ற பிரச்சனைகள் தெரிந்தால்."
    ],
    benefits: [
      "கிரகங்களின் கூர்மையான ப்ரபாவம் மெல்ல மெல்ல சமநிலை அடையும்.",
      "சரியான நேரத்தில் சரியான வாய்ப்புகள் வந்து சேரும் அனுபவம் கிடைக்கும்.",
      "உடனடி மாற்றமாக மனஅழுத்தம் குறைவு, உள்ளார்ந்த அமைதி அதிகரிக்கும்."
    ],
    instructions: [
      "ஜாதகக் குண்டலி இருக்கும் பட்சத்தில், ஆலோசனைக்கு முன்பே பகிரலாம்.",
      "ஹோமம் செய்யும் நாளில் சாத்தியமானவரை சைவமாத்திரமே உண்ணவும்.",
      "பரிகாரத்துடன் சேர்த்து சுலபமான தானங்கள் (பிச்சைக்காரர், ஆலை, கோவில் முதலியன) பற்றி வழிகாட்டல் தரப்படும்."
    ]
  },
  lakshmi: {
    title: "கனக துர்கா / லட்சுமி ஹோமம்",
    subtitle: "செல்வ வளம், தொழில் வளர்ச்சி, கடன் சுமை குறைப்பு",
    imageClass: "pooja-img-lakshmi",
    whenTitle: "லட்சுமி ஹோமம் பரிந்துரைக்கும் நிலைகள்:",
    benefitsTitle: "செல்வம் / தொழில் வளர்ச்சிக்கு பலன்கள்:",
    instructionsTitle: "ஹோமத்திற்கு முன்னோட்ட தயார்:",
    when: [
      "நிதி தட்டுப்பாடு, அடிக்கடி கடன் வாங்க வேண்டிய நிலை உருவானிருந்தால்.",
      "வியாபாரம் சரியாக போகாமல், வருமானம் குறைந்து வருமானால்.",
      "புதிய தொழில் / ஷோரூம் / ஆஃபிஸ் ஆரம்பிப்பதற்கு முன் நல்ல தொடக்கம் வேண்டும் என்றால்."
    ],
    benefits: [
      "வருமான வழிகள் மெல்ல மெல்ல விரிவாகும் அனுபவம் கிடைக்கும்.",
      "செல்வத்தை சரியான இடத்தில் பயன்படுத்தும் புத்தி, விவேகம் கிடைக்கும்.",
      "கடன் சுமையிலிருந்து மெதுவாக விடுபடும் பாதை திறக்கும்."
    ],
    instructions: [
      "ஹோமத்திற்கு தேவையான தானியங்கள், நெய், கற்பூரம் முதலியவற்றின் பட்டியல் தனியாக அனுப்பப்படும்.",
      "தொழில் தொடர்பான குறிப்புகள், சவால்கள் இருந்தால் ஆலோசனை நேரத்தில் விரிவாக பகிரலாம்.",
      "வீட்டில் / ஆஃபிஸில் பூஜை நடக்கும் பகுதி சுத்தமாக, ஒளி நிறைந்ததாக இருக்க வேண்டும்."
    ]
  }
};

// Modal logic
const modalBackdrop = document.getElementById("poojaModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalWhenTitle = document.getElementById("modalWhenTitle");
const modalBenefitsTitle = document.getElementById("modalBenefitsTitle");
const modalInstructionsTitle = document.getElementById("modalInstructionsTitle");
const modalWhenSection = document.getElementById("modalWhenSection");
const modalBenefitsSection = document.getElementById("modalBenefitsSection");
const modalInstructionsSection = document.getElementById("modalInstructionsSection");
const modalWhen = document.getElementById("modalWhen");
const modalBenefits = document.getElementById("modalBenefits");
const modalInstructions = document.getElementById("modalInstructions");
const modalCloseBtn = document.querySelector(".modal-close");
const modalCallBtn = document.querySelector(".modal-call-btn");

function openModal(poojaId) {
  const data = poojaDetails[poojaId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle;

  // Set dynamic section titles (fallback to default hard-coded text if missing)
  if (modalWhenTitle) {
    modalWhenTitle.textContent =
      data.whenTitle || "இந்த வழிபாடு எப்போது செய்யலாம்?";
  }
  if (modalBenefitsTitle) {
    modalBenefitsTitle.textContent = data.benefitsTitle || "செய்முறை:";
  }
  if (modalInstructionsTitle) {
    modalInstructionsTitle.textContent =
      data.instructionsTitle || "பெயர் தேர்ந்தெடுப்பது எப்படி?";
  }

  // Ensure sections are visible (in case we later hide some conditionally)
  if (modalWhenSection) modalWhenSection.style.display = "";
  if (modalBenefitsSection) modalBenefitsSection.style.display = "";
  if (modalInstructionsSection) modalInstructionsSection.style.display = "";

  modalImage.className = "modal-image";
  if (data.imageClass) {
    modalImage.classList.add(data.imageClass);
  }

  // Clear previous list items safely
  [modalWhen, modalBenefits, modalInstructions].forEach((ul) => {
    if (ul) ul.innerHTML = "";
  });

  // Populate "when" points, if provided
  if (Array.isArray(data.when) && modalWhen) {
    data.when.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalWhen.appendChild(li);
    });
  }

  // Populate "benefits" points, if provided
  if (Array.isArray(data.benefits) && modalBenefits) {
    data.benefits.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalBenefits.appendChild(li);
    });
  }

  // Populate "instructions" points, if provided
  if (Array.isArray(data.instructions) && modalInstructions) {
    data.instructions.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalInstructions.appendChild(li);
    });
  }

  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modalBackdrop.classList.remove("active");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".view-details").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".pooja-card");
    const poojaId =
      btn.getAttribute("data-pooja-id") ||
      card?.getAttribute("data-pooja-id");
    if (poojaId) {
      openModal(poojaId);
    }
  });
});

modalCloseBtn.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop.classList.contains("active")) {
    closeModal();
  }
});

// Quick-call buttons: prefill form and scroll
const enquiryForm = document.getElementById("enquiryForm");
const poojaTypeSelect = document.getElementById("poojaType");

document.querySelectorAll(".quick-call").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const poojaName = btn.getAttribute("data-pooja-name") || "";
    const poojaId =
      btn.closest(".pooja-card")?.getAttribute("data-pooja-id") || "";

    if (poojaId && poojaTypeSelect) {
      poojaTypeSelect.value = poojaId;
    }

    if (enquiryForm) {
      enquiryForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const messageField = document.getElementById("message");
    if (messageField && !messageField.value) {
      messageField.value = poojaName
        ? `இந்த "${poojaName}" பூஜை பற்றி மேலும் அறிந்து ஆலோசனை பேச வேண்டும்.`
        : "பூஜை பற்றிய இலவச ஆலோசனை பேச வேண்டும்.";
    }
  });
});

// Enquiry form: simple front-end validation & thank-you message
const formSuccess = document.getElementById("formSuccess");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = enquiryForm.name.value.trim();
    const phone = enquiryForm.phone.value.trim();
    const city = enquiryForm.city.value.trim();

    if (!name || !phone || !city) {
      alert("தயவு செய்து பெயர், தொலைபேசி எண், இடம் ஆகிய கட்டாயமான புலங்களை நிரப்பவும்.");
      return;
    }

    if (formSuccess) {
      formSuccess.hidden = false;
    }

    enquiryForm.reset();

    if (poojaTypeSelect) {
      poojaTypeSelect.value = "";
    }
  });
}

// Year in footer
const yearSpan = document.getElementById("yearSpan");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

