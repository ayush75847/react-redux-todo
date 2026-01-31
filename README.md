# ✨ React-Redux Todo App

A beautifully designed task management application built with **React**, **Redux Toolkit**, and **Tailwind CSS**, featuring a warm glassmorphism aesthetic with smooth animations and micro-interactions.

---

## 🎨 Design Features

- **Warm Glassmorphism Theme** - Frosted glass card with soft cream/beige gradients
- **Ambient Background** - Animated floating color blobs for depth and atmosphere
- **Grain Texture Overlay** - Subtle noise texture for a tactile, refined feel
- **Custom Typography** - Playfair Display (headings) + Inter (body text)
- **Smooth Animations** - Staggered fade-in for tasks, bounce effects on buttons
- **Micro-interactions** - Hover states, focus glows, and press effects
- **Responsive Design** - Optimized for all screen sizes

---

## ✨ Features

- ✅ **Add Tasks** - Quick input with keyboard shortcuts
- ✅ **Mark as Complete** - Click the checkbox to toggle task completion
- ✅ **Delete Tasks** - Hover over a task to reveal the delete button
- ✅ **Task Counter** - See pending and completed tasks at a glance
- ✅ **Empty State** - Beautiful placeholder when no tasks exist
- ✅ **Success Banner** - Celebration message when all tasks are completed
- ✅ **Redux State Management** - Centralized state with Redux Toolkit
- ✅ **Persistent UI** - Smooth transitions and animations throughout

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush75847/react-redux-todo.git
   cd react-redux-todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Todo.jsx          # Main todo list component
│   ├── AddTodo.jsx       # Task input form
│   ├── AllDone.jsx       # Success banner component
│   └── NoTask.jsx        # Empty state component
├── features/
│   └── todo/
│       └── todoSlice.js  # Redux slice for todo state
├── app/
│   └── store.js          # Redux store configuration
├── index.css             # Global styles and animations
└── main.jsx              # App entry point
```

---

## 🛠️ Technologies Used

- **React 18+** - UI library
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Nanoid** - Unique ID generation for tasks

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background Start | `#fdf6ec` | Gradient background top |
| Background End | `#f0e6d8` | Gradient background bottom |
| Accent (Terracotta) | `#d4734a` | Buttons, accents, focus states |
| Success (Green) | `#5a9a6a` | Completed task indicators |
| Danger (Red) | `#c0564a` | Delete button hover |
| Text Primary | `#2c2420` | Main text color |
| Text Dim | `#9a8c7e` | Secondary text, placeholders |

---

## 📝 Usage

### Adding a Task
1. Type your task in the input field
2. Press `Enter` or click the **Add** button
3. Your task appears with a smooth slide-in animation

### Completing a Task
- Click the **checkbox** next to any task to mark it as complete
- The task will show a strikethrough and fade slightly
- The checkbox turns green with a checkmark

### Deleting a Task
- **Hover** over any task to reveal the delete button
- Click the **trash icon** to remove the task

### Tracking Progress
- View **pending** and **completed** counts in the header pills
- See a success banner when all tasks are done

---

## 🔧 Customization

### Changing Colors
Edit CSS variables in `index.css`:
```css
:root {
    --clr-accent: #d4734a;      /* Change accent color */
    --clr-success: #5a9a6a;     /* Change success color */
    --clr-bg-start: #fdf6ec;    /* Change background gradient */
}
```

### Changing Fonts
Replace font imports in `index.html` and update in `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

h1, h2, h3 {
    font-family: 'YourFont', serif;
}
```

### Adjusting Animations
Modify animation timing in `index.css`:
```css
@keyframes fadeSlideIn {
    /* Customize animation speed/easing */
}
```

---

## 🐛 Troubleshooting

### Tasks not appearing?
- Check that your Redux store is properly configured
- Verify `initialState` in `todoSlice.js` is set to `[]`
- Ensure the reducer is connected in `store.js`

### Styles not loading?
- Confirm `index.css` is imported in `main.jsx`
- Check that Tailwind directives are present in `index.css`
- Verify font imports are in `index.html`

### VS Code showing red underlines?
- Install type definitions: `npm install -D @types/react @types/react-redux`
- Add `jsconfig.json` to your project root
- Restart VS Code

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ayush75847/react-redux-todo/issues).

---

## 💡 Acknowledgments

- Design inspiration from modern glassmorphism trends
- Icons from custom SVG designs
- Color palette inspired by warm, earthy tones

---

**Made with ❤️ and attention to detail**
