// AUTOFILL
const searchFrom = document.getElementById('from-select-field');
const searchTo = document.getElementById('to-select-field');
const matchListFrom = document.getElementById('match-list-from');
const matchListTo = document.getElementById('match-list-to');

const searchBus = async searchText => {
    const res = await fetch('bustabla.json');
    const buses = await res.json();

    let match = buses.filter(bus => {
        const reg = new RegExp(`^${searchText}`, 'gi');
        return bus.name.match(reg);
    });

    if (searchText.length === 0) {
        match = [];
        matchListFrom.innerHTML = '';
        matchListTo.innerHTML = '';
    }

    outputHtml(match);
};

const outputHtml = match => {
    if (match.length > 0) {
        const html = match.map(matches => `
            <div id="match-drop-list">${matches.name}</div>
        `).join('');
        document.getElementById("match-drop-list").addEventListener("click");
        matchListFrom.innerHTML = html;
    }
}

searchFrom.addEventListener('input', () => searchBus(searchFrom.value), () => getBus(searchFrom.value));
searchTo.addEventListener('input', () => searchBus(searchTo.value));
// AUTOFILL

// CALCULATIONS
const getBus = async getText => {
    const get = await fetch('bustabla.json');
    const getbuses = await get.json();

    let list = getbuses.filter();

    console.log(getbuses);
};