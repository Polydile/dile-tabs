import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import {DileTabs} from '../dile-tabs';
import '../dile-tabs.js';

import readme from '../README.md';

storiesOf('dile-tabs', module)
  .addDecorator(withKnobs)
  .add(
    'Selected by index',
    () => html`
      <style>
      p {
        margin: 10px;
      }
      </style>
      <dile-tabs @dile-tabs-selected-change="${
        (e) => {
          document.getElementById('msg').innerText = `Selected: ${e.detail}`;
        }
      }
      " selected="2">
        <dile-tab>One</dile-tab>
        <dile-tab>Two</dile-tab>
        <dile-tab>Three</dile-tab>
        <dile-tab>Four</dile-tab>
      </dile-tabs>
      <p id="msg"></p>
      `,
  )
  .add(
    'Selected by attribute',
    () => html`
      <style>
      p {
        margin: 10px;
      }
      </style>
      <dile-tabs @dile-tabs-selected-change="${
        (e) => {
          document.getElementById('msg2').innerText = `Selected: ${e.detail}`;
        }
      }
      " selected="posts" attrForSelected="name">
        <dile-tab name="users">Users</dile-tab>
        <dile-tab name="posts">Posts</dile-tab>
        <dile-tab name="articles">Articles</dile-tab>
        <dile-tab name="faq">FAQ</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
      </dile-tabs>
      <p id="msg2"></p>
      `,
  )
  .add(
    'Interoperability',
    () => html`
      <style>
      p {
        margin: 10px;
      }
      </style>
      <dile-tabs @dile-tabs-selected-change="${
        (e) => {
          document.getElementById('msg3').innerText = `Selected: ${e.detail}`;
        }
      }
      " selected="posts" attrForSelected="name" id="tabs">
        <dile-tab name="users">Users</dile-tab>
        <dile-tab name="posts">Posts</dile-tab>
        <dile-tab name="articles">Articles</dile-tab>
        <dile-tab name="faq">FAQ</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
      </dile-tabs>
      <p>
        <select @change="${
          (e) => {
            let newValue = e.target.value;
            if(newValue)
            document.getElementById('tabs').selected = newValue;
          }
        }">
          <option value="">Seleccionar una opción</option>
          <option value="users">Users</option>
          <option value="posts">Posts</option>
          <option value="articles">Articles</option>
          <option value="faq">FAQ</option>
          <option value="contact">Contact</option>
        </select>
      </p>
      <p id="msg3"></p>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileTabs), { notes: { markdown: readme } })
