const notesContainer = document.getElementById('notes');

// Fetch notes from backend
fetch('/api/notes')
    .then(response => response.json())
    .then(notes => {
        notes.forEach(note => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
            notesContainer.appendChild(noteElement);
        });
    })
    .catch(error => console.error('Error fetching notes:', error));
