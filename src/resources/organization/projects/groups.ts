// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Grants a group access to a project.
   *
   * @example
   * ```ts
   * const projectGroup =
   *   await client.organization.projects.groups.create(
   *     'project_id',
   *     { group_id: 'group_id', role: 'role' },
   *   );
   * ```
   */
  create(projectID: string, body: GroupCreateParams, options?: RequestOptions): APIPromise<ProjectGroup> {
    return this._client.post(path`/organization/projects/${projectID}/groups`, { body, ...options });
  }

  /**
   * Lists the groups that have access to a project.
   *
   * @example
   * ```ts
   * const groups =
   *   await client.organization.projects.groups.list(
   *     'project_id',
   *   );
   * ```
   */
  list(
    projectID: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get(path`/organization/projects/${projectID}/groups`, { query, ...options });
  }

  /**
   * Revokes a group's access to a project.
   *
   * @example
   * ```ts
   * const group =
   *   await client.organization.projects.groups.delete(
   *     'group_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  delete(
    groupID: string,
    params: GroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<GroupDeleteResponse> {
    const { project_id } = params;
    return this._client.delete(path`/organization/projects/${project_id}/groups/${groupID}`, options);
  }
}

/**
 * Details about a group's membership in a project.
 */
export interface ProjectGroup {
  /**
   * Unix timestamp (in seconds) when the group was granted project access.
   */
  created_at: number;

  /**
   * Identifier of the group that has access to the project.
   */
  group_id: string;

  /**
   * Display name of the group.
   */
  group_name: string;

  /**
   * Always `project.group`.
   */
  object: 'project.group';

  /**
   * Identifier of the project.
   */
  project_id: string;
}

/**
 * Paginated list of groups that have access to a project.
 */
export interface GroupListResponse {
  /**
   * Project group memberships returned in the current page.
   */
  data: Array<ProjectGroup>;

  /**
   * Whether additional project group memberships are available.
   */
  has_more: boolean;

  /**
   * Cursor to fetch the next page of results, or `null` when there are no more
   * results.
   */
  next: string | null;

  /**
   * Always `list`.
   */
  object: 'list';
}

/**
 * Confirmation payload returned after removing a group from a project.
 */
export interface GroupDeleteResponse {
  /**
   * Whether the group membership in the project was removed.
   */
  deleted: boolean;

  /**
   * Always `project.group.deleted`.
   */
  object: 'project.group.deleted';
}

export interface GroupCreateParams {
  /**
   * Identifier of the group to add to the project.
   */
  group_id: string;

  /**
   * Identifier of the project role to grant to the group.
   */
  role: string;
}

export interface GroupListParams {
  /**
   * Cursor for pagination. Provide the ID of the last group from the previous
   * response to fetch the next page.
   */
  after?: string;

  /**
   * A limit on the number of project groups to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Sort order for the returned groups.
   */
  order?: 'asc' | 'desc';
}

export interface GroupDeleteParams {
  /**
   * The ID of the project to update.
   */
  project_id: string;
}

export declare namespace Groups {
  export {
    type ProjectGroup as ProjectGroup,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };
}
