'use client';
import { useSearchParams, useParams } from 'next/navigation';

export default function GamePage() {
  const params = useParams() as { game_id: string };
  const searchParams = useSearchParams();
  const gameName = searchParams.get('name');

  console.log(params);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold">ゲームページ</h1>
      <p className="text-gray-700">ゲームID: {params.game_id}</p>
      <p className="text-gray-700">ゲーム名: {gameName}</p>
    </div>
  );
}
