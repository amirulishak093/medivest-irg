<script lang="ts">
  export let name = "";
  export let data = [] as any[];
  
</script>

<div class="text-center font-bold text-xl">Bowling (Singles)</div>

<div class="overflow-x-auto mt-4">
  <table class="bg-white table">
    <!-- head -->
    <thead>
      <tr>
        <th />
        <th>Player</th>
        <th>Rank</th>
      </tr>
    </thead>

    <tbody>
      {#each data as team, index}
        <tr class={index === 0 ? "active" : ""}>
          <th>{index + 1}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  {#if team["Singles"] === "HQ"}
                    <img
                      src={"/images/logo-hq.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Singles"] === "Johor Utara"}
                    <img
                      src={"/images/logo-johor-utara.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Singles"] === "Johor Selatan"}
                    <img
                      src={"/images/logo-johor-selatan.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Singles"] === "Rons"}
                    <img
                      src={"/images/logo-rons.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {/if}
                </div>
              </div>
              <div>
                <div class="font-bold">{team["Singles"]}</div>
                <div class="text-sm opacity-50">{team["__EMPTY"]}</div>
              </div>
            </div>
          </td>
          <td>
            {#if index === 0}
              <img
                class="w-6 h-6"
                src="/images/gold-medal.svg"
                alt="Gold Medal"
              />
            {:else if index === 1}
              <img
                class="w-6 h-6"
                src="/images/silver-medal.svg"
                alt="Silver Medal"
              />
            {:else if index === 2}
              <img
                class="w-6 h-6"
                src="/images/bronze-medal.svg"
                alt="Bronze Medal"
              />
            {/if}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
