// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Creates a container file.
   */
  create(
    containerID: string,
    body: FileCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContainerFileResource> {
    return this._client.post(
      path`/containers/${containerID}/files`,
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieves a container file.
   */
  retrieve(
    fileID: string,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContainerFileResource> {
    const { container_id } = params;
    return this._client.get(path`/containers/${container_id}/files/${fileID}`, options);
  }

  /**
   * Lists container files.
   */
  list(
    containerID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get(path`/containers/${containerID}/files`, { query, ...options });
  }

  /**
   * Delete a container file.
   */
  delete(fileID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { container_id } = params;
    return this._client.delete(path`/containers/${container_id}/files/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a container file content.
   */
  retrieveContent(
    fileID: string,
    params: FileRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { container_id } = params;
    return this._client.get(path`/containers/${container_id}/files/${fileID}/content`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ContainerFileResource {
  /**
   * Unique identifier for the file.
   */
  id: string;

  /**
   * Size of the file in bytes.
   */
  bytes: number;

  /**
   * The container this file belongs to.
   */
  container_id: string;

  /**
   * Unix timestamp (in seconds) when the file was created.
   */
  created_at: number;

  /**
   * The type of this object (`container.file`).
   */
  object: string;

  /**
   * Path of the file in the container.
   */
  path: string;

  /**
   * Source of the file (e.g., `user`, `assistant`).
   */
  source: string;
}

export interface FileListResponse {
  /**
   * A list of container files.
   */
  data: Array<ContainerFileResource>;

  /**
   * The ID of the first file in the list.
   */
  first_id: string;

  /**
   * Whether there are more files available.
   */
  has_more: boolean;

  /**
   * The ID of the last file in the list.
   */
  last_id: string;

  /**
   * The type of object returned, must be 'list'.
   */
  object: 'list';
}

export interface FileCreateParams {
  /**
   * The File object (not file name) to be uploaded.
   */
  file?: Uploadable;

  /**
   * Name of the file to create.
   */
  file_id?: string;
}

export interface FileRetrieveParams {
  container_id: string;
}

export interface FileListParams {
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

export interface FileDeleteParams {
  container_id: string;
}

export interface FileRetrieveContentParams {
  container_id: string;
}

export declare namespace Files {
  export {
    type ContainerFileResource as ContainerFileResource,
    type FileListResponse as FileListResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileRetrieveContentParams as FileRetrieveContentParams,
  };
}
