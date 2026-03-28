---
title: "The Atomic Lab: Interactive Elemental Sandbox"
summary: "An educational 2D physics simulation for exploring atomic properties, bonding, and states of matter directly in the browser."
date: 2024-05-15 # Data curentă sau când dorești
draft: false

# Etichete tehnice
tags:
  - JavaScript
  - HTML5 Canvas
  - Physics Simulation
  - Education
  - Chemistry

# Butoane de acțiune
links:
  - icon: flask
    icon_pack: fas
    name: "Launch Lab"
    url: "#atomic-lab-container" # Un link intern care duce direct la simulator

# Imaginea principală (poți pune o diagramă sau un screenshot mai târziu)
# image:
#   filename: featured.jpg
#   focal_point: Smart

# --- IMPORTANT ---
# Încărcăm scriptul specific pentru această pagină.
# Hugo Blox va folosi acest parametru pentru a injecta scriptul la finalul paginii.
scripts:
  - "atomic_lab.js"
---

Welcome to **The Atomic Lab**, an interactive physics-based simulation designed to visualize the fundamental properties of chemical elements. This project bridges the gap between theoretical chemistry and computational physics, providing a hands-on "sandbox" environment.

## 🔬 The Core Concept

The goal of this simulation is to represent atoms as 2D particles with real physical properties. Unlike a static periodic table, here you can interact with the elements to observe how their mass, temperature, and bonding capabilities define their behavior.

### What can you explore?
* **Atomic Mass:** Heavier atoms (like Zinc) behave differently than light ones (like Hydrogen).
* **Thermal Dynamics:** Increase the temperature to see solids melt and liquids turn into gases.
* **Chemical Bonding (WIP):** Watch atoms combine to form simple molecules.

## 🛠️ Launch the Simulation

Use the controls below to inject atoms into the chamber. You can drag them, heat them up, or just watch them interact.

<div id="atomic-lab-container" class="my-8 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-inner">
    
    <div id="lab-controls" class="flex flex-wrap gap-2 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
        <button onclick="addAtom('H')" class="px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-200 rounded-md text-sm font-mono hover:bg-sky-200">Inject H</button>
        <button onclick="addAtom('O')" class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md text-sm font-mono hover:bg-red-200">Inject O</button>
        <button onclick="addAtom('Zn')" class="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-sm font-mono hover:bg-slate-300">Inject Zn</button>
        <div class="flex-grow"></div>
        <button onclick="clearChamber()" class="px-3 py-1 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-200 rounded-md text-sm font-mono">Clear</button>
    </div>

    <canvas id="atomic-canvas" width="800" height="500" class="w-full h-auto bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800"></canvas>
    
    <div class="mt-4 flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-3">
        <label class="text-[10px] font-mono uppercase text-slate-500">System Temperature:</label>
        <input type="range" id="temp-slider" min="0.1" max="5" step="0.1" value="1" class="flex-grow">
        <span id="temp-value" class="text-xs font-mono font-bold w-8 text-red-500">1x</span>
    </div>

    <div class="mt-3 text-[11px] font-mono text-slate-400 dark:text-slate-500 text-right">
        ATOM_COUNT: <span id="atom-count">0</span> | STATE: ACTIVE
    </div>
</div>

---

## 💻 Under the Hood

The Atomic Lab is built entirely in **vanilla JavaScript** using the **HTML5 Canvas API**. I chose not to use external physics engines to demonstrate a fundamental understanding of Newton's laws of motion, collision detection (elastic), and particle system management.

The simulation includes a basic **Entity-Component-System (ECS)** architecture, making it easy to add new properties like electric charge or electronegativity in the future.

> **Research Connection:** This simulator will be extended to visualize the formation of wide-bandgap semiconductors like **Gallium Nitride (GaN)**, illustrating how epitaxial growth occurs at the atomic level.
