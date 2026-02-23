// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RealtimeAPI from './realtime';
import * as AudioAPI from '../audio/audio';
import * as CallsAPI from './calls';
import {
  CallAcceptParams,
  CallCreateParams,
  CallReferParams,
  CallRejectParams,
  Calls,
  McpTool,
  McpToolFilter,
  Prompt,
  RealtimeAudioFormats,
  RealtimeSessionCreate,
  RealtimeTruncation,
  RealtimeTurnDetection,
  ToolChoiceFunction,
  ToolChoiceMcp,
  ToolChoiceOptions,
} from './calls';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Realtime extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);

  /**
   * Create a Realtime client secret with an associated session configuration.
   *
   * Client secrets are short-lived tokens that can be passed to a client app, such
   * as a web frontend or mobile client, which grants access to the Realtime API
   * without leaking your main API key. You can configure a custom TTL for each
   * client secret.
   *
   * You can also attach session configuration options to the client secret, which
   * will be applied to any sessions created using that client secret, but these can
   * also be overridden by the client connection.
   *
   * [Learn more about authentication with client secrets over WebRTC](/docs/guides/realtime-webrtc).
   *
   * Returns the created client secret and the effective session object. The client
   * secret is a string that looks like `ek_1234`.
   *
   * @example
   * ```ts
   * const response = await client.realtime.createClientSecret();
   * ```
   */
  createClientSecret(
    body: RealtimeCreateClientSecretParams,
    options?: RequestOptions,
  ): APIPromise<RealtimeCreateClientSecretResponse> {
    return this._client.post('/realtime/client_secrets', { body, ...options });
  }

  /**
   * Create an ephemeral API token for use in client-side applications with the
   * Realtime API. Can be configured with the same session parameters as the
   * `session.update` client event.
   *
   * It responds with a session object, plus a `client_secret` key which contains a
   * usable ephemeral API token that can be used to authenticate browser clients for
   * the Realtime API.
   *
   * Returns the created Realtime session object, plus an ephemeral key.
   *
   * @example
   * ```ts
   * const response = await client.realtime.createSession({
   *   client_secret: { expires_at: 0, value: 'value' },
   * });
   * ```
   */
  createSession(
    body: RealtimeCreateSessionParams,
    options?: RequestOptions,
  ): APIPromise<RealtimeCreateSessionResponse> {
    return this._client.post('/realtime/sessions', { body, ...options });
  }

  /**
   * Create an ephemeral API token for use in client-side applications with the
   * Realtime API specifically for realtime transcriptions. Can be configured with
   * the same session parameters as the `transcription_session.update` client event.
   *
   * It responds with a session object, plus a `client_secret` key which contains a
   * usable ephemeral API token that can be used to authenticate browser clients for
   * the Realtime API.
   *
   * Returns the created Realtime transcription session object, plus an ephemeral
   * key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtime.createTranscriptionSession();
   * ```
   */
  createTranscriptionSession(
    body: RealtimeCreateTranscriptionSessionParams,
    options?: RequestOptions,
  ): APIPromise<RealtimeCreateTranscriptionSessionResponse> {
    return this._client.post('/realtime/transcription_sessions', { body, ...options });
  }
}

