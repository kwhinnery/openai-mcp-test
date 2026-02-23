// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from '../../organization/groups/roles';
import * as UsersRolesAPI from '../../organization/users/roles';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Lists the project roles assigned to a user within a project.
   */
  list(
    userID: string,
    params: RoleListParams,
    options?: RequestOptions,
  ): APIPromise<RolesAPI.RoleListAssigned> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/users/${userID}/roles`, { query, ...options });
  }

  /**
   * Assigns a project role to a user within a project.
   */
  assign(
    userID: string,
    params: RoleAssignParams,
    options?: RequestOptions,
  ): APIPromise<UsersRolesAPI.UserRoleAssignment> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/users/${userID}/roles`, { body, ...options });
  }

  /**
   * Unassigns a project role from a user within a project.
   */
  unassign(
    roleID: string,
    params: RoleUnassignParams,
    options?: RequestOptions,
  ): APIPromise<RolesAPI.DeletedRoleAssignment> {
    const { project_id, user_id } = params;
    return this._client.delete(path`/projects/${project_id}/users/${user_id}/roles/${roleID}`, options);
  }
}

export interface RoleListParams {
  /**
   * Path param: The ID of the project to inspect.
   */
  project_id: string;

  /**
   * Query param: Cursor for pagination. Provide the value from the previous
   * response's `next` field to continue listing project roles.
   */
  after?: string;

  /**
   * Query param: A limit on the number of project role assignments to return.
   */
  limit?: number;

  /**
   * Query param: Sort order for the returned project roles.
   */
  order?: 'asc' | 'desc';
}

export interface RoleAssignParams {
  /**
   * Path param: The ID of the project to update.
   */
  project_id: string;

  /**
   * Body param: Identifier of the role to assign.
   */
  role_id: string;
}

export interface RoleUnassignParams {
  /**
   * The ID of the project to modify.
   */
  project_id: string;

  /**
   * The ID of the user whose project role assignment should be removed.
   */
  user_id: string;
}

export declare namespace Roles {
  export {
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };
}
