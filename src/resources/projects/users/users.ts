// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from './roles';
import { RoleAssignParams, RoleListParams, RoleUnassignParams, Roles } from './roles';

export class Users extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
}

Users.Roles = Roles;

export declare namespace Users {
  export {
    Roles as Roles,
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };
}
