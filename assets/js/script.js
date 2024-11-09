// Note Class represents a single note
class Note {
  constructor(id, title, text, archived = false) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.archived = archived;
  }
}

// App Class to manage notes
class App {
  constructor() {
    // Notes array to store all notes
    this.notes = [];
    this.selectedNote = null; // Currently selected note for editing

    // DOM Elements
    this.$activeForm = document.querySelector(".active-form");
    this.$inactiveForm = document.querySelector(".inactive-form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$notesContainer = document.querySelector("#notes");
    this.$archivedNotesContainer = document.querySelector("#archived-notes");
    this.$modal = document.querySelector(".modal");
    this.$modalNoteTitle = document.querySelector("#modal-note-title");
    this.$modalNoteText = document.querySelector("#modal-note-text");
    this.$archiveSidebarItem = document.querySelector("#archive-sidebar");

    this.addEventListeners();
  }

  // Add all event listeners
  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
      this.openModal(event);
    });

    // Open active form when inactive form is clicked
    this.$inactiveForm.addEventListener("click", () => {
      this.openActiveForm();
    });

    // Close active form and add note when close button is clicked
    this.$activeForm.querySelector(".close-button").addEventListener("click", () => {
      const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      if (title || text) {
        this.addNote({ title, text });
      }
      this.closeActiveForm();
    });

    // Close modal when clicking outside modal content
    this.$modal.addEventListener("click", (event) => {
      this.handleModalClick(event);
    });

    // Close modal when close button is clicked
    this.$modal.querySelector(".close-button").addEventListener("click", () => {
      this.closeModal();
    });

    // Archive note from modal
    this.$modal.querySelector(".archive-icon").addEventListener("click", () => {
      this.archiveNote(this.selectedNote.id);
      this.closeModal();
    });

    // Archive note from note footer icon
    this.$notesContainer.addEventListener("click", (event) => {
      if (event.target.matches('.archive-icon')) {
        const noteId = event.target.closest('.note').dataset.id;
        this.archiveNote(noteId);
      }
    });

    // Switch between notes and archived notes when clicking sidebar
    this.$archiveSidebarItem.addEventListener("click", () => {
      this.toggleArchivedNotes();
    });
  }

  // Handle clicks outside of forms to close them and add note
  handleFormClick(event) {
    const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);
    const isActiveFormClickedOn = this.$activeForm.contains(event.target);

    const title = this.$noteTitle.value;
    const text = this.$noteText.value;

    if (!isActiveFormClickedOn && !isInactiveFormClickedOn) {
      if (title || text) {
        this.addNote({ title, text });
      }
      this.closeActiveForm();
    }
  }

  // Open the active form
  openActiveForm() {
    this.$activeForm.style.display = "flex";
    this.$inactiveForm.style.display = "none";
    this.$noteText.focus();
  }

  // Close the active form and clear inputs
  closeActiveForm() {
    this.$activeForm.style.display = "none";
    this.$inactiveForm.style.display = "flex";
    this.$noteTitle.value = "";
    this.$noteText.value = "";
  }

  // Add a new note to the notes array
  addNote({ title, text }) {
    const newNote = new Note(Date.now(), title, text);
    this.notes = [...this.notes, newNote];
    this.displayNotes();
  }

  // Display notes on the page
  displayNotes() {
    // Display active notes
    const activeNotes = this.notes.filter((note) => !note.archived);
    this.$notesContainer.innerHTML = activeNotes
      .map(
        (note) => `
      <div class="note" data-id="${note.id}">
        <div class="note-content">
          <div class="note-header">
            <p>${note.title}</p>
            <span class="material-symbols-outlined note-pin">push_pin</span>
          </div>
          <p>${note.text}</p>
        </div>
        <div class="note-footer-icons">
          <span class="material-symbols-outlined footer-icon">add_alert</span>
          <span class="material-symbols-outlined footer-icon">person_add</span>
          <span class="material-symbols-outlined footer-icon">palette</span>
          <span class="material-symbols-outlined footer-icon">image</span>
           <span class="material-symbols-outlined footer-icon archive-icon">archive</span>
          <span class="material-symbols-outlined footer-icon">more_vert</span>
        </div>
      </div>
    `
      )
      .join("");

    // Display archived notes
    const archivedNotes = this.notes.filter((note) => note.archived);
    this.$archivedNotesContainer.innerHTML = archivedNotes
      .map(
        (note) => `
      <div class="note" data-id="${note.id}">
        <div class="note-content">
          <div class="note-header">
            <p>${note.title}</p>
            <span class="material-symbols-outlined note-pin">push_pin</span>
          </div>
          <p>${note.text}</p>
        </div>
        <div class="note-footer-icons">
          <span class="material-symbols-outlined footer-icon unarchive-icon">unarchive</span>
          <span class="material-symbols-outlined footer-icon">delete</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Open modal to edit a note
  openModal(event) {
    if (event.target.closest(".note")) {
      const $selectedNote = event.target.closest(".note");
      const noteId = $selectedNote.dataset.id;
      this.selectedNote = this.notes.find((note) => note.id == noteId);
      this.$modalNoteTitle.value = this.selectedNote.title;
      this.$modalNoteText.value = this.selectedNote.text;
      this.$modal.classList.add("open-modal");
    }
  }

  // Close modal and save changes
  closeModal() {
    this.editNote(this.selectedNote.id, {
      title: this.$modalNoteTitle.value,
      text: this.$modalNoteText.value,
    });
    this.$modal.classList.remove("open-modal");
    this.selectedNote = null;
  }

  // Handle clicks outside modal content to close modal
  handleModalClick(event) {
    if (!event.target.closest(".modal-content")) {
      this.closeModal();
    }
  }

  // Edit an existing note
  editNote(id, { title, text }) {
    this.notes = this.notes.map((note) => {
      if (note.id == id) {
        return { ...note, title, text };
      }
      return note;
    });
    this.displayNotes();
  }

  // Archive a note
  archiveNote(id) {
    this.notes = this.notes.map((note) => {
      if (note.id == id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.displayNotes();
  }

  // Unarchive a note
  unarchiveNote(id) {
    this.notes = this.notes.map((note) => {
      if (note.id == id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.displayNotes();
  }

  // Toggle between displaying notes and archived notes
  toggleArchivedNotes() {
    if (this.$archivedNotesContainer.style.display === "none") {
      this.$archivedNotesContainer.style.display = "flex";
      this.$notesContainer.style.display = "none";
    } else {
      this.$archivedNotesContainer.style.display = "none";
      this.$notesContainer.style.display = "flex";
    }
  }
}

// Initialize the App
const app = new App();
