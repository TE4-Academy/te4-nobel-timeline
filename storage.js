const KEY='nobel-timeline-last-score';
export const saveLastScore = (o)=> localStorage.setItem(KEY, JSON.stringify(o));
export const getLastScore = () => JSON.parse(localStorage.getItem(KEY) || 'null');