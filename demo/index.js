import { html, render } from 'lit-html';
import '../dile-tabs.js';

const title = 'test';
render(html`
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
`, document.querySelector('#demo'));
