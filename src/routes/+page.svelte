<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { read, utils } from "xlsx";
  import BestAthlete from "$lib/components/bestAthlete.svelte";
  import OverallScore from "$lib/components/overallScore.svelte";
  import Scoreboard from "$lib/components/scoreboard.svelte";

  let _tableTennis = [];
  let _badminton = [];
  let _bowling = []
  let _football = []
  let _netball = []
  let _carrom = []
  let _sprint = []


  let intervalId

  onMount(async () => {
    const f = await (await fetch("/data.xlsx")).arrayBuffer();
    const wb = read(f);

    _tableTennis = utils.sheet_to_json(wb.Sheets["Table Tennis"]);
    _badminton = utils.sheet_to_json(wb.Sheets["Badminton"]);
    _bowling = utils.sheet_to_json(wb.Sheets["Bowling"]);
    _football = utils.sheet_to_json(wb.Sheets["Football"]);
    _netball = utils.sheet_to_json(wb.Sheets["Netball"]);
_carrom = utils.sheet_to_json(wb.Sheets["Carrom"]);
_sprint = utils.sheet_to_json(wb.Sheets["Sprint"]);

    intervalId = setInterval(refresh, 3000)

    console.log(_tableTennis);
  });


  async function refresh() {
  
    const f = await (await fetch("/data.xlsx")).arrayBuffer();
    const wb = read(f);

    _tableTennis = utils.sheet_to_json(wb.Sheets["Table Tennis"]);
    _badminton = utils.sheet_to_json(wb.Sheets["Badminton"]);
    _bowling = utils.sheet_to_json(wb.Sheets["Bowling"]);
    _netball = utils.sheet_to_json(wb.Sheets["Netball"]);
  _carrom = utils.sheet_to_json(wb.Sheets["Carrom"])
  _sprint = utils.sheet_to_json(wb.Sheets["Sprint"])
  }


  onDestroy(() => {
    clearInterval(intervalId)
  })

  import {
    overallScore,
    maleAthletes,
    femaleAthletes,
    badmintonMensSingles,
    badmintonMensDoubles,
    football,
    netball,
    carromMensDoubles,
    carromMixDoubles1,
    carromMixDoubles2,
    esports,
    bowling,
    medivestGotTalent,
    badmintonWomensSingles,
    badmintonWomensDoubles,
    badmintonOverall,
    tableTennisOverall,
  } from "$lib/data";
  import Singles from "$lib/components/singles.svelte";
  import Doubles from "$lib/components/doubles.svelte";
  import SinglesWomen from "$lib/components/singlesWomen.svelte";
  import DoublesWomen from "$lib/components/doublesWomen.svelte";
  import Overall from "$lib/components/overall.svelte";
  import SinglesBowling from "$lib/components/singlesBowling.svelte";
  import Football from "$lib/components/football.svelte";
  import Netball from "$lib/components/netball.svelte";
  import CarromMensDoubles from "$lib/components/carromMensDoubles.svelte";
  import CarromMixDoubles from "$lib/components/carromMixDoubles.svelte";
  import Sprint from "$lib/components/sprint.svelte";
  import CarromOverall from "$lib/components/carromOverall.svelte";

  let currentView = 2;
</script>

