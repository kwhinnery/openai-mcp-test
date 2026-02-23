// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VideosAPI from '../videos';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Create a new immutable skill version.
   */
  create(
    skillID: string,
    body: VersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SkillVersionResource> {
    return this._client.post(
      path`/skills/${skillID}/versions`,
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get a specific skill version.
   */
  retrieve(
    version: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SkillVersionResource> {
    const { skill_id } = params;
    return this._client.get(path`/skills/${skill_id}/versions/${version}`, options);
  }

  /**
   * List skill versions for a skill.
   */
  list(
    skillID: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/skills/${skillID}/versions`, { query, ...options });
  }

  /**
   * Delete a skill version.
   */
  delete(
    version: string,
    params: VersionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<VersionDeleteResponse> {
    const { skill_id } = params;
    return this._client.delete(path`/skills/${skill_id}/versions/${version}`, options);
  }

  /**
   * Download a skill version zip bundle.
   */
  downloadContent(
    version: string,
    params: VersionDownloadContentParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { skill_id } = params;
    return this._client.get(path`/skills/${skill_id}/versions/${version}/content`, options);
  }
}

export interface SkillVersionResource {
  /**
   * Unique identifier for the skill version.
   */
  id: string;

  /**
   * Unix timestamp (seconds) for when the version was created.
   */
  created_at: number;

  /**
   * Description of the skill version.
   */
  description: string;

  /**
   * Name of the skill version.
   */
  name: string;

  /**
   * The object type, which is `skill.version`.
   */
  object: 'skill.version';

  /**
   * Identifier of the skill for this version.
   */
  skill_id: string;

  /**
   * Version number for this skill.
   */
  version: string;
}

export interface VersionListResponse {
  /**
   * A list of items
   */
  data: Array<SkillVersionResource>;

  /**
   * The ID of the first item in the list.
   */
  first_id: string | null;

  /**
   * Whether there are more items available.
   */
  has_more: boolean;

  /**
   * The ID of the last item in the list.
   */
  last_id: string | null;

  /**
   * The type of object returned, must be `list`.
   */
  object: 'list';
}

export interface VersionDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'skill.version.deleted';

  /**
   * The deleted skill version.
   */
  version: string;
}

export type VersionDownloadContentResponse = string;

export interface VersionCreateParams {
  /**
   * Skill files to upload (directory upload) or a single zip file.
   */
  files: Array<Uploadable> | Uploadable;

  /**
   * Whether to set this version as the default.
   */
  default?: boolean;
}

export interface VersionRetrieveParams {
  /**
   * The identifier of the skill.
   */
  skill_id: string;
}

export interface VersionListParams {
  /**
   * The skill version ID to start after.
   */
  after?: string;

  /**
   * Number of versions to retrieve.
   */
  limit?: number;

  /**
   * Sort order of results by version number.
   */
  order?: VideosAPI.OrderEnum;
}

export interface VersionDeleteParams {
  /**
   * The identifier of the skill.
   */
  skill_id: string;
}

export interface VersionDownloadContentParams {
  /**
   * The identifier of the skill.
   */
  skill_id: string;
}

export declare namespace Versions {
  export {
    type SkillVersionResource as SkillVersionResource,
    type VersionListResponse as VersionListResponse,
    type VersionDeleteResponse as VersionDeleteResponse,
    type VersionDownloadContentResponse as VersionDownloadContentResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionDownloadContentParams as VersionDownloadContentParams,
  };
}
