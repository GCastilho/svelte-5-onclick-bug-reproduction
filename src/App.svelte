<script lang="ts">
  let canMakePayments = $state(false);

  function scriptLoaded() {
    if (ApplePaySession && ApplePaySession.canMakePayments()) {
      canMakePayments = true;
    } else {
      console.debug("Cannot make ApplePay payments");
    }
  }

  function handleApplePayClick() {
    console.log("click");
  }
</script>

<svelte:head>
  <script
    src="https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js"
    crossorigin="anonymous"
    async
    onload={scriptLoaded}
  ></script>
</svelte:head>

<main>
  <h1>ApplePay demo</h1>
  {#if canMakePayments}
    <!-- Changing onclick to on:click makes handleApplePayClick to be correctly called -->
    <apple-pay-button
      buttonstyle="black"
      type="plain"
      locale="en-US"
      onclick={handleApplePayClick}
      onkeydown={handleApplePayClick}
      role="button"
      tabindex="0"
    ></apple-pay-button>
  {/if}
</main>
