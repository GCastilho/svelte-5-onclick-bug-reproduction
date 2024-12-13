# Svelte 5 onclick bug reproduction

On `scr/App.svelte` a web component 'apple-pay-button' is used. If `onclick` is used, the callback function `handleApplePayClick` is not called.<br>If the deprecated `on:click` is used, then `handleApplePayClick` is correctly called
