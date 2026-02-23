// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ThreadsAPI from './threads';
import * as VideosAPI from '../videos';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Retrieve a ChatKit thread by its identifier.
   *
   * @example
   * ```ts
   * const thread = await client.chatkit.threads.retrieve(
   *   'cthr_123',
   * );
   * ```
   */
  retrieve(threadID: string, options?: RequestOptions): APIPromise<Thread> {
    return this._client.get(path`/chatkit/threads/${threadID}`, options);
  }

  /**
   * List ChatKit threads with optional pagination and user filters.
   *
   * @example
   * ```ts
   * const threads = await client.chatkit.threads.list();
   * ```
   */
  list(
    query: ThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadListResponse> {
    return this._client.get('/chatkit/threads', { query, ...options });
  }

  /**
   * Delete a ChatKit thread along with its items and stored attachments.
   *
   * @example
   * ```ts
   * const thread = await client.chatkit.threads.delete(
   *   'cthr_123',
   * );
   * ```
   */
  delete(threadID: string, options?: RequestOptions): APIPromise<ThreadDeleteResponse> {
    return this._client.delete(path`/chatkit/threads/${threadID}`, options);
  }

  /**
   * List items that belong to a ChatKit thread.
   *
   * @example
   * ```ts
   * const response = await client.chatkit.threads.listItems(
   *   'cthr_123',
   * );
   * ```
   */
  listItems(
    threadID: string,
    query: ThreadListItemsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadListItemsResponse> {
    return this._client.get(path`/chatkit/threads/${threadID}/items`, { query, ...options });
  }
}

export type TaskType = 'custom' | 'thought';

/**
 * Represents a ChatKit thread and its current status.
 */
export interface Thread {
  /**
   * Identifier of the thread.
   */
  id: string;

  /**
   * Unix timestamp (in seconds) for when the thread was created.
   */
  created_at: number;

  /**
   * Type discriminator that is always `chatkit.thread`.
   */
  object: 'chatkit.thread';

  /**
   * Current status for the thread. Defaults to `active` for newly created threads.
   */
  status: Thread.Active | Thread.Locked | Thread.Closed;

  /**
   * Optional human-readable title for the thread. Defaults to null when no title has
   * been generated.
   */
  title: string | null;

  /**
   * Free-form string that identifies your end user who owns the thread.
   */
  user: string;
}

export namespace Thread {
  /**
   * Indicates that a thread is active.
   */
  export interface Active {
    /**
     * Status discriminator that is always `active`.
     */
    type: 'active';
  }

  /**
   * Indicates that a thread is locked and cannot accept new input.
   */
  export interface Locked {
    /**
     * Reason that the thread was locked. Defaults to null when no reason is recorded.
     */
    reason: string | null;

    /**
     * Status discriminator that is always `locked`.
     */
    type: 'locked';
  }

  /**
   * Indicates that a thread has been closed.
   */
  export interface Closed {
    /**
     * Reason that the thread was closed. Defaults to null when no reason is recorded.
     */
    reason: string | null;

    /**
     * Status discriminator that is always `closed`.
     */
    type: 'closed';
  }
}

/**
 * A paginated list of ChatKit threads.
 */
export interface ThreadListResponse {
  /**
   * A list of items
   */
  data: Array<Thread>;

  /**
   * The ID of the first item in the list.
   */
  first_id: string | null;

  /**
   * Whether there are more items available.
   */
  has_more: boolean;

  /**
   * The ID of the last item in the list.
   */
  last_id: string | null;

  /**
   * The type of object returned, must be `list`.
   */
  object: 'list';
}

/**
 * Confirmation payload returned after deleting a thread.
 */
export interface ThreadDeleteResponse {
  /**
   * Identifier of the deleted thread.
   */
  id: string;

  /**
   * Indicates that the thread has been deleted.
   */
  deleted: boolean;

  /**
   * Type discriminator that is always `chatkit.thread.deleted`.
   */
  object: 'chatkit.thread.deleted';
}

/**
 * A paginated list of thread items rendered for the ChatKit API.
 */
export interface ThreadListItemsResponse {
  /**
   * A list of items
   */
  data: Array<
    | ThreadListItemsResponse.ChatkitUserMessage
    | ThreadListItemsResponse.ChatkitAssistantMessage
    | ThreadListItemsResponse.ChatkitWidget
    | ThreadListItemsResponse.ChatkitClientToolCall
    | ThreadListItemsResponse.ChatkitTask
    | ThreadListItemsResponse.ChatkitTaskGroup
  >;

  /**
   * The ID of the first item in the list.
   */
  first_id: string | null;

  /**
   * Whether there are more items available.
   */
  has_more: boolean;

  /**
   * The ID of the last item in the list.
   */
  last_id: string | null;

  /**
   * The type of object returned, must be `list`.
   */
  object: 'list';
}

export namespace ThreadListItemsResponse {
  /**
   * User-authored messages within a thread.
   */
  export interface ChatkitUserMessage {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * Attachments associated with the user message. Defaults to an empty list.
     */
    attachments: Array<ChatkitUserMessage.Attachment>;

    /**
     * Ordered content elements supplied by the user.
     */
    content: Array<ChatkitUserMessage.InputText | ChatkitUserMessage.QuotedText>;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Inference overrides applied to the message. Defaults to null when unset.
     */
    inference_options: ChatkitUserMessage.InferenceOptions | null;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    type: 'chatkit.user_message';
  }

  export namespace ChatkitUserMessage {
    /**
     * Attachment metadata included on thread items.
     */
    export interface Attachment {
      /**
       * Identifier for the attachment.
       */
      id: string;

      /**
       * MIME type of the attachment.
       */
      mime_type: string;

      /**
       * Original display name for the attachment.
       */
      name: string;

      /**
       * Preview URL for rendering the attachment inline.
       */
      preview_url: string | null;

      /**
       * Attachment discriminator.
       */
      type: 'image' | 'file';
    }

    /**
     * Text block that a user contributed to the thread.
     */
    export interface InputText {
      /**
       * Plain-text content supplied by the user.
       */
      text: string;

      /**
       * Type discriminator that is always `input_text`.
       */
      type: 'input_text';
    }

    /**
     * Quoted snippet that the user referenced in their message.
     */
    export interface QuotedText {
      /**
       * Quoted text content.
       */
      text: string;

      /**
       * Type discriminator that is always `quoted_text`.
       */
      type: 'quoted_text';
    }

    /**
     * Inference overrides applied to the message. Defaults to null when unset.
     */
    export interface InferenceOptions {
      /**
       * Model name that generated the response. Defaults to null when using the session
       * default.
       */
      model: string | null;

      /**
       * Preferred tool to invoke. Defaults to null when ChatKit should auto-select.
       */
      tool_choice: InferenceOptions.ToolChoice | null;
    }

    export namespace InferenceOptions {
      /**
       * Preferred tool to invoke. Defaults to null when ChatKit should auto-select.
       */
      export interface ToolChoice {
        /**
         * Identifier of the requested tool.
         */
        id: string;
      }
    }
  }

  /**
   * Assistant-authored message within a thread.
   */
  export interface ChatkitAssistantMessage {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * Ordered assistant response segments.
     */
    content: Array<ChatkitAssistantMessage.Content>;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    /**
     * Type discriminator that is always `chatkit.assistant_message`.
     */
    type: 'chatkit.assistant_message';
  }

  export namespace ChatkitAssistantMessage {
    /**
     * Assistant response text accompanied by optional annotations.
     */
    export interface Content {
      /**
       * Ordered list of annotations attached to the response text.
       */
      annotations: Array<Content.File | Content.URL>;

      /**
       * Assistant generated text.
       */
      text: string;

      /**
       * Type discriminator that is always `output_text`.
       */
      type: 'output_text';
    }

    export namespace Content {
      /**
       * Annotation that references an uploaded file.
       */
      export interface File {
        /**
         * File attachment referenced by the annotation.
         */
        source: File.Source;

        /**
         * Type discriminator that is always `file` for this annotation.
         */
        type: 'file';
      }

      export namespace File {
        /**
         * File attachment referenced by the annotation.
         */
        export interface Source {
          /**
           * Filename referenced by the annotation.
           */
          filename: string;

          /**
           * Type discriminator that is always `file`.
           */
          type: 'file';
        }
      }

      /**
       * Annotation that references a URL.
       */
      export interface URL {
        /**
         * URL referenced by the annotation.
         */
        source: URL.Source;

        /**
         * Type discriminator that is always `url` for this annotation.
         */
        type: 'url';
      }

      export namespace URL {
        /**
         * URL referenced by the annotation.
         */
        export interface Source {
          /**
           * Type discriminator that is always `url`.
           */
          type: 'url';

          /**
           * URL referenced by the annotation.
           */
          url: string;
        }
      }
    }
  }

  /**
   * Thread item that renders a widget payload.
   */
  export interface ChatkitWidget {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    /**
     * Type discriminator that is always `chatkit.widget`.
     */
    type: 'chatkit.widget';

    /**
     * Serialized widget payload rendered in the UI.
     */
    widget: string;
  }

  /**
   * Record of a client side tool invocation initiated by the assistant.
   */
  export interface ChatkitClientToolCall {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * JSON-encoded arguments that were sent to the tool.
     */
    arguments: string;

    /**
     * Identifier for the client tool call.
     */
    call_id: string;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Tool name that was invoked.
     */
    name: string;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * JSON-encoded output captured from the tool. Defaults to null while execution is
     * in progress.
     */
    output: string | null;

    /**
     * Execution status for the tool call.
     */
    status: 'in_progress' | 'completed';

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    /**
     * Type discriminator that is always `chatkit.client_tool_call`.
     */
    type: 'chatkit.client_tool_call';
  }

  /**
   * Task emitted by the workflow to show progress and status updates.
   */
  export interface ChatkitTask {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Optional heading for the task. Defaults to null when not provided.
     */
    heading: string | null;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * Optional summary that describes the task. Defaults to null when omitted.
     */
    summary: string | null;

    /**
     * Subtype for the task.
     */
    task_type: ThreadsAPI.TaskType;

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    /**
     * Type discriminator that is always `chatkit.task`.
     */
    type: 'chatkit.task';
  }

  /**
   * Collection of workflow tasks grouped together in the thread.
   */
  export interface ChatkitTaskGroup {
    /**
     * Identifier of the thread item.
     */
    id: string;

    /**
     * Unix timestamp (in seconds) for when the item was created.
     */
    created_at: number;

    /**
     * Type discriminator that is always `chatkit.thread_item`.
     */
    object: 'chatkit.thread_item';

    /**
     * Tasks included in the group.
     */
    tasks: Array<ChatkitTaskGroup.Task>;

    /**
     * Identifier of the parent thread.
     */
    thread_id: string;

    /**
     * Type discriminator that is always `chatkit.task_group`.
     */
    type: 'chatkit.task_group';
  }

  export namespace ChatkitTaskGroup {
    /**
     * Task entry that appears within a TaskGroup.
     */
    export interface Task {
      /**
       * Optional heading for the grouped task. Defaults to null when not provided.
       */
      heading: string | null;

      /**
       * Optional summary that describes the grouped task. Defaults to null when omitted.
       */
      summary: string | null;

      /**
       * Subtype for the grouped task.
       */
      type: ThreadsAPI.TaskType;
    }
  }
}

export interface ThreadListParams {
  /**
   * List items created after this thread item ID. Defaults to null for the first
   * page.
   */
  after?: string;

  /**
   * List items created before this thread item ID. Defaults to null for the newest
   * results.
   */
  before?: string;

  /**
   * Maximum number of thread items to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Sort order for results by creation time. Defaults to `desc`.
   */
  order?: VideosAPI.OrderEnum;

  /**
   * Filter threads that belong to this user identifier. Defaults to null to return
   * all users.
   */
  user?: string;
}

export interface ThreadListItemsParams {
  /**
   * List items created after this thread item ID. Defaults to null for the first
   * page.
   */
  after?: string;

  /**
   * List items created before this thread item ID. Defaults to null for the newest
   * results.
   */
  before?: string;

  /**
   * Maximum number of thread items to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Sort order for results by creation time. Defaults to `desc`.
   */
  order?: VideosAPI.OrderEnum;
}

export declare namespace Threads {
  export {
    type TaskType as TaskType,
    type Thread as Thread,
    type ThreadListResponse as ThreadListResponse,
    type ThreadDeleteResponse as ThreadDeleteResponse,
    type ThreadListItemsResponse as ThreadListItemsResponse,
    type ThreadListParams as ThreadListParams,
    type ThreadListItemsParams as ThreadListItemsParams,
  };
}
