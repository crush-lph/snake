// 记分牌
class ScorePanel {
  score = 0;
  level = 1;
  scoreELe: HTMLElement;
  levelEle: HTMLElement;
  maxLevel: number;
  constructor(maxLevel: number = 10) {
    // 分数
    this.scoreELe = document.getElementById('score')!;
    // 等级
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel
  }

  // 加分方法
  addScore() {
    this.scoreELe.innerHTML = ++this.score + '';
    if (this.score % 10 === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
  // 重置
  reset() {
    this.score = 0
    this.level = 1
  }
}

export default ScorePanel