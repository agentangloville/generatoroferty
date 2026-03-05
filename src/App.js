import { useState } from "react";

const FONT = "'Funnel Sans', sans-serif";

// ─── ANGLOVILLE KNOWLEDGE BASE ───────────────────────────────────────────────
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

=== KLUCZOWE FAKTY SPRZEDAŻOWE ===
- 7 dni = odpowiednik 400 godzin tradycyjnych lekcji
- Bariera mówienia dotyka 97% Polaków znających angielski teoretycznie
- Po 6 dniach immersji mózg zaczyna myśleć po angielsku
- Różne akcenty w jednym miejscu (UK, USA, Irlandia, Australia)
- Zniżka za wczesny zapis - im wcześniej, tym taniej
- Absolwenci Angloville dostają zniżkę za kolejny wyjazd
- Polecenie nowego uczestnika = zniżka 300 zł dla polecającego
`;

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
      { id: "advanced", label: "Zaawansowany (C1–C2)", emoji: "🚀", desc: "Mówię dobrze, chcę perfekcji i pewności" },
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
      { id: "travel", label: "Podróże i swoboda", emoji: "✈️", desc: "Chcę rozmawiać bez stresu na całym świecie" },
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
      { id: "school", label: "Kursy stacjonarne / szkoła", emoji: "🏫", desc: "Lekcje, ćwiczenia, słówka — bez efektu" },
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
      { id: "a7", label: "7–11 lat", emoji: "🧸", desc: "Szkoła podstawowa, klasy 1–5" },
      { id: "a11", label: "11–13 lat", emoji: "📚", desc: "Szkoła podstawowa, klasy 6–8" },
