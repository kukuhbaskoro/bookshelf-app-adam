const btnSave = document.getElementById("bookSubmit");
const formBook = document.getElementById("inputBook");
const btnRemoveBook = document.getElementById("red");

btnSave.addEventListener("click", () => {
    const data = new FormData(formBook);
    saveBook(serialize(data));
});

const renderItem = (item) => {
    const title = document.createElement("h3");
    title.innerText = item.title;

    const author = document.createElement("p");
    author.innerText = item.author;

    const year = document.createElement("p");
    year.innerText = item.year;

    const buttonOk = document.createElement("button");
    buttonOk.classList.add("green");
    buttonOk.innerText = "sudah dibaca";
    buttonOk.addEventListener("click", function (event) {
        
    });

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("red");
    buttonDelete.innerText = "hapus";
    buttonDelete.addEventListener("click", function (event) {
        removeBookById(item.id)
    });

    const wrapperAction = document.createElement("div");
    wrapperAction.classList.add("action");
    wrapperAction.append(buttonOk, buttonDelete);

    const detail = document.createElement("article");
    detail.classList.add("book_item");
    detail.append(title, author, year, wrapperAction);

    const wrapContent = document.createElement("div");
    wrapContent.classList.add("book_list");
    wrapContent.append(detail);
    console.log(wrapContent);

    return wrapContent;
};

const renderContent = () => {
    const container = document.getElementById("book_shelf");

    const dataAll = getAll();
    console.log('dataAll', dataAll)
    for (book of dataAll) {
        const wrapper = renderItem(book);
        container.append(wrapper);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    renderContent();
});

document.addEventListener('onSave', () => {
    console.log('terpanggil')
    renderContent();
});
