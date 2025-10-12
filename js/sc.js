const title = document.getElementById("changeTitle");

title.addEventListener('mouseleave', () => title.textContent = "Koofte");
title.addEventListener('mouseenter', () => title.textContent = "Neko & Neko");



const code = [
    { text: "int", class: "type-cd" },
    { text: " errf", class: "fn-cd" },
    { text: "(", class: "i-cd" },
    { text: "const char", class: "type-cd" },
    { text: " *format,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *file,", class: "val-cd" },
    { text: " const int", class: "type-cd" },
    { text: " line,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *time,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *date", class: "val-cd" },
    { text: ")", class: "i-cd" },
    { text: "\n{\n", class: "i-cd" },

    { text: "\tva_list", class: "type-cd" },
    { text: " args;\n", class: "val-cd" },
    { text: "\tva_start", class: "fn-cd" },
    { text: "(args,", class: "i-cd" },
    { text: " date", class: "val-cd" },
    { text: ");\n", class: "i-cd" },

    { text: "\tFILE", class: "type-cd" },
    { text: " *logf", class: "val-cd" },
    { text: " = ", class: "i-cd" },
    { text: "kft_global_log", class: "val-cd" },
    { text: " ? ", class: "i-cd" },
    { text: "kft_global_log", class: "val-cd" },
    { text: " : ", class: "i-cd" },
    { text: "stderr", class: "val-cd" },
    { text: ";\n", class: "i-cd" },

    { text: "\tfprintf", class: "fn-cd" },
    { text: "(logf, ", class: "i-cd" },
    { text: "\"%s[ERROR] { %s:%d - %s %s } \"", class: "str-cd" },
    { text: ", RED,", class: "val-cd" },
    { text: " file,", class: "val-cd" },
    { text: " line,", class: "val-cd" },
    { text: " time,", class: "val-cd" },
    { text: " date", class: "val-cd" },
    { text: ");\n", class: "i-cd" },

    { text: "\tvfprintf", class: "fn-cd" },
    { text: "(logf, format, args);\n", class: "i-cd" },

    { text: "\tfprintf", class: "fn-cd" },
    { text: "(logf, \"%s\", RESET);\n", class: "i-cd" },

    { text: "\tva_end", class: "fn-cd" },
    { text: "(args);\n", class: "i-cd" },
    { text: "\treturn", class: "kw-cd" },
    { text: " 0;\n", class: "num-cd" },
    { text: "}\n\n", class: "i-cd" },

    { text: "int", class: "type-cd" },
    { text: " klogf", class: "fn-cd" },
    { text: "(", class: "i-cd" },
    { text: "const char", class: "type-cd" },
    { text: " *format,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *file,", class: "val-cd" },
    { text: " const int", class: "type-cd" },
    { text: " line,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *time,", class: "val-cd" },
    { text: " const char", class: "type-cd" },
    { text: " *date", class: "val-cd" },
    { text: ")", class: "i-cd" },
    { text: "\n{\n", class: "i-cd" },

    { text: "\tva_list", class: "type-cd" },
    { text: " args;\n", class: "val-cd" },
    { text: "\tva_start", class: "fn-cd" },
    { text: "(args,", class: "i-cd" },
    { text: " date", class: "val-cd" },
    { text: ");\n", class: "i-cd" },

    { text: "\tFILE", class: "type-cd" },
    { text: " *logf", class: "val-cd" },
    { text: " = ", class: "i-cd" },
    { text: "kft_global_log", class: "val-cd" },
    { text: " ? ", class: "i-cd" },
    { text: "kft_global_log", class: "val-cd" },
    { text: " : ", class: "i-cd" },
    { text: "stderr", class: "val-cd" },
    { text: ";\n", class: "i-cd" },

    { text: "\tfprintf", class: "fn-cd" },
    { text: "(logf, ", class: "i-cd" },
    { text: "\"%s[LOG] { %s:%d - %s %s } \"", class: "str-cd" },
    { text: ", BLUE,", class: "val-cd" },
    { text: " file,", class: "val-cd" },
    { text: " line,", class: "val-cd" },
    { text: " time,", class: "val-cd" },
    { text: " date", class: "val-cd" },
    { text: ");\n", class: "i-cd" },

    { text: "\tvfprintf", class: "fn-cd" },
    { text: "(logf, format, args);\n", class: "i-cd" },

    { text: "\tfprintf", class: "fn-cd" },
    { text: "(logf, \"%s\", RESET);\n", class: "i-cd" },

    { text: "\tva_end", class: "fn-cd" },
    { text: "(args);\n", class: "i-cd" },
    { text: "\treturn", class: "kw-cd" },
    { text: " 0;\n", class: "num-cd" },
    { text: "}", class: "i-cd" },
];

const codeOutput = document.getElementById("code");
let tokIndex = 0, charIndex = 0;

async function typeToken(token, parent, delay = 25, batchSize = 3) {
    const span = document.createElement("span");
    if (token.class) span.className = token.class;
    parent.appendChild(span);

    let buffer = "";
    for (const ch of token.text) {
        buffer += ch;
        if (buffer.length >= batchSize) {
            span.textContent += buffer;
            buffer = "";
            await new Promise(r => setTimeout(r, delay));
        }
    }
    if (buffer) span.textContent += buffer;
}

async function typeCode() {
    for (const token of code) {
        await typeToken(token, codeOutput);
    }
}

typeCode();

const quotes = [
    "If it works, don't touch it.",
    "You don't need math to code!",
    "idk, just hack it.",
    "Did you see my bug? I can't find it!",
    "printf(\"Life is a bug\");",
    "Segfaults are my cardio.",
    "I love C more than people.",
    "Why use a library when you can write your own?",
    "Stack overflow? Nah, stack underflow.",
    "Sleep is optional, code is mandatory.",
    "Assembly is sexy, Python is lazy.",
    "Code hard, crash harder.",
    "I dream in hex.",
    "If it compiles, ship it.",
    "Memory leaks are my trophies.",
    "Global variables are true love.",
    "Runtime errors are plot twists.",
    "I build impossible things because it's fun.",
    "Cats > Humans, change my mind.",
    "Make spaghetti code, call it art.",
    "Git commit or die trying.",
    "Debugging is my meditation.",
    "I love semicolons more than friends.",
    "Infinite loops are my comfort zone.",
    "Coffee.exe has stopped responding.",
    "Comment your sins away.",
    "I don't always test, but when I do, I do it in production.",
    "CTRL+C is my panic button.",
    "Old monitor, new ideas.",
    "Compiler warnings are just suggestions.",
    "If in doubt, pointer arithmetic it out.",
    "Make it work, then make it explode.",
    "If you know assembly, evrything is open source",
];
function quote() {
    document.getElementById('quote').textContent =  quotes[Math.floor(Math.random() * quotes.length)]
}

quote();
