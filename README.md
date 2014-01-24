# &lt;tomalec-sortable-list&gt;

`<tomalec-sortable-list>` is a [Custom Element](https://github.com/polymer/CustomElements) with sortable list, that uses CSS flexbox.

> Maintained by [Tomek Wytrębowicz](https://github.com/tomalec).

## Demo

> [Check it live](http://tomalec.github.io/sortable-flexbox-list/).
>> Advanced examples:
>>
>> * [Nested list](http://tomalec.github.io/sortable-flexbox-list/examples/nested.html)
>> * [Preloaded order](http://tomalec.github.io/sortable-flexbox-list/examples/pre-ordered.html)

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
		<li>zero</li>
		<li>one</li>
		<li>two</li>
	</tomalec-sortable-list>
	```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`order`    | *string*                  | "1,...,n"           | Coma separated sequence of elements' order. By default as is in HTML. <br/> Please note that this is **NOT a list of sorted indexes**, rather a map where the key is index from HTML, and value is CSS order - position on screen.

For child nodes:

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`sortable` | *boolean*                 | true                | Set to `false` to disable drag'n'drop for given child node.

## Properties


Property  | Type                   | Description
---       | ---                    | ---                 
`order`   | *string*        	   | Coma separated sequence of elements' order.

## Events

For child nodes:

Event Name  | event.detail                   					| Description
---         | ---                    							| ---                 
`change`    | `{"from": 0,	"to":1,	"orderArray":["1","0","2"]}`| Triggered after every order change.


## History

* v0.0.20140124 January 24, 2014
	* Preloaded order

* v0.0.20140122 January 22, 2014
	* Nested lists

* v0.0.20140121 January 21, 2014
	* Initial version

## License

[MIT License](http://opensource.org/licenses/MIT) © Tomek Wytrebowicz