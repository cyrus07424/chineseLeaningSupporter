"use client";

import { useState } from "react";
import type { Stage } from "../data/skits";
import Line from "./Line";

type Props = {
  stage: Stage;
  onClear: () => void;
  onBack: () => void;
};

export default function StageView({ stage, onClear, onBack }: Props) {
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← ステージ一覧に戻る
        </button>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showTranslation}
            onChange={(e) => setShowTranslation(e.target.checked)}
            className="cursor-pointer"
          />
          全文の日本語訳を表示
        </label>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-1">{stage.title}</h2>
      <p className="text-gray-500 mb-4">{stage.description}</p>

      {stage.lines.map((line, idx) => (
        <Line key={idx} line={line} showTranslation={showTranslation} />
      ))}

      <div className="text-center mt-6">
        <button
          type="button"
          onClick={onClear}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow"
        >
          ステージクリア！
        </button>
      </div>
    </div>
  );
}
