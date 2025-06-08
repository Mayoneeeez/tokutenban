import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  const { gameName, players, description }: AppType.GameStatus = await request.json();
  const gameId = nanoid();
  if (!gameName || !players || !description) {
    console.error('status: 400');
    return NextResponse.json({ status: 400 });
  }

  try {
    await prisma.game.create({
      data: {
        game_id: gameId,
        game_name: gameName,
        memo: description.memo,
        updated_datetime: new Date(),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500 });
  }

  return NextResponse.json({ status: 200 });
}
