<script lang="ts">
  import { LightGreen, LightRed } from '~/libs/const';

  export let gpa: number;
  const getFontColor = (gpa: number) => {
    if (gpa >= 3.5) {
      return LightGreen;
    }
    if (gpa <= 2.7) {
      return LightRed;
    }
  };
</script>

<div class="eaza-gpa-display" style="color:{getFontColor(gpa)}">
  {#if gpa > 0}
    GPA: {gpa.toFixed(2)}
  {/if}
</div>