export interface AudioTranscription {
  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`)
   * format will improve accuracy and latency.
   */
  language?: string;

  /**
   * The model to use for transcription. Current options are `whisper-1`,
   * `gpt-4o-mini-transcribe`, `gpt-4o-mini-transcribe-2025-12-15`,
   * `gpt-4o-transcribe`, and `gpt-4o-transcribe-diarize`. Use
   * `gpt-4o-transcribe-diarize` when you need diarization with speaker labels.
   */
  model?:
    | (string & {})
    | 'whisper-1'
    | 'gpt-4o-mini-transcribe'
    | 'gpt-4o-mini-transcribe-2025-12-15'
    | 'gpt-4o-transcribe'
    | 'gpt-4o-transcribe-diarize';

  /**
   * An optional text to guide the model's style or continue a previous audio
   * segment. For `whisper-1`, the
   * [prompt is a list of keywords](/docs/guides/speech-to-text#prompting). For
   * `gpt-4o-transcribe` models (excluding `gpt-4o-transcribe-diarize`), the prompt
   * is a free text string, for example "expect words related to technology".
   */
  prompt?: string;
}

/**
 * Type of noise reduction. `near_field` is for close-talking microphones such as
 * headphones, `far_field` is for far-field microphones such as laptop or
 * conference room microphones.
 */
export type NoiseReductionType = 'near_field' | 'far_field';

export interface RealtimeFunctionTool {
  /**
   * The description of the function, including guidance on when and how to call it,
   * and guidance about what to tell the user when calling (if anything).
   */
  description?: string;

  /**
   * The name of the function.
   */
  name?: string;

  /**
   * Parameters of the function in JSON Schema.
   */
  parameters?: unknown;

  /**
   * The type of the tool, i.e. `function`.
   */
  type?: 'function';
}

export type VoiceIDsShared =
  | (string & {})
  | 'alloy'
  | 'ash'
  | 'ballad'
  | 'coral'
  | 'echo'
  | 'sage'
  | 'shimmer'
  | 'verse'
  | 'marin'
  | 'cedar';

/**
 * Response from creating a session and client secret for the Realtime API.
 */
export interface RealtimeCreateClientSecretResponse {
  /**
   * Expiration timestamp for the client secret, in seconds since epoch.
   */
  expires_at: number;

  /**
   * The session configuration for either a realtime or transcription session.
   */
  session: RealtimeCreateClientSecretResponse.Realtime | RealtimeCreateClientSecretResponse.Transcription;

  /**
   * The generated client secret value.
   */
  value: string;
}

export namespace RealtimeCreateClientSecretResponse {
  /**
   * A new Realtime session configuration, with an ephemeral key. Default TTL for
   * keys is one minute.
   */
  export interface Realtime {
    /**
     * Ephemeral key returned by the API.
     */
    client_secret: Realtime.ClientSecret;

    /**
     * The type of session to create. Always `realtime` for the Realtime API.
     */
    type: 'realtime';

    /**
     * Configuration for input and output audio.
     */
    audio?: Realtime.Audio;

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
    prompt?: CallsAPI.Prompt | null;

    /**
     * How the model chooses tools. Provide one of the string modes or force a specific
     * function/MCP tool.
     */
    tool_choice?: CallsAPI.ToolChoiceOptions | CallsAPI.ToolChoiceFunction | CallsAPI.ToolChoiceMcp;

    /**
     * Tools available to the model.
     */
    tools?: Array<RealtimeAPI.RealtimeFunctionTool | CallsAPI.McpTool>;

    /**
     * Realtime API can write session traces to the
     * [Traces Dashboard](/logs?api=traces). Set to null to disable tracing. Once
     * tracing is enabled for a session, the configuration cannot be modified.
     *
     * `auto` will create a trace for the session with default values for the workflow
     * name, group id, and metadata.
     */
    tracing?: 'auto' | Realtime.TracingConfiguration | null;

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
    truncation?: CallsAPI.RealtimeTruncation;
  }

  export namespace Realtime {
    /**
     * Ephemeral key returned by the API.
     */
    export interface ClientSecret {
      /**
       * Timestamp for when the token expires. Currently, all tokens expire after one
       * minute.
       */
      expires_at: number;

      /**
       * Ephemeral key usable in client environments to authenticate connections to the
       * Realtime API. Use this in client-side environments rather than a standard API
       * token, which should only be used server-side.
       */
      value: string;
    }

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
         * The voice the model uses to respond. Voice cannot be changed during the session
         * once the model has responded with audio at least once. Current voice options are
         * `alloy`, `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, `verse`, `marin`,
         * and `cedar`. We recommend `marin` and `cedar` for best quality.
         */
        voice?: RealtimeAPI.VoiceIDsShared;
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
   * A Realtime transcription session configuration object.
   */
  export interface Transcription {
    /**
     * Unique identifier for the session that looks like `sess_1234567890abcdef`.
     */
    id: string;

    /**
     * The object type. Always `realtime.transcription_session`.
     */
    object: string;

    /**
     * The type of session. Always `transcription` for transcription sessions.
     */
    type: 'transcription';

