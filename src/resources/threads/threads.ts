// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from '../chat/completions';
import * as MessagesAPI from './messages';
import {
  AssistantToolsFileSearchTypeOnly,
  CreateMessageRequest,
  MessageContentImageFileObject,
  MessageContentImageURLObject,
  MessageCreateParams,
  MessageDeleteParams,
  MessageDeleteResponse,
  MessageListParams,
  MessageListResponse,
  MessageObject,
  MessageRetrieveParams,
  MessageUpdateParams,
  Messages,
} from './messages';
import * as RunsAPI from './runs/runs';
import {
  AssistantsAPIResponseFormatOption,
  AssistantsAPIToolChoiceOption,
  RunCancelParams,
  RunCreateParams,
  RunCreateRunParams,
  RunListParams,
  RunListResponse,
  RunObject,
  RunRetrieveParams,
  RunSubmitToolOutputsParams,
  RunUpdateParams,
  Runs,
  TruncationObject,
} from './runs/runs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Threads extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a thread.
   *
   * @example
   * ```ts
   * const threadObject = await client.threads.create();
   * ```
   */
  create(
    body: ThreadCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadObject> {
    return this._client.post('/threads', { body, ...options });
  }

  /**
   * Retrieves a thread.
   *
   * @example
   * ```ts
   * const threadObject = await client.threads.retrieve(
   *   'thread_id',
   * );
   * ```
   */
  retrieve(threadID: string, options?: RequestOptions): APIPromise<ThreadObject> {
    return this._client.get(path`/threads/${threadID}`, options);
  }

  /**
   * Modifies a thread.
   *
   * @example
   * ```ts
   * const threadObject = await client.threads.update(
   *   'thread_id',
   * );
   * ```
   */
  update(threadID: string, body: ThreadUpdateParams, options?: RequestOptions): APIPromise<ThreadObject> {
    return this._client.post(path`/threads/${threadID}`, { body, ...options });
  }

  /**
   * Delete a thread.
   *
   * @example
   * ```ts
   * const thread = await client.threads.delete('thread_id');
   * ```
   */
  delete(threadID: string, options?: RequestOptions): APIPromise<ThreadDeleteResponse> {
    return this._client.delete(path`/threads/${threadID}`, options);
  }
}

/**
 * Options to create a new thread. If no thread is provided when running a request,
 * an empty thread will be created.
 */
export interface CreateThreadRequest {
  /**
   * A list of [messages](/docs/api-reference/messages) to start the thread with.
   */
  messages?: Array<MessagesAPI.CreateMessageRequest>;

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
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  tool_resources?: CreateThreadRequest.ToolResources | null;
}

export namespace CreateThreadRequest {
  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  export interface ToolResources {
    code_interpreter?: ToolResources.CodeInterpreter;

    file_search?: ToolResources.FileSearch;
  }

  export namespace ToolResources {
    export interface CodeInterpreter {
      /**
       * A list of [file](/docs/api-reference/files) IDs made available to the
       * `code_interpreter` tool. There can be a maximum of 20 files associated with the
       * tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: Array<string>;

      /**
       * A helper to create a [vector store](/docs/api-reference/vector-stores/object)
       * with file_ids and attach it to this thread. There can be a maximum of 1 vector
       * store attached to the thread.
       */
      vector_stores?: Array<FileSearch.VectorStore>;
    }

    export namespace FileSearch {
      export interface VectorStore {
        /**
         * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
         * strategy.
         */
        chunking_strategy?: VectorStore.AutoChunkingStrategy | VectorStore.StaticChunkingStrategy;

        /**
         * A list of [file](/docs/api-reference/files) IDs to add to the vector store.
         * There can be a maximum of 10000 files in a vector store.
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
      }

      export namespace VectorStore {
        /**
         * The default strategy. This strategy currently uses a `max_chunk_size_tokens` of
         * `800` and `chunk_overlap_tokens` of `400`.
         */
        export interface AutoChunkingStrategy {
          /**
           * Always `auto`.
           */
          type: 'auto';
        }

        export interface StaticChunkingStrategy {
          static: StaticChunkingStrategy.Static;

          /**
           * Always `static`.
           */
          type: 'static';
        }

        export namespace StaticChunkingStrategy {
          export interface Static {
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
        }
      }
    }
  }
}

/**
 * Represents a thread that contains [messages](/docs/api-reference/messages).
 */
export interface ThreadObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the thread was created.
   */
  created_at: number;

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
   * The object type, which is always `thread`.
   */
  object: 'thread';

  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  tool_resources: ThreadObject.ToolResources | null;
}

export namespace ThreadObject {
  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  export interface ToolResources {
    code_interpreter?: ToolResources.CodeInterpreter;

    file_search?: ToolResources.FileSearch;
  }

