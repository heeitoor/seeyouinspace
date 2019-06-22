export default interface IRedisData {
  get(key: string);
  set(key: string, value: string);
}
