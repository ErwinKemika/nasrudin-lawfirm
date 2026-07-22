import { createFileRoute } from "@tanstack/react-router";
import {
  Scale,
  Building2,
  FileText,
  Briefcase,
  MapPin,
  Mail,
  Globe,
  Instagram,
  Linkedin,
  Phone,
  ChevronDown,
} from "lucide-react";
import { GlowEffect } from "@/components/ui/glow-effect";
import logoIcon from "../assets/branding/logo-icon.png";
import heroBanner from "../assets/branding/hero-banner.webp";
import heroBannerDesktop from "../assets/branding/hero-banner-desktop.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nasrudin Law Firm" },
      {
        name: "description",
        content:
          "Land Intelligence — Konsultasi hukum pertanahan & lahan di Jakarta, Indonesia.",
      },
      { property: "og:title", content: "Nasrudin Law Firm" },
      {
        property: "og:description",
        content:
          "Land Intelligence — Konsultasi hukum pertanahan & lahan di Jakarta, Indonesia.",
      },
    ],
  }),
  component: Index,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-8 mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
      {children}
    </span>
  );
}

import { useState } from "react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
}

function ServiceAccordion({
  item,
  isOpen,
  onToggle,
}: {
  item: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative w-full">
      <GlowEffect
        colors={["#27419A", "#61C6F1"]}
        mode="breathe"
        blur="soft"
        scale={0.96}
        duration={4.5}
        className="rounded-xl opacity-60"
      />
      <div className="relative w-full overflow-hidden rounded-xl">
        <button
          onClick={onToggle}
          className={`glow-blue-card flex w-full items-center gap-3.5 rounded-xl p-3.5 text-left outline-none ${
            isOpen ? "glow-blue-card--active" : ""
          }`}
        >
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              isOpen ? "bg-brand-accent/15" : "bg-white/[0.04]"
            }`}
          >
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-medium text-white/90">{item.title}</div>
            <div className="mt-0.5 text-[11px] leading-relaxed text-white/35">
              {item.subtitle}
            </div>
          </div>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 transition-all duration-300 ${
              isOpen ? "rotate-180 text-brand-accent" : "text-white/40"
            }`}
            strokeWidth={2}
          />
        </button>
        <div
          className="grid transition-all duration-300 ease-out"
          style={{
            gridTemplateRows: isOpen ? "1fr" : "0fr",
          }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-3.5 pb-3.5 pt-2 text-[12px] leading-relaxed text-white/50">
              {item.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialButton({ href, icon, label }: SocialButtonProps) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      className="glass-card flex flex-col items-center justify-center gap-2 rounded-xl py-4"
    >
      <div className="text-white/70">{icon}</div>
      <span className="text-[11px] font-medium text-white/60">{label}</span>
    </a>
  );
}

