<template>
  <div class="tic-tac-toe">
    <h2>Tic Tac Toe</h2>
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        class="cell"
        @click="makeMove(index)"
      >
        {{ cell }}
      </div>
    </div>
    <div v-if="winner">
      <p>{{ winnerMessage }}</p>
      <button @click="resetGame">Restart</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const board = ref(Array(9).fill(''))
const currentPlayer = ref('X')
const winner = ref(null)

function makeMove(index) {
  if (!board.value[index] && !winner.value) {
    board.value[index] = currentPlayer.value
    checkWinner()
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
  ]
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern
    if (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    ) {
      winner.value = board.value[a]
      return
    }
  }
  if (board.value.every(cell => cell)) {
    winner.value = 'Draw'
  }
}

function resetGame() {
  board.value = Array(9).fill('')
  currentPlayer.value = 'X'
  winner.value = null
}

const winnerMessage = computed(() =>
  winner.value === 'Draw'
    ? 'It\'s a draw!'
    : winner.value
    ? `Player ${winner.value} wins!`
    : ''
)
</script>

<style scoped>
.tic-tac-toe {
  text-align: center;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 5px;
  margin: 20px auto;
  width: max-content;
}
.cell {
  width: 60px;
  height: 60px;
  background: #eee;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.cell:hover {
  background: #ddd;
}
</style>