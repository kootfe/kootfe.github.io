const projects = Object.create(null);
projects["plcli"] = "Neko-Neko-Labs/plutonium_cli/master";
projects["game"] = "kootfe/game/main";
projects["log"] = "kootfe/log/main";

const main_path = "https://raw.githubusercontent.com/";

function getReadMe(path) {
    let url = main_path + path + "/README.md";
    console.log(url);
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Network error or file not found");
            return res.text();
        })
        .then(cont => {
            console.log(cont);
            document.getElementById("rdm").innerHTML = marked.parse(cont);
        })
        .catch(err => console.error('Error fetch:', err));

}

function loadDownloads(path) {
    const lastSlash = path.lastIndexOf("/");
    let repo = path.slice(0, lastSlash);
    let branch = path.slice(lastSlash);

    let url = "https://github.com/" + repo + "/archive/refs/heads" + branch + ".zip";

    document.getElementById("source").href = url;
}

const prm = new URLSearchParams(window.location.search);
const pj = prm.get("pj");
getReadMe(projects[pj]);
loadDownloads(projects[pj]);

