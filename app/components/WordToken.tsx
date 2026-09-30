"use client";

import { useState } from "react";
import type { Word } from "../data/skits";

type Props = {
  word: Word;
};

/** クリックすると単語の意味・ピンインを表示するトークン */
export default function WordToken({ word }: Props) {
  const [open, setOpen] = useState(false);
  const isPunctuation = !word.meaning && !word.pinyin;

  if (isPunctuation) {
    return <span className="text-gray-800">{word.text}</span>;
  }

  return (
    <span className="relative inline-block mx-0.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-lg font-medium text-gray-800 border-b-2 border-dashed border-blue-400 hover:bg-blue-50 rounded px-0.5 cursor-pointer"
        aria-expanded={open}
      >
        {word.text}
      </button>
      {open && (
        <span className="absolute z-10 left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap bg-gray-900 text-white text-sm rounded px-2 py-1 shadow-lg">
          <span className="block text-blue-200">{word.pinyin}</span>
          <span className="block">{word.meaning}</span>
        </span>
      )}
    </span>
  );
}
