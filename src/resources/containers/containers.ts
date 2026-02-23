// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import {
  ContainerFileResource,
  FileCreateParams,
  FileDeleteParams,
  FileListParams,
  FileListResponse,
  FileRetrieveContentParams,
  FileRetrieveParams,
  Files,
} from './files';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Containers extends APIResource {
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Creates a container.
   */
  create(body: ContainerCreateParams, options?: RequestOptions): APIPromise<ContainerResource> {
    return this._client.post('/containers', { body, ...options });
  }

  /**
   * Retrieves a container.
   */
  retrieve(containerID: string, options?: RequestOptions): APIPromise<ContainerResource> {
    return this._client.get(path`/containers/${containerID}`, options);
  }

  /**
   * Lists containers.
   */
  list(
    query: ContainerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContainerListResponse> {
    return this._client.get('/containers', { query, ...options });
  }

  /**
   * Delete a container.
   */
  delete(containerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/containers/${containerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContainerResource {
  /**
   * Unique identifier for the container.
   */
  id: string;

  /**
   * Unix timestamp (in seconds) when the container was created.
   */
  created_at: number;

  /**
   * Name of the container.
   */
  name: string;

  /**
   * The type of this object.
   */
  object: string;

  /**
   * Status of the container (e.g., active, deleted).
   */
  status: string;

  /**
   * The container will expire after this time period. The anchor is the reference
   * point for the expiration. The minutes is the number of minutes after the anchor
   * before the container expires.
   */
  expires_after?: ContainerResource.ExpiresAfter;

  /**
   * Unix timestamp (in seconds) when the container was last active.
   */
  last_active_at?: number;

  /**
   * The memory limit configured for the container.
   */
  memory_limit?: '1g' | '4g' | '16g' | '64g';

  /**
   * Network access policy for the container.
   */
  network_policy?: ContainerResource.NetworkPolicy;
}

export namespace ContainerResource {
  /**
   * The container will expire after this time period. The anchor is the reference
   * point for the expiration. The minutes is the number of minutes after the anchor
   * before the container expires.
   */
  export interface ExpiresAfter {
    /**
     * The reference point for the expiration.
     */
    anchor?: 'last_active_at';

    /**
     * The number of minutes after the anchor before the container expires.
     */
    minutes?: number;
  }

  /**
   * Network access policy for the container.
   */
  export interface NetworkPolicy {
    /**
     * The network policy mode.
     */
    type: 'allowlist' | 'disabled';

    /**
     * Allowed outbound domains when `type` is `allowlist`.
     */
    allowed_domains?: Array<string>;
  }
}

export interface InlineSkillParam {
  /**
   * The description of the skill.
   */
  description: string;

  /**
   * The name of the skill.
   */
  name: string;

  /**
   * Inline skill payload
   */
  source: InlineSkillParam.Source;

  /**
   * Defines an inline skill for this request.
   */
  type: 'inline';
}

export namespace InlineSkillParam {
  /**
   * Inline skill payload
   */
  export interface Source {
    /**
     * Base64-encoded skill zip bundle.
     */
    data: string;

    /**
     * The media type of the inline skill payload. Must be `application/zip`.
     */
    media_type: 'application/zip';

    /**
     * The type of the inline skill source. Must be `base64`.
     */
    type: 'base64';
  }
}

export interface NetworkPolicyAllowlistParam {
  /**
   * A list of allowed domains when type is `allowlist`.
   */
  allowed_domains: Array<string>;

  /**
   * Allow outbound network access only to specified domains. Always `allowlist`.
   */
  type: 'allowlist';

  /**
   * Optional domain-scoped secrets for allowlisted domains.
   */
  domain_secrets?: Array<NetworkPolicyAllowlistParam.DomainSecret>;
}

export namespace NetworkPolicyAllowlistParam {
  export interface DomainSecret {
    /**
     * The domain associated with the secret.
     */
    domain: string;

    /**
     * The name of the secret to inject for the domain.
     */
    name: string;

    /**
     * The secret value to inject for the domain.
     */
    value: string;
  }
}

export interface NetworkPolicyDisabledParam {
  /**
   * Disable outbound network access. Always `disabled`.
   */
  type: 'disabled';
}

export interface SkillReferenceParam {
  /**
   * The ID of the referenced skill.
   */
  skill_id: string;

  /**
   * References a skill created with the /v1/skills endpoint.
   */
  type: 'skill_reference';

  /**
   * Optional skill version. Use a positive integer or 'latest'. Omit for default.
   */
  version?: string;
}

export interface ContainerListResponse {
  /**
   * A list of containers.
   */
  data: Array<ContainerResource>;

  /**
   * The ID of the first container in the list.
   */
  first_id: string;

  /**
   * Whether there are more containers available.
   */
  has_more: boolean;

  /**
   * The ID of the last container in the list.
   */
  last_id: string;

  /**
   * The type of object returned, must be 'list'.
   */
  object: 'list';
}

export interface ContainerCreateParams {
  /**
   * Name of the container to create.
   */
  name: string;

  /**
   * Container expiration time in seconds relative to the 'anchor' time.
   */
  expires_after?: ContainerCreateParams.ExpiresAfter;

  /**
   * IDs of files to copy to the container.
   */
  file_ids?: Array<string>;

  /**
   * Optional memory limit for the container. Defaults to "1g".
   */
  memory_limit?: '1g' | '4g' | '16g' | '64g';

  /**
   * Network access policy for the container.
   */
  network_policy?: NetworkPolicyDisabledParam | NetworkPolicyAllowlistParam;

  /**
   * An optional list of skills referenced by id or inline data.
   */
  skills?: Array<SkillReferenceParam | InlineSkillParam>;
}

export namespace ContainerCreateParams {
  /**
   * Container expiration time in seconds relative to the 'anchor' time.
   */
  export interface ExpiresAfter {
    /**
     * Time anchor for the expiration time. Currently only 'last_active_at' is
     * supported.
     */
    anchor: 'last_active_at';

    minutes: number;
  }
}

export interface ContainerListParams {
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
   * Filter results by container name.
   */
  name?: string;

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';
}

Containers.Files = Files;

export declare namespace Containers {
  export {
    type ContainerResource as ContainerResource,
    type InlineSkillParam as InlineSkillParam,
    type NetworkPolicyAllowlistParam as NetworkPolicyAllowlistParam,
    type NetworkPolicyDisabledParam as NetworkPolicyDisabledParam,
    type SkillReferenceParam as SkillReferenceParam,
    type ContainerListResponse as ContainerListResponse,
    type ContainerCreateParams as ContainerCreateParams,
    type ContainerListParams as ContainerListParams,
  };

  export {
    Files as Files,
    type ContainerFileResource as ContainerFileResource,
    type FileListResponse as FileListResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileRetrieveContentParams as FileRetrieveContentParams,
  };
}