    /**
     * Configuration for input audio for the session.
     */
    audio?: Transcription.Audio;

    /**
     * Expiration timestamp for the session, in seconds since epoch.
     */
    expires_at?: number;

    /**
     * Additional fields to include in server outputs.
     *
     * - `item.input_audio_transcription.logprobs`: Include logprobs for input audio
     *   transcription.
     */
    include?: Array<'item.input_audio_transcription.logprobs'>;
  }

  export namespace Transcription {
    /**
     * Configuration for input audio for the session.
     */
    export interface Audio {
      input?: Audio.Input;
    }

    export namespace Audio {
      export interface Input {
        /**
         * The PCM audio format. Only a 24kHz sample rate is supported.
         */
        format?: CallsAPI.RealtimeAudioFormats;

        /**
         * Configuration for input audio noise reduction.
         */
        noise_reduction?: Input.NoiseReduction;

        /**
         * Configuration of the transcription model.
         */
        transcription?: RealtimeAPI.AudioTranscription;

        /**
         * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
         * means that the model will detect the start and end of speech based on audio
         * volume and respond at the end of user speech.
         */
        turn_detection?: Input.TurnDetection;
      }

      export namespace Input {
        /**
         * Configuration for input audio noise reduction.
         */
        export interface NoiseReduction {
          /**
           * Type of noise reduction. `near_field` is for close-talking microphones such as
           * headphones, `far_field` is for far-field microphones such as laptop or
           * conference room microphones.
           */
          type?: RealtimeAPI.NoiseReductionType;
        }

        /**
         * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
         * means that the model will detect the start and end of speech based on audio
         * volume and respond at the end of user speech.
         */
        export interface TurnDetection {
          /**
           * Amount of audio to include before the VAD detected speech (in milliseconds).
           * Defaults to 300ms.
           */
          prefix_padding_ms?: number;

          /**
           * Duration of silence to detect speech stop (in milliseconds). Defaults to 500ms.
           * With shorter values the model will respond more quickly, but may jump in on
           * short pauses from the user.
           */
          silence_duration_ms?: number;

          /**
           * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A higher
           * threshold will require louder audio to activate the model, and thus might
           * perform better in noisy environments.
           */
          threshold?: number;

          /**
           * Type of turn detection, only `server_vad` is currently supported.
           */
          type?: string;
        }
      }
    }
  }
}

/**
 * A Realtime session configuration object.
 */
export interface RealtimeCreateSessionResponse {
  /**
   * Unique identifier for the session that looks like `sess_1234567890abcdef`.
   */
  id?: string;

  /**
   * Configuration for input and output audio for the session.
   */
  audio?: RealtimeCreateSessionResponse.Audio;

  /**
   * Expiration timestamp for the session, in seconds since epoch.
   */
  expires_at?: number;

  /**
   * Additional fields to include in server outputs.
   *
   * - `item.input_audio_transcription.logprobs`: Include logprobs for input audio
   *   transcription.
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
  model?: string;

  /**
   * The object type. Always `realtime.session`.
   */
  object?: string;

  /**
   * The set of modalities the model can respond with. To disable audio, set this to
   * ["text"].
   */
  output_modalities?: Array<'text' | 'audio'>;

  /**
   * How the model chooses tools. Options are `auto`, `none`, `required`, or specify
   * a function.
   */
  tool_choice?: string;

  /**
   * Tools (functions) available to the model.
   */
  tools?: Array<RealtimeFunctionTool>;

  /**
   * Configuration options for tracing. Set to null to disable tracing. Once tracing
   * is enabled for a session, the configuration cannot be modified.
   *
   * `auto` will create a trace for the session with default values for the workflow
   * name, group id, and metadata.
   */
  tracing?: 'auto' | RealtimeCreateSessionResponse.TracingConfiguration;

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  turn_detection?: RealtimeCreateSessionResponse.TurnDetection;
}

export namespace RealtimeCreateSessionResponse {
  /**
   * Configuration for input and output audio for the session.
   */
  export interface Audio {
    input?: Audio.Input;

    output?: Audio.Output;
  }

