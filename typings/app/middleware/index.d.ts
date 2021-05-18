// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateParams from '../../../app/middleware/validateParams';

declare module 'egg' {
  interface IMiddleware {
    validateParams: typeof ExportValidateParams;
  }
}
