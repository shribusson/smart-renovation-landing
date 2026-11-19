(() => {
  'use strict';

  const ANATOMY_DATA = {
    smart: {
      mistakeTitle: 'Переплата x3 за закрытую экосистему и десятки сценариев «для галочки»',
      mistakeText:
        'В смету закладывают люксовые сенсорные панели на каждую стену и сложное серверное оборудование. В реальности 80% функций не используются, а замена одного элемента требует вызова узкого интегратора.',
      solutionTitle: 'Промышленная локальная автоматизация под реальные привычки',
      solutionText:
        'Используем надёжные открытые шины и модульные контроллеры: мастер-выключатель при входе, автоматический ночной свет, управление климатом по датчикам CO₂ и перекрытие воды при протечке за 2 секунды.',
      effect:
        'Экономия до 45% на оборудовании и монтаже по сравнению с люкс-интеграцией при мгновенном отклике и автономной работе без интернета.',
      specs: [
        'Локальный отказоустойчивый контроллер в щите без облачной зависимости',
        'Резервное управление светом на физических клавишах',
        'Проводные датчики протечки с электроприводами шаровых кранов',
        'Сценарии «Утро / Работа / Кино / Уход из дома»',
        'Полная схема щита и резервные линии в техпаспорте объекта',
      ],
    },
    ergonomics: {
      mistakeTitle: 'Красивые рендеры, в которых неудобно жить каждый день',
      mistakeText:
        'Розетки оказываются за изголовьем или на неудобной высоте, двери пересекаются траекториями, а зоны хранения не соответствуют реальному объёму вещей семьи.',
      solutionTitle: 'Проектирование от сценария движения и антропометрии семьи',
      solutionText:
        'До начала стройки прорабатываем маршруты, открывание створок, высоту столешниц, сценарии зарядки гаджетов, скрытые хозблоки и постирочные узлы с точностью до миллиметра.',
      effect:
        'Квартира ощущается просторнее на 15–20% при той же площади за счёт ликвидации мёртвых зон и выверенного хранения.',
      specs: [
        'Карта 100% розеток и выводов под реальную мебель и технику',
        'Проходные и мастер-переключатели в зонах смены сценариев',
        'Интегрированные ниши под робот-пылесос, глажку и сушильный блок',
        'Отсутствие порогов и стыков покрытий в зонах основного трафика',
        'Эргономические допуски проходов от 850 мм',
      ],
    },
    climate: {
      mistakeTitle: 'Дорогая отделка при духоте и шуме от улицы или соседей',
      mistakeText:
        'Заказчик тратит миллионы на паркет и керамогранит, но спит с открытым окном из-за нехватки кислорода или слышит лифт и разговоры через перегородку.',
      solutionTitle: 'Скрытый приточный климат-контур и расчётная звукоизоляция',
      solutionText:
        'Закладываем тихую вентиляцию с фильтрацией пыли и подогревом воздуха, а спальни и кабинеты изолируем каркасными системами с виброразвязкой вместо бессмысленного «промазывания» стен тонкими мембранами.',
      effect:
        'Стабильный уровень CO₂ ниже 700 ppm, снижение фонового шума до 21–24 дБ и отсутствие переплаты за неэффективные «чудо-материалы».',
      specs: [
        'Малошумная приточно-вытяжная установка с шумоглушителями',
        'Автоматическое поддержание влажности и температуры по комнатам',
        'Звукоизоляционные перегородки и облицовки до -58 дБ',
        'Шумопоглощающая канализация и демпфирование стояков',
        'Щелевые диффузоры, интегрированные в плоскость потолка',
      ],
    },
    nodes: {
      mistakeTitle: 'Хрупкая красота: трещины на стыках и недоступные ревизии',
      mistakeText:
        'Для упрощения ставят пластиковые уголки и широкие плинтусы, а к коллектору или трансформаторам невозможно добраться без вскрытия плитки.',
      solutionTitle: 'Выверенные теневые примыкания и сервисные узлы быстрого доступа',
      solutionText:
        'Все переходы материалов, скрытые двери и теневые профили выполняются по нашим типовым узлам, а коллекторные шкафы, фильтры и блоки питания выносятся в удобную техническую зону с маркировкой.',
      effect:
        'Безупречная архитектура линий без визуального шума и минимальная стоимость обслуживания на дистанции 10+ лет.',
      specs: [
        'Теневой профиль примыкания потолок-стена и пол-стена вместо плинтусов',
        'Коллекторная разводка воды с защитой от гидроударов и обратной промывкой',
        'Отдельный сервисный щит под блоки питания светодиодных лент',
        'Скрытые люки под покраску или плитку с удобным ходом открывания',
        'Испытание систем под повышенным давлением перед закрытием стен',
      ],
    },
    lighting: {
      mistakeTitle: 'Слепящие люстры или избыток дорогих треков с плохим спектром',
      mistakeText:
        'Потолок превращается в сетку из случайных спотов с разными оттенками белого и пульсацией, от которой вечером устают глаза.',
      solutionTitle: 'Многослойный биодинамический свет с высоким CRI > 95',
      solutionText:
        'Разделяем функциональный, акцентный и мягкий вечерний свет. Используем проверенные линейки утопленных светильников и профилей без переплаты за имя дизайнерского бутика.',
      effect:
        'Естественная передача фактур отделки, комфортное переключение ко сну и экономия до 35% бюджета на светотехнике.',
      specs: [
        'Индекс цветопередачи CRI 95+ и коэффициент пульсации < 1%',
        'Утопленные антибликовые светильники с глубокой посадкой источника',
        'Мягкие закарнизные и ночные подсветки по датчикам движения',
        'Тёплый вечерний сценарий 2700K для спален и гостиной',
        'Заменяемые стандартные драйверы в доступном сервисном щите',
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
    rational: 46000,
    smart: 58000,
    bespoke: 74000,
  };

  const PROPERTY_MULTIPLIER = {
    newbuild: 1.0,
    secondary: 1.14,
    house: 1.18,
  };

  const formatRub = (val) =>
    `${new Intl.NumberFormat('ru-RU').format(Math.round(val / 1000) * 1000)} ₽`;

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
      total += 320000 + area * 2800;
    }
    if (optSmartHome && optSmartHome.checked) {
      total += 240000 + area * 2200;
    }
    if (optAcoustic && optAcoustic.checked) {
      total += 210000 + area * 2400;
    }

    // Rational engineering optimization saves 22% to 29% vs inflated premium quotes
    const savingsShare = calcState.tier === 'bespoke' ? 0.28 : calcState.tier === 'smart' ? 0.25 : 0.22;
    const inflatedMarketPrice = total / (1 - savingsShare);
    const savedAmount = inflatedMarketPrice - total;
    const savedPct = Math.round(savingsShare * 100);

    const baseMonths = area <= 70 ? 3.5 : area <= 120 ? 4.5 : area <= 180 ? 5.5 : 6.5;
    const extraMonths =
      (calcState.property === 'secondary' ? 0.5 : calcState.property === 'house' ? 0.8 : 0) +
      (calcState.tier === 'bespoke' ? 0.5 : 0);
    const timeline = (baseMonths + extraMonths).toFixed(1).replace('.0', '');

    calcTotalEl.textContent = formatRub(total);
    calcSavingsEl.textContent = `~ ${formatRub(savedAmount)} (${savedPct}%)`;
    calcTimelineEl.textContent = `${timeline} мес.`;

    const extras = [];
    if (optClimate?.checked) extras.push('Климат');
    if (optSmartHome?.checked) extras.push('Умный дом');
    if (optAcoustic?.checked) extras.push('Акустика');

    lastSummaryString = `${area} м², ${PROPERTY_NAMES[calcState.property]}, ${TIER_NAMES[calcState.tier]}${
      extras.length ? ` (${extras.join(' + ')})` : ''
    } — ориентир ${formatRub(total)}`;
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
      const summary = document.getElementById('leadSummary').value.trim();
      const comment = document.getElementById('leadComment').value.trim();

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
})();
