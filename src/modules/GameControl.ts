// 游戏控制器
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'


class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = 'Right'
  timer: null | any
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init()
  }

  init() {
    // 绑定按键事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
    this.food.change()
  }

  /**
   * 按键回调函数
   *  ArrowUp    w Up
      ArrowLeft  a Left
      ArrowDown  s Down
      ArrowRight d Right
   */
  keydownHandler(event: KeyboardEvent) {
    // 检测用户输入是否合法
    if (!this.snake.isLive) {
      this.snake.reLive()
      this.scorePanel.reset()
      this.run()
    }
    this.direction = event.key
  }

  // 蛇移动 
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
      case 'w':
      case 'W':
        // top-
        Y -= 10
        break;
      case 'ArrowDown':
      case 'Down':
      case 's':
      case 'S':
        Y += 10
        break;
      case 'ArrowLeft':
      case 'Left':
      case 'a':
      case 'A':
        X -= 10
        break;
      case 'ArrowRight':
      case 'Down':
      case 'd':
      case 'D':
        X += 10
        break;
    }

    if (this.checkEat(X, Y)) {
      this.snake.growUp()
      this.food.change()
      this.scorePanel.addScore()
    }

    this.snake.X = X
    this.snake.Y = Y

    this.snake.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(X: number, Y: number) {
    if (this.food.X === X && this.food.Y === Y) {
      return true
    }
    return false
  }
}

export default GameControl