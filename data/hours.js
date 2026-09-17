// ============================================================
// Hope4All Clinic — Site Configuration
// Edit this file to update content across the entire website.
// ============================================================

// ----- Operating Hours -----
const CLINIC_HOURS = [
  { day: "Monday",    open: "08:00", close: "17:00" },
  { day: "Tuesday",   open: "08:00", close: "17:00" },
  { day: "Wednesday", open: "08:00", close: "17:00" },
  { day: "Thursday",  open: "08:00", close: "17:00" },
  { day: "Friday",    open: "08:00", close: "17:00" },
  { day: "Saturday",  open: null,    close: null    },
  { day: "Sunday",    open: "08:30", close: "13:00" },
];

// ----- Contact info — single source of truth -----
const CLINIC_CONTACT = {
  phone: "081 278 4809",
  phoneInternational: "+27812784809",
  email: "info@hope4allclinic.co.za",
  emails: [
    "info@hope4allclinic.co.za",
    "Rosalia.Mosae@hope4allclinic.co.za",
  ],
  emailAlternative: "rosalia.mosae@gmail.com",
  address: "405 Long Road, Doorn, Welkom",
  practiceNumber: "0620181",
  sanc: "13633151",
  sasohn: "4298",
};

// ----- Registration acronyms (hover tooltips) -----
const CLINIC_ACRONYMS = {
  SANC: "South African Nursing Council",
  SASOHN: "South African Society of Occupational Health Nursing Practitioners",
};

// ----- Services (used in the marquee ticker) -----
const CLINIC_SERVICES = [
  "Drip Therapy",
  "Pre-Employment Medicals",
  "Periodic Medicals",
  "Follow-Up Medicals",
  "Primary Healthcare",
  "Child Health",
  "Women's Health (Contraceptives)",
  "Men's Health (Circumcision)",
  "Chronic Consultations",
  "Minor Ailments",
  "Sonar Scans",
  "Antenatal & Postnatal Care",
  "Basic Tests",
];

// ----- Booking form — grouped service categories -----
const CLINIC_BOOKING_SERVICES = [
  {
    group: "Drip Therapy",
    services: ["General Drip Therapy"],
  },
  {
    group: "Pre-Employment & Occupational Medicals",
    services: [
      "Pre-Employment Medical",
      "Periodic Medical",
      "Follow-Up Medical",
    ],
  },
  {
    group: "Primary Healthcare",
    services: [
      "General Consultation",
      "Child Health",
      "Women's Health (Contraceptives)",
      "Men's Health (Circumcision)",
      "Chronic Disease Consultation",
      "Minor Ailments",
    ],
  },
  {
    group: "Maternal & Diagnostic",
    services: [
      "Antenatal Care",
      "Postnatal Care",
      "Sonar Scan",
      "Basic Tests",
    ],
  },
];

// ----- Social links -----
const CLINIC_SOCIAL = {
  facebook: "https://www.facebook.com/hope4allclinic/",
  medpages: "https://www.medpages.info/sf/index.php?page=person&personcode=297378",
  whatsapp:
    "https://wa.me/27812784809?text=" +
    encodeURIComponent(
      "Hello Hope4All Clinic, I would like to know more about your services."
    ),
};

// ----- Frequently Asked Questions -----
const CLINIC_FAQS = [
  {
    q: "What services does Hope4All Clinic offer?",
    a: "We offer drip therapy, pre-employment, periodic and follow-up medicals, primary healthcare (child health, women's and men's health, chronic consultations, minor ailments), antenatal and postnatal care, sonar scans and basic tests.",
  },
  {
    q: "What is drip therapy and who can benefit from it?",
    a: "Drip therapy delivers vitamins, fluids and medication directly into the bloodstream for faster absorption. It is useful for dehydration, fatigue, immune support and recovery. Our professional team will assess whether it is suitable for you.",
  },
  {
    q: "What is included in a pre-employment medical?",
    a: "A pre-employment medical checks whether a candidate is fit to perform the job. It typically includes a health questionnaire, physical examination and basic tests required by the employer, as well as periodic and follow-up medicals for ongoing occupational health.",
  },
  {
    q: "What is the difference between periodic and follow-up medicals?",
    a: "Periodic medicals are regular occupational health check-ups done at set intervals for people in specific jobs. Follow-up medicals are done over time to monitor a known condition, injury or exposure, ensuring it is managed properly.",
  },
  {
    q: "Do you offer women's health and contraceptive services?",
    a: "Yes. We provide women's health services including contraceptive counselling and prescriptions, plus general gynaecological and wellness care in a private, respectful environment.",
  },
  {
    q: "Do you offer men's health services including circumcision?",
    a: "Yes. We offer men's health consultations, including medical adult and adolescent circumcision performed professionally with proper aftercare guidance.",
  },
  {
    q: "Can I book a sonar scan without a referral?",
    a: "Yes, you may book a sonar scan directly. We also do antenatal scans as part of pregnancy care. Contact us and we will help you arrange the right scan for your needs.",
  },
  {
    q: "Do you manage chronic conditions?",
    a: "Yes. We provide chronic disease consultations for conditions such as hypertension, diabetes, asthma and more. We assess, monitor and help you manage your condition with ongoing care and periodic follow-ups.",
  },
  {
    q: "What antenatal and postnatal care do you provide?",
    a: "We offer antenatal care including monitoring, scans and wellness checks throughout pregnancy, as well as postnatal care for mother and baby after delivery.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book using the booking form on this website — the request is sent to our clinic via WhatsApp and confirmed during working hours. You can also call us on 081 278 4809 or WhatsApp us directly.",
  },
  {
    q: "What are your opening hours?",
    a: "Monday to Friday: 08:00 – 17:00, Saturday: closed, Sunday: 08:30 – 13:00. We are registered practitioners with a valid practice number, SANC and SASOHN accreditation.",
  },
];

const CLINIC_NAME = "Hope4All Clinic";
const CLINIC_TAGLINE = "Your Health Partners Who Care";
