const projects = [
    {
        title: "How i use NeoVim?",
        desc: "I tend to code fast thanks to nvim, Let me show you how i do!",
        path: "neovim"
    },
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
            <a class="btn linka" href="/pages/blog/${encodeURIComponent(path)}">Go To Post</a>
        `;

        container.appendChild(div);
    });
}


