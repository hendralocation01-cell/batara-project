export default function Home() {
  return (
    <main className="min-h-screen bg-[#1e252b] text-white font-sans selection:bg-amber-500/30">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
            B
          </div>
          <h1 className="text-xl font-bold tracking-wider text-white">
            BATARA <span className="text-amber-500">PROJECT</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#beranda" className="hover:text-amber-500 transition">BERANDA</a>
          <a href="#layanan" className="hover:text-amber-500 transition">LAYANAN</a>
          <a href="#tentang" className="hover:text-amber-500 transition">TENTANG KAMI</a>
          <a href="#kontak" className="hover:text-amber-500 transition">KONTAK</a>
        </nav>

        <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2 rounded-full font-bold text-sm transition shadow-lg shadow-amber-500/20">
          KONSULTASI SEKARANG
        </button>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="max-w-7xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <span className="text-amber-400 text-xs tracking-widest uppercase font-semibold border border-amber-500/30 px-4 py-1.5 rounded-full bg-amber-500/10">
            Mitra Transaksi Digital &amp; Media
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
            AKSELERASI BISNIS DENGAN SOLUSI DIGITAL TERINTEGRASI.
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Mendukung pertumbuhan usaha Anda melalui ekosistem transaksi digital praktis, periklanan kreatif, serta jaringan distribusi produk yang solid.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 px-8 py-3 rounded-full font-bold transition">
              JELAJAHI LAYANAN
            </button>
            <button className="border-2 border-slate-600 text-slate-300 hover:border-slate-400 px-8 py-3 rounded-full font-bold transition">
              HUBUNGI WHATSAPP
            </button>
          </div>
        </div>

        {/* Visual Box */}
        <div className="md:w-1/2 w-full">
          <div className="w-full h-80 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-amber-500 text-2xl font-bold mb-4">
              QRIS
            </div>
            <p className="text-white font-semibold text-lg">Batara Payment &amp; Media</p>
            <p className="text-slate-400 text-sm mt-1">Sistem transaksi serbaguna untuk skala usaha UMKM hingga korporasi.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="max-w-7xl mx-auto px-8 py-12 border-t border-white/10">
        <h3 className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2">Layanan Utama</h3>
        <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">Solusi yang Kami Sediakan</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
            <div className="text-amber-500 text-3xl mb-4">💳</div>
            <h5 className="text-xl font-bold text-white mb-2">Batara Payment</h5>
            <p className="text-slate-400 text-sm leading-relaxed">Layanan transaksi digital, top-up, dan integrasi QRIS Dana Bisnis untuk memudahkan pembayaran usaha Anda secara praktis dan aman.</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
            <div className="text-amber-500 text-3xl mb-4">🎬</div>
            <h5 className="text-xl font-bold text-white mb-2">Periklanan &amp; Media</h5>
            <p className="text-slate-400 text-sm leading-relaxed">Pembuatan banner, logo branding, serta promosi pemasaran berbasis teknologi kreatif modern.</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition">
            <div className="text-amber-500 text-3xl mb-4">🚀</div>
            <h5 className="text-xl font-bold text-white mb-2">Pengembangan Ekosistem</h5>
            <p className="text-slate-400 text-sm leading-relaxed">Pendampingan distribusi produk dan infrastruktur digital untuk memperluas jangkauan operasional bisnis.</p>
          </div>
        </div>
      </section>
    </main>
  );
}