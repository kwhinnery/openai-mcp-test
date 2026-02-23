// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CallsAPI from './calls';
import * as AudioAPI from '../audio/audio';
import * as ItemsAPI from '../conversations/items';
import * as RealtimeAPI from './realtime';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Create a new Realtime API call over WebRTC and receive the SDP answer needed to
   * complete the peer connection.
   *
   * @example
   * ```ts
   * const call = await client.realtime.calls.create({
   *   sdp: 'sdp',
   * });
   *
   * const content = await call.blob();
   * console.log(content);
   * ```
   */
  create(body: CallCreateParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post(
      '/realtime/calls',
      maybeMultipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([{ Accept: 'application/sdp' }, options?.headers]),
          __binaryResponse: true,
        },
        this._client,
      ),
    );
  }

  /**
   * Accept an incoming SIP call and configure the realtime session that will handle
   * it.
   *
   * @example
   * ```ts
   * await client.realtime.calls.accept('call_id', {
   *   type: 'realtime',
   * });
   * ```
   */
  accept(callID: string, body: CallAcceptParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/realtime/calls/${callID}/accept`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * End an active Realtime API call, whether it was initiated over SIP or WebRTC.
   *
   * @example
   * ```ts
   * await client.realtime.calls.hangup('call_id');
   * ```
   */
  hangup(callID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/realtime/calls/${callID}/hangup`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Transfer an active SIP call to a new destination using the SIP REFER verb.
   *
   * @example
   * ```ts
   * await client.realtime.calls.refer('call_id', {
   *   target_uri: 'tel:+14155550123',
   * });
   * ```
   */
  refer(callID: string, body: CallReferParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/realtime/calls/${callID}/refer`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Decline an incoming SIP call by returning a SIP status code to the caller.
   *
   * @example
   * ```ts
   * await client.realtime.calls.reject('call_id');
   * ```
   */
  reject(
    callID: string,
    body: CallRejectParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/realtime/calls/${callID}/reject`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Give the model access to additional tools via remote Model Context Protocol
 * (MCP) servers. [Learn more about MCP](/docs/guides/tools-remote-mcp).
 */
export interface McpTool {
  /**
   * A label for this MCP server, used to identify it in tool calls.
   */
  server_label: string;

  /**
   * The type of the MCP tool. Always `mcp`.
   */
  type: 'mcp';

  /**
   * List of allowed tool names or a filter object.
   */
  allowed_tools?: Array<string> | McpToolFilter | null;

  /**
   * An OAuth access token that can be used with a remote MCP server, either with a
   * custom MCP server URL or a service connector. Your application must handle the
   * OAuth authorization flow and provide the token here.
   */
  authorization?: string;

  /**
   * Identifier for service connectors, like those available in ChatGPT. One of
   * `server_url` or `connector_id` must be provided. Learn more about service
   * connectors [here](/docs/guides/tools-remote-mcp#connectors).
   *
   * Currently supported `connector_id` values are:
   *
   * - Dropbox: `connector_dropbox`
   * - Gmail: `connector_gmail`
   * - Google Calendar: `connector_googlecalendar`
   * - Google Drive: `connector_googledrive`
   * - Microsoft Teams: `connector_microsoftteams`
   * - Outlook Calendar: `connector_outlookcalendar`
   * - Outlook Email: `connector_outlookemail`
   * - SharePoint: `connector_sharepoint`
   */
  connector_id?:
    | 'connector_dropbox'
    | 'connector_gmail'
    | 'connector_googlecalendar'
    | 'connector_googledrive'
    | 'connector_microsoftteams'
    | 'connector_outlookcalendar'
    | 'connector_outlookemail'
    | 'connector_sharepoint';

  /**
   * Optional HTTP headers to send to the MCP server. Use for authentication or other
   * purposes.
   */
  headers?: { [key: string]: string } | null;

  /**
   * Specify which of the MCP server's tools require approval.
   */
  require_approval?: McpTool.McpToolApprovalFilter | 'always' | 'never' | null;

  /**
   * Optional description of the MCP server, used to provide more context.
   */
  server_description?: string;

  /**
   * The URL for the MCP server. One of `server_url` or `connector_id` must be
   * provided.
   */
  server_url?: string;
}

export namespace McpTool {
  /**
   * Specify which of the MCP server's tools require approval. Can be `always`,
   * `never`, or a filter object associated with tools that require approval.
   */
  export interface McpToolApprovalFilter {
    /**
     * A filter object to specify which tools are allowed.
     */
    always?: CallsAPI.McpToolFilter;

    /**
     * A filter object to specify which tools are allowed.
     */
    never?: CallsAPI.McpToolFilter;
  }
}

/**
 * A filter object to specify which tools are allowed.
 */
export interface McpToolFilter {
  /**
   * Indicates whether or not a tool modifies data or is read-only. If an MCP server
   * is
   * [annotated with `readOnlyHint`](https://modelcontextprotocol.io/specification/2025-06-18/schema#toolannotations-readonlyhint),
   * it will match this filter.
   */
  read_only?: boolean;

  /**
   * List of allowed tool names.
   */
  tool_names?: Array<string>;
}

/**
 * Reference to a prompt template and its variables.
 * [Learn more](/docs/guides/text?api-mode=responses#reusable-prompts).
 */
export interface Prompt {
  /**
   * The unique identifier of the prompt template to use.
   */
  id: string;

  /**
   * Optional map of values to substitute in for variables in your prompt. The
   * substitution values can either be strings, or other Response input types like
   * images or files.
   */
  variables?: {
    [key: string]:
      | string
      | ItemsAPI.InputTextContent
      | ItemsAPI.InputImageContent
      | ItemsAPI.InputFileContent;
  } | null;

  /**
   * Optional version of the prompt template.
   */
  version?: string | null;
}

/**
 * The PCM audio format. Only a 24kHz sample rate is supported.
 */
export type RealtimeAudioFormats =
  | RealtimeAudioFormats.PcmAudioFormat
  | RealtimeAudioFormats.PcmuAudioFormat
  | RealtimeAudioFormats.PcmaAudioFormat;

export namespace RealtimeAudioFormats {
  /**
   * The PCM audio format. Only a 24kHz sample rate is supported.
   */
  export interface PcmAudioFormat {
    /**
     * The sample rate of the audio. Always `24000`.
     */
    rate?: 24000;

    /**
     * The audio format. Always `audio/pcm`.
     */
    type?: 'audio/pcm';
  }

  /**
   * The G.711 μ-law format.
   */
  export interface PcmuAudioFormat {
    /**
     * The audio format. Always `audio/pcmu`.
     */
    type?: 'audio/pcmu';
  }

  /**
   * The G.711 A-law format.
   */
  export interface PcmaAudioFormat {
    /**
     * The audio format. Always `audio/pcma`.
     */
    type?: 'audio/pcma';
  }
}

/**
 * Realtime session object configuration.
 */
export interface RealtimeSessionCreate {
  /**
   * The type of session to create. Always `realtime` for the Realtime API.
   */
  type: 'realtime';

  /**
   * Configuration for input and output audio.
   */
  audio?: RealtimeSessionCreate.Audio;

  /**
   * Additional fields to include in server outputs.
   *
   * `item.input_audio_transcription.logprobs`: Include logprobs for input audio
   * transcription.
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;

  /**
   * The default system instructions (i.e. system message) prepended to model calls.
   * This field allows the client to guide the model on desired responses. The model
   * can be instructed on response content and format, (e.g. "be extremely succinct",
   * "act friendly", "here are examples of good responses") and on audio behavior
   * (e.g. "talk quickly", "inject emotion into your voice", "laugh frequently"). The
   * instructions are not guaranteed to be followed by the model, but they provide
   * guidance to the model on the desired behavior.
   *
   * Note that the server sets default instructions which will be used if this field
   * is not set and are visible in the `session.created` event at the start of the
   * session.
   */
  instructions?: string;

  /**
   * Maximum number of output tokens for a single assistant response, inclusive of
   * tool calls. Provide an integer between 1 and 4096 to limit output tokens, or
   * `inf` for the maximum available tokens for a given model. Defaults to `inf`.
   */
  max_output_tokens?: number | 'inf';

  /**
   * The Realtime model used for this session.
   */
  model?:
    | (string & {})
    | 'gpt-realtime'
    | 'gpt-realtime-2025-08-28'
    | 'gpt-4o-realtime-preview'
    | 'gpt-4o-realtime-preview-2024-10-01'
    | 'gpt-4o-realtime-preview-2024-12-17'
    | 'gpt-4o-realtime-preview-2025-06-03'
    | 'gpt-4o-mini-realtime-preview'
    | 'gpt-4o-mini-realtime-preview-2024-12-17'
    | 'gpt-realtime-mini'
    | 'gpt-realtime-mini-2025-10-06'
    | 'gpt-realtime-mini-2025-12-15'
    | 'gpt-audio-mini'
    | 'gpt-audio-mini-2025-10-06'
    | 'gpt-audio-mini-2025-12-15';

  /**
   * The set of modalities the model can respond with. It defaults to `["audio"]`,
   * indicating that the model will respond with audio plus a transcript. `["text"]`
   * can be used to make the model respond with text only. It is not possible to
   * request both `text` and `audio` at the same time.
   */
  output_modalities?: Array<'text' | 'audio'>;

  /**
   * Reference to a prompt template and its variables.
   * [Learn more](/docs/guides/text?api-mode=responses#reusable-prompts).
   */
  prompt?: Prompt | null;

  /**
   * How the model chooses tools. Provide one of the string modes or force a specific
   * function/MCP tool.
   */
  tool_choice?: ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMcp;

  /**
   * Tools available to the model.
   */
  tools?: Array<RealtimeAPI.RealtimeFunctionTool | McpTool>;

  /**
   * Realtime API can write session traces to the
   * [Traces Dashboard](/logs?api=traces). Set to null to disable tracing. Once
   * tracing is enabled for a session, the configuration cannot be modified.
   *
   * `auto` will create a trace for the session with default values for the workflow
   * name, group id, and metadata.
   */
  tracing?: 'auto' | RealtimeSessionCreate.TracingConfiguration | null;

  /**
   * When the number of tokens in a conversation exceeds the model's input token
   * limit, the conversation be truncated, meaning messages (starting from the
   * oldest) will not be included in the model's context. A 32k context model with
   * 4,096 max output tokens can only include 28,224 tokens in the context before
   * truncation occurs.
   *
   * Clients can configure truncation behavior to truncate with a lower max token
   * limit, which is an effective way to control token usage and cost.
   *
   * Truncation will reduce the number of cached tokens on the next turn (busting the
   * cache), since messages are dropped from the beginning of the context. However,
   * clients can also configure truncation to retain messages up to a fraction of the
   * maximum context size, which will reduce the need for future truncations and thus
   * improve the cache rate.
   *
   * Truncation can be disabled entirely, which means the server will never truncate
   * but would instead return an error if the conversation exceeds the model's input
   * token limit.
   */
  truncation?: RealtimeTruncation;
}

export namespace RealtimeSessionCreate {
  /**
   * Configuration for input and output audio.
   */
  export interface Audio {
    input?: Audio.Input;

    output?: Audio.Output;
  }

  export namespace Audio {
    export interface Input {
      /**
       * The format of the input audio.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      /**
       * Configuration for input audio noise reduction. This can be set to `null` to turn
       * off. Noise reduction filters audio added to the input audio buffer before it is
       * sent to VAD and the model. Filtering the audio can improve VAD and turn
       * detection accuracy (reducing false positives) and model performance by improving
       * perception of the input audio.
       */
      noise_reduction?: Input.NoiseReduction;

      /**
       * Configuration for input audio transcription, defaults to off and can be set to
       * `null` to turn off once on. Input audio transcription is not native to the
       * model, since the model consumes audio directly. Transcription runs
       * asynchronously through
       * [the /audio/transcriptions endpoint](/docs/api-reference/audio/createTranscription)
       * and should be treated as guidance of input audio content rather than precisely
       * what the model heard. The client can optionally set the language and prompt for
       * transcription, these offer additional guidance to the transcription service.
       */
      transcription?: RealtimeAPI.AudioTranscription;

      /**
       * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be
       * set to `null` to turn off, in which case the client must manually trigger model
       * response.
       *
       * Server VAD means that the model will detect the start and end of speech based on
       * audio volume and respond at the end of user speech.
       *
       * Semantic VAD is more advanced and uses a turn detection model (in conjunction
       * with VAD) to semantically estimate whether the user has finished speaking, then
       * dynamically sets a timeout based on this probability. For example, if user audio
       * trails off with "uhhm", the model will score a low probability of turn end and
       * wait longer for the user to continue speaking. This can be useful for more
       * natural conversations, but may have a higher latency.
       */
      turn_detection?: CallsAPI.RealtimeTurnDetection | null;
    }

    export namespace Input {
      /**
       * Configuration for input audio noise reduction. This can be set to `null` to turn
       * off. Noise reduction filters audio added to the input audio buffer before it is
       * sent to VAD and the model. Filtering the audio can improve VAD and turn
       * detection accuracy (reducing false positives) and model performance by improving
       * perception of the input audio.
       */
      export interface NoiseReduction {
        /**
         * Type of noise reduction. `near_field` is for close-talking microphones such as
         * headphones, `far_field` is for far-field microphones such as laptop or
         * conference room microphones.
         */
        type?: RealtimeAPI.NoiseReductionType;
      }
    }

    export interface Output {
      /**
       * The format of the output audio.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      /**
       * The speed of the model's spoken response as a multiple of the original speed.
       * 1.0 is the default speed. 0.25 is the minimum speed. 1.5 is the maximum speed.
       * This value can only be changed in between model turns, not while a response is
       * in progress.
       *
       * This parameter is a post-processing adjustment to the audio after it is
       * generated, it's also possible to prompt the model to speak faster or slower.
       */
      speed?: number;

      /**
       * The voice the model uses to respond. Supported built-in voices are `alloy`,
       * `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, `verse`, `marin`, and
       * `cedar`. You may also provide a custom voice object with an `id`, for example
       * `{ "id": "voice_1234" }`. Voice cannot be changed during the session once the
       * model has responded with audio at least once. We recommend `marin` and `cedar`
       * for best quality.
       */
      voice?: AudioAPI.VoiceIDsOrCustomVoice;
    }
  }

  /**
   * Granular configuration for tracing.
   */
  export interface TracingConfiguration {
    /**
     * The group id to attach to this trace to enable filtering and grouping in the
     * Traces Dashboard.
     */
    group_id?: string;

    /**
     * The arbitrary metadata to attach to this trace to enable filtering in the Traces
     * Dashboard.
     */
    metadata?: unknown;

    /**
     * The name of the workflow to attach to this trace. This is used to name the trace
     * in the Traces Dashboard.
     */
    workflow_name?: string;
  }
}

/**
 * When the number of tokens in a conversation exceeds the model's input token
 * limit, the conversation be truncated, meaning messages (starting from the
 * oldest) will not be included in the model's context. A 32k context model with
 * 4,096 max output tokens can only include 28,224 tokens in the context before
 * truncation occurs.
 *
 * Clients can configure truncation behavior to truncate with a lower max token
 * limit, which is an effective way to control token usage and cost.
 *
 * Truncation will reduce the number of cached tokens on the next turn (busting the
 * cache), since messages are dropped from the beginning of the context. However,
 * clients can also configure truncation to retain messages up to a fraction of the
 * maximum context size, which will reduce the need for future truncations and thus
 * improve the cache rate.
 *
 * Truncation can be disabled entirely, which means the server will never truncate
 * but would instead return an error if the conversation exceeds the model's input
 * token limit.
 */
export type RealtimeTruncation = 'auto' | 'disabled' | RealtimeTruncation.RetentionRatioTruncation;

export namespace RealtimeTruncation {
  /**
   * Retain a fraction of the conversation tokens when the conversation exceeds the
   * input token limit. This allows you to amortize truncations across multiple
   * turns, which can help improve cached token usage.
   */
  export interface RetentionRatioTruncation {
    /**
     * Fraction of post-instruction conversation tokens to retain (`0.0` - `1.0`) when
     * the conversation exceeds the input token limit. Setting this to `0.8` means that
     * messages will be dropped until 80% of the maximum allowed tokens are used. This
     * helps reduce the frequency of truncations and improve cache rates.
     */
    retention_ratio: number;

    /**
     * Use retention ratio truncation.
     */
    type: 'retention_ratio';

    /**
     * Optional custom token limits for this truncation strategy. If not provided, the
     * model's default token limits will be used.
     */
    token_limits?: RetentionRatioTruncation.TokenLimits;
  }

  export namespace RetentionRatioTruncation {
    /**
     * Optional custom token limits for this truncation strategy. If not provided, the
     * model's default token limits will be used.
     */
    export interface TokenLimits {
      /**
       * Maximum tokens allowed in the conversation after instructions (which including
       * tool definitions). For example, setting this to 5,000 would mean that truncation
       * would occur when the conversation exceeds 5,000 tokens after instructions. This
       * cannot be higher than the model's context window size minus the maximum output
       * tokens.
       */
      post_instructions?: number;
    }
  }
}

/**
 * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be
 * set to `null` to turn off, in which case the client must manually trigger model
 * response.
 *
 * Server VAD means that the model will detect the start and end of speech based on
 * audio volume and respond at the end of user speech.
 *
 * Semantic VAD is more advanced and uses a turn detection model (in conjunction
 * with VAD) to semantically estimate whether the user has finished speaking, then
 * dynamically sets a timeout based on this probability. For example, if user audio
 * trails off with "uhhm", the model will score a low probability of turn end and
 * wait longer for the user to continue speaking. This can be useful for more
 * natural conversations, but may have a higher latency.
 */
export type RealtimeTurnDetection = RealtimeTurnDetection.ServerVad | RealtimeTurnDetection.SemanticVad;

export namespace RealtimeTurnDetection {
  /**
   * Server-side voice activity detection (VAD) which flips on when user speech is
   * detected and off after a period of silence.
   */
  export interface ServerVad {
    /**
     * Type of turn detection, `server_vad` to turn on simple Server VAD.
     */
    type: 'server_vad';

    /**
     * Whether or not to automatically generate a response when a VAD stop event
     * occurs. If `interrupt_response` is set to `false` this may fail to create a
     * response if the model is already responding.
     *
     * If both `create_response` and `interrupt_response` are set to `false`, the model
     * will never respond automatically but VAD events will still be emitted.
     */
    create_response?: boolean;

    /**
     * Optional timeout after which a model response will be triggered automatically.
     * This is useful for situations in which a long pause from the user is unexpected,
     * such as a phone call. The model will effectively prompt the user to continue the
     * conversation based on the current context.
     *
     * The timeout value will be applied after the last model response's audio has
     * finished playing, i.e. it's set to the `response.done` time plus audio playback
     * duration.
     *
     * An `input_audio_buffer.timeout_triggered` event (plus events associated with the
     * Response) will be emitted when the timeout is reached. Idle timeout is currently
     * only supported for `server_vad` mode.
     */
    idle_timeout_ms?: number | null;

    /**
     * Whether or not to automatically interrupt (cancel) any ongoing response with
     * output to the default conversation (i.e. `conversation` of `auto`) when a VAD
     * start event occurs. If `true` then the response will be cancelled, otherwise it
     * will continue until complete.
     *
     * If both `create_response` and `interrupt_response` are set to `false`, the model
     * will never respond automatically but VAD events will still be emitted.
     */
    interrupt_response?: boolean;

    /**
     * Used only for `server_vad` mode. Amount of audio to include before the VAD
     * detected speech (in milliseconds). Defaults to 300ms.
     */
    prefix_padding_ms?: number;

    /**
     * Used only for `server_vad` mode. Duration of silence to detect speech stop (in
     * milliseconds). Defaults to 500ms. With shorter values the model will respond
     * more quickly, but may jump in on short pauses from the user.
     */
    silence_duration_ms?: number;

    /**
     * Used only for `server_vad` mode. Activation threshold for VAD (0.0 to 1.0), this
     * defaults to 0.5. A higher threshold will require louder audio to activate the
     * model, and thus might perform better in noisy environments.
     */
    threshold?: number;
  }

  /**
   * Server-side semantic turn detection which uses a model to determine when the
   * user has finished speaking.
   */
  export interface SemanticVad {
    /**
     * Type of turn detection, `semantic_vad` to turn on Semantic VAD.
     */
    type: 'semantic_vad';

    /**
     * Whether or not to automatically generate a response when a VAD stop event
     * occurs.
     */
    create_response?: boolean;

    /**
     * Used only for `semantic_vad` mode. The eagerness of the model to respond. `low`
     * will wait longer for the user to continue speaking, `high` will respond more
     * quickly. `auto` is the default and is equivalent to `medium`. `low`, `medium`,
     * and `high` have max timeouts of 8s, 4s, and 2s respectively.
     */
    eagerness?: 'low' | 'medium' | 'high' | 'auto';

    /**
     * Whether or not to automatically interrupt any ongoing response with output to
     * the default conversation (i.e. `conversation` of `auto`) when a VAD start event
     * occurs.
     */
    interrupt_response?: boolean;
  }
}

/**
 * Use this option to force the model to call a specific function.
 */
export interface ToolChoiceFunction {
  /**
   * The name of the function to call.
   */
  name: string;

  /**
   * For function calling, the type is always `function`.
   */
  type: 'function';
}

/**
 * Use this option to force the model to call a specific tool on a remote MCP
 * server.
 */
export interface ToolChoiceMcp {
  /**
   * The label of the MCP server to use.
   */
  server_label: string;

  /**
   * For MCP tools, the type is always `mcp`.
   */
  type: 'mcp';

  /**
   * The name of the tool to call on the server.
   */
  name?: string | null;
}

/**
 * Controls which (if any) tool is called by the model.
 *
 * `none` means the model will not call any tool and instead generates a message.
 *
 * `auto` means the model can pick between generating a message or calling one or
 * more tools.
 *
 * `required` means the model must call one or more tools.
 */
export type ToolChoiceOptions = 'none' | 'auto' | 'required';

export interface CallCreateParams {
  /**
   * WebRTC Session Description Protocol (SDP) offer generated by the caller.
   */
  sdp: string;

  /**
   * Realtime session object configuration.
   */
  session?: RealtimeSessionCreate;
}

export interface CallAcceptParams {
  /**
   * The type of session to create. Always `realtime` for the Realtime API.
   */
  type: 'realtime';

  /**
   * Configuration for input and output audio.
   */
  audio?: CallAcceptParams.Audio;

  /**
   * Additional fields to include in server outputs.
   *
   * `item.input_audio_transcription.logprobs`: Include logprobs for input audio
   * transcription.
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;

  /**
   * The default system instructions (i.e. system message) prepended to model calls.
   * This field allows the client to guide the model on desired responses. The model
   * can be instructed on response content and format, (e.g. "be extremely succinct",
   * "act friendly", "here are examples of good responses") and on audio behavior
   * (e.g. "talk quickly", "inject emotion into your voice", "laugh frequently"). The
   * instructions are not guaranteed to be followed by the model, but they provide
   * guidance to the model on the desired behavior.
   *
   * Note that the server sets default instructions which will be used if this field
   * is not set and are visible in the `session.created` event at the start of the
   * session.
   */
  instructions?: string;

  /**
   * Maximum number of output tokens for a single assistant response, inclusive of
   * tool calls. Provide an integer between 1 and 4096 to limit output tokens, or
   * `inf` for the maximum available tokens for a given model. Defaults to `inf`.
   */
  max_output_tokens?: number | 'inf';

  /**
   * The Realtime model used for this session.
   */
  model?:
    | (string & {})
    | 'gpt-realtime'
    | 'gpt-realtime-2025-08-28'
    | 'gpt-4o-realtime-preview'
    | 'gpt-4o-realtime-preview-2024-10-01'
    | 'gpt-4o-realtime-preview-2024-12-17'
    | 'gpt-4o-realtime-preview-2025-06-03'
    | 'gpt-4o-mini-realtime-preview'
    | 'gpt-4o-mini-realtime-preview-2024-12-17'
    | 'gpt-realtime-mini'
    | 'gpt-realtime-mini-2025-10-06'
    | 'gpt-realtime-mini-2025-12-15'
    | 'gpt-audio-mini'
    | 'gpt-audio-mini-2025-10-06'
    | 'gpt-audio-mini-2025-12-15';

  /**
   * The set of modalities the model can respond with. It defaults to `["audio"]`,
   * indicating that the model will respond with audio plus a transcript. `["text"]`
   * can be used to make the model respond with text only. It is not possible to
   * request both `text` and `audio` at the same time.
   */
  output_modalities?: Array<'text' | 'audio'>;

  /**
   * Reference to a prompt template and its variables.
   * [Learn more](/docs/guides/text?api-mode=responses#reusable-prompts).
   */
  prompt?: Prompt | null;

  /**
   * How the model chooses tools. Provide one of the string modes or force a specific
   * function/MCP tool.
   */
  tool_choice?: ToolChoiceOptions | ToolChoiceFunction | ToolChoiceMcp;

  /**
   * Tools available to the model.
   */
  tools?: Array<RealtimeAPI.RealtimeFunctionTool | McpTool>;

  /**
   * Realtime API can write session traces to the
   * [Traces Dashboard](/logs?api=traces). Set to null to disable tracing. Once
   * tracing is enabled for a session, the configuration cannot be modified.
   *
   * `auto` will create a trace for the session with default values for the workflow
   * name, group id, and metadata.
   */
  tracing?: 'auto' | CallAcceptParams.TracingConfiguration | null;

  /**
   * When the number of tokens in a conversation exceeds the model's input token
   * limit, the conversation be truncated, meaning messages (starting from the
   * oldest) will not be included in the model's context. A 32k context model with
   * 4,096 max output tokens can only include 28,224 tokens in the context before
   * truncation occurs.
   *
   * Clients can configure truncation behavior to truncate with a lower max token
   * limit, which is an effective way to control token usage and cost.
   *
   * Truncation will reduce the number of cached tokens on the next turn (busting the
   * cache), since messages are dropped from the beginning of the context. However,
   * clients can also configure truncation to retain messages up to a fraction of the
   * maximum context size, which will reduce the need for future truncations and thus
   * improve the cache rate.
   *
   * Truncation can be disabled entirely, which means the server will never truncate
   * but would instead return an error if the conversation exceeds the model's input
   * token limit.
   */
  truncation?: RealtimeTruncation;
}

export namespace CallAcceptParams {
  /**
   * Configuration for input and output audio.
   */
  export interface Audio {
    input?: Audio.Input;

    output?: Audio.Output;
  }

  export namespace Audio {
    export interface Input {
      /**
       * The format of the input audio.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      /**
       * Configuration for input audio noise reduction. This can be set to `null` to turn
       * off. Noise reduction filters audio added to the input audio buffer before it is
       * sent to VAD and the model. Filtering the audio can improve VAD and turn
       * detection accuracy (reducing false positives) and model performance by improving
       * perception of the input audio.
       */
      noise_reduction?: Input.NoiseReduction;

      /**
       * Configuration for input audio transcription, defaults to off and can be set to
       * `null` to turn off once on. Input audio transcription is not native to the
       * model, since the model consumes audio directly. Transcription runs
       * asynchronously through
       * [the /audio/transcriptions endpoint](/docs/api-reference/audio/createTranscription)
       * and should be treated as guidance of input audio content rather than precisely
       * what the model heard. The client can optionally set the language and prompt for
       * transcription, these offer additional guidance to the transcription service.
       */
      transcription?: RealtimeAPI.AudioTranscription;

      /**
       * Configuration for turn detection, ether Server VAD or Semantic VAD. This can be
       * set to `null` to turn off, in which case the client must manually trigger model
       * response.
       *
       * Server VAD means that the model will detect the start and end of speech based on
       * audio volume and respond at the end of user speech.
       *
       * Semantic VAD is more advanced and uses a turn detection model (in conjunction
       * with VAD) to semantically estimate whether the user has finished speaking, then
       * dynamically sets a timeout based on this probability. For example, if user audio
       * trails off with "uhhm", the model will score a low probability of turn end and
       * wait longer for the user to continue speaking. This can be useful for more
       * natural conversations, but may have a higher latency.
       */
      turn_detection?: CallsAPI.RealtimeTurnDetection | null;
    }

    export namespace Input {
      /**
       * Configuration for input audio noise reduction. This can be set to `null` to turn
       * off. Noise reduction filters audio added to the input audio buffer before it is
       * sent to VAD and the model. Filtering the audio can improve VAD and turn
       * detection accuracy (reducing false positives) and model performance by improving
       * perception of the input audio.
       */
      export interface NoiseReduction {
        /**
         * Type of noise reduction. `near_field` is for close-talking microphones such as
         * headphones, `far_field` is for far-field microphones such as laptop or
         * conference room microphones.
         */
        type?: RealtimeAPI.NoiseReductionType;
      }
    }

    export interface Output {
      /**
       * The format of the output audio.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      /**
       * The speed of the model's spoken response as a multiple of the original speed.
       * 1.0 is the default speed. 0.25 is the minimum speed. 1.5 is the maximum speed.
       * This value can only be changed in between model turns, not while a response is
       * in progress.
       *
       * This parameter is a post-processing adjustment to the audio after it is
       * generated, it's also possible to prompt the model to speak faster or slower.
       */
      speed?: number;

      /**
       * The voice the model uses to respond. Supported built-in voices are `alloy`,
       * `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, `verse`, `marin`, and
       * `cedar`. You may also provide a custom voice object with an `id`, for example
       * `{ "id": "voice_1234" }`. Voice cannot be changed during the session once the
       * model has responded with audio at least once. We recommend `marin` and `cedar`
       * for best quality.
       */
      voice?: AudioAPI.VoiceIDsOrCustomVoice;
    }
  }

  /**
   * Granular configuration for tracing.
   */
  export interface TracingConfiguration {
    /**
     * The group id to attach to this trace to enable filtering and grouping in the
     * Traces Dashboard.
     */
    group_id?: string;

    /**
     * The arbitrary metadata to attach to this trace to enable filtering in the Traces
     * Dashboard.
     */
    metadata?: unknown;

    /**
     * The name of the workflow to attach to this trace. This is used to name the trace
     * in the Traces Dashboard.
     */
    workflow_name?: string;
  }
}

export interface CallReferParams {
  /**
   * URI that should appear in the SIP Refer-To header. Supports values like
   * `tel:+14155550123` or `sip:agent@example.com`.
   */
  target_uri: string;
}

export interface CallRejectParams {
  /**
   * SIP response code to send back to the caller. Defaults to `603` (Decline) when
   * omitted.
   */
  status_code?: number;
}

export declare namespace Calls {
  export {
    type McpTool as McpTool,
    type McpToolFilter as McpToolFilter,
    type Prompt as Prompt,
    type RealtimeAudioFormats as RealtimeAudioFormats,
    type RealtimeSessionCreate as RealtimeSessionCreate,
    type RealtimeTruncation as RealtimeTruncation,
    type RealtimeTurnDetection as RealtimeTurnDetection,
    type ToolChoiceFunction as ToolChoiceFunction,
    type ToolChoiceMcp as ToolChoiceMcp,
    type ToolChoiceOptions as ToolChoiceOptions,
    type CallCreateParams as CallCreateParams,
    type CallAcceptParams as CallAcceptParams,
    type CallReferParams as CallReferParams,
    type CallRejectParams as CallRejectParams,
  };
}
