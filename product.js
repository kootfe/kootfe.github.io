const urlParams = new URLSearchParams(window.location.search);
let name = urlParams.get('name') || '';
name = decodeURIComponent(name);

const repoMap = {
    "NekoNeko": "kootfe/NekoNekoReEncode",
    "PlutoniumCLI": "kootfe/PlutoniumCLI",
    "Game": "kootfe/game"
};

const normalizedName = name.split(':')[0];
const repo = repoMap[normalizedName];

function decodeBase64(str) {
    try {
        str = str.replace(/\s/g, ''); // remove whitespace
        str = str.replace(/-/g, '+').replace(/_/g, '/');
        while (str.length % 4) str += '=';
        return atob(str);
    } catch (e) {
        console.error('Base64 decode error:', e);
        return '';
    }
}

async function fetchReadme(repo) {
    const branches = ['main', 'master'];
    for (const branch of branches) {
        try {
            const res = await fetch(`https://api.github.com/repos/${repo}/readme?ref=${branch}`);
            const data = await res.json();
            if (data.content) {
                return decodeBase64(data.content);
            }
        } catch (err) {
            console.error(err);
        }
    }
    return null; // README not found
}

async function fetchReleases(repo) {
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}/releases`);
        const releases = await res.json();
        return Array.isArray(releases) ? releases : [];
    } catch (err) {
        console.error(err);
        return [];
    }
}

async function init() {
    if (!repo) {
        document.getElementById('product-title').textContent = 'Unknown Product';
        document.getElementById('readme').textContent = 'Invalid product name.';
        document.getElementById('downloads').innerHTML = '<li>Cannot fetch downloads.</li>';
        return;
    }

    document.getElementById('product-title').textContent = name;

    // Fetch README
    const readme = await fetchReadme(repo);
    if (readme) {
        document.getElementById('readme').innerHTML = marked.parse(readme);
    } else {
        document.getElementById('readme').textContent = 'README not found.';
    }

    // Fetch releases
    const releases = await fetchReleases(repo);
    const ul = document.getElementById('downloads');
    ul.innerHTML = ''; // clear loading text

    if (releases.length) {
        releases.forEach(r => {
            r.assets.forEach(a => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${a.browser_download_url}" target="_blank">${a.name}</a>`;
                ul.appendChild(li);
            });
        });
    } else {
        ul.innerHTML = '<li>No releases found.</li>';
    }

    // Always add source code
    const li = document.createElement('li');
    li.innerHTML = `<a href="https://github.com/${repo}/archive/refs/heads/main.zip" target="_blank">Download Source (ZIP)</a>`;
    ul.appendChild(li);
}

init();

