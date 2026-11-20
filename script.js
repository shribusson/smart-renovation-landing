(() => {
  'use strict';

  const ANATOMY_DATA = {
    shell: {
      mistakeTitle: 'Невидимые глазом дефекты черновой квартиры от застройщика',
      mistakeText:
        'После подписания акта приёмки без приборов на владельца ложатся продуваемые витражи, отслоившаяся «бухтящая» стяжка, кривые углы и пустоты по стоякам, которые обходятся в миллионы тенге уже на ремонте.',
      solutionTitle: 'Приборное обследование конструктива до подписания приёмки',
      solutionText:
        'Проходим объект тепловизором, лазерным построителем и шумомером: фиксируем мостики холода, влажность узлов, пустоты стяжки и отклонения стен — чтобы устранить дефекты за счёт застройщика или учесть в проекте.',
      effect:
        'Фактическая дефектная ведомость до начала демонтажа: экономия от 1.5 до 4 млн ₸ только на скрытом браке черновой отделки.',
      specs: [
        'Тепловизионный осмотр окон, витражных систем и углов наружных стен',
        'Простукивание и оценка ровности стяжки по всей площади (выявление пустот)',
        'Проверка геометрии углов 90° под кухню, душевые зоны и встроенные шкафы',
        'Осмотр межквартирных швов и стояков на утечки звука и запахов',
        'Передача фотофиксации и ведомости нарушений для предъявления застройщику',
      ],
      techNote:
        'Приборы аудита: строительный тепловизор, ротационный лазерный уровень, влагомер стяжки, эндоскоп для ниш и стояков.',
    },
    design: {
      mistakeTitle: 'Красивые рендеры, в которых техника не помещается без сноса потолка',
      mistakeText:
        'Даже дорогой дизайн-проект часто рисуют без воздуховодов, шумоглушителей, увлажнения 40–55% и глубоких шкафов под щит. На стройке потолки падают на 20–25 см, а люки режут плитку по швам.',
      solutionTitle: 'Инженерный разбор готового дизайн-проекта до закупки материалов',
      solutionText:
        'Сверяемся по каждому листу вашего альбома: прокладываем приточку по периметру коридоров и шкафов, вписываем коллекторы в мебельные ниши и сохраняем задуманную высоту потолков и эстетику.',
      effect:
        'Ваш готовый дизайн-проект сохраняется визуально на 100%, но превращается в рабочую схему без переделок на месте.',
      specs: [
        'Трассировка вентиляции и увлажнения 40–55% с сохранением отметки чистого потолка',
        'Проверка расположения закладных под встроенную мебель, двери и свет',
        'Совмещение щита автоматизации и узла фильтров в одном доступном сервисном шкафу',
        'Устранение коллизий сантехники и освещения до выхода мастеров на объект',
        'Готовая карта правок к дизайн-альбому — подходит для продолжения с любой командой',
      ],
      techNote:
        'Результат по альбому: ведомость инженерных коллизий, эскиз трасс ОВиК с высотными отметками и схема узлов примыкания.',
    },
    power: {
      mistakeTitle: 'Нехватка выделенной мощности кВт, перепады давления и слабая тяга',
      mistakeText:
        'Если индукционная плита, сушильная машина, приточная установка и водонагреватель не просчитаны против реального вводного кабеля, зимой на вводе срабатывает автомат, а в душе скачет температура.',
      solutionTitle: 'Баланс нагрузок кВт, аудит стояков давления и приточных узлов',
      solutionText:
        'Измеряем фактическое сечение вводного кабеля, номинал автомата в этажном щите, давление в стояках и тягу шахт — подбираем узлы рекуперации, редукторы давления и распределение приоритетов нагрузок.',
      effect:
        'Надёжная работа техники даже при ограниченной мощности от застройщика и стабильный напор воды в пиковые часы.',
      specs: [
        'Аудит выделенной мощности квартиры (кВт) и расчёт пикового потребления',
        'Проверка вентканалов санузлов и кухни анемометром (нет ли обратной тяги)',
        'Замер давления холодной и горячей воды для подбора защитных редукторов',
        'Проверка состояния заземления и контура уравнивания потенциалов в мокрых зонах',
        'Закладка проводных датчиков протечки с перекрытием воды за 2 секунды',
      ],
      techNote:
        'Инструментарий: токовые клещи, тестер контура и заземления, крыльчатый анемометр, манометр стояков воды.',
    },
    estimate: {
      mistakeTitle: 'Раздутая или неполная стороннняя смета с витринными брендами',
      mistakeText:
        'В чужих расчётах часто видны три проблемы: дорогие сенсорные панели «ради статуса», скрытые 15–25% комиссии от шоурумов и пропущенные этапы вроде логистики 4–12 недель и опрессовки.',
      solutionTitle: 'Независимая ревизия сметы за 48 часов: убираем 5–12 млн ₸ лишнего',
      solutionText:
        'Разбираем вашу текущую смету построчно: показываем неучтённые допработы, заменяем закрытые проприетарные позиции на открытые промышленные системы с тем же ресурсом и выстраиваем поэтапную оплату по актам.',
      effect:
        'Расчётная оптимизация бюджета на 20–35% без экономии на толщине кабеля, звукоизоляции и сроке службы систем.',
      specs: [
        'Построчный разбор сторонней сметы с выделением скрытых и дублирующих позиций',
        'Сравнение стоимости закрытых систем и открытых промышленных аналогов на 10+ лет',
        'Проверка сроков поставки материалов 4–12 недель — выявление рисков простоя стройки',
        'Рекомендации по переходу на прямые открытые счета и оплату строго по актам',
        '100% суммы аудита (280 000 ₸) засчитывается в договор при старте проекта с РАЦИО',
      ],
      techNote:
        'На руки через 48 часов: сравнительная таблица сметы, оценка реального бюджета в тенге и перечень позиций оптимизации.',
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
