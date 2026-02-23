// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RolesAPI from '../organization/roles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Creates a custom role for a project.
   */
  create(projectID: string, body: RoleCreateParams, options?: RequestOptions): APIPromise<RolesAPI.Role> {
    return this._client.post(path`/projects/${projectID}/roles`, { body, ...options });
  }

  /**
   * Updates an existing project role.
   */
  update(roleID: string, params: RoleUpdateParams, options?: RequestOptions): APIPromise<RolesAPI.Role> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/roles/${roleID}`, { body, ...options });
  }

  /**
   * Lists the roles configured for a project.
   */
  list(
    projectID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RolesAPI.RoleListAvailable> {
    return this._client.get(path`/projects/${projectID}/roles`, { query, ...options });
  }

  /**
   * Deletes a custom role from a project.
   */
  delete(
    roleID: string,
    params: RoleDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RolesAPI.DeletedRole> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/roles/${roleID}`, options);
  }
}

export interface RoleCreateParams {
  /**
   * Permissions to grant to the role.
   */
  permissions: Array<string>;

  /**
   * Unique name for the role.
   */
  role_name: string;

  /**
   * Optional description of the role.
   */
  description?: string | null;
}

export interface RoleUpdateParams {
  /**
   * Path param: The ID of the project to update.
   */
  project_id: string;

  /**
   * Body param: New description for the role.
   */
  description?: string | null;

  /**
   * Body param: Updated set of permissions for the role.
   */
  permissions?: Array<string> | null;

  /**
   * Body param: New name for the role.
   */
  role_name?: string | null;
}

export interface RoleListParams {
  /**
   * Cursor for pagination. Provide the value from the previous response's `next`
   * field to continue listing roles.
   */
  after?: string;

  /**
   * A limit on the number of roles to return. Defaults to 1000.
   */
  limit?: number;

  /**
   * Sort order for the returned roles.
   */
  order?: 'asc' | 'desc';
}

export interface RoleDeleteParams {
  /**
   * The ID of the project to update.
   */
  project_id: string;
}

export declare namespace Roles {
  export {
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
    type RoleDeleteParams as RoleDeleteParams,
  };
}
