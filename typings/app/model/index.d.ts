// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLevel from '../../../app/model/level';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Level: ReturnType<typeof ExportLevel>;
    User: ReturnType<typeof ExportUser>;
  }
}
