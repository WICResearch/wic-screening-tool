"use strict";

/* ---------- Icons (inline SVG) ---------- */
const ICON = {
  info: '<svg aria-hidden="true" focusable="false" class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  help: '<svg aria-hidden="true" focusable="false" class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
  chevronDown: '<svg aria-hidden="true" focusable="false" class="select-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronLeft: '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronRight: '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  check: '<svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  infoLg: '<svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  mapPin: '<svg aria-hidden="true" focusable="false" class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  search: '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  printer: '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
};

/* ---------- Translations ---------- */
const TRANSLATIONS = {
  en: {
    appTitle: "WIC Eligibility Screener",
    stepOf: (step, total) => `Step ${step} of ${total}`,
    back: "Back",
    next: "Next",
    checkEligibility: "Check Eligibility",
    startOver: "Start over",
    findClinic: "Find your local WIC office",
    contactClinic: "Contact local WIC office",
    applyWVWIC: "Apply for WV WIC",
    footer: "This tool provides a preliminary screening only. WIC eligibility is determined by your local WIC agency.",

    step1Title: "Who is applying?",
    step1Subtitle: "Select everyone in your household who needs WIC.",
    step1Info: "WIC serves pregnant and postpartum women, breastfeeding mothers, infants, and children up to age 5.",
    step1ParentNote: "If you are a parent, guardian, or foster parent applying on behalf of a child, please select the options that apply to the child and/or any pregnant, postpartum, or breastfeeding household members seeking WIC benefits.",
    step1Error: "Please select at least one option to continue.",

    step2Title: "Household size",
    step2Subtitle: "How many people live in your household?",
    step2Tooltip: "Count everyone who lives with you and shares meals and income.",
    step2HelpLabel: "Who counts toward my household size?",
    step2PregnancyNote: "If you are pregnant, include your unborn child(ren) when determining household size. For example, a pregnant individual expecting one baby should count as two household members. If expecting twins or multiples, count each unborn child.",
    step2EconomicUnitNote: "For WIC purposes, household size generally includes people who live together and share income and expenses. Do not automatically include roommates or others who live in your residence but do not share income or household resources.",
    step2CountyLabel: "Which county do you live in?",
    step2CountyPlaceholder: "Select your county",
    step2CountyError: "Please select your county.",
    step2SizeError: "Please enter a household size between 1 and 15.",

    step3Title: "Current benefits",
    step3Subtitle: "Does anyone in your household currently receive any of these benefits?",

    step4Title: "Household income",
    step4Subtitle: "What is your household's gross income (before taxes)?",
    step4Amount: "Amount",
    step4Frequency: "Frequency",
    step4TableTitle: "WIC income limits (185% Federal Poverty Level):",
    step4TableAdditional: "Each additional: +$792/mo or +$9,509/yr",
    step4GuidelineYear: "Based on 2025 Federal Poverty Guidelines",
    step4Weekly: "Weekly",
    step4Biweekly: "Biweekly",
    step4Monthly: "Monthly",
    step4Yearly: "Yearly",

    eligibleTitle: "You may be eligible for WIC!",
    eligibleBody: "Based on your answers, your household appears to meet the initial guidelines.",
    disclaimer: "This screening tool is intended for informational purposes only and does not guarantee eligibility for the West Virginia WIC Program. Final eligibility is determined by WIC staff during the official certification process based on federal and state program requirements. No personally identifying information is collected or stored through this screener.",

    ineligibleTitle: "You may not be eligible for WIC",
    ineligibleBody: "Based on the information provided, your household may not meet WIC income guidelines. Income is not the only factor — contact your local WIC office to confirm.",

    zipTitle: "Find a WIC office near you",
    zipSubtitle: "Enter your zip code to search for nearby WIC clinics.",
    zipPlaceholder: "Enter zip code",
    zipButton: "Search",
    zipError: "Please enter a valid 5-digit zip code.",

    estMonthly: "Est. Monthly Income",
    wicLimit: "WIC Monthly Limit",
    broughtBy: "Brought to you by",
    printSummary: "Print / Save Summary",
    person: "person",
    people: "people",
    mo: "mo",
    yr: "yr",

    categories: [
      { id: "pregnant", label: "Pregnant woman" },
      { id: "postpartum", label: "Woman who recently had a baby (within the last 6 months)" },
      { id: "breastfeeding", label: "Breastfeeding woman (baby under 1 year old)" },
      { id: "infant", label: "Infant (under 12 months old)" },
      { id: "child", label: "Child (under 5 years old)" },
    ],
    benefits: [
      { id: "snap", label: "SNAP (food stamps)" },
      { id: "medicaid", label: "Medicaid or CHIP" },
      { id: "tanf", label: "TANF (Temporary Assistance for Needy Families)" },
      { id: "fdpir", label: "FDPIR (Food Distribution Program on Indian Reservations)" },
      { id: "none", label: "None of the above" },
    ],
  },
  es: {
    appTitle: "Verificador de Elegibilidad WIC",
    stepOf: (step, total) => `Paso ${step} de ${total}`,
    back: "Atrás",
    next: "Siguiente",
    checkEligibility: "Verificar Elegibilidad",
    startOver: "Comenzar de nuevo",
    findClinic: "Encuentra tu oficina WIC local",
    contactClinic: "Contactar oficina WIC local",
    applyWVWIC: "Solicitar WIC en Virginia Occidental",
    footer: "Esta herramienta es solo una evaluación preliminar. La elegibilidad para WIC es determinada por su agencia WIC local.",

    step1Title: "¿Quién solicita?",
    step1Subtitle: "Seleccione a todas las personas en su hogar que necesitan WIC.",
    step1Info: "WIC sirve a mujeres embarazadas y posparto, madres lactantes, bebés y niños hasta los 5 años.",
    step1ParentNote: "Si usted es padre, madre, tutor o padre/madre de crianza que solicita en nombre de un niño, seleccione las opciones que correspondan al niño y/o a cualquier integrante del hogar que esté embarazada, en posparto o lactando y que busque beneficios de WIC.",
    step1Error: "Por favor seleccione al menos una opción para continuar.",

    step2Title: "Tamaño del hogar",
    step2Subtitle: "¿Cuántas personas viven en su hogar?",
    step2Tooltip: "Cuente a todos los que viven con usted y comparten comidas e ingresos.",
    step2HelpLabel: "¿Quién cuenta para el tamaño de mi hogar?",
    step2PregnancyNote: "Si está embarazada, incluya a su(s) hijo(s) por nacer al determinar el tamaño del hogar. Por ejemplo, una persona embarazada que espera un bebé debe contarse como dos integrantes del hogar. Si espera gemelos o múltiples, cuente a cada bebé por nacer.",
    step2EconomicUnitNote: "Para fines de WIC, el tamaño del hogar generalmente incluye a las personas que viven juntas y comparten ingresos y gastos. No incluya automáticamente a compañeros de vivienda u otras personas que viven en su residencia pero que no comparten ingresos ni recursos del hogar.",
    step2CountyLabel: "¿En qué condado vive?",
    step2CountyPlaceholder: "Seleccione su condado",
    step2CountyError: "Por favor seleccione su condado.",
    step2SizeError: "Por favor ingrese un tamaño de hogar entre 1 y 15.",

    step3Title: "Beneficios actuales",
    step3Subtitle: "¿Alguien en su hogar recibe actualmente alguno de estos beneficios?",

    step4Title: "Ingresos del hogar",
    step4Subtitle: "¿Cuál es el ingreso bruto de su hogar (antes de impuestos)?",
    step4Amount: "Cantidad",
    step4Frequency: "Frecuencia",
    step4TableTitle: "Límites de ingresos WIC (185% del Nivel de Pobreza Federal):",
    step4TableAdditional: "Cada persona adicional: +$792/mes o +$9,509/año",
    step4GuidelineYear: "Basado en las Pautas Federales de Pobreza de 2025",
    step4Weekly: "Semanal",
    step4Biweekly: "Quincenal",
    step4Monthly: "Mensual",
    step4Yearly: "Anual",

    eligibleTitle: "¡Es posible que sea elegible para WIC!",
    eligibleBody: "Según sus respuestas, su hogar parece cumplir con los requisitos iniciales.",
    disclaimer: "Esta herramienta de evaluación tiene fines informativos únicamente y no garantiza la elegibilidad para el Programa WIC de Virginia Occidental. La elegibilidad final es determinada por el personal de WIC durante el proceso oficial de certificación conforme a los requisitos federales y estatales del programa. No se recopila ni almacena información de identificación personal a través de esta herramienta.",

    ineligibleTitle: "Es posible que no sea elegible para WIC",
    ineligibleBody: "Según la información proporcionada, su hogar puede no cumplir con los requisitos de ingresos de WIC. Los ingresos no son el único factor — comuníquese con su oficina WIC local para confirmar.",

    zipTitle: "Encuentra una oficina WIC cerca de ti",
    zipSubtitle: "Ingresa tu código postal para buscar clínicas WIC cercanas.",
    zipPlaceholder: "Ingresa código postal",
    zipButton: "Buscar",
    zipError: "Por favor ingresa un código postal válido de 5 dígitos.",

    estMonthly: "Ingreso mensual estimado",
    wicLimit: "Límite mensual WIC",
    broughtBy: "Le ofrece",
    printSummary: "Imprimir / Guardar resumen",
    person: "persona",
    people: "personas",
    mo: "mes",
    yr: "año",

    categories: [
      { id: "pregnant", label: "Mujer embarazada" },
      { id: "postpartum", label: "Mujer que tuvo un bebé recientemente (en los últimos 6 meses)" },
      { id: "breastfeeding", label: "Mujer lactante (bebé menor de 1 año)" },
      { id: "infant", label: "Bebé (menor de 12 meses)" },
      { id: "child", label: "Niño/a (menor de 5 años)" },
    ],
    benefits: [
      { id: "snap", label: "SNAP (cupones de alimentos)" },
      { id: "medicaid", label: "Medicaid o CHIP" },
      { id: "tanf", label: "TANF (Asistencia Temporal para Familias Necesitadas)" },
      { id: "fdpir", label: "FDPIR (Programa de Distribución de Alimentos en Reservas Indígenas)" },
      { id: "none", label: "Ninguno de los anteriores" },
    ],
  },
};

