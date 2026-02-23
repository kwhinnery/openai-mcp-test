// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from '../chat/completions';
import * as FileBatchesAPI from './file-batches';
import {
  ChunkingStrategyRequestParam,
  FileBatchCancelParams,
  FileBatchCreateParams,
  FileBatchListFilesParams,
  FileBatchRetrieveParams,
  FileBatches,
  ListVectorStoreFilesResponse,
  VectorStoreFileAttributes,
  VectorStoreFileBatchObject,
} from './file-batches';
import * as FilesAPI from './files';
import {
  CreateVectorStoreFileRequest,
  FileCreateParams,
  FileDeleteParams,
  FileDeleteResponse,
  FileListParams,
  FileRetrieveContentParams,
  FileRetrieveContentResponse,
  FileRetrieveParams,
  FileUpdateParams,
  Files,
  VectorStoreFileObject,
} from './files';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VectorStores extends APIResource {
  fileBatches: FileBatchesAPI.FileBatches = new FileBatchesAPI.FileBatches(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);

  /**
   * Create a vector store.
   */
  create(body: VectorStoreCreateParams, options?: RequestOptions): APIPromise<VectorStoreObject> {
    return this._client.post('/vector_stores', { body, ...options });
  }

  /**
   * Retrieves a vector store.
   */
  retrieve(vectorStoreID: string, options?: RequestOptions): APIPromise<VectorStoreObject> {
    return this._client.get(path`/vector_stores/${vectorStoreID}`, options);
  }

  /**
   * Modifies a vector store.
   */
  update(
    vectorStoreID: string,
    body: VectorStoreUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreObject> {
    return this._client.post(path`/vector_stores/${vectorStoreID}`, { body, ...options });
  }

  /**
   * Returns a list of vector stores.
   */
  list(
    query: VectorStoreListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VectorStoreListResponse> {
    return this._client.get('/vector_stores', { query, ...options });
  }

  /**
   * Delete a vector store.
   */
  delete(vectorStoreID: string, options?: RequestOptions): APIPromise<VectorStoreDeleteResponse> {
    return this._client.delete(path`/vector_stores/${vectorStoreID}`, options);
  }

  /**
   * Search a vector store for relevant chunks based on a query and file attributes
   * filter.
   */
  search(
    vectorStoreID: string,
    body: VectorStoreSearchParams,
    options?: RequestOptions,
  ): APIPromise<VectorStoreSearchResponse> {
    return this._client.post(path`/vector_stores/${vectorStoreID}/search`, { body, ...options });
  }
}

/**
 * The default strategy. This strategy currently uses a `max_chunk_size_tokens` of
 * `800` and `chunk_overlap_tokens` of `400`.
 */
export interface AutoChunkingStrategyRequestParam {
  /**
   * Always `auto`.
   */
  type: 'auto';
}

/**
 * A filter used to compare a specified attribute key to a given value using a
 * defined comparison operation.
 */
export interface ComparisonFilter {
  /**
   * The key to compare against the value.
   */
  key: string;

  /**
   * Specifies the comparison operator: `eq`, `ne`, `gt`, `gte`, `lt`, `lte`, `in`,
   * `nin`.
   *
   * - `eq`: equals
   * - `ne`: not equal
   * - `gt`: greater than
   * - `gte`: greater than or equal
   * - `lt`: less than
   * - `lte`: less than or equal
   * - `in`: in
   * - `nin`: not in
   */
  type: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';

  /**
   * The value to compare against the attribute key; supports string, number, or
   * boolean types.
   */
  value: string | number | boolean | Array<string | number>;
}

/**
 * Combine multiple filters using `and` or `or`.
 */
export interface CompoundFilter {
  /**
   * Array of filters to combine. Items can be `ComparisonFilter` or
   * `CompoundFilter`.
   */
  filters: Array<ComparisonFilter | unknown>;

  /**
   * Type of operation: `and` or `or`.
   */
  type: 'and' | 'or';
}

export interface StaticChunkingStrategy {
  /**
   * The number of tokens that overlap between chunks. The default value is `400`.
   *
   * Note that the overlap must not exceed half of `max_chunk_size_tokens`.
   */
  chunk_overlap_tokens: number;

  /**
   * The maximum number of tokens in each chunk. The default value is `800`. The
   * minimum value is `100` and the maximum value is `4096`.
   */
  max_chunk_size_tokens: number;
}

/**
 * Customize your own chunking strategy by setting chunk size and chunk overlap.
 */
export interface StaticChunkingStrategyRequestParam {
  static: StaticChunkingStrategy;

  /**
   * Always `static`.
   */
  type: 'static';
}

/**
 * The expiration policy for a vector store.
 */
export interface VectorStoreExpirationAfter {
  /**
   * Anchor timestamp after which the expiration policy applies. Supported anchors:
   * `last_active_at`.
   */
  anchor: 'last_active_at';

  /**
   * The number of days after the anchor time that the vector store will expire.
   */
  days: number;
}

/**
 * A vector store is a collection of processed files can be used by the
 * `file_search` tool.
 */
export interface VectorStoreObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the vector store was created.
   */
  created_at: number;

  file_counts: VectorStoreObject.FileCounts;

  /**
   * The Unix timestamp (in seconds) for when the vector store was last active.
   */
  last_active_at: number | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata: CompletionsAPI.Metadata | null;

  /**
   * The name of the vector store.
   */
  name: string;

  /**
   * The object type, which is always `vector_store`.
   */
  object: 'vector_store';

  /**
   * The status of the vector store, which can be either `expired`, `in_progress`, or
   * `completed`. A status of `completed` indicates that the vector store is ready
   * for use.
   */
  status: 'expired' | 'in_progress' | 'completed';

  /**
   * The total number of bytes used by the files in the vector store.
   */
  usage_bytes: number;

  /**
   * The expiration policy for a vector store.
   */
  expires_after?: VectorStoreExpirationAfter;

  /**
   * The Unix timestamp (in seconds) for when the vector store will expire.
   */
  expires_at?: number | null;
}

export namespace VectorStoreObject {
  export interface FileCounts {
    /**
     * The number of files that were cancelled.
     */
    cancelled: number;

    /**
     * The number of files that have been successfully processed.
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

export interface VectorStoreListResponse {
  data: Array<VectorStoreObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface VectorStoreDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'vector_store.deleted';
}

export interface VectorStoreSearchResponse {
  /**
   * The list of search result items.
   */
  data: Array<VectorStoreSearchResponse.Data>;

  /**
   * Indicates if there are more results to fetch.
   */
  has_more: boolean;

  /**
   * The token for the next page, if any.
   */
  next_page: string | null;

  /**
   * The object type, which is always `vector_store.search_results.page`
   */
  object: 'vector_store.search_results.page';

  search_query: Array<string>;
}

export namespace VectorStoreSearchResponse {
  export interface Data {
    /**
     * Set of 16 key-value pairs that can be attached to an object. This can be useful
     * for storing additional information about the object in a structured format, and
     * querying for objects via API or the dashboard. Keys are strings with a maximum
     * length of 64 characters. Values are strings with a maximum length of 512
     * characters, booleans, or numbers.
     */
    attributes: FileBatchesAPI.VectorStoreFileAttributes | null;

    /**
     * Content chunks from the file.
     */
    content: Array<Data.Content>;

    /**
     * The ID of the vector store file.
     */
    file_id: string;

    /**
     * The name of the vector store file.
     */
    filename: string;

    /**
     * The similarity score for the result.
     */
    score: number;
  }

  export namespace Data {
    export interface Content {
      /**
       * The text content returned from search.
       */
      text: string;

      /**
       * The type of content.
       */
      type: 'text';
    }
  }
}

export interface VectorStoreCreateParams {
  /**
   * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
   * strategy. Only applicable if `file_ids` is non-empty.
   */
  chunking_strategy?: AutoChunkingStrategyRequestParam | StaticChunkingStrategyRequestParam;

  /**
   * A description for the vector store. Can be used to describe the vector store's
   * purpose.
   */
  description?: string;

  /**
   * The expiration policy for a vector store.
   */
  expires_after?: VectorStoreExpirationAfter;

  /**
   * A list of [File](/docs/api-reference/files) IDs that the vector store should
   * use. Useful for tools like `file_search` that can access files.
   */
  file_ids?: Array<string>;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata?: CompletionsAPI.Metadata | null;

  /**
   * The name of the vector store.
   */
  name?: string;
}

export interface VectorStoreUpdateParams {
  /**
   * The expiration policy for a vector store.
   */
  expires_after?: VectorStoreExpirationAfter | null;

  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata?: CompletionsAPI.Metadata | null;

  /**
   * The name of the vector store.
   */
  name?: string | null;
}

export interface VectorStoreListParams {
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

export interface VectorStoreSearchParams {
  /**
   * A query string for a search
   */
  query: string | Array<string>;

  /**
   * A filter to apply based on file attributes.
   */
  filters?: ComparisonFilter | CompoundFilter;

  /**
   * The maximum number of results to return. This number should be between 1 and 50
   * inclusive.
   */
  max_num_results?: number;

  /**
   * Ranking options for search.
   */
  ranking_options?: VectorStoreSearchParams.RankingOptions;

  /**
   * Whether to rewrite the natural language query for vector search.
   */
  rewrite_query?: boolean;
}

export namespace VectorStoreSearchParams {
  /**
   * Ranking options for search.
   */
  export interface RankingOptions {
    /**
     * Enable re-ranking; set to `none` to disable, which can help reduce latency.
     */
    ranker?: 'none' | 'auto' | 'default-2024-11-15';

    score_threshold?: number;
  }
}

VectorStores.FileBatches = FileBatches;
VectorStores.Files = Files;

export declare namespace VectorStores {
  export {
    type AutoChunkingStrategyRequestParam as AutoChunkingStrategyRequestParam,
    type ComparisonFilter as ComparisonFilter,
    type CompoundFilter as CompoundFilter,
    type StaticChunkingStrategy as StaticChunkingStrategy,
    type StaticChunkingStrategyRequestParam as StaticChunkingStrategyRequestParam,
    type VectorStoreExpirationAfter as VectorStoreExpirationAfter,
    type VectorStoreObject as VectorStoreObject,
    type VectorStoreListResponse as VectorStoreListResponse,
    type VectorStoreDeleteResponse as VectorStoreDeleteResponse,
    type VectorStoreSearchResponse as VectorStoreSearchResponse,
    type VectorStoreCreateParams as VectorStoreCreateParams,
    type VectorStoreUpdateParams as VectorStoreUpdateParams,
    type VectorStoreListParams as VectorStoreListParams,
    type VectorStoreSearchParams as VectorStoreSearchParams,
  };

  export {
    FileBatches as FileBatches,
    type ChunkingStrategyRequestParam as ChunkingStrategyRequestParam,
    type ListVectorStoreFilesResponse as ListVectorStoreFilesResponse,
    type VectorStoreFileAttributes as VectorStoreFileAttributes,
    type VectorStoreFileBatchObject as VectorStoreFileBatchObject,
    type FileBatchCreateParams as FileBatchCreateParams,
    type FileBatchRetrieveParams as FileBatchRetrieveParams,
    type FileBatchCancelParams as FileBatchCancelParams,
    type FileBatchListFilesParams as FileBatchListFilesParams,
  };

  export {
    Files as Files,
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
