export default function PulsaPpobPage() {
  const nomorWA = "628XXXXXXXXXX";

  const waYellowPay =
    `https://wa.me/6285724159878?text=` +
    encodeURIComponent(
      "Halo Batara Project, saya tertarik menjadi mitra YellowPay. Saya ingin mendapatkan informasi lebih lanjut."
    );

  const waDermaga =
    `https://wa.me/6285724159878?text=` +
    encodeURIComponent(
      "Halo Batara Project, saya tertarik menjadi mitra Dermaga Reload. Saya ingin mendapatkan informasi lebih lanjut."
    );

  const waUmum =
    `https://wa.me/6285724159878?text=` +
    encodeURIComponent(
      "Halo Batara Project, saya ingin konsultasi mengenai layanan Distributor Pulsa & PPOB."
    );

  return (
    <main className="ppob-page">

      {/* HERO */}
      <section className="service-detail-hero">
        <div className="container">
          <span className="eyebrow">DISTRIBUTOR PULSA & PPOB</span>

          <h1>
            Tambah Layanan Digital
            <span> di Usaha Anda.</span>
          </h1>

          <p>
            Batara Project membantu menyediakan akses layanan pulsa, paket data,
            token listrik, PPOB, e-wallet dan berbagai produk digital melalui
            platform mitra yang praktis digunakan.
          </p>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="section">
        <div className="container">

          <div className="section-head center">
            <span className="eyebrow">PLATFORM MITRA</span>
            <h2>Pilih Platform yang Sesuai</h2>
            <p>
              Tersedia pilihan platform transaksi digital yang dapat digunakan
              untuk kebutuhan agen, toko, konter maupun usaha lainnya.
            </p>
          </div>

          <div className="platform-grid">

            {/* YELLOWPAY */}
            <article className="platform-card">

              <div className="platform-logo-wrap">
                <img
                  src="/yellowpay.jpeg"
                  alt="YellowPay"
                  className="platform-logo"
                />
              </div>

              <div className="platform-content">
                <span className="platform-label">PLATFORM TRANSAKSI</span>

                <h2>YellowPay</h2>

                <p>
                  Platform transaksi digital untuk kebutuhan pulsa, paket data,
                  PPOB, token listrik, e-wallet dan berbagai produk digital
                  lainnya.
                </p>

                <ul>
                  <li>Transaksi berbasis aplikasi</li>
                  <li>Produk digital lengkap</li>
                  <li>Cocok untuk agen dan usaha</li>
                  <li>Praktis digunakan</li>
                </ul>

                <a
                  className="platform-wa"
                  href={waYellowPay}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasi YellowPay →
                </a>
              </div>

            </article>

            {/* DERMAGA RELOAD */}
            <article className="platform-card">

              <div className="platform-logo-wrap">
                <img
                  src="/dermaga-reload.jpeg"
                  alt="Dermaga Reload"
                  className="platform-logo"
                />
              </div>

              <div className="platform-content">
                <span className="platform-label">PLATFORM TRANSAKSI</span>

                <h2>Dermaga Reload</h2>

                <p>
                  Aplikasi Khusus di Buat untuk anda yang ingin menjadi master dealer, atau agen dan sudah memiliki downline.
                  Selain bisa untuk transaksi, aplikasi ini bisa untuk menambah penghasilan Anda dengan cara menjadi agen,
                  Kenapa harus Dermaga Reload?
                  karena kita menyediakan fitur khusus, yaitu mark up yang bisa perproduk tidak Global Seperti Server lain.
                </p>

                <ul>
                  <li>Fitur khusus Mark Up Produk</li>
                  <li>Pulsa, Paket Data, Token & pembayaran PPOB</li>
                  <li>Produk digital lainnya</li>
                  <li>Cocok untuk usaha retail</li>
                </ul>

                <a
                  className="platform-wa"
                  href={waDermaga}
                  target="_blank"
                  rel="noreferrer"
                >
                  Konsultasi Dermaga Reload →
                </a>
              </div>

            </article>

          </div>
        </div>
      </section>

      {/* PRODUK */}
      <section className="section ppob-products">
        <div className="container">

          <div className="section-head center">
            <span className="eyebrow">PRODUK & LAYANAN</span>
            <h2>Satu Aplikasi, Banyak Transaksi</h2>
          </div>

          <div className="product-mini-grid">

            <div className="product-mini">
              <strong>📱</strong>
              <h3>Pulsa</h3>
              <small>Semua Operator</small>
            </div>

            <div className="product-mini">
              <strong>📶</strong>
              <h3>Paket Data</h3>
              <small>Internet</small>
            </div>

            <div className="product-mini">
              <strong>⚡</strong>
              <h3>Token PLN</h3>
              <small>Listrik</small>
            </div>

            <div className="product-mini">
              <strong>🧾</strong>
              <h3>PPOB</h3>
              <small>Tagihan</small>
            </div>

            <div className="product-mini">
              <strong>💳</strong>
              <h3>E-Wallet</h3>
              <small>Top Up</small>
            </div>

            <div className="product-mini">
              <strong>🎟️</strong>
              <h3>Voucher</h3>
              <small>Digital</small>
            </div>

          </div>
        </div>
      </section>

      {/* KEUNTUNGAN */}
      <section className="section">
        <div className="container">

          <div className="section-head center">
            <span className="eyebrow">KEUNTUNGAN</span>
            <h2>Kenapa Menjadi Mitra?</h2>
          </div>

          <div className="ppob-benefits">
            <div>✓ Transaksi berbasis aplikasi</div>
            <div>✓ Harga kompetitif</div>
            <div>✓ Cocok untuk konter, toko dan warung</div>
            <div>✓ Bisa menjadi layanan tambahan usaha</div>
            <div>✓ Pengisian saldo praktis</div>
            <div>✓ Pendampingan awal penggunaan</div>
          </div>

        </div>
      </section>

      {/* CARA BERGABUNG */}
      <section className="section ppob-steps">
        <div className="container">

          <div className="section-head center">
            <span className="eyebrow">CARA BERGABUNG</span>
            <h2>Mulai dalam Beberapa Langkah</h2>
          </div>

          <div className="step-list">

            <div className="step-item">
              <b>1</b>
              <div>
                <h3>Konsultasi</h3>
                <p>Sampaikan kebutuhan usaha Anda.</p>
              </div>
            </div>

            <div className="step-item">
              <b>2</b>
              <div>
                <h3>Registrasi</h3>
                <p>Lengkapi data pendaftaran mitra.</p>
              </div>
            </div>

            <div className="step-item">
              <b>3</b>
              <div>
                <h3>Pilih Platform</h3>
                <p>Pilih YellowPay atau Dermaga Reload.</p>
              </div>
            </div>

            <div className="step-item">
              <b>4</b>
              <div>
                <h3>Isi Saldo</h3>
                <p>Siapkan saldo awal untuk transaksi.</p>
              </div>
            </div>

            <div className="step-item">
              <b>5</b>
              <div>
                <h3>Mulai Transaksi</h3>
                <p>Anda siap melayani pelanggan.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">

          <div className="ppob-final-cta">
            <span className="eyebrow">SIAP MENJADI MITRA?</span>

            <h2>Tambahkan Layanan Digital ke Usaha Anda</h2>

            <p>
              Belum yakin memilih YellowPay atau Dermaga Reload?
              Konsultasikan terlebih dahulu dengan Batara Project.
            </p>

            <a
              href={waUmum}
              target="_blank"
              rel="noreferrer"
              className="platform-wa final"
            >
              Konsultasi via WhatsApp →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}