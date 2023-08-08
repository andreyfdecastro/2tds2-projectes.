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

function showPost(){
let showcontente = "";

posts.forEach((post, index) => {
showcontente += 
<div class = "itemPost" >
<h2>$(post.title)</h2>
<p><strong>categoria: </strong>${post.category}</p>
<p><strong>Resumo: </strong>${post.Resumo}</p>
<p><strong>author: </strong>${post.author}</p>
<p><strong>Data de publicação: </strong>${post.date}</p>
</div>
})
document.getElementById("list").innerHTML = showPost;
}