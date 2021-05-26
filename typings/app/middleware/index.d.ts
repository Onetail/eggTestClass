// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateParams from '../../../app/middleware/validateParams';
import ExportValidateUser from '../../../app/middleware/validateUser';

declare module 'egg' {
  interface IMiddleware {
    validateParams: typeof ExportValidateParams;
    validateUser: typeof ExportValidateUser;
  }
}
