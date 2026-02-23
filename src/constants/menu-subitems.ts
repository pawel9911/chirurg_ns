import { type MenuSubItemType } from "@/types";

export const generalSurgerySubItems: MenuSubItemType[] = [
  {
    id: 1,
    href: "/zabiegi/ogolne/rak-piersi",
    title: "Rak piersi",
    description:
      "Rak piersi to najczęściej diagnozowany nowotwór złośliwy u kobiet na świecie. Choroba rozwija się w tkance gruczołu piersiowego i może mieć różne postacie – od zmian wczesnych, nieinwazyjnych, po zaawansowane nowotwory z przerzutami. Wczesne wykrycie raka piersi znacząco zwiększa szanse na całkowite wyleczenie, dlatego kluczowe znaczenie mają regularne badania profilaktyczne, samokontrola piersi oraz szybka diagnostyka każdej niepokojącej zmiany. \n Objawy raka piersi mogą obejmować wyczuwalny guzek, zmianę kształtu piersi, wciągnięcie brodawki sutkowej, wyciek z brodawki, zgrubienia skóry lub powiększenie węzłów chłonnych pachowych. Należy pamiętać, że nie każdy guzek oznacza nowotwór, jednak każda zmiana wymaga pilnej konsultacji lekarskiej i odpowiedniej diagnostyki obrazowej.",
    shortDescription:
      "Najczęstszy nowotwór złośliwy u kobiet, który najczęściej wywodzi się z tkanki gruczołu piersiowego.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/rak-piersi.webp`,
    steps: [
      {
        title: "Na czym polega leczenie chirurgiczne raka piersi?",
        description:
          "Leczenie chirurgiczne raka piersi polega na usunięciu zmiany nowotworowej wraz z marginesem zdrowych tkanek. W zależności od stopnia zaawansowania choroby możliwe jest leczenie oszczędzające pierś lub mastektomia, czyli usunięcie całej piersi. Często wykonywana jest również biopsja węzła wartowniczego lub usunięcie węzłów chłonnych. Zabieg przeprowadzany jest w znieczuleniu ogólnym.",
      },
      {
        title: "Dla kogo przeznaczone jest leczenie?",
        description:
          "Leczenie chirurgiczne przeznaczone jest dla pacjentek z rozpoznanym rakiem piersi lub zmianą podejrzaną o charakter nowotworowy. Rodzaj operacji dobierany jest indywidualnie na podstawie wyników badań, typu nowotworu, jego wielkości oraz stanu ogólnego pacjentki.",
      },
      {
        title: "Jak przygotować się do operacji?",
        description:
          "Przed operacją konieczna jest konsultacja onkologiczna oraz wykonanie badań laboratoryjnych i obrazowych. Pacjentka powinna poinformować lekarza o wszystkich przyjmowanych lekach. Na kilka tygodni przed zabiegiem zaleca się zaprzestanie palenia tytoniu oraz stosowanie się do zaleceń dotyczących diety i przyjmowania leków. W dniu operacji należy pozostać na czczo zgodnie z instrukcjami personelu medycznego.",
      },
      {
        title: "Rekonwalescencja i zalecenia po operacji",
        description:
          "Po zabiegu konieczna jest odpowiednia opieka rany operacyjnej oraz stopniowy powrót do aktywności. Może wystąpić ból, obrzęk oraz ograniczenie ruchomości kończyny po stronie operowanej. Rehabilitacja i ćwiczenia zalecone przez lekarza pomagają zapobiegać powikłaniom i przyspieszają powrót do sprawności. Dalsze leczenie onkologiczne ustalane jest indywidualnie.",
      },
    ],
  },
  {
    id: 2,
    href: "/zabiegi/ogolne/rak-skory-oraz-czerniak",
    title: "Rak skóry oraz czerniak",
    description:
      "Rak skóry oraz czerniak to grupa nowotworów złośliwych wywodzących się z komórek skóry. Są to najczęściej rozpoznawane choroby onkologiczne skóry, a ich liczba na świecie stale rośnie. Do raków skóry zalicza się przede wszystkim raka podstawnokomórkowego i raka kolczystokomórkowego, natomiast czerniak jest najbardziej agresywną postacią nowotworu skóry, mogącą szybko dawać przerzuty do innych narządów. \n Nowotwory skóry rozwijają się najczęściej w wyniku długotrwałej ekspozycji na promieniowanie UV – zarówno naturalne (słońce), jak i sztuczne (solarium). Czynniki ryzyka obejmują jasny fototyp skóry, liczne znamiona barwnikowe, oparzenia słoneczne w dzieciństwie, osłabioną odporność oraz obciążenia genetyczne. Wczesne wykrycie zmian nowotworowych znacząco zwiększa skuteczność leczenia, dlatego kluczowe znaczenie mają regularne kontrole dermatologiczne i samoobserwacja skóry.",
    shortDescription:
      "Grupa nowotworów na pierwszym miejscu w statystyce onkologicznych chorób skóry.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/rak-skory-czerniak.webp`,
    steps: [
      {
        title: "Na czym polega usunięcie nowotworu skóry?",
        description:
          "Leczenie chirurgiczne raka skóry i czerniaka polega na wycięciu zmiany nowotworowej wraz z marginesem zdrowych tkanek. Zabieg wykonywany jest najczęściej w znieczuleniu miejscowym i pozwala na całkowite usunięcie zmiany oraz jej ocenę histopatologiczną. W przypadku czerniaka zakres zabiegu może być szerszy i obejmować dodatkowe procedury diagnostyczne.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg przeznaczony jest dla pacjentów z podejrzanymi zmianami skórnymi lub potwierdzonym rozpoznaniem raka skóry bądź czerniaka. O kwalifikacji do leczenia decyduje lekarz na podstawie badania klinicznego, dermatoskopii oraz wyników diagnostyki.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest konsultacja lekarska i przekazanie informacji o przyjmowanych lekach, szczególnie lekach przeciwkrzepliwych. Należy stosować się do zaleceń dotyczących pielęgnacji skóry w miejscu operowanym. W większości przypadków nie jest wymagane specjalne przygotowanie ani hospitalizacja.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po zabiegu należy dbać o ranę zgodnie z zaleceniami lekarza, unikać nadmiernego wysiłku oraz chronić miejsce operowane przed słońcem. Szwy usuwane są zwykle po 7–14 dniach. Regularne kontrole dermatologiczne są niezbędne, aby monitorować stan skóry i zapobiegać nawrotom.",
      },
    ],
  },
  {
    id: 3,
    href: "/zabiegi/ogolne/zylaki-odbytu",
    title: "Żylaki odbytu",
    description:
      "Żylaki odbytu, nazywane potocznie hemoroidami, to powszechna choroba proktologiczna polegająca na patologicznym powiększeniu naczyń żylnych w kanale odbytu. Schorzenie dotyczy zarówno kobiet, jak i mężczyzn, a jego częstość rośnie wraz z wiekiem oraz siedzącym trybem życia. Nieleczone żylaki odbytu mogą prowadzić do przewlekłego bólu, krwawień i znacznego pogorszenia komfortu życia. \n Do najczęstszych objawów należą: pieczenie, świąd, uczucie niepełnego wypróżnienia, ból podczas oddawania stolca oraz krwawienie z odbytu. W zaawansowanych stadiach może dojść do wypadania guzków krwawniczych. Chorobie sprzyjają zaparcia, ciąża, otyłość, długotrwałe siedzenie, brak aktywności fizycznej oraz dieta uboga w błonnik.",
    shortDescription:
      "Usuwanie żylaków odbytu laserem oraz metodą Barona (gumkowanie).",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/zylaki-odbytu.webp`,
    steps: [
      {
        title: "Na czym polega zabieg usuwania żylaków odbytu?",
        description:
          "Laserowe leczenie hemoroidów oraz metoda Barona polegają na zamknięciu lub odcięciu dopływu krwi do zmienionych guzków krwawniczych. Zabiegi są małoinwazyjne, wykonywane ambulatoryjnie i nie wymagają długiej hospitalizacji. Celem procedury jest zmniejszenie objawów, usunięcie żylaków oraz przywrócenie prawidłowego funkcjonowania odbytu.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg przeznaczony jest dla pacjentów z objawowymi hemoroidami, u których leczenie zachowawcze nie przyniosło poprawy. O kwalifikacji decyduje lekarz proktolog po badaniu i ocenie stopnia zaawansowania choroby.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest konsultacja lekarska oraz przekazanie informacji o przyjmowanych lekach, szczególnie przeciwkrzepliwych. W niektórych przypadkach zalecane jest delikatne oczyszczenie jelita. Pacjent powinien stosować się do zaleceń dietetycznych i higienicznych przekazanych przez personel medyczny.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po zabiegu możliwy jest niewielki dyskomfort, który zwykle ustępuje w ciągu kilku dni. Zaleca się dietę bogatą w błonnik, odpowiednie nawodnienie oraz unikanie zaparć. Powrót do normalnej aktywności następuje szybko, jednak przez krótki czas należy ograniczyć intensywny wysiłek fizyczny. Kontrola lekarska pozwala ocenić efekty leczenia.",
      },
    ],
  },
  {
    id: 4,
    href: "/zabiegi/ogolne/zylaki-konczyn-dolnych",
    title: "Żylaki kończyn dolnych",
    description:
      "Żylaki kończyn dolnych to przewlekła choroba układu żylnego polegająca na nieprawidłowym poszerzeniu i wydłużeniu żył powierzchownych nóg. Schorzenie dotyczy dużej części populacji dorosłych i częściej występuje u kobiet. Nieleczone żylaki mogą prowadzić do bólu, obrzęków, stanów zapalnych oraz poważnych powikłań, takich jak zakrzepica czy owrzodzenia żylne. \n Do najczęstszych objawów żylaków należą uczucie ciężkości nóg, obrzęki nasilające się pod koniec dnia, nocne skurcze łydek, widoczne poszerzone żyły oraz ból podczas długotrwałego stania lub siedzenia. Czynniki ryzyka obejmują predyspozycje genetyczne, siedzący tryb życia, nadwagę, ciążę oraz pracę wymagającą długiego pozostawania w jednej pozycji.",
    shortDescription:
      "Operacje żylaków kończyn dolnych metodą ostrzykiwania oraz chirurgiczne wycięcie.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/zylaki-konczyn-dolnych.webp`,
    steps: [
      {
        title: "Na czym polega leczenie żylaków kończyn dolnych?",
        description:
          "Leczenie żylaków obejmuje skleroterapię (ostrzykiwanie zmienionych żył specjalnym preparatem) lub chirurgiczne usunięcie niewydolnych naczyń. Zabiegi mają na celu zamknięcie lub usunięcie chorych żył, co poprawia krążenie i zmniejsza objawy. Wybór metody zależy od wyników badania USG Doppler i stopnia zaawansowania choroby.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg przeznaczony jest dla pacjentów z objawowymi żylakami, u których leczenie zachowawcze nie przynosi poprawy lub gdy istnieje ryzyko powikłań. Kwalifikacji dokonuje lekarz na podstawie badania i diagnostyki obrazowej.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest konsultacja chirurgiczna oraz badanie USG żył. Pacjent powinien poinformować lekarza o wszystkich przyjmowanych lekach, szczególnie przeciwkrzepliwych. Zaleca się wygodny strój w dniu zabiegu oraz przygotowanie pończoch uciskowych, jeśli zostały zalecone.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po zabiegu zaleca się chodzenie i unikanie długotrwałego siedzenia lub stania. Konieczne jest noszenie wyrobów uciskowych przez okres wskazany przez lekarza. Niewielkie zasinienia i obrzęk są naturalną częścią procesu gojenia. Szybki powrót do codziennej aktywności jest jedną z zalet nowoczesnego leczenia żylaków.",
      },
    ],
  },
  {
    id: 5,
    href: "/zabiegi/ogolne/esperal",
    title: "Esperal",
    description:
      "Esperal to preparat stosowany jako element wspomagający leczenie choroby alkoholowej. Substancją czynną leku jest disulfiram, który blokuje enzym odpowiedzialny za metabolizm alkoholu w wątrobie. W efekcie nawet niewielka ilość alkoholu powoduje silną reakcję organizmu, co działa jako mechanizm zniechęcający do picia. Terapia z wykorzystaniem Esperalu nie leczy uzależnienia samodzielnie, lecz stanowi wsparcie dla psychoterapii i świadomej decyzji pacjenta o abstynencji. \n Po spożyciu alkoholu u osoby z wszytym preparatem mogą wystąpić objawy takie jak zaczerwienienie twarzy, nudności, wymioty, kołatanie serca, duszność, spadek ciśnienia czy silny niepokój. Reakcja ta jest przewidywalnym efektem działania leku i ma na celu utrwalenie awersji do alkoholu. Dlatego zabieg przeprowadza się wyłącznie u pacjentów, którzy są zdecydowani na leczenie i świadomi konsekwencji spożywania alkoholu.",
    shortDescription:
      "Substancja, która blokuje enzym biorący udział w metabolizmie alkoholu w wątrobie.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/zabieg-esperal.webp`,
    steps: [
      {
        title: "Na czym polega zabieg wszycia Esperalu?",
        description:
          "Zabieg polega na podskórnym umieszczeniu preparatu zawierającego disulfiram. Procedura wykonywana jest w znieczuleniu miejscowym, trwa kilkanaście minut i nie wymaga hospitalizacji. Celem zabiegu jest wsparcie pacjenta w utrzymaniu abstynencji poprzez wywołanie silnej reakcji organizmu po spożyciu alkoholu.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg przeznaczony jest dla osób uzależnionych od alkoholu, które świadomie podejmują decyzję o leczeniu i deklarują chęć utrzymania abstynencji. Kwalifikacji dokonuje lekarz po przeprowadzeniu wywiadu medycznego i ocenie stanu zdrowia pacjenta.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Warunkiem wykonania zabiegu jest całkowita abstynencja od alkoholu przez co najmniej 24–48 godzin przed procedurą. Pacjent powinien poinformować lekarza o wszystkich chorobach przewlekłych oraz przyjmowanych lekach. W dniu zabiegu zaleca się spożycie lekkiego posiłku i zachowanie standardowej higieny ciała.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po zabiegu należy dbać o ranę zgodnie z zaleceniami lekarza i unikać intensywnego wysiłku przez kilka dni. Kluczowe jest bezwzględne unikanie alkoholu w każdej postaci, także w lekach czy kosmetykach zawierających alkohol. Wskazane jest równoległe uczestnictwo w terapii uzależnień, co znacząco zwiększa skuteczność leczenia.",
      },
    ],
  },
  {
    id: 6,
    href: "/zabiegi/ogolne/usg-i-biopsje",
    title: "USG i biopsje",
    description:
      "Badania USG i biopsje to podstawowe narzędzia nowoczesnej diagnostyki medycznej, pozwalające na szybkie, bezpieczne i precyzyjne wykrywanie zmian chorobowych. Ultrasonografia (USG) jest nieinwazyjną metodą obrazowania, która umożliwia ocenę narządów wewnętrznych, tkanek miękkich oraz struktur naczyniowych. Biopsja natomiast pozwala na pobranie materiału do badania histopatologicznego, co jest kluczowe w diagnostyce zmian nowotworowych i stanów zapalnych. \n Kompleksowa diagnostyka obejmuje również specjalistyczne badania takie jak wideodermatoskopia, rektoskopia oraz anoskopia. Wideodermatoskopia umożliwia dokładną ocenę znamion skórnych i wczesne wykrywanie nowotworów skóry. Rektoskopia i anoskopia to badania proktologiczne pozwalające ocenić stan końcowego odcinka przewodu pokarmowego, wykryć stany zapalne, polipy, hemoroidy oraz inne nieprawidłowości.",
    shortDescription:
      "Kompleksowe badania USG oraz biopsyjne, Videodermotoskopia, Rektoskopia, Anoskopia.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/usg-biopsje.webp`,
    steps: [
      {
        title: "Na czym polegają badania USG i biopsje?",
        description:
          "USG to nieinwazyjne badanie obrazowe wykorzystujące fale ultradźwiękowe do oceny narządów i tkanek. Biopsja polega na pobraniu niewielkiego fragmentu tkanki do analizy laboratoryjnej. Wideodermatoskopia, rektoskopia i anoskopia są badaniami diagnostycznymi umożliwiającymi dokładną ocenę skóry oraz końcowego odcinka przewodu pokarmowego.",
      },
      {
        title: "Dla kogo przeznaczone są badania?",
        description:
          "Badania wykonywane są u pacjentów wymagających diagnostyki zmian skórnych, narządowych lub proktologicznych. Kwalifikację do badań ustala lekarz na podstawie objawów, wywiadu medycznego oraz wcześniejszych wyników badań.",
      },
      {
        title: "Jak przygotować się do badania?",
        description:
          "Sposób przygotowania zależy od rodzaju badania. W przypadku niektórych badań USG może być wymagane pozostanie na czczo lub wypełnienie pęcherza moczowego. Badania proktologiczne mogą wymagać wcześniejszego opróżnienia jelita. Szczegółowe instrukcje pacjent otrzymuje przed wizytą.",
      },
      {
        title: "Zalecenia po badaniu",
        description:
          "Większość badań nie wymaga rekonwalescencji i pozwala na natychmiastowy powrót do codziennych aktywności. Po biopsji należy stosować się do zaleceń dotyczących pielęgnacji miejsca pobrania materiału. Wyniki badań omawiane są podczas konsultacji lekarskiej.",
      },
    ],
  },
  {
    id: 7,
    href: "/zabiegi/ogolne/uklad-pokarmowy",
    title: "Choroby układu pokarmowego",
    description:
      "Choroby układu pokarmowego to szeroka grupa schorzeń obejmujących przełyk, żołądek, jelita, wątrobę, trzustkę oraz pęcherzyk żółciowy. Zaburzenia funkcjonowania przewodu pokarmowego mogą prowadzić do przewlekłego bólu brzucha, zaburzeń trawienia, utraty masy ciała oraz poważnych powikłań zdrowotnych. Wczesna diagnostyka i odpowiednio dobrane leczenie są kluczowe dla zachowania zdrowia i jakości życia pacjenta. \n Do najczęściej diagnozowanych chorób należą kamica pęcherzyka żółciowego, choroby zapalne jelit, refluks żołądkowo-przełykowy, wrzody żołądka oraz nowotwory jelita grubego i żołądka. Objawy takie jak przewlekły ból brzucha, krwawienia z przewodu pokarmowego, wzdęcia, zaparcia, biegunki czy nagła utrata apetytu zawsze wymagają konsultacji lekarskiej.",
    shortDescription:
      "Diagnostyka i leczenie chorób układu pokarmowego, w tym kamicy pęcherzyka żółciowego oraz nowotworów jelita grubego i żołądka.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/bol-brzucha-osoba.webp`,
    steps: [
      {
        title: "Na czym polega diagnostyka chorób układu pokarmowego?",
        description:
          "Diagnostyka obejmuje badania obrazowe, endoskopowe oraz laboratoryjne, które pozwalają ocenić stan narządów przewodu pokarmowego. W zależności od objawów mogą być wykonywane USG jamy brzusznej, gastroskopia, kolonoskopia lub biopsja. Celem badań jest szybkie wykrycie przyczyny dolegliwości i wdrożenie odpowiedniego leczenia.",
      },
      {
        title: "Dla kogo przeznaczona jest diagnostyka?",
        description:
          "Badania przeznaczone są dla pacjentów z dolegliwościami ze strony układu pokarmowego, takimi jak bóle brzucha, zaburzenia trawienia, krwawienia, przewlekłe zaparcia lub biegunki. Diagnostyka zalecana jest również profilaktycznie u osób z grup ryzyka nowotworów przewodu pokarmowego.",
      },
      {
        title: "Jak przygotować się do badań?",
        description:
          "Sposób przygotowania zależy od rodzaju badania. Niektóre procedury wymagają pozostania na czczo, stosowania specjalnej diety lub oczyszczenia jelita. Pacjent powinien poinformować lekarza o przyjmowanych lekach oraz chorobach przewlekłych. Szczegółowe instrukcje przekazywane są przed badaniem.",
      },
      {
        title: "Zalecenia po badaniach lub leczeniu",
        description:
          "Większość badań pozwala na szybki powrót do codziennych aktywności. Po procedurach inwazyjnych należy stosować się do zaleceń lekarza dotyczących diety i odpoczynku. Wyniki badań omawiane są podczas konsultacji, na której ustalany jest dalszy plan leczenia.",
      },
    ],
  },
  {
    id: 8,
    href: "/zabiegi/ogolne/dostepy-naczyniowe",
    title: "Dostępy naczyniowe do chemioterapii i dializ",
    description:
      "Dostępy naczyniowe do chemioterapii i dializ są kluczowym elementem nowoczesnego leczenia onkologicznego i nefrologicznego. Umożliwiają bezpieczne, długotrwałe podawanie leków, płynów oraz prowadzenie dializoterapii, minimalizując ryzyko powikłań i uszkodzeń żył obwodowych. Najczęściej stosowane rozwiązania to porty naczyniowe oraz dostępy dializacyjne, które zapewniają stabilny i wygodny dostęp do układu krążenia. \n Port naczyniowy to niewielkie urządzenie wszczepiane pod skórę, połączone z dużą żyłą centralną. Umożliwia wielokrotne podawanie chemioterapii, leków biologicznych oraz pobieranie krwi bez konieczności każdorazowego wkłuwania się do żył. Jest to rozwiązanie szczególnie istotne u pacjentów wymagających długotrwałego leczenia onkologicznego.",
    shortDescription:
      "Zakładanie portów naczyniowych oraz dostępów dializacyjnych w celu skutecznego leczenia chemioterapią i dializami.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/chemioterapia-dializa.webp`,
    steps: [
      {
        title: "Na czym polega założenie dostępu naczyniowego?",
        description:
          "Zabieg polega na chirurgicznym wprowadzeniu portu naczyniowego lub wytworzeniu dostępu dializacyjnego umożliwiającego bezpieczny dostęp do żyły. Procedura wykonywana jest w znieczuleniu miejscowym lub krótkotrwałym znieczuleniu ogólnym. Celem zabiegu jest zapewnienie stabilnego dostępu do leczenia.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg przeznaczony jest dla pacjentów wymagających długotrwałej chemioterapii, żywienia dożylnego lub leczenia dializami. O kwalifikacji decyduje lekarz prowadzący na podstawie stanu zdrowia i planu terapii.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest konsultacja lekarska oraz wykonanie podstawowych badań laboratoryjnych. Pacjent powinien poinformować lekarza o przyjmowanych lekach, szczególnie przeciwkrzepliwych. W dniu zabiegu należy pozostać na czczo, jeśli lekarz wyda takie zalecenie.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po zabiegu należy dbać o miejsce operowane zgodnie z zaleceniami personelu medycznego. Niewielki ból lub obrzęk są naturalne i zwykle ustępują w krótkim czasie. Regularne kontrole oraz prawidłowa pielęgnacja dostępu naczyniowego są kluczowe dla jego bezpiecznego użytkowania.",
      },
    ],
  },
  {
    id: 9,
    href: "/zabiegi/ogolne/zywienie-domowe",
    title: "Leczenie żywieniowe w warunkach domowych",
    description:
      "Leczenie żywieniowe w warunkach domowych to specjalistyczna forma terapii przeznaczona dla pacjentów, którzy nie mogą przyjmować pokarmów drogą naturalną lub wymagają wsparcia żywieniowego w przebiegu chorób przewlekłych. Terapia obejmuje zakładanie gastrostomii i jejunostomii oraz długoterminową opiekę prowadzoną przez poradnię żywieniową. Celem leczenia jest zapewnienie organizmowi odpowiedniej ilości składników odżywczych, poprawa stanu ogólnego pacjenta oraz zwiększenie jakości życia. \n Gastrostomia i jejunostomia to medyczne dostępy do przewodu pokarmowego umożliwiające bezpieczne podawanie specjalistycznych preparatów odżywczych bezpośrednio do żołądka lub jelita cienkiego. Rozwiązanie to stosuje się u pacjentów z zaburzeniami połykania, chorobami neurologicznymi, nowotworami, w stanach po operacjach oraz u osób wymagających długotrwałego wsparcia żywieniowego.",
    shortDescription:
      "Zakładanie gastrostomii i jejunostomii oraz kompleksowa kwalifikacja i opieka w poradni żywieniowej dla pacjentów w domu.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-ogolne/zywienie-domowe.webp`,
    steps: [
      {
        title: "Na czym polega założenie gastrostomii lub jejunostomii?",
        description:
          "Zabieg polega na wytworzeniu dostępu do żołądka lub jelita cienkiego w celu podawania specjalistycznego żywienia. Procedura wykonywana jest w warunkach szpitalnych w znieczuleniu miejscowym lub ogólnym. Celem zabiegu jest umożliwienie bezpiecznego, długotrwałego żywienia pacjenta.",
      },
      {
        title: "Dla kogo przeznaczone jest leczenie żywieniowe?",
        description:
          "Terapia przeznaczona jest dla pacjentów, którzy nie mogą przyjmować pokarmów drogą naturalną lub wymagają dodatkowego wsparcia żywieniowego. Kwalifikacji dokonuje lekarz na podstawie stanu zdrowia, choroby podstawowej i potrzeb żywieniowych.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest konsultacja lekarska oraz wykonanie zaleconych badań. Pacjent powinien poinformować lekarza o wszystkich przyjmowanych lekach i chorobach przewlekłych. W dniu zabiegu zwykle wymagane jest pozostanie na czczo zgodnie z zaleceniami medycznymi.",
      },
      {
        title: "Opieka i zalecenia po zabiegu",
        description:
          "Po założeniu dostępu żywieniowego pacjent i opiekunowie otrzymują szczegółowe instrukcje dotyczące pielęgnacji, podawania żywienia oraz higieny. Regularne kontrole w poradni żywieniowej są niezbędne dla bezpieczeństwa terapii. Właściwa opieka pozwala prowadzić leczenie w domu przez długi czas.",
      },
    ],
  },

  //todo: dołożyć slider na zabieg page
];

