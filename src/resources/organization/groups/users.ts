// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsersUsersAPI from '../users/users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Lists the users assigned to a group.
   *
   * @example
   * ```ts
   * const users = await client.organization.groups.users.list(
   *   'group_id',
   * );
   * ```
   */
  list(
    groupID: string,
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get(path`/organization/groups/${groupID}/users`, { query, ...options });
  }

  /**
   * Adds a user to a group.
   *
   * @example
   * ```ts
   * const response = await client.organization.groups.users.add(
   *   'group_id',
   *   { user_id: 'user_id' },
   * );
   * ```
   */
  add(groupID: string, body: UserAddParams, options?: RequestOptions): APIPromise<UserAddResponse> {
    return this._client.post(path`/organization/groups/${groupID}/users`, { body, ...options });
  }

  /**
   * Removes a user from a group.
   *
   * @example
   * ```ts
   * const user = await client.organization.groups.users.remove(
   *   'user_id',
   *   { group_id: 'group_id' },
   * );
   * ```
   */
  remove(userID: string, params: UserRemoveParams, options?: RequestOptions): APIPromise<UserRemoveResponse> {
    const { group_id } = params;
    return this._client.delete(path`/organization/groups/${group_id}/users/${userID}`, options);
  }
}

/**
 * Paginated list of user objects returned when inspecting group membership.
 */
export interface UserListResponse {
  /**
   * Users in the current page.
   */
  data: Array<UsersUsersAPI.User>;

  /**
   * Whether more users are available when paginating.
   */
  has_more: boolean;

  /**
   * Cursor to fetch the next page of results, or `null` when no further users are
   * available.
   */
  next: string | null;

  /**
   * Always `list`.
   */
  object: 'list';
}

/**
 * Confirmation payload returned after adding a user to a group.
 */
export interface UserAddResponse {
  /**
   * Identifier of the group the user was added to.
   */
  group_id: string;

  /**
   * Always `group.user`.
   */
  object: 'group.user';

  /**
   * Identifier of the user that was added.
   */
  user_id: string;
}

/**
 * Confirmation payload returned after removing a user from a group.
 */
export interface UserRemoveResponse {
  /**
   * Whether the group membership was removed.
   */
  deleted: boolean;

  /**
   * Always `group.user.deleted`.
   */
  object: 'group.user.deleted';
}

export interface UserListParams {
  /**
   * A cursor for use in pagination. Provide the ID of the last user from the
   * previous list response to retrieve the next page.
   */
  after?: string;

  /**
   * A limit on the number of users to be returned. Limit can range between 0 and
   * 1000, and the default is 100.
   */
  limit?: number;

  /**
   * Specifies the sort order of users in the list.
   */
  order?: 'asc' | 'desc';
}

export interface UserAddParams {
  /**
   * Identifier of the user to add to the group.
   */
  user_id: string;
}

export interface UserRemoveParams {
  /**
   * The ID of the group to update.
   */
  group_id: string;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserAddResponse as UserAddResponse,
    type UserRemoveResponse as UserRemoveResponse,
    type UserListParams as UserListParams,
    type UserAddParams as UserAddParams,
    type UserRemoveParams as UserRemoveParams,
  };
}
