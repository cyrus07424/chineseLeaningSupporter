"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * ブラウザ標準の Web Speech API (SpeechSynthesis) を利用した読み上げ機能。
 * 追加ライブラリを導入せず、オープンで無料に利用できるブラウザ内蔵機能を使用しています。
 */
export function useSpeech() {
  const [supported, setSupported] = useState(false);
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  useEffect(() => {
    setSupported(
      typeof window !== "undefined" && "speechSynthesis" in window
    );
  }, []);

  const speak = useCallback((text: string, lang: string = "zh-CN") => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    if (!text) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.onstart = () => setSpeakingText(text);
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);
    window.speechSynthesis.speak(utterance);
  }, []);

  return { supported, speak, speakingText };
}
