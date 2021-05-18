// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportDtoAccount from '../../../app/controller/dto/account';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    dto: {
      account: ExportDtoAccount;
    };
  }
}
