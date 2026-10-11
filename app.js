const packages = [
  {
    id: "basic-prenatal",
    name: "Basic Prenatal Visit",
    price: 250,
    priceLabel: "₱250",
    featured: false,
    includes: [
      "Maternal vital signs",
      "Weight monitoring",
      "Fetal heart rate monitoring",
      "Fundic height assessment",
      "Basic pregnancy assessment",
      "Health education",
    ],
  },
  {
    id: "prenatal-plus",
    name: "Prenatal Plus",
    price: 500,
    priceLabel: "₱500",
    featured: true,
    includes: [
      "Everything in Basic Prenatal Visit",
      "More comprehensive pregnancy counseling",
      "Nutrition education",
      "Birth preparation guidance",
      "Breastfeeding preparation",
      "Pregnancy danger-sign education",
    ],
  },
  {
    id: "prenatal-tetanus",
    name: "Prenatal + Tetanus Immunization",
    price: 750,
    priceLabel: "₱750",
    priceNote: "",
    featured: false,
    includes: [
      "+ vaccine cost if applicable",
      "Prenatal assessment",
      "Immunization history review",
      "Tetanus-containing vaccine administration when indicated",
      "Vaccine counseling",
      "Documentation",
      "Post-vaccination instructions",
    ],
  },
  {
    id: "postpartum",
    name: "Postpartum Home Visit",
    price: 250,
    priceLabel: "₱250",
    featured: false,
    includes: [
      "Maternal assessment",
      "Vital signs",
      "Postpartum education",
      "Breastfeeding support",
      "Newborn care guidance",
      "Warning-sign education",
    ],
  },
  {
    id: "new-mom",
    name: "New Mom Care Package",
    price: 450,
    priceLabel: "₱450",
    featured: false,
    includes: [
      "Prenatal/postpartum consultation",
      "Breastfeeding guidance",
      "Newborn care education",
      "Maternal self-care education",
      "Personalized questions and counseling",
    ],
  },
  {
    id: "child-vac-package-1",
    name: "Infant Essential Package",
    price: 1500,
    priceLabel: "₱1,500",
    featured: false,
    includes: [
      "BCG",
      "Hepatitis B",
      "OPV",
      "Pentavalent vaccine",
      "PCV",
      "IPV",
    ],
  },
  {
    id: "child-vac-package-2",
    name: "Infant Complete Package",
    price: 2500,
    priceLabel: "₱2,500",
    featured: false,
    includes: [
      "All vaccines in Essential Package",
      "Rotavirus vaccine",
      "Additional age-approriate doses",
      "Immunization record update",
      "Vaccination reminders",
    ],
  },
  {
    id: "child-vac-package-3",
    name: "Toddler Protection Package",
    price: 2000,
    priceLabel: "₱2,000",
    featured: false,
    includes: [
      "MMR",
      "Hepatitis A",
      "Age-appropriate booster doses",
      "Follow-up reminders",
    ],
  },
  {
    id: "child-vac-package-4",
    name: "Catch-Up Vaccination Package",
    price: 1500,
    priceLabel: "₱1,500",
    featured: false,
    includes: [
      "+ vaccine cost",
      "Immunization history assessment",
      "Identification of missed vaccines/doses",
      "Catch-up vaccination schedule",
      "Administration of required vaccines",
      "Follow-up reminders",
    ],
  },
];

const midwives = [
  {
    id: "midwife-a",
    name: "Ty, Evertt Joyce",
    initials: "TE",
    photo: "images/ty.jpg",
    credential: "Registered Midwife",
    cellphone: "09175520226",
    email: "heaven.and.air@gmail.com",
    services: [
      "Prenatal Care",
      "Postpartum Care",
      "Breastfeeding Support",
      "Prenatal Home Visit",
      "Birth Preparation Session",
      "Maternal Newborn Care Package",
    ],
    about:
      "Available for home-based prenatal and postpartum care, including breastfeeding support for mothers who need flexible scheduling.",
    // SAMPLE/DEMO service areas. Replace these PSGC city/municipality codes with the real areas this midwife serves.
    serviceAreas: [
      {
        cityCode: "1731500000",
        label: "City of Puerto Princesa",
        barangayCodes: ["*"],
      },
      { cityCode: "1705318000", label: "Roxas", barangayCodes: ["*"] },
      { cityCode: "1705315000", label: "Narra", barangayCodes: ["*"] },
    ],
  },
  {
    id: "midwife-b",
    name: "Abalos, Ivy Maricar",
    initials: "AI",
    photo: "images/ivz.jpg",
    credential: "Registered Midwife",
    cellphone: "09954789964",
    email: "ivymaricarabalos1210@gmail.com",
    services: [
      "Prenatal Care",
      "Birth Preparation",
      "First-Time Mother Support",
      "Newborn Care Guidance",
      "First-time Mother Consultation",
      "Prenatal Home Visit",
    ],
    about:
      "Supports prenatal home care, birth preparation, and first-time mothers who want additional guidance before delivery.",
    // SAMPLE/DEMO service areas.
    serviceAreas: [
      { cityCode: "1705301000", label: "Aborlan", barangayCodes: ["*"] },
      { cityCode: "1705302000", label: "Agutaya", barangayCodes: ["*"] },
      { cityCode: "1705303000", label: "Araceli", barangayCodes: ["*"] },
    ],
  },
  {
    id: "midwife-c",
    name: "Gabaldon, Jana Ishi",
    initials: "GJ",
    photo: "images/jash.jpg",
    credential: "Registered Midwife",
    cellphone: "09098704973",
    email: "missjashgabaldon17@gmail.com",
    services: [
      "Prenatal Care",
      "Postpartum Care",
      "Newborn Care Guidance",
      "Newborn Care Guidance",
      "First-time Mother Consultation",
      "Prenatal Home Visit",
    ],
    about:
      "Provides prenatal and postpartum home support with a focus on newborn-care guidance and maternal education.",
    // SAMPLE/DEMO service areas.
    serviceAreas: [
      { cityCode: "1705304000", label: "Balabac", barangayCodes: ["*"] },
      { cityCode: "1705305000", label: "Bataraza", barangayCodes: ["*"] },
      { cityCode: "1705306000", label: "Brooke's Point", barangayCodes: ["*"] },
    ],
  },
  {
    id: "midwife-d",
    name: "Iligan, Lykah Laurence",
    initials: "IL",
    photo: "images/lykz.jpg",
    credential: "Registered Midwife",
    cellphone: "09359614957",
    email: "lykahlaurence@gmail.com",
    services: [
      "Prenatal Care",
      "Birth Preparation",
      "First-Time Mother Support",
      "Newborn Care Guidance",
      "First-time Mother Consultation",
      "Prenatal Home Visit",
    ],
    about:
      "Supports prenatal home care, birth preparation, and first-time mothers who want additional guidance before delivery.",
    // SAMPLE/DEMO service areas.
    serviceAreas: [
      { cityCode: "1705307000", label: "Busuanga", barangayCodes: ["*"] },
      { cityCode: "1705308000", label: "Cagayancillo", barangayCodes: ["*"] },
      { cityCode: "1705309000", label: "Coron", barangayCodes: ["*"] },
    ],
  },
  {
    id: "midwife-e",
    name: "Carpio, Rachelle",
    initials: "RC",
    photo: "images/ezel.jpg",
    credential: "Registered Midwife",
    cellphone: "09947405659",
    email: "rachelleorubiacarpio@gmail.com",
    services: [
      "Prenatal Care",
      "Birth Preparation",
      "First-Time Mother Support",
      "Newborn Care Guidance",
      "First-time Mother Consultation",
      "Prenatal Home Visit",
    ],
    about:
      "Supports prenatal home care, birth preparation, and first-time mothers who want additional guidance before delivery.",
    // SAMPLE/DEMO service areas.
    serviceAreas: [
      { cityCode: "1705310000", label: "Cuyo", barangayCodes: ["*"] },
      { cityCode: "1705311000", label: "Dumaran", barangayCodes: ["*"] },
      { cityCode: "1705312000", label: "El Nido", barangayCodes: ["*"] },
    ],
  },
  {
    id: "midwife-f",
    name: "Najarro, Prince Noah",
    initials: "RC",
    photo: "images/noah.jpg",
    credential: "Registered Midwife",
    cellphone: "09777811903",
    email: "noahnajarro7@gmail.com",
    services: [
      "Prenatal Care",
      "Birth Preparation",
      "First-Time Mother Support",
      "Newborn Care Guidance",
      "First-time Mother Consultation",
      "Prenatal Home Visit",
    ],
    about:
      "Supports prenatal home care, birth preparation, and first-time mothers who want additional guidance before delivery.",
    // SAMPLE/DEMO service areas.
    serviceAreas: [
      { cityCode: "1705313000", label: "Linapacan", barangayCodes: ["*"] },
      { cityCode: "1705314000", label: "Magsaysay", barangayCodes: ["*"] },
      { cityCode: "1705315000", label: "Narra", barangayCodes: ["*"] },
    ],
  },
];

