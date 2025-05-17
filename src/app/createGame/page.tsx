'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export default function CreateGamePage() {
  const router = useRouter();

  // type Player = {
  //   playerName: string;
  // };

  // type Description = {
  //   round: number;
  //   memo: string;
  // };

  // type GameStatus = {
  //   gameName: string;
  //   players: Player[];
  //   description: Description;
  // };

  const [gameStatus, setGameStatus] = useState<AppType.GameStatus>({
    gameName: '',
    players: [],
    description: {
      round: 1,
      memo: '',
    },
  });

  const [tempPlayer, setTempPlayer] = useState<string>('');
  const [tempRound, setTempRound] = useState<number>(1);
  const [tempMemo, setTempMemo] = useState<string>('');

  const onClickCreateGame = () => {
    setGameStatus((prev) => ({
      ...prev,
      description: { round: tempRound, memo: tempMemo },
    }));

    router.push(`/game/${nanoid()}/share`);
  };

  useEffect(() => {
    console.log(gameStatus);
  }, [gameStatus]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form className="flex flex-col gap-4 items-center w-64">
          <label htmlFor="gameName" className="w-full text-left font-bold">
            ゲーム名
          </label>
          <input
            type="text"
            id="gameName"
            name="gameName"
            value={gameStatus.gameName}
            placeholder="FPS大会"
            onChange={(e) => setGameStatus({ ...gameStatus, gameName: e.target.value })}
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-64 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <label htmlFor="player" className="w-full text-left font-bold">
            プレイヤー名
          </label>
          <div className="relative w-full">
            <div className="relative w-full">
              <input
                type="text"
                id="player"
                name="player"
                value={tempPlayer}
                placeholder="布団ちゃん"
                onChange={(e) => setTempPlayer(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 pr-10 w-full text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                type="button"
                onClick={() => {
                  if (!tempPlayer.trim()) return; // 空の値は追加しない

                  setGameStatus((prev) => ({
                    ...prev,
                    players: [...prev.players, { playerName: tempPlayer }],
                  }));

                  setTempPlayer(''); // 追加後に `tempPlayer` をリセット
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-white px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                追加
              </button>
            </div>
            {/* プレイヤーリスト */}
            <div className="w-full overflow-x-auto ">
              <div className="flex gap-1 dark:bg-gray-800 p-1 rounded-lg min-w-full">
                {gameStatus.players.map((player, index) => (
                  <div
                    key={index}
                    className="px-1 py-0.5 bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md text-xs whitespace-nowrap"
                  >
                    {player.playerName}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <label htmlFor="rounds" className="w-full text-left font-bold">
            ゲーム詳細
          </label>
          <div className="w-full flex items-center">
            <label htmlFor="rounds" className="w-full text-left">
              ラウンド数
            </label>
            <input
              type="number"
              min={1}
              id="rounds"
              name="rounds"
              value={tempRound}
              placeholder="1"
              onChange={(e) => setTempRound(Number(e.target.value))}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-40 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <label htmlFor="memo" className="w-full text-left">
            メモ
          </label>
          <textarea
            id="memo"
            name="memo"
            value={tempMemo}
            placeholder="メモを入力"
            onChange={(e) => setTempMemo(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg p-2 w-full h-20 text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="button"
            className="bg-blue-400 hover:bg-blue-500 text-white dark:bg-blue-600/80 dark:hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-200 shadow-sm"
            onClick={onClickCreateGame}
          >
            得点版リンク作成
          </button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
