# Tic-Tac-Toe Game (ReactJS)

## Description

This is a simple Tic-Tac-Toe game implemented using ReactJS. Players can take turns marking X and O on a 3x3 grid. The game detects a win or a draw and allows players to restart the game.

## Demo

You can try the live demo of the Tic-Tac-Toe game [here](https://example.com/tictactoe-demo).

## Installation

To run the Tic-Tac-Toe game locally, follow these steps:

1. Clone the repository to your local machine:    git clone https://github.com/bppalomer/tictactoe.git
2. Navigate to the project directory:    cd tictactoe-react
3. Install the required dependencies:   npm install
4. Start the development server:    npm run dev
5. Open your web browser and visit `http://localhost:5173` to play the game.

## Features

- Two-player mode: Play against a friend on the same device.
- Interactive board: Click on the cells to make your move.
- Win detection: The game automatically detects when a player wins.
- Draw detection: The game detects when the board is full with no winner.
- Restart game: After a win or draw, players can restart the game.

## Folder Structure

The project structure is organized as follows:

tictactoe-react/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Board.js
│ │ ├── Square.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
└── ...

## Compromises Made

Due to time constraints and the simplicity of the project, the current implementation doesn't include more advanced features like:

- Single-player mode with an AI opponent.
- Online multiplayer with real-time functionality.

Additionally, the styling and user interface are kept minimal for this basic version.

## Future Improvements

Given more time, the following improvements could be considered:

- Implement an AI opponent using a suitable algorithm (e.g., Minimax) for single-player mode.
- Add animations and better user interface elements to enhance the user experience.
- Implement a feature to save and load game state.

## Unhandled Error Cases and Impact

The current implementation doesn't handle restart functionality. This may lead to refreshing the webpage again to refresh the scores of the players.