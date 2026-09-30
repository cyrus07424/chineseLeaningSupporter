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

      <section
        aria-labelledby="grammar-preview-title"
        className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4"
      >
        <p className="mb-1 text-sm font-semibold text-blue-700">このステージの文法</p>
        <h3 id="grammar-preview-title" className="mb-2 text-lg font-bold text-gray-800">
          {stage.grammar.title}
        </h3>
        <p className="mb-2 text-gray-700">{stage.grammar.explanation}</p>
        <p className="font-semibold text-gray-800">{stage.grammar.example}</p>
        <p className="text-sm text-gray-600">{stage.grammar.exampleTranslation}</p>
      </section>

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
