import React from "react";
import { cn } from "@/utils/cn";

export function StaticButton({
  borderRadius = "1rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "p-[1px] bg-transparent text-xl h-[55px] w-[204px] border border-slate-800 backdrop-blur-xl text-white items-center justify-center",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
