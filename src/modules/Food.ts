/**
 * (0,0)————(29,0)
 *      |
 *(0,29)|
 */

/**
 * 食物类
 */
class Food {
  element: HTMLElement;
  constructor() {
    // 获取元素并赋值给element
    this.element = document.getElementById('food')!;
  }
  // 获取食物的横坐标
  get X() {
    return this.element.offsetLeft
  }
  // 获取食物的纵坐标
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置的方法  [0-290]
  change() {
    // 生成0-29的随机数
    const markLeft = Math.round(Math.random() * 29) * 10
    const markTop = Math.round(Math.random() * 29) * 10

    this.element.style.left = markLeft + 'px'
    this.element.style.top = markTop + 'px'
  }
}

export default Food