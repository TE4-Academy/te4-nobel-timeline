export async function loadNobelData() {
    const res = await fetch('starter-kit/nobel-data.json');
    const json = await res.json();
    return json.laureates; // [{id, name, year, category, imageUrl}]
}

export function shuffle(array) {
    for (let i =array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}