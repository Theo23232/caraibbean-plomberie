"use client";

import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({
  name,
  className,
  size = 24,
  strokeWidth = 2,
}: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = (Icons as any)[name] as React.ComponentType<{
    className?: string;
    size?: number;
    strokeWidth?: number;
  }>;
  if (!Component) return null;
  return (
    <Component
      className={cn(className)}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
}