<div class="wrapper">
  <div class="px-4">
    <div class="flex justify-center tabs">
      <a
        on:click={() => (currentView = 0)}
        class="tab {currentView === 0 && 'tab-active'}">Overall</a
      >
      <a
        on:click={() => (currentView = 1)}
        class="tab {currentView === 1 && 'tab-active'}">Athletes</a
      >
      <a
        on:click={() => (currentView = 2)}
        class="tab {currentView === 2 && 'tab-active'}">Table Tennis</a
      >
      <a
        on:click={() => (currentView = 3)}
        class="tab {currentView === 3 && 'tab-active'}">Badminton</a
      >
      <a
        on:click={() => (currentView = 4)}
        class="tab {currentView === 4 && 'tab-active'}">Bowling</a
      >
      <a
        on:click={() => (currentView = 5)}
        class="tab {currentView === 5 && 'tab-active'}">Football</a
      >
      <a
        on:click={() => (currentView = 6)}
        class="tab {currentView === 6 && 'tab-active'}">Netball</a
      >
      <a
        on:click={() => (currentView = 7)}
        class="tab {currentView === 7 && 'tab-active'}">Carrom</a
      >
      <a
        on:click={() => (currentView = 8)}
        class="tab {currentView === 8 && 'tab-active'}">100m Sprint</a
      >
      <a
        on:click={() => (currentView = 9)}
        class="tab {currentView === 9 && 'tab-active'}">E-Sports</a
      >
      <a
        on:click={() => (currentView = 10)}
        class="tab {currentView === 10 && 'tab-active'}">Medivest Got Talent</a
      >
    </div>

    <div class="mt-8">
       {#if currentView === 0}
        <OverallScore name="Overall Score" data={overallScore} />
      {:else if currentView === 1}
        <BestAthlete name="Male Athletes" data={maleAthletes} /> 

        <div class="mt-12">
          <BestAthlete name="Female Athletes" data={femaleAthletes} />
        </div>
      {:else if currentView === 2}
        <Overall name="Table Tennis (Overall)" data={_tableTennis} />

        <div class="mt-12">
          <Singles
            name="Table Tennis (Men's Singles)"
            data={_tableTennis.slice(1, 5)}
          />
        </div>

        <div class="mt-12">
          <Doubles
            name="Table Tennis (Men's Doubles)"
            data={_tableTennis.slice(7, 11)}
          />
        </div>

        <div class="mt-12">
          <SinglesWomen
            name="Table Tennis (Women's Singles)"
            data={_tableTennis.slice(1, 5)}
          />
        </div>

        <div class="mt-12">
          <DoublesWomen
            name="Table Tennis (Women's Doubles)"
            data={_tableTennis.slice(7, 11)}
          />
        </div>
      {:else if currentView === 3}
      <Overall name="Badminton (Overall)" data={_badminton} />

      <div class="mt-12">
        <Singles
          name="Badminton (Men's Singles)"
          data={_badminton.slice(1, 5)}
        />
      </div>

      <div class="mt-12">
        <Doubles
          name="Badminton (Men's Doubles)"
          data={_badminton.slice(7, 11)}
        />
      </div>

      <div class="mt-12">
        <SinglesWomen
          name="Badminton (Women's Singles)"
          data={_badminton.slice(1, 5)}
        />
      </div>

      <div class="mt-12">
        <DoublesWomen
          name="Badminton (Women's Doubles)"
          data={_badminton.slice(7, 11)}
        />
      </div>
      {:else if currentView === 4}
        <SinglesBowling name="Bowling" data={_bowling.slice(1, 5)} />
      {:else if currentView === 5}
        <Football name="Football" data={_football.slice(1, 5)} />
      {:else if currentView === 6}
       <Netball name="Netball" data={_netball.slice(1, 5)} />
      {:else if currentView === 7}
      <CarromOverall name="Carrom (Overall)" data={_carrom} />

      <div class="mt-12">
        <CarromMensDoubles name="Carrom (Men's Doubles)" data={_carrom.slice(1,5)} />
</div>

        <div class="mt-12">
          <CarromMixDoubles name="Carrom (Mix Doubles 1)" data={_carrom.slice(1,5)} />
        </div>

        <div class="mt-12">
          <CarromMensDoubles name="Carrom (Mix Doubles 2)" data={_carrom.slice(7,11)} />
        </div>
      {:else if currentView === 8}
        <Sprint name="100m Sprint" data={_sprint.slice(1,5)} />
      {:else if currentView === 9}
        <Scoreboard name="E-Sports" data={esports} />
      {:else if currentView === 10}
        <Scoreboard name="Medivest Got Talent" data={medivestGotTalent} />
      {/if}
    </div>
  </div>
</div>
