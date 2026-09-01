import Image from "next/image";

const screenshots = [
  {
    src: "https://play-lh.googleusercontent.com/BPX_fIZGSRYp8h7Tk7GzgkwdbqRqDe9a9nbWI39Ib5Vk0uy91bfMRDjzl3ftMKGUd_-6Db7_kkx_IREGHQmI=w2560-h1440",
    alt: "Arcanum Lux — Карта дня",
    label: "Карта дня",
  },
  {
    src: "https://play-lh.googleusercontent.com/1v32CsCyiU4Lc3Al-GywM7EhEvOG0sZPOuounEgZRIjpMOe-KMyTQwc1eRj3A5inxJxqxZxBAD0eb7sIvQqpGw=w2560-h1440",
    alt: "Arcanum Lux — Расклады Таро",
    label: "Расклады",
  },
  {
    src: "https://play-lh.googleusercontent.com/qQ0-v_W3edWnGn99XGnRKDlmFh_BjPS9N2aZNGIdTABKbgEGxK-Ol3e3qskkZ5Tb71sU92T4_qBhu654kDMzdA=w2560-h1440",
    alt: "Arcanum Lux — Библиотека карт",
    label: "Библиотека",
  },
  {
    src: "https://play-lh.googleusercontent.com/IzeEH_3H9u-sTF1ABOwDIFSZT-4zXMUy13yF7EPXzM17GPEQM_c5zzLTKmIdjHdRssiu4a5Q-v1did0JCC_iOA=w2560-h1440",
    alt: "Arcanum Lux — Дневник",
    label: "Дневник",
  },
];

const spreads = [
  {
    icon: "🃏",
    title: "1 карта",
    desc: "Быстрый ответ на конкретный вопрос",
  },
  {
    icon: "⏳",
    title: "Прошлое / Настоящее / Будущее",
    desc: "Классический трёхкарточный расклад",
  },
  {
    icon: "🔷",
    title: "Кельтский крест",
    desc: "10 карт, глубокий разбор ситуации",
  },
  {
    icon: "💕",
    title: "На отношения",
    desc: "6 карт о вас, партнёре и перспективе",
  },
  {
    icon: "⚖️",
    title: "Принятие решения",
    desc: "Взвесить варианты и выбрать путь",
  },
  {
    icon: "✏️",
    title: "Свой расклад",
    desc: "Задайте собственные позиции",
  },
];

const features = [
  {
    icon: "🌙",
    title: "Карта дня",
    desc: "Одна карта каждое утро — бесплатно и без ограничений. Приложение считает серии дней подряд, а напоминание приходит в удобное вам время.",
  },
  {
    icon: "🔮",
    title: "Расклады",
    desc: "Шесть видов раскладов — от быстрого ответа из одной карты до глубокого анализа Кельтским крестом. Первые два расклада доступны бесплатно всегда.",
  },
  {
    icon: "📖",
    title: "Библиотека карт",
    desc: "Все 78 карт Таро: значения в прямом и перевёрнутом положении, ключевые слова, отдельные трактовки для тем любви, карьеры и здоровья.",
  },
  {
    icon: "📔",
    title: "Дневник",
    desc: "Каждый расклад сохраняется. Добавляйте заметки, отмечайте, что сбылось, и наблюдайте, как со временем меняется ваш взгляд.",
  },
  {
    icon: "🌍",
    title: "Три языка",
    desc: "Полностью на русском, английском и казахском — включая все трактовки карт. Язык определяется автоматически и меняется в один тап.",
  },
  {
    icon: "✨",
    title: "Полный доступ",
    desc: "Один платёж — доступ ко всем раскладам и неограниченной истории дневника навсегда. Не подписка: автоматических списаний нет.",
  },
];

