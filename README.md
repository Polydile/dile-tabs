# \<dile-tabs>

Web Component to implement a tabs interface. Based on LitElement

Go to [DEMOS page](https://dile-tabs.polydile.com/)

## Installation

```bash
npm i dile-tabs
```

## Usage

```<dile-tabs>``` is a component you may use to select one of several posible values. It shows to the user creating a tabs interface.

To use the  component you need include (or import) the component script, and then use a markup based on two tags. First of them is ```<dile-tabs>```, which is the entire set of tabs. The second component is ```<dile-tab>``` (in singular), which is one of the tabs of the interface.


```html
<script type="module">
  import 'dile-tabs/dile-tabs.js';
</script>

<dile-tabs selected="2">
    <dile-tab>One</dile-tab>
    <dile-tab>Two</dile-tab>
    <dile-tab>Three</dile-tab>
    <dile-tab>Four</dile-tab>
  </dile-tabs>
```

## Properties

The component has the properties bellow:

### selected:

This property sets the currently selected tab of the interface. By default the selected value need to be an integer, specifying th index of the selected tab (starting at 0 for the first tab, 1 for the second...).

### attrForSelected:

This property tells the ```<dile-tabs>``` component which attribute need to match the ```selected``` property to set the active tab. By default ```atrrForSelected``` is ```undefined```. In that case the ```selected``` property should be an integer and match to the index of the tab. If you set ```atrrForSelected``` with a value, then the ```selected``` property will be matched with the value of the attribute named in ```attrForSelected```.

The next example show how to use the attrForSelected property

```
<dile-tabs selected="posts" attrForSelected="name">
  <dile-tab name="users">Users</dile-tab>
  <dile-tab name="posts">Posts</dile-tab>
  <dile-tab name="articles">Articles</dile-tab>
  <dile-tab name="faq">FAQ</dile-tab>
  <dile-tab name="contact">Contact</dile-tab>
</dile-tabs>
´´´

## Events

### dile-tabs-selected-change:

Every time ```selected``` property changes the ```<dile-tabs>``` component dispatch the ```dile-tabs-selected-change``` custom event. You will recive the new selected value in the ```detail``` event object property.

## CSS custom properties

You can customize the tabs using the CSS custom properties bellow.

Custom property | Description | Default
----------------|-------------|---------
--dile-tab-text-color | The tab text color | #666
--dile-tab-background-color | The tab background color | Transparent
--dile-tab-selected-text-color | The tab text color | #fff
--dile-tab-selected-background-color | The tab background color | #039be5;
--dile-label-padding | Content padding of the tab | 8px 12px 6px 12px
--dile-tab-selected-line-height | Defines selected tab line height | 5px
--dile-tab-selected-line-color | Defines selected tab line color | #0070c0
