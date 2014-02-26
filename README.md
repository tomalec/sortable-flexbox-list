# &lt;tomalec-sortable-list&gt;

`<tomalec-sortable-list>` is a [Custom Element](https://github.com/polymer/CustomElements) with sortable list, that uses CSS flexbox.

> Maintained by [Tomek Wytrębowicz](https://github.com/tomalec).

## Demo

> [Check it live](http://tomalec.github.io/sortable-flexbox-list/).
>> Advanced [examples](https://github.com/tomalec/sortable-flexbox-list/tree/master/examples):
>>
>> * [Nested list](http://tomalec.github.io/sortable-flexbox-list/examples/nested.html)
>> * [Preloaded order](http://tomalec.github.io/sortable-flexbox-list/examples/pre-ordered.html)
>> * [Dynamic list](http://tomalec.github.io/sortable-flexbox-list/examples/dynamicAdd.html)
>> * [Sortable `<body>`](http://tomalec.github.io/sortable-flexbox-list/examples/sortableBody.html)

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/platform.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.1.4/polymer.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="src/sortable-flexbox-list.html">
	```

3. Start using it!

	```html
	<tomalec-sortable-list>
		<li>zero</li>
		<li>one</li>
		<li>two</li>
	</tomalec-sortable-list>
	```

> Please note, that `<style>`, `<template>`, and text nodes will not be sortable.

## Options/Attributes

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`disabled` | *boolean*				   | false				 | If set to `true` none of elements will be draggable.
`order`    | *string*                  | "1,...,n"           | Coma separated sequence of elements' order. By default as is in HTML. <br/> Please note that this is **NOT a list of sorted indexes**, rather a map where the key is index from HTML, and value is CSS order - position on screen.


## Properties


Property  | Type                   | Description
---       | ---                    | ---    
`disabled`| *boolean*			   | Is dragging disabled?             
`order`   | *string*        	   | Coma separated sequence of elements' order. See above.

## Events

For child nodes:

Event Name  | event.detail          	| Description
---         | ---                 		| ---                 
`change`    | 							| Triggered after every order change.
			| *String* `from`			| Previous order
			| *String* `to`				| New order
			| *Array*  `orderArray`		| New order as array
`move`      | 							| Triggered after every item move.
			| *String* `from`			| Previous place in order,
			| *String* `to`				| New place in order,
			| *Array*  `orderArray`		| New order as array,
			| *EventTarget*  `item`		| DOM Node that was moved.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

~ v0.0.20140217 February 17, 2014
	* Polymer updated to 0.2.0.

* v0.0.20140211 February 11, 2014
	* Fix for templates inside sortable-list.

* v0.0.20140210 February 10, 2014
	* New attribute: `disabled`,
	* New `tomalec-sortable-body` element, to attach sortable features on root level.

* v0.0.20140129 January 29, 2014
	* Preloaded order,
	* `sortable="false"` feature removed, as the concept of non-sortable, sortable item is deffinately unclear.
	* New `move` event
	* Observe changes in DOM, dynamic adding new items to the list is now available

* v0.0.20140122 January 22, 2014
	* Nested lists

* v0.0.20140121 January 21, 2014
	* Initial version

## License

[MIT License](http://opensource.org/licenses/MIT) © Tomek Wytrebowicz