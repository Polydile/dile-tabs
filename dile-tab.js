import { LitElement, html, css } from 'lit-element';

class DileTab  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 3px;
      }
      article {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
      }
      div.label {
        padding: var(--dile-label-padding, 8px 12px 6px 12px);
        text-transform: uppercase;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: Boolean },
      index: { type: Number },
    };
  }

  constructor() {
    super();
    this.selected = false;
  }

  render() {
    return html`
      <article @click='${this.select}' class="${this.selected ? 'selected' : ''}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected ? 'markselected' : ''}"></span>
        </div>
      </article>
    `;
  }

  select() {
    this.dispatchEvent(new CustomEvent('dile-tab-selected', {
      bubbles: true,
      composed: true,
      detail: this
    }));
  }
}

customElements.define('dile-tab', DileTab);