const WV_COUNTIES = [
  "Barbour", "Berkeley", "Boone", "Braxton", "Brooke", "Cabell", "Calhoun", "Clay",
  "Doddridge", "Fayette", "Gilmer", "Grant", "Greenbrier", "Hampshire", "Hancock",
  "Hardy", "Harrison", "Jackson", "Jefferson", "Kanawha", "Lewis", "Lincoln", "Logan",
  "Marion", "Marshall", "Mason", "McDowell", "Mercer", "Mineral", "Mingo", "Monongalia",
  "Monroe", "Morgan", "Nicholas", "Ohio", "Pendleton", "Pleasants", "Pocahontas",
  "Preston", "Putnam", "Raleigh", "Randolph", "Ritchie", "Roane", "Summers", "Taylor",
  "Tucker", "Tyler", "Upshur", "Wayne", "Webster", "Wetzel", "Wirt", "Wood", "Wyoming",
];

const INCOME_LIMITS = [
  { size: 1, monthly: 2248, yearly: 26973 },
  { size: 2, monthly: 3041, yearly: 36482 },
  { size: 3, monthly: 3833, yearly: 45991 },
  { size: 4, monthly: 4625, yearly: 55500 },
  { size: 5, monthly: 5417, yearly: 65009 },
  { size: 6, monthly: 6209, yearly: 74518 },
  { size: 7, monthly: 7001, yearly: 84027 },
  { size: 8, monthly: 7794, yearly: 93536 },
];

