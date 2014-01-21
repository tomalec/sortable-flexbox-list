# &lt;tomalec-sortable-list&gt;

`<tomalec-sortable-list>` is a [Custom Element](https://github.com/polymer/CustomElements) with sortable list, that uses CSS flexbox.

> Maintained by [Tomek Wytrębowicz](https://github.com/tomalec).

## Demo

> [Check it live](http://tomalec.github.io/sortable-flexbox-list/).

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20131107/polymer.min.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="elements/sortable-flexbox-list.html">
	```

3. Start using it!

	```html
	<tomalec-sortable-list>
		<li style="order: 0;">zero</li>
		<li style="order: 1;">one</li>
		<li style="order: 2;">two</li>
	</tomalec-sortable-list>
	```

## Options

For child nodes:

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`sortable` | *boolean*                 | true                | Set to `false` to disable drag'n'drop for given child node.

## Properties

For child nodes:

Property  | Type                   | Description
---       | ---                    | ---                 
`order`   | *array<number>*        | Array reflecting child node's order.

## Events

For child nodes:

Event Name  | event.detail                   | Description
---         | ---                    | ---                 
`change`    | `{"from": 0,	"to":1,	"order":["1","0","2"]}`| Triggered after every order change.


## History

* v0.0.20140121 January 21, 2014
	* Initial version

## License

[MIT License](http://opensource.org/licenses/MIT) © Tomek Wytrebowicz