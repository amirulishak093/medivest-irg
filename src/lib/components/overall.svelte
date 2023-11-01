<script lang="ts">
  import { onMount } from "svelte";

  export let name = "";
  export let data = [] as any[];

  let scores = [
    { contingent: "HQ", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
    { contingent: "Johor Utara", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
    {
      contingent: "Johor Selatan",
      gold: 0, silver: 0, bronze: 0, totalScore: 0
    },
    { contingent: "Rons", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
  ];

  $: {
    if (data) {
      resetScores(); // Reset scores before recalculating
      calculateScoresFromData(); // Calculate scores from data
      calculateAndSortScores(); // Calculate and sort scores
      console.log(scores)
    }
  }

  onMount(() => {
    console.log(scores);
  })

  function resetScores() {
    scores.forEach((contingent) => {
      contingent.gold = 0;
      contingent.silver = 0;
      contingent.bronze = 0;
      contingent.totalScore = 0;
    });
  }

  function addGold(contingent: string) {
    const index = scores.findIndex((score) => score.contingent === contingent);
    if (index >= 0) {
      scores[index].gold += 1;
    }
  }

  function addSilver(contingent: string) {
    const index = scores.findIndex((score) => score.contingent === contingent);
    if (index >= 0) {
      scores[index].silver += 1;
    }
  }

  function addBronze(contingent: string) {
    const index = scores.findIndex((score) => score.contingent === contingent);
    if (index >= 0) {
      scores[index].bronze += 1;
    }
  }

  function calculateScoresFromData() {
    const singles = data.slice(1, 5);
    const doubles = data.slice(7, 11);

    for (let i = 0; i < singles.length; i++) {
      if (i === 0) {
        addGold(singles[i]["Men's Singles"]);
        addGold(singles[i]["Women's Singles"]);
      } else if (i === 1) {
        addSilver(singles[i]["Men's Singles"]);
        addSilver(singles[i]["Women's Singles"]);
      } else if (i === 2) {
        addBronze(singles[i]["Men's Singles"]);
        addBronze(singles[i]["Women's Singles"]);
      }
    }

    for (let i = 0; i < doubles.length; i++) {
      if (i === 0) {
        addGold(doubles[i]["Men's Singles"]);
        addGold(doubles[i]["Women's Singles"]);
      } else if (i === 1) {
        addSilver(doubles[i]["Men's Singles"]);
        addSilver(doubles[i]["Women's Singles"]);
      } else if (i === 2) {
        addBronze(doubles[i]["Men's Singles"]);
        addBronze(doubles[i]["Women's Singles"]);
      }
    }
  }

  function calculateAndSortScores() {
    scores.forEach((contingent) => {
      contingent.totalScore =
        contingent.gold * 3 + contingent.silver * 2 + contingent.bronze;
    });

    scores.sort((a, b) => b.totalScore - a.totalScore);
  }
</script>

<div class="text-center font-bold text-xl">{name}</div>

<div class="overflow-x-auto mt-4">
  <table class="bg-white table">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>Contingent</th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img
              class="w-6 h-6"
              src="/images/gold-medal.svg"
              alt="Gold Medal"
            />
          </div>
        </th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img
              class="w-6 h-6"
              src="/images/silver-medal.svg"
              alt="Silver Medal"
            />
          </div>
        </th>
        <th class="text-center">
          <div class="flex justify-center items-center">
            <img
              class="w-6 h-6"
              src="/images/bronze-medal.svg"
              alt="Bronze Medal"
            />
          </div>
        </th>
      </tr>
    </thead>

    <tbody>
      {#each scores as team, index}
        <tr class={index === 0 ? "active" : ""}>
          <th>{index + 1}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  {#if team.contingent === "HQ"}
                    <img
                      src={"/images/logo-hq.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team.contingent === "Johor Utara"}
                    <img
                      src={"/images/logo-johor-utara.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team.contingent === "Johor Selatan"}
                    <img
                      src={"/images/logo-johor-selatan.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team.contingent === "Rons"}
                    <img
                      src={"/images/logo-rons.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {/if}
                </div>
              </div>
              <div>
                <div class="font-bold">{team.contingent}</div>
              </div>
            </div>
          </td>
          <td class="text-center"> {team.gold} </td>
          <td class="text-center"> {team.silver} </td>
          <td class="text-center"> {team.bronze} </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
