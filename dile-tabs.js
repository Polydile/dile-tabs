import { html, css, LitElement } from 'lit-element';
import './dile-tab';

export class DileTabs extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: String },
      attrForSelected: { type: String },
    }
  }

  constructor() {
    super();
    this.selected = 0;
    this.tabs = [];
    this.addEventListener('dile-tab-selected', this.tabSelectedChanged.bind(this));
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    let DOMTabs = this.children;
    let index = 0;
    for (let item of DOMTabs) {
      if(item.tagName.toLowerCase() == 'dile-tab') {
        item.index = index;
        index++;
        this.tabs.push(item);
      }
    }
    this.setSelectedTab();
  }

  setSelectedTab() {
    if(! this.attrForSelected) {
      // Selected by index
      let selectedIndex = parseInt(this.selected);
      if(! isNaN(selectedIndex) && this.tabs[selectedIndex]) {
        for (let index in this.tabs) {
          if(index == selectedIndex) {
            this.tabs[index].selected = true;
          } else {
            this.tabs[index].selected = false;
          }
        }
      }
    } else {
      // Selected by attribute
      for (let tab of this.tabs) {
        console.log(this.attrForSelected, tab[this.attrForSelected]);
        if(tab.getAttribute(this.attrForSelected) == this.selected) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
      }
    }
  }

  tabSelectedChanged(e) {
    if(! this.attrForSelected) {
      // selected by index
      this.selected = e.detail.index;
    } else {
      // selected by attribute
      this.selected = e.detail.getAttribute(this.attrForSelected);
    }
    this.setSelectedTab();
  }

  updated(changedProperties) {
    console.log('updated', changedProperties);
    console.log('selected actual', this.selected);
    if(changedProperties.has('selected')) {
      this.dispatchEvent(new CustomEvent('dile-tabs-selected-changed', {
        bubbles: true,
        composed: true,
        detail: this.selected
      }));
    }
  }
}


window.customElements.define('dile-tabs', DileTabs);
