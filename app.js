const taskcont = document.querySelector(".task__container");

const globalstorage=[];

const newCard = ({
    id,
    url,
    title,
    description,
    type
}) => `<div class="col-md-6 col-lg-4 mb-3" id=${id}>
<div class="card">
    <div class="card-header text-end">
        <button onclick="edit('${id}')" type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt" ></i></button>
        <button onclick="dele('${id}')" type="button" class="btn btn-outline-danger" ><i class="fas fa-trash"></i></button>
    </div>
    <img src=${url}
        class="card-img-top" alt="...">
    <div class="card-body">
        <h5 contenteditable="false"  class="card-title ${id}">${title}</h5>
        <p contenteditable="false" class="card-text ${id+"1"}">${description}</p>
        <span contenteditable="false" class="badge bg-primary  ${id+"2"}">${type}</span>
    </div>
    <div class="card-footer text-muted text-end">
        <button onclick="opent('${id}')" type="button" class="btn btn-outline-primary ${id+"3"}"  data-bs-toggle="modal" data-bs-target="#example">Open Task</button>
        <button style="display: none;" onclick="savebtn('${id}')" type="button" class="btn btn-primary ${id+"4"}">Save the edit</button>    
    </div>
</div>
</div>`;


const saveChanges = () => {

    const input = {
        id: `${Date.now()}`,
        url: document.getElementById("imageUrl").value,
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("taskDescription").value,
        type: document.getElementById("Tags").value,
    };


    const createNewCard = newCard(input);
    console.log(input);
    globalstorage.push(input);
    
    taskcont.insertAdjacentHTML("beforeend", createNewCard);
    
    localStorage.setItem("tasky", JSON.stringify (globalstorage));
    window.location.reload()
}


function reloading() {
    Object.keys(localStorage).map((key) => {

        var ar = localStorage.getItem(key)
        console.log(ar);
        var t=JSON.parse(ar)
        for (let i = 0; i < t.length; i++) {
            
            taskcont.insertAdjacentHTML("beforeend",newCard(t[i])) ;        
            globalstorage.push(t[i])
        }
       
    });

}

function dele(x) {
    let a = localStorage.getItem("tasky")
    let t=JSON.parse(a)
    let faveGif = t.map(faveGif => faveGif.id);
    let index = faveGif.findIndex(id => id == x);
    t.splice(index,1)
    localStorage.setItem("tasky",JSON.stringify(t))
    window.location.reload()
}

var a=""
var b=""
var c=""
function edit(x){
    var res1 = x.concat("1");
    var res2 = x.concat("2");
    var res3 = x.concat("3");
    var res4 = x.concat("4");
   

    document.getElementsByClassName(x)[0].setAttribute("contenteditable","true")
    document.getElementsByClassName(res1)[0].setAttribute("contenteditable","true")
    document.getElementsByClassName(res2)[0].setAttribute("contenteditable","true")
    a=document.getElementsByClassName(x)[0].innerHTML;
    console.log(a);
    b=document.getElementsByClassName(res1)[0].innerHTML;
    console.log(b);
    c=document.getElementsByClassName(res2)[0].innerHTML;
    console.log(c);
    document.getElementsByClassName(res3)[0].setAttribute('style', 'display:none');
    document.getElementsByClassName(res4)[0].setAttribute('style', 'display:block');

}

function savebtn(x) {
    var res1 = x.concat("1");
    var res2 = x.concat("2");

    var d= document.getElementsByClassName(x)[0].innerHTML;
    console.log(typeof(d));
    var e=document.getElementsByClassName(res1)[0].innerHTML;
    console.log(e);
    var f=document.getElementsByClassName(res2)[0].innerHTML;
    console.log(f);

    const a = localStorage.getItem("tasky")
    let t=JSON.parse(a)
    let faveGif = t.map(faveGif => faveGif.id);
    let index = faveGif.findIndex(id => id == x);
    console.log(index);
    t[index].title=d;
    t[index].description=e;
    t[index].type=f;
    localStorage.setItem("tasky",JSON.stringify(t))
    window.location.reload()

}


function opent(x) {
    let a = localStorage.getItem("tasky")
    let t=JSON.parse(a)
    let faveGif = t.map(faveGif => faveGif.id);
    let index = faveGif.findIndex(id => id == x);
    console.log(index);
    document.getElementsByClassName("c1")[0].setAttribute("src",t[index].url)
    document.getElementsByClassName("c2")[0].innerHTML=t[index].title
    document.getElementsByClassName("c3")[0].innerHTML=t[index].description
    document.getElementsByClassName("c4")[0].innerHTML=t[index].type

}