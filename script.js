const boardElement = document.querySelector('.board'); // Renamed to avoid conflict
const digit = document.querySelector('.digit');
const submitBtn = document.querySelector('#submitBtn');
let Last_selectedtile = null;
let solution = [];

let startTime;
let timeInterval;

// Function to check if a number can be placed in a specific cell
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num ||
            board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
            return false;
        }
    }
    return true;
}

// Function to solve the Sudoku puzzle
function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, String(num))) {
                        board[row][col] = String(num);
                        if (solveSudoku(board)) return true;
                        board[row][col] = '.';  // Reset if no solution
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// Function to generate a Sudoku grid
function generateSudokuGrid() {
    let board = Array.from({ length: 9 }, () => Array(9).fill('.'));
    solveSudoku(board);
    return board;
}

// let level=Math.floor(Math.random()*10+30);
// Function to remove numbers from a solved grid to create a puzzle
function removeNumbers(board, level=50) {
    let tempBoard = board.map(row => row.slice()); // Deep copy the board
    for (let i = 0; i < level; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        tempBoard[row][col] = '.'; // Remove a number
    }
    return tempBoard;
}

// Function to render the grid
function renderGrid(board) {
    // Clear the existing tiles
    boardElement.innerHTML = ''; // Clear previous tiles
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'tile';
            cellElement.textContent = cell !== '.' ? cell : ''; // Display number or blank
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = colIndex;

            // Mark fixed digits
            if (cell !== '.') {
                cellElement.classList.add('fixedDigit');
            }

            // Add click event to select a tile
            cellElement.addEventListener('click', selectedtile);
            boardElement.appendChild(cellElement); // Append to the correct DOM element
        });
    });

    for (let i = 1; i <= 9; i++) {
        const row = document.createElement('div');
        row.classList.add('tile');
        row.addEventListener('click', addNumber);
        row.innerText = i;
        digit.appendChild(row);

    }
}

// Function to select a tile
function selectedtile() {
    if (Last_selectedtile !== null) {
        Last_selectedtile.classList.remove('select');
    }
    Last_selectedtile = this;
    Last_selectedtile.classList.add('select');
    if (this.classList.contains('fixedDigit')) {
        this.classList.remove('select'); // Don't allow selection for fixed digits
    }
}

// Function to add a number to the selected tile
function addNumber() {
    if (Last_selectedtile && !Last_selectedtile.classList.contains('fixedDigit')) {
        Last_selectedtile.textContent = this.innerText;
        Last_selectedtile.style.color = '#fff'; // Change color to indicate user entry
    }
}

// Function to store the board values for validation
function storeBoardValues() {
    const tiles = document.querySelectorAll('.board .tile');
    let boardValues = [];

    for (let i = 0; i < 9; i++) {
        boardValues[i] = [];
        for (let j = 0; j < 9; j++) {
            const tile = tiles[i * 9 + j];
            const value = tile.innerText;
            boardValues[i][j] = value ? value : '.'; // Use '.' if empty
        }
    }
    return boardValues;
}

// Function to check if the Sudoku puzzle is solved correctly
function checkAnswer(boardValues) {
    for (let i = 0; i < boardValues.length; i++) {
        for (let j = 0; j < boardValues[i].length; j++) {
            if (boardValues[i][j] !== solution[i][j]) {
                return false;
            }
        }
    }
    return true;
}

// Function to check if all cells are filled
function isFilled(boardValues) {
    for (let i = 0; i < boardValues.length; i++) {
        for (let j = 0; j < boardValues[i].length; j++) {
            if (boardValues[i][j] == ".") {
                return false;
            }
        }
    }
    return true;
}

let filledBoard;
submitBtn.onclick = function () {
    filledBoard = storeBoardValues(); // Call the function to store board values
    console.log(filledBoard);
    let filledb = isFilled(filledBoard);
    console.log(filledb);
    if (filledb) {
        let myans = checkAnswer(filledBoard);
        console.log(myans);
        if (myans) {
            alert("Congratulations, you have solved the Sudoku puzzle!");
            location.reload();
        }
        else {
            alert("Sorry, the solution is incorrect. Please try again.");
            // location.reload();
        }
    }
    else {
        alert("Sorry, the board is not filled.");
    }

};
// Initialize the Sudoku game
const limit=function initGame() {
    const generatedBoard = generateSudokuGrid();
    solution = JSON.parse(JSON.stringify(generatedBoard)); // Store the solution
    const puzzleBoard = removeNumbers(generatedBoard);
    renderGrid(puzzleBoard);
    const startBtn=document.querySelector("#start");
    if(startBtn){
        startBtn.addEventListener("click",startTimer)
    }{

    }
}

//this is refresh the page after click on new Puzzle
document.querySelector('#newPuzzle').addEventListener('click',()=>location.reload())
//stop the game

let elapsedTime=300;
function startTimer(){
    
    const startBtn=document.querySelector('#start');
    const timerElement=document.querySelector('#timer');

    startBtn.style.display="none";
    timerElement.style.display='block';

    startTime = Date.now();
    timeInterval = setInterval(()=>{
        elapsedTime--;
        displayTime(elapsedTime);

        if(elapsedTime<=0){
            clearInterval(timeInterval);
            // alert("Time's up!");
            timerElement.style.color='red'
            timerElement.innerHTML="Time Over";
            location.reload();
        }
    },1000);
}
//display time
function displayTime(time){
    const timerElement=document.querySelector('#timer');
    const minute=(Math.floor(time/60))
    const remaining=Math.floor(time%60);
    console.log(`${minute} : ${remaining<10?'0':''} ${remaining}`)
    timerElement.textContent=`Time Remain :  ${minute} : ${remaining<10?'0':''} ${remaining}`;

}
//apply the how many minute it takes

// Start the game
limit();
