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
>> * [With Bootstrap](http://tomalec.github.io/sortable-flexbox-list/examples/simpleWBootstrap.html)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install tomalec-sortable-list --save
```

## Usage

1. Import Web Components' polyfill:

	```html
	<script src="//cdn.jsdelivr.net/polymer.platform/0.4.2/platform.js"></script>
	```

2. Import Custom Element:

	```html
	<link rel="import" href="bower_components/tomalec-sortable-list/src/tomalec-sortable-list.html">
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


## Usage `tomalec-sortable-body`

1. Import Web Components' polyfill:

	```html
	<script src="//cdn.jsdelivr.net/polymer.platform/0.4.2/platform.js"></script>
	```

2. Import Custom Element:

	```html
	<!-- Importing Custom Elements -->
	<link rel="import" href="bower_components/tomalec-sortable-list/src/tomalec-sortable-body.html">
	```

3. Start using it!

	```html
  	<body is="tomalec-sortable-body">
		<h1>Your Code</h1>
		<p>here</p>
	</body>
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

For detailed changelog, check [Releases](https://github.com/tomalec/sortable-flexbox-list/releases).


## License

[MIT License](http://opensource.org/licenses/MIT) © Tomek Wytrebowicz