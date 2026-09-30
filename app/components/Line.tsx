"use client";

import type { Line as LineType } from "../data/skits";
import WordToken from "./WordToken";
import { useSpeech } from "../hooks/useSpeech";

type Props = {
  line: LineType;
  showTranslation: boolean;
};

export default function Line({ line, showTranslation }: Props) {
  const { supported, speak, speakingText } = useSpeech();
  const fullText = line.words.map((w) => w.text).join("");
  const isSpeaking = speakingText === fullText;

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-3 bg-white">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-gray-500">
          {line.speaker}
        </span>
        {supported && (
          <button
            type="button"
            onClick={() => speak(fullText)}
            aria-label="読み上げる"
            className={`text-sm px-2 py-1 rounded border ${
              isSpeaking
                ? "bg-blue-500 text-white border-blue-500"
                : "text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            🔊 {isSpeaking ? "再生中..." : "読み上げ"}
          </button>
        )}
      </div>
      <div className="leading-relaxed">
        {line.words.map((word, idx) => (
          <WordToken key={idx} word={word} />
        ))}
      </div>
      {showTranslation && (
        <p className="mt-2 text-gray-600 text-sm border-t border-dashed border-gray-200 pt-2">
          {line.translation}
        </p>
      )}
    </div>
  );
}
