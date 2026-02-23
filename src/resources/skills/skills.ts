// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VideosAPI from '../videos';
import * as VersionsAPI from './versions';
import {
  SkillVersionResource,
  VersionCreateParams,
  VersionDeleteParams,
  VersionDeleteResponse,
  VersionDownloadContentParams,
  VersionDownloadContentResponse,
  VersionListParams,
  VersionListResponse,
  VersionRetrieveParams,
  Versions,
} from './versions';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Skills extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new skill.
   */
  create(body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillResource> {
    return this._client.post('/skills', maybeMultipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Get a skill by its ID.
   */
  retrieve(skillID: string, options?: RequestOptions): APIPromise<SkillResource> {
    return this._client.get(path`/skills/${skillID}`, options);
  }

  /**
   * List all skills for the current project.
   */
  list(
    query: SkillListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillListResponse> {
    return this._client.get('/skills', { query, ...options });
  }

  /**
   * Delete a skill by its ID.
   */
  delete(skillID: string, options?: RequestOptions): APIPromise<SkillDeleteResponse> {
    return this._client.delete(path`/skills/${skillID}`, options);
  }

  /**
   * Download a skill zip bundle by its ID.
   */
  downloadContent(skillID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/skills/${skillID}/content`, options);
  }

  /**
   * Update the default version pointer for a skill.
   */
  updateVersionPointer(
    skillID: string,
    body: SkillUpdateVersionPointerParams,
    options?: RequestOptions,
  ): APIPromise<SkillResource> {
    return this._client.post(path`/skills/${skillID}`, { body, ...options });
  }
}

export interface SkillResource {
  /**
   * Unique identifier for the skill.
   */
  id: string;

  /**
   * Unix timestamp (seconds) for when the skill was created.
   */
  created_at: number;

  /**
   * Default version for the skill.
   */
  default_version: string;

  /**
   * Description of the skill.
   */
  description: string;

  /**
   * Latest version for the skill.
   */
  latest_version: string;

  /**
   * Name of the skill.
   */
  name: string;

  /**
   * The object type, which is `skill`.
   */
  object: 'skill';
}

export interface SkillListResponse {
  /**
   * A list of items
   */
  data: Array<SkillResource>;

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

export interface SkillDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'skill.deleted';
}

export type SkillDownloadContentResponse = string;

export interface SkillCreateParams {
  /**
   * Skill files to upload (directory upload) or a single zip file.
   */
  files: Array<Uploadable> | Uploadable;
}

export interface SkillListParams {
  /**
   * Identifier for the last item from the previous pagination request
   */
  after?: string;

  /**
   * Number of items to retrieve
   */
  limit?: number;

  /**
   * Sort order of results by timestamp. Use `asc` for ascending order or `desc` for
   * descending order.
   */
  order?: VideosAPI.OrderEnum;
}

export interface SkillUpdateVersionPointerParams {
  /**
   * The skill version number to set as default.
   */
  default_version: string;
}

Skills.Versions = Versions;

export declare namespace Skills {
  export {
    type SkillResource as SkillResource,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillDownloadContentResponse as SkillDownloadContentResponse,
    type SkillCreateParams as SkillCreateParams,
    type SkillListParams as SkillListParams,
    type SkillUpdateVersionPointerParams as SkillUpdateVersionPointerParams,
  };

  export {
    Versions as Versions,
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
