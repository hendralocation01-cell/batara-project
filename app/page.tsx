const services = [
  {
    number: '01',
    slug: 'pulsa-ppob',
    title: 'Distributor Pulsa & PPOB',
    text: 'Menjadi mitra atau distributor produk digital dan layanan PPOB dengan sistem yang cepat, praktis, dan transparan.',
    items: ['Transaksi berbasis Aplikasi', 'Opsi Pengisian Saldo Tanpa Ribet ( Bisa di Jemput Petugas Kami )', 'Harga yang kompetitif, Sehingga keuntungan bisa lebih maksimal'],
    tone: 'blue',
  },
  {
    number: '02',
    slug: 'digitalisasi-umkm',
    title: 'Digitalisasi UMKM',
    text: 'Membantu usaha mulai tercatat, terpantau, dan berkembang dengan solusi digital yang mudah digunakan.',
    items: ['Pembuatan QRIS Sesuai Nama Usaha', 'Aplikasi POS / Kasir', 'Excel Pencatat Penjualan'],
    tone: 'green',
  },
  {
    number: '03',
    slug: 'konsultasi-solusi-digital',
    title: 'Konsultasi&Solusi-Digital',
    text: 'Mewujudkan kebutuhan sistem dan aplikasi bisnis melalui proses analisis hingga pengembangan bersama partner teknologi.',
    items: ['Aplikasi Bisnis', 'Sistem Custom', 'Web & Mobile App'],
    tone: 'violet',
  },
];

const portfolio = [
  { title: 'QRIS UMKM', category: 'Digitalisasi UMKM', icon: '▦' },
  { title: 'Sistem Kasir', category: 'POS / Kasir', icon: '▣' },
  { title: 'Excel Penjualan', category: 'Pencatatan Usaha', icon: '▤' },
];

