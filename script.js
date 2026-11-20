(() => {
  'use strict';

  const ANATOMY_DATA = {
    smart: {
      mistakeTitle: 'Сенсорные панели на каждой стене и зависимость от облака',
      mistakeText:
        'Заказчику продают дорогую закрытую систему с планшетами в каждой комнате. На деле свет долго переключается через сервер, при падении Wi-Fi не работают шторы, а починить сбой может только автор проекта.',
      solutionTitle: 'Щит на DIN-рейку (Wiren Board / Modbus) и аппаратный резерв',
      solutionText:
        'Вся логика крутится локально в щите на промышленной шине. Классические выключатели дублируют управление напрямую, шторы и климат реагируют мгновенно, а датчики протечки закрывают воду за 2 секунды.',
      effect:
        'Экономия до 45% бюджета автоматики против закрытых систем. Нулевая зависимость от интернета и простая диагностика через 10 лет.',
      specs: [
        'Контроллер Wiren Board на DIN-рейку с открытым протоколом Modbus RTU',
        'Аппаратный байпас: физические клавиши включают свет даже при снятом контроллере',
        'Проводные датчики протечки и шаровые краны с приводом (отсечка ≤ 2 сек.)',
        'Собранный по ПУЭ РК щит с УЗО 10/30 мА на мокрые зоны и клеммами под нагрузку',
        'Встроенный резерв логики, бэкап конфигурации и полная маркировка кабелей',
      ],
    },
    ergonomics: {
      mistakeTitle: 'Эффектные картинки, в которых неудобно жить каждый день',
      mistakeText:
        'Розетки оказываются за спинкой кровати, дверцы шкафов бьют по ручкам, а гладильная доска и пылесос годами стоят в коридоре, потому что под них не заложили нишу.',
      solutionTitle: 'Сценарии движения и карта выводов под конкретную мебель',
      solutionText:
        'Просчитываем маршруты семьи, открывание створок, высоту столешниц и выключателей на этапе обмеров. Подводим воду, вытяжку и питание прямо внутрь шкафов для техники и постирочной зоны.',
      effect:
        'Квартира ощущается заметно свободнее на той же площади: никаких удлинителей, открытых вещей и заблокированных проходов.',
      specs: [
        'Привязка розеток и слаботочки с точностью до конкретной модели мебели и техники',
        'Мастер-выключатели у входа и дублирующие клавиши у кровати',
        'Скрытая ниша под постирочную колонну с трапом, кранами и приточной вентиляцией',
        'Беспороговые полы по всей квартире и ширина основных проходов от 850 мм',
        'Выведенные углы строго 90° под кухню, душевые перегородки и встроенные шкафы',
      ],
    },
    climate: {
      mistakeTitle: 'Слышно соседей и улицу, а при закрытых окнах быстро становится душно',
      mistakeText:
        'В отделку вкладывают миллионы, но по ночам приходится выбирать между уличным шумом с мелкой пылью из приоткрытого окна и тяжёлым воздухом с высоким CO₂.',
      solutionTitle: 'Бесшумная приточка по датчикам CO₂ и виброразвязанные стены',
      solutionText:
        'Монтируем систему подачи свежего воздуха с двухступенчатой очисткой F7 + HEPA от смога, ставим глушители на каналы и отделяем спальни каркасными перегородками на виброподвесах.',
      effect:
        'Дышится как за городом при закрытых окнах: CO₂ ниже 800 ppm, влажность 35–55% и фоновый шум в спальне до 23 дБ(A).',
      specs: [
        'Фильтрация уличного воздуха класса F7 / HEPA H13 от гари, пыльцы и PM2.5',
        'Автоматическая регулировка расхода по уровню CO₂ и влажности (ASHRAE 62.2 / WELL Gold)',
        'Аэродинамический расчёт трасс и шумоглушители: максимум 23 дБ(A) у изголовья',
        'Звукоизоляционные перегородки Rw 56–58 дБ с виброразвязкой от плит перекрытия',
        'Бесшумные стояки канализации и скрытые щелевые диффузоры в плоскости потолка',
      ],
    },
    nodes: {
      mistakeTitle: 'Волны на стенах под подсветкой и замурованный сервис',
      mistakeText:
        'Обычная шпаклёвка выдаёт все неровности при включении линейного света, трещины ползут по примыканию багетов, а для замены блока питания приходится вскрывать потолок.',
      solutionTitle: 'Малярка категории Q4, теневые профили и единый сервисный узел',
      solutionText:
        'Проверяем плоскости правилом под боковой лампой с допуском до миллиметра, делаем чёткие теневые швы без плинтусов, а все коллекторы и драйверы убираем в шкаф со свободным доступом.',
      effect:
        'Аккуратная графика стен при любом сценарии света, герметичная сантехника на 10 бар и доступ к любому модулю за одну минуту.',
      specs: [
        'Подготовка стен и потолков по классу Q4 с приёмкой под прожектор бокового света',
        'Алюминиевый теневой профиль по периметру потолков и скрытые двери без наличников',
        'Латунные коллекторы водоснабжения с редукторами, фильтрами 100 мкм и обратной промывкой',
        'Опрессовка всех трубопроводов давлением 10 бар в течение 24 часов с фотофиксацией',
        'Вынесенные трансформаторы света в слаботочный шкаф и магнитные ревизионные люки',
      ],
    },
    lighting: {
      mistakeTitle: 'Слепящие споты, разные оттенки белого и незаметное мерцание',
      mistakeText:
        'Потолок перегружен случайными точечными светильниками, искажающими цвет дерева и кожи, а дешёвые блоки питания создают пульсацию, от которой к вечеру болит голова.',
      solutionTitle: 'Управляемый свет DALI-2 с высоким индексом CRI ≥ 95',
      solutionText:
        'Проектируем три раздельных слоя: мягкую заливку, акценты и ночную навигацию. По шине DALI-2 свет меняет теплоту от дневного рабочего 4500K до вечернего 2700K без дорогих дизайнерских светильников.',
      effect:
        'Правильные живые цвета отделки, плавный старт яркости с 0.1% перед сном и сокращение бюджета на светотехнику до 35%.',
      specs: [
        'Чистая цветопередача CRI ≥ 95 (R9 ≥ 80 для тона кожи) и пульсация меньше 1%',
        'Цифровая шина IEC 62386 DALI-2 с плавным диммированием от 0.1% без ступенек',
        'Автоматическая смена оттенка (Tunable White): 4000–5000K днём и 2700K к ночи',
        'Глубоко утопленная оптика без прямого попадания светодиода в глаза',
        'Низкая дежурная подсветка коридоров и санузлов по датчикам движения ночью',
      ],
    },
  };

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mobileNav.hidden = expanded;
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  // Anatomy Tabs
  const tabs = document.querySelectorAll('.anatomy-tab');
  const mistakeTitleEl = document.getElementById('anatomyMistakeTitle');
  const mistakeTextEl = document.getElementById('anatomyMistakeText');
  const solutionTitleEl = document.getElementById('anatomySolutionTitle');
  const solutionTextEl = document.getElementById('anatomySolutionText');
  const effectEl = document.getElementById('anatomyEffect');
  const specsEl = document.getElementById('anatomySpecs');

  function renderAnatomy(key) {
    const data = ANATOMY_DATA[key];
    if (!data || !mistakeTitleEl) return;

    mistakeTitleEl.textContent = data.mistakeTitle;
    mistakeTextEl.textContent = data.mistakeText;
    solutionTitleEl.textContent = data.solutionTitle;
    solutionTextEl.textContent = data.solutionText;
    effectEl.textContent = data.effect;

    specsEl.innerHTML = '';
    data.specs.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      specsEl.appendChild(li);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((btn) => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderAnatomy(tab.dataset.tab);
    });
  });

  // Calculator
  const areaRange = document.getElementById('areaRange');
  const areaOutput = document.getElementById('areaOutput');
  const propertyBtns = document.querySelectorAll('#propertyTypeGroup .seg-btn');
  const tierBtns = document.querySelectorAll('#tierGroup .tier-btn');
  const optClimate = document.getElementById('optClimate');
  const optSmartHome = document.getElementById('optSmartHome');
  const optAcoustic = document.getElementById('optAcoustic');
  const calcTotalEl = document.getElementById('calcTotal');
  const calcSavingsEl = document.getElementById('calcSavings');
  const calcTimelineEl = document.getElementById('calcTimeline');
  const transferCalcBtn = document.getElementById('transferCalcBtn');
  const leadSummaryInput = document.getElementById('leadSummary');

  const calcState = {
    area: 95,
    property: 'newbuild',
    tier: 'smart',
    climate: true,
    smartHome: true,
    acoustic: false,
  };

  const PROPERTY_NAMES = {
    newbuild: 'Новостройка (бетон)',
    secondary: 'Вторичный фонд',
    house: 'Загородный дом',
  };

  const TIER_NAMES = {
    rational: 'Базовый инженерный',
    smart: 'Умная резиденция',
    bespoke: 'Индивидуальный максимум',
  };

  const TIER_RATE_PER_SQM = {
    rational: 185000,
    smart: 235000,
    bespoke: 310000,
  };

  const PROPERTY_MULTIPLIER = {
    newbuild: 1.0,
    secondary: 1.14,
    house: 1.18,
  };

  const formatKzt = (val) =>
    `${new Intl.NumberFormat('ru-RU').format(Math.round(val / 10000) * 10000)} ₸`;

  let lastSummaryString = '';

  function updateCalculator() {
    if (!areaRange || !calcTotalEl) return;

    const area = Number(areaRange.value);
    calcState.area = area;
    areaOutput.textContent = `${area} м²`;

    const baseRate = TIER_RATE_PER_SQM[calcState.tier];
    const propMult = PROPERTY_MULTIPLIER[calcState.property];
    let total = area * baseRate * propMult;

    if (optClimate && optClimate.checked) {
      total += 1400000 + area * 14000;
    }
    if (optSmartHome && optSmartHome.checked) {
      total += 1100000 + area * 11000;
    }
    if (optAcoustic && optAcoustic.checked) {
      total += 950000 + area * 12000;
    }

    // Rational engineering optimization saves 22% to 28% vs inflated premium quotes
    const savingsShare = calcState.tier === 'bespoke' ? 0.28 : calcState.tier === 'smart' ? 0.25 : 0.22;
    const inflatedMarketPrice = total / (1 - savingsShare);
    const savedAmount = inflatedMarketPrice - total;
    const savedPct = Math.round(savingsShare * 100);

    const baseMonths = area <= 70 ? 3.5 : area <= 120 ? 4.5 : area <= 180 ? 5.5 : 6.5;
    const extraMonths =
      (calcState.property === 'secondary' ? 0.5 : calcState.property === 'house' ? 0.8 : 0) +
      (calcState.tier === 'bespoke' ? 0.5 : 0);
    const timeline = (baseMonths + extraMonths).toFixed(1).replace('.0', '');

    calcTotalEl.textContent = formatKzt(total);
    calcSavingsEl.textContent = `~ ${formatKzt(savedAmount)} (${savedPct}%)`;
    calcTimelineEl.textContent = `${timeline} мес.`;

    const extras = [];
    if (optClimate?.checked) extras.push('Климат');
    if (optSmartHome?.checked) extras.push('Умный дом');
    if (optAcoustic?.checked) extras.push('Акустика');

    lastSummaryString = `${area} м², ${PROPERTY_NAMES[calcState.property]}, ${TIER_NAMES[calcState.tier]}${
      extras.length ? ` (${extras.join(' + ')})` : ''
    } — ориентир ${formatKzt(total)}`;
  }

  if (areaRange) {
    areaRange.addEventListener('input', updateCalculator);
  }

  propertyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      propertyBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      calcState.property = btn.dataset.value;
      updateCalculator();
    });
  });

  tierBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tierBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      calcState.tier = btn.dataset.value;
      updateCalculator();
    });
  });

  [optClimate, optSmartHome, optAcoustic].forEach((cb) => {
    if (cb) {
      cb.addEventListener('change', updateCalculator);
    }
  });

  if (transferCalcBtn) {
    transferCalcBtn.addEventListener('click', () => {
      updateCalculator();
      if (leadSummaryInput) {
        leadSummaryInput.value = lastSummaryString;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('leadName');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 450);
        }
      }
    });
  }

  updateCalculator();

  // FAQ Accordion
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const content = trigger.nextElementSibling;
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (content) {
        content.hidden = expanded;
      }
    });
  });

  // Lead Form Submission
  const leadForm = document.getElementById('leadForm');
  const leadStatus = document.getElementById('leadStatus');
  const leadSubmitBtn = document.getElementById('leadSubmitBtn');

  if (leadForm) {
    leadForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.getElementById('leadName').value.trim();
      const contact = document.getElementById('leadContact').value.trim();
      const rawSummary = document.getElementById('leadSummary').value.trim();
      const comment = document.getElementById('leadComment').value.trim();
      const variantMatch = document.title.match(/^\[(v\d+|d\d+)\]/);
      const baseCode = variantMatch ? variantMatch[1] : '';
      const activeDesign = document.documentElement.dataset.design;
      const defaultDesign = document.documentElement.dataset.defaultDesign || 'base';
      let variantPrefix = baseCode ? `[${baseCode}]` : '';
      if (
        baseCode &&
        activeDesign &&
        activeDesign !== baseCode &&
        !(defaultDesign === 'base' && activeDesign === 'base')
      ) {
        variantPrefix = `[${baseCode}|${activeDesign}]`;
      }
      const summary = variantPrefix
        ? `${variantPrefix} ${rawSummary || 'Без калькулятора'}`
        : rawSummary;

      if (!name || !contact) {
        leadStatus.textContent = 'Пожалуйста, укажите имя и телефон или Telegram.';
        leadStatus.classList.add('is-error');
        return;
      }

      leadStatus.classList.remove('is-error');
      leadStatus.textContent = 'Отправляем заявку...';
      leadSubmitBtn.disabled = true;

      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, contact, summary, comment }),
        });

        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload.ok) {
          throw new Error(payload.error || 'Не удалось отправить заявку.');
        }

        leadStatus.textContent =
          payload.message || 'Заявка принята. Инженер свяжется с вами в ближайшее время.';
        leadForm.reset();
      } catch (err) {
        leadStatus.classList.add('is-error');
        leadStatus.textContent =
          window.location.protocol === 'file:'
            ? 'Локальный просмотр без сервера: после деплоя на Vercel форма автоматически отправляет заявки на /api/lead.'
            : err.message || 'Ошибка отправки. Проверьте соединение и попробуйте снова.';
      } finally {
        leadSubmitBtn.disabled = false;
      }
    });
  }

  // Optional Company Info Spoiler
  const companySpoiler = document.getElementById('companySpoiler');
  const spoilerLabel = companySpoiler?.querySelector('.spoiler-toggle-label');
  if (companySpoiler && spoilerLabel) {
    companySpoiler.addEventListener('toggle', () => {
      spoilerLabel.textContent = companySpoiler.open ? 'Свернуть' : 'Развернуть';
    });

    document.querySelectorAll('a[href="#about"]').forEach((link) => {
      link.addEventListener('click', () => {
        companySpoiler.open = true;
      });
    });
  }
})();
