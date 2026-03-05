import { useState } from "react";

const FONT = "'Funnel Sans', sans-serif";

// ANGLOVILLE KNOWLEDGE BASE
const ANGLOVILLE_KNOWLEDGE = `
ANGLOVILLE – PEŁNA BAZA WIEDZY O PROGRAMACH (2025/2026)

=== FILOZOFIA ===
Angloville działa od 2011 roku jako lider turystyki edukacyjnej w Polsce i Europie.
Metoda: "Angielska Wioska" = pełna immersja językowa (100% angielski, 0% polskiego).
Formuła: 1 native speaker na 2 uczestników (lub 1:1 dla dorosłych).
Native Speakerzy: absolwenci uczelni z UK, USA, Irlandii, Australii, Kanady.
Ocena Google: 4.8/5 na podstawie 1948 opinii.
Efekt: 7 dni w Angielskiej Wiosce = ok. 400h tradycyjnych lekcji szkolnych.
Płatność: do 6 rat 0% (bez kredytu).

=== PROGRAMY DLA DOROSŁYCH ===

1. ANGIELSKA WIOSKA W POLSCE
   - Dla kogo: dorośli wszystkich poziomów (B1-C2)
   - Czas: 6 dni
   - Format: sesje 1 na 1 z native speakerem, 70h aktywnej komunikacji
   - Lokalizacje: hotele w całej Polsce (z dala od miast, otoczone zielenią)
   - Cena: od ~3700 zł (zakwaterowanie + wyżywienie + program)
   - Link: https://angloville.pl/dla-doroslych/angielska-wioska/
   - Unikat: różne akcenty (UK, USA, Irlandia, Australia) w jednym miejscu
   - Typowy dzień: śniadanie → sesja 1:1 → warsztaty → lunch → sesja tematyczna → aktywności → kolacja → wieczorne konwersacje

2. ANGIELSKA WIOSKA DLA POCZĄTKUJĄCYCH
   - Dla kogo: dorośli poziom A1-A2, osoby wracające po przerwie
   - Czas: 6 dni
   - Format: sesje 1 na 1, tempo i poziom dopasowany indywidualnie
   - Cena: od ~3700 zł
   - Link: https://angloville.pl/dla-doroslych/nauka-od-podstaw/
   - Szczególność: zero presji, zero oceniania, bezpieczna atmosfera

3. ANGLOVILLE WEEKEND
   - Dla kogo: dorośli z mało czasu / chcący sprawdzić metodę
   - Czas: 3 dni (weekend)
   - Format: sesje 1 na 1, ścieżki tematyczne do wyboru
   - Cena: od ~1800 zł
   - Link: https://angloville.pl/dla-doroslych/angloville-weekend/
   - Ścieżki: biznesowa, ogólna, konwersacyjna

4. WYJAZDY TURYSTYCZNO-JĘZYKOWE 18-40
   - Kalifornia 18-40: https://angloville.pl/young-adults/kalifornia/
   - Japonia 18-40: https://angloville.pl/young-adults/japonia/

5. WYJAZDY TURYSTYCZNO-JĘZYKOWE 40+
   - Nowy Jork 40+: https://angloville.pl/dla-doroslych/wyjazd-jezykowy-nowy-jork/
   - Kalifornia 40+: https://angloville.pl/dla-doroslych/kalifornia/
   - Japonia 40+: https://angloville.pl/dla-doroslych/japonia/

=== PROGRAMY DLA DZIECI I MŁODZIEŻY ===

6. ANGLOVILLE KIDS (7-11 lat)
   - Dla kogo: dzieci 7-11 lat
   - Czas: 7 dni
   - Format: grupy wiekowe, nauka przez zabawę, gry, warsztaty artystyczne
   - Aktywności: 60h zabaw po angielsku, całodobowa opieka kadry
   - Cena: od ~3700 zł
   - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-kids/
   - Szczegóły: dzieci naturalnie przyswajają wymowę od podstaw, zero stresu

7. ANGLOVILLE JUNIOR (11-18 lat) – POLSKA
   - Dla kogo: młodzież 11-18 lat
   - Czas: 7 dni
   - Format: sesje 2 na 1 z native speakerem, 70h+ komunikacji
   - Aktywności: konwersacje, gry zespołowe, warsztaty artystyczne i sportowe, wycieczki
   - Cena: od ~3700 zł
   - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior/
   - Efekty: przełamanie bariery mówienia, myślenie w angielskim, pewność siebie
   - Proporcja: 1 native speaker na 2 uczestników = maksymalny kontakt z językiem

8. ANGLOVILLE FAMILY (dzieci + rodzice)
   - Dla kogo: rodziny z dziećmi
   - Czas: 7 dni
   - Format: OSOBNE sesje dla dorosłych i dzieci + WSPÓLNE projekty rodzinne
   - Cena: od ~7000 zł (rodzic + dziecko)
   - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-family/
   - Unikat: jedyny program w Polsce, gdzie rodzic i dziecko uczą się razem

=== OBOZY JĘZYKOWE ZA GRANICĄ ===

9. ANGLOVILLE JUNIOR INTERNATIONAL – MALTA (13-18 lat)
   - Czas: 14 dni
   - Format: 150h+ z native speakerami, sesje 2 na 1
   - Wycieczki: Valetta, Mdina, wyspa Gozo, park wodny Popeye Village
   - Cena: od ~8900 zł
   - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/

10. ANGLOVILLE JUNIOR INTERNATIONAL – ANGLIA (13-18 lat)
    - Czas: 14 dni
    - Format: intensywna immersja w Anglii z native speakerami
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-anglia/

=== OBOZY TURYSTYCZNO-JĘZYKOWE W EUROPIE ===

11. UK TRIP (12-18 lat) – Londyn, Oxford, Cambridge
    - Czas: 10-14 dni
    - Program: Londyn (Westminster, British Museum, City, London Eye), Oxford, Cambridge
    - Zakwaterowanie: u brytyjskich rodzin goszczących LUB w hotelu
    - Cena: od ~6500 zł
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/

12. EUROTRIP (12-18 lat)
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-eurotrip/

13. BALTIC TRIP (12-18 lat) – 5 nadbałtyckich stolic, 3 statki
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-baltic-trip/

14. ITALY TRIP (12-18 lat) – Rzym, Florencja, Wenecja, Watykan, San Marino
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-italy-trip/

=== OBOZY NA ŚWIECIE ===

15. KALIFORNIA (14-18 lat): https://angloville.pl/dla-dzieci-i-mlodziezy/kalifornia/
16. NOWY JORK (14-18 lat): https://angloville.pl/dla-dzieci-i-mlodziezy/nowy-jork/
17. MIAMI (14-18 lat): https://angloville.pl/dla-dzieci-i-mlodziezy/miami/
18. JAPONIA (14-18 lat): https://angloville.pl/dla-dzieci-i-mlodziezy/japonia/

=== WYMIANA UCZNIOWSKA ===

19. ROK W USA (15-18.5 lat)
    - Czas: 10 miesięcy
    - Format: nauka w prawdziwym amerykańskim liceum + rodzina goszcząca
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-usa/

20. ROK W KANADZIE (14-18.5 lat)
    - Link: https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-kanadzie/

21. AMERYKAŃSKIE LICEUM ONLINE (15-18.5 lat)
    - Link: https://angloville.pl/amerykanskie-liceum-online/

=== KURSY DLA FIRM ===
    - Link: https://angloville.pl/dla-doroslych/angielska-wioska/

=== KLUCZOWE FAKTY SPRZEDAŻOWE ===
- 7 dni = odpowiednik 400 godzin tradycyjnych lekcji
- Bariera mówienia dotyka 97% Polaków znających angielski teoretycznie
- Po 6 dniach immersji mózg zaczyna myśleć po angielsku
- Różne akcenty w jednym miejscu (UK, USA, Irlandia, Australia)
- Zniżka za wczesny zapis - im wcześniej, tym taniej
- Absolwenci Angloville dostają zniżkę za kolejny wyjazd
- Polecenie nowego uczestnika = zniżka 300 zł dla polecającego
`;

