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
        "relative bg-transparent text-xl h-[55px] w-[204px] p-[1px] overflow-hidden border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center",
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
