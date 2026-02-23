// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RolesAPI from './roles';
import { RoleAssignParams, RoleListParams, RoleUnassignParams, Roles, UserRoleAssignment } from './roles';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Retrieves a user by their identifier.
   *
   * @example
   * ```ts
   * const user = await client.organization.users.retrieve(
   *   'user_id',
   * );
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/organization/users/${userID}`, options);
  }

  /**
   * Modifies a user's role in the organization.
   *
   * @example
   * ```ts
   * const user = await client.organization.users.update(
   *   'user_id',
   *   { role: 'owner' },
   * );
   * ```
   */
  update(userID: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post(path`/organization/users/${userID}`, { body, ...options });
  }

  /**
   * Lists all of the users in the organization.
   *
   * @example
   * ```ts
   * const users = await client.organization.users.list();
   * ```
   */
  list(
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get('/organization/users', { query, ...options });
  }

  /**
   * Deletes a user from the organization.
   *
   * @example
   * ```ts
   * const user = await client.organization.users.delete(
   *   'user_id',
   * );
   * ```
   */
  delete(userID: string, options?: RequestOptions): APIPromise<UserDeleteResponse> {
    return this._client.delete(path`/organization/users/${userID}`, options);
  }
}

/**
 * Represents an individual `user` within an organization.
 */
export interface User {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the user was added.
   */
  added_at: number;

  /**
   * The email address of the user
   */
  email: string;

  /**
   * The name of the user
   */
  name: string;

  /**
   * The object type, which is always `organization.user`
   */
  object: 'organization.user';

  /**
   * `owner` or `reader`
   */
  role: 'owner' | 'reader';
}

export interface UserListResponse {
  data: Array<User>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export interface UserDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'organization.user.deleted';
}

export interface UserUpdateParams {
  /**
   * `owner` or `reader`
   */
  role: 'owner' | 'reader';
}

export interface UserListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * Filter by the email address of users.
   */
  emails?: Array<string>;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;
}

Users.Roles = Roles;

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
  };

  export {
    Roles as Roles,
    type UserRoleAssignment as UserRoleAssignment,
    type RoleListParams as RoleListParams,
    type RoleAssignParams as RoleAssignParams,
    type RoleUnassignParams as RoleUnassignParams,
  };
}
