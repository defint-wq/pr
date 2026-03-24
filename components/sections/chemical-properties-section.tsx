"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Magnet, Thermometer, Droplets } from "lucide-react";
import dynamic from "next/dynamic";

const OrbitalVisualization = dynamic(
  () =>
    import("@/components/3d/orbital-visualization").then((mod) => ({
      default: mod.OrbitalVisualization,
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

const properties = [
  {
    icon: Zap,
    title: "Исэлдэлтийн төлөв (Oxidation States)",
    value: "+3, +4",
    description:
      "+3 төлөв нь хамгийн тогтвортой, зарим нэгдлүүдэд +4 үүсгэж болно. +3 төлөв нь ховор шороон металл (lanthanide) элементүүдийн онцлог шинж юм.",
  },
  {
    icon: Droplets,
    title: "Идэвхжилт (Reactivity)",
    value: "Дунд зэрэг",
    description:
      "Өрөөний температурт хүчилтөрөгчтэй удаан урвалд орно, халуунд хурдан урвалд ордог. Pr₂O₃ исэл үүсгэдэг.",
  },
  {
    icon: Magnet,
    title: "Соронзон шинж чанар (Magnetic Properties)",
    value: "Парамагнетик",
    description:
      "Тэгш бус 4f электроноос үүдэлтэй парамагнетик шинж үзүүлдэг. Соронзонд ашиглагддаг.",
  },
  {
    icon: Thermometer,
    title: "Хайлах температур",
    value: "931°C",
    description:
      "Ховор шороон металл дундаас харьцангуй бага хайлах температуртай. Буцлах цэг нь 3,520°C.",
  },
];
const electronConfig = [
  { orbital: "1s", electrons: 2, filled: true },
  { orbital: "2s", electrons: 2, filled: true },
  { orbital: "2p", electrons: 6, filled: true },
  { orbital: "3s", electrons: 2, filled: true },
  { orbital: "3p", electrons: 6, filled: true },
  { orbital: "3d", electrons: 10, filled: true },
  { orbital: "4s", electrons: 2, filled: true },
  { orbital: "4p", electrons: 6, filled: true },
  { orbital: "4d", electrons: 10, filled: true },
  { orbital: "4f", electrons: 3, filled: false },
  { orbital: "5s", electrons: 2, filled: true },
  { orbital: "5p", electrons: 6, filled: true },
  { orbital: "6s", electrons: 2, filled: true },
];

const periodicTableHighlight = [
  ["H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He"],
  [
    "Li",
    "Be",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "B",
    "C",
    "N",
    "O",
    "F",
    "Ne",
  ],
  [
    "Na",
    "Mg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Al",
    "Si",
    "P",
    "S",
    "Cl",
    "Ar",
  ],
  [
    "K",
    "Ca",
    "Sc",
    "Ti",
    "V",
    "Cr",
    "Mn",
    "Fe",
    "Co",
    "Ni",
    "Cu",
    "Zn",
    "Ga",
    "Ge",
    "As",
    "Se",
    "Br",
    "Kr",
  ],
  [
    "Rb",
    "Sr",
    "Y",
    "Zr",
    "Nb",
    "Mo",
    "Tc",
    "Ru",
    "Rh",
    "Pd",
    "Ag",
    "Cd",
    "In",
    "Sn",
    "Sb",
    "Te",
    "I",
    "Xe",
  ],
  [
    "Cs",
    "Ba",
    "*",
    "Hf",
    "Ta",
    "W",
    "Re",
    "Os",
    "Ir",
    "Pt",
    "Au",
    "Hg",
    "Tl",
    "Pb",
    "Bi",
    "Po",
    "At",
    "Rn",
  ],
];

const lanthanides = [
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
];

export function ChemicalPropertiesSection() {
  const [activeOrbital, setActiveOrbital] = useState<string>("4f");

  return (
    <section id="properties" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">Шинж</span> Чанарууд
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Празеодимиумын химийн шинж чанар, электроны зохион байгуулалт,
            үйлдлийн төлөв болон онцгой шинж чанаруудыг судалж ойлгох уу ?
          </p>
        </motion.div>
        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {properties.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <prop.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-foreground">
                {prop.title}
              </h3>
              <div className="text-2xl font-bold text-accent mb-2">
                {prop.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Orbital Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <div className="p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                Орбиталын дүрслэл
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">
                Орбитал дээр дарж хөдөлгөж томруулж харж болно. 4f орбиталууд нь
                Празеодимиумын онцгой шинж чанарт чухал үүрэгтэй.
              </p>
              <div className="w-full aspect-square md:h-[250px] rounded-lg overflow-hidden bg-background/50">
                <OrbitalVisualization orbital={activeOrbital} />
              </div>
            </div>

            {/* Electron Configuration */}
            <div className="p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                Электрон зохион байгуулалт
              </h3>
              <div className="flex flex-wrap gap-2">
                {electronConfig.map((config) => (
                  <motion.button
                    key={config.orbital}
                    onClick={() => setActiveOrbital(config.orbital)}
                    className={`px-2 md:px-3 py-1 md:py-2 rounded-lg text-xs md:text-sm font-mono transition-all ${
                      activeOrbital === config.orbital
                        ? "bg-accent text-accent-foreground"
                        : config.filled
                          ? "bg-secondary text-secondary-foreground hover:bg-accent/20"
                          : "bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {config.orbital}
                    <sup>{config.electrons}</sup>
                  </motion.button>
                ))}
              </div>
              <div className="mt-2 md:mt-4 text-xs md:text-sm text-muted-foreground">
                <span className="text-primary">Онцлон тэмдэглэсэн:</span>{" "}
                Валентын электронууд (4f³ 6s²)
              </div>
            </div>
          </motion.div>

          {/* Periodic Table & Physical Properties */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {/* Position in Periodic Table */}
            <div className="p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                Үелэх хүснэгт дэх байрлал
              </h3>

              <div className="overflow-x-auto">
                <div className="min-w-[150px]">
                  {periodicTableHighlight.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex gap-0.5 mb-0.5">
                      {row.map((element, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`w-6 md:w-8 h-6 md:h-8 flex items-center justify-center text-[9px] md:text-xs font-medium rounded ${
                            element === ""
                              ? "bg-transparent"
                              : element === "*"
                                ? "bg-primary/30 text-primary"
                                : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {element === "*" ? "↓" : element}
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Lanthanide row */}
                  <div className="flex gap-0.5 mt-2 md:mt-4">
                    <div className="w-6 md:w-8 h-6 md:h-8" />
                    <div className="w-6 md:w-8 h-6 md:h-8" />
                    {lanthanides.map((element) => (
                      <motion.div
                        key={element}
                        className={`w-6 md:w-8 h-6 md:h-8 flex items-center justify-center text-[9px] md:text-xs font-medium rounded ${
                          element === "Pr"
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/20 text-primary"
                        }`}
                        animate={
                          element === "Pr"
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(34, 197, 94, 0)",
                                  "0 0 0 8px rgba(34, 197, 94, 0.3)",
                                  "0 0 0 0 rgba(34, 197, 94, 0)",
                                ],
                              }
                            : {}
                        }
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        {element}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm">
                <div>
                  <div className="text-muted-foreground">Үе</div>
                  <div className="text-lg md:text-xl font-bold text-foreground">
                    6
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Бүлэг</div>
                  <div className="text-lg md:text-xl font-bold text-primary">
                    Лантанид
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Блок</div>
                  <div className="text-lg md:text-xl font-bold text-foreground">
                    f-блок
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground">Төрөл</div>
                  <div className="text-lg md:text-xl font-bold text-foreground">
                    Газрын ховор
                  </div>
                </div>
              </div>
            </div>

            {/* Physical Properties */}
            <div className="p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-foreground">
                Физик шинж чанарууд{" "}
              </h3>
              <div className="space-y-2 md:space-y-4 text-xs md:text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Нягт</span>
                  <span className="font-mono text-foreground">6.77 гр/cм³</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Кристал бүтэц</span>
                  <span className="font-mono text-foreground">
                    Гексагональ, Кубик
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Харагдац</span>
                  <span className="font-mono text-foreground">
                    Цагаан саарал гялгар 
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">20°C-д төлөв</span>
                  <span className="font-mono text-foreground">Хатуу</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
