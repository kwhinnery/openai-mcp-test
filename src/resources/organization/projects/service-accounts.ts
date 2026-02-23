// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ServiceAccounts extends APIResource {
  /**
   * Creates a new service account in the project. This also returns an unredacted
   * API key for the service account.
   *
   * @example
   * ```ts
   * const serviceAccount =
   *   await client.organization.projects.serviceAccounts.create(
   *     'project_id',
   *     { name: 'name' },
   *   );
   * ```
   */
  create(
    projectID: string,
    body: ServiceAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceAccountCreateResponse> {
    return this._client.post(path`/organization/projects/${projectID}/service_accounts`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves a service account in the project.
   *
   * @example
   * ```ts
   * const projectServiceAccount =
   *   await client.organization.projects.serviceAccounts.retrieve(
   *     'service_account_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  retrieve(
    serviceAccountID: string,
    params: ServiceAccountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ProjectServiceAccount> {
    const { project_id } = params;
    return this._client.get(
      path`/organization/projects/${project_id}/service_accounts/${serviceAccountID}`,
      options,
    );
  }

  /**
   * Returns a list of service accounts in the project.
   *
   * @example
   * ```ts
   * const serviceAccounts =
   *   await client.organization.projects.serviceAccounts.list(
   *     'project_id',
   *   );
   * ```
   */
  list(
    projectID: string,
    query: ServiceAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServiceAccountListResponse> {
    return this._client.get(path`/organization/projects/${projectID}/service_accounts`, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a service account from the project.
   *
   * Returns confirmation of service account deletion, or an error if the project is
   * archived (archived projects have no service accounts).
   *
   * @example
   * ```ts
   * const serviceAccount =
   *   await client.organization.projects.serviceAccounts.delete(
   *     'service_account_id',
   *     { project_id: 'project_id' },
   *   );
   * ```
   */
  delete(
    serviceAccountID: string,
    params: ServiceAccountDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ServiceAccountDeleteResponse> {
    const { project_id } = params;
    return this._client.delete(
      path`/organization/projects/${project_id}/service_accounts/${serviceAccountID}`,
      options,
    );
  }
}

/**
 * Represents an individual service account in a project.
 */
export interface ProjectServiceAccount {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the service account was created
   */
  created_at: number;

  /**
   * The name of the service account
   */
  name: string;

  /**
   * The object type, which is always `organization.project.service_account`
   */
  object: 'organization.project.service_account';

  /**
   * `owner` or `member`
   */
  role: 'owner' | 'member';
}

export interface ServiceAccountCreateResponse {
  id: string;

  api_key: ServiceAccountCreateResponse.APIKey;

  created_at: number;

  name: string;

  object: 'organization.project.service_account';

  /**
   * Service accounts can only have one role of type `member`
   */
  role: 'member';
}

export namespace ServiceAccountCreateResponse {
  export interface APIKey {
    id: string;

    created_at: number;

    name: string;

    /**
     * The object type, which is always `organization.project.service_account.api_key`
     */
    object: 'organization.project.service_account.api_key';

    value: string;
  }
}

export interface ServiceAccountListResponse {
  data: Array<ProjectServiceAccount>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export interface ServiceAccountDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'organization.project.service_account.deleted';
}

export interface ServiceAccountCreateParams {
  /**
   * The name of the service account being created.
   */
  name: string;
}

export interface ServiceAccountRetrieveParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export interface ServiceAccountListParams {
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

export interface ServiceAccountDeleteParams {
  /**
   * The ID of the project.
   */
  project_id: string;
}

export declare namespace ServiceAccounts {
  export {
    type ProjectServiceAccount as ProjectServiceAccount,
    type ServiceAccountCreateResponse as ServiceAccountCreateResponse,
    type ServiceAccountListResponse as ServiceAccountListResponse,
    type ServiceAccountDeleteResponse as ServiceAccountDeleteResponse,
    type ServiceAccountCreateParams as ServiceAccountCreateParams,
    type ServiceAccountRetrieveParams as ServiceAccountRetrieveParams,
    type ServiceAccountListParams as ServiceAccountListParams,
    type ServiceAccountDeleteParams as ServiceAccountDeleteParams,
  };
}
