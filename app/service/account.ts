import { Service } from 'egg';

/**
 * Test Service
 */
export default class Account extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async signIn() {
    return `ok`;
  }
}
