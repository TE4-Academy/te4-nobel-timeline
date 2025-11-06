export async function loadNobelData() {
    const res = await fetch('./nobel-data.json');
    const json = await res.json();
    return json.laureates; // [{id, name, year, category, imageUrl}]
}