// QUIZ STEPS
const STEPS = [
  {
    id: "who",
    question: "Dla kogo szukasz kursu angielskiego?",
    emoji: "👋",
    subtitle: "Dopasujemy ofertę idealnie do Twoich potrzeb",
    showFor: null,
    options: [
      { id: "me", label: "Dla mnie (dorosły/a)", emoji: "🙋", desc: "Chcę poprawić swój angielski" },
      { id: "child", label: "Dla mojego dziecka", emoji: "🧒", desc: "Szukam obozu językowego" },
      { id: "family", label: "Dla całej rodziny", emoji: "👪", desc: "Chcemy uczyć się razem" },
      { id: "teen", label: "Jestem nastolatkiem", emoji: "🎒", desc: "Sam/a szukam dla siebie" },
    ],
  },
  {
    id: "level",
    question: "Jaki jest Twój poziom angielskiego?",
    emoji: "📊",
    subtitle: "Szczera odpowiedź = lepiej dopasowany program",
    showFor: ["me"],
    options: [
      { id: "beginner", label: "Początkujący (A1–A2)", emoji: "🌱", desc: "Uczę się od podstaw lub po długiej przerwie" },
      { id: "intermediate", label: "Średniozaawansowany (B1–B2)", emoji: "📈", desc: "Rozumiem sporo, ale boję się mówić" },
      { id: "advanced", label: "Zaawansowany (C1-C2)", emoji: "🚀", desc: "Mówię dobrze, chcę perfekcji i pewności" },
    ],
  },
  {
    id: "goal",
    question: "Jaki jest Twój główny cel?",
    emoji: "🎯",
    subtitle: "Co najbardziej boli Cię w obecnej sytuacji?",
    showFor: ["me"],
    options: [
      { id: "barrier", label: "Przełamać barierę mówienia", emoji: "💬", desc: "Milknę przy obcokrajowcach, chcę to zmienić" },
      { id: "career", label: "Awans i kariera", emoji: "💼", desc: "Angielski blokuje mi drogę zawodową" },
      { id: "travel", label: "Podroze i swoboda", emoji: "✈️", desc: "Chcę rozmawiać bez stresu na całym świecie" },
      { id: "exam", label: "Egzamin / certyfikat", emoji: "📜", desc: "FCE, IELTS, TOEFL — mam deadline" },
    ],
  },
  {
    id: "tried",
    question: "Co już próbowałeś/aś wcześniej?",
    emoji: "🔄",
    subtitle: "Chcemy wiedzieć, żeby nie proponować tego samego",
    showFor: ["me"],
    options: [
      { id: "school", label: "Kursy stacjonarne / szkola", emoji: "🏫", desc: "Lekcje, ćwiczenia, słówka — bez efektu" },
      { id: "app", label: "Aplikacje (Duolingo, itp.)", emoji: "📱", desc: "Ćwiczyłem/am regularnie, ale mówić nie umiem" },
      { id: "nothing", label: "Nic konkretnego", emoji: "🤷", desc: "Chcę zacząć od czegoś skutecznego" },
      { id: "immersion", label: "Byłem/am już na immersji", emoji: "✅", desc: "Wiem jak to działa, chcę więcej" },
    ],
  },
  {
    id: "urgency",
    question: "Kiedy chcesz zacząć?",
    emoji: "⏰",
    subtitle: "Im szybciej zaczniesz — tym szybciej zobaczysz efekty",
    showFor: ["me"],
    options: [
      { id: "asap", label: "Jak najszybciej!", emoji: "🔥", desc: "Chcę termin w ciągu najbliższych tygodni" },
      { id: "months3", label: "W ciągu 3 miesięcy", emoji: "📅", desc: "Planuję, szukam odpowiedniego terminu" },
      { id: "summer", label: "Wakacje / urlop", emoji: "☀️", desc: "Chcę połączyć z wypoczynkiem" },
      { id: "explore", label: "Jeszcze nie wiem, poznaję opcje", emoji: "🔍", desc: "Dopiero zbieram informacje" },
    ],
  },
  {
    id: "child_age",
    question: "Ile lat ma Twoje dziecko?",
    emoji: "🎂",
    subtitle: "Każdy program jest zaprojektowany dla konkretnej grupy wiekowej",
    showFor: ["child"],
    options: [
      { id: "a7", label: "7-11 lat", emoji: "🧸", desc: "Szkoła podstawowa, klasy 1–5" },
      { id: "a11", label: "11-13 lat", emoji: "📚", desc: "Szkoła podstawowa, klasy 6–8" },
      { id: "a13", label: "13-15 lat", emoji: "🎒", desc: "Liceum / pierwsze klasy" },
      { id: "a15", label: "15-18 lat", emoji: "🎓", desc: "Liceum, przed maturą" },
    ],
  },
  {
    id: "child_goal",
    question: "Co jest teraz największym problemem Twojego dziecka?",
    emoji: "🌟",
    subtitle: "Będziemy szczerzy — co Cię najbardziej niepokoi?",
    showFor: ["child"],
    options: [
      { id: "barrier", label: "Boi się mówić po angielsku", emoji: "😶", desc: "Rozumie, ale milczy — to hamuje go w szkole" },
      { id: "matura", label: "Matura sie zbliza", emoji: "📝", desc: "Trzeba zdać maturę ustną — deadline goni" },
      { id: "grades", label: "Slabe oceny z angielskiego", emoji: "📉", desc: "Szkoła nie daje efektów mimo kursów" },
      { id: "adventure", label: "Chcę mu/jej dać coś wyjątkowego", emoji: "🌟", desc: "Wakacje + angielski + wspomnienia na całe życie" },
    ],
  },
  {
    id: "destination",
    question: "Polska czy zagranica?",
    emoji: "🌍",
    subtitle: "Zagranica = 2x szybszy postęp. Ale oba działają.",
    showFor: ["child"],
    options: [
      { id: "pl", label: "Polska — blisko, bezpiecznie", emoji: "🇵🇱", desc: "Angielska Wioska w Polsce, łatwy dojazd" },
      { id: "europe", label: "Europa — Londyn, Malta, Włochy…", emoji: "🏰", desc: "Obóz językowy za granicą" },
      { id: "world", label: "Świat — USA, Japonia, Miami…", emoji: "🌎", desc: "Prawdziwa przygoda życia" },
      { id: "unsure", label: "Nie wiem, doradź mi", emoji: "🤔", desc: "Powiedz mi co wybrać" },
    ],
  },
  {
    id: "child_sent_before",
    question: "Czy dziecko było już na obozie językowym?",
    emoji: "🏕️",
    subtitle: "To pomoże nam dobrać odpowiedni poziom intensywności",
    showFor: ["child"],
    options: [
      { id: "never", label: "Nie, to byłby pierwszy raz", emoji: "🆕", desc: "Pierwsze doświadczenie z immersją" },
      { id: "once", label: "Tak, raz — w Polsce", emoji: "🇵🇱", desc: "Wie mniej więcej co to jest" },
      { id: "multiple", label: "Tak, kilka razy", emoji: "🔁", desc: "Szuka czegoś nowego, wymagającego" },
      { id: "abroad_yes", label: "Tak, był/a za granicą", emoji: "✈️", desc: "Ma już doświadczenie z wyjazdu zagranicznego" },
    ],
  },
  {
    id: "teen_goal",
    question: "Co chcesz osiągnąć?",
    emoji: "🎯",
    subtitle: "Powiedz nam — co naprawdę chcesz zmienić?",
    showFor: ["teen"],
    options: [
      { id: "barrier", label: "Przełamać barierę mówienia", emoji: "💬", desc: "Rozumiem, ale nie mówię — chcę to zmienić" },
      { id: "matura", label: "Zdac mature ustna", emoji: "📝", desc: "Mam maturę i serio muszę się przygotować" },
      { id: "adventure", label: "Przygoda + angielski za granicą", emoji: "✈️", desc: "Chcę wyjechać i coś naprawdę przeżyć" },
      { id: "usa_year", label: "Rok szkolny w USA lub Kanadzie", emoji: "🗽", desc: "Marzę o całym roku za granicą" },
    ],
  },
  {
    id: "teen_age",
    question: "Ile masz lat?",
    emoji: "🎂",
    subtitle: "Rozne programy maja rozne przedzialy wiekowe",
    showFor: ["teen"],
    options: [
      { id: "t11", label: "11-12 lat", emoji: "🏫", desc: "" },
      { id: "t13", label: "13-14 lat", emoji: "📚", desc: "" },
      { id: "t15", label: "15-16 lat", emoji: "🎒", desc: "" },
      { id: "t17", label: "17-18 lat", emoji: "🎓", desc: "" },
    ],
  },
  {
    id: "teen_tried",
    question: "Co już próbowałeś/aś z angielskim?",
    emoji: "🔄",
    subtitle: "Chcemy zaproponować coś, co naprawdę zadziała",
    showFor: ["teen"],
    options: [
      { id: "school_only", label: "Tylko szkola", emoji: "🏫", desc: "Lekcje, testy — ale mówić wciąż nie umiem" },
      { id: "tutor", label: "Korepetytor / kurs online", emoji: "💻", desc: "Dodatkowe lekcje, ale bez przełomu" },
      { id: "camp_pl", label: "Oboz jezykowy w Polsce", emoji: "🇵🇱", desc: "Byłem/am — chcę czegoś więcej" },
      { id: "nothing", label: "Nic - chce zaczac dobrze", emoji: "🚀", desc: "Wolę zacząć od skutecznej metody" },
    ],
  },
];


