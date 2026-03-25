"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Magnet, Palette, Plane, Zap, Focus, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const ApplicationScene = dynamic(
  () =>
    import("@/components/3d/application-scene").then((mod) => ({
      default: mod.ApplicationScene,
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

interface Application {
  id: string;
  icon: typeof Magnet;
  title: string;
  description: string;
  details: string[];
  sceneType: "magnet" | "glass" | "aircraft" | "motor" | "laser";
}

const applications: Application[] = [
  {
    id: "magnets",
    icon: Magnet,
    title: "Мөнхийн Соронз",
    description:
      "Празеодимыг неодимтэй хослуулан хүчирхэг Pr–Nd соронз үүсгэдэг бөгөөд үүнийг төрөл бүрийн өндөр технологийн хэрэглээнд ашигладаг.",
    details: [
      "NdFeB соронзод 5%-ийн хүртэл Pr агуулагддаг",
      "Зэврэлтэд тэсвэртэй байдлыг сайжруулдаг",
      "Өндөр температурт ажиллах чадварыг дээшлүүлдэг",
      "Хатуу диск, спикер болон чихэвч зэрэгт ашиглагддаг",
    ],
    sceneType: "magnet",
  },
  {
    id: "glass",
    icon: Palette,
    title: "Шилний Өнгө",
    description:
      "Празеодимын нэгдлүүд шил ба керамикт шар-ногоон өнгө үүсгэдэг бөгөөд хамгаалалтын нүдний шилэнд ашиглагддаг. ",
    details: [
      "Дидимиум шил үүсгэдэг",
      "Шил хайлах үед гардаг натрийн шар гэрлийг шүүж, нүдийг хамгаалдаг",
      "Гагнуурын хамгаалалтын нүдний шилэнд ашиглагддаг",
      "Онцгой керамик глазур үүсгэдэг",
    ],
    sceneType: "glass",
  },
  {
    id: "aerospace",
    icon: Plane,
    title: "Агаарын Тээврийн Хайлш",
    description:
      "Празеодим нь нисэх онгоцны хөдөлгүүрт ашиглагддаг магнийн хайлшийн бат бөх байдал, өндөр температурт тэсвэрлэх чадварыг сайжруулдаг.",
    details: [
      "Өндөр температурт бат бөх байдлыг сайжруулдаг",
      "Mg хайлшийн урт хугацааны хэлбэр хувиралтыг багасгадаг",
      "Тийрэлтэт хөдөлгүүрийн эд ангиудад ашиглагддаг",
      "Уламжлалт хайлшуудтай харьцуулахад хөнгөн жинтэй",
    ],
    sceneType: "aircraft",
  },
  {
    id: "motors",
    icon: Zap,
    title: "Цахилгаан хөдөлгүүрүүд",
    description:
      "Празеодим агуулсан хайлшуудын соронзон шинж чанар нь өндөр үр ашигтай цахилгаан хөдөлгүүрт зайлшгүй шаардлагатай болгодог.",
    details: [
      "Цахилгаан тээврийн хэрэгслийн хөдөлгүүрүүд",
      "Салхин турбин генераторууд",
      "Үйлдвэрийн серво хөдөлгүүрүүд",
      "Өндөр хүчний нягтралтай хэрэглээ",
    ],
    sceneType: "motor",
  },
  {
    id: "lasers",
    icon: Focus,
    title: "Лазер ба Оптик",
    description:
      "Празеодимаар дэвсгэрлэсэн материалуудыг хатуу төлөвт лазер болон шилэн оптик өсгөгчид ашигладаг.",
    details: [
      "Pr:YLF лазерын кристалууд",
      "Шилэн оптик дохиог өсгөх",
      "Инфра улаан оптик материалууд",
      "Судалгаа болон эмнэлгийн лазерууд",
    ],
    sceneType: "laser",
  },
];

export function ApplicationsSection() {
  const [activeApp, setActiveApp] = useState(applications[0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="applications" className="min-h-screen py-20 relative">
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
            <span className="text-accent">Бодит</span> хэрэглээ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Хүчирхэг соронзноос агаарын тээврийн хайлш хүртэл, Празеодим нь
            орчин үеийн технологи ба үйлдвэрлэлд чухал үүрэг гүйцэтгэдэг.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Application cards */}
          <div className="lg:col-span-1 space-y-4">
            {applications.map((app, index) => (
              <motion.button
                key={app.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveApp(app)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full p-5 rounded-xl text-left transition-all ${
                  activeApp.id === app.id
                    ? "bg-primary/20 border-2 border-primary"
                    : "bg-card/50 border border-border hover:border-accent/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      activeApp.id === app.id ? "bg-primary/30" : "bg-secondary"
                    }`}
                  >
                    <app.icon
                      className={`w-6 h-6 ${
                        activeApp.id === app.id
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${
                        activeApp.id === app.id
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {app.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {app.description.split(".")[0]}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border"
          >
            <ApplicationScene type={activeApp.sceneType} />
          </motion.div>

          {/* Application details */}
          <motion.div
            key={activeApp.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <activeApp.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeApp.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {activeApp.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Гол хэрэглээ
                </h4>
                <ul className="space-y-2">
                  {activeApp.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
                <div className="text-3xl font-bold text-primary">$500M+</div>
                <div className="text-sm text-muted-foreground">
                  Празеодимын жилийн зах зээл{" "}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
                <div className="text-3xl font-bold text-accent">15%</div>
                <div className="text-sm text-muted-foreground">
                  Жилийн өсөлт
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
              <div className="text-sm text-primary">
                Цахилгаан тээврийн хэрэгслийн хэрэглээ нэмэгдэх болон сэргээгдэх
                эрчим хүчний өргөжилттэй холбоотойгоор Празеодимын эрэлт ихээхэн
                нэмэгдэх төлөвтэй байна.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
