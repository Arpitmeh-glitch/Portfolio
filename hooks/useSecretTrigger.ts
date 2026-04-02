"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const SECRET_PHRASE = "sudo access";
const SECRET_KEY = "J"; // Shift + J

/**
 * useSecretTrigger
 *
 * Listens for:
 *   1. Typing "sudo access" anywhere on the page
 *   2. Shift + J shortcut
 *
 * Either trigger navigates to /blueprint.
 *
 * Usage: Call this hook once in your root layout or Home page.
 *   useSecretTrigger();
 */
export function useSecretTrigger() {
  const router = useRouter();
  const bufferRef = useRef<string>("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const navigate = () => router.push("/blueprint");

    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut: Shift + J
      if (e.shiftKey && e.key === SECRET_KEY) {
        e.preventDefault();
        navigate();
        return;
      }

      // Ignore modifier-only keys and keys that don't produce chars
      if (e.key.length !== 1) return;

      // Append to buffer
      bufferRef.current += e.key.toLowerCase();

      // Trim buffer to phrase length
      if (bufferRef.current.length > SECRET_PHRASE.length) {
        bufferRef.current = bufferRef.current.slice(-SECRET_PHRASE.length);
      }

      // Check for match
      if (bufferRef.current === SECRET_PHRASE) {
        bufferRef.current = "";
        navigate();
        return;
      }

      // Reset buffer after 3 seconds of inactivity
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        bufferRef.current = "";
      }, 3000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [router]);
}