function Arrow() { return <span aria-hidden>→</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Batara Project">
  <div className="brand-mark">
  <img
    src="/logo-batara.jpg"
    alt="Batara Project"
    style={{
      width: "42px",
      height: "42px",
      objectFit: "contain",
      borderRadius: "50%",
      display: "block",
    }}
  />
</div>
            <span><strong>BATARA PROJECT</strong><small>Partner Digital untuk Pengembangan Usaha</small></span>
          </a>
          <nav className="nav-links">
            <a className="active" href="#top">Beranda</a>
            <a href="#layanan">Layanan</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#kontak">Kontak</a>
          </nav>
          <a className="nav-cta" href="https://wa.me/6285724159878?text=Halo%20Batara%20Project%2C%20saya%20ingin%20konsultasi." target="_blank" rel="noreferrer">Konsultasi ↗</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Partner Digital untuk Pengembangan Usaha</span>
            <h1>Solusi Digital untuk <span>Usaha yang Lebih Maju.</span></h1>
            <p>Batara Project membantu usaha mengelola dan mengembangkan bisnis melalui layanan digital yang praktis, terpercaya, dan sesuai kebutuhan.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#layanan">Lihat Layanan <Arrow /></a>
              <a className="btn secondary" href="https://wa.me/6285724159878?text=Halo%20Batara%20Project%2C%20saya%20ingin%20konsultasi." target="_blank" rel="noreferrer">Konsultasi via WhatsApp</a>
            </div>
            <div className="trust-row">
              <div><b>✓</b><span><strong>Solusi Tepat</strong><small>Sesuai kebutuhan usaha</small></span></div>
              <div><b>✓</b><span><strong>Proses Mudah</strong><small>Pendampingan penuh</small></span></div>
              <div><b>✓</b><span><strong>Terpercaya</strong><small>Partner bisnis Anda</small></span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustrasi layanan digital">
            <div className="glow" />
            <div className="device laptop"><div className="screen"><div className="screen-title">Dashboard Usaha</div><div className="chart"><i/><i/><i/><i/><i/><i/></div><div className="mini-lines"><i/><i/><i/></div></div></div>
            <div className="device phone"><div className="phone-screen"><div className="phone-top"/><div className="phone-card">PPOB<br/><b>Rp 1.250.000</b></div><div className="phone-card">Transaksi<br/><b>124</b></div></div></div>
            <div className="qris-card"><div className="qris-label">QRIS</div><div className="qr">▦</div><small>BATARA PROJECT</small></div>
            <div className="receipt" />
          </div>
        </div>
      </section>

      <section id="layanan" className="section services-section">
        <div className="container">
          <div className="section-head center"><span className="eyebrow">LAYANAN KAMI</span><h2>Tiga Fokus Layanan Kami</h2><p>Kami fokus pada kebutuhan digital yang benar-benar dibutuhkan usaha untuk bertumbuh.</p></div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={`service-card ${service.tone}`} key={service.number}>
                <div className="service-top"><span className="service-number">{service.number}</span><span className="service-icon">✦</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href={`/layanan/${service.slug}`}>Pelajari Selengkapnya <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div><strong>100+</strong><span>Mitra & Pelanggan</span></div>
          <div><strong>200+</strong><span>Project & Solusi</span></div>
          <div><strong>3+</strong><span>Tahun Pengalaman</span></div>
          <div><strong>100%</strong><span>Komitmen & Support</span></div>
        </div>
      </section>

      <section id="tentang" className="section about-section">
        <div className="container about-grid">
          <div><span className="eyebrow">KENAPA BATARA PROJECT?</span><h2>Kami Membantu, Bukan Hanya Menjual Produk.</h2><p className="lead">Kami memahami kebutuhan usaha terlebih dahulu, lalu membantu memilih solusi yang paling masuk akal.</p><a className="btn secondary" href="#kontak">Tentang Kami <Arrow /></a></div>
          <div className="benefits">
            {['Fokus Pada Kebutuhan', 'Dapat Dikembangkan', 'Praktis & Mudah Digunakan', 'Terhubung dengan Partner', 'Pendampingan Penuh'].map((x) => <div className="benefit" key={x}><span>✓</span><div><strong>{x}</strong><p>Solusi dirancang agar mudah dipahami dan digunakan oleh usaha.</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="container"><div className="section-head"><span className="eyebrow">PORTFOLIO KAMI</span><h2>Beberapa Hasil Pekerjaan Kami</h2></div>
          <div className="portfolio-grid">{portfolio.map((item) => <article className="portfolio-card" key={item.title}><div className="portfolio-art"><span>{item.icon}</span></div><small>{item.category}</small><h3>{item.title}</h3><a href="#detail">Lihat Detail <Arrow /></a></article>)}</div>
          <a className="all-link" href="#detail">Lihat Semua Portfolio <Arrow /></a>
        </div>
      </section>

      <section id="kontak" className="cta-section"><div className="container cta"><div><span className="cta-bubble">✦</span><div><h2>Punya kebutuhan untuk usaha Anda?</h2><p>Ceritakan kebutuhan Anda. Kami siap membantu menemukan solusi yang sesuai.</p></div></div><a className="btn whatsapp" href="https://wa.me/6280000000000?text=Halo%20Batara%20Project%2C%20saya%20ingin%20konsultasi." target="_blank" rel="noreferrer">Konsultasi via WhatsApp</a></div></section>

      <footer className="footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">B</span><span><strong>BATARA PROJECT</strong><small>Partner Digital untuk Pengembangan Usaha</small></span></a><p>Solusi digital untuk membantu usaha berkembang lebih mudah dan terarah.</p></div><div><h4>Layanan</h4><a href="#layanan">Pulsa & PPOB</a><a href="#layanan">Digitalisasi UMKM</a><a href="#layanan">Layanan Aplikasi</a></div><div><h4>Informasi</h4><a href="#tentang">Tentang Kami</a><a href="#portfolio">Portfolio</a><a href="#kontak">Kontak</a></div><div><h4>Hubungi</h4><a href="#kontak">WhatsApp</a><a href="#kontak">Email</a></div></div><div className="container footer-bottom">© 2026 Batara Project. Semua hak dilindungi.</div></footer>
    </main>
  );
}
