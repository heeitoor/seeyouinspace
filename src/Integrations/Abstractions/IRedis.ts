export default interface IRedisIntegration {
  get(key: string);
  set(key: string, value: string);
}