  export namespace Audio {
    export interface Input {
      /**
       * The PCM audio format. Only a 24kHz sample rate is supported.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      /**
       * Configuration for input audio noise reduction.
       */
      noise_reduction?: Input.NoiseReduction;

      /**
       * Configuration for input audio transcription.
       */
      transcription?: RealtimeAPI.AudioTranscription;

      /**
       * Configuration for turn detection.
       */
      turn_detection?: Input.TurnDetection;
    }

    export namespace Input {
      /**
       * Configuration for input audio noise reduction.
       */
      export interface NoiseReduction {
        /**
         * Type of noise reduction. `near_field` is for close-talking microphones such as
         * headphones, `far_field` is for far-field microphones such as laptop or
         * conference room microphones.
         */
        type?: RealtimeAPI.NoiseReductionType;
      }

      /**
       * Configuration for turn detection.
       */
      export interface TurnDetection {
        prefix_padding_ms?: number;

        silence_duration_ms?: number;

        threshold?: number;

        /**
         * Type of turn detection, only `server_vad` is currently supported.
         */
        type?: string;
      }
    }

    export interface Output {
      /**
       * The PCM audio format. Only a 24kHz sample rate is supported.
       */
      format?: CallsAPI.RealtimeAudioFormats;

      speed?: number;

      voice?: RealtimeAPI.VoiceIDsShared;
    }
  }

  /**
   * Granular configuration for tracing.
   */
  export interface TracingConfiguration {
    /**
     * The group id to attach to this trace to enable filtering and grouping in the
     * traces dashboard.
     */
    group_id?: string;

    /**
     * The arbitrary metadata to attach to this trace to enable filtering in the traces
     * dashboard.
     */
    metadata?: unknown;

    /**
     * The name of the workflow to attach to this trace. This is used to name the trace
     * in the traces dashboard.
     */
    workflow_name?: string;
  }

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  export interface TurnDetection {
    /**
     * Amount of audio to include before the VAD detected speech (in milliseconds).
     * Defaults to 300ms.
     */
    prefix_padding_ms?: number;

    /**
     * Duration of silence to detect speech stop (in milliseconds). Defaults to 500ms.
     * With shorter values the model will respond more quickly, but may jump in on
     * short pauses from the user.
     */
    silence_duration_ms?: number;

    /**
     * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A higher
     * threshold will require louder audio to activate the model, and thus might
     * perform better in noisy environments.
     */
    threshold?: number;

    /**
     * Type of turn detection, only `server_vad` is currently supported.
     */
    type?: string;
  }
}

/**
 * A new Realtime transcription session configuration.
 *
 * When a session is created on the server via REST API, the session object also
 * contains an ephemeral key. Default TTL for keys is 10 minutes. This property is
 * not present when a session is updated via the WebSocket API.
 */
export interface RealtimeCreateTranscriptionSessionResponse {
  /**
   * Ephemeral key returned by the API. Only present when the session is created on
   * the server via REST API.
   */
  client_secret: RealtimeCreateTranscriptionSessionResponse.ClientSecret;

  /**
   * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
   */
  input_audio_format?: string;

  /**
   * Configuration of the transcription model.
   */
  input_audio_transcription?: AudioTranscription;

  /**
   * The set of modalities the model can respond with. To disable audio, set this to
   * ["text"].
   */
  modalities?: Array<'text' | 'audio'>;

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  turn_detection?: RealtimeCreateTranscriptionSessionResponse.TurnDetection;
}

export namespace RealtimeCreateTranscriptionSessionResponse {
  /**
   * Ephemeral key returned by the API. Only present when the session is created on
   * the server via REST API.
   */
  export interface ClientSecret {
    /**
     * Timestamp for when the token expires. Currently, all tokens expire after one
     * minute.
     */
    expires_at: number;