// PRODUCT RECOMMENDATIONS
function getRecommended(answers) {
  const { who, level, time, child_age, destination, teen_goal, teen_age } = answers;

  if (who === "family") return {
    key: "family",
    name: "Angloville Family",
    icon: "👪",
    tag: "Rodzina · Polska",
    price: "od 7 000 zł (rodzic + dziecko)",
    link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-family/",
    altLinks: [
      { label: "Angielska Wioska (dla dorosłych)", url: "https://angloville.pl/dla-doroslych/angielska-wioska/" },
      { label: "Angloville Kids (dla dzieci 7-11)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-kids/" },
    ],
  };

  if (who === "me") {
    // Travel / adventure → abroad trips
    if (answers.goal === "travel") return {
      key: "adult_travel",
      name: "Wyjazdy turystyczno-językowe",
      icon: "✈️",
      tag: "Dorośli · Świat · Językowo + turystycznie",
      price: "Indywidualna wycena",
      link: "https://angloville.pl/dla-doroslych/wyjazd-jezykowy-nowy-jork/",
      altLinks: [
        { label: "Nowy Jork + Toronto 40+", url: "https://angloville.pl/dla-doroslych/wyjazd-jezykowy-nowy-jork/" },
        { label: "Kalifornia 18–40", url: "https://angloville.pl/young-adults/kalifornia/" },
        { label: "Japonia 18–40", url: "https://angloville.pl/young-adults/japonia/" },
        { label: "Kalifornia 40+", url: "https://angloville.pl/dla-doroslych/kalifornia/" },
        { label: "Japonia 40+", url: "https://angloville.pl/dla-doroslych/japonia/" },
      ],
    };
    // Beginners → dedicated beginner programme
    if (level === "beginner") return {
      key: "beginners",
      name: "Angielska Wioska dla Początkujących",
      icon: "🌱",
      tag: "Dorośli · A1–A2 · Polska",
      price: "od 3 700 zł",
      link: "https://angloville.pl/dla-doroslych/nauka-od-podstaw/",
      altLinks: [
        { label: "Angielska Wioska (standard)", url: "https://angloville.pl/dla-doroslych/angielska-wioska/" },
      ],
    };
    // Default: barrier / career / exam → Angielska Wioska w Polsce
    return {
      key: "adult_standard",
      name: "Angielska Wioska w Polsce",
      icon: "🏡",
      tag: "Dorośli · 6 dni · Polska",
      price: "od 3 700 zł",
      link: "https://angloville.pl/dla-doroslych/angielska-wioska/",
      altLinks: [
        { label: "Angielska Wioska dla Początkujących", url: "https://angloville.pl/dla-doroslych/nauka-od-podstaw/" },
        { label: "Nowy Jork + Toronto 40+", url: "https://angloville.pl/dla-doroslych/wyjazd-jezykowy-nowy-jork/" },
      ],
    };
  }

  if (who === "child") {
    if (child_age === "a7") return {
      key: "kids",
      name: "Angloville Kids",
      icon: "🧸",
      tag: "Dzieci 7–11 lat · Polska",
      price: "od 3 700 zł",
      link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-kids/",
      altLinks: [
        { label: "Angloville Family (razem z rodzicem)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-family/" },
      ],
    };

    const childGoal = answers.child_goal;

    // Adventure / travel → abroad first
    if (childGoal === "adventure" || destination === "world") return {
      key: "world",
      name: "USA / Nowy Jork / Kalifornia / Miami / Japonia",
      icon: "🌎",
      tag: "Młodzież 14–18 lat · Świat",
      price: "Indywidualna wycena",
      link: "https://angloville.pl/dla-dzieci-i-mlodziezy/nowy-jork/",
      altLinks: [
        { label: "Nowy Jork 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/nowy-jork/" },
        { label: "Kalifornia 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/kalifornia/" },
        { label: "Miami 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/miami/" },
        { label: "Japonia 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/japonia/" },
        { label: "UK Trip – Londyn, Oxford, Cambridge", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/" },
      ],
    };

    // Europe destination (Londyn, Malta, Włochy...)
    if (destination === "europe") {
      if (child_age === "a13" || child_age === "a15") return {
        key: "malta",
        name: "Junior International — Malta",
        icon: "🌊",
        tag: "Młodzież 13–18 lat · Malta",
        price: "od 8 900 zł",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/",
        altLinks: [
          { label: "Junior International – Anglia (13–18)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-anglia/" },
          { label: "UK Trip – Londyn, Oxford, Cambridge", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/" },
          { label: "Italy Trip – Rzym, Florencja, Wenecja", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-italy-trip/" },
        ],
      };
      return {
        key: "uk_trip",
        name: "Junior Plus — UK Trip",
        icon: "🇬🇧",
        tag: "Młodzież 12–18 lat · Londyn",
        price: "od 6 500 zł",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/",
        altLinks: [
          { label: "Junior International – Malta (intensywna nauka)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/" },
          { label: "Italy Trip – Rzym, Florencja, Wenecja", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-italy-trip/" },
          { label: "Baltic Trip – 5 nadbałtyckich stolic", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-baltic-trip/" },
        ],
      };
    }

    // Learning / barrier / matura / fun / Polska → Junior Poland, suggest Malta/Anglia as upgrade
    return {
      key: "junior",
      name: "Angloville Junior",
      icon: "🎒",
      tag: "Młodzież 11–18 lat · Polska",
      price: "od 3 700 zł",
      link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior/",
      altLinks: [
        { label: "Junior International – Malta (za granicą)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/" },
        { label: "Junior International – Anglia (za granicą)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-anglia/" },
      ],
    };
  }

  if (who === "teen") {
    if (teen_goal === "usa_year") {
      // USA wymaga 15-18.5 lat, Kanada 14-18.5 lat
      // teen_age: t11 = 11-12, t13 = 13-14, t15 = 15-16, t17 = 17-18
      const ageOkUSA = teen_age === "t15" || teen_age === "t17";
      const ageOkCanada = teen_age === "t13" || teen_age === "t15" || teen_age === "t17";

      if (ageOkUSA) return {
        key: "usa",
        name: "Rok Szkolny w USA",
        icon: "🗽",
        tag: "Licealiści 15–18.5 lat · USA",
        price: "Indywidualna wycena",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-usa/",
        ageNote: null,
        altLinks: [
          { label: "Rok w Kanadzie (14–18.5 lat)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-kanadzie/" },
          { label: "Amerykańskie Liceum Online (15–18.5 lat)", url: "https://angloville.pl/amerykanskie-liceum-online/" },
        ],
      };

      if (ageOkCanada) return {
        key: "canada",
        name: "Rok Szkolny w Kanadzie",
        icon: "🍁",
        tag: "Licealiści 14–18.5 lat · Kanada",
        price: "Indywidualna wycena",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-kanadzie/",
        ageNote: "Masz 13–14 lat — na rok w USA wymagane jest minimum 15 lat. Rok w Kanadzie jest już dla Ciebie dostępny! Na USA przyjdzie czas za chwilę. 🇺🇸",
        altLinks: [
          { label: "Rok w USA (od 15 lat)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-usa/" },
          { label: "Amerykańskie Liceum Online", url: "https://angloville.pl/amerykanskie-liceum-online/" },
          { label: "Junior International – Malta (teraz)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/" },
        ],
      };

      // Za młody na oba programy (11-12 lat) → zaproponuj obóz zagraniczny teraz + info o USA
      return {
        key: "too_young_usa",
        name: "Angloville Junior International — Malta",
        icon: "🌊",
        tag: "Młodzież 13–18 lat · Malta",
        price: "od 8 900 zł",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/",
        ageNote: "Masz 11–12 lat — rok w USA wymaga minimum 15 lat, rok w Kanadzie 14 lat. Na razie proponujemy intensywny obóz za granicą, który świetnie Cię przygotuje na wymianę! 🇺🇸 Marzenie o roku w USA staje się realne za 2–3 lata.",
        altLinks: [
          { label: "Rok w USA (od 15 lat) — zapisz się na listę zainteresowanych", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/rok-w-usa/" },
          { label: "Junior International – Anglia (13–18)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-anglia/" },
          { label: "UK Trip – Londyn, Oxford, Cambridge", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/" },
        ],
      };
    }
    if (teen_goal === "adventure") {
      const age = teen_age;
      if (age === "t15" || age === "t17") return {
        key: "world_teen",
        name: "USA Trip / Nowy Jork / Kalifornia / Japonia",
        icon: "🌎",
        tag: "Młodzież 14–18 lat · Świat",
        price: "Indywidualna wycena",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/nowy-jork/",
        altLinks: [
          { label: "Nowy Jork 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/nowy-jork/" },
          { label: "Kalifornia 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/kalifornia/" },
          { label: "Miami 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/miami/" },
          { label: "Japonia 14–18", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/japonia/" },
        ],
      };
      return {
        key: "uk_trip_teen",
        name: "Junior Plus — UK Trip",
        icon: "🇬🇧",
        tag: "Młodzież 12–18 lat · Londyn",
        price: "od 6 500 zł",
        link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/",
        altLinks: [
          { label: "Junior International – Malta (intensywna nauka)", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/" },
          { label: "Italy Trip – Rzym, Florencja, Wenecja", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-italy-trip/" },
          { label: "Baltic Trip – 5 nadbałtyckich stolic", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-baltic-trip/" },
        ],
      };
    }
    return {
      key: "junior_teen",
      name: "Angloville Junior",
      icon: "🎒",
      tag: "Młodzież 11–18 lat · Polska",
      price: "od 3 700 zł",
      link: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior/",
      altLinks: [
        { label: "Junior International – Malta", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-international-malta/" },
        { label: "UK Trip – Londyn, Oxford, Cambridge", url: "https://angloville.pl/dla-dzieci-i-mlodziezy/angloville-junior-plus-londyn/" },
      ],
    };
  }

  return {
    key: "adult_standard",
    name: "Angielska Wioska w Polsce",
    icon: "🏡",
    tag: "Dorośli · 6 dni · Polska",
    price: "od 3 700 zł",
    link: "https://angloville.pl/dla-doroslych/angielska-wioska/",
    altLinks: [],
  };
}

// AI CALL
async function callClaude(systemPrompt, userMessage) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    }),
  });
  const data = await response.json();
  return data.content[0].text;
}

// COMPONENTS
function ProgressBar({ step, total }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div style={{ width: "100%", height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2, marginBottom: 28 }}>
      <div style={{ height: "100%", width: pct + "%", background: "linear-gradient(90deg,#FCD23A,#428BCA)", borderRadius: 2, transition: "width 0.5s ease" }} />
    </div>
  );
}

function OptionBtn({ opt, selected, onPick }) {
  return (
    <button onClick={() => onPick(opt.id)} style={{
      background: selected ? "rgba(252,210,58,0.12)" : "rgba(255,255,255,0.04)",
      border: "2px solid " + (selected ? "#FCD23A" : "rgba(255,255,255,0.1)"),
      borderRadius: 14, padding: "16px 20px", cursor: "pointer",
      textAlign: "left", display: "flex", alignItems: "center", gap: 14,
      width: "100%", transition: "all 0.2s ease",
      boxShadow: selected ? "0 0 20px rgba(252,210,58,0.2)" : "none",
    }}>
      <span style={{ fontSize: 26, flexShrink: 0 }}>{opt.emoji}</span>
      <div style={{ flex: 1 }}>
        <div style={{ color: "rgba(255,255,255,0.88)", fontFamily: FONT, fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{opt.label}</div>
        {opt.desc && <div style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, fontSize: 13 }}>{opt.desc}</div>}
      </div>
      {selected && <span style={{ color: "#FCD23A", fontSize: 18, marginLeft: "auto" }}>✓</span>}
    </button>
  );
}

function TypewriterText({ text }) {
  const [displayed, setDisplayed] = useState("");
  useState(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{displayed}</span>;
}

function AIBlock({ title, content, loading, emoji }) {
  return (
    <div style={{
      background: "rgba(66,139,202,0.1)", border: "1px solid rgba(66,139,202,0.3)",
      borderRadius: 16, padding: "22px 24px", marginBottom: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 24 }}>{emoji || "✨"}</span>
        <div style={{ color: "#FCD23A", fontFamily: FONT, fontWeight: 700, fontSize: 15 }}>{title}</div>
        {loading && (
          <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: "50%", background: "#428BCA",
                animation: "pulse 1.2s ease-in-out infinite",
                animationDelay: i * 0.2 + "s",
              }} />
            ))}
          </div>
        )}
      </div>
      {loading
        ? <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT, fontSize: 14, fontStyle: "italic" }}>Analizuję Twój profil i przygotowuję spersonalizowaną odpowiedź...</div>
        : <div style={{ color: "rgba(255,255,255,0.78)", fontFamily: FONT, fontSize: 14, lineHeight: 1.75, whiteSpace: "pre-wrap" }}>{content}</div>
      }
    </div>
  );
}

