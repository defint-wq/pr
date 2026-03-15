"use client"

import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/hero-section"
import { AtomicStructureSection } from "@/components/sections/atomic-structure-section"
import { ChemicalPropertiesSection } from "@/components/sections/chemical-properties-section"
import { CompoundsSection } from "@/components/sections/compounds-section"
import { ApplicationsSection } from "@/components/sections/applications-section"
import { ConclusionSection } from "@/components/sections/conclusion-section"
import { Navigation } from "@/components/navigation"

export default function PraseodymiumPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AtomicStructureSection />
      <ChemicalPropertiesSection />
      <CompoundsSection />
      <ApplicationsSection />
      <ConclusionSection />
    </main>
  )
}