    /**
     * Ephemeral key usable in client environments to authenticate connections to the
     * Realtime API. Use this in client-side environments rather than a standard API
     * token, which should only be used server-side.
     */
    value: string;
  }

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  export interface TurnDetection {
    /**
     * Amount of audio to include before the VAD detected speech (in milliseconds).
     * Defaults to 300ms.
     */
    prefix_padding_ms?: number;

    /**
     * Duration of silence to detect speech stop (in milliseconds). Defaults to 500ms.
     * With shorter values the model will respond more quickly, but may jump in on
     * short pauses from the user.
     */
    silence_duration_ms?: number;

    /**
     * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A higher
     * threshold will require louder audio to activate the model, and thus might
     * perform better in noisy environments.
     */
    threshold?: number;

    /**
     * Type of turn detection, only `server_vad` is currently supported.
     */
    type?: string;
  }
}

export interface RealtimeCreateClientSecretParams {
  /**
   * Configuration for the client secret expiration. Expiration refers to the time
   * after which a client secret will no longer be valid for creating sessions. The
   * session itself may continue after that time once started. A secret can be used
   * to create multiple sessions until it expires.
   */
  expires_after?: RealtimeCreateClientSecretParams.ExpiresAfter;

  /**
   * Session configuration to use for the client secret. Choose either a realtime
   * session or a transcription session.
   */
  session?:
    | CallsAPI.RealtimeSessionCreate
    | RealtimeCreateClientSecretParams.RealtimeTranscriptionSessionCreateRequestGa;
}

export namespace RealtimeCreateClientSecretParams {
  /**
   * Configuration for the client secret expiration. Expiration refers to the time
   * after which a client secret will no longer be valid for creating sessions. The
   * session itself may continue after that time once started. A secret can be used
   * to create multiple sessions until it expires.
   */
  export interface ExpiresAfter {
    /**
     * The anchor point for the client secret expiration, meaning that `seconds` will
     * be added to the `created_at` time of the client secret to produce an expiration
     * timestamp. Only `created_at` is currently supported.
     */
    anchor?: 'created_at';

    /**
     * The number of seconds from the anchor point to the expiration. Select a value
     * between `10` and `7200` (2 hours). This default to 600 seconds (10 minutes) if
     * not specified.
     */
    seconds?: number;
  }

  /**
   * Realtime transcription session object configuration.
   */
  export interface RealtimeTranscriptionSessionCreateRequestGa {
    /**
     * The type of session to create. Always `transcription` for transcription
     * sessions.
     */
    type: 'transcription';

    /**
     * Configuration for input and output audio.
     */
    audio?: RealtimeTranscriptionSessionCreateRequestGa.Audio;

    /**
     * Additional fields to include in server outputs.
     *
     * `item.input_audio_transcription.logprobs`: Include logprobs for input audio
     * transcription.
     */
    include?: Array<'item.input_audio_transcription.logprobs'>;
  }

  export namespace RealtimeTranscriptionSessionCreateRequestGa {
    /**
     * Configuration for input and output audio.
     */
    export interface Audio {
      input?: Audio.Input;
    }

    export namespace Audio {
      export interface Input {
        /**
         * The PCM audio format. Only a 24kHz sample rate is supported.
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
    }
  }
}

export interface RealtimeCreateSessionParams {
  /**
   * Ephemeral key returned by the API.
   */
  client_secret: RealtimeCreateSessionParams.ClientSecret;

  /**
   * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
   */
  input_audio_format?: string;

  /**
   * Configuration for input audio transcription, defaults to off and can be set to
   * `null` to turn off once on. Input audio transcription is not native to the
   * model, since the model consumes audio directly. Transcription runs
   * asynchronously and should be treated as rough guidance rather than the
   * representation understood by the model.
   */
  input_audio_transcription?: RealtimeCreateSessionParams.InputAudioTranscription;

  /**
   * The default system instructions (i.e. system message) prepended to model calls.
   * This field allows the client to guide the model on desired responses. The model
   * can be instructed on response content and format, (e.g. "be extremely succinct",
   * "act friendly", "here are examples of good responses") and on audio behavior
   * (e.g. "talk quickly", "inject emotion into your voice", "laugh frequently"). The
   * instructions are not guaranteed to be followed by the model, but they provide
   * guidance to the model on the desired behavior. Note that the server sets default
   * instructions which will be used if this field is not set and are visible in the
   * `session.created` event at the start of the session.
   */
  instructions?: string;

