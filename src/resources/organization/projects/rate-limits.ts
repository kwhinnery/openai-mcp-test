// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class RateLimits extends APIResource {
  /**
   * Returns the rate limits per model for a project.
   *
   * @example
   * ```ts
   * const rateLimit =
   *   await client.organization.projects.rateLimits.retrieve(
   *     'project_id',
   *   );
   * ```
   */
  retrieve(
    projectID: string,
    query: RateLimitRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RateLimitRetrieveResponse> {
    return this._client.get(path`/organization/projects/${projectID}/rate_limits`, { query, ...options });
  }

  /**
   * Updates a project rate limit.
   *
   * @example
   * ```ts
   * const projectRateLimit =
   *   await client.organization.projects.rateLimits.update(
   *     'rate_limit_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  update(
    rateLimitID: string,
    params: RateLimitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProjectRateLimit> {
    const { project_id, ...body } = params;
    return this._client.post(path`/organization/projects/${project_id}/rate_limits/${rateLimitID}`, {
      body,
      ...options,
    });
  }
}

/**
 * Represents a project rate limit config.
 */
export interface ProjectRateLimit {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The maximum requests per minute.
   */
  max_requests_per_1_minute: number;

  /**
   * The maximum tokens per minute.
   */
  max_tokens_per_1_minute: number;

  /**
   * The model this rate limit applies to.
   */
  model: string;

  /**
   * The object type, which is always `project.rate_limit`
   */
  object: 'project.rate_limit';

  /**
   * The maximum batch input tokens per day. Only present for relevant models.
   */
  batch_1_day_max_input_tokens?: number;

  /**
   * The maximum audio megabytes per minute. Only present for relevant models.
   */
  max_audio_megabytes_per_1_minute?: number;

  /**
   * The maximum images per minute. Only present for relevant models.
   */
  max_images_per_1_minute?: number;

  /**
   * The maximum requests per day. Only present for relevant models.
   */
  max_requests_per_1_day?: number;
}

export interface RateLimitRetrieveResponse {
  data: Array<ProjectRateLimit>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export interface RateLimitRetrieveParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * beginning with obj_foo, your subsequent call can include before=obj_foo in order
   * to fetch the previous page of the list.
   */
  before?: string;

  /**
   * A limit on the number of objects to be returned. The default is 100.
   */
  limit?: number;
}

export interface RateLimitUpdateParams {
  /**
   * Path param: The ID of the project.
   */
  project_id: string;

  /**
   * Body param: The maximum batch input tokens per day. Only relevant for certain
   * models.
   */
  batch_1_day_max_input_tokens?: number;

  /**
   * Body param: The maximum audio megabytes per minute. Only relevant for certain
   * models.
   */
  max_audio_megabytes_per_1_minute?: number;

  /**
   * Body param: The maximum images per minute. Only relevant for certain models.
   */
  max_images_per_1_minute?: number;

  /**
   * Body param: The maximum requests per day. Only relevant for certain models.
   */
  max_requests_per_1_day?: number;

  /**
   * Body param: The maximum requests per minute.
   */
  max_requests_per_1_minute?: number;

  /**
   * Body param: The maximum tokens per minute.
   */
  max_tokens_per_1_minute?: number;
}

export declare namespace RateLimits {
  export {
    type ProjectRateLimit as ProjectRateLimit,
    type RateLimitRetrieveResponse as RateLimitRetrieveResponse,
    type RateLimitRetrieveParams as RateLimitRetrieveParams,
    type RateLimitUpdateParams as RateLimitUpdateParams,
  };
}
