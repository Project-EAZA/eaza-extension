<script lang="ts">
  import type { TagItem } from '~/libs/types';
  import GPA from './GPA.svelte';
  import Tag from './Tag.svelte';

  export let gpa: number;
  export let tags: Array<TagItem>;
</script>

<div class="row eaza-item-content">
  <div>
    {#each tags as tag}
      <Tag text={tag.text} color={tag.color} />
    {/each}
  </div>
  <GPA {gpa} />
</div>
