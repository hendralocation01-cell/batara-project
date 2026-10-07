"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import styles from "./checkout.module.css";

type CartItem = {
  serviceSlug: string;
  serviceTitle: string;
  itemId: string;
  itemName: string;
};

const CART_KEY = "batara_project_cart";
const ORDER_DRAFT_KEY = "batara_project_checkout_draft";
const WHATSAPP_NUMBER = "6285724159878";

export default function CheckoutClient() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [submittedText, setSubmittedText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem(CART_KEY) || "[]"));
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);

  const grouped = useMemo(() => {
    const groups: Record<string, CartItem[]> = {};
    for (const item of items) {
      if (!groups[item.serviceTitle]) groups[item.serviceTitle] = [];
      groups[item.serviceTitle].push(item);
    }
    return groups;
  }, [items]);

  function removeItem(index: number) {
    const next = items.filter((_, i) => i !== index);
    setItems(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
  }

  function clearCart() {
    setItems([]);
    localStorage.removeItem(CART_KEY);
  }

  function generateOrderId() {
    const d = new Date();
    const date = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
    const code = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `BP-${date}-${code}`;
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!items.length) return;

    const fd = new FormData(e.currentTarget);
    const orderId = generateOrderId();

    const groupedText = Object.entries(grouped)
      .map(([title, serviceItems]) => {
        const list = serviceItems.map((x) => `- ${x.itemName}`).join("\n");
        return `*${title}*\n${list}`;
      })
      .join("\n\n");

    const text = `*PERMINTAAN PESANAN BATARA PROJECT*
No. Pesanan: ${orderId}

*Data Pemesan*
Nama: ${fd.get("name")}
Nama Usaha: ${fd.get("business") || "-"}
WhatsApp: ${fd.get("phone")}
Domisili: ${fd.get("city") || "-"}

*Layanan Dipilih*
${groupedText}

*Target Pengerjaan*
${fd.get("target") || "-"}

*Perkiraan Anggaran*
${fd.get("budget") || "Belum ditentukan"}

*Catatan Kebutuhan*
${fd.get("notes") || "-"}

Saya memahami bahwa harga final dikonfirmasi setelah Batara Project memeriksa kebutuhan dan ruang lingkup pekerjaan.`;

    localStorage.setItem(
      ORDER_DRAFT_KEY,
      JSON.stringify({
        orderId,
        createdAt: new Date().toISOString(),
        customer: {
          name: fd.get("name"),
          business: fd.get("business"),
          phone: fd.get("phone"),
          city: fd.get("city"),
        },
        target: fd.get("target"),
        budget: fd.get("budget"),
        notes: fd.get("notes"),
        items,
      })
    );

    setSubmittedText(text);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  }

  async function copySummary() {
    if (!submittedText) return;
    await navigator.clipboard.writeText(submittedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  if (!ready) {
    return <div className={styles.loading}>Memuat checkout...</div>;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container + " " + styles.headerInner}>
          <a href="/" className={styles.brand}>
            <span>
              <img src="/logo-batara.jpg" alt="Batara Project" />
            </span>
            <div>
              <strong>BATARA PROJECT</strong>
              <small>Checkout Layanan</small>
            </div>
          </a>

          <a href="/#layanan" className={styles.back}>
            + Tambah Layanan
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.container}>
            <span>CHECKOUT</span>
            <h1>Review kebutuhan sebelum mengirim pesanan.</h1>
            <p>
              Belum ada pembayaran pada tahap ini. Batara Project akan memeriksa
              kebutuhan terlebih dahulu lalu mengonfirmasi ruang lingkup dan harga.
            </p>
          </div>
        </section>

        <div className={styles.container + " " + styles.checkoutGrid}>
          <section className={styles.formSide}>
            {!items.length ? (
              <div className={styles.empty}>
                <h2>Belum ada layanan di checkout.</h2>
                <p>Pilih jasa terlebih dahulu dari halaman layanan.</p>
                <a href="/#layanan">Lihat Layanan</a>
              </div>
            ) : (
              <form onSubmit={submit} className={styles.form}>
                <div className={styles.formSection}>
                  <div className={styles.formTitle}>
                    <span>01</span>
                    <div>
                      <h2>Data Pemesan</h2>
                      <p>Informasi ini digunakan untuk menghubungi Anda terkait pesanan.</p>
                    </div>
                  </div>

                  <div className={styles.fields}>
                    <label>
                      Nama Lengkap *
                      <input name="name" required placeholder="Nama Anda" />
                    </label>

                    <label>
                      Nama Usaha
                      <input name="business" placeholder="Opsional" />
                    </label>

                    <label>
                      Nomor WhatsApp *
                      <input
                        name="phone"
                        required
                        inputMode="tel"
                        placeholder="08xxxxxxxxxx"
                      />
                    </label>

                    <label>
                      Domisili
                      <input name="city" placeholder="Kota / Kecamatan" />
                    </label>
                  </div>
                </div>

                <div className={styles.formSection}>
                  <div className={styles.formTitle}>
                    <span>02</span>
                    <div>
                      <h2>Kebutuhan Proyek</h2>
                      <p>Berikan gambaran agar kebutuhan dapat diperiksa lebih cepat.</p>
                    </div>
                  </div>

                  <div className={styles.fields}>
                    <label>
                      Target Pengerjaan
                      <select name="target" defaultValue="">
                        <option value="">Pilih jika ada target</option>
                        <option>Secepatnya</option>
                        <option>Kurang dari 1 minggu</option>
                        <option>1–2 minggu</option>
                        <option>Lebih dari 2 minggu</option>
                        <option>Fleksibel</option>
                      </select>
                    </label>

                    <label>
                      Perkiraan Anggaran
                      <select name="budget" defaultValue="">
                        <option value="">Belum ditentukan</option>
                        <option>Di bawah Rp100 ribu</option>
                        <option>Rp100–300 ribu</option>
                        <option>Rp300–500 ribu</option>
                        <option>Rp500 ribu–Rp1 juta</option>
                        <option>Di atas Rp1 juta</option>
                        <option>Mohon rekomendasi</option>
                      </select>
                    </label>

                    <label className={styles.full}>
                      Catatan Kebutuhan
                      <textarea
                        name="notes"
                        rows={6}
                        placeholder="Contoh: saya sudah punya logo, ingin dibuatkan flyer promo dan daftar harga..."
                      />
                    </label>
                  </div>
                </div>

                <label className={styles.agreement}>
                  <input type="checkbox" required />
                  <span>
                    Saya memahami bahwa checkout ini adalah permintaan pesanan.
                    Harga final akan dikonfirmasi setelah kebutuhan diperiksa.
                  </span>
                </label>

                <button className={styles.submit} type="submit">
                  Kirim Permintaan Pesanan →
                </button>
              </form>
            )}

            {submittedText && (
              <div className={styles.result}>
                <div className={styles.resultHead}>
                  <div>
                    <span>RINGKASAN PESANAN</span>
                    <h2>Pesanan sudah disusun.</h2>
                  </div>
                  <button type="button" onClick={copySummary}>
                    {copied ? "Tersalin ✓" : "Salin"}
                  </button>
                </div>
                <pre>{submittedText}</pre>
              </div>
            )}
          </section>

          <aside className={styles.summary}>
            <div className={styles.summaryHead}>
              <div>
                <span>RINGKASAN</span>
                <h2>{items.length} jasa dipilih</h2>
              </div>
              {items.length > 0 && (
                <button type="button" onClick={clearCart}>
                  Kosongkan
                </button>
              )}
            </div>

            {!items.length ? (
              <p className={styles.noItems}>Keranjang masih kosong.</p>
            ) : (
              <div className={styles.groupList}>
                {Object.entries(grouped).map(([title, serviceItems]) => (
                  <div className={styles.group} key={title}>
                    <strong>{title}</strong>
                    {serviceItems.map((item) => {
                      const index = items.findIndex(
                        (x) =>
                          x.serviceSlug === item.serviceSlug &&
                          x.itemId === item.itemId
                      );
                      return (
                        <div className={styles.lineItem} key={`${item.serviceSlug}-${item.itemId}`}>
                          <span>{item.itemName}</span>
                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            aria-label={`Hapus ${item.itemName}`}
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            <div className={styles.priceInfo}>
              <span>ESTIMASI HARGA</span>
              <strong>Dikonfirmasi setelah review</strong>
              <p>
                Ruang lingkup dan harga dikonfirmasi setelah kebutuhan diperiksa.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
