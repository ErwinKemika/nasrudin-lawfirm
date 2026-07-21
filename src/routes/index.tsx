import { createFileRoute } from "@tanstack/react-router";
import {
  Scale,
  Building2,
  FileText,
  Search,
  MapPin,
  Mail,
  Globe,
  Instagram,
  Linkedin,
  Phone,
  ChevronDown,
} from "lucide-react";
import logoIcon from "../assets/branding/logo-icon.png";
import heroBanner from "../assets/branding/hero-banner.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nasrudin Law Firm" },
      {
        name: "description",
        content:
          "Agrarian Law Intelligence — Konsultasi hukum pertanahan & lahan di Jakarta, Indonesia.",
      },
      { property: "og:title", content: "Nasrudin Law Firm" },
      {
        property: "og:description",
        content:
          "Agrarian Law Intelligence — Konsultasi hukum pertanahan & lahan di Jakarta, Indonesia.",
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
    <div className="w-full overflow-hidden rounded-xl">
      <button
        onClick={onToggle}
        className="glass-card flex w-full items-center gap-3.5 rounded-xl p-3.5 text-left"
      >
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.04]">
          {item.icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-medium text-white/90">{item.title}</div>
          <div className="mt-0.5 text-[11px] leading-relaxed text-white/35">
            {item.subtitle}
          </div>
        </div>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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

  return (
    <div className="bg-spotlight relative min-h-screen overflow-hidden font-inter">
      {/* Hero banner */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-cover bg-top opacity-90"
        style={{ backgroundImage: `url(${heroBanner})` }}
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
        <h1 className="text-center font-playfair text-[22px] font-semibold leading-tight tracking-wide text-white">
          Nasrudin Law Firm
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
          Agrarian Law Intelligence
        </p>

        {/* Divider */}
        <div className="my-6 h-px w-10 bg-white/10" />

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/6287884100200"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group flex w-full items-center gap-3.5 rounded-xl p-4"
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
              title: "Dispute Resolution & Litigasi",
              subtitle: "Penyelesaian sengketa pertanahan",
              content:
                "Penanganan sengketa kepemilikan tanah, batas wilayah, dan konflik penguasaan lahan — mulai dari analisis awal hingga pendampingan litigasi maupun non-litigasi.",
            }}
            isOpen={openService === "dispute"}
            onToggle={() => setOpenService(openService === "dispute" ? null : "dispute")}
          />
          <ServiceAccordion
            item={{
              id: "corporate",
              icon: <Building2 className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Corporate Land Services",
              subtitle: "Layanan lahan korporasi profesional",
              content:
                "Pendampingan akuisisi lahan korporat secara menyeluruh, termasuk analisis legalitas, negosiasi, dan kepastian hukum untuk transaksi bernilai tinggi.",
            }}
            isOpen={openService === "corporate"}
            onToggle={() => setOpenService(openService === "corporate" ? null : "corporate")}
          />
          <ServiceAccordion
            item={{
              id: "atr-bpn",
              icon: <FileText className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "ATR/BPN & Administrasi",
              subtitle: "Administrasi pertanahan & kepegawaian",
              content:
                "Pengurusan sertifikat tanah, pendaftaran hak, perizinan, dan berbagai kebutuhan administratif pertanahan secara profesional dan efisien.",
            }}
            isOpen={openService === "atr-bpn"}
            onToggle={() => setOpenService(openService === "atr-bpn" ? null : "atr-bpn")}
          />
          <ServiceAccordion
            item={{
              id: "ldd",
              icon: <Search className="h-[18px] w-[18px] text-white/55" strokeWidth={1.5} />,
              title: "Legal Due Diligence (LDD)",
              subtitle: "Audit kepatuhan hukum properti",
              content:
                "Audit hukum pertanahan komprehensif untuk meminimalkan risiko sebelum transaksi atau pengembangan proyek yang melibatkan aset tanah.",
            }}
            isOpen={openService === "ldd"}
            onToggle={() => setOpenService(openService === "ldd" ? null : "ldd")}
          />
        </div>

        {/* Lokasi */}
        <SectionLabel>Lokasi</SectionLabel>

        <a
          href="https://maps.google.com/?q=Nasrudin+Partners+Law+Firm+Jakarta"
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
            href="https://www.instagram.com/nasrudinlaw"
            icon={<Instagram className="h-5 w-5" strokeWidth={1.5} />}
            label="Instagram"
          />
          <SocialButton
            href="https://nasrudin.id"
            icon={<Globe className="h-5 w-5" strokeWidth={1.5} />}
            label="Website"
          />
          <SocialButton
            href="#"
            icon={<Linkedin className="h-5 w-5" strokeWidth={1.5} />}
            label="LinkedIn"
          />
        </div>

        <div className="mt-2.5 grid w-full grid-cols-2 gap-2.5">
          <a
            href="mailto:law@nasrudin.id"
            className="glass-card flex items-center justify-center gap-2 rounded-xl py-3.5"
          >
            <Mail className="h-4 w-4 text-white/60" strokeWidth={1.5} />
            <span className="text-xs font-medium text-white/70">Email</span>
          </a>
          <a
            href="https://wa.me/6287884100200"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center justify-center gap-2 rounded-xl py-3.5"
          >
            <Phone className="h-4 w-4 text-white/60" strokeWidth={1.5} />
            <span className="text-xs font-medium text-white/70">WhatsApp</span>
          </a>
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
