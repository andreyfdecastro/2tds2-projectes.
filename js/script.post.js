const posts = []

function savePoste() {
    ;
}

function cleanfilde() {
    ;
}

if (title && category && resume && author && date)
    storePost(title, category, resume, author, date);
cleanfields();

function storePost(title, category, resume, author, date) {
    ;
}


function savePoste() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resume").value;
    const autor = document.getElementById("autor").value;
    const date = document.getElementById("date").value;

    console.log(title, category, resume, autor, Date);
}

function cleanfilde() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resume").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("date").value = "";
}

function storePost(title, category, resume, author, date) {
    const post = {
        title,
        category,
        resume,
        author,
        date,
    };
}
posts.push(post);
console.log(post);