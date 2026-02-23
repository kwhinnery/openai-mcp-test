// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FileBatchesAPI from './file-batches';
import * as VectorStoresAPI from './vector-stores';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Create a vector store file by attaching a [File](/docs/api-reference/files) to a
   * [vector store](/docs/api-reference/vector-stores/object).
   */
  create(
    vectorStoreID: string,
    body: FileCreateParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileObject> {
    return this._client.post(path`/vector_stores/${vectorStoreID}/files`, { body, ...options });
  }

  /**
   * Retrieves a vector store file.
   */
  retrieve(
    fileID: string,
    params: FileRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileObject> {
    const { vector_store_id } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/files/${fileID}`, options);
  }

  /**
   * Update attributes on a vector store file.
   */
  update(
    fileID: string,
    params: FileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileObject> {
    const { vector_store_id, ...body } = params;
    return this._client.post(path`/vector_stores/${vector_store_id}/files/${fileID}`, { body, ...options });
  }

  /**
   * Returns a list of vector store files.
   */
  list(
    vectorStoreID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileBatchesAPI.ListVectorStoreFilesResponse> {
    return this._client.get(path`/vector_stores/${vectorStoreID}/files`, { query, ...options });
  }

  /**
   * Delete a vector store file. This will remove the file from the vector store but
   * the file itself will not be deleted. To delete the file, use the
   * [delete file](/docs/api-reference/files/delete) endpoint.
   */
  delete(fileID: string, params: FileDeleteParams, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    const { vector_store_id } = params;
    return this._client.delete(path`/vector_stores/${vector_store_id}/files/${fileID}`, options);
  }

  /**
   * Retrieve the parsed contents of a vector store file.
   */
  retrieveContent(
    fileID: string,
    params: FileRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<FileRetrieveContentResponse> {
    const { vector_store_id } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/files/${fileID}/content`, options);
  }
}

export interface CreateVectorStoreFileRequest {
  /**
   * A [File](/docs/api-reference/files) ID that the vector store should use. Useful
   * for tools like `file_search` that can access files.
   */
  file_id: string;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard. Keys are strings with a maximum
   * length of 64 characters. Values are strings with a maximum length of 512
   * characters, booleans, or numbers.
   */
  attributes?: FileBatchesAPI.VectorStoreFileAttributes | null;

  /**
   * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
   * strategy.
   */
  chunking_strategy?: FileBatchesAPI.ChunkingStrategyRequestParam;
}

/**
 * A list of files attached to a vector store.
 */
export interface VectorStoreFileObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the vector store file was created.
   */
  created_at: number;

  /**
   * The last error associated with this vector store file. Will be `null` if there
   * are no errors.
   */
  last_error: VectorStoreFileObject.LastError | null;

  /**
   * The object type, which is always `vector_store.file`.
   */
  object: 'vector_store.file';

  /**
   * The status of the vector store file, which can be either `in_progress`,
   * `completed`, `cancelled`, or `failed`. The status `completed` indicates that the
   * vector store file is ready for use.
   */
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed';

  /**
   * The total vector store usage in bytes. Note that this may be different from the
   * original file size.
   */
  usage_bytes: number;

  /**
   * The ID of the [vector store](/docs/api-reference/vector-stores/object) that the
   * [File](/docs/api-reference/files) is attached to.
   */
  vector_store_id: string;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard. Keys are strings with a maximum
   * length of 64 characters. Values are strings with a maximum length of 512
   * characters, booleans, or numbers.
   */
  attributes?: FileBatchesAPI.VectorStoreFileAttributes | null;

  /**
   * The strategy used to chunk the file.
   */
  chunking_strategy?:
    | VectorStoreFileObject.StaticChunkingStrategyResponseParam
    | VectorStoreFileObject.OtherChunkingStrategyResponseParam;
}

export namespace VectorStoreFileObject {
  /**
   * The last error associated with this vector store file. Will be `null` if there
   * are no errors.
   */
  export interface LastError {
    /**
     * One of `server_error`, `unsupported_file`, or `invalid_file`.
     */
    code: 'server_error' | 'unsupported_file' | 'invalid_file';

    /**
     * A human-readable description of the error.
     */
    message: string;
  }

  export interface StaticChunkingStrategyResponseParam {
    static: VectorStoresAPI.StaticChunkingStrategy;

    /**
     * Always `static`.
     */
    type: 'static';
  }

  /**
   * This is returned when the chunking strategy is unknown. Typically, this is
   * because the file was indexed before the `chunking_strategy` concept was
   * introduced in the API.
   */
  export interface OtherChunkingStrategyResponseParam {
    /**
     * Always `other`.
     */
    type: 'other';
  }
}

export interface FileDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'vector_store.file.deleted';
}

/**
 * Represents the parsed content of a vector store file.
 */
export interface FileRetrieveContentResponse {
  /**
   * Parsed content of the file.
   */
  data: Array<FileRetrieveContentResponse.Data>;

  /**
   * Indicates if there are more content pages to fetch.
   */
  has_more: boolean;

  /**
   * The token for the next page, if any.
   */
  next_page: string | null;

  /**
   * The object type, which is always `vector_store.file_content.page`
   */
  object: 'vector_store.file_content.page';
}

export namespace FileRetrieveContentResponse {
  export interface Data {
    /**
     * The text content
     */
    text?: string;

    /**
     * The content type (currently only `"text"`)
     */
    type?: string;
  }
}

export interface FileCreateParams {
  /**
   * A [File](/docs/api-reference/files) ID that the vector store should use. Useful
   * for tools like `file_search` that can access files.
   */
  file_id: string;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard. Keys are strings with a maximum
   * length of 64 characters. Values are strings with a maximum length of 512
   * characters, booleans, or numbers.
   */
  attributes?: FileBatchesAPI.VectorStoreFileAttributes | null;

  /**
   * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
   * strategy.
   */
  chunking_strategy?: FileBatchesAPI.ChunkingStrategyRequestParam;
}

export interface FileRetrieveParams {
  /**
   * The ID of the vector store that the file belongs to.
   */
  vector_store_id: string;
}

export interface FileUpdateParams {
  /**
   * Path param: The ID of the vector store the file belongs to.
   */
  vector_store_id: string;

  /**
   * Body param: Set of 16 key-value pairs that can be attached to an object. This
   * can be useful for storing additional information about the object in a
   * structured format, and querying for objects via API or the dashboard. Keys are
   * strings with a maximum length of 64 characters. Values are strings with a
   * maximum length of 512 characters, booleans, or numbers.
   */
  attributes: FileBatchesAPI.VectorStoreFileAttributes | null;
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
   * A cursor for use in pagination. `before` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * starting with obj_foo, your subsequent call can include before=obj_foo in order
   * to fetch the previous page of the list.
   */
  before?: string;

  /**
   * Filter by file status. One of `in_progress`, `completed`, `failed`, `cancelled`.
   */
  filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled';

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
  /**
   * The ID of the vector store that the file belongs to.
   */
  vector_store_id: string;
}

export interface FileRetrieveContentParams {
  /**
   * The ID of the vector store.
   */
  vector_store_id: string;
}

export declare namespace Files {
  export {
    type CreateVectorStoreFileRequest as CreateVectorStoreFileRequest,
    type VectorStoreFileObject as VectorStoreFileObject,
    type FileDeleteResponse as FileDeleteResponse,
    type FileRetrieveContentResponse as FileRetrieveContentResponse,
    type FileCreateParams as FileCreateParams,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
    type FileDeleteParams as FileDeleteParams,
    type FileRetrieveContentParams as FileRetrieveContentParams,
  };
}
