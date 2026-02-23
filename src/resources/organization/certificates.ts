// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Certificates extends APIResource {
  /**
   * Get a certificate that has been uploaded to the organization.
   *
   * You can get a certificate regardless of whether it is active or not.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.organization.certificates.retrieve(
   *     'certificate_id',
   *   );
   * ```
   */
  retrieve(
    certificateID: string,
    query: CertificateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Certificate> {
    return this._client.get(path`/organization/certificates/${certificateID}`, { query, ...options });
  }

  /**
   * Modify a certificate. Note that only the name can be modified.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.organization.certificates.update(
   *     'certificate_id',
   *     { name: 'name' },
   *   );
   * ```
   */
  update(
    certificateID: string,
    body: CertificateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Certificate> {
    return this._client.post(path`/organization/certificates/${certificateID}`, { body, ...options });
  }

  /**
   * List uploaded certificates for this organization.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.certificates.list();
   * ```
   */
  list(
    query: CertificateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListCertificates> {
    return this._client.get('/organization/certificates', { query, ...options });
  }

  /**
   * Delete a certificate from the organization.
   *
   * The certificate must be inactive for the organization and all projects.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.organization.certificates.delete(
   *     'certificate_id',
   *   );
   * ```
   */
  delete(certificateID: string, options?: RequestOptions): APIPromise<CertificateDeleteResponse> {
    return this._client.delete(path`/organization/certificates/${certificateID}`, options);
  }

  /**
   * Activate certificates at the organization level.
   *
   * You can atomically and idempotently activate up to 10 certificates at a time.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.certificates.activate({
   *     certificate_ids: ['cert_abc'],
   *   });
   * ```
   */
  activate(body: CertificateActivateParams, options?: RequestOptions): APIPromise<ListCertificates> {
    return this._client.post('/organization/certificates/activate', { body, ...options });
  }

  /**
   * Deactivate certificates at the organization level.
   *
   * You can atomically and idempotently deactivate up to 10 certificates at a time.
   *
   * @example
   * ```ts
   * const listCertificates =
   *   await client.organization.certificates.deactivate({
   *     certificate_ids: ['cert_abc'],
   *   });
   * ```
   */
  deactivate(body: CertificateDeactivateParams, options?: RequestOptions): APIPromise<ListCertificates> {
    return this._client.post('/organization/certificates/deactivate', { body, ...options });
  }

  /**
   * Upload a certificate to the organization. This does **not** automatically
   * activate the certificate.
   *
   * Organizations can upload up to 50 certificates.
   *
   * @example
   * ```ts
   * const certificate =
   *   await client.organization.certificates.upload({
   *     content: 'content',
   *   });
   * ```
   */
  upload(body: CertificateUploadParams, options?: RequestOptions): APIPromise<Certificate> {
    return this._client.post('/organization/certificates', { body, ...options });
  }
}

/**
 * Represents an individual `certificate` uploaded to the organization.
 */
export interface Certificate {
  /**
   * The identifier, which can be referenced in API endpoints
   */
  id: string;

  certificate_details: Certificate.CertificateDetails;

  /**
   * The Unix timestamp (in seconds) of when the certificate was uploaded.
   */
  created_at: number;

  /**
   * The name of the certificate.
   */
  name: string;

  /**
   * The object type.
   *
   * - If creating, updating, or getting a specific certificate, the object type is
   *   `certificate`.
   * - If listing, activating, or deactivating certificates for the organization, the
   *   object type is `organization.certificate`.
   * - If listing, activating, or deactivating certificates for a project, the object
   *   type is `organization.project.certificate`.
   */
  object: 'certificate' | 'organization.certificate' | 'organization.project.certificate';

  /**
   * Whether the certificate is currently active at the specified scope. Not returned
   * when getting details for a specific certificate.
   */
  active?: boolean;
}

export namespace Certificate {
  export interface CertificateDetails {
    /**
     * The content of the certificate in PEM format.
     */
    content?: string;

    /**
     * The Unix timestamp (in seconds) of when the certificate expires.
     */
    expires_at?: number;

    /**
     * The Unix timestamp (in seconds) of when the certificate becomes valid.
     */
    valid_at?: number;
  }
}

export interface ListCertificates {
  data: Array<Certificate>;

  has_more: boolean;

  object: 'list';

  first_id?: string;

  last_id?: string;
}

export interface ToggleCertificates {
  certificate_ids: Array<string>;
}

export interface CertificateDeleteResponse {
  /**
   * The ID of the certificate that was deleted.
   */
  id: string;

  /**
   * The object type, must be `certificate.deleted`.
   */
  object: 'certificate.deleted';
}

export interface CertificateRetrieveParams {
  /**
   * A list of additional fields to include in the response. Currently the only
   * supported value is `content` to fetch the PEM content of the certificate.
   */
  include?: Array<'content'>;
}

export interface CertificateUpdateParams {
  /**
   * The updated name for the certificate
   */
  name: string;
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

export interface CertificateUploadParams {
  /**
   * The certificate content in PEM format
   */
  content: string;

  /**
   * An optional name for the certificate
   */
  name?: string;
}

export declare namespace Certificates {
  export {
    type Certificate as Certificate,
    type ListCertificates as ListCertificates,
    type ToggleCertificates as ToggleCertificates,
    type CertificateDeleteResponse as CertificateDeleteResponse,
    type CertificateRetrieveParams as CertificateRetrieveParams,
    type CertificateUpdateParams as CertificateUpdateParams,
    type CertificateListParams as CertificateListParams,
    type CertificateActivateParams as CertificateActivateParams,
    type CertificateDeactivateParams as CertificateDeactivateParams,
    type CertificateUploadParams as CertificateUploadParams,
  };
}
