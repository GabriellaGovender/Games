document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById("chessboard");
    const btnDisplay = document.getElementById("btnDisplay");

    function setBoard() {
        const piecePositions = {
            'A8': 'Chess_rdt45.svg', 'B8': 'Chess_ndt45.svg', 'C8': 'Chess_bdt45.svg', 'D8': 'Chess_qdt45.svg',
            'E8': 'Chess_kdt45.svg', 'F8': 'Chess_bdt45.svg', 'G8': 'Chess_ndt45.svg', 'H8': 'Chess_rdt45.svg',
            'A7': 'Chess_pdt45.svg', 'B7': 'Chess_pdt45.svg', 'C7': 'Chess_pdt45.svg', 'D7': 'Chess_pdt45.svg',
            'E7': 'Chess_pdt45.svg', 'F7': 'Chess_pdt45.svg', 'G7': 'Chess_pdt45.svg', 'H7': 'Chess_pdt45.svg',
            'A1': 'Chess_rlt45.svg', 'B1': 'Chess_nlt45.svg', 'C1': 'Chess_blt45.svg', 'D1': 'Chess_qlt45.svg',
            'E1': 'Chess_klt45.svg', 'F1': 'Chess_blt45.svg', 'G1': 'Chess_nlt45.svg', 'H1': 'Chess_rlt45.svg',
            'A2': 'Chess_plt45.svg', 'B2': 'Chess_plt45.svg', 'C2': 'Chess_plt45.svg', 'D2': 'Chess_plt45.svg',
            'E2': 'Chess_plt45.svg', 'F2': 'Chess_plt45.svg', 'G2': 'Chess_plt45.svg', 'H2': 'Chess_plt45.svg'
        };

        Object.keys(piecePositions).forEach(id => {
            const square = document.getElementById(id);
            square.innerHTML += `<img src="ChessPieces/${piecePositions[id]}" alt="Chess Piece" class="piece" draggable="true" ondragstart="drag(event)" id="piece-${id}">`;
        });

        btnSet.hidden = true;
    }

    //DISPLAT BOARD
    function display() {
        const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let board = '';

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const squareId = `${alph[j]}${8 - i}`;
                const squareClass = (i % 2 === j % 2) ? 'light-square' : 'dark-square';
                board += `<div class="${squareClass}" id="${squareId}" ondrop="drop(event)" ondragover="allowDrop(event)">${squareId}</div>`;
            }
        }

        chessboard.innerHTML = board;
        btnDisplay.innerHTML = "RESET";
        setBoard();
        
    }

    // Drag and drop functions
    window.allowDrop = function(event) {
        event.preventDefault();
    }

    window.drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    window.drop = function(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const piece = document.getElementById(data);
        const targetSquare = event.target;

        // Validate the move
        if (isValidMove(piece, targetSquare)) {
            targetSquare.appendChild(piece);
        }
    }

    /* TO DO: 
         add move validation logic here
    */
    function isValidMove(piece, targetSquare) {
        return targetSquare.tagName === "DIV" && targetSquare.childElementCount === 0;
    }

    btnDisplay.addEventListener("click", display);
});
