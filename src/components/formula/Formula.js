import {ExcelComponent} from '../../core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel_formula'
  toHtml() {
    return `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>
    `
  }
}
