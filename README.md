# **Sudoku Solver**

Welcome to the **Sudoku Solver** project! This interactive Sudoku game allows you to solve Sudoku puzzles in a fun and engaging way. Whether you're a Sudoku enthusiast or a beginner, this game is designed to provide a seamless experience with features like puzzle generation, validation, and a timer to challenge yourself.

---

## **Features**

### **1. Interactive Sudoku Board**
- **Dynamic Puzzle Generation**: The game generates a new Sudoku puzzle every time you start or refresh the page.
- **User -Friendly Interface**: Click on any empty cell to select it, and then choose a number from the digit panel to fill it in.
- **Fixed Digits**: Pre-filled numbers are marked as fixed and cannot be changed by the user.

### **2. Puzzle Validation**
- **Submit Button**: Once you've filled in all the cells, click the "Submit" button to check if your solution is correct.
- **Real-Time Feedback**: The game will alert you if your solution is correct or if there are any mistakes.

### **3. Timer**
- **Countdown Timer**: Challenge yourself by solving the puzzle within a set time limit. The timer starts when you click the "Start" button.
- **Time's Up Alert**: If the timer runs out, the game will notify you and reload the puzzle.

### **4. New Puzzle**
- **Refresh Puzzle**: Click the "New Puzzle" button to generate a fresh Sudoku puzzle and start over.

---

## **How to Play**

1. **Start the Game**:
   - Click the "Start" button to begin the timer and start solving the puzzle.

2. **Select a Cell**:
   - Click on any empty cell to select it. The selected cell will be highlighted.

3. **Fill in a Number**:
   - Choose a number from the digit panel at the bottom of the board to fill in the selected cell.

4. **Submit Your Solution**:
   - Once you've filled in all the cells, click the "Submit" button to check if your solution is correct.

5. **Generate a New Puzzle**:
   - If you want to start over or try a new puzzle, click the "New Puzzle" button.

---

## **Technical Details**

### **1. Puzzle Generation**
- The game generates a valid Sudoku puzzle using a backtracking algorithm.
- A certain number of cells are randomly removed to create a solvable puzzle.

### **2. Puzzle Validation**
- The game checks your solution against the pre-generated correct solution to determine if it's correct.

### **3. Timer**
- The timer counts down from 5 minutes (300 seconds). If the time runs out, the game will reload the puzzle.

---

## **Code Structure**

### **1. HTML (`index.html`)**
- The main structure of the game, including the Sudoku board, digit panel, and buttons.

### **2. CSS (`Style.css`)**
- Styling for the Sudoku board, cells, and other UI elements.

### **3. JavaScript (`script.js`)**
- Core logic for puzzle generation, user interaction, and validation.

---

## **Getting Started**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Sudoku-Solver.git
