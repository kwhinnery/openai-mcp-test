// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieves a user in the project.
   *
   * @example
   * ```ts
   * const projectUser =
   *   await client.organization.projects.users.retrieve(
   *     'user_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  retrieve(userID: string, params: UserRetrieveParams, options?: RequestOptions): APIPromise<ProjectUser> {
    const { project_id } = params;
    return this._client.get(path`/organization/projects/${project_id}/users/${userID}`, options);
  }

  /**
   * Modifies a user's role in the project.
   *
   * @example
   * ```ts
   * const projectUser =
   *   await client.organization.projects.users.update(
   *     'user_id',
   *     { project_id: 'project_id', role: 'owner' },
   *   );
   * ```
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<ProjectUser> {
    const { project_id, ...body } = params;
    return this._client.post(path`/organization/projects/${project_id}/users/${userID}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of users in the project.
   *
   * @example
   * ```ts
   * const users = await client.organization.projects.users.list(
   *   'project_id',
   * );
   * ```
   */
  list(
    projectID: string,
    query: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    return this._client.get(path`/organization/projects/${projectID}/users`, { query, ...options });
  }

  /**
   * Deletes a user from the project.
   *
   * Returns confirmation of project user deletion, or an error if the project is
   * archived (archived projects have no users).
   *
   * @example
   * ```ts
   * const user =
   *   await client.organization.projects.users.delete(
   *     'user_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<UserDeleteResponse> {
    const { project_id } = params;
    return this._client.delete(path`/organization/projects/${project_id}/users/${userID}`, options);
  }

  /**
   * Adds a user to the project. Users must already be members of the organization to
   * be added to a project.
   *
   * @example
   * ```ts
   * const projectUser =
   *   await client.organization.projects.users.add(
   *     'project_id',
   *     { role: 'owner', user_id: 'user_id' },
   *   );
   * ```
   */
  add(projectID: string, body: UserAddParams, options?: RequestOptions): APIPromise<ProjectUser> {
    return this._client.post(path`/organization/projects/${projectID}/users`, { body, ...options });
  }
}

/**
 * Represents an individual user in a project.
 */
export interface ProjectUser {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the project was added.
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
   * The object type, which is always `organization.project.user`
   */
  object: 'organization.project.user';

  /**
   * `owner` or `member`
   */
  role: 'owner' | 'member';
}

export interface UserListResponse {
  data: Array<ProjectUser>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface UserDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'organization.project.user.deleted';
}

export interface UserRetrieveParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export interface UserUpdateParams {
  /**
   * Path param: The ID of the project.
   */
  project_id: string;

  /**
   * Body param: `owner` or `member`
   */
  role: 'owner' | 'member';
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
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;
}

export interface UserDeleteParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export interface UserAddParams {
  /**
   * `owner` or `member`
   */
  role: 'owner' | 'member';

  /**
   * The ID of the user.
   */
  user_id: string;
}

export declare namespace Users {
  export {
    type ProjectUser as ProjectUser,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserAddParams as UserAddParams,
  };
}
