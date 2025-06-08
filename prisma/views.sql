-- プレイヤーの合計スコアを計算するビュー
CREATE OR REPLACE VIEW player_totals AS
SELECT 
    s.game_id,
    s.player_id,
    p.player_name,
    SUM(s.score) as total_score
FROM scores s
JOIN players p ON s.player_id = p.player_id
GROUP BY s.game_id, s.player_id, p.player_name;

-- ゲームのランキングを計算するビュー
CREATE OR REPLACE VIEW game_rankings AS
SELECT 
    game_id,
    player_id,
    player_name,
    total_score,
    RANK() OVER (PARTITION BY game_id ORDER BY total_score DESC) as rank
FROM player_totals; 