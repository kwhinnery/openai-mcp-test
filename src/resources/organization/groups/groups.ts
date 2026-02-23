// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from './roles';
import {
  AssignGroupRole,
  DeletedRoleAssignment,
  GroupRoleAssignment,
  RoleAssignParams,
  RoleListAssigned,
  RoleListParams,
  RoleUnassignParams,
  Roles,
} from './roles';
import * as UsersAPI from './users';
import {
  UserAddParams,
  UserAddResponse,
  UserListParams,
  UserListResponse,
  UserRemoveParams,
  UserRemoveResponse,
  Users,
} from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Creates a new group in the organization.
   *
   * @example
   * ```ts
   * const groupResponse =
   *   await client.organization.groups.create({ name: 'x' });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<GroupResponse> {
    return this._client.post('/organization/groups', { body, ...options });
  }

  /**
   * Updates a group's information.
   *
   * @example
   * ```ts
   * const group = await client.organization.groups.update(
   *   'group_id',
   *   { name: 'x' },
   * );
   * ```
   */
  update(
    groupID: string,
    body: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GroupUpdateResponse> {
    return this._client.post(path`/organization/groups/${groupID}`, { body, ...options });
  }

  /**
   * Lists all groups in the organization.
   *
   * @example
   * ```ts
   * const groups = await client.organization.groups.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/organization/groups', { query, ...options });
  }

  /**
   * Deletes a group from the organization.
   *
   * @example
   * ```ts
   * const group = await client.organization.groups.delete(
   *   'group_id',
   * );
   * ```
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<GroupDeleteResponse> {
    return this._client.delete(path`/organization/groups/${groupID}`, options);
  }
}

/**
 * Details about an organization group.
 */
export interface GroupResponse {
  /**
   * Identifier for the group.
   */
  id: string;

  /**
   * Unix timestamp (in seconds) when the group was created.
   */
  created_at: number;

  /**
   * Whether the group is managed through SCIM and controlled by your identity
   * provider.
   */
  is_scim_managed: boolean;

  /**
   * Display name of the group.
   */
  name: string;
}

/**
 * Response returned after updating a group.
 */
export interface GroupUpdateResponse {
  /**
   * Identifier for the group.
   */
  id: string;

  /**
   * Unix timestamp (in seconds) when the group was created.
   */
  created_at: number;

  /**
   * Whether the group is managed through SCIM and controlled by your identity
   * provider.
   */
  is_scim_managed: boolean;

  /**
   * Updated display name for the group.
   */
  name: string;
}

/**
 * Paginated list of organization groups.
 */
export interface GroupListResponse {
  /**
   * Groups returned in the current page.
   */
  data: Array<GroupResponse>;

  /**
   * Whether additional groups are available when paginating.
   */
  has_more: boolean;

  /**
   * Cursor to fetch the next page of results, or `null` if there are no more
   * results.
   */
  next: string | null;

  /**
   * Always `list`.
   */
  object: 'list';
}

/**
 * Confirmation payload returned after deleting a group.
 */
export interface GroupDeleteResponse {
  /**
   * Identifier of the deleted group.
   */
  id: string;

  /**
   * Whether the group was deleted.
   */
  deleted: boolean;

  /**
   * Always `group.deleted`.
   */
  object: 'group.deleted';
}

export interface GroupCreateParams {
  /**
   * Human readable name for the group.
   */
  name: string;
}

export interface GroupUpdateParams {
  /**
   * New display name for the group.
   */
  name: string;
}

export interface GroupListParams {
  /**
   * A cursor for use in pagination. `after` is a group ID that defines your place in
   * the list. For instance, if you make a list request and receive 100 objects,
   * ending with group_abc, your subsequent call can include `after=group_abc` in
   * order to fetch the next page of the list.
   */
  after?: string;

  /**
   * A limit on the number of groups to be returned. Limit can range between 0 and
   * 1000, and the default is 100.
   */
  limit?: number;

  /**
   * Specifies the sort order of the returned groups.
   */
  order?: 'asc' | 'desc';
}

Groups.Roles = Roles;
Groups.Users = Users;

export declare namespace Groups {
  export {
    type GroupResponse as GroupResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Roles as Roles,
    type AssignGroupRole as AssignGroupRole,
    type DeletedRoleAssignment as DeletedRoleAssignment,
    type GroupRoleAssignment as GroupRoleAssignment,
    type RoleListAssigned as RoleListAssigned,
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };

  export {
    Users as Users,
    type UserListResponse as UserListResponse,
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserListParams as UserListParams,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
