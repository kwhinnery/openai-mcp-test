// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Returns information about a specific file.
   */
  retrieve(fileID: string, options?: RequestOptions): APIPromise<OpenAIFile> {
    return this._client.get(path`/files/${fileID}`, options);
  }

  /**
   * Returns a list of files.
   */
  list(
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileListResponse> {
    return this._client.get('/files', { query, ...options });
  }

  /**
   * Delete a file and remove it from all vector stores.
   */
  delete(fileID: string, options?: RequestOptions): APIPromise<FileDeleteResponse> {
    return this._client.delete(path`/files/${fileID}`, options);
  }

  /**
   * Returns the contents of the specified file.
   */
  retrieveContent(fileID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/files/${fileID}/content`, options);
  }

  /**
   * Upload a file that can be used across various endpoints. Individual files can be
   * up to 512 MB, and each project can store up to 2.5 TB of files in total. There
   * is no organization-wide storage limit.
   *
   * - The Assistants API supports files up to 2 million tokens and of specific file
   *   types. See the [Assistants Tools guide](/docs/assistants/tools) for details.
   * - The Fine-tuning API only supports `.jsonl` files. The input also has certain
   *   required formats for fine-tuning
   *   [chat](/docs/api-reference/fine-tuning/chat-input) or
   *   [completions](/docs/api-reference/fine-tuning/completions-input) models.
   * - The Batch API only supports `.jsonl` files up to 200 MB in size. The input
   *   also has a specific required
   *   [format](/docs/api-reference/batch/request-input).
   *
   * Please [contact us](https://help.openai.com/) if you need to increase these
   * storage limits.
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<OpenAIFile> {
    return this._client.post('/files', multipartFormRequestOptions({ body, ...options }, this._client));
  }
}

/**
 * The expiration policy for a file. By default, files with `purpose=batch` expire
 * after 30 days and all other files are persisted until they are manually deleted.
 */
export interface FileExpirationAfter {
  /**
   * Anchor timestamp after which the expiration policy applies. Supported anchors:
   * `created_at`.
   */
  anchor: 'created_at';

  /**
   * The number of seconds after the anchor time that the file will expire. Must be
   * between 3600 (1 hour) and 2592000 (30 days).
   */
  seconds: number;
}

/**
 * The `File` object represents a document that has been uploaded to OpenAI.
 */
export interface OpenAIFile {
  /**
   * The file identifier, which can be referenced in the API endpoints.
   */
  id: string;

  /**
   * The size of the file, in bytes.
   */
  bytes: number;

  /**
   * The Unix timestamp (in seconds) for when the file was created.
   */
  created_at: number;

  /**
   * The name of the file.
   */
  filename: string;

  /**
   * The object type, which is always `file`.
   */
  object: 'file';

  /**
   * The intended purpose of the file. Supported values are `assistants`,
   * `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`,
   * `vision`, and `user_data`.
   */
  purpose:
    | 'assistants'
    | 'assistants_output'
    | 'batch'
    | 'batch_output'
    | 'fine-tune'
    | 'fine-tune-results'
    | 'vision'
    | 'user_data';

  /**
   * @deprecated Deprecated. The current status of the file, which can be either
   * `uploaded`, `processed`, or `error`.
   */
  status: 'uploaded' | 'processed' | 'error';

  /**
   * The Unix timestamp (in seconds) for when the file will expire.
   */
  expires_at?: number;

  /**
   * @deprecated Deprecated. For details on why a fine-tuning training file failed
   * validation, see the `error` field on `fine_tuning.job`.
   */
  status_details?: string;
}

export interface FileListResponse {
  data: Array<OpenAIFile>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface FileDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'file';
}

export type FileRetrieveContentResponse = string;

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
   * 10,000, and the default is 10,000.
   */
  limit?: number;

  /**
   * Sort order by the `created_at` timestamp of the objects. `asc` for ascending
   * order and `desc` for descending order.
   */
  order?: 'asc' | 'desc';

  /**
   * Only return files with the given purpose.
   */
  purpose?: string;
}

export interface FileUploadParams {
  /**
   * The File object (not file name) to be uploaded.
   */
  file: Uploadable;

  /**
   * The intended purpose of the uploaded file. One of:
   *
   * - `assistants`: Used in the Assistants API
   * - `batch`: Used in the Batch API
   * - `fine-tune`: Used for fine-tuning
   * - `vision`: Images used for vision fine-tuning
   * - `user_data`: Flexible file type for any purpose
   * - `evals`: Used for eval data sets
   */
  purpose: 'assistants' | 'batch' | 'fine-tune' | 'vision' | 'user_data' | 'evals';

  /**
   * The expiration policy for a file. By default, files with `purpose=batch` expire
   * after 30 days and all other files are persisted until they are manually deleted.
   */
  expires_after?: FileExpirationAfter;
}

export declare namespace Files {
  export {
    type FileExpirationAfter as FileExpirationAfter,
    type OpenAIFile as OpenAIFile,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileRetrieveContentResponse as FileRetrieveContentResponse,
    type FileListParams as FileListParams,
    type FileUploadParams as FileUploadParams,
  };
}
