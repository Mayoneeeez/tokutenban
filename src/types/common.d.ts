// アプリケーションの型定義ファイル

/**
 * DBの型定義
 */
declare namespace DBType {
  /**
   * ゲーム
   */
  interface Game {
    game_id: string;
    game_name: string;
    memo?: string;
    created_datetime: Date;
    updated_datetime: Date;
  }

  /**
   * スコア
   */
  interface Score {
    score_id: string;
    game_id: string;
    player_name: string;
    round_number: number;
    score: number;
    created_datetime: Date;
    updated_datetime: Date;
  }

  /**
   * プレイヤーの合計スコア
   */
  interface PlayerTotal {
    game_id: string;
    player_name: string;
    total_score: number;
  }

  /**
   * ゲームのランキング
   */
  interface GameRanking {
    game_id: string;
    player_name: string;
    total_score: number;
    rank: number;
  }
}

declare namespace AppType {
  /**
   * プレイヤー
   */
  interface Player {
    playerName: string;
  }

  /**
   * ゲームの詳細
   */
  interface Description {
    round: number;
    memo: string;
  }

  /**
   * ゲーム作成時のステータス
   */
  interface GameStatus {
    gameName: string;
    players: Player[];
    description: Description;
  }
}
/**
 * API関連の型定義
 */
declare namespace APIType {
  // /**
  //  * APIレスポンスの基本形
  //  */
  // interface Response<T> {
  //   success: boolean;
  //   data?: T;
  //   error?: string;
  // }
  // /**
  //  * ゲーム作成リクエスト
  //  */
  // interface CreateGameRequest {
  //   game_name: string;
  //   players: string[];
  //   memo?: string;
  //   rounds: number;
  // }
  // /**
  //  * スコア更新リクエスト
  //  */
  // interface UpdateScoreRequest {
  //   game_id: string;
  //   player_name: string;
  //   round_number: number;
  //   score: number;
  // }
}
