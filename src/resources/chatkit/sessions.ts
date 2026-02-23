// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sessions extends APIResource {
  /**
   * Create a ChatKit session.
   *
   * @example
   * ```ts
   * const chatSession = await client.chatkit.sessions.create({
   *   user: 'x',
   *   workflow: { id: 'id' },
   * });
   * ```
   */
  create(body: SessionCreateParams, options?: RequestOptions): APIPromise<ChatSession> {
    return this._client.post('/chatkit/sessions', { body, ...options });
  }

  /**
   * Cancel an active ChatKit session and return its most recent metadata.
   *
   * Cancelling prevents new requests from using the issued client secret.
   *
   * @example
   * ```ts
   * const chatSession = await client.chatkit.sessions.cancel(
   *   'cksess_123',
   * );
   * ```
   */
  cancel(sessionID: string, options?: RequestOptions): APIPromise<ChatSession> {
    return this._client.post(path`/chatkit/sessions/${sessionID}/cancel`, options);
  }
}

/**
 * Represents a ChatKit session and its resolved configuration.
 */
export interface ChatSession {
  /**
   * Identifier for the ChatKit session.
   */
  id: string;

  /**
   * Resolved ChatKit feature configuration for the session.
   */
  chatkit_configuration: ChatSession.ChatkitConfiguration;

  /**
   * Ephemeral client secret that authenticates session requests.
   */
  client_secret: string;

  /**
   * Unix timestamp (in seconds) for when the session expires.
   */
  expires_at: number;

  /**
   * Convenience copy of the per-minute request limit.
   */
  max_requests_per_1_minute: number;

  /**
   * Type discriminator that is always `chatkit.session`.
   */
  object: 'chatkit.session';

  /**
   * Resolved rate limit values.
   */
  rate_limits: ChatSession.RateLimits;

  /**
   * Current lifecycle state of the session.
   */
  status: 'active' | 'expired' | 'cancelled';

  /**
   * User identifier associated with the session.
   */
  user: string;

  /**
   * Workflow metadata for the session.
   */
  workflow: ChatSession.Workflow;
}

export namespace ChatSession {
  /**
   * Resolved ChatKit feature configuration for the session.
   */
  export interface ChatkitConfiguration {
    /**
     * Automatic thread titling preferences.
     */
    automatic_thread_titling: ChatkitConfiguration.AutomaticThreadTitling;

    /**
     * Upload settings for the session.
     */
    file_upload: ChatkitConfiguration.FileUpload;

    /**
     * History retention configuration.
     */
    history: ChatkitConfiguration.History;
  }

  export namespace ChatkitConfiguration {
    /**
     * Automatic thread titling preferences.
     */
    export interface AutomaticThreadTitling {
      /**
       * Whether automatic thread titling is enabled.
       */
      enabled: boolean;
    }

    /**
     * Upload settings for the session.
     */
    export interface FileUpload {
      /**
       * Indicates if uploads are enabled for the session.
       */
      enabled: boolean;

      /**
       * Maximum upload size in megabytes.
       */
      max_file_size: number | null;

      /**
       * Maximum number of uploads allowed during the session.
       */
      max_files: number | null;
    }

    /**
     * History retention configuration.
     */
    export interface History {
      /**
       * Indicates if chat history is persisted for the session.
       */
      enabled: boolean;

      /**
       * Number of prior threads surfaced in history views. Defaults to null when all
       * history is retained.
       */
      recent_threads: number | null;
    }
  }

  /**
   * Resolved rate limit values.
   */
  export interface RateLimits {
    /**
     * Maximum allowed requests per one-minute window.
     */
    max_requests_per_1_minute: number;
  }

  /**
   * Workflow metadata for the session.
   */
  export interface Workflow {
    /**
     * Identifier of the workflow backing the session.
     */
    id: string;

    /**
     * State variable key-value pairs applied when invoking the workflow. Defaults to
     * null when no overrides were provided.
     */
    state_variables: { [key: string]: string | boolean | number } | null;

    /**
     * Tracing settings applied to the workflow.
     */
    tracing: Workflow.Tracing;

    /**
     * Specific workflow version used for the session. Defaults to null when using the
     * latest deployment.
     */
    version: string | null;
  }

  export namespace Workflow {
    /**
     * Tracing settings applied to the workflow.
     */
    export interface Tracing {
      /**
       * Indicates whether tracing is enabled.
       */
      enabled: boolean;
    }
  }
}

