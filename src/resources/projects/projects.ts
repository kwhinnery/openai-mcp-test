// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RolesAPI from './roles';
import { RoleCreateParams, RoleDeleteParams, RoleListParams, RoleUpdateParams, Roles } from './roles';
import * as GroupsAPI from './groups/groups';
import { Groups } from './groups/groups';
import * as UsersAPI from './users/users';
import { Users } from './users/users';

export class Projects extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Projects.Groups = Groups;
Projects.Roles = Roles;
Projects.Users = Users;

export declare namespace Projects {
  export { Groups as Groups };

  export {
    Roles as Roles,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleDeleteParams as RoleDeleteParams,
  };

  export { Users as Users };
}
