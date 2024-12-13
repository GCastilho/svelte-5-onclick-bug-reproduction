import { HTMLButtonAttributes } from 'svelte/elements'

interface ApplePayButton extends HTMLButtonAttributes {
	locale: string
	buttonstyle: 'black'|'white-outline'|'white'
	type: 'plain'|'continue'|'add-money'|'book'|'buy'|'check-out'|'contribute'|'donate'|'order'|'pay'|'reload'|'rent'|'set-up'|'subscribe'|'support'|'tip'|'top-up'
}

declare module 'svelte/elements' {
	declare interface SvelteHTMLElements {
		'apple-pay-button': ApplePayButton
	}
}

export {}
