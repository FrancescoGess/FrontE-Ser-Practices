async function getAllBooks() {
  try {
    console.log("Inizio richiesta API");
    const response = await fetch("http://localhost:5091/api/Book/getAll", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    async function CreateBook() {
      try {
        console.log("Inizio richiesta API");
        const response = await fetch("http://localhost:5091/api/Book/CreateBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
    const createBook = document.createElement("div");
    createBook.className=""

    console.log("Risposta ricevuta:", response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log("Dati ricevuti:", json);
    return json;
  } catch (error) {
    console.error("Errore nella richiesta fetch:", error);
    throw error;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getAllBooks().then((books) => {
    const container = document.getElementById("books-container");
    books.forEach((book) => {
      const bookElement = createBookElement(book);
      container.appendChild(bookElement);
    });
  });
});

function createBookElement(book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "max-w-sm rounded overflow-hidden shadow-lg mb-4";
  bookDiv.innerHTML = `
    <div class="px-6 py-4 flex flex-col">
      <div class="flex flex-row justify-between">
        <span></span>
        <span class="bg-gray-300 py-2 px-4 rounded-full">${book.anno}</span>
      </div>
      <div class="font-bold text-xl mb-2">${book.title}</div>
      <p class="text-gray-700 text-base">${book.descrizione}</p>
    </div>
    <div class="px-6 pt-4 pb-2 flex flex-col items-center">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
        Elimina
      </button>
    </div>
  `;
  return bookDiv;
}
