const WHATSAPP_CONSULT_URL =
  "https://wa.me/6285724159878?text=Halo%20Batara%20Project%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20usaha%20saya.";

const services = [
  {
    no: "01",
    title: "Digitalisasi UMKM",
    text: "QRIS, Google Business Profile, WhatsApp Business, katalog digital, dan formulir online.",
    href: "/layanan/digitalisasi-umkm",
  },
  {
    no: "02",
    title: "Desain & Branding",
    text: "Logo, flyer, banner, menu, daftar harga, dan materi promosi usaha.",
    href: "/layanan/desain-branding",
  },
  {
    no: "03",
    title: "Website & Landing Page",
    text: "Website profil, landing page, katalog produk, formulir, dan halaman event.",
    href: "/layanan/website-landing-page",
  },
  {
    no: "04",
    title: "Administrasi Usaha",
    text: "Template Excel, stok, rekap penjualan, invoice, nota, dan dokumen kerja.",
    href: "/layanan/administrasi-usaha",
  },
  {
    no: "05",
    title: "Promosi & Konten Digital",
    text: "Konten WhatsApp dan media sosial, copywriting, flyer, dan video promosi sederhana.",
    href: "/layanan/promosi-konten-digital",
  },
  {
    no: "06",
    title: "Konsultasi & Solusi Digital",
    text: "Ceritakan kebutuhan Anda. Kami bantu menentukan solusi yang realistis dan sesuai.",
    href: WHATSAPP_CONSULT_URL,
    external: true,
  },
];

const packages = [
  {
    tag: "UNTUK MEMULAI",
    title: "Starter UMKM",
    text: "Fondasi digital dasar untuk usaha yang baru mulai.",
    items: [
      "Logo sederhana",
      "QRIS usaha",
      "Google Business Profile",
      "Optimasi WhatsApp Business",
    ],
  },
  {
    tag: "UNTUK TAMPIL",
    title: "Branding Usaha",
    text: "Buat identitas dan materi promosi usaha lebih rapi.",
    items: [
      "Logo / penyegaran identitas",
      "Flyer promosi",
      "Banner",
      "Menu / daftar harga",
    ],
    featured: true,
  },
  {
    tag: "UNTUK ONLINE",
    title: "Go Online",
    text: "Bantu usaha lebih mudah ditemukan dan dihubungi pelanggan.",
    items: [
      "Google Business Profile",
      "WhatsApp Business",
      "Katalog digital",
      "Landing page",
    ],
  },
];

