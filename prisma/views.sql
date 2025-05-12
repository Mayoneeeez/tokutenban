-- プレイヤーの合計スコアを計算するビュー
CREATE OR REPLACE VIEW player_totals AS
SELECT 
    game_id,
    player_name,
    SUM(score) as total_score
FROM scores
GROUP BY game_id, player_name;

-- ゲームのランキングを計算するビュー
CREATE OR REPLACE VIEW game_rankings AS
SELECT 
    game_id,
    player_name,
    total_score,
    RANK() OVER (PARTITION BY game_id ORDER BY total_score DESC) as rank
FROM player_totals; 