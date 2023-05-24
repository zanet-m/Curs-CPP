const claseDiv = document.getElementById('clase');


temeDb.onSnapshot(extragereTeme);

function extragereTeme(snapshot) {

    let docs = snapshot.docs;
    let temeClasa = {};

    for (let i = 0; i < docs.length; i++) {
        let tema = docs[i].data();
        tema.id = docs[i].id;

        console.log(tema);

        if (!(tema.clasa in temeClasa)) {
            temeClasa[tema.clasa] = [];
        }
        temeClasa[tema.clasa].push(tema);
    }

    renderClase(temeClasa);
}

function renderClase(temeClasa) {
    let html = " ";

    for (let clasa in temeClasa) {
        html += `
            <details>
            <summary>Clasa ${clasa}</summary>
            <div class="module">
        `

        temeClasa[clasa].sort(compar);

        for (let tema of temeClasa[clasa]) {
            html += `
                <a class="modul" href="tema.html?id=${tema.id}">
                    <img src="${tema.img}">
                    <div class="modul-titlu">
                    ${tema.titlul}
                    </div>
                </a>
                `
        }

        html += `
             </div>
            </details>
        `

    }
    claseDiv.innerHTML = html;
}

function compar(a, b) {
    return a.ordine - b.ordine;
}