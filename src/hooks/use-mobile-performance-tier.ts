import { useSyncExternalStore } from "react"

function getSnapshot() {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(max-width: 767px)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

function subscribe(onChange: () => void) {
  const mqNarrow = window.matchMedia("(max-width: 767px)")
  const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)")
  mqNarrow.addEventListener("change", onChange)
  mqReduce.addEventListener("change", onChange)
  return () => {
    mqNarrow.removeEventListener("change", onChange)
    mqReduce.removeEventListener("change", onChange)
  }
}

export function useMobilePerformanceTier() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
