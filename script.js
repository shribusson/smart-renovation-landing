(() => {
  'use strict';

  const ANATOMY_DATA = {
    smart: {
      mistakeTitle: 'Сенсорные экраны в каждой комнате и зависимость от внешних сервисов',
      mistakeText:
        'Автоматизация в квартире часто получается избыточной и дорогой: на стенах ставят сложные планшеты, а при сбое домашней сети или отключении облака часть сценариев перестаёт откликаться.',
      solutionTitle: 'Локальный щит управления и прямое дублирование клавиш',
      solutionText:
        'Вся логика работает внутри электрощита на кабельной связи. Привычные настенные выключатели включают свет напрямую в любой ситуации, шторы и климат реагируют мгновенно, а датчики протечки перекрывают воду за 2 секунды.',
      effect:
        'Оптимизация бюджета автоматики до 40% при полном отказе от лишних экранов. Нулевая зависимость от интернета и простое обслуживание через 10 лет.',
      specs: [
        'Модульный контроллер внутри щита на открытом промышленном языке управления',
        'Прямое аппаратное дублирование: настенные клавиши включают свет напрямую в любой ситуации',
        'Проводные датчики воды в мокрых зонах и шаровые краны с электроприводом (перекрытие за 2 сек.)',
        'Электрощит с защитой человека от поражения током в ванных и на кухне и маркировкой линий',
        'Резервная копия настроек на носителе у владельца и понятная схема всех подключений',
      ],
      techNote:
        'Технические детали: контроллер Wiren Board на DIN-рейку, открытая шина Modbus RTU, аппаратный резерв цепей освещения, электрощит по ПУЭ РК с УЗО 10/30 мА.',
    },
    ergonomics: {
      mistakeTitle: 'Красивая визуализация, не согласованная с размерами мебели и розеток',
      mistakeText:
        'Когда расстановка мебели уточняется уже после монтажа электрики, выключатели перекрываются дверцами шкафов, провода тянутся по полу, а технику для уборки и стирки сложно разместить скрытно.',
      solutionTitle: 'Схема движений семьи и точная привязка выводов к мебели',
      solutionText:
        'Закладываем маршруты, открывание дверей, высоту столешниц и выключателей на этапе обмеров. Воду, вытяжку и питание подводим заранее внутрь будущих шкафов для техники и хозяйственной зоны.',
      effect:
        'Квартира ощущается заметно свободнее на той же площади, а встроенная мебель встаёт без доработок стен и лишних затрат.',
      specs: [
        'Привязка розеток и кабелей интернета к точным размерам выбранной мебели и техники',
        'Мастер-выключатель у входной двери и удобное дублирование света у кровати',
        'Скрытая ниша под стиральную и сушильную машины со сливом в полу, кранами и вентиляцией',
        'Ровные полы без порожков по всей квартире и удобная ширина основных проходов от 850 мм',
        'Строгие прямые углы под кухонный гарнитур, душевые перегородки и встроенные шкафы',
      ],
      techNote:
        'Технические детали: габаритная привязка подрозетников, закладные профили под навесную мебель, углы 90° в зонах примыкания, свободные проходы не менее 850 мм.',
    },
    climate: {
      mistakeTitle: 'Выбор между уличным шумом из окна и духотой к утру',
      mistakeText:
        'При плотных стеклопакетах ночью в спальне быстро накапливается углекислый газ и становится душно, а открытая створка в городе приносит уличный шум, пыльцу и зимний смог.',
      solutionTitle: 'Бесшумная приточная вентиляция с очисткой и тихие перегородки',
      solutionText:
        'Подаём свежий воздух с улицы через систему многоступенчатой очистки от смога и запахов, ставим шумоглушители на каналы и отделяем спальни от гостиной и соседей многослойными перегородками.',
      effect:
        'Свежий воздух как за городом при закрытых окнах, ночной звук вентиляции тише шёпота и отсутствие утренней тяжести в голове.',
      specs: [
        'Многоступенчатая фильтрация уличного воздуха от мелкой пыли, смога, гари и пыльцы',
        'Автоматическая регулировка подачи воздуха по датчикам свежести и влажности в комнатах',
        'Точный расчёт каналов и глушители: уровень шума у кровати ночью не превышает 23 дБ',
        'Многослойные перегородки между спальнями и кабинетом с упругими креплениями к плитам',
        'Шумоизоляция стояков канализации и аккуратные узкие решётки в плоскости потолка',
      ],
      techNote:
        'Технические детали: целевой порог CO₂ < 800 ppm, влажность 35–55%, фильтры F7 + HEPA H13 (PM2.5), шум вентиляции ≤ 23 дБ(А) (NC-23), перегородки Rw 56–58 дБ (WELL Gold / ASHRAE 62.2).',
    },
    nodes: {
      mistakeTitle: 'Волны на стенах под боковым светом и сложный доступ к фильтрам',
      mistakeText:
        'При линейной подсветке заметна малейшая неровность отделки, а разбросанные по потолку и нишам блоки питания и фильтры неудобно проверять и обслуживать спустя несколько лет.',
      solutionTitle: 'Тщательная подготовка под боковой свет и единый сервисный шкаф',
      solutionText:
        'Проверяем геометрию стен под боковым прожектором, оформляем чистые теневые швы без накладных плинтусов, а все узлы воды, фильтры и блоки питания выводим в один аккуратный шкаф.',
      effect:
        'Ровная графика стен при любом сценарии света, герметичная сантехника с испытанием давлением и быстрый доступ к любому узлу.',
      specs: [
        'Высокоточное выравнивание стен и потолков с проверкой под боковым освещением',
        'Алюминиевые теневые швы по периметру потолка и двери скрытого монтажа без наличников',
        'Надёжный узел распределения воды с редукторами давления и самопромывными фильтрами',
        'Испытание всех трубопроводов повышенным давлением перед отделкой с фотофиксацией',
        'Вынос блоков питания освещения в общий сервисный шкаф и магнитные люки в плитке',
      ],
      techNote:
        'Технические детали: малярная подготовка категории Q4 (допуск плоскости ≤ 1 мм на 2 м), опрессовка труб давлением 10 бар на 24 часа, латунные коллекторы с фильтрами 100 мкм.',
    },
    lighting: {
      mistakeTitle: 'Слепящие светильники, искажённые оттенки дерева и скрытое мерцание',
      mistakeText:
        'Случайно расставленные лампы дают блики, меняют цвет отделки и кожи, а недорогие блоки питания вызывают незаметное мерцание, от которого к вечеру устают глаза.',
      solutionTitle: 'Трёхслойное освещение с плавной регулировкой и точной цветопередачей',
      solutionText:
        'Собираем свет в три слоя: мягкий общий фон, акцент на столе или деталях и ночную подсветку пути. Цифровое управление меняет оттенок от дневного нейтрального до вечернего тёплого без переплаты за лишние декоративные светильники.',
      effect:
        'Естественные цвета отделки, отдых для глаз при чтении и плавная настройка яркости с оптимизацией бюджета на свет до 30%.',
      specs: [
        'Высокая точность передачи оттенков кожи, дерева и текстиля без бледности и серых тонов',
        'Ровное свечение без скрытого мерцания и резких скачков при снижении яркости',
        'Плавная смена теплоты в течение суток: нейтральный свет днём и тёплый уютный вечером',
        'Глубоко утопленные светильники — свет мягко освещает комнату и не бьёт в глаза',
        'Приглушённая ночная подсветка коридора и санузлов по датчикам движения',
      ],
      techNote:
        'Технические детали: цифровая шина IEC 62386 DALI-2, плавное диммирование от 0.1%, индекс цветопередачи CRI ≥ 95 (R9 ≥ 80), пульсация < 1%, температура 2700–5000K (Tunable White).',
    },
  };

  // Мобильное меню
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

  // Вкладки устройства систем
  const tabs = document.querySelectorAll('.anatomy-tab');
  const mistakeTitleEl = document.getElementById('anatomyMistakeTitle');
  const mistakeTextEl = document.getElementById('anatomyMistakeText');
  const solutionTitleEl = document.getElementById('anatomySolutionTitle');
  const solutionTextEl = document.getElementById('anatomySolutionText');
  const effectEl = document.getElementById('anatomyEffect');
  const specsEl = document.getElementById('anatomySpecs');
  const techNoteEl = document.getElementById('anatomyTechNote');

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

    if (techNoteEl && data.techNote) {
      techNoteEl.textContent = data.techNote;
    }
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

  // Спойлер точных норм в блоке «Гид для владельца»
  const techDetails = document.getElementById('techDetails');
  const techToggleLabel = techDetails?.querySelector('.tech-details-toggle');
  if (techDetails && techToggleLabel) {
    techDetails.addEventListener('toggle', () => {
      techToggleLabel.textContent = techDetails.open ? 'Скрыть' : 'Показать';
    });
  }

  // Калькулятор бюджета и рациональной оптимизации
  const areaRange = document.getElementById('areaRange');
  const areaOutput = document.getElementById('areaOutput');
  const propertyBtns = document.querySelectorAll('#propertyTypeGroup .seg-btn');
  const tierBtns = document.querySelectorAll('#tierGroup .tier-btn');
  const optClimate = document.getElementById('optClimate');
  const optSmartHome = document.getElementById('optSmartHome');
  const optAcoustic = document.getElementById('optAcoustic');
  const calcTotalEl = document.getElementById('calcTotal');
  const calcSavingsEl = document.getElementById('calcSavings');
  const calcScopeNoteEl = document.getElementById('calcScopeNote');
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
    smart: 'Комфортный дом',
    bespoke: 'Индивидуальный проект',
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

    const savingsShare = calcState.tier === 'bespoke' ? 0.28 : calcState.tier === 'smart' ? 0.25 : 0.22;
    const referenceTotal = total / (1 - savingsShare);
    const savedAmount = referenceTotal - total;
    const savedPct = Math.round(savingsShare * 100);

    const baseMonths = area <= 70 ? 3.5 : area <= 120 ? 4.5 : area <= 180 ? 5.5 : 6.5;
    const extraMonths =
      (calcState.property === 'secondary' ? 0.5 : calcState.property === 'house' ? 0.8 : 0) +
      (calcState.tier === 'bespoke' ? 0.5 : 0);
    const timeline = (baseMonths + extraMonths).toFixed(1).replace('.0', '');

    calcTotalEl.textContent = formatKzt(total);
    if (calcSavingsEl) {
      calcSavingsEl.textContent = `~ ${formatKzt(savedAmount)} (${savedPct}%)`;
    }
    calcTimelineEl.textContent = `${timeline} мес.`;

    const extras = [];
    const scopeParts = [];
    if (optClimate?.checked) {
      extras.push('Свежий воздух');
      scopeParts.push('вентиляцию');
    }
    if (optSmartHome?.checked) {
      extras.push('Управление и защита от воды');
      scopeParts.push('управление домом');
    }
    if (optAcoustic?.checked) {
      extras.push('Звукоизоляция');
      scopeParts.push('звукоизоляцию');
    }

    if (calcScopeNoteEl) {
      const joined =
        scopeParts.length > 1
          ? `${scopeParts.slice(0, -1).join(', ')} и ${scopeParts[scopeParts.length - 1]}`
          : scopeParts[0];
      calcScopeNoteEl.textContent = scopeParts.length
        ? `Включает единый проект, черновую базу, ${joined}.`
        : 'Включает единый проект, черновую подготовку и надёжную электрику.';
    }

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

  // Вопросы и ответы
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

  // Отправка заявки
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
      const variantPrefix = variantMatch ? `[${variantMatch[1]}]` : '';
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
            ? 'Локальный просмотр без сервера: после публикации на сервере форма автоматически отправляет заявки.'
            : err.message || 'Ошибка отправки. Проверьте соединение и попробуйте снова.';
      } finally {
        leadSubmitBtn.disabled = false;
      }
    });
  }

  // Спойлер информации о компании
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
