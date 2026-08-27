"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface ProductItem {
  title: string;
  link: string;
  thumbnail: string;
}

export const HeroParallax = ({
  products = defaultReferenceProducts,
  headerTitle,
  headerDescription,
}: {
  products?: ProductItem[];
  headerTitle?: React.ReactNode;
  headerDescription?: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-28 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#0A0A0A] text-white"
    >
      <Header title={headerTitle} description={headerDescription} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-20 mb-12 sm:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-20 space-x-12 sm:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 sm:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({
  title,
  description,
}: {
  title?: React.ReactNode;
  description?: string;
}) => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-28 px-6 w-full left-0 top-0 z-20">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-4">
        <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
        <span>GURUR DUYDUĞUMUZ İŞLERİMİZ</span>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
        {title || (
          <>
            Referanslarımız & <br />
            <span className="text-[#E50914]">Tamamlanan Projeler</span>
          </>
        )}
      </h1>
      <p className="max-w-3xl text-sm sm:text-base md:text-xl mt-6 text-gray-300 font-normal leading-relaxed">
        {description ||
          "Kurumsal SaaS platformları, yüksek performanslı mobil uygulamalar, e-ticaret altyapıları ve Tier III sunucu sistemleri ile başarıya ulaştırdığımız dijital projeler."}
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 sm:h-96 w-[22rem] sm:w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900 cursor-pointer"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full w-full relative"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
          unoptimized
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-85 bg-gradient-to-t from-black via-black/60 to-transparent transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
        <h2 className="text-xl font-extrabold text-white drop-shadow-md">
          {product.title}
        </h2>
        <span className="text-xs text-[#E50914] font-bold mt-1">Projeyi İncele →</span>
      </div>
    </motion.div>
  );
};

export const defaultReferenceProducts: ProductItem[] = [
  {
    title: "Global Lojistik & Filo Takip Portalı",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "B2B Endüstriyel E-Ticaret Platformu",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0a67e5572293?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Kurumsal Sigorta & Finans Mobil Uygulaması",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Pazaryeri & GİB E-Fatura Köprüsü",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Yapay Zekâ Destekli Şirket İçi RAG Asistanı",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Tier III İstanbul Bulut Veri Merkezi Portalı",
    link: "/kurumsal/iletisim",
    thumbnail: "/server-rack.png",
  },
  {
    title: "SaaS Abonelik & Faturalandırma Motoru",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Restoran & Zincir Şube Sipariş Otomasyonu",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Otel Rezervasyon & Channel Manager Entegrasyonu",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Gelişmiş Analitik & İş Zekası Dashboard",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Sağlık & Klinik Randevu Takip Sistemi",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Sanal POS & Anlık Ödeme Gateway API",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Eğitim & LMS Uzaktan Öğrenme Portalı",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Gayrimenkul & CRM Portföy Yönetimi",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "DevOps, Kubernetes & Mikroservis Mimarisi",
    link: "/kurumsal/iletisim",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
  },
];

export default HeroParallax;