function Index() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [emailOpen, setEmailOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "law@nasrudin.id";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // clipboard unavailable, no-op
    }
  };

  return (
    <div className="bg-spotlight relative min-h-screen overflow-hidden font-inter">
      {/* Hero banner */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-cover bg-top opacity-90 md:hidden"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-[420px] bg-cover bg-center opacity-90 md:block"
        style={{ backgroundImage: `url(${heroBannerDesktop})` }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-transparent via-brand-bg/60 to-brand-bg" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.12]" />

      <main className="relative z-10 mx-auto flex max-w-[420px] flex-col items-center px-5 py-12">
        {/* Logo */}
        <div className="glass-card mb-5 h-[88px] w-[88px] rounded-full bg-white p-3">
          <img
            src={logoIcon}
            alt="Nasrudin Law Firm Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Firm name */}
        <h1 className="text-center font-playfair text-[22px] font-semibold uppercase leading-tight tracking-wide text-white">
          Nasrudin Law Firm
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
          Land Intelligence
        </p>

        {/* Divider */}
        <div className="my-6 h-px w-10 bg-white/10" />

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/6287884100200"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card shimmer-border group flex w-full items-center gap-3.5 rounded-xl p-4"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
            <WhatsAppIcon className="h-[22px] w-[22px] text-[#25D366]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-medium text-white transition-colors group-hover:text-brand-accent">
              Konsultasi via WhatsApp
            </div>
            <div className="mt-0.5 text-xs text-white/40">
              0878-84-100-200 · Respon cepat
            </div>
          </div>
        </a>

        {/* Layanan */}
        <SectionLabel>Layanan</SectionLabel>

        <div className="flex w-full flex-col gap-2.5">
          <ServiceAccordion
            item={{
              id: "dispute",
              icon: <Scale className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Land Dispute Resolution",
              subtitle: "Litigasi, PTUN, mediasi & negosiasi sengketa tanah",
              content:
                "Pendampingan hukum dalam penyelesaian sengketa pertanahan melalui litigasi di Pengadilan Negeri, Pengadilan Tata Usaha Negara (PTUN), mediasi, negosiasi, serta berbagai mekanisme penyelesaian sengketa di luar pengadilan. Setiap perkara ditangani dengan strategi hukum yang terukur untuk melindungi hak, kepentingan, dan kepastian hukum klien.",
            }}
            isOpen={openService === "dispute"}
            onToggle={() => setOpenService(openService === "dispute" ? null : "dispute")}
          />
          <ServiceAccordion
            item={{
              id: "administration",
              icon: <FileText className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Land Administration Services",
              subtitle: "Sertifikasi, peralihan hak & administrasi pertanahan",
              content:
                "Pendampingan hukum yang komprehensif dalam administrasi dan legalitas pertanahan, meliputi sertifikasi hak atas tanah, pendampingan transaksi peralihan hak (antara lain melalui jual beli, hibah, waris, lelang, tukar-menukar, pemasukan ke dalam perusahaan (inbreng), dan bentuk peralihan hak lainnya), pemecahan dan penggabungan bidang, pemberian, peningkatan, perpanjangan, serta pembaruan hak atas tanah, pengurusan Persetujuan Bangunan Gedung (PBG), serta berbagai layanan administrasi pertanahan lainnya. Setiap proses ditangani secara profesional dengan mengedepankan kepastian hukum dan perlindungan kepentingan klien.",
            }}
            isOpen={openService === "administration"}
            onToggle={() =>
              setOpenService(openService === "administration" ? null : "administration")
            }
          />
          <ServiceAccordion
            item={{
              id: "corporate",
              icon: <Building2 className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Corporate Land Services",
              subtitle: "Due diligence & pengelolaan aset lahan korporasi",
              content:
                "Pendampingan hukum strategis bagi perusahaan, investor, dan pengembang dalam pengelolaan aset pertanahan, meliputi legal due diligence, akuisisi lahan, kepatuhan regulasi, perlindungan aset, serta mitigasi risiko hukum. Setiap layanan dirancang untuk mendukung pengambilan keputusan yang tepat, memberikan kepastian hukum, dan melindungi keberlangsungan investasi maupun kegiatan usaha.",
            }}
            isOpen={openService === "corporate"}
            onToggle={() => setOpenService(openService === "corporate" ? null : "corporate")}
          />
          <ServiceAccordion
            item={{
              id: "integrated",
              icon: <Briefcase className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Integrated Legal Solutions",
              subtitle: "Solusi hukum korporasi, pidana khusus & bisnis terpadu",
              content:
                "Layanan hukum yang komprehensif bagi individu maupun korporasi di berbagai bidang hukum, meliputi litigasi korporasi, kepailitan dan PKPU, sengketa bisnis, hukum perbankan, merger dan akuisisi (M&A), penyusunan dan reviu kontrak, perpajakan, ketenagakerjaan, Hak Kekayaan Intelektual (HAKI), serta hukum pidana khusus, termasuk tindak pidana korupsi, tindak pidana pencucian uang (TPPU), tindak pidana perpajakan, tindak pidana perbankan, dan tindak pidana korporasi. Setiap layanan ditangani secara profesional dengan solusi hukum yang strategis dan efektif.",
            }}
            isOpen={openService === "integrated"}
            onToggle={() => setOpenService(openService === "integrated" ? null : "integrated")}
          />
        </div>

        {/* Lokasi */}
        <SectionLabel>Lokasi</SectionLabel>

        <a
          href="https://share.google/A35NpmgZ0QWhRBBsX"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group flex w-full items-center gap-3.5 rounded-xl p-4"
        >
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
            <MapPin className="h-5 w-5 text-brand-accent/80" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-medium text-white transition-colors group-hover:text-brand-accent">
              Kunjungi Kantor Kami
            </div>
            <div className="mt-0.5 text-xs text-white/40">
              Jakarta · Buka di Google Maps
            </div>
          </div>
        </a>

        {/* Temukan Kami */}
        <SectionLabel>Temukan Kami</SectionLabel>

        <div className="grid w-full grid-cols-3 gap-2.5">
          <SocialButton
            href="https://www.instagram.com/nasrudinlaw/"
            icon={<Instagram className="h-5 w-5" strokeWidth={1.5} />}
            label="Instagram"
          />
          <SocialButton
            href="https://nasrudin.id/"
            icon={<Globe className="h-5 w-5" strokeWidth={1.5} />}
            label="Website"
          />
          <SocialButton
            href="https://id.linkedin.com/in/nasrudin-law-4710a11aa"
            icon={<Linkedin className="h-5 w-5" strokeWidth={1.5} />}
            label="LinkedIn"
          />
        </div>

        <div className="relative mt-2.5 grid w-full grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => setEmailOpen((v) => !v)}
            className="glass-card flex items-center justify-center gap-2 rounded-xl py-3.5"
          >
            <Mail className="h-4 w-4 text-white/60" strokeWidth={1.5} />
            <span className="text-xs font-medium text-white/70">Email</span>
            <ChevronDown
              className={`h-3.5 w-3.5 text-white/40 transition-transform duration-300 ${emailOpen ? "rotate-180" : ""}`}
              strokeWidth={2}
            />
          </button>
          <a
            href="https://wa.me/6287884100200"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center justify-center gap-2 rounded-xl py-3.5"
          >
            <Phone className="h-4 w-4 text-white/60" strokeWidth={1.5} />
            <span className="text-xs font-medium text-white/70">WhatsApp</span>
          </a>

          {emailOpen && (
            <div className="glass-card absolute left-0 top-[calc(100%+8px)] z-20 flex w-full flex-col gap-2.5 rounded-xl p-3.5">
              <span className="select-all text-center text-sm font-medium text-white/90">
                {email}
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded-lg bg-white/[0.06] py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.1]"
                >
                  {emailCopied ? "Tersalin!" : "Salin Email"}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="rounded-lg bg-white/[0.06] py-2 text-center text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.1]"
                >
                  Buka Mail App
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-10">
          <p className="text-[11px] text-white/25">
            nasrudin.id · © 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
