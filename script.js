(() => {
  'use strict';

  const CHECK_ICON_SVG =
    '<svg class="vis-check-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="8"/><path d="M6.8 10.2l2.1 2.1 4.4-4.6"/></svg>';

  const ANATOMY_DATA = {
    climate: {
      photo: '/assets/vis-air.jpg',
      alt: 'Спальня с панорамным остеклением, чистым воздухом и скрытым щелевым диффузором в потолке',
      badge: 'ВОЗДУХ · PM2.5 · 40–55%',
      title: 'Закрытые окна без духоты, смога и зимней сухости',
      note: 'Каналы идут над шкафами — высота потолка в комнатах сохранена',
      effectNum: '600–800 ppm',
      effectText: 'Свежий воздух и влажность 40–55% в спальне круглый год',
      specs: [
        'Очистка притока от смога Алматы и пыльцы',
        'Увлажнение 40–55% в морозы Астаны для детей и паркета',
        'Незаметная узкая решётка в ровном потолке',
        'Смена доступных фильтров за 10 минут 2× в год',
      ],
    },
    acoustics: {
      photo: '/assets/vis-acoustics.jpg',
      alt: 'Тихая спальня со звукопоглощающими панелями из ореха и дверью скрытого монтажа',
      badge: 'ТИШИНА · ≤ 23 ДБ(А)',
      title: 'Акустическая тишина спальни даже рядом с проспектом',
      note: 'Шумоглушители, плавающая стяжка и развязка перегородок',
      effectNum: '≤ 23 дБ',
      effectText: 'Ночной фон тише шёпота и шелеста листьев',
      specs: [
        'Глушители в каналах и низкая скорость потока воздуха',
        'Перегородки с виброразвязкой от пола и перекрытий',
        'Смещённые розетки без сквозных дыр к соседям',
        'Шумоизоляция стояков и герметичные двери',
      ],
    },
    light: {
      photo: '/assets/vis-light.jpg',
      alt: 'Вечерняя гостиная с тёплым отражённым светом без ослепления и естественной цветопередачей',
      badge: 'ЖИВОЙ СВЕТ · CRI 95+',
      title: 'Три слоя света без бликов, мерцания и серых оттенков',
      note: 'Автоматический переход от дневного оттенка к вечернему',
      effectNum: 'CRI 95+',
      effectText: 'Естественные оттенки дерева и кожи, пульсация < 1%',
      specs: [
        'Общий мягкий фон + акцент на столе + ночная дорожка',
        'Глубокая утопленная оптика — не бьёт в глаза с дивана',
        'Промышленные блоки питания в сервисном шкафу',
        'Оптимизация числа лишних светильников на 25–30%',
      ],
    },
    shield: {
      photo: '/assets/vis-cabinet.jpg',
      alt: 'Единый сервисный шкаф с коллекторами воды и маркированным модульным электрощитом',
      badge: 'ЩИТ И ВОДА · 10+ ЛЕТ',
      title: 'Всё обслуживание — за одной дверцей аккуратного шкафа',
      note: 'Открытые компоненты с аппаратным резервом клавиш',
      effectNum: '2 секунды',
      effectText: 'Мгновенное перекрытие воды при первых каплях протечки',
      specs: [
        'Открытый контроллер в щите — без привязки к облаку',
        'Обычные настенные клавиши работают даже без сети',
        'Опрессовка труб 10 бар на 24 часа до начала отделки',
        'Техпаспорт квартиры, фото трасс и маркировка линий',
      ],
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

  // Интерактивный визуальный рентген систем
  const tabs = document.querySelectorAll('.anatomy-tab');
  const photoEl = document.getElementById('anatomyPhoto');
  const badgeEl = document.getElementById('anatomyBadge');
  const titleEl = document.getElementById('anatomyTitle');
  const noteEl = document.getElementById('anatomyNote');
  const effectNumEl = document.getElementById('anatomyEffectNum');
  const effectTextEl = document.getElementById('anatomyEffectText');
  const specsEl = document.getElementById('anatomySpecs');

  function renderAnatomy(key) {
    const data = ANATOMY_DATA[key];
    if (!data || !titleEl) return;

    if (photoEl) {
      if (photoEl.getAttribute('src') !== data.photo) {
        photoEl.setAttribute('src', data.photo);
      }
      photoEl.setAttribute('alt', data.alt);
    }
    if (badgeEl) badgeEl.textContent = data.badge;
    titleEl.textContent = data.title;
    if (noteEl) noteEl.textContent = data.note;
    if (effectNumEl) effectNumEl.textContent = data.effectNum;
    if (effectTextEl) effectTextEl.textContent = data.effectText;

    if (specsEl) {
      specsEl.innerHTML = '';
      data.specs.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = CHECK_ICON_SVG;
        const span = document.createElement('span');
        span.textContent = item;
        li.appendChild(span);
        specsEl.appendChild(li);
      });
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

  // Калькулятор бюджета в тенге
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
    rational: 'Базовый',
    smart: 'Комфорт',
    bespoke: 'Индивидуальный',
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
      extras.push('Воздух и влажность');
      scopeParts.push('вентиляцию');
    }
    if (optSmartHome?.checked) {
      extras.push('Щит и антипротечка');
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
        ? `Включает проект, черновую базу, ${joined}.`
        : 'Включает проект, черновую базу и электрику.';
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

  // Спойлер о концепции
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
