export type ServiceItem = {
  id: string;
  name: string;
  description: string;
};

export type ServiceData = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  suitableFor: string[];
  items: ServiceItem[];
  process: { number: string; title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Record<string, ServiceData> = {
  "digitalisasi-umkm": {
    slug: "digitalisasi-umkm",
    number: "01",
    eyebrow: "DIGITALISASI UMKM",
    title: "Digitalisasi UMKM",
    headline: "Bantu usaha lebih mudah ditemukan, dihubungi, dan digunakan pelanggan.",
    description:
      "Kami membantu menyiapkan kebutuhan digital dasar usaha secara sederhana. Pilih hanya layanan yang memang Anda perlukan.",
    suitableFor: ["Warung & toko", "Kuliner", "Laundry", "Jasa rumahan", "UMKM baru", "Usaha lokal"],
    items: [
      {
        id: "qris",
        name: "QRIS & Materi Pembayaran",
        description: "Penyiapan kebutuhan QRIS beserta desain materi pembayaran yang rapi untuk dipasang di tempat usaha.",
      },
      {
        id: "google-business",
        name: "Google Business Profile",
        description: "Bantu menyiapkan atau merapikan profil usaha agar lebih mudah ditemukan melalui Google Search dan Maps.",
      },
      {
        id: "whatsapp-business",
        name: "WhatsApp Business",
        description: "Penataan profil, katalog, pesan sambutan, balasan cepat, serta informasi dasar usaha.",
      },
      {
        id: "katalog-digital",
        name: "Katalog Digital",
        description: "Katalog produk atau jasa yang mudah dibagikan kepada pelanggan melalui tautan.",
      },
      {
        id: "form-digital",
        name: "Formulir Digital",
        description: "Form pemesanan, pendaftaran, pendataan pelanggan, atau kebutuhan operasional sederhana.",
      },
      {
        id: "optimasi-profil",
        name: "Optimasi Profil Usaha",
        description: "Merapikan informasi, kontak, identitas, dan kanal digital agar terlihat lebih konsisten dan profesional.",
      },
    ],
    process: [
      { number: "01", title: "Konsultasi", text: "Ceritakan kondisi usaha dan kebutuhan yang ingin dibenahi." },
      { number: "02", title: "Pengumpulan Data", text: "Kami meminta data yang benar-benar diperlukan untuk pengerjaan." },
      { number: "03", title: "Pengerjaan", text: "Layanan dikerjakan sesuai ruang lingkup yang dipilih." },
      { number: "04", title: "Serah Terima", text: "Hasil diperiksa bersama lalu disiapkan agar dapat langsung digunakan." },
    ],
    faqs: [
      { q: "Harus mengambil semua layanan?", a: "Tidak. Anda dapat memilih satu layanan saja atau beberapa layanan sekaligus." },
      { q: "Apakah cocok untuk usaha kecil?", a: "Ya. Fokus kami justru pada solusi yang sederhana dan realistis untuk usaha lokal serta UMKM." },
      { q: "Apakah harga langsung terlihat?", a: "Harga final dikonfirmasi setelah kebutuhan dan ruang lingkup diperiksa agar tidak ada biaya yang tidak relevan." },
    ],
  },

  "desain-branding": {
    slug: "desain-branding",
    number: "02",
    eyebrow: "DESAIN & BRANDING",
    title: "Desain & Branding",
    headline: "Buat usaha terlihat lebih rapi, konsisten, dan mudah dikenali.",
    description:
      "Mulai dari identitas usaha sampai materi promosi. Pilih jenis desain yang dibutuhkan tanpa harus mengambil paket besar.",
    suitableFor: ["UMKM", "Toko & warung", "Kuliner", "Komunitas", "Event", "Usaha jasa"],
    items: [
      {
        id: "logo",
        name: "Logo Usaha",
        description: "Pembuatan identitas visual sederhana yang sesuai karakter usaha dan mudah digunakan di berbagai media.",
      },
      {
        id: "refresh-logo",
        name: "Refresh / Rapikan Logo",
        description: "Merapikan logo yang sudah ada agar lebih bersih, jelas, dan siap dipakai kembali.",
      },
      {
        id: "flyer",
        name: "Flyer Promosi",
        description: "Materi promosi digital untuk WhatsApp, Facebook, Instagram, maupun kebutuhan cetak.",
      },
      {
        id: "banner",
        name: "Banner & Spanduk",
        description: "Desain banner toko, kegiatan, promosi, backdrop, maupun kebutuhan acara.",
      },
      {
        id: "menu",
        name: "Menu & Daftar Harga",
        description: "Daftar menu atau price list yang rapi, mudah dibaca, dan selaras dengan identitas usaha.",
      },
      {
        id: "materi-usaha",
        name: "Materi Identitas Usaha",
        description: "Kartu nama, desain QRIS, label sederhana, header, cover, dan kebutuhan visual pendukung lainnya.",
      },
    ],
    process: [
      { number: "01", title: "Brief", text: "Kirim nama usaha, kebutuhan desain, isi teks, dan referensi bila ada." },
      { number: "02", title: "Konsep", text: "Kami menentukan arah visual yang paling sesuai dengan kebutuhan." },
      { number: "03", title: "Desain", text: "Desain dikerjakan dan ditinjau sebelum final." },
      { number: "04", title: "Finalisasi", text: "File akhir disiapkan sesuai kebutuhan penggunaan." },
    ],
    faqs: [
      { q: "Bisa hanya pesan satu flyer?", a: "Bisa. Layanan satuan tetap tersedia." },
      { q: "Saya sudah punya logo, bisa dirapikan saja?", a: "Bisa. Pilih layanan Refresh / Rapikan Logo saat checkout." },
      { q: "Bisa untuk kebutuhan cetak?", a: "Bisa. Sebutkan ukuran cetak pada catatan checkout agar file disiapkan dengan ukuran yang sesuai." },
    ],
  },

  "website-landing-page": {
    slug: "website-landing-page",
    number: "03",
    eyebrow: "WEBSITE & LANDING PAGE",
    title: "Website & Landing Page",
    headline: "Miliki halaman online yang benar-benar mewakili usaha Anda.",
    description:
      "Website tidak harus rumit. Kami fokus pada halaman yang jelas, ringan, mudah dipahami pelanggan, dan memiliki tujuan yang nyata.",
    suitableFor: ["Profil usaha", "Produk & jasa", "UMKM", "Organisasi", "Event", "Promosi khusus"],
    items: [
      {
        id: "landing-page",
        name: "Landing Page Usaha",
        description: "Satu halaman terfokus untuk memperkenalkan usaha, layanan, produk, atau promosi.",
      },
      {
        id: "website-profil",
        name: "Website Profil Usaha",
        description: "Website beberapa bagian untuk profil, layanan, portofolio, kontak, dan informasi bisnis.",
      },
      {
        id: "katalog-online",
        name: "Katalog Produk / Jasa",
        description: "Halaman katalog yang memudahkan pelanggan melihat produk atau layanan yang tersedia.",
      },
      {
        id: "form-online",
        name: "Formulir Online",
        description: "Form pendaftaran, pemesanan, pendataan, atau pengumpulan informasi secara online.",
      },
      {
        id: "event-page",
        name: "Halaman Event / Kegiatan",
        description: "Microsite untuk jadwal, informasi, pendaftaran, sponsor, atau kebutuhan kegiatan.",
      },
      {
        id: "setup-domain",
        name: "Setup Domain & Publikasi",
        description: "Bantu menghubungkan domain, deployment, serta pengecekan dasar agar website dapat diakses publik.",
      },
    ],
    process: [
      { number: "01", title: "Tujuan", text: "Tentukan tujuan utama website dan siapa yang akan menggunakannya." },
      { number: "02", title: "Konten", text: "Kumpulkan teks, logo, foto, produk, dan informasi kontak." },
      { number: "03", title: "Pengerjaan", text: "Struktur, tampilan, dan halaman dibuat sesuai ruang lingkup." },
      { number: "04", title: "Publikasi", text: "Website diuji dan dipublikasikan setelah disetujui." },
    ],
    faqs: [
      { q: "Apakah harus punya domain dulu?", a: "Tidak. Domain dapat disiapkan setelah struktur website jelas." },
      { q: "Bisa hanya landing page sederhana?", a: "Bisa. Tidak semua usaha membutuhkan website dengan banyak halaman." },
      { q: "Apakah bisa ditambah fitur khusus?", a: "Bisa dibahas. Pilih layanan yang relevan dan jelaskan kebutuhan khusus pada catatan checkout." },
    ],
  },

  "administrasi-usaha": {
    slug: "administrasi-usaha",
    number: "04",
    eyebrow: "ADMINISTRASI USAHA",
    title: "Administrasi Usaha",
    headline: "Administrasi lebih rapi, pekerjaan sehari-hari lebih mudah.",
    description:
      "Kami membantu membuat format pencatatan dan dokumen kerja yang sederhana, mudah digunakan, dan sesuai alur usaha.",
    suitableFor: ["Warung", "Toko", "Penggilingan", "Agen", "Usaha jasa", "Organisasi"],
    items: [
      {
        id: "excel-penjualan",
        name: "Excel Pencatatan Penjualan",
        description: "Format pencatatan transaksi dan rekap sederhana yang dapat digunakan sehari-hari.",
      },
      {
        id: "stok",
        name: "Stok Barang",
        description: "Template stok masuk, stok keluar, saldo barang, dan rekap kebutuhan dasar.",
      },
      {
        id: "invoice",
        name: "Invoice & Nota",
        description: "Template invoice, nota, kuitansi, dan dokumen transaksi yang lebih rapi.",
      },
      {
        id: "rekap",
        name: "Rekap & Laporan",
        description: "Format rekap harian, mingguan, bulanan, atau laporan sesuai kebutuhan usaha.",
      },
      {
        id: "form-admin",
        name: "Form Administrasi",
        description: "Form pendataan, pendaftaran, checklist, dan kebutuhan administrasi lainnya.",
      },
      {
        id: "database-sederhana",
        name: "Database Sederhana",
        description: "Pencatatan terstruktur untuk kebutuhan usaha yang tidak cukup ditangani dengan dokumen biasa.",
      },
    ],
    process: [
      { number: "01", title: "Pelajari Alur", text: "Kami memahami cara pencatatan yang saat ini digunakan." },
      { number: "02", title: "Tentukan Format", text: "Pilih data apa saja yang perlu dicatat dan dilaporkan." },
      { number: "03", title: "Pembuatan", text: "Template atau sistem sederhana dibuat sesuai kebutuhan." },
      { number: "04", title: "Uji & Pakai", text: "Format diuji bersama agar benar-benar mudah digunakan." },
    ],
    faqs: [
      { q: "Harus pakai aplikasi?", a: "Tidak. Banyak kebutuhan administrasi justru cukup menggunakan Excel atau format sederhana." },
      { q: "Bisa dibuat sesuai usaha saya?", a: "Bisa. Struktur kolom, laporan, dan alur pencatatan dapat disesuaikan." },
      { q: "Bisa memperbaiki file Excel yang sudah ada?", a: "Bisa. Jelaskan file dan masalahnya pada catatan checkout." },
    ],
  },

  "promosi-konten-digital": {
    slug: "promosi-konten-digital",
    number: "05",
    eyebrow: "PROMOSI & KONTEN DIGITAL",
    title: "Promosi & Konten Digital",
    headline: "Siapkan materi promosi yang lebih jelas dan siap digunakan.",
    description:
      "Bukan sekadar membuat gambar. Kami membantu menyusun pesan promosi agar lebih mudah dipahami calon pelanggan.",
    suitableFor: ["UMKM", "Kuliner", "Retail", "Jasa", "Promosi event", "Media sosial"],
    items: [
      {
        id: "copywriting",
        name: "Copywriting Promosi",
        description: "Penyusunan headline, penawaran, CTA, dan narasi promosi yang lebih jelas.",
      },
      {
        id: "konten-wa",
        name: "Konten WhatsApp",
        description: "Materi broadcast, status WhatsApp, katalog promosi, dan penawaran singkat.",
      },
      {
        id: "konten-sosmed",
        name: "Konten Facebook / Instagram",
        description: "Desain dan teks promosi untuk kebutuhan media sosial usaha.",
      },
      {
        id: "flyer-digital",
        name: "Flyer Digital",
        description: "Materi visual promosi yang siap dibagikan ke berbagai kanal.",
      },
      {
        id: "video",
        name: "Video Promosi Sederhana",
        description: "Video singkat untuk memperkenalkan produk, jasa, promo, atau kegiatan.",
      },
      {
        id: "paket-kampanye",
        name: "Paket Materi Kampanye",
        description: "Beberapa materi promosi dalam satu tema untuk kebutuhan promo tertentu.",
      },
    ],
    process: [
      { number: "01", title: "Tujuan", text: "Tentukan produk, target pelanggan, dan tindakan yang diharapkan." },
      { number: "02", title: "Pesan Utama", text: "Susun manfaat dan penawaran agar mudah dipahami." },
      { number: "03", title: "Produksi", text: "Materi visual atau konten dibuat sesuai kanal penggunaan." },
      { number: "04", title: "Siap Tayang", text: "Konten difinalisasi agar siap dibagikan atau dipublikasikan." },
    ],
    faqs: [
      { q: "Bisa hanya minta caption?", a: "Bisa. Pilih Copywriting Promosi." },
      { q: "Apakah termasuk biaya iklan?", a: "Tidak. Layanan ini berfokus pada pembuatan materi promosi kecuali disepakati lain." },
      { q: "Bisa dibuat beberapa ukuran?", a: "Bisa. Sebutkan media yang akan digunakan pada catatan checkout." },
    ],
  },

  "konsultasi-solusi-digital": {
    slug: "konsultasi-solusi-digital",
    number: "06",
    eyebrow: "KONSULTASI & SOLUSI DIGITAL",
    title: "Konsultasi & Solusi Digital",
    headline: "Punya masalah digital tetapi belum tahu solusi yang tepat?",
    description:
      "Mulai dari masalahnya, bukan dari aplikasinya. Kami bantu memetakan kebutuhan dan memilih solusi yang paling masuk akal.",
    suitableFor: ["UMKM", "Usaha lokal", "Komunitas", "Organisasi", "Event", "Kebutuhan khusus"],
    items: [
      {
        id: "audit-kebutuhan",
        name: "Analisis Kebutuhan Digital",
        description: "Membantu memetakan masalah, proses kerja, serta kebutuhan yang benar-benar perlu dibenahi.",
      },
      {
        id: "rekomendasi-tools",
        name: "Rekomendasi Tools",
        description: "Memilih alat, platform, atau cara kerja yang lebih sesuai tanpa membuat proses menjadi berlebihan.",
      },
      {
        id: "alur-kerja",
        name: "Penyederhanaan Alur Kerja",
        description: "Merapikan proses digital agar pekerjaan lebih mudah dan tidak berulang.",
      },
      {
        id: "solusi-custom",
        name: "Solusi Kebutuhan Khusus",
        description: "Untuk kebutuhan yang tidak masuk ke kategori layanan Batara Project lainnya.",
      },
      {
        id: "pendampingan",
        name: "Pendampingan Penggunaan",
        description: "Bantuan agar solusi yang sudah dibuat dapat dipahami dan digunakan.",
      },
      {
        id: "evaluasi",
        name: "Evaluasi Solusi yang Sudah Ada",
        description: "Menilai website, file kerja, formulir, atau proses digital yang sudah berjalan untuk menemukan perbaikannya.",
      },
    ],
    process: [
      { number: "01", title: "Ceritakan Masalah", text: "Jelaskan kondisi saat ini dan hasil yang diharapkan." },
      { number: "02", title: "Analisis", text: "Kami memisahkan kebutuhan utama dari hal yang belum diperlukan." },
      { number: "03", title: "Rekomendasi", text: "Pilihan solusi disusun berdasarkan manfaat, biaya, dan kemudahan penggunaan." },
      { number: "04", title: "Eksekusi", text: "Jika dibutuhkan, solusi dapat dilanjutkan ke tahap pengerjaan." },
    ],
    faqs: [
      { q: "Saya tidak tahu nama layanan yang dibutuhkan, bagaimana?", a: "Pilih Analisis Kebutuhan Digital lalu jelaskan masalahnya pada checkout." },
      { q: "Apakah konsultasi berarti harus membuat aplikasi?", a: "Tidak. Solusi bisa berupa perbaikan alur, Excel, formulir, website, atau alat lain yang lebih sederhana." },
      { q: "Bisa konsultasi dulu sebelum menentukan pekerjaan?", a: "Bisa. Justru halaman ini dibuat untuk kebutuhan tersebut." },
    ],
  },
};

export function getService(slug: string) {
  return services[slug];
}