  export namespace ToolResources {
    export interface CodeInterpreter {
      /**
       * A list of [file](/docs/api-reference/files) IDs made available to the
       * `code_interpreter` tool. There can be a maximum of 20 files associated with the
       * tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: Array<string>;
    }
  }
}

export interface ThreadDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'thread.deleted';
}

export interface ThreadCreateParams {
  /**
   * A list of [messages](/docs/api-reference/messages) to start the thread with.
   */
  messages?: Array<MessagesAPI.CreateMessageRequest>;

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
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  tool_resources?: ThreadCreateParams.ToolResources | null;
}

export namespace ThreadCreateParams {
  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  export interface ToolResources {
    code_interpreter?: ToolResources.CodeInterpreter;

    file_search?: ToolResources.FileSearch;
  }

  export namespace ToolResources {
    export interface CodeInterpreter {
      /**
       * A list of [file](/docs/api-reference/files) IDs made available to the
       * `code_interpreter` tool. There can be a maximum of 20 files associated with the
       * tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: Array<string>;

      /**
       * A helper to create a [vector store](/docs/api-reference/vector-stores/object)
       * with file_ids and attach it to this thread. There can be a maximum of 1 vector
       * store attached to the thread.
       */
      vector_stores?: Array<FileSearch.VectorStore>;
    }

    export namespace FileSearch {
      export interface VectorStore {
        /**
         * The chunking strategy used to chunk the file(s). If not set, will use the `auto`
         * strategy.
         */
        chunking_strategy?: VectorStore.AutoChunkingStrategy | VectorStore.StaticChunkingStrategy;

        /**
         * A list of [file](/docs/api-reference/files) IDs to add to the vector store.
         * There can be a maximum of 10000 files in a vector store.
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
      }

      export namespace VectorStore {
        /**
         * The default strategy. This strategy currently uses a `max_chunk_size_tokens` of
         * `800` and `chunk_overlap_tokens` of `400`.
         */
        export interface AutoChunkingStrategy {
          /**
           * Always `auto`.
           */
          type: 'auto';
        }

        export interface StaticChunkingStrategy {
          static: StaticChunkingStrategy.Static;

          /**
           * Always `static`.
           */
          type: 'static';
        }

        export namespace StaticChunkingStrategy {
          export interface Static {
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
        }
      }
    }
  }
}

export interface ThreadUpdateParams {
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
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  tool_resources?: ThreadUpdateParams.ToolResources | null;
}

export namespace ThreadUpdateParams {
  /**
   * A set of resources that are made available to the assistant's tools in this
   * thread. The resources are specific to the type of tool. For example, the
   * `code_interpreter` tool requires a list of file IDs, while the `file_search`
   * tool requires a list of vector store IDs.
   */
  export interface ToolResources {
    code_interpreter?: ToolResources.CodeInterpreter;

    file_search?: ToolResources.FileSearch;
  }

  export namespace ToolResources {
    export interface CodeInterpreter {
      /**
       * A list of [file](/docs/api-reference/files) IDs made available to the
       * `code_interpreter` tool. There can be a maximum of 20 files associated with the
       * tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * thread. There can be a maximum of 1 vector store attached to the thread.
       */
      vector_store_ids?: Array<string>;
    }
  }
}

Threads.Runs = Runs;
Threads.Messages = Messages;

export declare namespace Threads {
  export {
    type CreateThreadRequest as CreateThreadRequest,
    type ThreadObject as ThreadObject,
    type ThreadDeleteResponse as ThreadDeleteResponse,
    type ThreadCreateParams as ThreadCreateParams,
    type ThreadUpdateParams as ThreadUpdateParams,
  };

  export {
    Runs as Runs,
    type AssistantsAPIResponseFormatOption as AssistantsAPIResponseFormatOption,
    type AssistantsAPIToolChoiceOption as AssistantsAPIToolChoiceOption,
    type RunObject as RunObject,
    type TruncationObject as TruncationObject,
    type RunListResponse as RunListResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunUpdateParams as RunUpdateParams,
    type RunListParams as RunListParams,
    type RunCancelParams as RunCancelParams,
    type RunCreateRunParams as RunCreateRunParams,
    type RunSubmitToolOutputsParams as RunSubmitToolOutputsParams,
  };

  export {
    Messages as Messages,
    type AssistantToolsFileSearchTypeOnly as AssistantToolsFileSearchTypeOnly,
    type CreateMessageRequest as CreateMessageRequest,
    type MessageContentImageFileObject as MessageContentImageFileObject,
    type MessageContentImageURLObject as MessageContentImageURLObject,
    type MessageObject as MessageObject,
    type MessageListResponse as MessageListResponse,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
  };
}
