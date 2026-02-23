// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as APIKeysAPI from './api-keys';
import {
  APIKeyDeleteParams,
  APIKeyDeleteResponse,
  APIKeyListParams,
  APIKeyListResponse,
  APIKeyRetrieveParams,
  APIKeys,
  ProjectAPIKey,
} from './api-keys';
import * as CertificatesAPI from './certificates';
import {
  CertificateActivateParams,
  CertificateDeactivateParams,
  CertificateListParams,
  Certificates,
} from './certificates';
import * as GroupsAPI from './groups';
import {
  GroupCreateParams,
  GroupDeleteParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupListResponse,
  Groups,
  ProjectGroup,
} from './groups';
import * as RateLimitsAPI from './rate-limits';
import {
  ProjectRateLimit,
  RateLimitRetrieveParams,
  RateLimitRetrieveResponse,
  RateLimitUpdateParams,
  RateLimits,
} from './rate-limits';
import * as ServiceAccountsAPI from './service-accounts';
import {
  ProjectServiceAccount,
  ServiceAccountCreateParams,
  ServiceAccountCreateResponse,
  ServiceAccountDeleteParams,
  ServiceAccountDeleteResponse,
  ServiceAccountListParams,
  ServiceAccountListResponse,
  ServiceAccountRetrieveParams,
  ServiceAccounts,
} from './service-accounts';
import * as UsersAPI from './users';
import {
  ProjectUser,
  UserAddParams,
  UserDeleteParams,
  UserDeleteResponse,
  UserListParams,
  UserListResponse,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './users';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Projects extends APIResource {
  apiKeys: APIKeysAPI.APIKeys = new APIKeysAPI.APIKeys(this._client);
  certificates: CertificatesAPI.Certificates = new CertificatesAPI.Certificates(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  rateLimits: RateLimitsAPI.RateLimits = new RateLimitsAPI.RateLimits(this._client);
  serviceAccounts: ServiceAccountsAPI.ServiceAccounts = new ServiceAccountsAPI.ServiceAccounts(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);

  /**
   * Create a new project in the organization. Projects can be created and archived,
   * but cannot be deleted.
   *
   * @example
   * ```ts
   * const project = await client.organization.projects.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post('/organization/projects', { body, ...options });
  }

  /**
   * Retrieves a project.
   *
   * @example
   * ```ts
   * const project = await client.organization.projects.retrieve(
   *   'project_id',
   * );
   * ```
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.get(path`/organization/projects/${projectID}`, options);
  }

  /**
   * Modifies a project in the organization.
   *
   * @example
   * ```ts
   * const project = await client.organization.projects.update(
   *   'project_id',
   *   { name: 'name' },
   * );
   * ```
   */
  update(projectID: string, body: ProjectUpdateParams, options?: RequestOptions): APIPromise<Project> {
    return this._client.post(path`/organization/projects/${projectID}`, { body, ...options });
  }

  /**
   * Returns a list of projects.
   *
   * @example
   * ```ts
   * const projects = await client.organization.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/organization/projects', { query, ...options });
  }

  /**
   * Archives a project in the organization. Archived projects cannot be used or
   * updated.
   *
   * @example
   * ```ts
   * const project = await client.organization.projects.archive(
   *   'project_id',
   * );
   * ```
   */
  archive(projectID: string, options?: RequestOptions): APIPromise<Project> {
    return this._client.post(path`/organization/projects/${projectID}/archive`, options);
  }
}

/**
 * Represents an individual project.
 */
export interface Project {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) of when the project was created.
   */
  created_at: number;

  /**
   * The name of the project. This appears in reporting.
   */
  name: string;

  /**
   * The object type, which is always `organization.project`
   */
  object: 'organization.project';

  /**
   * `active` or `archived`
   */
  status: 'active' | 'archived';

  /**
   * The Unix timestamp (in seconds) of when the project was archived or `null`.
   */
  archived_at?: number | null;
}

export interface ProjectListResponse {
  data: Array<Project>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: 'list';
}

export interface ProjectCreateParams {
  /**
   * The friendly name of the project, this name appears in reports.
   */
  name: string;

  /**
   * Create the project with the specified data residency region. Your organization
   * must have access to Data residency functionality in order to use. See
   * [data residency controls](/docs/guides/your-data#data-residency-controls) to
   * review the functionality and limitations of setting this field.
   */
  geography?: 'US' | 'EU' | 'JP' | 'IN' | 'KR' | 'CA' | 'AU' | 'SG';
}

export interface ProjectUpdateParams {
  /**
   * The updated name of the project, this name appears in reports.
   */
  name: string;
}

export interface ProjectListParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * If `true` returns all projects including those that have been `archived`.
   * Archived projects are not included by default.
   */
  include_archived?: boolean;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;
}

Projects.APIKeys = APIKeys;
Projects.Certificates = Certificates;
Projects.Groups = Groups;
Projects.RateLimits = RateLimits;
Projects.ServiceAccounts = ServiceAccounts;
Projects.Users = Users;

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    APIKeys as APIKeys,
    type ProjectAPIKey as ProjectAPIKey,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyRetrieveParams as APIKeyRetrieveParams,
    type APIKeyListParams as APIKeyListParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };

  export {
    Certificates as Certificates,
    type CertificateListParams as CertificateListParams,
    type CertificateActivateParams as CertificateActivateParams,
    type CertificateDeactivateParams as CertificateDeactivateParams,
  };

  export {
    Groups as Groups,
    type ProjectGroup as ProjectGroup,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupDeleteParams as GroupDeleteParams,
  };

  export {
    RateLimits as RateLimits,
    type ProjectRateLimit as ProjectRateLimit,
    type RateLimitRetrieveResponse as RateLimitRetrieveResponse,
    type RateLimitRetrieveParams as RateLimitRetrieveParams,
    type RateLimitUpdateParams as RateLimitUpdateParams,
  };

  export {
    ServiceAccounts as ServiceAccounts,
    type ProjectServiceAccount as ProjectServiceAccount,
    type ServiceAccountCreateResponse as ServiceAccountCreateResponse,
    type ServiceAccountListResponse as ServiceAccountListResponse,
    type ServiceAccountDeleteResponse as ServiceAccountDeleteResponse,
    type ServiceAccountCreateParams as ServiceAccountCreateParams,
    type ServiceAccountRetrieveParams as ServiceAccountRetrieveParams,
    type ServiceAccountListParams as ServiceAccountListParams,
    type ServiceAccountDeleteParams as ServiceAccountDeleteParams,
  };

  export {
    Users as Users,
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
