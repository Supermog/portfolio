import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
};

function RevealOnScroll(props: RevealOnScrollProps) {
  const { children } = props;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
        ${
          isVisible ? "opacity-100 animate-fade-up animate-once" : "opacity-0"
        }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export { RevealOnScroll };
