// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportUser from '../../../app/controller/user';
import ExportDtoAccount from '../../../app/controller/dto/account';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    user: ExportUser;
    dto: {
      account: ExportDtoAccount;
    };
  }
}
