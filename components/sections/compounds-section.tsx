"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Beaker,
  FlaskConical,
  Atom,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const MoleculeViewer = dynamic(
  () =>
    import("@/components/3d/molecule-viewer").then((mod) => ({
      default: mod.MoleculeViewer,
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

interface Compound {
  id: string;
  name: string;
  formula: string;
  description: string;
  properties: string[];
  uses: string[];
  color: string;
  structure: "oxide" | "chloride" | "fluoride";
}

const compounds: Compound[] = [
  {
    id: "oxide",
    name: "Празеодимын оксид",
    formula: "Pr₂O₃ / Pr₆O₁₁",
    description:
      "Празеодим нь хүчилтөрөгчтэй урвалд орж үүсдэг хар эсвэл хар ногоон нунтаг. Хамгийн түгээмэл хэлбэр нь Pr₆O₁₁ юм.",
    properties: [
      "Өнгө нь хараас хар ногоон",
      "Хайлах температур нь 2,183°C",
      "Нягт нь 6.88 г/см³",
      "Усанд уусдаггүй",
    ],
    uses: [
      "Керамик будаг",
      "Шил өнгөлгөө",
      "Катализаторын хэрэглээ",
      "Хатуу оксидын түлш",
    ],
    color: "#1a1a1a",
    structure: "oxide",
  },
  {
    id: "chloride",
    name: "Празеодимын хлорид",
    formula: "PrCl₃",
    description:
      "Усанд сайн уусдаг ногоон кристал бүтэцтэй нэгдэл. Празеодимын химийн процессын чухал зуучлагч бодис юм.",
    properties: [
      "Ногоон кристал бүтэцтэй хатуу бодис",
      "Хайлах температур нь 786°C",
      "Чийгийг шингээдэг",
      "Ус болон этанолд уусдаг",
    ],
    uses: [
      "Бусад Pr нэгдлүүдийн гарал үүсвэр",
      "Катализатор бэлтгэх",
      "Судалгааны хэрэглээ",
      "Оптик материалууд",
    ],
    color: "#22c55e",
    structure: "chloride",
  },
  {
    id: "fluoride",
    name: "Празеодимын фторид",
    formula: "PrF₃",
    description:
      "Бусад празеодимын галогенидээс харьцангуй идэвх багатай ногоон хатуу бодис. Тусгай оптик хэрэглээнд ашиглагддаг.",
    properties: [
      "Ногоон хатуу бодис",
      "Хайлах цэг нь 1,395°C",
      "Усанд бага уусдаг",
      "Өндөр халуунд тогтвортой",
    ],
    uses: [
      "Шилэн оптик өсгөгч",
      "Фторит шил",
      "Лазерын хэрэглээ",
      "Металлургийн флюс",
    ],
    color: "#4ade80",
    structure: "fluoride",
  },
];

export function CompoundsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const activeCompound = compounds[activeIndex];

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      if (newDirection === 1) {
        return prev === compounds.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? compounds.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="compounds" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Чухал</span> нэгдлүүд
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Празеодимын чухал нэгдлүүдийг 3D молекулын бүтэцтэйгээр судлаарай.
            Атомын зохион байгуулалтыг шалгахын тулд эргүүлж, томруулж болно.
          </p>
        </motion.div>

        {/* Compound selector tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {compounds.map((compound, index) => (
            <motion.button
              key={compound.id}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${
                index === activeIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-card/50 text-muted-foreground hover:bg-card border border-border"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {index === 0 && <Atom className="w-4 h-4" />}
              {index === 1 && <Beaker className="w-4 h-4" />}
              {index === 2 && <FlaskConical className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {compound.name.split(" ")[1]}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* 3D Molecule Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border relative"
          >
            <MoleculeViewer compound={activeCompound.structure} />

            {/* Navigation arrows */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate(-1)}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => navigate(1)}
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Compound info */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCompound.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <motion.h3
                  className="text-3xl font-bold mb-2 text-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {activeCompound.name}
                </motion.h3>
                <motion.div
                  className="text-2xl font-mono text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {activeCompound.formula}
                </motion.div>
              </div>

              <motion.p
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {activeCompound.description}
              </motion.p>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Шинж чанар
                  </h4>
                  <ul className="space-y-2">
                    {activeCompound.properties.map((prop, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-3 text-foreground">
                    Хэрэглээ
                  </h4>
                  <ul className="space-y-2">
                    {activeCompound.uses.map((use, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Compound color indicator */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 border-border"
                  style={{ backgroundColor: activeCompound.color }}
                />
                <span className="text-sm text-muted-foreground">
                  Онцлох өнгө
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Compound comparison */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
            Compound Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">
                    Property
                  </th>
                  {compounds.map((c) => (
                    <th
                      key={c.id}
                      className="text-center py-3 px-4 text-muted-foreground font-medium"
                    >
                      {c.formula.split("/")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">State</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Solid (powder)
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Crystalline
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Solid
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">
                    Water Solubility
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Insoluble
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    High
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Low
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-foreground">Primary Use</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Pigments
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Synthesis
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    Optics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
