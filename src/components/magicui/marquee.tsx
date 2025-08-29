import React from "react";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number; // vamos usar 2 por padrão
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2, // importante: 2 para a animação -50%
  ...props
}: MarqueeProps) {
  const items = React.Children.toArray(children);

  return (
    <div
      {...props}
      className={cn(
        // container externo
        "marquee w-full max-w-full overflow-hidden relative",
        className
      )}
      aria-hidden={false}
    >
      {/* Track animado contendo N cópias idênticas */}
      <div
        className={cn(
          "marquee__track flex items-center gap-[var(--gap,1rem)] min-w-[max-content] will-change-transform",
          {
            "marquee__track--vertical": vertical,
            "marquee__track--reverse": reverse,
            "marquee__track--pause": pauseOnHover,
          }
        )}
        aria-hidden
      >
        {Array.from({ length: repeat }).map((_, rep) => (
          <div key={rep} className="marquee__group inline-flex items-center gap-[var(--gap,1rem)]">
            {items.map((child, i) => (
              // cada item precisa ser no-shrink para manter largura desejada
              <div key={i} className="marquee__item flex-shrink-0">
                {child}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
