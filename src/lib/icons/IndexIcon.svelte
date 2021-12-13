<script>
    import { iconList} from './icons'
    import Icon from './Icon.svelte'
</script>

<svelte:head>
    <title>Icon Libary</title>
</svelte:head>

<article class="container mx-auto p-4">
    {#each iconList as el}
        <figure>
            <span class="text-7xl text-gray-600 flex justify-center py-2">
               <Icon name={el} /> 
            </span>
            <figcaption class="text-lg text-center py-2">{el}</figcaption>
        </figure>
    {/each}
</article>


<style>
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.p-4 {
  padding: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.text-center {
  text-align: center;
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgba(75, 85, 99, var(--tw-text-opacity));
}
article {
  --gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}
article > * {
  --min: 6rem;
  flex: 1 1 var(--min);
}
</style>