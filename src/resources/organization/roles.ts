// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Creates a custom role for the organization.
   *
   * @example
   * ```ts
   * const role = await client.organization.roles.create({
   *   permissions: ['string'],
   *   role_name: 'role_name',
   * });
   * ```
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<Role> {
    return this._client.post('/organization/roles', { body, ...options });
  }

  /**
   * Updates an existing organization role.
   *
   * @example
   * ```ts
   * const role = await client.organization.roles.update(
   *   'role_id',
   * );
   * ```
   */
  update(roleID: string, body: RoleUpdateParams, options?: RequestOptions): APIPromise<Role> {
    return this._client.post(path`/organization/roles/${roleID}`, { body, ...options });
  }

  /**
   * Lists the roles configured for the organization.
   *
   * @example
   * ```ts
   * const roleListAvailable =
   *   await client.organization.roles.list();
   * ```
   */
  list(
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListAvailable> {
    return this._client.get('/organization/roles', { query, ...options });
  }

  /**
   * Deletes a custom role from the organization.
   *
   * @example
   * ```ts
   * const deletedRole = await client.organization.roles.delete(
   *   'role_id',
   * );
   * ```
   */
  delete(roleID: string, options?: RequestOptions): APIPromise<DeletedRole> {
    return this._client.delete(path`/organization/roles/${roleID}`, options);
  }
}

/**
 * Request payload for creating a custom role.
 */
export interface CreateRole {
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

/**
 * Confirmation payload returned after deleting a role.
 */
export interface DeletedRole {
  /**
   * Identifier of the deleted role.
   */
  id: string;

  /**
   * Whether the role was deleted.
   */
  deleted: boolean;

  /**
   * Always `role.deleted`.
   */
  object: 'role.deleted';
}

/**
 * Details about a role that can be assigned through the public Roles API.
 */
export interface Role {
  /**
   * Identifier for the role.
   */
  id: string;

  /**
   * Optional description of the role.
   */
  description: string | null;

  /**
   * Unique name for the role.
   */
  name: string;

  /**
   * Always `role`.
   */
  object: 'role';

  /**
   * Permissions granted by the role.
   */
  permissions: Array<string>;

  /**
   * Whether the role is predefined and managed by OpenAI.
   */
  predefined_role: boolean;

  /**
   * Resource type the role is bound to (for example `api.organization` or
   * `api.project`).
   */
  resource_type: string;
}

/**
 * Paginated list of roles available on an organization or project.
 */
export interface RoleListAvailable {
  /**
   * Roles returned in the current page.
   */
  data: Array<Role>;

  /**
   * Whether more roles are available when paginating.
   */
  has_more: boolean;

  /**
   * Cursor to fetch the next page of results, or `null` when there are no additional
   * roles.
   */
  next: string | null;

  /**
   * Always `list`.
   */
  object: 'list';
}

/**
 * Request payload for updating an existing role.
 */
export interface UpdateRole {
  /**
   * New description for the role.
   */
  description?: string | null;

  /**
   * Updated set of permissions for the role.
   */
  permissions?: Array<string> | null;

  /**
   * New name for the role.
   */
  role_name?: string | null;
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
   * New description for the role.
   */
  description?: string | null;

  /**
   * Updated set of permissions for the role.
   */
  permissions?: Array<string> | null;

  /**
   * New name for the role.
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

export declare namespace Roles {
  export {
    type CreateRole as CreateRole,
    type DeletedRole as DeletedRole,
    type Role as Role,
    type RoleListAvailable as RoleListAvailable,
    type UpdateRole as UpdateRole,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
