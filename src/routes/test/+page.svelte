<script lang="ts">
  import { onMount } from "svelte";
  import { read, utils, writeFileXLSX } from "xlsx";

  /* the component state is an array of presidents */
  let pres = [];

  let tableTennisMensSingles = [];
  let tableTennisMensDoubles = [];

  $: {
    tableTennisMensSingles = pres.slice(1, 5);
    tableTennisMensDoubles = pres.slice(7, 11);
  }

  /* Fetch and update the state once */
  onMount(async () => {
    const f = await (await fetch("/data.xlsx")).arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets["Table Tennis"]; // get the first worksheet
    pres = utils.sheet_to_json(ws); // generate objects and update state

    console.log(pres);
  });

  /* get state data and export to XLSX */
  function exportFile() {
    const ws = utils.json_to_sheet(pres);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "SheetJSSvelteAoO.xlsx");
  }
</script>

<main>
  <table>
    <thead><th>Name</th><th>Rank</th></thead><tbody>
      {#each tableTennisMensSingles as p, index}<tr>
          <td>{p["Men's Singles"]}</td>
          <td>{p["__EMPTY"]}</td>
        </tr>{/each}
    </tbody>
  </table>

  <table class="mt-4">
    <thead><th>Name</th><th>Rank</th></thead><tbody>
      {#each tableTennisMensDoubles as p, index}<tr>
          <td>{p["Men's Singles"]}</td>
          <td>{p["__EMPTY"]}</td>
        </tr>{/each}
    </tbody>
  </table>
</main>
