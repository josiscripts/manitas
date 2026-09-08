import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { AppSection } from "@/components/landing/AppSection";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCta } from "@/components/landing/FinalCta";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const description =
  "Encuentra profesionales de confianza para las tareas de tu hogar con Manitas. Servicios rápidos, sencillos y seguros.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manitas | Servicios para tu hogar" },
      { name: "description", content: description },
      { property: "og:title", content: "Manitas | Servicios para tu hogar" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Manitas",
          slogan: "Tu casa en las mejores manos",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <AppSection />
        <Testimonials />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
