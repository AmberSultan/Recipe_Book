"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Spaghetti Carbonara",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3BhZ2hldHRpfGVufDB8fDB8fHww",
  },
  {
    title: "Classic Beef Stroganoff",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1555658094-ca794654362c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xhc3NpYyUyMEJlZWZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Vegetable Stir Fry",
    link: "#",
    thumbnail:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fHww",
  },
  {
    title: "Chicken Tikka Masala",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1627662168781-4345690f0bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpY3klMjBjaGlja2VufGVufDB8fDB8fHww"},
  {
    title: "Classic Caesar Salad",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Tiramisu",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1691688334265-7936fb8c49ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRpcmFtaXN1fGVufDB8fDB8fHww",
  },
  {
    title: "Mango Sticky Rice",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ28lMjBTdGlja3klMjBSaWNlfGVufDB8fDB8fHww",
  },
  {
    title: "Beef Wellington",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1546964053-d018e345e490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmVlZiUyMFdlbGxpbmd0b258ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Chicken Alfredo",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1670508142255-f119391c4213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Shrimp Scampi",
    link: "#", 
    thumbnail:
      "https://images.unsplash.com/photo-1535400255456-984241443b29?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wfGVufDB8fDB8fHww",
  },
];