export interface SessionCreateParams {
  /**
   * A free-form string that identifies your end user; ensures this Session can
   * access other objects that have the same `user` scope.
   */
  user: string;

  /**
   * Workflow that powers the session.
   */
  workflow: SessionCreateParams.Workflow;

  /**
   * Optional overrides for ChatKit runtime configuration features
   */
  chatkit_configuration?: SessionCreateParams.ChatkitConfiguration;

  /**
   * Optional override for session expiration timing in seconds from creation.
   * Defaults to 10 minutes.
   */
  expires_after?: SessionCreateParams.ExpiresAfter;

  /**
   * Optional override for per-minute request limits. When omitted, defaults to 10.
   */
  rate_limits?: SessionCreateParams.RateLimits;
}

export namespace SessionCreateParams {
  /**
   * Workflow that powers the session.
   */
  export interface Workflow {
    /**
     * Identifier for the workflow invoked by the session.
     */
    id: string;

    /**
     * State variables forwarded to the workflow. Keys may be up to 64 characters,
     * values must be primitive types, and the map defaults to an empty object.
     */
    state_variables?: { [key: string]: string | boolean | number };

    /**
     * Optional tracing overrides for the workflow invocation. When omitted, tracing is
     * enabled by default.
     */
    tracing?: Workflow.Tracing;

    /**
     * Specific workflow version to run. Defaults to the latest deployed version.
     */
    version?: string;
  }

  export namespace Workflow {
    /**
     * Optional tracing overrides for the workflow invocation. When omitted, tracing is
     * enabled by default.
     */
    export interface Tracing {
      /**
       * Whether tracing is enabled during the session. Defaults to true.
       */
      enabled?: boolean;
    }
  }

  /**
   * Optional overrides for ChatKit runtime configuration features
   */
  export interface ChatkitConfiguration {
    /**
     * Configuration for automatic thread titling. When omitted, automatic thread
     * titling is enabled by default.
     */
    automatic_thread_titling?: ChatkitConfiguration.AutomaticThreadTitling;

    /**
     * Configuration for upload enablement and limits. When omitted, uploads are
     * disabled by default (max_files 10, max_file_size 512 MB).
     */
    file_upload?: ChatkitConfiguration.FileUpload;

    /**
     * Configuration for chat history retention. When omitted, history is enabled by
     * default with no limit on recent_threads (null).
     */
    history?: ChatkitConfiguration.History;
  }

  export namespace ChatkitConfiguration {
    /**
     * Configuration for automatic thread titling. When omitted, automatic thread
     * titling is enabled by default.
     */
    export interface AutomaticThreadTitling {
      /**
       * Enable automatic thread title generation. Defaults to true.
       */
      enabled?: boolean;
    }

    /**
     * Configuration for upload enablement and limits. When omitted, uploads are
     * disabled by default (max_files 10, max_file_size 512 MB).
     */
    export interface FileUpload {
      /**
       * Enable uploads for this session. Defaults to false.
       */
      enabled?: boolean;

      /**
       * Maximum size in megabytes for each uploaded file. Defaults to 512 MB, which is
       * the maximum allowable size.
       */
      max_file_size?: number;

      /**
       * Maximum number of files that can be uploaded to the session. Defaults to 10.
       */
      max_files?: number;
    }

    /**
     * Configuration for chat history retention. When omitted, history is enabled by
     * default with no limit on recent_threads (null).
     */
    export interface History {
      /**
       * Enables chat users to access previous ChatKit threads. Defaults to true.
       */
      enabled?: boolean;

      /**
       * Number of recent ChatKit threads users have access to. Defaults to unlimited
       * when unset.
       */
      recent_threads?: number;
    }
  }

  /**
   * Optional override for session expiration timing in seconds from creation.
   * Defaults to 10 minutes.
   */
  export interface ExpiresAfter {
    /**
     * Base timestamp used to calculate expiration. Currently fixed to `created_at`.
     */
    anchor: 'created_at';

    /**
     * Number of seconds after the anchor when the session expires.
     */
    seconds: number;
  }

  /**
   * Optional override for per-minute request limits. When omitted, defaults to 10.
   */
  export interface RateLimits {
    /**
     * Maximum number of requests allowed per minute for the session. Defaults to 10.
     */
    max_requests_per_1_minute?: number;
  }
}

export declare namespace Sessions {
  export { type ChatSession as ChatSession, type SessionCreateParams as SessionCreateParams };
}
