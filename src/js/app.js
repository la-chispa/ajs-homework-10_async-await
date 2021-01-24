import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  constructor(buffer, data, obj) {
    this.buffer = buffer;
    this.data = data;
    this.obj = obj;
  }

  async load() {
    try {
      this.buffer = await read();
      this.data = await json(this.buffer);
      this.obj = JSON.parse(this.data);
    } catch (err) {
      throw new Error(err);
    }
    return this.obj;
  }
}