function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-dim text-lg font-bold">
          ✦
        </div>
        <span className="text-lg font-semibold tracking-wide">Arcanum Lux</span>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.nurr0.arcanum_lux&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-gradient-to-r from-accent to-accent-dim px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25 hover:brightness-110"
      >
        Скачать в Google Play
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-12 md:px-12 md:pb-32 md:pt-20">
      <div className="absolute inset-0 stars opacity-60" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Доступно в Google Play
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight">
          <span className="glow-text bg-gradient-to-r from-white via-accent to-gold bg-clip-text text-transparent">
            Arcanum Lux
          </span>
          <br />
          <span className="text-3xl text-white/60 md:text-5xl">
            Расклады Таро
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl">
          Приложение для тех, кто использует Таро как инструмент саморефлексии.
          Каждый день — новая карта, полная колода из 78 карт с подробными
          трактовками и личный дневник.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.nurr0.arcanum_lux&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-black transition-all hover:shadow-lg hover:shadow-white/10 hover:brightness-105"
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.72l-2.302 1.33-2.534-2.19 2.534-2.19zM5.864 3.455L16.8 9.788l-2.302 2.302L5.864 3.455z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Загрузите в</div>
              <div className="text-base font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="section-divider mx-auto mb-16 max-w-3xl" />
      <div className="mx-auto max-w-6xl">
        <div className="flex gap-4 overflow-x-auto pb-4 md:gap-6 md:justify-center md:overflow-visible">
          {screenshots.map((s, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[200px] md:w-[260px] animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="screenshot-shadow rounded-3xl overflow-hidden border border-white/5">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={260}
                  height={580}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/40">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          <span className="glow-text">Возможности</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/40">
          Всё, что нужно для ежедневной практики работы с Таро
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="card-gradient rounded-2xl p-6 transition-all hover:border-accent/30 hover:bg-accent/5">
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spreads() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="section-divider mx-auto mb-16 max-w-3xl" />
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          <span className="glow-text">Расклады</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/40">
          Шесть видов раскладов для любых ситуаций
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {spreads.map((s, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-accent/20 hover:bg-accent/5">
              <div className="text-2xl">{s.icon}</div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/40">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/30">
          Первые два расклада доступны бесплатно всегда!
        </p>
      </div>
    </section>
  );
}

function Library() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          <span className="glow-text">Библиотека карт</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-white/40">
          Полная колода из 78 карт Таро
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="card-gradient rounded-2xl p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-accent">78</div>
            <div className="text-sm text-white/50">карт в колоде</div>
          </div>
          <div className="card-gradient rounded-2xl p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-gold">3</div>
            <div className="text-sm text-white/50">темы трактовок</div>
          </div>
          <div className="card-gradient rounded-2xl p-6 text-center">
            <div className="mb-2 text-4xl font-bold text-accent">3</div>
            <div className="text-sm text-white/50">языка полностью</div>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-medium">❤️ Любовь</div>
            <div className="mt-1 text-sm text-white/40">Трактовки для отношений</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-medium">💼 Карьера</div>
            <div className="mt-1 text-sm text-white/40">Трактовки для дел</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
            <div className="text-lg font-medium">🌿 Здоровье</div>
            <div className="mt-1 text-sm text-white/40">Трактовки для тела</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gold/15 bg-gold/[0.03] p-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-2xl">⚠️</span>
          <h3 className="text-lg font-semibold text-gold">Важно</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/45">
          Приложение создано для развлечения и саморефлексии. Оно не заменяет
          консультацию врача, психолога, юриста или финансового специалиста. Не
          принимайте важные решения, опираясь только на карты.
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative px-6 py-16 md:px-12 md:py-24">
      <div className="section-divider mx-auto mb-16 max-w-3xl" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          <span className="glow-text">Начните свой путь</span>
        </h2>
        <p className="mb-8 text-white/40">
          Скачайте Arcanum Lux и откройте для себя мир Таро
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.nurr0.arcanum_lux&pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-black transition-all hover:shadow-lg hover:shadow-white/10 hover:brightness-105"
        >
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.72l-2.302 1.33-2.534-2.19 2.534-2.19zM5.864 3.455L16.8 9.788l-2.302 2.302L5.864 3.455z" />
          </svg>
          <div className="text-left">
            <div className="text-xs opacity-70">Загрузите в</div>
            <div className="text-base font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-white/30">
          <span className="text-accent">✦</span>
          <span className="text-sm">Arcanum Lux © 2026</span>
        </div>
        <div className="flex gap-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.nurr0.arcanum_lux&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/30 transition-colors hover:text-accent"
          >
            Google Play
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Screenshots />
        <Features />
        <Spreads />
        <Library />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
