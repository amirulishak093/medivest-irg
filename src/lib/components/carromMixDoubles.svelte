<script lang="ts">
  export let name = "";
  export let data = [] as any[];

  console.log(data)
</script>

<div class="text-center font-bold text-xl">{name}</div>

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
                  {#if team["Mix Doubles 1"] === "HQ"}
                    <img
                      src={"/images/logo-hq.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Mix Doubles 1"] === "Johor Utara"}
                    <img
                      src={"/images/logo-johor-utara.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Mix Doubles 1"] === "Johor Selatan"}
                    <img
                      src={"/images/logo-johor-selatan.jpg"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {:else if team["Mix Doubles 1"] === "Rons"}
                    <img
                      src={"/images/logo-rons.png"}
                      alt="Avatar Tailwind CSS Component"
                    />
                  {/if}
                </div>
              </div>
              <div>
                <div class="font-bold">{team["Mix Doubles 1"]}</div>
                {#each team["__EMPTY_2"].split(",") as player}
                  <div class="text-sm opacity-50">{player}</div>
                {/each}
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
