function createBook() {
    const title = document.getElementById('grid-first-name').value;
    const description = document.getElementById('grid-last-name').value;
    const anno = document.getElementById('year-input').value;
    // const category = document.getElementById('grid-state').value;
    const authorId = document.getElementById('authorId').value;
    const categoryId = document.getElementById('categoryId').value;

    const bookData = {
        title: title,
        description: description,
        anno: anno,
        // category: category,
        authorId: authorId,
        categoryId: categoryId
    };

    const apiUrl = `http://localhost:5091/api/Book`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Libro creato con successo:', data);
            window.location.href = 'index.html';
        })

        .catch(error => {
            console.error('Errore nella creazione del libro:', error);
            console.error('Dettagli errore:', error.message);
        });
}



