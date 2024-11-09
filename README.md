# Google Keep Clone

A simplified version of Google Keep built using HTML, CSS, and JavaScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
  - [Creating a Note](#creating-a-note)
  - [Editing a Note](#editing-a-note)
  - [Archiving and Unarchiving Notes](#archiving-and-unarchiving-notes)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)

## Introduction

This project is a simplified clone of Google Keep, allowing users to create, edit, archive, and display notes. The application focuses on fundamental web development skills, including HTML structure, CSS styling, and JavaScript functionality.

## Features

- **Create and Add Notes**: Users can create new notes with titles and content.
- **Edit Notes**: Existing notes can be edited through a modal interface.
- **Archive and Unarchive Notes**: Notes can be archived to keep the workspace organized.
- **Responsive Design**: The layout adapts to different screen sizes for optimal user experience.
- **Interactive Elements**: Tooltips and modals enhance user interaction.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Material Symbols**: For icons (loaded via Google Fonts)

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, Safari)
- A text editor or IDE (e.g., Visual Studio Code) for viewing or modifying the code

### Installation

#### Option 1: Clone the Repository (Recommended)

1. **Clone the repository** to your local machine using Git:

   ```bash
   git clone https://github.com/neo-mtshali/gog-kp-clone.git
   ```

2. **Navigate** to the project directory:

   ```bash
   cd google-keep-clone
   ```

#### Option 2: Download as ZIP

1. **Download** the ZIP file from the repository's main page.

2. **Extract** the ZIP file to your desired location.

### Running the Project

#### Option 1: Open Directly in Browser

1. **Navigate** to the project directory.

2. **Locate** the `index.html` file.

3. **Double-click** on `index.html` to open it in your default web browser.

   - Alternatively, right-click on `index.html`, select **Open with**, and choose your preferred browser.

#### Option 2: Use a Local Web Server (Recommended for Best Experience)

Using a local web server can handle file paths more efficiently and avoid potential CORS issues.

**Using VSCode Live Server Extension:**

1. **Install** the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code.

2. **Open** the project folder in VSCode.

3. **Right-click** on `index.html` and select **Open with Live Server**.

4. **Navigate** to `http://localhost:8000` in your web browser.

## Usage

### Creating a Note

1. **Click** on the **"Take a note..."** input field to open the active form.

2. **Enter** a **title** and/or **text** for your note.

3. **Click** outside the form or the **Close** button to save the note.

   - The note will appear in the **Notes** section.

### Editing a Note

1. **Click** on an existing note to open it in a modal window.

2. **Modify** the **title** and/or **text** in the modal.

3. **Click** outside the modal or the **Close** button to save changes.

### Archiving and Unarchiving Notes

- **Archive a Note:**

  1. **Click** the **Archive** icon (🗄️) on a note to archive it.

  2. The note will be moved to the **Archived Notes** section.

- **View Archived Notes:**

  1. **Click** on the **Archive** item in the sidebar.

  2. Archived notes will be displayed.

- **Unarchive a Note:**

  1. In the **Archived Notes** view, **click** the **Unarchive** icon (📤) on a note to move it back to active notes.

## Project Structure

```
google-keep-clone/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
```

- **index.html**: The main HTML file containing the application's structure.
- **styles.css**: Contains all CSS styles for the application.
- **script.js**: Contains all JavaScript code for functionality.


## Acknowledgments

- **Google Keep**: Inspiration for the project.
- **Material Symbols**: Icons used in the application.
- **MDN Web Docs**: For valuable resources and documentation.

---

**Note**: This project is for educational purposes and is not an exact replica of Google Keep. It aims to practice and demonstrate web development skills using HTML, CSS, and JavaScript.

# Thank You!

