(() => {
  'use strict';

  const ANATOMY_DATA = {
    climate: {
      mistakeTitle: 'Сухой зимний воздух 15–20%, городской смог и потерянная высота потолков',
      mistakeText:
        'Если про вентиляцию и увлажнение вспоминают после утверждения дизайна, короба приходится тянуть через центр комнат, потолки опускаются на 20–25 см, а зимой при закрытых окнах в спальне душно и рассыхается паркет.',
      solutionTitle: 'Скрытая вентиляция с очисткой, увлажнение 40–55% и чистые линии',
      solutionText:
        'Трассы прокладываем над коридорами, гардеробными и встроенными шкафами, сохраняя высоту потолков в жилых комнатах. Очищаем уличный воздух от смога и пыльцы, поддерживаем 40–55% влажности и ставим узкие аккуратные решётки.',
      effect:
        'Свежий воздух без открытых форточек, комфортная влажность для сна и деревянной отделки, а обслуживание сводится к замене фильтров примерно раз в 6 месяцев.',
      specs: [
        'Многоступенчатая очистка уличного воздуха от зимнего смога, мелкой пыли и пыльцы',
        'Увлажнение до комфортных 40–55% зимой — легче дышится детям и не сохнет паркет',
        'Прокладка каналов в зонах шкафов и коридоров с сохранением высоты потолка в комнатах',
        'Один доступный сервисный отсек и понятная памятка по замене фильтров 2 раза в год',
        'Точные схемы под заказную мебель — можно прийти с нуля или с готовым дизайн-проектом',
      ],
      techNote:
        'Технические детали: целевой уровень CO₂ < 800 ppm (ASHRAE 62.2), влажность 40–55%, фильтры F7 + HEPA H13 (PM2.5), узкие щелевые диффузоры в плоскость чистового потолка.',
    },
    acoustics: {
      mistakeTitle: 'Шум с улицы, гул труб в санузлах и разговоры через перегородку',
      mistakeText:
        'Даже дорогая отделка не спасает покой семьи, если жёсткие перегородки передают вибрации от перекрытий, розетки сделаны сквозными, а вентилятор шумит громче шёпота у кровати.',
      solutionTitle: 'Тихие перегородки и мягкое гашение звука вентиляции до 23 дБ',
      solutionText:
        'Отделяем спальни и детские упругими прокладками от плит, разносим подрозетники, оборачиваем канализационные стояки и рассчитываем каналы так, чтобы ночной фон не превышал шелеста листьев.',
      effect:
        'Крепкий сон в спальне и спокойная работа из дома даже рядом с оживлённым проспектом Алматы или ветреными фасадами Астаны.',
      specs: [
        'Шумоглушители на каналах и низкая скорость потока — у кровати ночью до 23 дБ',
        'Многослойные перегородки с виброразвязкой от пола и потолка между спальнями',
        'Смещение розеток без сквозных мостиков звука между соседними комнатами',
        'Трёхслойная шумоизоляция стояков воды и канализации в коробах',
        'Герметичная заделка монтажных швов окон и витражей на этапе черновой приёмки',
      ],
      techNote:
        'Технические детали: ночной шум вентрешёток ≤ 23 дБ(А) (кривая NC-23), перегородки с индексом изоляции Rw 56–58 дБ с гашением структурных вибраций.',
    },
    light: {
      mistakeTitle: 'Усталость глаз вечером, искажение цветов и слепящие потолки',
      mistakeText:
        'Случайно выбранные лампы дают заметное на камере и в жизни мерцание, делают оттенки дерева и кожи холодными или серыми, а открытые источники бьют прямо в глаза с дивана.',
      solutionTitle: 'Трёхслойный мягкий свет, естественные цвета и плавный закат',
      solutionText:
        'Собираем освещение тремя слоями — мягкий фон, рабочий акцент и ночной путь — без лишнего перегруза декоративными люстрами. К вечеру оттенок автоматически становится теплее и помогает быстрее засыпать.',
      effect:
        'Натуральные цвета интерьера, спокойная нагрузка на зрение у детей и взрослых и оптимизация сметы на освещение до 25–30%.',
      specs: [
        'Честная передача цветов отделки, текстиля и кожи близко к дневному свету',
        'Качественные блоки питания в сервисном шкафу — ноль скрытого мерцания и жужжания',
        'Утопленная оптика без слепящих точек на потолке над кроватью и диваном',
        'Плавное переключение от бодрого дневного оттенка к уютному вечернему свету',
        'Мягкая ночная подсветка коридора и санузла по датчику движения — не будит семью',
      ],
      techNote:
        'Технические детали: индекс цветопередачи CRI ≥ 95 (R9 ≥ 80), пульсация < 1%, диммирование с 0.1% по шине IEC 62386 DALI-2, спектр 2700–5000K.',
    },
    automation: {
      mistakeTitle: 'Дорогие сенсорные экраны, отказ без интернета и сложное обслуживание',
      mistakeText:
        'Сложные закрытые системы с планшетами на каждой стене заметно удорожают смету, зависают при сбое роутера и через пять лет требуют редкого узкого специалиста на каждый вызов.',
      solutionTitle: 'Простой открытый щит, обычные клавиши и защита от протечек за 2 секунды',
      solutionText:
        'Убираем десятки лишних экранов: управление живёт на кабеле внутри подписанного щита. Свет всегда включается привычными клавишами даже без сервера, а вода автоматически перекрывается при первых каплях.',
      effect:
        'Экономия до 40% бюджета автоматизации, открытые комплектующие без привязки к одному подрядчику и прозрачная памятка для семьи на 10+ лет.',
      specs: [
        'Открытый промышленный контроллер в щите без платных облачных подписок',
        'Прямое аппаратное резервирование: настенные клавиши работают в любой ситуации',
        'Мастер-клавиша у входа выключает весь лишний свет, но оставляет холодильник и роутер',
        'Проводные датчики под раковинами и стиралкой закрывают стояки за 2 секунды',
        'Полный техпаспорт квартиры, маркировка линий и поэтапная сдача скрытых узлов до отделки',
      ],
      techNote:
        'Технические детали: контроллер Wiren Board на DIN-рейку, шина Modbus RTU, опрессовка труб 10 бар на 24 ч, щит по ПУЭ РК с УЗО 10/30 мА.',
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
