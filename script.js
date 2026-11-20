(() => {
  'use strict';

  const ANATOMY_DATA = {
    climate: {
      mistakeTitle: 'Дефицит притока, смог PM2.5 в Алматы, сухость 15% в Астане и падение потолка',
      mistakeText:
        'Стандартные сплит-системы лишь гоняют внутренний воздух с растущим CO₂. При попытке встроить каналы в конце проектирования воздуховоды режут высоту потолков на 25 см, а без рекуперации в -30°C не хватает выделенной мощности кВт.',
      solutionTitle: 'Приточно-вытяжная установка с рекуперацией, HEPA H13 и увлажнением 40–55%',
      solutionText:
        'Сводим сеть ОВиК на предпроекте: ставим компактную ПВУ с рекуперацией тепла (до -30°C без обмерзания), фильтрами F7 + HEPA H13 и канальным увлажнением. Воздуховоды разводим по периметру коридоров и шкафов с расходом до 2.0 м/с на диффузоре.',
      effect:
        'Стабильный CO₂ < 800 ppm, относительная влажность 40–55% зимой для людей и паркета и снижение нагрузки на нагрев приточного воздуха до 70%.',
      specs: [
        'Энтальпийная/роторная рекуперация под зимний пик Астаны до -30°C (экономия кВт)',
        'Двухступенчатая очистка притока: грубый/тонкий фильтр F7 + HEPA H13 от PM2.5',
        'Автоматическая модуляция расхода EC-вентиляторов по зональным датчикам CO₂',
        'Канальное адиабатическое или изотермическое увлажнение в диапазоне 40–55%',
        'Разводка плоскими полужёсткими каналами по нежилым зонам с сохранением высоты потолка',
      ],
      techNote:
        'Допуски ОВиК: ASHRAE 62.2 / WELL Gold, CO₂ < 800 ppm, скорость на щелевых диффузорах < 2.0 м/с, регламент ТО — замена кассет F7/H13 каждые 6 мес.',
    },
    acoustics: {
      mistakeTitle: 'Аэродинамический гул решёток 35+ дБ(А) и косвенная передача звука по плите',
      mistakeText:
        'Даже тяжёлая кирпичная или ГКЛ-стена проваливает изоляцию, если жёстко закреплена к перекрытиям, подрозетники стоят напротив друг друга, а канал вентиляции без глушителя выведен прямо над кроватью.',
      solutionTitle: 'Кривая NC-23 на притоке и плавающая виброразвязанная оболочка',
      solutionText:
        'Задаём камерный глушитель и минимальную скорость на выходе (≤ 23 дБ(А)), каркасы перегородок отвязываем виброподвесами/демпферной лентой (Rw 56–58 дБ), используем герметичные подрозетники и оборачиваем канализационные стояки.',
      effect:
        'Ночной фон ниже порога восприятия в спальнях и переговорных кабинетах — сохранённая акустическая приватность на десятилетия.',
      specs: [
        'Индивидуальный подбор шумоглушителей под каждую спальню (норма ≤ 23 дБ(А) / NC-23)',
        'Многослойные ГКЛ/ГВЛ-перегородки с минеральным ядром и виброразвязкой периметра',
        'Герметичные акустические подрозетники и разнесённое смещение электрики без сквозных мостиков',
        'Комбинированная шумоизоляция вертикальных стояков канализации и инсталляций',
        'Плавающая стяжка с демпфером от ударного шума Lnw на этапе общестроя',
      ],
      techNote:
        'Допуски акустики: СН РК / WELL Sound, ночной фон вентиляции ≤ 23 дБ(А) (NC-23), перегородки Rw 56–58 дБ, проверка шумомером класса точности до сдачи.',
    },
    light: {
      mistakeTitle: 'Дешёвые ШИМ-драйверы с пульсацией, CRI < 80 и разнобой блоков в потолке',
      mistakeText:
        'Несогласованные блоки питания 12/24 В прячут за гипсокартоном без доступа: при выходе из строя нужно резать чистовой потолок, низкий индекс передачи красного тона R9 искажает дерево, а ШИМ вызывает зрительное утомление.',
      solutionTitle: 'Цифровая шина IEC 62386 DALI-2, CRI ≥ 95 и выносной сервисный шкаф',
      solutionText:
        'Выносим драйверы с коэффициентом пульсации < 1% в единый обслуживаемый шкаф, применяем глубоко утопленную оптику Tunable White (2700–5000K) и плавно диммируем три сценария света с 0.1%.',
      effect:
        'Чистые цвета отделки без мерцания, оптимизация числа декоративных точек до 25–30% и мгновенный доступ к любому драйверу из шкафа.',
      specs: [
        'Источники света с индексом цветопередачи CRI ≥ 95 и красным компонентом R9 ≥ 80',
        'Плавное диммирование 0.1–100% по промышленному стандарту IEC 62386 DALI-2',
        'Коэффициент пульсации светового потока < 1% во всём диапазоне яркости',
        'Вынос всех блоков питания и шлюзов из-за потолка в доступный сервисный отсек',
        'Динамическая цветовая температура 2700–5000K (биологические циркадные кривые)',
      ],
      techNote:
        'Допуски ЭОМ/света: IEC 62386 DALI-2, CRI ≥ 95 (R9 ≥ 80), пульсация < 1%, люксметр + спектр-чек при пусконаладке, малярный класс под боковой свет Q4 (≤ 1 мм / 2 м).',
    },
    shield: {
      mistakeTitle: 'Vendor lock-in на закрытых шинах и облачная зависимость автоматизации',
      mistakeText:
        'Проприетарные экосистемы с обязательными сенсорными панелями поднимают чек в 2–3 раза, а через 5–10 лет снятие линейки с производства или закрытие облака превращает ремонт объекта в замену всей начинки.',
      solutionTitle: 'Открытый промышленный щит Wiren Board / Modbus RTU с аппаратным резервом',
      solutionText:
        'Строим ядро автоматики на стандартных DIN-модулях с открытым протоколом Modbus RTU, физическим дублированием клавиш освещения, проводными датчиками протечки (≤ 2 сек.) и 20% запасом места в щите.',
      effect:
        'Оптимизация бюджета щита до 40%, работа света при отказе сервера или интернета и 100% ремонтопригодность через 10+ лет любым профильным инженером.',
      specs: [
        'Открытый контроллер на DIN-рейке (Modbus RTU / RS-485) с локальной логикой без облака',
        'Аппаратный байпас: настенные выключатели работают напрямую даже без участия контроллера',
        'Электрощит по ПУЭ РК: селективные УЗО 10/30 мА, гребенчатые шины, реле напряжения/приоритета',
        'Проводные датчики протечки + электроприводы на латунных коллекторах (перекрытие ≤ 2 сек.)',
        'Итоговый техпаспорт объекта: однолинейная схема, кабельный журнал и бэкап конфигурации',
      ],
      techNote:
        'Допуски щита и ВК: ПУЭ РК, испытание водоснабжения 10 бар на 24 ч, фильтрация 100 мкм, резерв модулей 20%, архив исходников в техпаспорте.',
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