const portfolio = [
  ["Branding & Logo", "Identitas usaha, komunitas, dan organisasi."],
  ["Flyer & Promosi", "Flyer, banner, menu, daftar harga, dan materi promosi."],
  ["Website & Form Online", "Website usaha, landing page, formulir, dan halaman event."],
  ["Administrasi", "Stok, rekap, invoice, pencatatan, dan dokumen usaha."],
  ["QRIS & Digitalisasi", "Materi QRIS serta kebutuhan digital dasar usaha."],
  ["Event & Organisasi", "Poster, tiket, sertifikat, banner, dan kebutuhan kegiatan."],
];

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="brand">
            <span className="brand-logo">
              <img src="/logo-batara.jpg" alt="Batara Project" />
            </span>
            <span className="brand-copy">
              <strong>BATARA PROJECT</strong>
              <small>Partner Digital untuk Pengembangan Usaha</small>
            </span>
          </a>

          <nav className="nav">
            <a href="#home">Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#paket">Paket</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#tentang">Tentang</a>
          </nav>

          <a
            href={WHATSAPP_CONSULT_URL}
            target="_blank"
            rel="noreferrer"
            className="header-cta"
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="kicker">
                <i />
                SOLUSI DIGITAL UNTUK USAHA
              </span>

              <h1>
                Bantu usaha Anda tampil
                <span> lebih profesional.</span>
              </h1>

              <p>
                Batara Project membantu UMKM, usaha lokal, komunitas, dan pelaku
                usaha melalui desain, digitalisasi, website, promosi, dan
                administrasi yang praktis.
              </p>

              <div className="hero-actions">
                <a href="#layanan" className="btn btn-primary">Pilih Layanan</a>
                <a href="/checkout" className="btn btn-outline">Lihat Checkout</a>
              </div>

              <div className="hero-meta">
                <span><b>✓</b> Bisa mulai dari satu layanan</span>
                <span><b>✓</b> Disesuaikan dengan kebutuhan</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-head">
                <div>
                  <span>BATARA PROJECT</span>
                  <h2>Mulai dari kebutuhan yang paling penting.</h2>
                </div>
                <em>Praktis</em>
              </div>

              <div className="panel-grid">
                <a href="/layanan/desain-branding">
                  <span>01</span>
                  <strong>Branding</strong>
                  <small>Logo & materi usaha</small>
                </a>

                <a href="/layanan/digitalisasi-umkm">
                  <span>02</span>
                  <strong>Digitalisasi</strong>
                  <small>QRIS, Maps & WhatsApp</small>
                </a>

                <a href="/layanan/website-landing-page">
                  <span>03</span>
                  <strong>Website</strong>
                  <small>Profil & landing page</small>
                </a>

                <a href="/layanan/administrasi-usaha">
                  <span>04</span>
                  <strong>Administrasi</strong>
                  <small>Stok, rekap & dokumen</small>
                </a>
              </div>

              <div className="panel-foot">
                <div>
                  <strong>Belum tahu mulai dari mana?</strong>
                  <span>Ceritakan kebutuhan usaha Anda.</span>
                </div>
                <a
                  href={WHATSAPP_CONSULT_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat →
                </a>
              </div>
            </div>
          </div>

          <div className="container process-bar">
            <div>
              <span>01</span>
              <strong>Pilih layanan</strong>
              <small>Lihat rincian jasa yang tersedia.</small>
            </div>
            <div>
              <span>02</span>
              <strong>Pilih jasa</strong>
              <small>Masukkan kebutuhan ke checkout.</small>
            </div>
            <div>
              <span>03</span>
              <strong>Kirim permintaan</strong>
              <small>Isi data dan kebutuhan proyek.</small>
            </div>
          </div>
        </section>

        <section className="section section-white" id="layanan">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-tag">LAYANAN BATARA PROJECT</span>
                <h2>Satu partner untuk berbagai kebutuhan digital usaha.</h2>
              </div>
              <p>
                Pilih sesuai kebutuhan. Tidak perlu mengambil semuanya sekaligus.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.no}>
                  <div className="service-no">{service.no}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href={service.href}
                    {...(service.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {service.external ? "Konsultasi via WhatsApp →" : "Lihat Rincian Jasa →"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container problem-grid">
            <div className="problem-intro">
              <span className="section-tag">MULAI DARI KONDISI ANDA</span>
              <h2>Tidak semua usaha membutuhkan solusi yang sama.</h2>
              <p>
                Kami bantu menentukan titik awal yang paling masuk akal untuk
                kondisi usaha Anda saat ini.
              </p>
              <a
                href={WHATSAPP_CONSULT_URL}
                target="_blank"
                rel="noreferrer"
              >
                Konsultasikan Kebutuhan →
              </a>
            </div>

            <div className="problem-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Baru memulai usaha</h3>
                  <p>Bangun identitas, QRIS, Google Business, WhatsApp, dan materi promosi dasar.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h3>Ingin terlihat lebih profesional</h3>
                  <p>Rapikan branding, materi promosi, katalog, dan keberadaan online.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <h3>Administrasi masih berantakan</h3>
                  <p>Buat stok, penjualan, rekap, invoice, dan dokumen kerja lebih sederhana.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <h3>Punya kebutuhan khusus</h3>
                  <p>Ceritakan masalahnya. Kami bantu mencari solusi yang realistis dan sesuai.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-white" id="paket">
          <div className="container">
            <div className="section-head center">
              <div>
                <span className="section-tag">PAKET USAHA</span>
                <h2>Pilihan praktis untuk kebutuhan yang paling umum.</h2>
              </div>
              <p>
                Semua paket tetap fleksibel dan dapat disesuaikan dengan kebutuhan.
              </p>
            </div>

            <div className="package-grid">
              {packages.map((pkg) => (
                <article
                  className={`package-card ${pkg.featured ? "featured" : ""}`}
                  key={pkg.title}
                >
                  <span className="package-tag">{pkg.tag}</span>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.text}</p>

                  <ul>
                    {pkg.items.map((item) => (
                      <li key={item}><span>✓</span>{item}</li>
                    ))}
                  </ul>

                  <div className="package-bottom">
                    <small>Harga menyesuaikan kebutuhan</small>
                    <a
                      href={WHATSAPP_CONSULT_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Konsultasikan Paket →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="single-banner">
              <div>
                <span>LAYANAN SATUAN</span>
                <h3>Butuh satu layanan saja? Tidak harus mengambil paket.</h3>
              </div>
              <a href="#layanan" className="btn btn-outline">Pilih Layanan</a>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="portofolio">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="section-tag">PORTOFOLIO</span>
                <h2>Hasil nyata akan menjadi bukti utama Batara Project.</h2>
              </div>
              <p>
                Bagian ini nanti kita isi dengan hasil pekerjaan asli, bukan
                gambar stok.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolio.map(([title, desc], index) => (
                <article className="portfolio-card" key={title}>
                  <div className={`portfolio-art art-${index + 1}`}>
                    <span>BATARA PROJECT</span>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                  </div>
                  <div className="portfolio-copy">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container why-grid">
            <div>
              <span className="section-tag">KENAPA BATARA PROJECT?</span>
              <h2>Lebih sederhana dalam proses, lebih berguna dalam hasil.</h2>
            </div>

            <div className="why-cards">
              <article>
                <span>01</span>
                <h3>Sesuai kebutuhan</h3>
                <p>Tidak memaksakan layanan yang sebenarnya tidak dibutuhkan.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Mudah dipahami</h3>
                <p>Dibuat untuk pengguna sehari-hari, bukan hanya orang teknis.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Fleksibel</h3>
                <p>Bisa satu layanan, paket, maupun kebutuhan khusus.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Pendampingan</h3>
                <p>Dibantu dari konsultasi hingga hasil siap digunakan.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about" id="tentang">
          <div className="container about-grid">
            <div className="about-logo-wrap">
              <span className="about-logo">
                <img src="/logo-batara.jpg" alt="Batara Project" />
              </span>
            </div>

            <div className="about-copy">
              <span className="section-tag">TENTANG BATARA PROJECT</span>
              <h2>Digitalisasi tidak harus rumit atau mahal.</h2>
              <p>
                Batara Project membantu UMKM, usaha lokal, komunitas, dan
                berbagai kegiatan memanfaatkan teknologi dengan cara yang
                sederhana, praktis, dan sesuai kebutuhan.
              </p>
              <p>
                Kami percaya solusi yang baik adalah solusi yang benar-benar
                dipakai dan membantu pekerjaan sehari-hari.
              </p>
              <strong>Partner Digital untuk Pengembangan Usaha.</strong>
            </div>
          </div>
        </section>

        <section className="cta" id="kontak">
          <div className="container cta-grid">
            <div>
              <span>KONSULTASI AWAL</span>
              <h2>Belum yakin layanan mana yang dibutuhkan?</h2>
              <p>
                Ceritakan langsung kebutuhan atau kendala usaha Anda melalui
                WhatsApp. Kami bantu menentukan solusi yang paling sesuai.
              </p>
            </div>

            <div className="cta-box">
              <a
                href={WHATSAPP_CONSULT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                Chat WhatsApp
              </a>
              <small>
                Konsultasi awal langsung melalui WhatsApp.
              </small>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src="/logo-batara.jpg" alt="Batara Project" />
            </span>
            <div>
              <strong>BATARA PROJECT</strong>
              <p>Partner Digital untuk Pengembangan Usaha</p>
            </div>
          </div>

          <div className="footer-links">
            <strong>Layanan</strong>
            <a href="/layanan/digitalisasi-umkm">Digitalisasi UMKM</a>
            <a href="/layanan/desain-branding">Desain & Branding</a>
            <a href="/layanan/website-landing-page">Website</a>
            <a href="/layanan/administrasi-usaha">Administrasi</a>
          </div>

          <div className="footer-links">
            <strong>Navigasi</strong>
            <a href="#home">Beranda</a>
            <a href="#paket">Paket</a>
            <a href="#portofolio">Portofolio</a>
            <a href="/checkout">Checkout</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Batara Project</span>
          <span>Partner Digital untuk Pengembangan Usaha</span>
        </div>
      </footer>
    </>
  );
}
