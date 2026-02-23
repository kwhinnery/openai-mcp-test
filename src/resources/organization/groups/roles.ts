// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from '../roles';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Lists the organization roles assigned to a group within the organization.
   *
   * @example
   * ```ts
   * const roleListAssigned =
   *   await client.organization.groups.roles.list('group_id');
   * ```
   */
  list(
    groupID: string,
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListAssigned> {
    return this._client.get(path`/organization/groups/${groupID}/roles`, { query, ...options });
  }

  /**
   * Assigns an organization role to a group within the organization.
   *
   * @example
   * ```ts
   * const groupRoleAssignment =
   *   await client.organization.groups.roles.assign(
   *     'group_id',
   *     { role_id: 'role_id' },
   *   );
   * ```
   */
  assign(groupID: string, body: RoleAssignParams, options?: RequestOptions): APIPromise<GroupRoleAssignment> {
    return this._client.post(path`/organization/groups/${groupID}/roles`, { body, ...options });
  }

  /**
   * Unassigns an organization role from a group within the organization.
   *
   * @example
   * ```ts
   * const deletedRoleAssignment =
   *   await client.organization.groups.roles.unassign(
   *     'role_id',
   *     { group_id: 'group_id' },
   *   );
   * ```
   */
  unassign(
    roleID: string,
    params: RoleUnassignParams,
    options?: RequestOptions,
  ): APIPromise<DeletedRoleAssignment> {
    const { group_id } = params;
    return this._client.delete(path`/organization/groups/${group_id}/roles/${roleID}`, options);
  }
}

/**
 * Request payload for assigning a role to a group or user.
 */
export interface AssignGroupRole {
  /**
   * Identifier of the role to assign.
   */
  role_id: string;
}

/**
 * Confirmation payload returned after unassigning a role.
 */
export interface DeletedRoleAssignment {
  /**
   * Whether the assignment was removed.
   */
  deleted: boolean;

  /**
   * Identifier for the deleted assignment, such as `group.role.deleted` or
   * `user.role.deleted`.
   */
  object: string;
}

/**
 * Role assignment linking a group to a role.
 */
export interface GroupRoleAssignment {
  /**
   * Summary information about a group returned in role assignment responses.
   */
  group: GroupRoleAssignment.Group;

  /**
   * Always `group.role`.
   */
  object: 'group.role';

  /**
   * Details about a role that can be assigned through the public Roles API.
   */
  role: RolesAPI.Role;
}

export namespace GroupRoleAssignment {
  /**
   * Summary information about a group returned in role assignment responses.
   */
  export interface Group {
    /**
     * Identifier for the group.
     */
    id: string;

    /**
     * Unix timestamp (in seconds) when the group was created.
     */
    created_at: number;

    /**
     * Display name of the group.
     */
    name: string;

    /**
     * Always `group`.
     */
    object: 'group';

    /**
     * Whether the group is managed through SCIM.
     */
    scim_managed: boolean;
  }
}

/**
 * Paginated list of roles assigned to a principal.
 */
export interface RoleListAssigned {
  /**
   * Role assignments returned in the current page.
   */
  data: Array<RoleListAssigned.Data>;

  /**
   * Whether additional assignments are available when paginating.
   */
  has_more: boolean;

  /**
   * Cursor to fetch the next page of results, or `null` when there are no more
   * assignments.
   */
  next: string | null;

  /**
   * Always `list`.
   */
  object: 'list';
}

export namespace RoleListAssigned {
  /**
   * Detailed information about a role assignment entry returned when listing
   * assignments.
   */
  export interface Data {
    /**
     * Identifier for the role.
     */
    id: string;

    /**
     * When the role was created.
     */
    created_at: number | null;

    /**
     * Identifier of the actor who created the role.
     */
    created_by: string | null;

    /**
     * User details for the actor that created the role, when available.
     */
    created_by_user_obj: { [key: string]: unknown } | null;

    /**
     * Description of the role.
     */
    description: string | null;

    /**
     * Arbitrary metadata stored on the role.
     */
    metadata: { [key: string]: unknown } | null;

    /**
     * Name of the role.
     */
    name: string;

    /**
     * Permissions associated with the role.
     */
    permissions: Array<string>;

    /**
     * Whether the role is predefined by OpenAI.
     */
    predefined_role: boolean;

    /**
     * Resource type the role applies to.
     */
    resource_type: string;

    /**
     * When the role was last updated.
     */
    updated_at: number | null;
  }
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
   * The ID of the group to modify.
   */
  group_id: string;
}

export declare namespace Roles {
  export {
    type AssignGroupRole as AssignGroupRole,
    type DeletedRoleAssignment as DeletedRoleAssignment,
    type GroupRoleAssignment as GroupRoleAssignment,
    type RoleListAssigned as RoleListAssigned,
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };
}
