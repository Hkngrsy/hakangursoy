"use client";

import { MotionConfig } from "motion/react";

/** Kullanıcı "hareketi azalt" ayarını açtıysa tüm Motion animasyonları sadeleşir. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
