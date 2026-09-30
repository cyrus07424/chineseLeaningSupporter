"use client";

import { useEffect, useState } from "react";
import { stages } from "./data/skits";
import StageSelector from "./components/StageSelector";
import StageView from "./components/StageView";

const STORAGE_KEY = "chineseLeaningSupporter.clearedStageIds";

export default function Home() {
  const [clearedStageIds, setClearedStageIds] = useState<string[]>([]);
  const [selectedStageId, setSelectedStageId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setClearedStageIds(JSON.parse(saved));
      }
    } catch {
      // localStorage が使用できない環境では進捗を保存しない
    }
  }, []);

  const persist = (ids: string[]) => {
    setClearedStageIds(ids);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {
      // no-op
    }
  };

  const handleClear = (stageId: string) => {
    if (!clearedStageIds.includes(stageId)) {
      persist([...clearedStageIds, stageId]);
    }
    setSelectedStageId(null);
  };

  const selectedStage = stages.find((s) => s.id === selectedStageId) ?? null;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            中国語学習サポーター
          </h1>
          <p className="text-center text-gray-500 mb-8">
            スキット形式でステージをクリアしながら中国語を学ぼう
          </p>

          {selectedStage ? (
            <StageView
              stage={selectedStage}
              onClear={() => handleClear(selectedStage.id)}
              onBack={() => setSelectedStageId(null)}
            />
          ) : (
            <StageSelector
              stages={stages}
              clearedStageIds={clearedStageIds}
              onSelect={setSelectedStageId}
            />
          )}
        </div>
      </div>
      <footer className="text-center text-gray-400 mt-8">
        &copy; 2026 <a href="https://github.com/cyrus07424" target="_blank">cyrus</a>
      </footer>
    </div>
  );
}