export const aestheticSurgerySubItems: MenuSubItemType[] = [
  {
    id: 1,
    href: "/zabiegi/estetyczne/korekta-opadajacych-powieki",
    title: "Korekta opadających powiek",
    description:
      "Operacja opadającej powieki, czyli blefaroplastyka, to zabieg chirurgiczny korygujący nadmiar skóry, tkanki tłuszczowej i mięśni, przywracający młodszy wygląd i poprawiający pole widzenia, zazwyczaj wykonywany w znieczuleniu miejscowym, z bliznami ukrytymi w naturalnym załamaniu powieki. Istnieją też metody nieinwazyjne (np. plazma, ultradźwięki, nici), które wykorzystują energię do napinania skóry, ale dają krótsze efekty niż chirurgia.",
    shortDescription:
      "Korekta opadających powiek to zabieg chirurgiczny, który przywraca młodszy wygląd oczu, poprawiając zarówno estetykę, jak i komfort widzenia.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/korekta-opadajacych-powiek-blefaroplastyka.webp`,
    steps: [
      {
        title: "Czym jest korekta opadających powiek?",
        description:
          "Zabieg polega na usunięciu nadmiaru skóry i czasem tłuszczu z górnych powiek. Poprawia pole widzenia, likwiduje efekt „ciężkich” i „zmęczonych” oczu oraz odmładza spojrzenie. Wykonywany jest w znieczuleniu miejscowym i trwa ok. 45–60 minut.",
      },
      {
        title: "Kto kwalifikuje się do zabiegu?",
        description:
          "Najczęściej pacjenci powyżej 35. roku życia z widocznym nadmiarem skóry na powiekach, opadającą powieką ograniczającą widzenie lub po prostu chcący poprawić estetykę oczu. Wymagany jest ogólny dobry stan zdrowia.",
      },
      {
        title: "Konsultacja przedzabiegowa – co zabrać i o czym pamiętać?",
        description:
          "Na wizytę kwalifikacyjną przynosiemy listę aktualnie przyjmowanych leków i suplementów, informacje o przebytych chorobach oczu, alergiach i wcześniejszych operacjach w okolicy oczu. Lekarz wykona zdjęcia i dokładnie obejrzy powieki.",
      },
      {
        title: "Przygotowanie do zabiegu – 2 tygodnie przed",
        description:
          "• Odstawiamy leki i suplementy rozrzedzające krew (aspiryna, ibuprofen, wit. E, omega-3, czosnek, dziurawiec) – tylko po konsultacji z lekarzem prowadzącym.\n• Nie pijemy alkoholu i nie palimy papierosów (spowalnia gojenie).\n• Robimy podstawowe badania krwi (morfologia, krzepnięcie – APTT, INR).",
      },
      {
        title: "W dniu zabiegu",
        description:
          "Przyjeżdżamy na czczo tylko jeśli planowane jest dodatkowe znieczulenie sedacyjne (rzadko). Twarz musi być czysta, bez makijażu i kremów. Zabieramy okulary przeciwsłoneczne (przydadzą się po zabiegu) i kogoś, kto odwiezie nas do domu – nie prowadzimy auta tego samego dnia.",
      },
      {
        title: "Co zabrać ze sobą do kliniki?",
        description:
          "• Dowód osobisty\n• Wyniki badań krwi\n• Okulary przeciwsłoneczne\n• Wygodne ubrania zapinane z przodu (łatwo się ubrać po zabiegu)\n• Osobę towarzyszącą (zalecane)",
      },
    ],
  },
  {
    id: 2,
    href: "/zabiegi/estetyczne/korekta-odstajacych-uszu",
    title: "Korekta odstających uszu",
    description:
      "Korekta odstających uszu (otoplastyka) to jeden z najczęściej wykonywanych i najbardziej wdzięcznych zabiegów chirurgii plastycznej. Polega na trwałym wymodelowaniu chrząstki i skóry małżowiny usznej, dzięki czemu uszy zyskują naturalne, harmonijne przyleganie do głowy. Zabieg pozwala pozbyć się kompleksów, które często towarzyszą pacjentom od dzieciństwa – zarówno dzieciom, jak i dorosłym. Efekt jest widoczny praktycznie od razu po zdjęciu opatrunku, a ostateczny, bardzo naturalny rezultat uzyskuje się po kilku miesiącach, gdy całkowicie ustąpi obrzęk. Procedura jest stosunkowo mało inwazyjna, blizna pozostaje ukryta w naturalnym załamku za uchem i z czasem staje się praktycznie niewidoczna. Korekta odstających uszu znacząco poprawia proporcje twarzy, dodaje pewności siebie i bardzo często zmienia jakość życia pacjenta na lepsze.",
    shortDescription:
      "Korekta odstających uszu to mało inwazyjny zabieg chirurgiczny, który przywraca naturalne proporcje twarzy i poprawia pewność siebie pacjenta.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/korekta-odstajacych-uszu-otoplastyka.webp`,
    steps: [
      {
        title: "Konsultacja kwalifikacyjna",
        description:
          "Chirurg plastyczny dokładnie ocenia kształt, wielkość i stopień odstawania małżowin usznych. Omawia oczekiwania pacjenta, proponuje najlepszą technikę operacyjną oraz zleca niezbędne badania. To najważniejszy etap decydujący o bezpieczeństwie i końcowym efekcie estetycznym.",
      },
      {
        title: "Przygotowanie przedoperacyjne",
        description:
          "Na 2–3 tygodnie przed zabiegiem należy odstawić leki wpływające na krzepliwość (aspiryna, ibuprofen, witamina E, dziurawiec, żeń-szeń), rzucić palenie i ograniczyć alkohol. Wymagane są podstawowe badania krwi (morfologia, krzepnięcie, glukoza), czasem grupa krwi. Zabieg zwykle wykonywany na czczo.",
      },
      {
        title: "Przebieg zabiegu",
        description:
          "Otoplastyka trwa zazwyczaj 60–90 minut. Wykonywana w znieczuleniu miejscowym (u dorosłych) lub ogólnym (u dzieci). Chirurg wykonuje precyzyjne nacięcie za uchem, modeluje chrząstkę i zakłada wewnętrzne szwy modelujące, dzięki czemu ucho trwale przylega do głowy w naturalny sposób.",
      },
      {
        title: "Okres rekonwalescencji i zalecenia pozabiegowe",
        description:
          "Przez pierwsze 7–14 dni nosi się specjalną opaskę uciskową (dobę całą, później tylko na noc). Obrzęk i tkliwość ustępują w ciągu 1–3 tygodni. Szwy zdejmuje się po 7–14 dniach. Przez 4–6 tygodni należy unikać sportów kontaktowych, sauny, solarium oraz spania na boku.",
      },
      {
        title: "Efekty i trwałość rezultatu",
        description:
          "Efekt jest trwały – raz wymodelowana chrząstka nie wraca do poprzedniego położenia. Większość pacjentów cieszy się nowym wyglądem uszu już po 2–4 tygodniach, a pełna harmonia twarzy ujawnia się po 3–6 miesiącach. Często określany jako „zmiana życia jednym cięciem”.",
      },
    ],
  },
  {
    id: 3,
    href: "/zabiegi/estetyczne/abdominoplastyka",
    title: "Abdominoplastia",
    description:
      "Abdominoplastyka, czyli plastyka brzucha, to zaawansowany zabieg chirurgii estetycznej mający na celu poprawę wyglądu i proporcji sylwetki. Zabieg polega na usunięciu nadmiaru skóry oraz tkanki tłuszczowej z okolicy brzucha, a także na wzmocnieniu osłabionych mięśni ściany brzusznej. Jest szczególnie polecany osobom po dużej utracie masy ciała, ciążach lub z wiotką skórą brzucha. Abdominoplastia pozwala uzyskać bardziej płaski, jędrny i estetyczny brzuch. Efekty zabiegu są długotrwałe, pod warunkiem utrzymania stabilnej masy ciała i zdrowego trybu życia. Zabieg znacząco wpływa nie tylko na wygląd, ale również na komfort codziennego funkcjonowania. Każda procedura poprzedzona jest indywidualną konsultacją lekarską i kwalifikacją do zabiegu.",
    shortDescription:
      "Abdominoplastyka, znana też jako plastyka brzucha, to zabieg chirurgiczny polegający na usunięciu nadmiaru skóry i tkanki tłuszczowej z okolic brzucha oraz wzmocnieniu mięśni ściany brzusznej w celu poprawy wyglądu sylwetki.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/abdominoplastyka-plastyka-brzucha.webp`,
    steps: [
      {
        title: "Na czym polega abdominoplastia?",
        description:
          "Abdominoplastyka to zabieg chirurgiczny polegający na usunięciu nadmiaru skóry i tkanki tłuszczowej z brzucha oraz wzmocnieniu mięśni prostych brzucha. Celem procedury jest poprawa wyglądu sylwetki i przywrócenie prawidłowego napięcia powłok brzusznych. Zabieg wykonywany jest w znieczuleniu ogólnym.",
      },
      {
        title: "Dla kogo przeznaczony jest zabieg?",
        description:
          "Zabieg dedykowany jest osobom zmagającym się z wiotką skórą brzucha, rozstępem mięśni prostych brzucha lub nadmiarem tkanki tłuszczowej – najczęściej po ciąży lub znacznej utracie masy ciała. Abdominoplastia nie jest metodą odchudzania, a zabiegiem modelującym sylwetkę. Najlepsze efekty osiągają pacjenci ze stabilną masą ciała.",
      },
      {
        title: "Jak przygotować się do zabiegu?",
        description:
          "Przed zabiegiem konieczna jest szczegółowa konsultacja lekarska oraz wykonanie zaleconych badań diagnostycznych. Zaleca się zaprzestanie palenia tytoniu co najmniej 4–6 tygodni wcześniej oraz odstawienie wybranych leków i suplementów zgodnie z zaleceniami lekarza. Prawidłowe przygotowanie znacząco zwiększa bezpieczeństwo i poprawia proces gojenia.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po operacji konieczne jest noszenie specjalnej odzieży uciskowej przez 4–8 tygodni oraz ograniczenie aktywności fizycznej przez minimum 6–8 tygodni. Obrzęk, zasinienia i dyskomfort są naturalną częścią procesu gojenia. Pełne, ostateczne efekty zabiegu widoczne są zwykle po 6–12 miesiącach, gdy całkowicie ustąpi obrzęk.",
      },
    ],
  },
  {
    id: 4,
    href: "/zabiegi/estetyczne/liposukcja-ramion-z-plastyka-skory",
    title: "Liposukcja ramion z plastyką skóry",
    description:
      "Liposukcja ramion z plastyką skóry to zabieg chirurgii estetycznej, którego celem jest poprawa kształtu oraz napięcia górnych partii ramion. Procedura polega na usunięciu nadmiaru tkanki tłuszczowej, a następnie wycięciu i ujędrnieniu zwiotczałej skóry, która nie obkurcza się samoistnie. Zabieg jest szczególnie polecany osobom zmagającym się z problemem tzw. „pelikanów”, często występującym po dużej utracie masy ciała lub wraz z wiekiem. Dzięki połączeniu liposukcji z plastyką skóry możliwe jest uzyskanie smuklejszych, bardziej proporcjonalnych ramion. Efekty zabiegu są długotrwałe i znacząco poprawiają estetykę sylwetki oraz komfort noszenia ubrań. Procedura wykonywana jest w znieczuleniu i wymaga okresu rekonwalescencji. Ostateczny zakres zabiegu ustalany jest indywidualnie podczas konsultacji z lekarzem specjalistą.",
    shortDescription:
      "Liposukcja ramion połączona z plastyką skóry to zabieg chirurgiczny mający na celu usunięcie nadmiaru tłuszczu oraz ujędrnienie i wygładzenie zwiotczałej skóry w okolicy ramion, co skutkuje bardziej smukłym i estetycznym wyglądem.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/liposukcja-ramion-plastyka-skory.webp`,
    steps: [
      {
        title: "Na czym polega liposukcja ramion z plastyką skóry?",
        description:
          "Zabieg polega na odessaniu nadmiaru tkanki tłuszczowej z okolicy ramion oraz chirurgicznym usunięciu zwiotczałej, nadmiarowej skóry. Pozwala to jednocześnie wysmuklić ramiona i znacząco poprawić ich napięcie oraz wygląd. Procedura wykonywana jest w znieczuleniu ogólnym lub w znieczuleniu miejscowym z sedacją – w zależności od zakresu operacji.",
      },
      {
        title: "Kiedy warto zdecydować się na ten zabieg?",
        description:
          "Zabieg jest szczególnie polecany osobom, u których występuje wyraźny nadmiar skóry i tłuszczu w okolicy ramion, powodujący dyskomfort estetyczny (tzw. „pelikany” lub „machanie skrzydłami”). Najlepsze rezultaty osiągają pacjenci po znacznej utracie masy ciała oraz osoby z utratą naturalnej elastyczności skóry. Nie zastępuje diety i ćwiczeń, ale skutecznie modeluje sylwetkę.",
      },
      {
        title: "Przygotowanie do zabiegu",
        description:
          "Przed operacją konieczna jest konsultacja chirurgiczna oraz wykonanie zaleconych badań laboratoryjnych. Na 3–4 tygodnie przed zabiegiem należy bezwzględnie rzucić palenie tytoniu oraz odstawić leki i suplementy wpływające na krzepliwość krwi (np. aspiryna, ibuprofen, witamina E, niektóre zioła). Lekarz dostosuje zalecenia indywidualnie do stanu zdrowia pacjenta.",
      },
      {
        title: "Rekonwalescencja i efekty",
        description:
          "Po zabiegu przez 4–8 tygodni należy nosić specjalne rękawy uciskowe, które wspomagają gojenie, zmniejszają obrzęk i pomagają w modelowaniu ramion. Obrzęk, zasinienia i uczucie napięcia są naturalne i stopniowo ustępują w ciągu kilku tygodni. Ostateczny, pełny efekt widoczny jest zazwyczaj po 3–6 miesiącach, gdy tkanki całkowicie się zregenerują.",
      },
    ],
  },
  {
    id: 5,
    href: "/zabiegi/estetyczne/lift-ust",
    title: "Lift ust",
    description:
      "Lift ust, znany również jako lip lift, to precyzyjny zabieg chirurgii estetycznej, którego celem jest poprawa proporcji dolnej części twarzy. Procedura polega na skróceniu odległości między nosem a górną wargą, co prowadzi do naturalnego uniesienia ust i lepszego wyeksponowania czerwieni wargowej. Dzięki temu usta zyskują pełniejszy, bardziej wyrazisty wygląd bez konieczności stosowania wypełniaczy. Zabieg wpływa korzystnie na harmonię rysów twarzy oraz nadaje jej młodszy i świeższy wyraz. Lift lip jest rozwiązaniem szczególnie polecanym osobom, u których górna warga uległa wydłużeniu na skutek procesu starzenia. Efekty zabiegu są trwałe i widoczne niemal natychmiast po ustąpieniu obrzęku. Procedura wykonywana jest w znieczuleniu miejscowym i charakteryzuje się stosunkowo krótkim okresem rekonwalescencji.",
    shortDescription:
      "Lift lip, czyli chirurgiczne uniesienie górnej wargi, to zabieg estetyczny mający na celu skrócenie odległości między nosem a ustami oraz odsłonięcie większej części czerwieni wargowej, co nadaje twarzy bardziej młodzieńczy i wyrazisty wygląd.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/lift-ust-lifting-wargi.webp`,
    steps: [
      {
        title: "Na czym polega zabieg liftu ust?",
        description:
          "Zabieg polega na chirurgicznym usunięciu niewielkiego fragmentu skóry tuż pod nosem (w fałdzie podnosowym), co unosi górną wargę i odsłania większą część czerwieni wargowej. Nacięcie prowadzone jest w naturalnym załamaniu skóry, dzięki czemu blizna po wygojeniu jest zazwyczaj bardzo mało widoczna. Procedura trwa zwykle 45–60 minut.",
      },
      {
        title: "Dla kogo przeznaczony jest lift ust?",
        description:
          "Lift ust polecany jest osobom chcącym naturalnie i trwale poprawić proporcje ust oraz ich ekspozycję. Najlepsze efekty osiągają pacjenci z długą rynną podnosową (duża odległość między nosem a górną wargą), z opadającą wargą górną lub z ustami, które straciły wyrazistość z wiekiem. Zabieg nie powiększa objętości ust – poprawia ich kształt i widoczność.",
      },
      {
        title: "Przygotowanie do zabiegu",
        description:
          "Przed zabiegiem niezbędna jest konsultacja chirurgiczna z dokładną oceną proporcji twarzy i stanu skóry. Na 7–14 dni przed procedurą zaleca się odstawienie leków i suplementów wpływających na krzepliwość krwi (aspiryna, ibuprofen, witamina E, niektóre zioła) oraz unikanie alkoholu i palenia. Lekarz przedstawi indywidualne zalecenia.",
      },
      {
        title: "Rekonwalescencja i zalecenia po zabiegu",
        description:
          "Po liftcie ust pojawia się zwykle lekki obrzęk, zaczerwienienie i uczucie napięcia w okolicy warg – objawy te mijają w ciągu 5–10 dni. Szwy zazwyczaj zdejmuje się po 5–7 dniach. Ostateczny, naturalny efekt widoczny jest po pełnym wygojeniu, najczęściej po 4–8 tygodniach.",
      },
    ],
  },
  {
    id: 6,
    href: "/zabiegi/estetyczne/ginekomastia",
    title: "Ginekomastia",
    description:
      "Ginekomastia to schorzenie polegające na nadmiernym rozroście tkanki gruczołowej i/lub tłuszczowej w obrębie męskich piersi. Chirurgiczne leczenie ginekomastii jest skuteczną metodą przywracającą prawidłowy, męski kontur klatki piersiowej. Zabieg polega na usunięciu przerośniętej tkanki gruczołowej, często w połączeniu z liposukcją, co pozwala uzyskać naturalny i estetyczny efekt. Procedura znacząco poprawia wygląd sylwetki oraz zwiększa komfort psychiczny i pewność siebie pacjenta. Leczenie operacyjne zalecane jest w przypadkach, gdy ginekomastia nie ustępuje samoistnie lub nie reaguje na leczenie zachowawcze. Zabieg wykonywany jest w znieczuleniu i wymaga krótkiego okresu rekonwalescencji. Każdy pacjent kwalifikowany jest indywidualnie po dokładnej diagnostyce i konsultacji lekarskiej.",
    shortDescription:
      "Chirurgiczne leczenie ginekomastii polega na usunięciu nadmiaru tkanki gruczołowej i tłuszczowej z męskich piersi, co pozwala przywrócić bardziej męski kontur klatki piersiowej i poprawić komfort psychiczny pacjenta.",
    imgSrc: `${import.meta.env.VITE_ASSET_PREFIX}/zabiegi-estetyczne/ginekomastia-operacja-piersi.webp`,
    steps: [
      {
        title: "Na czym polega leczenie chirurgiczne ginekomastii?",
        description:
          "Zabieg polega na usunięciu nadmiaru tkanki gruczołowej, a w razie potrzeby także tkanki tłuszczowej z okolicy klatki piersiowej. W zależności od typu ginekomastii stosuje się technikę wyłącznie chirurgiczną, liposukcję lub połączenie obu metod. Celem jest uzyskanie płaskiej, męskiej, naturalnie wyglądającej klatki piersiowej.",
      },
      {
        title: "Kiedy warto rozważyć zabieg?",
        description:
          "Operacyjne leczenie ginekomastii jest zalecane mężczyznom, u których powiększenie piersi utrzymuje się przez dłuższy czas (zwykle powyżej 12–24 miesięcy), powoduje dyskomfort estetyczny, psychiczny lub ogranicza aktywność życiową. Zabieg rozważa się, gdy zmiany nie cofają się mimo stabilnej masy ciała i prawidłowego poziomu hormonów. Przed operacją konieczne jest wykluczenie przyczyn organicznych i hormonalnych.",
      },
      {
        title: "Przygotowanie do zabiegu",
        description:
          "Przed zabiegiem wymagane są podstawowe badania laboratoryjne, często USG piersi oraz konsultacja endokrynologiczna w celu wykluczenia przyczyn hormonalnych lub chorobowych. Na 2–4 tygodnie przed operacją zaleca się odstawienie leków wpływających na krzepliwość krwi oraz całkowite zaprzestanie palenia tytoniu. Szczegółowe zalecenia są omawiane podczas konsultacji kwalifikacyjnej.",
      },
      {
        title: "Rekonwalescencja i efekty",
        description:
          "Po operacji przez 4–6 tygodni należy nosić specjalną kamizelkę uciskową, która wspomaga gojenie i modelowanie klatki piersiowej. Obrzęk, zasinienia i tkliwość są naturalne i stopniowo ustępują w ciągu 2–8 tygodni. Ostateczny, trwały efekt widoczny jest zazwyczaj po 3–6 miesiącach – płaska, męska klatka piersiowa utrzymuje się przez całe życie.",
      },
    ],
  },
];