  /**
   * Maximum number of output tokens for a single assistant response, inclusive of
   * tool calls. Provide an integer between 1 and 4096 to limit output tokens, or
   * `inf` for the maximum available tokens for a given model. Defaults to `inf`.
   */
  max_response_output_tokens?: number | 'inf';

  /**
   * The set of modalities the model can respond with. To disable audio, set this to
   * ["text"].
   */
  modalities?: Array<'text' | 'audio'>;

  /**
   * The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
   */
  output_audio_format?: string;

  /**
   * Reference to a prompt template and its variables.
   * [Learn more](/docs/guides/text?api-mode=responses#reusable-prompts).
   */
  prompt?: CallsAPI.Prompt | null;

  /**
   * The speed of the model's spoken response. 1.0 is the default speed. 0.25 is the
   * minimum speed. 1.5 is the maximum speed. This value can only be changed in
   * between model turns, not while a response is in progress.
   */
  speed?: number;

  /**
   * Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
   */
  temperature?: number;

  /**
   * How the model chooses tools. Options are `auto`, `none`, `required`, or specify
   * a function.
   */
  tool_choice?: string;

  /**
   * Tools (functions) available to the model.
   */
  tools?: Array<RealtimeCreateSessionParams.Tool>;

  /**
   * Configuration options for tracing. Set to null to disable tracing. Once tracing
   * is enabled for a session, the configuration cannot be modified.
   *
   * `auto` will create a trace for the session with default values for the workflow
   * name, group id, and metadata.
   */
  tracing?: 'auto' | RealtimeCreateSessionParams.TracingConfiguration;

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
  truncation?: CallsAPI.RealtimeTruncation;

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  turn_detection?: RealtimeCreateSessionParams.TurnDetection;

  /**
   * The voice the model uses to respond. Supported built-in voices are `alloy`,
   * `ash`, `ballad`, `coral`, `echo`, `sage`, `shimmer`, `verse`, `marin`, and
   * `cedar`. You may also provide a custom voice object with an `id`, for example
   * `{ "id": "voice_1234" }`. Voice cannot be changed during the session once the
   * model has responded with audio at least once.
   */
  voice?: AudioAPI.VoiceIDsOrCustomVoice;
}

export namespace RealtimeCreateSessionParams {
  /**
   * Ephemeral key returned by the API.
   */
  export interface ClientSecret {
    /**
     * Timestamp for when the token expires. Currently, all tokens expire after one
     * minute.
     */
    expires_at: number;

    /**
     * Ephemeral key usable in client environments to authenticate connections to the
     * Realtime API. Use this in client-side environments rather than a standard API
     * token, which should only be used server-side.
     */
    value: string;
  }

  /**
   * Configuration for input audio transcription, defaults to off and can be set to
   * `null` to turn off once on. Input audio transcription is not native to the
   * model, since the model consumes audio directly. Transcription runs
   * asynchronously and should be treated as rough guidance rather than the
   * representation understood by the model.
   */
  export interface InputAudioTranscription {
    /**
     * The model to use for transcription.
     */
    model?: string;
  }

  export interface Tool {
    /**
     * The description of the function, including guidance on when and how to call it,
     * and guidance about what to tell the user when calling (if anything).
     */
    description?: string;

    /**
     * The name of the function.
     */
    name?: string;

    /**
     * Parameters of the function in JSON Schema.
     */
    parameters?: unknown;

    /**
     * The type of the tool, i.e. `function`.
     */
    type?: 'function';
  }

  /**
   * Granular configuration for tracing.
   */
  export interface TracingConfiguration {
    /**
     * The group id to attach to this trace to enable filtering and grouping in the
     * traces dashboard.
     */
    group_id?: string;

    /**
     * The arbitrary metadata to attach to this trace to enable filtering in the traces
     * dashboard.
     */
    metadata?: unknown;

