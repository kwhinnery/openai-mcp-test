// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdminAPIKeys extends APIResource {
  /**
   * Create a new admin-level API key for the organization.
   *
   * @example
   * ```ts
   * const adminAPIKey =
   *   await client.organization.adminAPIKeys.create({
   *     name: 'New Admin Key',
   *   });
   * ```
   */
  create(body: AdminAPIKeyCreateParams, options?: RequestOptions): APIPromise<AdminAPIKey> {
    return this._client.post('/organization/admin_api_keys', { body, ...options });
  }

  /**
   * Get details for a specific organization API key by its ID.
   *
   * @example
   * ```ts
   * const adminAPIKey =
   *   await client.organization.adminAPIKeys.retrieve('key_id');
   * ```
   */
  retrieve(keyID: string, options?: RequestOptions): APIPromise<AdminAPIKey> {
    return this._client.get(path`/organization/admin_api_keys/${keyID}`, options);
  }

  /**
   * Retrieve a paginated list of organization admin API keys.
   *
   * @example
   * ```ts
   * const adminAPIKeys =
   *   await client.organization.adminAPIKeys.list();
   * ```
   */
  list(
    query: AdminAPIKeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdminAPIKeyListResponse> {
    return this._client.get('/organization/admin_api_keys', { query, ...options });
  }

  /**
   * Delete the specified admin API key.
   *
   * @example
   * ```ts
   * const adminAPIKey =
   *   await client.organization.adminAPIKeys.delete('key_id');
   * ```
   */
  delete(keyID: string, options?: RequestOptions): APIPromise<AdminAPIKeyDeleteResponse> {
    return this._client.delete(path`/organization/admin_api_keys/${keyID}`, options);
  }
}

/**
 * Represents an individual Admin API key in an org.
 */
export interface AdminAPIKey {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the API key was created
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) of when the API key was last used
   */
  last_used_at: number | null;

  /**
   * The name of the API key
   */
  name: string;

  /**
   * The object type, which is always `organization.admin_api_key`
   */
  object: string;

  owner: AdminAPIKey.Owner;

  /**
   * The redacted value of the API key
   */
  redacted_value: string;

  /**
   * The value of the API key. Only shown on create.
   */
  value?: string;
}

export namespace AdminAPIKey {
  export interface Owner {
    /**
     * The identifier, which can be referenced in API endpoints
     */
    id?: string;

    /**
     * The Unix timestamp (in seconds) of when the user was created
     */
    created_at?: number;

    /**
     * The name of the user
     */
    name?: string;

    /**
     * The object type, which is always organization.user
     */
    object?: string;

    /**
     * Always `owner`
     */
    role?: string;

    /**
     * Always `user`
     */
    type?: string;
  }
}

export interface AdminAPIKeyListResponse {
  data?: Array<AdminAPIKey>;

  first_id?: string;

  has_more?: boolean;

  last_id?: string;

  object?: string;
}

export interface AdminAPIKeyDeleteResponse {
  id?: string;

  deleted?: boolean;

  object?: string;
}

export interface AdminAPIKeyCreateParams {
  name: string;
}

export interface AdminAPIKeyListParams {
  /**
   * Return keys with IDs that come after this ID in the pagination order.
   */
  after?: string | null;

  /**
   * Maximum number of keys to return.
   */
  limit?: number;

  /**
   * Order results by creation time, ascending or descending.
   */
  order?: 'asc' | 'desc';
}

export declare namespace AdminAPIKeys {
  export {
    type AdminAPIKey as AdminAPIKey,
    type AdminAPIKeyListResponse as AdminAPIKeyListResponse,
    type AdminAPIKeyDeleteResponse as AdminAPIKeyDeleteResponse,
    type AdminAPIKeyCreateParams as AdminAPIKeyCreateParams,
    type AdminAPIKeyListParams as AdminAPIKeyListParams,
  };
}
