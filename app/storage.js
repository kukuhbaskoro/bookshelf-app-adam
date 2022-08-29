const STORAGE_KEY = "myBook";

const saveBook = (bookData) => {
  let parseData = bookData;
  parseData.id = +new Date();

  const dataLoaded = getAll();
  const data = dataLoaded.concat(parseData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  document.dispatchEvent(new Event("onSave"));
};

const getAll = () => {
  const dataFromStorage = localStorage.getItem(STORAGE_KEY);
  const data = JSON.parse(dataFromStorage);

  return data ? data : []
  
};

const getById = (id) => {
    const dataLoaded = getAll();
    const filter = dataLoaded.filter(value => value.id === id)
    return filter ? filter[0] : null
};

const removeBookById = (id) => {
    const dataLoaded = getAll();
    const filter = dataLoaded.filter(value => value.id !== id)
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filter));
    document.dispatchEvent(new Event("onSave"));
}
