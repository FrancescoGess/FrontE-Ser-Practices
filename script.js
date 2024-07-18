async function getAllBooks() {
  try {
    const response = await fetch("http://localhost:5091/api/Book", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    return json;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}


// async function getAllBooks() {
//   var response =  await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const json = await response.json();
//   console.log(json);
// }

document.addEventListener("DOMContentLoaded", function () {
  getAllBooks().then(books =>
     console.log(books)
    // books.forEach((book) => {
    //   const bookDiv = document.createElement("div");
    //   bookDiv.className = "max-w-sm rounded overflow-hidden shadow-lg mb-4";
    //   bookDiv.innerHTML = `
    //             <div class="px-6 py-4 flex flex-col">
    //                 <div class="flex flex-row justify-between">
    //                     <span></span>
    //                     <span class="bg-gray-300 py-2 px-4 rounded-full">${book.anno}</span>
    //                 </div>
    //                 <div class="font-bold text-xl mb-2">${book.title}</div>
    //                 <p class="text-gray-700 text-base">${book.descrizione}</p>
    //             </div>
    //         `;
    //   container.appendChild(bookDiv);
    //})
  );
});
