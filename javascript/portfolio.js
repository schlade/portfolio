const pictures = {
    all: document.getElementsByClassName("portfolio-display"),
    work: document.getElementsByClassName("work"),
    personal: document.getElementsByClassName("personal"),
    sub: {
        photoshop: document.getElementsByClassName("photoshop"),
        illustrator: document.getElementsByClassName("illustrator"),
        blender: document.getElementsByClassName("blender")
    }

};

var test

function filterSelection () {

    const cats = document.getElementById("portfolio-sort-btn").children
    const subCats = document.getElementById("portfolio-filter-btn").children;
    
    let activeCat
    let activeSubCats = []

    for (let e of cats) {
        if (e.classList.value == "active") {
            activeCat = e.id;
        }
    }

    for (let e of subCats) {
        if (e.classList.value == "active") {
            activeSubCats.push(e.id)
        }
    }

    for (let pic of pictures.all[0].children) {
        if(activeCat == "all" ? true : pic.classList.value.includes(activeCat)) {
            if(activeSubCats.length == 0) {
                console.log(pic)
                pic.style.display = "block";
            } else if (checkForCats(pic, activeSubCats)) {
                console.log(pic)
                pic.style.display = "block";
            } else {
                pic.style.display = "none";
            }
        } else {
            pic.style.display = "none";
        }
    }

};

function checkForCats(pic, cats) {
    for(let cat of cats) {
        if(pic.classList.value.includes(cat)) {
            return true;
        }
    }
    return false;
}

function toggleCat (pressed) {
    const elements = document.getElementById("portfolio-sort-btn").children
    console.log(pressed)

    for(let e of elements) {
        if(e.id == pressed) {
            e.classList.value = "active";
        } else {
            e.classList.value = "";
        }
    }
    
    filterSelection();
}

function toggleSubCat (pressed) {
    const e = document.getElementById(pressed);
    console.log(pressed)

    if(e.classList.value == "active") {
        e.classList.value = ""
    } else {
        e.classList.value = "active"
    }

    filterSelection()
}