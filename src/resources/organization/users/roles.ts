// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from '../roles';
import * as GroupsRolesAPI from '../groups/roles';
import * as UsersAPI from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Lists the organization roles assigned to a user within the organization.
   *
   * @example
   * ```ts
   * const roleListAssigned =
   *   await client.organization.users.roles.list('user_id');
   * ```
   */
  list(
    userID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupsRolesAPI.RoleListAssigned> {
    return this._client.get(path`/organization/users/${userID}/roles`, { query, ...options });
  }

  /**
   * Assigns an organization role to a user within the organization.
   *
   * @example
   * ```ts
   * const userRoleAssignment =
   *   await client.organization.users.roles.assign('user_id', {
   *     role_id: 'role_id',
   *   });
   * ```
   */
  assign(userID: string, body: RoleAssignParams, options?: RequestOptions): APIPromise<UserRoleAssignment> {
    return this._client.post(path`/organization/users/${userID}/roles`, { body, ...options });
  }

  /**
   * Unassigns an organization role from a user within the organization.
   *
   * @example
   * ```ts
   * const deletedRoleAssignment =
   *   await client.organization.users.roles.unassign(
   *     'role_id',
   *     { user_id: 'user_id' },
   *   );
   * ```
   */
  unassign(
    roleID: string,
    params: RoleUnassignParams,
    options?: RequestOptions,
  ): APIPromise<GroupsRolesAPI.DeletedRoleAssignment> {
    const { user_id } = params;
    return this._client.delete(path`/organization/users/${user_id}/roles/${roleID}`, options);
  }
}

/**
 * Role assignment linking a user to a role.
 */
export interface UserRoleAssignment {
  /**
   * Always `user.role`.
   */
  object: 'user.role';

  /**
   * Details about a role that can be assigned through the public Roles API.
   */
  role: RolesAPI.Role;

  /**
   * Represents an individual `user` within an organization.
   */
  user: UsersAPI.User;
}

export interface RoleListParams {
  /**
   * Cursor for pagination. Provide the value from the previous response's `next`
   * field to continue listing organization roles.
   */
  after?: string;

  /**
   * A limit on the number of organization role assignments to return.
   */
  limit?: number;

  /**
   * Sort order for the returned organization roles.
   */
  order?: 'asc' | 'desc';
}

export interface RoleAssignParams {
  /**
   * Identifier of the role to assign.
   */
  role_id: string;
}

export interface RoleUnassignParams {
  /**
   * The ID of the user to modify.
   */
  user_id: string;
}

export declare namespace Roles {
  export {
    type UserRoleAssignment as UserRoleAssignment,
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };
}
