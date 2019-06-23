import ErrorBase from "../Engine/Utils/ErrorBase";

class AuthorizationError extends ErrorBase {
  constructor() {
    super('Forbidden...');
  }
}

class MasterKeyError extends ErrorBase {
  constructor() {
    super('Error matching keys...');
  }
}

export { AuthorizationError, MasterKeyError };
