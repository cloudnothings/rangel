"use client"

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
interface Dot {
  ix: number;
  iy: number;
  x: number;
  y: number;
}

const InteractiveBackground: React.FC = () => {
  const myP5 = useRef<p5 | null>(null);
  const myCanvas = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    myP5.current = new p5(sketch, myCanvas.current!);
    return () => myP5.current?.remove();
  }, []);
  const sketch = (p: p5) => {
    let dots = [] as Dot[];
    const gridSize = 30;  // space between dots

    // Default colors for light mode
    let bgColor = '#FFFFFF'; // white
    let dotColor = '#000000'; // black

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        bgColor = '#09090b'; // black for dark mode
        dotColor = '#a1a1aa'; // white for dark mode
      }
      let offset = false;

      for (let y = gridSize; y < p.height; y += gridSize) {
        for (let x = gridSize / 2; x < p.width - gridSize / 2; x += gridSize) {
          if (offset) {
            if (x + gridSize / 2 < p.width - gridSize / 2) {
              dots.push({
                ix: x + gridSize / 2,
                iy: y,
                x: x + gridSize / 2,
                y: y,
              });
            }
          } else {
            dots.push({
              ix: x,
              iy: y,
              x: x,
              y: y,
            });
          }
        }
        offset = !offset;
      }
    };

    p.draw = () => {
      p.background(bgColor);

      for (let dot of dots) {
        const distance = p.dist(dot.x, dot.y, p.mouseX, p.mouseY);
        const maxDist = gridSize * 2;

        let desiredX = dot.x;
        let desiredY = dot.y;

        if (distance < maxDist) {
          const angle = p.atan2(dot.y - p.mouseY, dot.x - p.mouseX);
          const force = ((maxDist - distance) / maxDist) * (gridSize * 0.25);
          desiredX = dot.x + p.cos(angle) * force;
          desiredY = dot.y + p.sin(angle) * force;
        } else {
          desiredX = dot.x + (dot.ix - dot.x) * 0.2;
          desiredY = dot.y + (dot.iy - dot.y) * 0.2;
        }

        // Update the dot's position once, after calculating the desired position
        dot.x = desiredX;
        dot.y = desiredY;

        p.fill(dotColor);
        p.noStroke();
        p.ellipse(dot.x, dot.y, 4);  // 4 pixel diameter
      }
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  return <div ref={myCanvas}></div>;
};

export default InteractiveBackground;
