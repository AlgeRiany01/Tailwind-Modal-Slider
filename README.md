
```markdown
# Vanilla Modal and Slider Project

This is a lightweight, high-performance web project demonstrating a **modal** and **image slider** built using **native technologies**: **Vanilla HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. No external libraries or frameworks are used, showcasing the power and flexibility of plain, native web development.

## Key Features

- **Modal**: A dynamic modal that can be opened and closed by clicking a button or by clicking outside the modal area.
- **Image Slider**: An automatic image slider that transitions between images every 2.5 seconds, with manual controls for "Next" and "Previous".
- **No Dependencies**: Everything is built from scratch with no external dependencies, ensuring optimal performance and flexibility.

## Getting Started

To get the project up and running locally, follow the steps below:

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/vanilla-modal-slider.git
cd vanilla-modal-slider
```

### 2. Install Dependencies

Although the project does not rely on external libraries for its core functionality, we use **npm** to manage development tools like **Tailwind CSS** for styling. To install the necessary dependencies, run:

```bash
npm install
```

This command installs Tailwind CSS and other development tools specified in `package.json`.

### 3. Start the Development Server

Once the dependencies are installed, start the local development server. This allows you to view the project in your browser and see live updates as you work:

```bash
npm run dev
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build for Production

When you're ready to deploy or optimize the project for production, run the following command to bundle and minify the files:

```bash
npm run build
```

This will generate production-ready assets in the `dist/` directory, which can be served on any web server.

## Project Structure

The project follows a clean and simple file structure:

```
vanilla-modal-slider/
├── css/
│   └── tailwind.css             # Tailwind CSS file (compiled version)
├── imgs/
│   ├── 1.jpg                   # Background image
│   ├── 2.jpg                   # Slider image 1
│   ├── 3.avif                  # Slider image 2
│   ├── 4.jpg                   # Slider image 3
│   ├── 5.jpg                   # Slider image 4
│   └── 6.jpg                   # Slider image 5
├── js/
│   └── script.js                # JavaScript for slider and modal functionality (vanilla JS)
├── index.html                   # Main HTML file
├── package.json                 # npm configuration (for Tailwind and build tools)
└── README.md                    # Project documentation
```

## Technologies Used

- **HTML**: The structure and layout of the webpage are built using standard HTML.
- **Tailwind CSS**: A utility-first CSS framework used for styling the layout and components. No external dependencies, all styles are custom-built using Tailwind classes.
- **Vanilla JavaScript**: The modal and image slider functionality are implemented using plain JavaScript, ensuring maximum performance and simplicity without any third-party libraries.
- **npm**: Used only for managing development tools like Tailwind CSS. No additional libraries are used in the production build.

## Scripts

The project includes several npm scripts for ease of development:

- **`npm install`**: Installs the required dependencies (like Tailwind CSS).
- **`npm run dev`**: Starts the local development server (e.g., using Vite or another bundler).
- **`npm run build`**: Builds the project for production (optimizes and minifies files).

## Why Use Vanilla JS & Tailwind CSS?

- **Performance**: By avoiding external JavaScript libraries or frameworks, this project ensures the smallest footprint and the fastest load times.
- **Flexibility**: Using native JavaScript provides maximum flexibility and full control over the functionality of the modal and slider components.
- **Modern CSS with Tailwind**: Tailwind CSS allows for rapid styling with utility-first classes, providing clean and maintainable code without bloating the project with unused styles.
- **No Dependencies**: By not relying on any additional JavaScript libraries or frameworks, the project remains lightweight, making it easy to integrate into any larger system without introducing unnecessary complexity.

## Customization

- **Images**: Replace the images in the `imgs/` folder with your own to personalize the slider.
- **Styles**: Tailwind allows for easy customization. You can tweak the design by modifying classes directly in the HTML or by editing the `tailwind.css` file.
- **JavaScript**: If you need to modify the slider or modal behavior, the logic is written in pure JavaScript, making it simple to extend or modify as needed.

## License

This project is open-source and available under the **MIT License**.
