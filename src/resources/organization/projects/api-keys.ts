// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ServiceAccountsAPI from './service-accounts';
import * as UsersAPI from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Retrieves an API key in the project.
   *
   * @example
   * ```ts
   * const projectAPIKey =
   *   await client.organization.projects.apiKeys.retrieve(
   *     'key_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  retrieve(keyID: string, params: APIKeyRetrieveParams, options?: RequestOptions): APIPromise<ProjectAPIKey> {
    const { project_id } = params;
    return this._client.get(path`/organization/projects/${project_id}/api_keys/${keyID}`, options);
  }

  /**
   * Returns a list of API keys in the project.
   *
   * @example
   * ```ts
   * const apiKeys =
   *   await client.organization.projects.apiKeys.list(
   *     'project_id',
   *   );
   * ```
   */
  list(
    projectID: string,
    query: APIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/organization/projects/${projectID}/api_keys`, { query, ...options });
  }

  /**
   * Deletes an API key from the project.
   *
   * Returns confirmation of the key deletion, or an error if the key belonged to a
   * service account.
   *
   * @example
   * ```ts
   * const apiKey =
   *   await client.organization.projects.apiKeys.delete(
   *     'key_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  delete(
    keyID: string,
    params: APIKeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyDeleteResponse> {
    const { project_id } = params;
    return this._client.delete(path`/organization/projects/${project_id}/api_keys/${keyID}`, options);
  }
}

/**
 * Represents an individual API key in a project.
 */
export interface ProjectAPIKey {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the API key was created
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) of when the API key was last used.
   */
  last_used_at: number;

  /**
   * The name of the API key
   */
  name: string;

  /**
   * The object type, which is always `organization.project.api_key`
   */
  object: 'organization.project.api_key';

  owner: ProjectAPIKey.Owner;

  /**
   * The redacted value of the API key
   */
  redacted_value: string;
}

export namespace ProjectAPIKey {
  export interface Owner {
    /**
     * Represents an individual service account in a project.
     */
    service_account?: ServiceAccountsAPI.ProjectServiceAccount;

    /**
     * `user` or `service_account`
     */
    type?: 'user' | 'service_account';

    /**
     * Represents an individual user in a project.
     */
    user?: UsersAPI.ProjectUser;
  }
}

export interface APIKeyListResponse {
  data: Array<ProjectAPIKey>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export interface APIKeyDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'organization.project.api_key.deleted';
}

export interface APIKeyRetrieveParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export interface APIKeyListParams {
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

export interface APIKeyDeleteParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export declare namespace APIKeys {
  export {
    type ProjectAPIKey as ProjectAPIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };
}
