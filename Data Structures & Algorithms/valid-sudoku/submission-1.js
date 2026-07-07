class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //check rows
        for(let row = 0; row < 9; row++) {
            const seen = new Set()
            for(let i = 0; i < 9; i++) {
                if (board[row][i] === '.') continue
                if(seen.has(board[row][i])) return false
                seen.add(board[row][i])
            }
        }

        //check cols
        for(let col= 0; col < 9; col++) {
            const seen = new Set()
            for(let i = 0; i < 9; i++) {
                if (board[i][col] === '.') continue
                if(seen.has(board[i][col])) return false
                seen.add(board[i][col])
            }
        }

        //check squares
        for(let r = 0; r < 9; r+=3) {
            for(let c = 0; c < 9; c+=3) {
                const seen = new Set()
                for(let x = 0; x < 3; x++) {
                    for(let y = 0; y < 3; y++) {
                        if(board[r+x][c+y] === '.') continue
                        if(seen.has(board[r+x][c+y])) return false
                        seen.add(board[r+x][c+y])
                }
            }
        }
        }

        return true
    }
}
