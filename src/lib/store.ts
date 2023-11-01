import { writable } from 'svelte/store';

export const isLoading = writable<boolean>();

export const scores = writable([
    { contingent: "HQ", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
    { contingent: "Johor Utara", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
    {
      contingent: "Johor Selatan",
      gold: 0, silver: 0, bronze: 0, totalScore: 0
    },
    { contingent: "Rons", gold: 0, silver: 0, bronze: 0, totalScore: 0 },
  ])

isLoading.set(false);
