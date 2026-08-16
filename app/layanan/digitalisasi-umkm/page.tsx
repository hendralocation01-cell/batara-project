export default function DigitalisasiUmkmPage() {
  return (
    <main>
      <section className="service-detail-hero">
        <div className="container">
          <span className="eyebrow">DIGITALISASI UMKM</span>

          <h1>
            Bantu Usaha Anda
            <span> Naik Level Secara Digital.</span>
          </h1>

          <p>
            Kami membantu UMKM mulai menggunakan teknologi digital untuk
            menerima pembayaran, mencatat transaksi, dan mengelola penjualan
            dengan lebih mudah.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">SOLUSI UMKM</span>

            <h2>
              Digitalisasi Tidak Harus
              <span> Rumit.</span>
            </h2>

            <p>
              Kami memilih solusi yang sederhana dan sesuai kebutuhan usaha.
              Tujuannya bukan sekadar menggunakan teknologi, tetapi membuat
              aktivitas usaha menjadi lebih praktis dan terarah.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card green">
              <span className="service-number">01</span>
              <h3>QRIS Usaha</h3>
              <p>
                Terima pembayaran digital menggunakan QRIS dengan identitas
                usaha Anda.
              </p>
              <ul>
                <li>QRIS sesuai nama usaha</li>
                <li>Memudahkan pelanggan melakukan pembayaran</li>
                <li>Membantu usaha terlihat lebih profesional</li>
              </ul>
            </article>

            <article className="service-card blue">
              <span className="service-number">02</span>
              <h3>POS / Kasir</h3>
              <p>
                Membantu proses transaksi dan pencatatan penjualan agar lebih
                rapi dan mudah dipantau.
              </p>
              <ul>
                <li>Pencatatan transaksi</li>
                <li>Pengelolaan produk</li>
                <li>Membantu mengetahui hasil penjualan</li>
              </ul>
            </article>

            <article className="service-card violet">
              <span className="service-number">03</span>
              <h3>Excel Data Penjualan</h3>
              <p>
                Solusi sederhana untuk usaha yang membutuhkan pencatatan
                penjualan tanpa sistem yang rumit.
              </p>
              <ul>
                <li>Data penjualan lebih terstruktur</li>
                <li>Rekap transaksi lebih mudah</li>
                <li>Bisa disesuaikan dengan kebutuhan usaha</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">SIAP MEMULAI?</span>

            <h2>
              Mari Digitalisasi
              <span> Usaha Anda.</span>
            </h2>

            <p>
              Tidak yakin harus mulai dari mana? Konsultasikan kebutuhan usaha
              Anda terlebih dahulu.
            </p>

            <a
              className="nav-cta"
              href="https://wa.me/6280000000000?text=Halo%20Batara%20Project%2C%20saya%20ingin%20konsultasi%20tentang%20Digitalisasi%20UMKM."
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi via WhatsApp ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}