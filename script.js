(() => {
  'use strict';

  const ANATOMY_DATA = {
    smart: {
      mistakeTitle: 'Переплата x3 за закрытую экосистему и десятки сценариев «для галочки»',
      mistakeText:
        'В смету закладывают люксовые сенсорные панели на каждую стену и закрытые проприетарные контроллеры. В реальности 80% функций не используются, а обслуживание привязывает владельца к одному интегратору.',
      solutionTitle: 'Промышленный щит (Wiren Board / Modbus) + открытый локальный сервер',
      solutionText:
        'Собираем щит на DIN-рейку с аппаратным резервом клавиш (свет работает даже при отключении сервера), интегрируем DALI-2 освещение, вентиляцию по CO₂ и автономную защиту от протечек со сработкой ≤ 2 сек.',
      effect:
        'Экономия до 45% на автоматизации против закрытых KNX-панелей с мгновенным откликом, работой без интернета и полной ремонтопригодностью через 10+ лет.',
      specs: [
        'Промышленный контроллер Wiren Board / Modbus RTU на DIN-рейке без облачной зависимости',
        'Аппаратный резерв: физические клавиши включают свет независимо от сервера',
        'Проводные датчики протечки с электроприводами кранов (сработка ≤ 2 сек.)',
        'Соответствие ПУЭ РК: УЗО 10/30 мА для мокрых зон и гребенчатые шины в щите',
        'Полная однолинейная схема, маркировка клемм и бэкап логики в техпаспорте',
      ],
    },
    ergonomics: {
      mistakeTitle: 'Красивые 3D-рендеры, в которых неудобно жить каждый день',
      mistakeText:
        'Розетки оказываются за изголовьем или на неудобной высоте, двери бьются друг о друга, а системы хранения не вмещают реальный бытовой инвентарь и гардероб семьи.',
      solutionTitle: 'Проектирование от сценария движения и антропометрии семьи',
      solutionText:
        'До выхода бригад проектируем траектории движения, высоты столешниц и выключателей, ниши под сушильные колонны, робот-пылесосы, скрытые хозблоки и бесшовное хранение с допуском ±1 мм.',
      effect:
        'Жильё ощущается просторнее на 15–20% при той же площади за счёт ликвидации мёртвых зон и эргономически выверенной мебели.',
      specs: [
        '100% карта розеток, слаботочки и выводов под реальную мебель и технику',
        'Проходные и мастер-выключатели в точках смены сценариев и у входа',
        'Интегрированные ниши с подводом воды и вентиляции под постирочный блок',
        'Беспороговое примыкание покрытий и ширина основных проходов от 850 мм',
        'Контроль углов ровно 90° в зонах встраиваемой мебели и санузлов',
      ],
    },
    climate: {
      mistakeTitle: 'Дорогая отделка при духоте, смоге и шуме от улицы или соседей',
      mistakeText:
        'Владелец вкладывает миллионы в керамогранит и паркет, но просыпается с тяжёлой головой из-за высокого CO₂ или открывает окна, впуская уличный шум и мелкую пыль PM2.5.',
      solutionTitle: 'Микроклимат по нормам WELL Gold / ASHRAE 62.2 и акустика до -58 дБ',
      solutionText:
        'Закладываем тихую приточно-вытяжную вентиляцию с фильтрацией F7 / HEPA H13 и датчиками CO₂ (DCV), а спальни изолируем каркасными облицовками с виброразвязкой вместо бесполезных тонких мембран.',
      effect:
        'Стабильный уровень CO₂ < 800 ppm, влажность 35–55% без сквозняков и шум вентиляции в спальнях ≤ 23 дБ(A) (уровень NC-23).',
      specs: [
        'Приточная фильтрация класса F7 / HEPA H13 от смога, пыльцы и PM2.5',
        'Удержание CO₂ ниже 800 ppm и влажности 35–55% (стандарт ASHRAE / WELL Gold)',
        'Шум инженерных систем в спальнях не выше 23 дБ(A) (шумоглушители + виброопоры)',
        'Акустические перегородки с виброразвязкой до Rw 56–58 дБ (по СН РК и WELL)',
        'Шумопоглощающая канализация и щелевые диффузоры в плоскости потолка',
      ],
    },
    nodes: {
      mistakeTitle: 'Трещины на стыках, кривые стены под светом и замурованные ревизии',
      mistakeText:
        'Стены готовят под «стандартную шпаклёвку», которые затем проявляют волны при включении закарнизного света, а к коллектору или драйверам LED невозможно добраться без вскрытия плитки.',
      solutionTitle: 'Штукатурка класса Q4, теневые примыкания и опрессовка 10 бар',
      solutionText:
        'Выводим поверхности по стандарту Q4 (проверка правилом 2 м под боковым светом с допуском ≤ 1 мм), делаем теневые профили вместо накладных плинтусов, а коллекторные шкафы и драйверы выносим в удобный сервисный блок.',
      effect:
        'Чёткая архитектура линий без визуального шума и защита от протечек с минимальной стоимостью обслуживания на дистанции 10+ лет.',
      specs: [
        'Подготовка стен и потолков под покраску по высшему стандарту Q4 (боковой свет)',
        'Теневые профили стена–потолок и микроплинтусы вместо накладных уголков',
        'Коллекторный узел с редукторами давления, фильтрами и обратной промывкой',
        'Гидравлическая опрессовка системы давлением 10 бар (1.5–2×P_раб) с актом на 24 ч',
        'Выносной сервисный блок для всех драйверов света и скрытые магнитные ревизии',
      ],
    },
    lighting: {
      mistakeTitle: 'Слепящие люстры или треки с низким CRI и мерцанием',
      mistakeText:
        'Потолок превращается в сетку из случайных спотов с разными оттенками белого, искажением цветов интерьера и незаметной пульсацией, от которой вечером устают глаза.',
      solutionTitle: 'Циркадный свет по шине IEC 62386 DALI-2 с CRI ≥ 95 и R9 ≥ 80',
      solutionText:
        'Разделяем функциональный, акцентный и вечерний свет, управляем яркостью и температурой (Tunable White 2700K–5000K) по открытому протоколу DALI-2 без переплаты за бутиковые бренды.',
      effect:
        'Естественная цветопередача фактур и кожи, мягкое диммирование от 0.1% ко сну и экономия до 35% бюджета на светотехнике.',
      specs: [
        'Индекс цветопередачи CRI ≥ 95 (R9 ≥ 80) и коэффициент пульсации < 1%',
        'Адресная шина IEC 62386 DALI-2 с глубоким диммированием до 0.1%',
        'Циркадные сценарии (Tunable White): бодрый 4000–5000K днём и тёплый 2700K вечером',
        'Утопленные антибликовые светильники с глубокой посадкой источника света',
        'Ночная дежурная подсветка пола по датчикам присутствия',
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
    rational: 'Rational Comfort',
    smart: 'Smart Residence',
    bespoke: 'Bespoke Engineering',
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
      const variantMatch = document.title.match(/^\[(v\d+)\]/);
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
