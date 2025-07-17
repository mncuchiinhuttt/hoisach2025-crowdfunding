'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ActivitiesContent() {
  return (
    <>
      <section>
        <img src="/timeline.webp" alt="Description" />
      </section>
      <section id="map">
        <img src="/maps.webp" alt="Description" />
      </section>
    </>
  );
}