const PSGC_API = "https://psgc.cloud/api/v2";
const locationState = {
  regionCities: [],
  availableMidwives: [],
};

const partnerLocationState = {
  regionCities: [],
};

const PAYMENT_SPLIT = {
  midwife: 0.8,
  company: 0.2,
};

const $ = (id) => document.getElementById(id);
const peso = (amount) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);

function escapeHTML(value = "") {
  return String(value).replace(
    /[&<>'"]/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#039;",
        '"': "&quot;",
      })[char],
  );
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(
    () => toast.classList.add("hidden"),
    2800,
  );
}

function renderPackages() {
  $("packageGrid").innerHTML = packages
    .map(
      (pkg) => `
    <article class="package-card ${pkg.featured ? "featured" : ""}">
      <span class="eyebrow">${pkg.featured ? "POPULAR HOME-VISIT OPTION" : "HERCARE PACKAGE"}</span>
      <h3>${pkg.name}</h3>
      <div class="price">${pkg.priceLabel}${pkg.priceNote ? `<small>${pkg.priceNote}</small>` : ""}</div>
      <ul>${pkg.includes.map((item) => `<li>${item}</li>`).join("")}</ul>
      <button class="btn ${pkg.featured ? "btn-primary" : "btn-soft"} choose-package" type="button" data-package="${pkg.id}">Choose package</button>
    </article>
  `,
    )
    .join("");

  $("packageChoices").innerHTML = packages
    .map(
      (pkg) => `
    <button class="package-choice" type="button" data-package="${pkg.id}" aria-pressed="false">
      <strong>${pkg.name}</strong>
      <span>${pkg.priceLabel}${pkg.priceNote ? ` • ${pkg.priceNote}` : ""}</span>
    </button>
  `,
    )
    .join("");

  document.querySelectorAll(".choose-package").forEach((button) => {
    button.addEventListener("click", () => {
      selectPackage(button.dataset.package);
      $("booking").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".package-choice").forEach((button) => {
    button.addEventListener("click", () =>
      selectPackage(button.dataset.package),
    );
  });
}

function selectPackage(id) {
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return;
  $("packageSelect").value = id;
  document.querySelectorAll(".package-choice").forEach((button) => {
    const active = button.dataset.package === id;
    button.classList.toggle("selected", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  updateBookingSummary();
}

function renderMidwives() {
  $("midwifeGrid").innerHTML = midwives
    .map(
      (midwife) => `
    <article class="midwife-card">
      <div class="midwife-head">
        <img
          class="midwife-photo"
          src="${midwife.photo}"
          alt="${midwife.name}"
        >        
        <div><h3>${midwife.name}</h3><div class="sub">${midwife.credential}</div></div>
      </div>
      <div class="tag-row">${midwife.services.map((service) => `<span class="tag">${service}</span>`).join("")}</div>
      <div class="availability"><strong>Available for:</strong><br>${midwife.services.join(" • ")}</div>
      <div class="coverage-line"><strong>Sample service area:</strong><br>${midwife.serviceAreas.map((area) => area.label).join(" • ")}</div>
      <div class="midwife-actions">
        <button class="btn btn-outline view-profile" type="button" data-midwife="${midwife.id}">View Profile</button>
        <button class="btn btn-soft choose-midwife" type="button" data-midwife="${midwife.id}">Choose Midwife</button>
      </div>
    </article>
  `,
    )
    .join("");

  $("midwifeSelect").innerHTML =
    '<option value="">Choose your location first</option>';
  $("midwifeSelect").disabled = true;

  document.querySelectorAll(".view-profile").forEach((button) => {
    button.addEventListener("click", () => openProfile(button.dataset.midwife));
  });
  document.querySelectorAll(".choose-midwife").forEach((button) => {
    button.addEventListener("click", () => {
      $("booking").scrollIntoView({ behavior: "smooth", block: "start" });
      if (!$("barangaySelect")?.value) {
        showToast(
          "Choose your home-visit location first so HerCare can check this midwife\'s coverage.",
        );
        return;
      }
      const available = locationState.availableMidwives.some(
        (midwife) => midwife.id === button.dataset.midwife,
      );
      if (!available) {
        showToast(
          "This midwife is not configured for the selected location. Please choose an available midwife.",
        );
        return;
      }
      $("midwifeSelect").value = button.dataset.midwife;
      updateMidwifeInfo();
    });
  });
}

function openProfile(id) {
  const midwife = midwives.find((m) => m.id === id);
  if (!midwife) return;
  $("profileContent").innerHTML = `
    <div class="midwife-head" style="margin:8px 0 16px">
      <img
        class="midwife-photo profile-photo"
        src="${midwife.photo}"
        alt="${midwife.name}"
      >
      <div><h2 id="profileTitle">${midwife.name}</h2><p class="profile-meta">${midwife.credential}<br>${midwife.email}<br>${midwife.cellphone}</p></div>
    </div>
    <p>${midwife.about}</p>
    <strong>Available services</strong>
    <ul class="profile-list">${midwife.services.map((service) => `<li>${service}</li>`).join("")}</ul>
    <strong>Configured service areas</strong>
    <ul class="profile-list">${midwife.serviceAreas.map((area) => `<li>${area.label}</li>`).join("")}</ul>
    <button class="btn btn-primary btn-full" type="button" id="profileChoose">Choose ${midwife.name}</button>
  `;
  $("profileModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $("profileChoose").addEventListener("click", () => {
    closeProfile();
    $("booking").scrollIntoView({ behavior: "smooth", block: "start" });
    if (!$("barangaySelect")?.value) {
      showToast(
        "Choose your home-visit location first to check whether this midwife serves your area.",
      );
      return;
    }
    if (
      !locationState.availableMidwives.some((item) => item.id === midwife.id)
    ) {
      showToast(
        "This midwife is not available in the selected city/municipality.",
      );
      return;
    }
    $("midwifeSelect").value = midwife.id;
    updateMidwifeInfo();
  });
}

function closeProfile() {
  $("profileModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function psgcCode(item) {
  return String(item?.code ?? item?.psgc_code ?? item?.id ?? "");
}

function psgcName(item) {
  return String(item?.name ?? item?.geographic_name ?? item?.label ?? "");
}

function sortByName(items) {
  return [...items].sort((a, b) =>
    psgcName(a).localeCompare(psgcName(b), "en-PH"),
  );
}

async function fetchPSGC(path) {
  const response = await fetch(`${PSGC_API}${path}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok)
    throw new Error(`Philippine location service returned ${response.status}.`);
  const payload = await response.json();
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function fillSelect(select, items, placeholder) {
  select.innerHTML =
    `<option value="">${escapeHTML(placeholder)}</option>` +
    sortByName(items)
      .map(
        (item) =>
          `<option value="${escapeHTML(psgcCode(item))}">${escapeHTML(psgcName(item))}</option>`,
      )
      .join("");
  select.disabled = false;
}

function resetSelect(select, placeholder, disabled = true) {
  select.innerHTML = `<option value="">${escapeHTML(placeholder)}</option>`;
  select.disabled = disabled;
  select.classList.remove("validation-error");
}

function selectedOptionText(id) {
  const select = $(id);
  if (!select || !select.value) return "";
  return select.options[select.selectedIndex]?.text || "";
}

function selectedLocation() {
  return {
    regionCode: $("regionSelect").value,
    region: selectedOptionText("regionSelect"),
    provinceCode: $("provinceSelect").value,
    province: selectedOptionText("provinceSelect"),
    cityMunicipalityCode: $("cityMunicipalitySelect").value,
    cityMunicipality: selectedOptionText("cityMunicipalitySelect"),
    barangayCode: $("barangaySelect").value,
    barangay: selectedOptionText("barangaySelect"),
  };
}

function selectedLocationText() {
  const location = selectedLocation();
  if (
    !location.regionCode ||
    !location.cityMunicipalityCode ||
    !location.barangayCode
  )
    return "Not selected";
  return [
    `Barangay ${location.barangay}`,
    location.cityMunicipality,
    location.province || null,
    location.region,
  ]
    .filter(Boolean)
    .join(", ");
}

function midwifeCoversLocation(midwife, cityCode, barangayCode) {
  return (midwife.serviceAreas || []).some((area) => {
    if (String(area.cityCode) !== String(cityCode)) return false;
    const barangays = area.barangayCodes || ["*"];
    return (
      barangays.includes("*") ||
      barangays.map(String).includes(String(barangayCode))
    );
  });
}

function renderAvailableMidwives() {
  const cityCode = $("cityMunicipalitySelect").value;
  const barangayCode = $("barangaySelect").value;
  const cityName = selectedOptionText("cityMunicipalitySelect");
  const barangayName = selectedOptionText("barangaySelect");

  if (!cityCode || !barangayCode) {
    locationState.availableMidwives = [];
    $("areaMidwifeList").innerHTML =
      "<p>Select your city/municipality and barangay first to see HerCare midwives serving that area.</p>";
    resetSelect($("midwifeSelect"), "Choose your location first", true);
    $("selectedMidwife").textContent =
      "Midwife options will appear after your location is selected.";
    updateBookingSummary();
    return;
  }

  locationState.availableMidwives = midwives.filter((midwife) =>
    midwifeCoversLocation(midwife, cityCode, barangayCode),
  );

  if (!locationState.availableMidwives.length) {
    $("areaMidwifeList").innerHTML = `
      <div class="no-coverage-message">
        <strong>No HerCare midwife is currently configured for ${escapeHTML(`Barangay ${barangayName}, ${cityName}`)}.</strong>
        <span>You may choose another location or ask HerCare whether coverage can be arranged.</span>
      </div>`;
    resetSelect($("midwifeSelect"), "No midwife available in this area", true);
    $("selectedMidwife").textContent =
      "No available midwife is configured for this location.";
    updateBookingSummary();
    return;
  }

  $("areaMidwifeList").innerHTML = locationState.availableMidwives
    .map(
      (midwife) => `
    <div class="area-midwife-option">
      <div class="avatar small-avatar">${escapeHTML(midwife.initials)}</div>
      <div><strong>${escapeHTML(midwife.name)}</strong><span>${escapeHTML(midwife.credential)} • ${escapeHTML(midwife.services.join(" • "))}</span></div>
      <span class="area-available-badge">Available here</span>
    </div>`,
    )
    .join("");

  $("midwifeSelect").innerHTML = `
    <option value="">Select an available midwife</option>
    ${locationState.availableMidwives.map((midwife) => `<option value="${escapeHTML(midwife.id)}">${escapeHTML(midwife.name)} — ${escapeHTML(midwife.credential)}</option>`).join("")}
    <option value="any">Assign me any available HerCare midwife</option>`;
  $("midwifeSelect").disabled = false;

  if (
    !locationState.availableMidwives.some(
      (midwife) => midwife.id === $("midwifeSelect").value,
    )
  ) {
    $("midwifeSelect").value = "";
  }
  $("selectedMidwife").innerHTML =
    `<strong>${locationState.availableMidwives.length} midwife${locationState.availableMidwives.length === 1 ? "" : "s"} available</strong><br>for Barangay ${escapeHTML(barangayName)}, ${escapeHTML(cityName)}.`;
  updateBookingSummary();
}

/**
 * Copy of documentation can be found below of this script or
 * see the online docs here: https://psgc.cloud/api-docs/v2
 */

async function loadRegions() {
  const regionSelect = $("regionSelect");
  try {
    $("locationStatus").textContent = "Loading Philippine regions…";
    const regions = await fetchPSGC("/regions");
    fillSelect(regionSelect, regions, "Select region");
    $("locationStatus").textContent =
      "Select a region, then choose the province (if applicable), city/municipality, and barangay.";
  } catch (error) {
    resetSelect(regionSelect, "Could not load regions", true);
    $("locationStatus").innerHTML =
      `<strong>Location list unavailable.</strong> ${escapeHTML(error.message)} Check your internet connection and reload the page.`;
  }
}

// provinces, cites-municipalities from MIMAROPA Region (regionCode: 1700000000):
// provinces = https://psgc.cloud/api/regions/1700000000/provinces/
// cities = https://psgc.cloud/api/regions/1700000000/cities-municipalities/
async function handleRegionChange() {
  const regionCode = $("regionSelect").value;
  resetSelect($("provinceSelect"), "Select a region first", true);
  resetSelect($("cityMunicipalitySelect"), "Select a region first", true);
  resetSelect($("barangaySelect"), "Select a city or municipality first", true);
  renderAvailableMidwives();
  if (!regionCode) {
    $("locationStatus").textContent = "Choose a region to begin.";
    updateBookingSummary();
    return;
  }

  $("locationStatus").textContent =
    "Loading provinces and cities/municipalities…";
  try {
    const [provinces, cities] = await Promise.all([
      fetchPSGC(`/regions/${encodeURIComponent(regionCode)}/provinces`),
      fetchPSGC(
        `/regions/${encodeURIComponent(regionCode)}/cities-municipalities`,
      ),
    ]);
    locationState.regionCities = cities;

    if (provinces.length) {
      fillSelect($("provinceSelect"), provinces, "Optional: choose province");
    } else {
      resetSelect($("provinceSelect"), "Not applicable in this region", true);
    }
    fillSelect(
      $("cityMunicipalitySelect"),
      cities,
      "Select city / municipality",
    );
    $("locationStatus").textContent =
      "Choose a province to narrow the list, or select a city/municipality directly.";
  } catch (error) {
    $("locationStatus").innerHTML =
      `<strong>Could not load this region.</strong> ${escapeHTML(error.message)}`;
  }
  updateBookingSummary();
}

// provinces from MIMAROPA Region = https://psgc.cloud/api/regions/1700000000/provinces/
// cities & municipalities from Palawan (provinceCode = 1705300000):
// https://psgc.cloud/api/provinces/1705300000/cities-municipalities/
async function handleProvinceChange() {
  const provinceCode = $("provinceSelect").value;
  resetSelect($("barangaySelect"), "Select a city or municipality first", true);
  renderAvailableMidwives();
  try {
    if (!provinceCode) {
      fillSelect(
        $("cityMunicipalitySelect"),
        locationState.regionCities,
        "Select city / municipality",
      );
      $("locationStatus").textContent =
        "Showing all cities and municipalities in the selected region.";
    } else {
      $("locationStatus").textContent =
        "Loading cities and municipalities in this province…";
      const cities = await fetchPSGC(
        `/provinces/${encodeURIComponent(provinceCode)}/cities-municipalities`,
      );
      fillSelect(
        $("cityMunicipalitySelect"),
        cities,
        "Select city / municipality",
      );
      $("locationStatus").textContent = "Now choose your city or municipality.";
    }
  } catch (error) {
    $("locationStatus").innerHTML =
      `<strong>Could not load cities/municipalities.</strong> ${escapeHTML(error.message)}`;
  }
  updateBookingSummary();
}

// barangays from City of Puerto Princesa (cityCode = 1731500000):
// https://psgc.cloud/api/cities-municipalities/1731500000/barangays
async function handleCityMunicipalityChange() {
  const cityCode = $("cityMunicipalitySelect").value;
  resetSelect($("barangaySelect"), "Select a city or municipality first", true);
  renderAvailableMidwives();
  if (!cityCode) {
    $("locationStatus").textContent = "Choose your city or municipality.";
    updateBookingSummary();
    return;
  }

  $("locationStatus").textContent = "Loading barangays…";
  try {
    const barangays = await fetchPSGC(
      `/cities-municipalities/${encodeURIComponent(cityCode)}/barangays`,
    );
    fillSelect($("barangaySelect"), barangays, "Select barangay");
    $("locationStatus").textContent =
      `Choose your barangay in ${selectedOptionText("cityMunicipalitySelect")}.`;
  } catch (error) {
    $("locationStatus").innerHTML =
      `<strong>Could not load barangays.</strong> ${escapeHTML(error.message)}`;
  }
  updateBookingSummary();
}

function handleBarangayChange() {
  const locationText = selectedLocationText();
  if ($("barangaySelect").value) {
    $("locationStatus").innerHTML =
      `<strong>Home-visit area:</strong> ${escapeHTML(locationText)}`;
  }
  renderAvailableMidwives();
  updateBookingSummary();
}

function setupLocationSelectors() {
  $("regionSelect").addEventListener("change", handleRegionChange);
  $("provinceSelect").addEventListener("change", handleProvinceChange);
  $("cityMunicipalitySelect").addEventListener(
    "change",
    handleCityMunicipalityChange,
  );
  $("barangaySelect").addEventListener("change", handleBarangayChange);
  loadRegions();
}

function updateMidwifeInfo() {
  const value = $("midwifeSelect").value;
  if (!value) {
    $("selectedMidwife").textContent =
      "Select a midwife to see her available services.";
  } else if (value === "any") {
    $("selectedMidwife").innerHTML =
      "<strong>Any available HerCare midwife</strong><br>HerCare will assign an available midwife based on the selected schedule, service, and location.";
  } else {
    const midwife = midwives.find((m) => m.id === value);
    $("selectedMidwife").innerHTML =
      `<strong>${midwife.name}</strong> • ${midwife.services.join(" • ")}`;
  }
  updateBookingSummary();
}

function localDateISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function configureDateField() {
  const today = new Date();
  const max = new Date(today);
  max.setDate(max.getDate() + 60);
  $("dateSelect").min = localDateISO(today);
  $("dateSelect").max = localDateISO(max);
}

function formatDate(value) {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en-PH", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

function selectedPackage() {
  return packages.find((pkg) => pkg.id === $("packageSelect").value);
}

function selectedMidwifeName() {
  const value = $("midwifeSelect").value;
  if (value === "any") return "Any available HerCare midwife";
  return midwives.find((m) => m.id === value)?.name || "Not selected";
}

function updateBookingSummary() {
  const pkg = selectedPackage();
  const values = {
    service: $("serviceSelect").value || "Not selected",
    packageName: pkg?.name || "Not selected",
    date: formatDate($("dateSelect").value),
    time: $("timeSelect").value || "Not selected",
    midwife: selectedMidwifeName(),
    fee: pkg
      ? pkg.priceLabel + (pkg.priceNote ? ` (${pkg.priceNote})` : "")
      : "Not selected",
    location: selectedLocationText(),
    address: $("homeAddress").value.trim() || "Not provided",
  };
  $("bookingSummary").innerHTML = `
    <div class="summary-grid">
      <div class="summary-item"><small>Service</small><strong>${escapeHTML(values.service)}</strong></div>
      <div class="summary-item"><small>Package</small><strong>${escapeHTML(values.packageName)}</strong></div>
      <div class="summary-item"><small>Date</small><strong>${escapeHTML(values.date)}</strong></div>
      <div class="summary-item"><small>Time</small><strong>${escapeHTML(values.time)}</strong></div>
      <div class="summary-item"><small>Preferred Midwife</small><strong>${escapeHTML(values.midwife)}</strong></div>
      <div class="summary-item"><small>Home Visit Fee</small><strong>${escapeHTML(values.fee)}</strong></div>
      <div class="summary-item full"><small>Selected Location</small><strong>${escapeHTML(values.location)}</strong></div>
      <div class="summary-item full"><small>House / Street / Landmark</small><strong>${escapeHTML(values.address)}</strong></div>
    </div>
  `;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function validateBookingForm() {
  const requiredIds = [
    "serviceSelect",
    "packageSelect",
    "dateSelect",
    "timeSelect",
    "regionSelect",
    "cityMunicipalitySelect",
    "barangaySelect",
    "midwifeSelect",
    "motherName",
    "contactNumber",
    "clientEmail",
    "homeAddress",
    "motherStatus",
    "bookingConsent",
  ];
  let valid = true;
  let firstInvalid = null;

  requiredIds.forEach((id) => {
    const field = $(id);
    let valueValid =
      field.type === "checkbox" ? field.checked : Boolean(field.value.trim());
    if (id === "clientEmail" && valueValid)
      valueValid = isValidEmail(field.value);
    if (id === "contactNumber" && valueValid)
      valueValid = isValidPhone(field.value);
    field.classList.toggle("validation-error", !valueValid);
    if (!valueValid && !firstInvalid) firstInvalid = field;
    valid = valid && valueValid;
  });

  if (firstInvalid) {
    if (firstInvalid.id === "packageSelect") {
      $("packageChoices").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      firstInvalid.focus({ preventScroll: false });
    }
    showToast("Please complete all required booking details correctly.");
  }
  return valid;
}

async function sendServerNotification(payload) {
  if (window.location.protocol === "file:") {
    throw new Error(
      "Email/SMS notifications require the site to run through a PHP web server (for example XAMPP), not by double-clicking index.html.",
    );
  }

  const response = await fetch("notify.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  let result = {};
  try {
    result = await response.json();
  } catch (error) {
    throw new Error("The notification server returned an unreadable response.");
  }

  if (!response.ok || result.ok === false) {
    throw new Error(result.message || "The notification could not be sent.");
  }
  return result;
}

function clientDeliveryLabel(channel) {
  if (channel === "sms")
    return "A confirmation was also sent to your contact number by SMS.";
  if (channel === "email")
    return "A confirmation was sent to your email address.";
  return "The administrator was notified, but a client confirmation could not be delivered.";
}

async function createPaymentLink(booking) {
  const response = await fetch("create_payment.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      reference: booking.reference,
      packageId: booking.packageId,
      packageName: booking.packageName,
      service: booking.service,
      midwife: booking.midwife,
      clientEmail: booking.clientEmail,
    }),
  });

  let result = {};
  try {
    result = await response.json();
  } catch (error) {
    throw new Error("The payment server returned an unreadable response.");
  }
  if (!response.ok || result.ok === false) {
    throw new Error(result.message || "A payment link could not be created.");
  }
  return result;
}

function paymentPanelHTML(payment) {
  const modeLabel =
    payment.mode === "demo" ? "Demo payment gateway" : "Secure online payment";
  return `
    <div class="payment-ready-card">
      <div>
        <span class="eyebrow">${escapeHTML(modeLabel.toUpperCase())}</span>
        <h3>Payment allocation</h3>
        <div class="payment-split-row">
          <span>Amount due <strong>${escapeHTML(payment.totalLabel)}</strong></span>
        </div>
        <p>${
          payment.mode === "demo"
            ? "This checkout is in demo mode and will not move real money. Partner payout allocation is recorded internally."
            : "You will be redirected to the payment provider’s hosted checkout."
        }</p>
      </div>
      <a class="btn btn-primary" href="${escapeHTML(payment.paymentUrl)}" target="_blank" rel="noopener">${payment.mode === "demo" ? "Open Demo Checkout" : "Pay Securely"}</a>
    </div>`;
}

function partnerSelectedOptionText(id) {
  const select = $(id);
  if (!select || !select.value) return "";
  return select.options[select.selectedIndex]?.text || "";
}

function partnerLocationText() {
  const region = partnerSelectedOptionText("partnerRegionSelect");
  const province = partnerSelectedOptionText("partnerProvinceSelect");
  const city = partnerSelectedOptionText("partnerCitySelect");
  const barangay = partnerSelectedOptionText("partnerBarangaySelect");
  if (!region || !city || !barangay) return "";
  return [`Barangay ${barangay}`, city, province || null, region]
    .filter(Boolean)
    .join(", ");
}

async function loadPartnerRegions() {
  try {
    $("partnerLocationStatus").textContent = "Loading Philippine regions…";
    const regions = await fetchPSGC("/regions");
    fillSelect($("partnerRegionSelect"), regions, "Select region");
    $("partnerLocationStatus").textContent =
      "Select your primary service region.";
  } catch (error) {
    resetSelect($("partnerRegionSelect"), "Could not load regions", true);
    $("partnerLocationStatus").innerHTML =
      `<strong>Location list unavailable.</strong> ${escapeHTML(error.message)}`;
  }
}

async function handlePartnerRegionChange() {
  const regionCode = $("partnerRegionSelect").value;
  resetSelect($("partnerProvinceSelect"), "Select a region first", true);
  resetSelect($("partnerCitySelect"), "Select a region first", true);
  resetSelect(
    $("partnerBarangaySelect"),
    "Select a city or municipality first",
    true,
  );
  if (!regionCode) {
    $("partnerLocationStatus").textContent = "Choose a region to begin.";
    return;
  }
  $("partnerLocationStatus").textContent =
    "Loading provinces and cities/municipalities…";
  try {
    const [provinces, cities] = await Promise.all([
      fetchPSGC(`/regions/${encodeURIComponent(regionCode)}/provinces`),
      fetchPSGC(
        `/regions/${encodeURIComponent(regionCode)}/cities-municipalities`,
      ),
    ]);
    partnerLocationState.regionCities = cities;
    if (provinces.length)
      fillSelect(
        $("partnerProvinceSelect"),
        provinces,
        "Optional: choose province",
      );
    else
      resetSelect(
        $("partnerProvinceSelect"),
        "Not applicable in this region",
        true,
      );
    fillSelect($("partnerCitySelect"), cities, "Select city / municipality");
    $("partnerLocationStatus").textContent =
      "Choose a province to narrow the list, or select a city/municipality directly.";
  } catch (error) {
    $("partnerLocationStatus").innerHTML =
      `<strong>Could not load this region.</strong> ${escapeHTML(error.message)}`;
  }
}

async function handlePartnerProvinceChange() {
  const provinceCode = $("partnerProvinceSelect").value;
  resetSelect(
    $("partnerBarangaySelect"),
    "Select a city or municipality first",
    true,
  );
  try {
    if (!provinceCode) {
      fillSelect(
        $("partnerCitySelect"),
        partnerLocationState.regionCities,
        "Select city / municipality",
      );
      $("partnerLocationStatus").textContent =
        "Showing all cities and municipalities in the selected region.";
    } else {
      $("partnerLocationStatus").textContent =
        "Loading cities and municipalities…";
      const cities = await fetchPSGC(
        `/provinces/${encodeURIComponent(provinceCode)}/cities-municipalities`,
      );
      fillSelect($("partnerCitySelect"), cities, "Select city / municipality");
      $("partnerLocationStatus").textContent =
        "Choose your primary city or municipality.";
    }
  } catch (error) {
    $("partnerLocationStatus").innerHTML =
      `<strong>Could not load cities/municipalities.</strong> ${escapeHTML(error.message)}`;
  }
}

async function handlePartnerCityChange() {
  const cityCode = $("partnerCitySelect").value;
  resetSelect(
    $("partnerBarangaySelect"),
    "Select a city or municipality first",
    true,
  );
  if (!cityCode) {
    $("partnerLocationStatus").textContent =
      "Choose your city or municipality.";
    return;
  }
  $("partnerLocationStatus").textContent = "Loading barangays…";
  try {
    const barangays = await fetchPSGC(
      `/cities-municipalities/${encodeURIComponent(cityCode)}/barangays`,
    );
    fillSelect($("partnerBarangaySelect"), barangays, "Select barangay");
    $("partnerLocationStatus").textContent =
      "Choose your primary barangay. Additional coverage can be added during onboarding.";
  } catch (error) {
    $("partnerLocationStatus").innerHTML =
      `<strong>Could not load barangays.</strong> ${escapeHTML(error.message)}`;
  }
}

function handlePartnerBarangayChange() {
  if ($("partnerBarangaySelect").value) {
    $("partnerLocationStatus").innerHTML =
      `<strong>Primary service area:</strong> ${escapeHTML(partnerLocationText())}`;
  }
}

function setupPartnerLocationSelectors() {
  $("partnerRegionSelect").addEventListener(
    "change",
    handlePartnerRegionChange,
  );
  $("partnerProvinceSelect").addEventListener(
    "change",
    handlePartnerProvinceChange,
  );
  $("partnerCitySelect").addEventListener("change", handlePartnerCityChange);
  $("partnerBarangaySelect").addEventListener(
    "change",
    handlePartnerBarangayChange,
  );
  loadPartnerRegions();
}

function validatePartnerForm() {
  const ids = [
    "partnerName",
    "partnerEmail",
    "partnerContact",
    "partnerLicense",
    "partnerYears",
    "partnerAvailability",
    "partnerRegionSelect",
    "partnerCitySelect",
    "partnerBarangaySelect",
    "partnerConsent",
  ];
  let valid = true;
  let firstInvalid = null;
  ids.forEach((id) => {
    const field = $(id);
    let valueValid =
      field.type === "checkbox"
        ? field.checked
        : Boolean(String(field.value).trim());
    if (id === "partnerEmail" && valueValid)
      valueValid = isValidEmail(field.value);
    if (id === "partnerContact" && valueValid)
      valueValid = isValidPhone(field.value);
    field.classList.toggle("validation-error", !valueValid);
    if (!valueValid && !firstInvalid) firstInvalid = field;
    valid = valid && valueValid;
  });

  const services = [
    ...document.querySelectorAll('input[name="partnerServices"]:checked'),
  ];
  const serviceGroup = document.querySelector(".partner-services");
  const servicesValid = services.length > 0;
  serviceGroup.classList.toggle("validation-group-error", !servicesValid);
  if (!servicesValid) valid = false;

  if (!valid) {
    if (firstInvalid) firstInvalid.focus({ preventScroll: false });
    else serviceGroup.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Please complete the required midwife application details.");
  }
  return valid;
}

async function savePartnerApplication(event) {
  event.preventDefault();
  if (!validatePartnerForm()) return;

  const services = [
    ...document.querySelectorAll('input[name="partnerServices"]:checked'),
  ].map((input) => input.value);
  const application = {
    type: "midwife_application",
    reference: `MW-${Date.now().toString().slice(-7)}`,
    createdAt: new Date().toISOString(),
    name: $("partnerName").value.trim(),
    email: $("partnerEmail").value.trim(),
    contactNumber: $("partnerContact").value.trim(),
    licenseNumber: $("partnerLicense").value.trim(),
    yearsPractice: $("partnerYears").value.trim(),
    availability: $("partnerAvailability").value,
    services,
    regionCode: $("partnerRegionSelect").value,
    region: partnerSelectedOptionText("partnerRegionSelect"),
    provinceCode: $("partnerProvinceSelect").value,
    province: partnerSelectedOptionText("partnerProvinceSelect"),
    cityMunicipalityCode: $("partnerCitySelect").value,
    cityMunicipality: partnerSelectedOptionText("partnerCitySelect"),
    barangayCode: $("partnerBarangaySelect").value,
    barangay: partnerSelectedOptionText("partnerBarangaySelect"),
    serviceArea: partnerLocationText(),
    bio: $("partnerBio").value.trim(),
    website: "",
  };

  const button = $("partnerSubmit");
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Submitting application…";
  $("partnerSuccess").classList.add("hidden");
  $("partnerSuccess").classList.remove("error-box");

  try {
    const delivery = await sendServerNotification(application);
    const applications = JSON.parse(
      localStorage.getItem("hercareMidwifeApplications") || "[]",
    );
    applications.push({ ...application, notification: delivery });
    localStorage.setItem(
      "hercareMidwifeApplications",
      JSON.stringify(applications),
    );
    $("partnerSuccess").innerHTML = `
      <strong>Thank you for applying to HER CARE.</strong>
      <p>Application reference: <b>${escapeHTML(application.reference)}</b></p>
      <p>Your application was sent to the HER CARE administrator, and an acknowledgement was sent to ${escapeHTML(application.email)}.</p>
      <p>HER CARE can contact you next for credential verification, service-area confirmation, and onboarding.</p>`;
    $("partnerSuccess").classList.remove("hidden");
    $("partnerForm").reset();
    document
      .querySelector(".partner-services")
      .classList.remove("validation-group-error");
    resetSelect($("partnerProvinceSelect"), "Select a region first", true);
    resetSelect($("partnerCitySelect"), "Select a region first", true);
    resetSelect(
      $("partnerBarangaySelect"),
      "Select a city or municipality first",
      true,
    );
    $("partnerLocationStatus").textContent = "Choose a region to begin.";
    showToast("Midwife application sent to HER CARE.");
  } catch (error) {
    $("partnerSuccess").innerHTML =
      `<strong>We could not send your application.</strong><p>${escapeHTML(error.message)}</p>`;
    $("partnerSuccess").classList.add("error-box");
    $("partnerSuccess").classList.remove("hidden");
    showToast("Application could not be delivered.");
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

async function saveBooking(event) {
  event.preventDefault();
  if (!validateBookingForm()) return;

  const pkg = selectedPackage();
  const booking = {
    reference: `HC-${Date.now().toString().slice(-7)}`,
    createdAt: new Date().toISOString(),
    service: $("serviceSelect").value,
    packageId: pkg.id,
    packageName: pkg.name,
    fee: pkg.priceLabel + (pkg.priceNote ? ` (${pkg.priceNote})` : ""),
    date: $("dateSelect").value,
    time: $("timeSelect").value,
    midwife: selectedMidwifeName(),
    regionCode: $("regionSelect").value,
    region: selectedOptionText("regionSelect"),
    provinceCode: $("provinceSelect").value,
    province: selectedOptionText("provinceSelect"),
    cityMunicipalityCode: $("cityMunicipalitySelect").value,
    cityMunicipality: selectedOptionText("cityMunicipalitySelect"),
    barangayCode: $("barangaySelect").value,
    barangay: selectedOptionText("barangaySelect"),
    selectedLocation: selectedLocationText(),
    motherName: $("motherName").value.trim(),
    contactNumber: $("contactNumber").value.trim(),
    clientEmail: $("clientEmail").value.trim(),
    homeAddress: $("homeAddress").value.trim(),
    motherStatus: $("motherStatus").value,
    concerns: $("notes").value.trim(),
    website: "",
    status: "Awaiting notification delivery",
  };

  const submitButton = $("bookingSubmit");
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Sending booking...";
  $("successBox").classList.add("hidden");
  $("successBox").classList.remove("error-box");

  try {
    const delivery = await sendServerNotification({
      type: "booking",
      ...booking,
    });
    booking.status = delivery.partial
      ? "Admin notified; client confirmation delivery issue"
      : "Home visit request received";
    booking.notification = delivery;

    let payment = null;
    let paymentError = "";
    try {
      payment = await createPaymentLink(booking);
      booking.payment = payment;
    } catch (error) {
      paymentError = error.message;
    }

    const bookings = JSON.parse(
      localStorage.getItem("hercareHomeVisits") || "[]",
    );
    bookings.push(booking);
    localStorage.setItem("hercareHomeVisits", JSON.stringify(bookings));

    $("successBox").innerHTML = `
      <strong>Your home visit request has been received!</strong>
      <p>Reference: <b>${escapeHTML(booking.reference)}</b></p>
      <p>${escapeHTML(booking.service)} • ${escapeHTML(booking.packageName)} • ${escapeHTML(formatDate(booking.date))} • ${escapeHTML(booking.time)}</p>
      <p>Preferred midwife: ${escapeHTML(booking.midwife)}</p>
      <p>Home-visit area: ${escapeHTML(booking.selectedLocation)}</p>
      <p>Your booking information was emailed to the HER CARE administrator. ${escapeHTML(clientDeliveryLabel(delivery.clientChannel))}</p>
      <p>A HerCare midwife will confirm your appointment and provide further instructions.</p>
      ${payment ? paymentPanelHTML(payment) : `<div class="payment-warning"><strong>Payment link unavailable.</strong><span>${escapeHTML(paymentError || "Configure the payment gateway to enable online payment.")}</span></div>`}
    `;
    $("successBox").classList.remove("hidden");
    $("successBox").focus();
    showToast("Booking sent to HER CARE.");
  } catch (error) {
    booking.status = "Notification failed";
    const bookings = JSON.parse(
      localStorage.getItem("hercareHomeVisits") || "[]",
    );
    bookings.push(booking);
    localStorage.setItem("hercareHomeVisits", JSON.stringify(bookings));

    $("successBox").innerHTML = `
      <strong>We could not deliver the booking notification.</strong>
      <p>${escapeHTML(error.message)}</p>
      <p>Your details were saved only in this browser as a local backup. Please do not assume the appointment is confirmed until HER CARE receives it.</p>
    `;
    $("successBox").classList.add("error-box");
    $("successBox").classList.remove("hidden");
    $("successBox").focus();
    showToast("Notification could not be delivered.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}

function validateQuestionForm() {
  const ids = [
    "questionTopic",
    "questionName",
    "questionContact",
    "questionEmail",
    "questionText",
  ];
  let valid = true;
  let firstInvalid = null;
  ids.forEach((id) => {
    const field = $(id);
    let valueValid = Boolean(field.value.trim());
    if (id === "questionEmail" && valueValid)
      valueValid = isValidEmail(field.value);
    if (id === "questionContact" && valueValid)
      valueValid = isValidPhone(field.value);
    field.classList.toggle("validation-error", !valueValid);
    if (!valueValid && !firstInvalid) firstInvalid = field;
    valid = valid && valueValid;
  });
  if (firstInvalid) {
    firstInvalid.focus();
    showToast("Please complete your contact details and question correctly.");
  }
  return valid;
}

async function saveQuestion(event) {
  event.preventDefault();
  if (!validateQuestionForm()) return;

  const question = {
    reference: `Q-${Date.now().toString().slice(-6)}`,
    topic: $("questionTopic").value,
    name: $("questionName").value.trim(),
    contactNumber: $("questionContact").value.trim(),
    clientEmail: $("questionEmail").value.trim(),
    question: $("questionText").value.trim(),
    website: $("questionWebsite").value,
    createdAt: new Date().toISOString(),
  };

  const submitButton = $("questionSubmit");
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = "Sending question...";
  $("questionSuccess").classList.add("hidden");
  $("questionSuccess").classList.remove("error-box");

  try {
    const delivery = await sendServerNotification({
      type: "question",
      ...question,
    });
    question.notification = delivery;
    const questions = JSON.parse(
      localStorage.getItem("hercareQuestions") || "[]",
    );
    questions.push(question);
    localStorage.setItem("hercareQuestions", JSON.stringify(questions));

    $("questionSuccess").innerHTML = `
      <strong>Your question has been received.</strong>
      <p>Reference: <b>${escapeHTML(question.reference)}</b></p>
      <p>Your question was emailed to the HER CARE administrator. ${escapeHTML(clientDeliveryLabel(delivery.clientChannel))}</p>
      <p>A HER CARE midwife can follow up using the contact information you provided.</p>
    `;
    $("questionSuccess").classList.remove("hidden");
    $("askForm").reset();
    showToast("Question sent to HER CARE.");
  } catch (error) {
    question.status = "Notification failed";
    const questions = JSON.parse(
      localStorage.getItem("hercareQuestions") || "[]",
    );
    questions.push(question);
    localStorage.setItem("hercareQuestions", JSON.stringify(questions));

    $("questionSuccess").innerHTML = `
      <strong>We could not deliver your question to HER CARE.</strong>
      <p>${escapeHTML(error.message)}</p>
      <p>Your question was saved only in this browser as a local backup. Please try again after the notification settings are configured.</p>
    `;
    $("questionSuccess").classList.add("error-box");
    $("questionSuccess").classList.remove("hidden");
    showToast("Question notification could not be delivered.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
}

function setupNavigation() {
  $("menuBtn").addEventListener("click", () => {
    const open = $("nav").classList.toggle("open");
    $("menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav a").forEach((link) =>
    link.addEventListener("click", () => {
      $("nav").classList.remove("open");
      $("menuBtn").setAttribute("aria-expanded", "false");
    }),
  );
}

function bindFormSummary() {
  [
    "serviceSelect",
    "dateSelect",
    "timeSelect",
    "midwifeSelect",
    "homeAddress",
  ].forEach((id) => {
    $(id).addEventListener(id === "homeAddress" ? "input" : "change", () => {
      if (id === "midwifeSelect") updateMidwifeInfo();
      else updateBookingSummary();
    });
  });
}

renderPackages();
renderMidwives();
configureDateField();
setupNavigation();
setupLocationSelectors();
setupPartnerLocationSelectors();
bindFormSummary();
updateBookingSummary();

$("bookingForm").addEventListener("submit", saveBooking);
$("askForm").addEventListener("submit", saveQuestion);
$("partnerForm").addEventListener("submit", savePartnerApplication);
$("closeProfile").addEventListener("click", closeProfile);
$("profileModal").addEventListener("click", (event) => {
  if (event.target === $("profileModal")) closeProfile();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("profileModal").classList.contains("hidden"))
    closeProfile();
});

(function showPaymentReturnStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("payment") === "success") {
    const reference = params.get("reference") || "";
    window.setTimeout(
      () =>
        showToast(
          `Demo payment completed${reference ? ` for ${reference}` : ""}.`,
        ),
      400,
    );
  }
})();

/*
Regions
---------------------------------------------------------------------------------------------------------------------
[LIST] GET https://psgc.cloud/api/v2/regions      
[SHOW] GET https://psgc.cloud/api/v2/regions/{code_name}

Payload Fields
  List Payload  : code, name
  Detail Payload: code, name, provinces_count, cities_municipalities_count, barangays_count

Nested Sub-Resources
  Provinces:                GET https://psgc.cloud/api/v2/regions/{code_name}/provinces
  Cities & Municipalities:  GET https://psgc.cloud/api/v2/regions/{code_name}/cities-municipalities
  Cities:                   GET https://psgc.cloud/api/v2/regions/{code_name}/cities
  Municipalities:           GET https://psgc.cloud/api/v2/regions/{code_name}/municipalities
  Sub-Municipalities:       GET https://psgc.cloud/api/v2/regions/{code_name}/sub-municipalities
  Barangays:                GET https://psgc.cloud/api/v2/regions/{code_name}/barangays

Example cURL & Fetch Requests
  # curl list
  curl -s https://psgc.cloud/api/v2/regions | jq '.[0]'

  # curl detail (replace CODE_OR_NAME)
  curl -s https://psgc.cloud/api/v2/regions/CODE_OR_NAME | jq

  # fetch JavaScript example
  const res = await fetch('https://psgc.cloud/api/v2/regions');
  const items = await res.json();
  console.log(items[0]);


Provinces
---------------------------------------------------------------------------------------------------------------------
[LIST]  GET https://psgc.cloud/api/v2/provinces   
[SHOW]  GET https://psgc.cloud/api/v2/provinces/{code_name}

Payload Fields
  List Payload  : code, name, region
  Detail Payload: code, name, region, cities_municipalities_count, barangays_count

Nested Sub-Resources
  Cities & Municipalities:    GET https://psgc.cloud/api/v2/provinces/{code_name}/cities-municipalities
  Cities:                     GET https://psgc.cloud/api/v2/provinces/{code_name}/cities
  Municipalities:             GET https://psgc.cloud/api/v2/provinces/{code_name}/municipalities
  Sub-Municipalities:         GET https://psgc.cloud/api/v2/provinces/{code_name}/sub-municipalities
  Barangays:                  GET https://psgc.cloud/api/v2/provinces/{code_name}/barangays

Example cURL & Fetch Requests
  # curl list
  curl -s https://psgc.cloud/api/v2/provinces | jq '.[0]'

  # curl detail (replace CODE_OR_NAME)
  curl -s https://psgc.cloud/api/v2/provinces/CODE_OR_NAME | jq

  # fetch JavaScript example
  const res = await fetch('https://psgc.cloud/api/v2/provinces');
  const items = await res.json();
  console.log(items[0]);


Cities & Municipalities
---------------------------------------------------------------------------------------------------------------------
[LIST]  GET https://psgc.cloud/api/v2/cities-municipalities
[SHOW]  GET https://psgc.cloud/api/v2/cities-municipalities/{code_name}

Payload Fields
  List Payload  : code, name, type, region, province
  Detail Payload: code, name, type, region, province, barangays_count

Nested Sub-Resources
  Barangays:               GET https://psgc.cloud/api/v2/cities-municipalities/{code_name}/barangays

Example cURL & Fetch Requests
  # curl list
  curl -s https://psgc.cloud/api/v2/cities-municipalities | jq '.[0]'

  # curl detail (replace CODE_OR_NAME)
  curl -s https://psgc.cloud/api/v2/cities-municipalities/CODE_OR_NAME | jq

  # fetch JavaScript example
  const res = await fetch('https://psgc.cloud/api/v2/cities-municipalities');
  const items = await res.json();
  console.log(items[0]);  


Barangays
---------------------------------------------------------------------------------------------------------------------
[LIST]  GET https://psgc.cloud/api/v2/barangays
[SHOW]  GET https://psgc.cloud/api/v2/barangays/{code_name}

Payload Fields
  List Payload  : code, name, status, region, province, city_municipality
  Detail Payload: code, name, status, region, province, city_municipality

Example cURL & Fetch Requests
  # curl list
  curl -s https://psgc.cloud/api/v2/barangays | jq '.[0]'

  # curl detail (replace CODE_OR_NAME)
  curl -s https://psgc.cloud/api/v2/barangays/CODE_OR_NAME | jq

  # fetch JavaScript example
  const res = await fetch('https://psgc.cloud/api/v2/barangays');
  const items = await res.json();
  console.log(items[0]);  


Chainable Nested Paths
---------------------------------------------------------------------------------------------------------------------  
Traverse the full geographic hierarchy with automatic ancestry validation. Each segment along the route is 
strictly validated against its parents—an ancestry mismatch triggers an immediate 404 Not Found.

  GET https://psgc.cloud/api/v2/regions/{region}/provinces/{province}
  GET https://psgc.cloud/api/v2/regions/{region}/provinces/{province}/cities-municipalities
  GET https://psgc.cloud/api/v2/regions/{region}/provinces/{province}/cities-municipalities/{city_municipality}
  GET https://psgc.cloud/api/v2/regions/{region}/provinces/{province}/cities-municipalities/{city_municipality}/barangays
  GET https://psgc.cloud/api/v2/regions/{region}/provinces/{province}/cities-municipalities/{city_municipality}/barangays/{barangay}  
  
  For an instance, this will get all Barangays from City of Puerto Princesa, Province of Palawan, MIMAROPA Region
    GET https://psgc.cloud/api/v2/regions/1700000000/provinces/1705300000/cities-municipalities/1731500000/barangays

Ancestry cURL & JS Examples
  # List cities/municipalities for a province inside a region
  curl -s "https://psgc.cloud/api/v2/regions/Region V (Bicol Region)/provinces/Albay/cities-municipalities" | jq '.[0]'

  # Fetch a barangay validating full ancestry
  curl -s "https://psgc.cloud/api/v2/regions/Region V (Bicol Region)/provinces/Albay/cities-municipalities/City of Tabaco/barangays/Mariroc" | jq

  # JS fetch example
  const url = 'https://psgc.cloud/api/v2/regions/Region V (Bicol Region)/provinces/Albay/cities-municipalities/City of Tabaco/barangays';
  const brgys = await (await fetch(url)).json();
  console.log(brgys.length);

Note: Use direct resource paths when you do not need strict parent validation.
*/