// MAIN APP
export default function App() {
  const [answers, setAnswers] = useState({});
  const [stepIdx, setStepIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [phase, setPhase] = useState("quiz");
  const [aiEdu, setAiEdu] = useState(null);
  const [aiOnePager, setAiOnePager] = useState(null);
  const [loadingEdu, setLoadingEdu] = useState(false);
  const [loadingOnePager, setLoadingOnePager] = useState(false);

  const relevantSteps = STEPS.filter(s => !s.showFor || s.showFor.includes(answers.who));
  const currentStep = relevantSteps[stepIdx];
  const total = relevantSteps.length;

  async function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [currentStep.id]: selected };
    setAnswers(newAnswers);

    const newRelevant = STEPS.filter(s => !s.showFor || s.showFor.includes(newAnswers.who));

    if (stepIdx >= newRelevant.length - 1) {
      setPhase("edu");
      generateEdu(newAnswers);
    } else {
      setStepIdx(stepIdx + 1);
      setSelected(null);
    }
  }

  async function generateEdu(ans) {
    setLoadingEdu(true);
    const profileDesc = JSON.stringify(ans, null, 2);
    const system = `Jesteś doradcą językowym Angloville — ciepłym, konkretnym ekspertem.
Piszesz po POLSKU. NIE używasz nagłówków ani markdown. Jeden zwarty akapit.
Długość: MAKSYMALNIE 120 słów. Bądź zwięzły, empatyczny i przekonujący.
Odnieś się do konkretnej sytuacji klienta, krótko wyjaśnij jego problem i dlaczego immersja Angloville go rozwiąże.

BAZA WIEDZY O ANGLOVILLE:
${ANGLOVILLE_KNOWLEDGE}`;

    const prompt = `Na podstawie profilu klienta napisz spersonalizowany tekst edukacyjny PRZED pokazaniem oferty.
Odnieś się do jego konkretnej sytuacji, wyjaśnij DLACZEGO ma problem z angielskim (psychologia),
jak działa metoda immersji Angloville i dlaczego to rozwiąże JEGO konkretny problem.
Bądź sprzedawcą — buduj pożądanie oferty, ale rób to przez edukację, nie przez reklamę.

PROFIL KLIENTA:
${profileDesc}`;

    try {
      const text = await callClaude(system, prompt);
      setAiEdu(text);
    } catch (e) {
      setAiEdu("Angloville działa od 2011 roku i pomogło tysiącom osób przełamać barierę językową. Metoda pełnej immersji to najskuteczniejszy sposób nauki angielskiego — 7 dni w Angielskiej Wiosce to odpowiednik 400 godzin tradycyjnych lekcji.");
    }
    setLoadingEdu(false);
  }

  async function handleSeeOffer() {
    setPhase("result");
    const rec = getRecommended(answers);
    generateOnePager(answers, rec);
  }

  async function generateOnePager(ans, rec) {
    setLoadingOnePager(true);
    const system = `Jesteś copywriterem Angloville piszącym one-pagery sprzedażowe.
Piszesz po POLSKU. Twoje teksty są konkretne, przekonujące, pełne detali z programu.
Format odpowiedzi: JSON (bez markdown, bez backtick) z polami:
- tagline: (1 zdanie, chwytliwe)
- description: (3-4 zdania, szczegółowy opis programu z konkretnymi detalami)
- whyThis: (2-3 zdania dlaczego WŁAŚNIE ten program dla tego klienta)
- highlights: (tablica 5 konkretnych punktów "co dostajesz", każdy max 8 słów)
- urgency: (1 zdanie dlaczego warto zapisać się TERAZ)
- review: (prawdziwa opinia z bazy Angloville, pasująca do tego profilu)
- reviewAuthor: (autor opinii)

BAZA WIEDZY:
${ANGLOVILLE_KNOWLEDGE}`;

    const prompt = `Napisz one-pager dla:
PROFIL KLIENTA: ${JSON.stringify(ans)}
REKOMENDOWANY PROGRAM: ${rec.name} (${rec.tag})
LINK: ${rec.link}
CENA: ${rec.price}`;

    try {
      const text = await callClaude(system, prompt);
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setAiOnePager(parsed);
    } catch (e) {
      setAiOnePager({
        tagline: "Najlepszy program dopasowany do Twoich potrzeb",
        description: "Program Angloville łączy intensywną naukę z native speakerami z pełnym wypoczynkiem. Przez cały pobyt mówisz wyłącznie po angielsku — podczas śniadania, spacerów, gier i wieczornych konwersacji.",
        whyThis: "Na podstawie Twoich odpowiedzi ten program jest najlepiej dopasowany do Twoich celów i możliwości czasowych.",
        highlights: ["70h aktywnej komunikacji", "Native Speakerzy z UK, USA, Irlandii", "Zakwaterowanie + wyżywienie", "Różne akcenty w jednym miejscu", "Płatność do 6 rat 0%"],
        urgency: "Miejsca są ograniczone — zapisując się teraz zyskujesz zniżkę za wczesny zapis.",
        review: "Wyjazd spełnił wszystkie oczekiwania. Polecam każdemu, kto chce naprawdę mówić po angielsku.",
        reviewAuthor: "Uczestnik programu Angloville",
      });
    }
    setLoadingOnePager(false);
  }

  function handleReset() {
    setAnswers({}); setStepIdx(0); setSelected(null);
    setPhase("quiz"); setAiEdu(null); setAiOnePager(null);
  }

  const rec = getRecommended(answers);

  return (
    <div style={{ minHeight: "100vh", background: "#232323" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes fadeIn { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { opacity:0; transform:translateX(16px); } to { opacity:1; transform:translateX(0); } }
        @keyframes pulse { 0%,100% { opacity:0.3; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }
        html, body, #root { background:#232323 !important; min-height:100vh; }
        * { box-sizing:border-box; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.15); border-radius:2px; }
      `}</style>

      <div style={{ maxWidth: 580, margin: "0 auto", padding: "24px 16px 80px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ color: "#FCD23A", fontSize: 16 }}>●</span>
            <span style={{ color: "#428BCA", fontSize: 16 }}>●</span>
            <span style={{ color: "#fff", fontFamily: FONT, fontWeight: 800, fontSize: 20 }}>Angloville</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: FONT, fontSize: 13 }}>
            {phase === "quiz" && "Dobierz idealny program językowy"}
            {phase === "edu" && "Twój spersonalizowany raport"}
            {phase === "result" && "Twoja oferta"}
          </div>
        </div>

        {/* QUIZ */}
        {phase === "quiz" && currentStep && (
          <div style={{ animation: "slideIn 0.3s ease" }}>
            <ProgressBar step={stepIdx + 1} total={total} />
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 42, marginBottom: 10 }}>{currentStep.emoji}</div>
              <h2 style={{ color: "#fff", fontFamily: FONT, fontWeight: 800, fontSize: 22, margin: "0 0 8px", lineHeight: 1.3 }}>{currentStep.question}</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, fontSize: 14, margin: 0 }}>{currentStep.subtitle}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {currentStep.options.map(opt => <OptionBtn key={opt.id} opt={opt} selected={selected === opt.id} onPick={setSelected} />)}
            </div>
            <button onClick={handleNext} disabled={!selected} style={{
              width: "100%", background: selected ? "#FCD23A" : "rgba(255,255,255,0.07)",
              color: selected ? "#232323" : "rgba(255,255,255,0.25)", border: "none",
              borderRadius: 12, padding: "16px", fontFamily: FONT, fontWeight: 700,
              fontSize: 16, cursor: selected ? "pointer" : "not-allowed", transition: "all 0.2s ease",
              boxShadow: selected ? "0 4px 24px rgba(252,210,58,0.4)" : "none",
            }}>
              {stepIdx >= total - 1 ? "Pokaż mi ofertę →" : "Dalej →"}
            </button>
            <div style={{ textAlign: "center", marginTop: 14, color: "#555", fontFamily: FONT, fontSize: 12 }}>
              Pytanie {stepIdx + 1} z {total}
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {phase === "edu" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 42, marginBottom: 10 }}>🧠</div>
              <h2 style={{ color: "#fff", fontFamily: FONT, fontWeight: 800, fontSize: 22, margin: "0 0 8px" }}>
                Zanim zobaczysz ofertę — to musisz wiedzieć
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: FONT, fontSize: 14, margin: 0 }}>
                Przygotowuję dla Ciebie spersonalizowaną analizę
              </p>
            </div>

            <AIBlock
              emoji="🎯"
              title="Twoja sytuacja językowa — analiza"
              loading={loadingEdu}
              content={aiEdu}
            />

            {/* Static trust stats */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 22px", marginBottom: 16 }}>
              <div style={{ color: "#FCD23A", fontFamily: FONT, fontWeight: 700, fontSize: 14, marginBottom: 16 }}>📊 Angloville w liczbach</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  ["od 2011", "na rynku"],
                  ["10 000+", "uczestników rocznie"],
                  ["4.8 ★", "średnia Google (1948 opinii)"],
                  ["400h", "= 7 dni w Angielskiej Wiosce"],
                  ["1:2", "native speaker do uczestników"],
                  ["6 rat 0%", "elastyczna płatność"],
                ].map(([val, lab]) => (
                  <div key={lab}>
                    <div style={{ color: "#fff", fontFamily: FONT, fontWeight: 800, fontSize: 20 }}>{val}</div>
                    <div style={{ color: "#666", fontFamily: FONT, fontSize: 12, lineHeight: 1.4 }}>{lab}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleSeeOffer}
              disabled={loadingEdu}
              style={{
                width: "100%", background: loadingEdu ? "rgba(252,210,58,0.4)" : "#FCD23A",
                color: "#232323", border: "none", borderRadius: 14, padding: "18px",
                fontFamily: FONT, fontWeight: 800, fontSize: 17, cursor: loadingEdu ? "not-allowed" : "pointer",
                boxShadow: loadingEdu ? "none" : "0 8px 32px rgba(252,210,58,0.45)",
              }}
            >
              {loadingEdu ? "Przygotowuję Twoją ofertę..." : "Zobacz spersonalizowaną ofertę ✨"}
            </button>
          </div>
        )}

        {/* RESULT / ONE-PAGER */}
        {phase === "result" && (
          <div style={{ animation: "fadeIn 0.4s ease" }}>

            {/* Hero card */}
            <div style={{
              background: "linear-gradient(135deg,#1a2a3a,#1e1e2e)", borderRadius: 20,
              padding: "28px 24px", marginBottom: 16,
              border: "2px solid rgba(66,139,202,0.35)", position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -20, right: -20, fontSize: 130, opacity: 0.05 }}>{rec.icon}</div>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(252,210,58,0.15)", border: "1px solid rgba(252,210,58,0.4)", borderRadius: 100, padding: "4px 14px", marginBottom: 14 }}>
                <span style={{ color: "#FCD23A", fontFamily: FONT, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>✦ Twoja rekomendacja</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 }}>
                <span style={{ fontSize: 44 }}>{rec.icon}</span>
                <div>
                  <div style={{ color: "#555", fontFamily: FONT, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{rec.tag}</div>
                  <h2 style={{ color: "#fff", fontFamily: FONT, fontWeight: 800, fontSize: 24, margin: 0, lineHeight: 1.2 }}>{rec.name}</h2>
                </div>
              </div>

              {/* Age note banner */}
              {rec.ageNote && (
                <div style={{
                  background: "rgba(252,210,58,0.12)", border: "1px solid rgba(252,210,58,0.35)",
                  borderRadius: 12, padding: "14px 16px", marginBottom: 16,
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
                  <div style={{ color: "rgba(255,255,255,0.82)", fontFamily: FONT, fontSize: 14, lineHeight: 1.6 }}>{rec.ageNote}</div>
                </div>
              )}

              {/* AI tagline */}
              {aiOnePager && !loadingOnePager && (
                <div style={{ color: "#FCD23A", fontFamily: FONT, fontWeight: 700, fontSize: 16, fontStyle: "italic", margin: "12px 0 14px", lineHeight: 1.4 }}>
                  "{aiOnePager.tagline}"
                </div>
              )}

              {/* AI description */}
              <AIBlock
                emoji="📋"
                title="O tym programie"
                loading={loadingOnePager}
                content={aiOnePager ? aiOnePager.description : null}
              />

              {/* AI whyThis */}
              <AIBlock
                emoji="🎯"
                title="Dlaczego właśnie ten program dla Ciebie"
                loading={loadingOnePager}
                content={aiOnePager ? aiOnePager.whyThis : null}
              />

              {/* AI highlights */}
              {!loadingOnePager && aiOnePager && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ color: "#555", fontFamily: FONT, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>Co dostajesz</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                    {aiOnePager.highlights.map(h => (
                      <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: "#FCD23A", fontSize: 12, marginTop: 3, flexShrink: 0 }}>✦</span>
                        <span style={{ color: "rgba(255,255,255,0.75)", fontFamily: FONT, fontSize: 13, lineHeight: 1.5 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price + CTA */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(66,139,202,0.15)", border: "1px solid rgba(66,139,202,0.35)",
                borderRadius: 14, padding: "18px 20px", flexWrap: "wrap", gap: 14,
              }}>
                <div>
                  <div style={{ color: "#555", fontFamily: FONT, fontSize: 10, marginBottom: 3 }}>CENA</div>
                  <div style={{ color: "#428BCA", fontFamily: FONT, fontWeight: 800, fontSize: 26 }}>{rec.price}</div>
                  <div style={{ color: "#555", fontFamily: FONT, fontSize: 11 }}>zakwaterowanie + wyżywienie + program w cenie</div>
                </div>
                <a href={rec.link} target="_blank" rel="noopener noreferrer" style={{
                  background: "#FCD23A", color: "#232323", fontFamily: FONT, fontWeight: 800,
                  fontSize: 15, padding: "14px 24px", borderRadius: 12, textDecoration: "none",
                  whiteSpace: "nowrap", display: "inline-block",
                }}>
                  Zapisz się / Sprawdź terminy →
                </a>
              </div>
            </div>

            {/* AI urgency */}
            {!loadingOnePager && aiOnePager && (
              <div style={{ background: "rgba(252,210,58,0.1)", border: "1px solid rgba(252,210,58,0.25)", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 22 }}>⏰</span>
                <div style={{ color: "rgba(255,255,255,0.82)", fontFamily: FONT, fontSize: 14, lineHeight: 1.5 }}>{aiOnePager.urgency}</div>
              </div>
            )}

            {/* AI review */}
            {!loadingOnePager && aiOnePager && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "18px 20px", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ color: "#FCD23A", fontSize: 16 }}>★★★★★</span>
                  <span style={{ color: "#666", fontFamily: FONT, fontSize: 12 }}>Opinia uczestnika</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontFamily: FONT, fontSize: 14, lineHeight: 1.7, fontStyle: "italic", marginBottom: 8 }}>
                  "{aiOnePager.review}"
                </div>
                <div style={{ color: "#555", fontFamily: FONT, fontSize: 12 }}>— {aiOnePager.reviewAuthor}</div>
              </div>
            )}

            {/* Alt links */}
            {rec.altLinks && rec.altLinks.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ color: "#555", fontFamily: FONT, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>Może też Cię zainteresować</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {rec.altLinks.map(alt => (
                    <a key={alt.url} href={alt.url} target="_blank" rel="noopener noreferrer" style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                      borderRadius: 12, padding: "12px 16px", textDecoration: "none",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <span style={{ color: "rgba(255,255,255,0.75)", fontFamily: FONT, fontSize: 14 }}>{alt.label}</span>
                      <span style={{ color: "#428BCA", fontSize: 16 }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Payment info */}
            <div style={{ background: "rgba(66,139,202,0.08)", border: "1px solid rgba(66,139,202,0.2)", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 22 }}>💳</span>
              <div>
                <div style={{ color: "#428BCA", fontFamily: FONT, fontWeight: 700, fontSize: 14, marginBottom: 2 }}>Płatność w 6 ratach 0% — bez kredytu</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontFamily: FONT, fontSize: 12 }}>Pierwsza rata do 5 dni od zapisu. Kolejna 30 dni przed wyjazdem. Reszta w wygodnych ratach.</div>
              </div>
            </div>

            <button onClick={handleReset} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12,
              padding: "12px", color: "rgba(255,255,255,0.5)", fontFamily: FONT, fontSize: 14,
              cursor: "pointer", width: "100%",
            }}>
              ↩ Zacznij od nowa
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