function getMonthlyIncomeLimit(size) {
  if (size <= 8) return INCOME_LIMITS[size - 1].monthly;
  return 7794 + (size - 8) * 792;
}

/* ---------- State ---------- */
const state = {
  step: 1,
  lang: "en",
  result: null,
  zipError: false,
  summary: null,
  errors: {},
  data: {
    categories: [],
    householdSize: 1,
    county: "",
    benefits: [],
    incomeAmount: 0,
    incomeFrequency: "monthly",
  },
};

function t() {
  return TRANSLATIONS[state.lang];
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- Step renderers ---------- */
function stepOptions(list, selected, kind) {
  return `<div class="options">${list
    .map((item) => {
      const on = selected.includes(item.id);
      return `<label class="option${on ? " selected" : ""}">
        <input type="checkbox" data-kind="${kind}" data-id="${esc(item.id)}" ${on ? "checked" : ""} />
        <span>${esc(item.label)}</span>
      </label>`;
    })
    .join("")}</div>`;
}

function renderStep1() {
  const tt = t();
  return `<div class="step">
    <div>
      <h2 class="step-title">${esc(tt.step1Title)}</h2>
      <p class="step-subtitle">${esc(tt.step1Subtitle)}</p>
    </div>
    <div class="info-box info-primary">${ICON.info}<p>${esc(tt.step1Info)}</p></div>
    <div class="info-box info-muted">${ICON.help}<p>${esc(tt.step1ParentNote)}</p></div>
    ${stepOptions(tt.categories, state.data.categories, "category")}
    ${state.errors.categories ? `<p class="error">${esc(tt.step1Error)}</p>` : ""}
    <div class="info-box info-muted small">${ICON.help}<p>${esc(tt.disclaimer)}</p></div>
  </div>`;
}

function renderStep2() {
  const tt = t();
  return `<div class="step">
    <div>
      <h2 class="step-title">${esc(tt.step2Title)}</h2>
      <p class="step-subtitle">${esc(tt.step2Subtitle)} <button type="button" class="help-btn" aria-label="${esc(tt.step2Tooltip)}" title="${esc(tt.step2Tooltip)}">${ICON.help}</button></p>
    </div>
    <div class="field">
      <label class="sr-only" for="householdSize">${esc(tt.step2Title)}</label>
      <input class="input" id="householdSize" type="number" min="1" max="15" value="${esc(state.data.householdSize)}" />
      ${state.errors.householdSize ? `<p class="error">${esc(tt.step2SizeError)}</p>` : ""}
    </div>
    <details class="disclosure">
      <summary>${ICON.help}${esc(tt.step2HelpLabel)}</summary>
      <div class="disclosure-body">
        <p>${esc(tt.step2PregnancyNote)}</p>
        <p>${esc(tt.step2EconomicUnitNote)}</p>
      </div>
    </details>
    <div class="field">
      <label class="label" for="county">${esc(tt.step2CountyLabel)}</label>
      <div class="select-wrap">
        <select class="select" id="county">
          <option value="" disabled ${state.data.county ? "" : "selected"}>${esc(tt.step2CountyPlaceholder)}</option>
          ${WV_COUNTIES.map((c) => `<option value="${esc(c)}" ${state.data.county === c ? "selected" : ""}>${esc(c)}</option>`).join("")}
        </select>
        ${ICON.chevronDown}
      </div>
      ${state.errors.county ? `<p class="error">${esc(tt.step2CountyError)}</p>` : ""}
    </div>
  </div>`;
}

function renderStep3() {
  const tt = t();
  return `<div class="step">
    <div>
      <h2 class="step-title">${esc(tt.step3Title)}</h2>
      <p class="step-subtitle">${esc(tt.step3Subtitle)}</p>
    </div>
    ${stepOptions(tt.benefits, state.data.benefits, "benefit")}
  </div>`;
}

function renderStep4() {
  const tt = t();
  const freqs = [
    ["weekly", tt.step4Weekly],
    ["biweekly", tt.step4Biweekly],
    ["monthly", tt.step4Monthly],
    ["yearly", tt.step4Yearly],
  ];
  return `<div class="step">
    <div>
      <h2 class="step-title">${esc(tt.step4Title)}</h2>
      <p class="step-subtitle">${esc(tt.step4Subtitle)}</p>
    </div>
    <div class="row">
      <div class="grow">
        <label class="label" for="incomeAmount">${esc(tt.step4Amount)}</label>
        <div class="input-wrap">
          <span class="input-prefix">$</span>
          <input class="input" id="incomeAmount" type="number" min="0" value="${esc(state.data.incomeAmount)}" />
        </div>
      </div>
      <div class="third">
        <label class="label" for="incomeFrequency">${esc(tt.step4Frequency)}</label>
        <div class="select-wrap">
          <select class="select" id="incomeFrequency">
            ${freqs.map(([v, l]) => `<option value="${v}" ${state.data.incomeFrequency === v ? "selected" : ""}>${esc(l)}</option>`).join("")}
          </select>
          ${ICON.chevronDown}
        </div>
      </div>
    </div>
    <div class="income-table">
      <h3>${esc(tt.step4TableTitle)}</h3>
      <div class="income-rows">
        ${INCOME_LIMITS.map(
          (row) =>
            `<p>${row.size} ${row.size === 1 ? tt.person : tt.people}:&nbsp;&nbsp;$${row.monthly.toLocaleString()}/${tt.mo}&nbsp;&nbsp;|&nbsp;&nbsp;$${row.yearly.toLocaleString()}/${tt.yr}</p>`
        ).join("")}
        <p class="total">${esc(tt.step4TableAdditional)}</p>
        <p class="note">${esc(tt.step4GuidelineYear)}</p>
      </div>
    </div>
  </div>`;
}

function renderResult() {
  const tt = t();
  const sd = state.summary;
  const isEligible = state.result === "eligible";
  const freqLabel = { weekly: tt.step4Weekly, biweekly: tt.step4Biweekly, monthly: tt.step4Monthly, yearly: tt.step4Yearly };
  const categoryLabels = tt.categories.filter((c) => sd.categories.includes(c.id)).map((c) => c.label);
  const benefitLabels = tt.benefits.filter((b) => sd.benefits.includes(b.id) && b.id !== "none").map((b) => b.label);

  return `<div class="result">
    <div class="result-head">
      <div class="result-badge ${isEligible ? "eligible" : "ineligible"}">${isEligible ? ICON.check : ICON.infoLg}</div>
      <h2 class="result-title ${isEligible ? "eligible" : ""}">${esc(isEligible ? tt.eligibleTitle : tt.ineligibleTitle)}</h2>
      <p class="result-body">${esc(isEligible ? tt.eligibleBody : tt.ineligibleBody)}</p>
    </div>

    <div class="zip-box">
      <div class="zip-head">
        ${ICON.mapPin}
        <div>
          <p class="zip-title">${esc(tt.zipTitle)}</p>
          <p class="zip-sub">${esc(tt.zipSubtitle)}</p>
        </div>
      </div>
      <div class="zip-row">
        <input class="input" id="zip" type="text" inputmode="numeric" maxlength="5" placeholder="${esc(tt.zipPlaceholder)}" />
        <button class="btn btn-primary" id="btn-zip">${ICON.search}${esc(tt.zipButton)}</button>
      </div>
      ${state.zipError ? `<p class="error small" id="zip-error">${esc(tt.zipError)}</p>` : ""}
    </div>

    <div class="summary">
      <div class="summary-top">
        <div class="brand"><img src="wic logo .png"alt="WIC logo" /><span>${esc(tt.appTitle)}</span></div>
        <span class="summary-date">${esc(sd.screenedAt)}</span>
      </div>
      <div class="summary-verdict ${isEligible ? "eligible" : "ineligible"}">${esc(isEligible ? tt.eligibleTitle : tt.ineligibleTitle)}</div>
      <div class="summary-grid">
        <div><p class="k">${esc(tt.step2Title)}</p><p class="v">${esc(sd.householdSize)}</p></div>
        <div><p class="k">${esc(tt.step4Amount)}</p><p class="v">$${sd.incomeAmount.toLocaleString()} / ${esc(freqLabel[sd.incomeFrequency])}</p></div>
        <div><p class="k">${esc(tt.estMonthly)}</p><p class="v">$${Math.round(sd.monthlyIncome).toLocaleString()}</p></div>
        <div><p class="k">${esc(tt.wicLimit)}</p><p class="v">$${sd.incomeLimit.toLocaleString()}</p></div>
      </div>
      ${
        categoryLabels.length
          ? `<div class="summary-list"><p class="k">${esc(tt.step1Title)}</p><ul>${categoryLabels.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div>`
          : ""
      }
      ${
        benefitLabels.length
          ? `<div class="summary-list"><p class="k">${esc(tt.step3Title)}</p><ul>${benefitLabels.map((l) => `<li>${esc(l)}</li>`).join("")}</ul></div>`
          : ""
      }
      <div class="summary-bys">
        <span class="lbl">${esc(tt.broughtBy)}</span>
        <img src="by-your-side-logo.png" alt="By Your Side — pregnancy to 5" />
      </div>
      <p class="summary-foot">${esc(tt.footer)}</p>
    </div>

    <div class="actions">
      <a class="btn btn-primary btn-lg btn-block" href="https://dhhr.wv.gov/wic/Pages/default.aspx" target="_blank" rel="noreferrer">${esc(tt.applyWVWIC)}</a>
      <button class="btn btn-outline btn-block" id="btn-print">${ICON.printer}${esc(tt.printSummary)}</button>
      <a class="btn btn-outline btn-block" href="https://www.fns.usda.gov/wic/find-a-wic-clinic" target="_blank" rel="noreferrer">${esc(isEligible ? tt.findClinic : tt.contactClinic)}</a>
      <button class="btn btn-ghost btn-block" id="btn-reset">${esc(tt.startOver)}</button>
    </div>

    <div class="info-box info-muted small">${ICON.help}<p>${esc(tt.disclaimer)}</p></div>
  </div>`;
}

/* ---------- Validation ---------- */
function validateStep() {
  const tt = t();
  state.errors = {};
  if (state.step === 1) {
    if (state.data.categories.length === 0) state.errors.categories = tt.step1Error;
  }
  if (state.step === 2) {
    const n = Number(state.data.householdSize);
    if (!Number.isFinite(n) || n < 1 || n > 15) state.errors.householdSize = tt.step2SizeError;
    if (!state.data.county) state.errors.county = tt.step2CountyError;
  }
  return Object.keys(state.errors).length === 0;
}

/* ---------- Eligibility ---------- */
function checkEligibility() {
  const d = state.data;
  const selected = d.benefits || [];
  const hasCategoricalBenefit = selected.length > 0 && !selected.includes("none");
  const limit = getMonthlyIncomeLimit(Number(d.householdSize));
  let monthlyIncome = Number(d.incomeAmount) || 0;

  switch (d.incomeFrequency) {
    case "weekly":
      monthlyIncome = monthlyIncome * 4.33;
      break;
    case "biweekly":
      monthlyIncome = monthlyIncome * 2.16;
      break;
    case "yearly":
      monthlyIncome = monthlyIncome / 12;
      break;
  }

  const incomeEligible = monthlyIncome <= limit;
  const eligible = hasCategoricalBenefit || incomeEligible;
  state.result = eligible ? "eligible" : "ineligible";
  state.summary = {
    categories: d.categories.slice(),
    benefits: d.benefits.slice(),
    householdSize: Number(d.householdSize),
    incomeAmount: Number(d.incomeAmount) || 0,
    incomeFrequency: d.incomeFrequency || "monthly",
    monthlyIncome,
    incomeLimit: limit,
    screenedAt: new Date().toLocaleDateString(state.lang === "es" ? "es-US" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
  fetch("https://script.google.com/macros/s/AKfycbwqGdZMrHfWYfFY7cm_WjcCgtDMHw85awdXjY4ziWFnGZZQuey5hSuwgQvbfVrrD-uA0g/exec", {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify({
    county: d.county || "",
    participantCategory: d.categories.join(", "),
    householdSize: Number(d.householdSize),
    monthlyIncome: Number(d.incomeAmount) || 0,
    categoricalBenefit: hasCategoricalBenefit ? "Yes" : "No",
    result: state.result
  })
});
  state.step = 5;
  render();
}

/* ---------- Zip search ---------- */
function handleZipSearch() {
  const input = document.getElementById("zip");
  const zip = (input ? input.value : "").trim();
  if (!/^\d{5}$/.test(zip)) {
    state.zipError = true;
    render();
    return;
  }
  state.zipError = false;
  window.open(`https://www.google.com/maps/search/WIC+clinic+near+${encodeURIComponent(zip)}`, "_blank", "noreferrer");
}

/* ---------- Render ---------- */
function render() {
  const tt = t();

  document.getElementById("app-title").textContent = tt.appTitle;
  document.getElementById("footer-text").textContent = tt.footer;
  const langEn = document.getElementById("lang-en");
  const langEs = document.getElementById("lang-es");
  langEn.classList.toggle("active", state.lang === "en");
  langEs.classList.toggle("active", state.lang === "es");
  langEn.setAttribute("aria-pressed", String(state.lang === "en"));
  langEs.setAttribute("aria-pressed", String(state.lang === "es"));

  const progressWrap = document.getElementById("progress-wrap");
  const nav = document.getElementById("nav");
  const container = document.getElementById("step-container");

  if (state.step < 5) {
    progressWrap.classList.remove("hidden");
    nav.classList.remove("hidden");
    const pct = Math.round((state.step / 4) * 100);
    document.getElementById("progress-step").textContent = tt.stepOf(state.step, 4);
    document.getElementById("progress-percent").textContent = pct + "%";
    document.getElementById("progress-bar").style.width = pct + "%";

    document.getElementById("nav-back-slot").innerHTML =
      state.step > 1 ? `<button class="btn btn-ghost" id="btn-back">${ICON.chevronLeft}${esc(tt.back)}</button>` : "<div></div>";
    const nextBtn = document.getElementById("btn-next");
    nextBtn.innerHTML = (state.step === 4 ? esc(tt.checkEligibility) : esc(tt.next)) + (state.step < 4 ? ICON.chevronRight : "");
  } else {
    progressWrap.classList.add("hidden");
    nav.classList.add("hidden");
  }

  if (state.step === 1) container.innerHTML = renderStep1();
  else if (state.step === 2) container.innerHTML = renderStep2();
  else if (state.step === 3) container.innerHTML = renderStep3();
  else if (state.step === 4) container.innerHTML = renderStep4();
  else container.innerHTML = renderResult();

  bindStepEvents();
}

/* ---------- Event binding (per render) ---------- */
function bindStepEvents() {
  const back = document.getElementById("btn-back");
  if (back) back.onclick = () => { state.step -= 1; state.errors = {}; render(); };

  document.querySelectorAll('input[data-kind]').forEach((el) => {
    el.onchange = () => {
      const kind = el.getAttribute("data-kind");
      const id = el.getAttribute("data-id");
      if (kind === "category") {
        const cur = state.data.categories;
        state.data.categories = el.checked ? [...cur, id] : cur.filter((c) => c !== id);
        if (state.data.categories.length) delete state.errors.categories;
      } else if (kind === "benefit") {
        const cur = state.data.benefits;
        if (id === "none") {
          state.data.benefits = el.checked ? ["none"] : [];
        } else {
          state.data.benefits = el.checked ? [...cur.filter((b) => b !== "none"), id] : cur.filter((b) => b !== id);
        }
      }
      render();
    };
  });

  const hs = document.getElementById("householdSize");
  if (hs) hs.oninput = () => { state.data.householdSize = hs.value; };

  const county = document.getElementById("county");
  if (county) county.onchange = () => { state.data.county = county.value; if (county.value) delete state.errors.county; };

  const amt = document.getElementById("incomeAmount");
  if (amt) amt.oninput = () => { state.data.incomeAmount = amt.value; };

  const freq = document.getElementById("incomeFrequency");
  if (freq) freq.onchange = () => { state.data.incomeFrequency = freq.value; };

  const zipBtn = document.getElementById("btn-zip");
  if (zipBtn) zipBtn.onclick = handleZipSearch;
  const zip = document.getElementById("zip");
  if (zip) {
    zip.oninput = () => { zip.value = zip.value.replace(/\D/g, "").slice(0, 5); state.zipError = false; };
    zip.onkeydown = (e) => { if (e.key === "Enter") handleZipSearch(); };
  }

  const printBtn = document.getElementById("btn-print");
  if (printBtn) printBtn.onclick = () => window.print();
  const resetBtn = document.getElementById("btn-reset");
  if (resetBtn) resetBtn.onclick = reset;
}

function reset() {
  state.step = 1;
  state.result = null;
  state.summary = null;
  state.errors = {};
  state.zipError = false;
  state.data = { categories: [], householdSize: 1, county: "", benefits: [], incomeAmount: 0, incomeFrequency: "monthly" };
  render();
}

/* ---------- Global nav (bound once) ---------- */
function init() {
  document.getElementById("lang-en").onclick = () => { state.lang = "en"; render(); };
  document.getElementById("lang-es").onclick = () => { state.lang = "es"; render(); };
  document.getElementById("btn-next").onclick = () => {
    if (!validateStep()) { render(); return; }
    if (state.step === 4) { checkEligibility(); return; }
    state.step += 1;
    state.errors = {};
    render();
  };
  render();
}

document.addEventListener("DOMContentLoaded", init);
