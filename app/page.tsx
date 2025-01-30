import About from "@/components/AboutSection/About";
import Catalog from "@/components/CatalogSection/Catalog";
import Discounts from "@/components/DiscountsSection/Discounts";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroSection/Hero";
import Middle from "@/components/Midlle/Middle";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Discounts />
      <Middle>
        <div className="text-center text-2xl py-6">
          Вкуснейшие вкусняшки по адресу Уманская 54, павильон IOO (ТЦ ГЛОБО)
        </div>
      </Middle>
      <Catalog />
      <Middle>
        <div className="text-center text-2xl py-6">Наш инстаграм: YY</div>
      </Middle>
      <About />
      <Footer />
    </div>
  );
}