    /**
     * The name of the workflow to attach to this trace. This is used to name the trace
     * in the traces dashboard.
     */
    workflow_name?: string;
  }

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  export interface TurnDetection {
    /**
     * Amount of audio to include before the VAD detected speech (in milliseconds).
     * Defaults to 300ms.
     */
    prefix_padding_ms?: number;

    /**
     * Duration of silence to detect speech stop (in milliseconds). Defaults to 500ms.
     * With shorter values the model will respond more quickly, but may jump in on
     * short pauses from the user.
     */
    silence_duration_ms?: number;

    /**
     * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A higher
     * threshold will require louder audio to activate the model, and thus might
     * perform better in noisy environments.
     */
    threshold?: number;

    /**
     * Type of turn detection, only `server_vad` is currently supported.
     */
    type?: string;
  }
}

export interface RealtimeCreateTranscriptionSessionParams {
  /**
   * The set of items to include in the transcription. Current available items are:
   * `item.input_audio_transcription.logprobs`
   */
  include?: Array<'item.input_audio_transcription.logprobs'>;

  /**
   * The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`. For
   * `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate, single channel
   * (mono), and little-endian byte order.
   */
  input_audio_format?: 'pcm16' | 'g711_ulaw' | 'g711_alaw';

  /**
   * Configuration for input audio noise reduction. This can be set to `null` to turn
   * off. Noise reduction filters audio added to the input audio buffer before it is
   * sent to VAD and the model. Filtering the audio can improve VAD and turn
   * detection accuracy (reducing false positives) and model performance by improving
   * perception of the input audio.
   */
  input_audio_noise_reduction?: RealtimeCreateTranscriptionSessionParams.InputAudioNoiseReduction;

  /**
   * Configuration for input audio transcription. The client can optionally set the
   * language and prompt for transcription, these offer additional guidance to the
   * transcription service.
   */
  input_audio_transcription?: AudioTranscription;

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  turn_detection?: RealtimeCreateTranscriptionSessionParams.TurnDetection;
}

export namespace RealtimeCreateTranscriptionSessionParams {
  /**
   * Configuration for input audio noise reduction. This can be set to `null` to turn
   * off. Noise reduction filters audio added to the input audio buffer before it is
   * sent to VAD and the model. Filtering the audio can improve VAD and turn
   * detection accuracy (reducing false positives) and model performance by improving
   * perception of the input audio.
   */
  export interface InputAudioNoiseReduction {
    /**
     * Type of noise reduction. `near_field` is for close-talking microphones such as
     * headphones, `far_field` is for far-field microphones such as laptop or
     * conference room microphones.
     */
    type?: RealtimeAPI.NoiseReductionType;
  }

  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server VAD
   * means that the model will detect the start and end of speech based on audio
   * volume and respond at the end of user speech.
   */
  export interface TurnDetection {
    /**
     * Amount of audio to include before the VAD detected speech (in milliseconds).
     * Defaults to 300ms.
     */
    prefix_padding_ms?: number;

    /**
     * Duration of silence to detect speech stop (in milliseconds). Defaults to 500ms.
     * With shorter values the model will respond more quickly, but may jump in on
     * short pauses from the user.
     */
    silence_duration_ms?: number;

    /**
     * Activation threshold for VAD (0.0 to 1.0), this defaults to 0.5. A higher
     * threshold will require louder audio to activate the model, and thus might
     * perform better in noisy environments.
     */
    threshold?: number;

    /**
     * Type of turn detection. Only `server_vad` is currently supported for
     * transcription sessions.
     */
    type?: 'server_vad';
  }
}

Realtime.Calls = Calls;

export declare namespace Realtime {
  export {
    type AudioTranscription as AudioTranscription,
    type NoiseReductionType as NoiseReductionType,
    type RealtimeFunctionTool as RealtimeFunctionTool,
    type VoiceIDsShared as VoiceIDsShared,
    type RealtimeCreateClientSecretResponse as RealtimeCreateClientSecretResponse,
    type RealtimeCreateSessionResponse as RealtimeCreateSessionResponse,
    type RealtimeCreateTranscriptionSessionResponse as RealtimeCreateTranscriptionSessionResponse,
    type RealtimeCreateClientSecretParams as RealtimeCreateClientSecretParams,
    type RealtimeCreateSessionParams as RealtimeCreateSessionParams,
    type RealtimeCreateTranscriptionSessionParams as RealtimeCreateTranscriptionSessionParams,
  };

  export {
    Calls as Calls,
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
