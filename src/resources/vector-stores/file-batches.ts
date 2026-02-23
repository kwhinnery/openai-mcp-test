// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FilesAPI from './files';
import * as VectorStoresAPI from './vector-stores';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FileBatches extends APIResource {
  /**
   * The maximum number of files in a single batch request is 2000.
   */
  create(
    vectorStoreID: string,
    body: FileBatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileBatchObject> {
    return this._client.post(path`/vector_stores/${vectorStoreID}/file_batches`, { body, ...options });
  }

  /**
   * Retrieves a vector store file batch.
   */
  retrieve(
    batchID: string,
    params: FileBatchRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileBatchObject> {
    const { vector_store_id } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/file_batches/${batchID}`, options);
  }

  /**
   * Cancel a vector store file batch. This attempts to cancel the processing of
   * files in this batch as soon as possible.
   */
  cancel(
    batchID: string,
    params: FileBatchCancelParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreFileBatchObject> {
    const { vector_store_id } = params;
    return this._client.post(path`/vector_stores/${vector_store_id}/file_batches/${batchID}/cancel`, options);
  }

  /**
   * Returns a list of vector store files in a batch.
   */
  listFiles(
    batchID: string,
    params: FileBatchListFilesParams,
    options?: RequestOptions,
  ): APIPromise<ListVectorStoreFilesResponse> {
    const { vector_store_id, ...query } = params;
    return this._client.get(path`/vector_stores/${vector_store_id}/file_batches/${batchID}/files`, {
      query,
      ...options,
    });
  }
}

/**
 * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
 * strategy.
 */
export type ChunkingStrategyRequestParam =
  | VectorStoresAPI.AutoChunkingStrategyRequestParam
  | VectorStoresAPI.StaticChunkingStrategyRequestParam;

export interface ListVectorStoreFilesResponse {
  data: Array<FilesAPI.VectorStoreFileObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful
 * for storing additional information about the object in a structured format, and
 * querying for objects via API or the dashboard. Keys are strings with a maximum
 * length of 64 characters. Values are strings with a maximum length of 512
 * characters, booleans, or numbers.
 */
export type VectorStoreFileAttributes = { [key: string]: string | number | boolean };

/**
 * A batch of files attached to a vector store.
 */
export interface VectorStoreFileBatchObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the vector store files batch was
   * created.
   */
  created_at: number;

  file_counts: VectorStoreFileBatchObject.FileCounts;

  /**
   * The object type, which is always `vector_store.file_batch`.
   */
  object: 'vector_store.files_batch';

  /**
   * The status of the vector store files batch, which can be either `in_progress`,
   * `completed`, `cancelled` or `failed`.
   */
  status: 'in_progress' | 'completed' | 'cancelled' | 'failed';

  /**
   * The ID of the [vector store](/docs/api-reference/vector-stores/object) that the
   * [File](/docs/api-reference/files) is attached to.
   */
  vector_store_id: string;
}

export namespace VectorStoreFileBatchObject {
  export interface FileCounts {
    /**
     * The number of files that where cancelled.
     */
    cancelled: number;

    /**
     * The number of files that have been processed.
     */
    completed: number;

    /**
     * The number of files that have failed to process.
     */
    failed: number;

    /**
     * The number of files that are currently being processed.
     */
    in_progress: number;

    /**
     * The total number of files.
     */
    total: number;
  }
}

export interface FileBatchCreateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard. Keys are strings with a maximum
   * length of 64 characters. Values are strings with a maximum length of 512
   * characters, booleans, or numbers.
   */
  attributes?: VectorStoreFileAttributes | null;

  /**
   * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
   * strategy.
   */
  chunking_strategy?: ChunkingStrategyRequestParam;

  /**
   * A list of [File](/docs/api-reference/files) IDs that the vector store should
   * use. Useful for tools like `file_search` that can access files. If `attributes`
   * or `chunking_strategy` are provided, they will be applied to all files in the
   * batch. The maximum batch size is 2000 files. Mutually exclusive with `files`.
   */
  file_ids?: Array<string>;

  /**
   * A list of objects that each include a `file_id` plus optional `attributes` or
   * `chunking_strategy`. Use this when you need to override metadata for specific
   * files. The global `attributes` or `chunking_strategy` will be ignored and must
   * be specified for each file. The maximum batch size is 2000 files. Mutually
   * exclusive with `file_ids`.
   */
  files?: Array<FilesAPI.CreateVectorStoreFileRequest>;
}

export interface FileBatchRetrieveParams {
  /**
   * The ID of the vector store that the file batch belongs to.
   */
  vector_store_id: string;
}

export interface FileBatchCancelParams {
  /**
   * The ID of the vector store that the file batch belongs to.
   */
  vector_store_id: string;
}

export interface FileBatchListFilesParams {
  /**
   * Path param: The ID of the vector store that the files belong to.
   */
  vector_store_id: string;

  /**
   * Query param: A cursor for use in pagination. `after` is an object ID that
   * defines your place in the list. For instance, if you make a list request and
   * receive 100 objects, ending with obj_foo, your subsequent call can include
   * after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;

  /**
   * Query param: A cursor for use in pagination. `before` is an object ID that
   * defines your place in the list. For instance, if you make a list request and
   * receive 100 objects, starting with obj_foo, your subsequent call can include
   * before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;

  /**
   * Query param: Filter by file status. One of `in_progress`, `completed`, `failed`,
   * `cancelled`.
   */
  filter?: 'in_progress' | 'completed' | 'failed' | 'cancelled';

  /**
   * Query param: A limit on the number of objects to be returned. Limit can range
   * between 1 and 100, and the default is 20.
   */
  limit?: number;

  /**
   * Query param: Sort order by the `created_at` timestamp of the objects. `asc` for
   * ascending order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';
}

export declare namespace FileBatches {
  export {
    type ChunkingStrategyRequestParam as ChunkingStrategyRequestParam,
    type ListVectorStoreFilesResponse as ListVectorStoreFilesResponse,
    type VectorStoreFileAttributes as VectorStoreFileAttributes,
    type VectorStoreFileBatchObject as VectorStoreFileBatchObject,
    type FileBatchCreateParams as FileBatchCreateParams,
    type FileBatchRetrieveParams as FileBatchRetrieveParams,
    type FileBatchCancelParams as FileBatchCancelParams,
    type FileBatchListFilesParams as FileBatchListFilesParams,
  };
}
