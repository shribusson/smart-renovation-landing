(() => {
  'use strict';

  const ANATOMY_DATA = {
    procurement: {
      mistakeTitle: 'Простои по 4–12 недель из-за заказной плитки, света и вентиляции',
      mistakeText:
        'Когда позиции со сроком поставки из Европы или фабрик заказывают по факту окончания черновых работ, бригада уходит на другой объект, а сроки сдачи сдвигаются на несколько месяцев.',
      solutionTitle: 'График комплектации и заказ длинных позиций до старта работ',
      solutionText:
        'Формируем полную ведомость комплектации и календарь поставок ещё до начала демонтажа. Учитываем сроки 4–12 недель на климат, свет и плитку так, чтобы каждая позиция приходила к моменту монтажа.',
      effect:
        'Сквозной график стройки без простоев, сохранённые цены поставщиков и предсказуемая дата переезда.',
      specs: [
        'Сводная ведомость материалов, оборудования и встроенной мебели до начала стройки',
        'Календарный график оплат и поставок с учётом логистики 4–12 недель в Алматы и Астану',
        'Резерв складских позиций и согласование размеров закладных с мебельными цехами заранее',
        'Работаем с нуля вместе с архитектором либо по вашему готовому дизайн-проекту',
        'Исключение срочных дорогих замен «из того, что есть в наличии» посреди отделки',
      ],
      techNote:
        'Документная база: сводный график поставок и работ (диаграмма этапов), спецификация артикулов и ведомость закладных под мебель.',
    },
    hidden: {
      mistakeTitle: 'Скрытый брак за чистовой отделкой и поездки на стройку для контроля',
      mistakeText:
        'Собственнику приходится самому ездить по объекту, проверять, опрессованы ли трубы, не занижены ли потолки под воздуховоды и совпадают ли розетки с расстановкой мебели.',
      solutionTitle: 'Еженедельный фото- и видеоотчёт в Telegram и приёмка скрытых этапов',
      solutionText:
        'Вы видите объект каждую пятницу в структурированном отчёте: что сделано за неделю, фото скрытых трасс с рулеткой до зашивки стен, показатели опрессовки и план на следующие 7 дней.',
      effect:
        'Удалённое управление ремонтом даже из другого города или командировки без личных поездок в рабочее время.',
      specs: [
        'Еженедельный отчёт в Telegram: фотофиксация этапов, статусы поставок и план работ',
        'Обязательная опрессовка труб давлением перед зашивкой стен и заливкой стяжки',
        'Замер ровности плоскостей, уровня звука в спальне и сохранности высоты потолка',
        'Полная фотокарта всех скрытых трасс электрики, воды и вентиляции с размерами',
        'Одна точка ответственности на стыке дизайна, черновых работ, инженерии и мебели',
      ],
      techNote:
        'Технический контроль: акты освидетельствования скрытых работ, испытание систем водоснабжения 10 бар / 24 ч, фотофиксация до закрытия стен.',
    },
    finance: {
      mistakeTitle: 'Крупные авансы вслепую, скрытые комиссии шоурумов и рост сметы',
      mistakeText:
        'Часто прораб просит крупную предоплату наперёд, в итоговой цене заложены скрытые 15–25% агентских процентов от поставщиков, а новые работы всплывают уже в середине ремонта.',
      solutionTitle: 'Открытые счета поставщиков и поэтапная оплата строго по актам',
      solutionText:
        'Работы дробятся на понятные этапы и оплачиваются только после проверки результата и подписания акта. Материалы и оборудование закупаются по открытым счетам — с экономией 20–35% бюджета.',
      effect:
        'Полная финансовая безопасность: каждый тенге привязан к физическому объёму на объекте и открытым документам.',
      specs: [
        'Фиксация итоговой стоимости работ в тенге до начала демонтажа по сводному проекту',
        'Поэтапная оплата исключительно по актам выполненных этапов работ',
        'Прямые счета от поставщиков и дистрибьюторов без скрытых комиссий шоурумов',
        'Подбор надёжных промышленных систем с оптимизацией сметы на 20–35%',
        'Договорная ответственность за соблюдение согласованного календарного графика',
      ],
      techNote:
        'Финансовый регламент: детализированная сметная ведомость, поэтапный график финансирования по актам и прозрачная сверка чеков.',
    },
    handover: {
      mistakeTitle: 'Сложное обслуживание после сдачи ключей и потерянные схемы',
      mistakeText:
        'После переезда выясняется, что непонятно, какой автомат за что отвечает, где менять фильтры от зимнего смога и к кому обращаться, если подрядчик перестал выходить на связь.',
      solutionTitle: 'Подписанный сервисный шкаф, техпаспорт объекта и простой уход',
      solutionText:
        'Вместе с ключами передаём полную папку документов, подписанные автоматы, фото скрытых трасс и понятную памятку по замене фильтров и обслуживанию увлажнения и вентиляции раз в полгода.',
      effect:
        'Квартира обслуживается любым квалифицированным мастером по открытым схемам — без зависимости от одного интегратора.',
      specs: [
        'Открытые промышленные комплектующие (без редких проприетарных блоков)',
        'Привычные клавиши света с прямым резервом в щите — работают даже без интернета',
        'Защита от смога и зимней сухости 40–55% в едином доступном сервисном отсеке',
        'Техпаспорт объекта: однолинейная схема щита, трассы воды/воздуха и фотоархив',
        'Официальная гарантия по договору и понятный регламент сезонного ухода',
      ],
      techNote:
        'Состав пакета сдачи: техпаспорт квартиры, исполнительные схемы ЭОМ/ОВиК/ВК, копия логики щита и регламент ТО раз в 6 месяцев.',
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
