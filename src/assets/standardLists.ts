export const createStandardLists = (userId: string) => {
  return [
    {
      name: "Backlog",
      games: [] as number[],
      userId: userId,
    },
    {
      name: "Playing",
      games: [] as number[],
      userId: userId,
    },
    {
      name: "Beaten",
      games: [] as number[],
      userId: userId,
    },
  ];
};
