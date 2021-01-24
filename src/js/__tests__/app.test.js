import GameSavingLoader from '../app';

test('object GameSaving, created', async () => {
  const gameSaving = new GameSavingLoader();
  await expect(gameSaving.load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
