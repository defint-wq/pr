"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ExternalLink,
  Sparkles,
  Atom,
  Zap,
  Globe,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const FinalAtom3D = dynamic(
  () =>
    import("@/components/3d/final-atom-3d").then((mod) => ({
      default: mod.FinalAtom3D,
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

const highlights = [
  {
    icon: Atom,
    title: "Чухал элемент",
    description:
      "Орчин үеийн технологид зайлшгүй шаардлагатай 17 ховор газрын элементүүдийн нэг",
  },
  {
    icon: Zap,
    title: "Эрэлт өсөх хандлага",
    description:
      "Цэвэр эрчим хүч ба цахилгаан тээврийн хэрэгсэлд нэмэгдэж буй ач холбогдол",
  },
  {
    icon: Globe,
    title: "Дэлхийн түвшний нөлөө",
    description:
      "Бидний өдөр тутмын амьдралыг тодорхойлдог технологид ашиглагддаг",
  },
];

const futureTopics = [
  "Pr-д суурилсан илүү үр ашигтай мөнхийн соронз хөгжүүлэлт",
  "Квантын тооцоололд зориулсан дэвшилтэт оптик материалууд",
  "Тогтвортой олборлолт ба дахин боловсруулах аргачлалууд",
  "Дараагийн үеийн агаарын тээврийн хайлш",
  "Эрчим хүч хадгалах хэрэглээг сайжруулах",
];

const Source = [
  "EURO LAB Элементийн шинжилгээ - Празеодиум",
  "Wikipedia Празодиум",
  "Rare Earths The Element Praseodymium",
];

const periodicTableRow = [
  { symbol: "La", name: "Лантан", number: 57 },
  { symbol: "Ce", name: "Церий", number: 58 },
  { symbol: "Pr", name: "Празеодим", number: 59, highlighted: true },
  { symbol: "Nd", name: "Неодим", number: 60 },
  { symbol: "Pm", name: "Прометий", number: 61 },
  { symbol: "Sm", name: "Самарий", number: 62 },
  { symbol: "Eu", name: "Европиум", number: 63 },
];

export function ConclusionSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="conclusion"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Дүгнэлт</span> ба ирээдүйд
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Празеодим нь орчин үеийн технологийн суурь элемент бөгөөд ирэх хэдэн
            арван жилд түүний ач холбогдол улам нэмэгдэх төлөвтэй байна
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Final 3D visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border"
          >
            <FinalAtom3D />
          </motion.div>

          {/* Summary content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key takeaway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-primary/10 border border-primary/30"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">
                  Ерөнхий дүгнэлт
                </span>
              </div>
              <p className="text-foreground">
                Празеодим нь ховор шороон элементүүдийн нэг бөгөөд химийн
                идэвхтэй, олон төрлийн нэгдэл үүсгэдэг. Орчин үеийн дэвшилтэт
                технологийн материал, оптик болон соронзон төхөөрөмжүүдэд чухал
                үүрэг гүйцэтгэдэг элемент юм.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Periodic table highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
            Празеодим Лантанойдын цувралд
          </h3>
          <div className="flex justify-center gap-2 overflow-x-auto py-4">
            {periodicTableRow.map((element, index) => (
              <motion.div
                key={element.symbol}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`min-w-[80px] p-3 rounded-xl text-center transition-all ${
                  element.highlighted
                    ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30"
                    : "bg-card/50 border border-border hover:border-primary/50"
                }`}
                animate={
                  element.highlighted
                    ? {
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                          "0 0 20px 5px rgba(34, 197, 94, 0.3)",
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.1,
                  duration: 2,
                  repeat: element.highlighted ? Infinity : 0,
                }}
              >
                <div
                  className={`text-xs ${element.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {element.number}
                </div>
                <div
                  className={`text-2xl font-bold ${element.highlighted ? "text-primary-foreground" : "text-foreground"}`}
                >
                  {element.symbol}
                </div>
                <div
                  className={`text-xs truncate ${element.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                >
                  {element.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future research */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Ирээдүйн судалгааны чиглэлүүд
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-background/50"
              >
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-sm text-accent flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">
            Эх сурвалжууд
          </h3>
          <div className="text-sm text-muted-foreground grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
            <a
              href="https://www.eurolab.net/mn/testler/element-analizleri/element-analizleri-praseodimyum-(pr)/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline gap-1 flex items-center flex-row"
            >
              EURO LAB Элементийн шинжилгээ - Празеодиум
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Praseodymium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline gap-1 flex items-center flex-row"
            >
              Wikipedia Празодиум
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://rareearths.com/praseodymium/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline gap-1 flex items-center flex-row"
            >
              Rare Earths The Element Praseodymium
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Дээш буцах
          </Button>

          <div className="pt-8 border-t border-border mb-16">
            <p className="text-muted-foreground mb-4">
              Бидний танилцуулгыг сонирхсонд баярлалаа.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="mailto:24B1NUM0616@stud.num.edu.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                Э. Баттамир <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="mailto:25B1NUM1845@stud.num.edu.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                З. Маргад <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="text-muted-foreground grid grid-cols-4">
            <div>Монгол Улсын Их Сургууль</div>
            <div>Шинжлэх Ухааны Сургууль</div>
            <div>Байгалийн Ухааны Салбар</div>
            <div>Химийн тэнхим</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
