"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { ServiceData } from "../lib/services";
import styles from "./ServiceLanding.module.css";

type CartItem = {
  serviceSlug: string;
  serviceTitle: string;
  itemId: string;
  itemName: string;
};

const CART_KEY = "batara_project_cart";

export default function ServiceLanding({ service }: { service: ServiceData }) {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const items: CartItem[] = raw ? JSON.parse(raw) : [];
      setCartCount(items.length);
      setSelected(
        items
          .filter((x) => x.serviceSlug === service.slug)
          .map((x) => x.itemId)
      );
    } catch {
      setCartCount(0);
    }
  }, [service.slug]);

  const selectedItems = useMemo(
    () => service.items.filter((x) => selected.includes(x.id)),
    [selected, service.items]
  );

  function toggle(itemId: string) {
    setSelected((current) =>
      current.includes(itemId)
        ? current.filter((id) => id !== itemId)
        : [...current, itemId]
    );
  }

  function selectAll() {
    setSelected(service.items.map((x) => x.id));
  }

  function saveAndCheckout() {
    if (!selected.length) return;

    let existing: CartItem[] = [];
    try {
      existing = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    } catch {
      existing = [];
    }

    const otherServices = existing.filter(
      (x) => x.serviceSlug !== service.slug
    );

    const newItems: CartItem[] = selectedItems.map((item) => ({
      serviceSlug: service.slug,
      serviceTitle: service.title,
      itemId: item.id,
      itemName: item.name,
    }));

    const finalCart = [...otherServices, ...newItems];
    localStorage.setItem(CART_KEY, JSON.stringify(finalCart));
    setCartCount(finalCart.length);
    router.push("/checkout");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container + " " + styles.headerInner}>
          <a href="/" className={styles.brand}>
            <span className={styles.brandLogo}>
              <img src="/logo-batara.jpg" alt="Batara Project" />
            </span>
            <span>
              <strong>BATARA PROJECT</strong>
              <small>Partner Digital untuk Pengembangan Usaha</small>
            </span>
          </a>

          <div className={styles.headerActions}>
            <a href="/#layanan" className={styles.backLink}>Semua Layanan</a>
            <a href="/checkout" className={styles.cartButton}>
              Checkout
              {cartCount > 0 && <b>{cartCount}</b>}
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container + " " + styles.heroGrid}>
            <div>
              <span className={styles.kicker}>
                {service.number} / {service.eyebrow}
              </span>
              <h1>{service.headline}</h1>
              <p>{service.description}</p>

              <div className={styles.heroActions}>
                <a href="#pilih-jasa" className={styles.primaryButton}>
                  Lihat Rincian Jasa
                </a>
                <a href="/#layanan" className={styles.secondaryButton}>
                  Kembali ke Layanan
                </a>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <span className={styles.panelLabel}>COCOK UNTUK</span>
              <div className={styles.suitableGrid}>
                {service.suitableFor.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.panelNote}>
                <strong>Tidak harus mengambil semuanya.</strong>
                <p>Pilih satu atau beberapa jasa yang memang dibutuhkan.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="pilih-jasa">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <div>
                <span className={styles.sectionLabel}>RINCIAN JASA</span>
                <h2>Pilih layanan yang Anda perlukan.</h2>
              </div>
              <div className={styles.sectionHeadAction}>
                <button type="button" onClick={selectAll}>
                  Pilih Semua
                </button>
                <span>{selected.length} dipilih</span>
              </div>
            </div>

            <div className={styles.itemGrid}>
              {service.items.map((item) => {
                const active = selected.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggle(item.id)}
                    className={`${styles.itemCard} ${active ? styles.active : ""}`}
                  >
                    <div className={styles.itemTop}>
                      <span className={styles.checkbox}>
                        {active ? "✓" : ""}
                      </span>
                      <span className={styles.chooseText}>
                        {active ? "Dipilih" : "Pilih"}
                      </span>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </button>
                );
              })}
            </div>

            <div className={styles.checkoutBar}>
              <div>
                <span>PILIHAN ANDA</span>
                <strong>
                  {selected.length
                    ? `${selected.length} jasa dipilih`
                    : "Belum ada jasa dipilih"}
                </strong>
                <small>
                  Harga final dikonfirmasi setelah kebutuhan diperiksa.
                </small>
              </div>
              <button
                type="button"
                disabled={!selected.length}
                onClick={saveAndCheckout}
              >
                Lanjut Checkout →
              </button>
            </div>
          </div>
        </section>

        <section className={styles.softSection}>
          <div className={styles.container}>
            <div className={styles.simpleHead}>
              <span className={styles.sectionLabel}>PROSES PENGERJAAN</span>
              <h2>Dari kebutuhan sampai siap digunakan.</h2>
            </div>

            <div className={styles.processGrid}>
              {service.process.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container + " " + styles.faqLayout}>
            <div>
              <span className={styles.sectionLabel}>FAQ</span>
              <h2>Pertanyaan yang sering muncul.</h2>
              <p>
                Jika kebutuhan Anda berbeda, jelaskan saja pada bagian catatan
                saat checkout.
              </p>
            </div>

            <div className={styles.faqList}>
              {service.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container + " " + styles.footerInner}>
          <span>© 2026 Batara Project</span>
          <a href="/checkout">Lanjut ke Checkout →</a>
        </div>
      </footer>
    </>
  );
}
