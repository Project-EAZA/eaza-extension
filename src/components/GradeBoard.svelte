<script lang="ts">
  export let teachings: Array<Teaching>;

  import type { Grades, Teaching } from '~/libs/models';
  import Select from 'svelte-select';
  import Chart from './Chart.svelte';
  import {
    findAllInstructors,
    findAllTerms,
    getTerm,
    totalGrades,
  } from '~/libs/utils';

  type SelectItem = { value: number; label: string };
  const instructors = findAllInstructors(teachings);
  const terms = findAllTerms(teachings);

  const instructorItems: Array<SelectItem> = instructors
    .map((instructor) => ({
      value: instructor.ID,
      label: instructor.Name,
    }))
    .concat({ value: -1, label: 'All' });

  const termItems: Array<SelectItem> = terms
    .map((t) => ({ value: t, label: getTerm(t) }))
    .concat({ value: -1, label: 'All' });

  let selectedInstructor: SelectItem = { value: -1, label: 'All' };
  let selectedTerm: SelectItem = { value: -1, label: 'All' };
  let grade: Grades = totalGrades(teachings);
</script>

<!-- <div>
    <Select value={selectedTerm} items={termItems} />
    <Select value={selectedInstructor} items={instructorItems} />
  </div> -->
<Chart data={grade} />
