'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LinkSharePage() {
  const router = useRouter();

  const params = useParams() as { game_id: string };

  const [copied, setCopied] = useState(false);

  const gameUrl = `${window.location.origin}/game/${params.game_id}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(gameUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後にメッセージを消す
    } catch (err) {
      console.error('コピーに失敗しました:', err);
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold">得点版作成完了</h1>
      {/* <p className="text-gray-700">ゲームID: {params.id}</p> */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={gameUrl}
            readOnly
            className="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-800 dark:text-white bg-white dark:bg-gray-800"
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded-lg transition h-full"
          >
            {copied ? '✅' : '📋'}
          </button>
        </div>
      </div>
      <button
        type="button"
        className="bg-blue-400 hover:bg-blue-500 text-white dark:bg-blue-600/80 dark:hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-200 shadow-sm"
        onClick={() => {
          router.push(`/game/${params.game_id}`);
        }}
      >
        得点版にとぶ
      </button>
    </div>
  );
}
