-- Create games table
CREATE TABLE "games" (
    "game_id" UUID NOT NULL,
    "game_name" VARCHAR(100) NOT NULL,
    "url_path" VARCHAR(50) NOT NULL,
    "memo" TEXT,
    "created_datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_datetime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("game_id"),
    CONSTRAINT "games_url_path_key" UNIQUE ("url_path")
);

-- Create scores table
CREATE TABLE "scores" (
    "score_id" UUID NOT NULL,
    "game_id" UUID NOT NULL,
    "player_name" VARCHAR(50) NOT NULL,
    "round_number" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "created_datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_datetime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scores_pkey" PRIMARY KEY ("score_id"),
    CONSTRAINT "unique_round_score" UNIQUE ("game_id", "player_name", "round_number"),
    CONSTRAINT "scores_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("game_id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create player_totals view
CREATE VIEW "player_totals" AS
SELECT 
    s.game_id,
    s.player_name,
    SUM(s.score) as total_score
FROM 
    scores s
GROUP BY 
    s.game_id, s.player_name;

-- Create game_rankings view
CREATE VIEW "game_rankings" AS
SELECT 
    pt.game_id,
    pt.player_name,
    pt.total_score,
    RANK() OVER (PARTITION BY pt.game_id ORDER BY pt.total_score DESC) as rank
FROM 
    player_totals pt;

