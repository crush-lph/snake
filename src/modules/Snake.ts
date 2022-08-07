class Snake {
  head: HTMLElement;
  cells: HTMLCollection;
  element: HTMLElement;
  isLive = true;
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')!;
    this.cells = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }
  set X(value: number) {
    if (this.X === value) return
    if (value > 290 || value < 0) {
      this.dead()
    }

    //如果触发调头事件  让蛇按照原方向行动
    if (this.cells[1] && (this.cells[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkCrash()
  }

  set Y(value: number) {
    if (this.Y === value) return
    // 当坐标值超过【0，290】表示撞墙
    if (value > 290 || value < 0) {
      this.dead()
    }

    //如果触发调头事件  让蛇按照原方向行动
    if (this.cells[1] && (this.cells[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10

      }
    }

    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkCrash()
  }
  // 蛇的成长
  growUp() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  reLive() {
    console.log('复活');
    this.X = 0
    this.Y = 0
    this.isLive = true
  }

  dead() {
    this.isLive = false
    alert('GAME OVER!')
  }

  moveBody() {
    /**
     * 将后边身体的位置设置为前边身体的位置
     */
    for (let i = this.cells.length - 1; i > 0; i--) {
      const x = (this.cells[i - 1] as HTMLElement).offsetLeft;
      const y = (this.cells[i - 1] as HTMLElement).offsetTop;
      (this.cells[i] as HTMLElement).style.left = x + 'px';
      (this.cells[i] as HTMLElement).style.top = y + 'px';
    }
  }

  // 检查蛇头是否撞击身体
  checkCrash() {
    for (let i = 1; i < this.cells.length; i++) {
      const cell = this.cells[i] as HTMLElement
      if (this.X === cell.offsetLeft && this.Y === cell.offsetTop) {
        this.dead()
      }
    }
  }
}

export default Snake