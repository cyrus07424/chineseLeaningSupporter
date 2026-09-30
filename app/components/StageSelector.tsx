"use client";

import type { Stage } from "../data/skits";

type Props = {
  stages: Stage[];
  clearedStageIds: string[];
  onSelect: (stageId: string) => void;
};

export default function StageSelector({
  stages,
  clearedStageIds,
  onSelect,
}: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">ステージ選択</h2>
      <ul className="space-y-3">
        {stages.map((stage, idx) => {
          const isCleared = clearedStageIds.includes(stage.id);
          const isUnlocked =
            idx === 0 || clearedStageIds.includes(stages[idx - 1].id);

          return (
            <li key={stage.id}>
              <button
                type="button"
                disabled={!isUnlocked}
                onClick={() => onSelect(stage.id)}
                className={`w-full text-left border rounded-lg p-4 flex items-center justify-between ${
                  isUnlocked
                    ? "bg-white hover:bg-blue-50 border-gray-200 cursor-pointer"
                    : "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
                }`}
              >
                <span>
                  <span className="block font-semibold text-gray-800">
                    {stage.title}
                  </span>
                  <span className="block text-sm text-gray-500">
                    {stage.description}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-blue-700">
                    文法：{stage.grammar.title}
                  </span>
                </span>
                <span className="text-2xl ml-3 shrink-0">
                  {isCleared ? "✅" : isUnlocked ? "▶️" : "🔒"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
