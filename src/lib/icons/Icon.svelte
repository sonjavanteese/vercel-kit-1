<script>
  export let name = "home";
</script>

<span {...$$restProps}>
  <svg class="icon icon-{name}">
    <use xlink:href="#icon-{name}" />
  </svg>
</span>

<style global>
:global(.icon) {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
