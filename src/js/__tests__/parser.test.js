import GameSavingLoader from '../app';

jest.mock('../parser');

beforeEach(() => {
  jest.resetAllMocks();
});

test('object GameSaving, error', async () => {
  const gameSaving = new GameSavingLoader();
  await expect(gameSaving.load()).rejects.toThrow();
});
