const KEY = 'nobel-timeline-last-score';
const LEADERBOARD_KEY = 'nobel-timeline-leaderboard';

export const saveLastScore = (o) => localStorage.setItem(KEY, JSON.stringify(o));
export const getLastScore = () => JSON.parse(localStorage.getItem(KEY) || 'null');

export const getLeaderboard = () => {
  const data = localStorage.getItem(LEADERBOARD_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToLeaderboard = (entry) => {
  const leaderboard = getLeaderboard();
  leaderboard.push(entry);
    leaderboard.sort((a, b) => b.score - a.score);
  
  // Behåll endast top 10
  const top10 = leaderboard.slice(0, 10);
  
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(top10));
  return top10;
};