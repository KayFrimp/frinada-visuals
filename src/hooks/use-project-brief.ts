"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  clearStoredBrief,
  getBriefServerSnapshot,
  getBriefSnapshot,
  subscribeToBrief,
  writeStoredBrief,
} from "@/lib/brief";
import type { ProjectBrief } from "@/types";

export function useProjectBrief() {
  const brief = useSyncExternalStore(subscribeToBrief, getBriefSnapshot, getBriefServerSnapshot);

  const update = useCallback((patch: Partial<ProjectBrief>) => {
    writeStoredBrief({ ...getBriefSnapshot(), ...patch });
  }, []);

  const reset = useCallback(() => {
    clearStoredBrief();
  }, []);

  return { brief, update, reset };
}
