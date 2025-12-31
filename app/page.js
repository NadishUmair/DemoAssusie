"use client"

import { Button } from "@/app/component/ui/button"
import { Input } from "@/app/component/ui/input"
import { ArrowRight, Building2, Users, Award } from "lucide-react"
import { useState } from "react"
import Countdown from "./component/countDown"

function page() {



  return (
    <div className="relative flex min-h-screen flex-col text-black ">
      {/* Grid background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(218,165,32,0.08),transparent_50%)]" />

      {/* Top navigation */}
      <nav className="relative z-10 flex items-center justify-between border-b border-border px-6 py-5 lg:px-12">
        <div className="flex items-center gap-2">
        
          <span className="font-sans  font-medium tracking-tight ">
              <img
    src="/Assets/logoarabic.jpeg"
    alt="Logo"
    className="h-18 w-30"
  />
          </span>
        </div>
        {/* <div className="text-sm ">Australia</div> */}
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 lg:px-8">
        <div className="w-full max-w-5xl">
          {/* Status badge */}
          <div className="mb-16 flex justify-center">
            <div className="inline-flex items-center gap-3 border border-secondary/30 bg-secondary/10 px-6 py-3 backdrop-blur-sm">
<div className="h-4 w-4 animate-pulse rounded-full bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] shadow-[0_0_16px_rgba(212,175,55,0.9)]" />

              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] ">
                Coming Soon
              </span>
                <Countdown days={30} />
            </div>
             
          </div>

          {/* Hero heading */}
  <h1 className="mb-10 text-center font-sans text-6xl font-normal leading-[1.05] tracking-tight text-balance sm:text-7xl lg:text-8xl">
  Building the
  <br />
  <span className="inline-block bg-gradient-to-r from-[#8B6A1F] via-[#D4AF37] to-[#8B6A1F] bg-clip-text text-transparent">
    future of
  </span>
  <br />
  construction
</h1>

          {/* Description */}
          <p className="mx-auto mb-16 max-w-2xl text-center font-sans text-lg leading-relaxed  sm:text-xl">
            Where Australian engineering excellence meets Australian vision. We deliver world-class infrastructure
            projects that shape skylines and build legacies.
          </p>

      

          {/* Feature cards */}
          <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
            <div className="group  p-10 transition-colors hover:bg-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-border bg-card transition-all group-hover:border-secondary group-hover:bg-secondary/10 group-hover:shadow-[0_0_16px_rgba(218,165,32,0.2)]">
                <Building2 className="h-5 w-5  transition-colors group-hover:text-secondary" />
              </div>
              <h3 className="mb-3 font-sans text-base font-medium ">World-Class Projects</h3>
              <p className="font-sans text-sm leading-relaxed ">
                Delivering iconic infrastructure that stands the test of time across the Middle East
              </p>
            </div>
            <div className="group  p-10 transition-colors hover:bg-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-border bg-card transition-all group-hover:border-secondary group-hover:bg-secondary/10 group-hover:shadow-[0_0_16px_rgba(218,165,32,0.2)]">
                <Users className="h-5 w-5  transition-colors group-hover:text-secondary" />
              </div>
              <h3 className="mb-3 font-sans text-base font-medium ">Expert Team</h3>
              <p className="font-sans text-sm leading-relaxed ">
                Australian engineering expertise combined with local Saudi market knowledge
              </p>
            </div>
            <div className="group  p-10 transition-colors hover:bg-card">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-border bg-card transition-all group-hover:border-secondary group-hover:bg-secondary/10 group-hover:shadow-[0_0_16px_rgba(218,165,32,0.2)]">
                <Award className="h-5 w-5  transition-colors group-hover:text-secondary" />
              </div>
              <h3 className="mb-3 font-sans text-base font-medium ">Quality Assured</h3>
              <p className="font-sans text-sm leading-relaxed ">
                ISO-certified processes ensuring excellence in every project we undertake
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border px-6 py-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm ">© 2025 AussieSolutions-KSA. All rights reserved.</p>
          <div className="flex items-center gap-8 text-sm ">
            <span className="transition-colors hover:">Australia</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span className="transition-colors hover:">Australia</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page;