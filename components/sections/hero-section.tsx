"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const ElementTile3D = dynamic(
  () =>
    import("@/components/3d/element-tile-3d").then((mod) => ({
      default: mod.ElementTile3D,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  },
);

const facts = [
  { label: "Атомын дугаар", value: "59" },
  { label: "Атом масс", value: "140.91 u" },
  { label: "Үе", value: "6" },
  { label: "Бүлэг", value: "Лантаноид" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 sm:pt-32 relative flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                Газрын ховор элемент
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary">Празеодимиум</span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground max-w-lg text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Лантаноидын цувралд багтах, мөнгөлөг цагаан өнгийн ховор шороон
                металл болох 59-р элементийн сонирхол татам шинж чанарыг танин
                мэдээрэй. Түүний ногоон өнгийн давснаас улбаалж уг элементэд
                Грекийн ‘ногоон ихэр’ гэсэн утгатай нэрийг өгсөн байдаг.
              </motion.p>
            </div>

            {/* Quick facts grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-sm text-muted-foreground">
                    {fact.label}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {fact.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Discovery info */}
            <motion.div
              className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Элементийн нээлт
              </h3>
              <p className="text-muted-foreground text-justify">
                1885 онд Австрийн Вена хотод химич Карл Ауэр фон Вельсбах празеодимиум элементийг
                нээсэн. Тэрээр фракцийн талсжуулалтын аргыг ашиглан ‘дидими’
                хэмээх материалаас празеодим болон неодим элементүүдийг ялган
                гаргаж авсан байна.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Element */}
          <motion.div
            className="h-[500px] md:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ElementTile3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
