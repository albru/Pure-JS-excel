export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    $root.classList.add('excel')

    this.components.forEach((Component) => {
      const $el = document.createElement('div')
      const component = new Component($el)
      $el.classList.add(Component.className)
      $el.innerHTML = component.toHtml()
      $root.append($el)
    })
    return $root
  }
  render() {
    this.$el.append(this.getRoot())
  }
}
