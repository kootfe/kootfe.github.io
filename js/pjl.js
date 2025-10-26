const projects = [
    {
        title: "PlutoniumCLI",
        desc: "Supreme CLI QoL tool for all nerds out there.",
        path: "plcli"
    },
    {
        title: "Tutorial Game",
        desc: "A game I made to learn things — ended up on a dusty shelf. Still check on it from time to time though.",
        path: "game"
    },
    {
        title: "Log",
        desc: "Probaly overengineered logger",
        path: "log"
    }
];

const container = document.getElementById("pjs");
if (!container) {
    console.error("Container element #pjs not found.");
} else {
    projects.forEach(({ title, desc, path }) => {
        const div = document.createElement("div");
        div.className = "pj";

        div.innerHTML = `
            <div>
                <h2>${title}</h2>
                <hr>
            </div>
            <p class="desc">${desc}</p>
            <a class="btn linka" href="prj.html?pj=${encodeURIComponent(path)}">Go To Project</a>
        `;

        container.appendChild(div);
    });
}

