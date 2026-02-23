// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CertificatesAPI from '../certificates';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Certificates extends APIResource {
  /**
   * List certificates for this project.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.projects.certificates.list(
   *     'project_id',
   *   );
   * ```
   */
  list(
    projectID: string,
    query: CertificateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CertificatesAPI.ListCertificates> {
    return this._client.get(path`/organization/projects/${projectID}/certificates`, { query, ...options });
  }

  /**
   * Activate certificates at the project level.
   *
   * You can atomically and idempotently activate up to 10 certificates at a time.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.projects.certificates.activate(
   *     'project_id',
   *     { certificate_ids: ['cert_abc'] },
   *   );
   * ```
   */
  activate(
    projectID: string,
    body: CertificateActivateParams,
    options?: RequestOptions,
  ): APIPromise<CertificatesAPI.ListCertificates> {
    return this._client.post(path`/organization/projects/${projectID}/certificates/activate`, {
      body,
      ...options,
    });
  }

  /**
   * Deactivate certificates at the project level. You can atomically and
   * idempotently deactivate up to 10 certificates at a time.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.projects.certificates.deactivate(
   *     'project_id',
   *     { certificate_ids: ['cert_abc'] },
   *   );
   * ```
   */
  deactivate(
    projectID: string,
    body: CertificateDeactivateParams,
    options?: RequestOptions,
  ): APIPromise<CertificatesAPI.ListCertificates> {
    return this._client.post(path`/organization/projects/${projectID}/certificates/deactivate`, {
      body,
      ...options,
    });
  }
}

export interface CertificateListParams {
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

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';
}

export interface CertificateActivateParams {
  certificate_ids: Array<string>;
}

export interface CertificateDeactivateParams {
  certificate_ids: Array<string>;
}

export declare namespace Certificates {
  export {
    type CertificateListParams as CertificateListParams,
    type CertificateActivateParams as CertificateActivateParams,
    type CertificateDeactivateParams as CertificateDeactivateParams,
  };
}
