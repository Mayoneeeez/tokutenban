import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { game_id, game_name, game_description } = await request.json();

  const game = await prisma.game.create({
    data: {
      game_id,
      game_name,
      game_description,
  
}
