// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ChatCompletionsAPI from './completions';
import * as AssistantsAPI from '../assistants';
import * as CompletionsAPI from '../completions';
import * as ResponsesAPI from '../responses';
import * as AudioAPI from '../audio/audio';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Completions extends APIResource {
  /**
   * **Starting a new project?** We recommend trying
   * [Responses](/docs/api-reference/responses) to take advantage of the latest
   * OpenAI platform features. Compare
   * [Chat Completions with Responses](/docs/guides/responses-vs-chat-completions?api-mode=responses).
   *
   * ---
   *
   * Creates a model response for the given chat conversation. Learn more in the
   * [text generation](/docs/guides/text-generation), [vision](/docs/guides/vision),
   * and [audio](/docs/guides/audio) guides.
   *
   * Parameter support can differ depending on the model used to generate the
   * response, particularly for newer reasoning models. Parameters that are only
   * supported for reasoning models are noted below. For the current state of
   * unsupported parameters in reasoning models,
   * [refer to the reasoning guide](/docs/guides/reasoning).
   *
   * Returns a chat completion object, or a streamed sequence of chat completion
   * chunk objects if the request is streamed.
   */
  create(params: CompletionCreateParams, options?: RequestOptions): APIPromise<CreateResponse> {
    const { body } = params;
    return this._client.post('/chat/completions', { body: body, ...options });
  }

  /**
   * Get a stored chat completion. Only Chat Completions that have been created with
   * the `store` parameter set to `true` will be returned.
   */
  retrieve(completionID: string, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.get(path`/chat/completions/${completionID}`, options);
  }

  /**
   * Modify a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be modified. Currently, the only
   * supported modification is to update the `metadata` field.
   */
  update(
    completionID: string,
    body: CompletionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CreateResponse> {
    return this._client.post(path`/chat/completions/${completionID}`, { body, ...options });
  }

  /**
   * List stored Chat Completions. Only Chat Completions that have been stored with
   * the `store` parameter set to `true` will be returned.
   */
  list(
    query: CompletionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompletionListResponse> {
    return this._client.get('/chat/completions', { query, ...options });
  }

  /**
   * Delete a stored chat completion. Only Chat Completions that have been created
   * with the `store` parameter set to `true` can be deleted.
   */
  delete(completionID: string, options?: RequestOptions): APIPromise<CompletionDeleteResponse> {
    return this._client.delete(path`/chat/completions/${completionID}`, options);
  }

  /**
   * Get the messages in a stored chat completion. Only Chat Completions that have
   * been created with the `store` parameter set to `true` will be returned.
   */
  listMessages(
    completionID: string,
    query: CompletionListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompletionListMessagesResponse> {
    return this._client.get(path`/chat/completions/${completionID}/messages`, { query, ...options });
  }
}

/**
 * A function tool that can be used to generate a response.
 */
export interface ChatCompletionTool {
  function: AssistantsAPI.FunctionObject;

  /**
   * The type of the tool. Currently, only `function` is supported.
   */
  type: 'function';
}

/**
 * Represents a chat completion response returned by model, based on the provided
 * input.
 */
export interface CreateResponse {
  /**
   * A unique identifier for the chat completion.
   */
  id: string;

  /**
   * A list of chat completion choices. Can be more than one if `n` is greater
   * than 1.
   */
  choices: Array<CreateResponse.Choice>;

  /**
   * The Unix timestamp (in seconds) of when the chat completion was created.
   */
  created: number;

  /**
   * The model used for the chat completion.
   */
  model: string;

  /**
   * The object type, which is always `chat.completion`.
   */
  object: 'chat.completion';

  /**
   * Specifies the processing type used for serving the request.
   *
   * - If set to 'auto', then the request will be processed with the service tier
   *   configured in the Project settings. Unless otherwise configured, the Project
   *   will use 'default'.
   * - If set to 'default', then the request will be processed with the standard
   *   pricing and performance for the selected model.
   * - If set to '[flex](/docs/guides/flex-processing)' or
   *   '[priority](https://openai.com/api-priority-processing/)', then the request
   *   will be processed with the corresponding service tier.
   * - When not set, the default behavior is 'auto'.
   *
   * When the `service_tier` parameter is set, the response body will include the
   * `service_tier` value based on the processing mode actually used to serve the
   * request. This response value may be different from the value set in the
   * parameter.
   */
  service_tier?: ServiceTier | null;

  /**
   * @deprecated This fingerprint represents the backend configuration that the model
   * runs with.
   *
   * Can be used in conjunction with the `seed` request parameter to understand when
   * backend changes have been made that might impact determinism.
   */
  system_fingerprint?: string;

  /**
   * Usage statistics for the completion request.
   */
  usage?: Usage;
}

export namespace CreateResponse {
  export interface Choice {
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model
     * hit a natural stop point or a provided stop sequence, `length` if the maximum
     * number of tokens specified in the request was reached, `content_filter` if
     * content was omitted due to a flag from our content filters, `tool_calls` if the
     * model called a tool, or `function_call` (deprecated) if the model called a
     * function.
     */
    finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';

    /**
     * The index of the choice in the list of choices.
     */
    index: number;

    /**
     * Log probability information for the choice.
     */
    logprobs: Choice.Logprobs | null;

    /**
     * A chat completion message generated by the model.
     */
    message: ChatCompletionsAPI.ResponseMessage;
  }

  export namespace Choice {
    /**
     * Log probability information for the choice.
     */
    export interface Logprobs {
      /**
       * A list of message content tokens with log probability information.
       */
      content: Array<ChatCompletionsAPI.TokenLogprob> | null;

      /**
       * A list of message refusal tokens with log probability information.
       */
      refusal: Array<ChatCompletionsAPI.TokenLogprob> | null;
    }
  }
}

/**
 * Learn about [image inputs](/docs/guides/vision).
 */
export interface ImageContentPart {
  image_url: ImageContentPart.ImageURL;

  /**
   * The type of the content part.
   */
  type: 'image_url';
}

export namespace ImageContentPart {
  export interface ImageURL {
    /**
     * Either a URL of the image or the base64 encoded image data.
     */
    url: string;

    /**
     * Specifies the detail level of the image. Learn more in the
     * [Vision guide](/docs/guides/vision#low-or-high-fidelity-image-understanding).
     */
    detail?: 'auto' | 'low' | 'high';
  }
}

/**
 * JSON object response format. An older method of generating JSON responses. Using
 * `json_schema` is recommended for models that support it. Note that the model
 * will not generate JSON without a system or user message instructing it to do so.
 */
export interface JsonObjectFormat {
  /**
   * The type of response format being defined. Always `json_object`.
   */
  type: 'json_object';
}

/**
 * JSON Schema response format. Used to generate structured JSON responses. Learn
 * more about [Structured Outputs](/docs/guides/structured-outputs).
 */
export interface JsonSchemaFormat {
  /**
   * Structured Outputs configuration options, including a JSON Schema.
   */
  json_schema: JsonSchemaFormat.JsonSchema;

  /**
   * The type of response format being defined. Always `json_schema`.
   */
  type: 'json_schema';
}

export namespace JsonSchemaFormat {
  /**
   * Structured Outputs configuration options, including a JSON Schema.
   */
  export interface JsonSchema {
    /**
     * The name of the response format. Must be a-z, A-Z, 0-9, or contain underscores
     * and dashes, with a maximum length of 64.
     */
    name: string;

    /**
     * A description of what the response format is for, used by the model to determine
     * how to respond in the format.
     */
    description?: string;

    /**
     * The schema for the response format, described as a JSON Schema object. Learn how
     * to build JSON schemas [here](https://json-schema.org/).
     */
    schema?: { [key: string]: unknown };

    /**
     * Whether to enable strict schema adherence when generating the output. If set to
     * true, the model will always follow the exact schema defined in the `schema`
     * field. Only a subset of JSON Schema is supported when `strict` is `true`. To
     * learn more, read the
     * [Structured Outputs guide](/docs/guides/structured-outputs).
     */
    strict?: boolean | null;
  }
}

/**
 * A call to a function tool created by the model.
 */
export type MessageToolCall = MessageToolCall.Function | MessageToolCall.Custom;

export namespace MessageToolCall {
  /**
   * A call to a function tool created by the model.
   */
  export interface Function {
    /**
     * The ID of the tool call.
     */
    id: string;

    /**
     * The function that the model called.
     */
    function: Function.Function;

    /**
     * The type of the tool. Currently, only `function` is supported.
     */
    type: 'function';
  }

  export namespace Function {
    /**
     * The function that the model called.
     */
    export interface Function {
      /**
       * The arguments to call the function with, as generated by the model in JSON
       * format. Note that the model does not always generate valid JSON, and may
       * hallucinate parameters not defined by your function schema. Validate the
       * arguments in your code before calling your function.
       */
      arguments: string;

      /**
       * The name of the function to call.
       */
      name: string;
    }
  }

  /**
   * A call to a custom tool created by the model.
   */
  export interface Custom {
    /**
     * The ID of the tool call.
     */
    id: string;

    /**
     * The custom tool that the model called.
     */
    custom: Custom.Custom;

    /**
     * The type of the tool. Always `custom`.
     */
    type: 'custom';
  }

  export namespace Custom {
    /**
     * The custom tool that the model called.
     */
    export interface Custom {
      /**
       * The input for the custom tool call generated by the model.
       */
      input: string;

      /**
       * The name of the custom tool to call.
       */
      name: string;
    }
  }
}

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful
 * for storing additional information about the object in a structured format, and
 * querying for objects via API or the dashboard.
 *
 * Keys are strings with a maximum length of 64 characters. Values are strings with
 * a maximum length of 512 characters.
 */
export type Metadata = { [key: string]: string };

export interface ModelResponsePropertiesCreate
  extends Omit<ResponsesAPI.ModelResponsePropertiesStandard, 'top_logprobs'> {
  /**
   * An integer between 0 and 20 specifying the number of most likely tokens to
   * return at each token position, each with an associated log probability.
   */
  top_logprobs?: number;
}

/**
 * A chat completion message generated by the model.
 */
export interface ResponseMessage {
  /**
   * The contents of the message.
   */
  content: string | null;

  /**
   * The refusal message generated by the model.
   */
  refusal: string | null;

  /**
   * The role of the author of this message.
   */
  role: 'assistant';

  /**
   * Annotations for the message, when applicable, as when using the
   * [web search tool](/docs/guides/tools-web-search?api-mode=chat).
   */
  annotations?: Array<ResponseMessage.Annotation>;

  /**
   * If the audio output modality is requested, this object contains data about the
   * audio response from the model. [Learn more](/docs/guides/audio).
   */
  audio?: ResponseMessage.Audio | null;

  /**
   * @deprecated Deprecated and replaced by `tool_calls`. The name and arguments of a
   * function that should be called, as generated by the model.
   */
  function_call?: ResponseMessage.FunctionCall;

  /**
   * The tool calls generated by the model, such as function calls.
   */
  tool_calls?: Array<MessageToolCall>;
}

export namespace ResponseMessage {
  /**
   * A URL citation when using web search.
   */
  export interface Annotation {
    /**
     * The type of the URL citation. Always `url_citation`.
     */
    type: 'url_citation';

    /**
     * A URL citation when using web search.
     */
    url_citation: Annotation.URLCitation;
  }

  export namespace Annotation {
    /**
     * A URL citation when using web search.
     */
    export interface URLCitation {
      /**
       * The index of the last character of the URL citation in the message.
       */
      end_index: number;

      /**
       * The index of the first character of the URL citation in the message.
       */
      start_index: number;

      /**
       * The title of the web resource.
       */
      title: string;

      /**
       * The URL of the web resource.
       */
      url: string;
    }
  }

  /**
   * If the audio output modality is requested, this object contains data about the
   * audio response from the model. [Learn more](/docs/guides/audio).
   */
  export interface Audio {
    /**
     * Unique identifier for this audio response.
     */
    id: string;

    /**
     * Base64 encoded audio bytes generated by the model, in the format specified in
     * the request.
     */
    data: string;

    /**
     * The Unix timestamp (in seconds) for when this audio response will no longer be
     * accessible on the server for use in multi-turn conversations.
     */
    expires_at: number;

    /**
     * Transcript of the audio generated by the model.
     */
    transcript: string;
  }

  /**
   * @deprecated Deprecated and replaced by `tool_calls`. The name and arguments of a
   * function that should be called, as generated by the model.
   */
  export interface FunctionCall {
    /**
     * The arguments to call the function with, as generated by the model in JSON
     * format. Note that the model does not always generate valid JSON, and may
     * hallucinate parameters not defined by your function schema. Validate the
     * arguments in your code before calling your function.
     */
    arguments: string;

    /**
     * The name of the function to call.
     */
    name: string;
  }
}

/**
 * Specifies the processing type used for serving the request.
 *
 * - If set to 'auto', then the request will be processed with the service tier
 *   configured in the Project settings. Unless otherwise configured, the Project
 *   will use 'default'.
 * - If set to 'default', then the request will be processed with the standard
 *   pricing and performance for the selected model.
 * - If set to '[flex](/docs/guides/flex-processing)' or
 *   '[priority](https://openai.com/api-priority-processing/)', then the request
 *   will be processed with the corresponding service tier.
 * - When not set, the default behavior is 'auto'.
 *
 * When the `service_tier` parameter is set, the response body will include the
 * `service_tier` value based on the processing mode actually used to serve the
 * request. This response value may be different from the value set in the
 * parameter.
 */
export type ServiceTier = 'auto' | 'default' | 'flex' | 'scale' | 'priority' | null;

export type SharedModelIDs =
  | (string & {})
  | 'gpt-5.2'
  | 'gpt-5.2-2025-12-11'
  | 'gpt-5.2-chat-latest'
  | 'gpt-5.2-pro'
  | 'gpt-5.2-pro-2025-12-11'
  | 'gpt-5.1'
  | 'gpt-5.1-2025-11-13'
  | 'gpt-5.1-codex'
  | 'gpt-5.1-mini'
  | 'gpt-5.1-chat-latest'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-5-2025-08-07'
  | 'gpt-5-mini-2025-08-07'
  | 'gpt-5-nano-2025-08-07'
  | 'gpt-5-chat-latest'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4.1-2025-04-14'
  | 'gpt-4.1-mini-2025-04-14'
  | 'gpt-4.1-nano-2025-04-14'
  | 'o4-mini'
  | 'o4-mini-2025-04-16'
  | 'o3'
  | 'o3-2025-04-16'
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
  | 'o1-preview'
  | 'o1-preview-2024-09-12'
  | 'o1-mini'
  | 'o1-mini-2024-09-12'
  | 'gpt-4o'
  | 'gpt-4o-2024-11-20'
  | 'gpt-4o-2024-08-06'
  | 'gpt-4o-2024-05-13'
  | 'gpt-4o-audio-preview'
  | 'gpt-4o-audio-preview-2024-10-01'
  | 'gpt-4o-audio-preview-2024-12-17'
  | 'gpt-4o-audio-preview-2025-06-03'
  | 'gpt-4o-mini-audio-preview'
  | 'gpt-4o-mini-audio-preview-2024-12-17'
  | 'gpt-4o-search-preview'
  | 'gpt-4o-mini-search-preview'
  | 'gpt-4o-search-preview-2025-03-11'
  | 'gpt-4o-mini-search-preview-2025-03-11'
  | 'chatgpt-4o-latest'
  | 'codex-mini-latest'
  | 'gpt-4o-mini'
  | 'gpt-4o-mini-2024-07-18'
  | 'gpt-4-turbo'
  | 'gpt-4-turbo-2024-04-09'
  | 'gpt-4-0125-preview'
  | 'gpt-4-turbo-preview'
  | 'gpt-4-1106-preview'
  | 'gpt-4-vision-preview'
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-16k'
  | 'gpt-3.5-turbo-0301'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-1106'
  | 'gpt-3.5-turbo-0125'
  | 'gpt-3.5-turbo-16k-0613';

/**
 * Learn about [text inputs](/docs/guides/text-generation).
 */
export interface TextContentPart {
  /**
   * The text content.
   */
  text: string;

  /**
   * The type of the content part.
   */
  type: 'text';
}

/**
 * Default response format. Used to generate text responses.
 */
export interface TextFormat {
  /**
   * The type of response format being defined. Always `text`.
   */
  type: 'text';
}

export interface TokenLogprob {
  /**
   * The token.
   */
  token: string;

  /**
   * A list of integers representing the UTF-8 bytes representation of the token.
   * Useful in instances where characters are represented by multiple tokens and
   * their byte representations must be combined to generate the correct text
   * representation. Can be `null` if there is no bytes representation for the token.
   */
  bytes: Array<number> | null;

  /**
   * The log probability of this token, if it is within the top 20 most likely
   * tokens. Otherwise, the value `-9999.0` is used to signify that the token is very
   * unlikely.
   */
  logprob: number;

  /**
   * List of the most likely tokens and their log probability, at this token
   * position. In rare cases, there may be fewer than the number of requested
   * `top_logprobs` returned.
   */
  top_logprobs: Array<TokenLogprob.TopLogprob>;
}

export namespace TokenLogprob {
  export interface TopLogprob {
    /**
     * The token.
     */
    token: string;

    /**
     * A list of integers representing the UTF-8 bytes representation of the token.
     * Useful in instances where characters are represented by multiple tokens and
     * their byte representations must be combined to generate the correct text
     * representation. Can be `null` if there is no bytes representation for the token.
     */
    bytes: Array<number> | null;

    /**
     * The log probability of this token, if it is within the top 20 most likely
     * tokens. Otherwise, the value `-9999.0` is used to signify that the token is very
     * unlikely.
     */
    logprob: number;
  }
}

/**
 * Usage statistics for the completion request.
 */
export interface Usage {
  /**
   * Number of tokens in the generated completion.
   */
  completion_tokens: number;

  /**
   * Number of tokens in the prompt.
   */
  prompt_tokens: number;

  /**
   * Total number of tokens used in the request (prompt + completion).
   */
  total_tokens: number;

  /**
   * Breakdown of tokens used in a completion.
   */
  completion_tokens_details?: Usage.CompletionTokensDetails;

  /**
   * Breakdown of tokens used in the prompt.
   */
  prompt_tokens_details?: Usage.PromptTokensDetails;
}

export namespace Usage {
  /**
   * Breakdown of tokens used in a completion.
   */
  export interface CompletionTokensDetails {
    /**
     * When using Predicted Outputs, the number of tokens in the prediction that
     * appeared in the completion.
     */
    accepted_prediction_tokens?: number;

    /**
     * Audio input tokens generated by the model.
     */
    audio_tokens?: number;

    /**
     * Tokens generated by the model for reasoning.
     */
    reasoning_tokens?: number;

    /**
     * When using Predicted Outputs, the number of tokens in the prediction that did
     * not appear in the completion. However, like reasoning tokens, these tokens are
     * still counted in the total completion tokens for purposes of billing, output,
     * and context window limits.
     */
    rejected_prediction_tokens?: number;
  }

  /**
   * Breakdown of tokens used in the prompt.
   */
  export interface PromptTokensDetails {
    /**
     * Audio input tokens present in the prompt.
     */
    audio_tokens?: number;

    /**
     * Cached tokens present in the prompt.
     */
    cached_tokens?: number;
  }
}

/**
 * Constrains the verbosity of the model's response. Lower values will result in
 * more concise responses, while higher values will result in more verbose
 * responses. Currently supported values are `low`, `medium`, and `high`.
 */
export type Verbosity = 'low' | 'medium' | 'high' | null;

/**
 * An object representing a list of Chat Completions.
 */
export interface CompletionListResponse {
  /**
   * An array of chat completion objects.
   */
  data: Array<CreateResponse>;

  /**
   * The identifier of the first chat completion in the data array.
   */
  first_id: string;

  /**
   * Indicates whether there are more Chat Completions available.
   */
  has_more: boolean;

  /**
   * The identifier of the last chat completion in the data array.
   */
  last_id: string;

  /**
   * The type of this object. It is always set to "list".
   */
  object: 'list';
}

export interface CompletionDeleteResponse {
  /**
   * The ID of the chat completion that was deleted.
   */
  id: string;

  /**
   * Whether the chat completion was deleted.
   */
  deleted: boolean;

  /**
   * The type of object being deleted.
   */
  object: 'chat.completion.deleted';
}

/**
 * An object representing a list of chat completion messages.
 */
export interface CompletionListMessagesResponse {
  /**
   * An array of chat completion message objects.
   */
  data: Array<CompletionListMessagesResponse.Data>;

  /**
   * The identifier of the first chat message in the data array.
   */
  first_id: string;

  /**
   * Indicates whether there are more chat messages available.
   */
  has_more: boolean;

  /**
   * The identifier of the last chat message in the data array.
   */
  last_id: string;

  /**
   * The type of this object. It is always set to "list".
   */
  object: 'list';
}

export namespace CompletionListMessagesResponse {
  /**
   * A chat completion message generated by the model.
   */
  export interface Data extends ChatCompletionsAPI.ResponseMessage {
    /**
     * The identifier of the chat message.
     */
    id: string;

    /**
     * If a content parts array was provided, this is an array of `text` and
     * `image_url` parts. Otherwise, null.
     */
    content_parts?: Array<ChatCompletionsAPI.TextContentPart | ChatCompletionsAPI.ImageContentPart> | null;
  }
}

export interface CompletionCreateParams {
  body: CompletionCreateParams.Body;
}

export namespace CompletionCreateParams {
  export interface Body extends ChatCompletionsAPI.ModelResponsePropertiesCreate {
    /**
     * A list of messages comprising the conversation so far. Depending on the
     * [model](/docs/models) you use, different message types (modalities) are
     * supported, like [text](/docs/guides/text-generation),
     * [images](/docs/guides/vision), and [audio](/docs/guides/audio).
     */
    messages: Array<Body.Developer | Body.System | Body.User | Body.Assistant | Body.Tool | Body.Function>;

    /**
     * Model ID used to generate the response, like `gpt-4o` or `o3`. OpenAI offers a
     * wide range of models with different capabilities, performance characteristics,
     * and price points. Refer to the [model guide](/docs/models) to browse and compare
     * available models.
     */
    model: ChatCompletionsAPI.SharedModelIDs;

    /**
     * Parameters for audio output. Required when audio output is requested with
     * `modalities: ["audio"]`. [Learn more](/docs/guides/audio).
     */
    audio?: Body.Audio | null;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on their
     * existing frequency in the text so far, decreasing the model's likelihood to
     * repeat the same line verbatim.
     */
    frequency_penalty?: number | null;

    /**
     * @deprecated Deprecated in favor of `tool_choice`.
     *
     * Controls which (if any) function is called by the model.
     *
     * `none` means the model will not call a function and instead generates a message.
     *
     * `auto` means the model can pick between generating a message or calling a
     * function.
     *
     * Specifying a particular function via `{"name": "my_function"}` forces the model
     * to call that function.
     *
     * `none` is the default when no functions are present. `auto` is the default if
     * functions are present.
     */
    function_call?: 'none' | 'auto' | Body.ChatCompletionFunctionCallOption;

    /**
     * @deprecated Deprecated in favor of `tools`.
     *
     * A list of functions the model may generate JSON inputs for.
     */
    functions?: Array<Body.Function>;

    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     *
     * Accepts a JSON object that maps tokens (specified by their token ID in the
     * tokenizer) to an associated bias value from -100 to 100. Mathematically, the
     * bias is added to the logits generated by the model prior to sampling. The exact
     * effect will vary per model, but values between -1 and 1 should decrease or
     * increase likelihood of selection; values like -100 or 100 should result in a ban
     * or exclusive selection of the relevant token.
     */
    logit_bias?: { [key: string]: number } | null;

    /**
     * Whether to return log probabilities of the output tokens or not. If true,
     * returns the log probabilities of each output token returned in the `content` of
     * `message`.
     */
    logprobs?: boolean | null;

    /**
     * An upper bound for the number of tokens that can be generated for a completion,
     * including visible output tokens and [reasoning tokens](/docs/guides/reasoning).
     */
    max_completion_tokens?: number | null;

    /**
     * @deprecated The maximum number of [tokens](/tokenizer) that can be generated in
     * the chat completion. This value can be used to control
     * [costs](https://openai.com/api/pricing/) for text generated via API.
     *
     * This value is now deprecated in favor of `max_completion_tokens`, and is not
     * compatible with [o-series models](/docs/guides/reasoning).
     */
    max_tokens?: number | null;

    /**
     * Output types that you would like the model to generate. Most models are capable
     * of generating text, which is the default:
     *
     * `["text"]`
     *
     * The `gpt-4o-audio-preview` model can also be used to
     * [generate audio](/docs/guides/audio). To request that this model generate both
     * text and audio responses, you can use:
     *
     * `["text", "audio"]`
     */
    modalities?: Array<'text' | 'audio'> | null;

    /**
     * How many chat completion choices to generate for each input message. Note that
     * you will be charged based on the number of generated tokens across all of the
     * choices. Keep `n` as `1` to minimize costs.
     */
    n?: number | null;

    /**
     * Whether to enable
     * [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling)
     * during tool use.
     */
    parallel_tool_calls?: boolean;

    /**
     * Static predicted output content, such as the content of a text file that is
     * being regenerated.
     */
    prediction?: Body.Prediction | null;

    /**
     * Number between -2.0 and 2.0. Positive values penalize new tokens based on
     * whether they appear in the text so far, increasing the model's likelihood to
     * talk about new topics.
     */
    presence_penalty?: number | null;

    /**
     * Constrains effort on reasoning for
     * [reasoning models](https://platform.openai.com/docs/guides/reasoning). Currently
     * supported values are `none`, `minimal`, `low`, `medium`, `high`, and `xhigh`.
     * Reducing reasoning effort can result in faster responses and fewer tokens used
     * on reasoning in a response.
     *
     * - `gpt-5.1` defaults to `none`, which does not perform reasoning. The supported
     *   reasoning values for `gpt-5.1` are `none`, `low`, `medium`, and `high`. Tool
     *   calls are supported for all reasoning values in gpt-5.1.
     * - All models before `gpt-5.1` default to `medium` reasoning effort, and do not
     *   support `none`.
     * - The `gpt-5-pro` model defaults to (and only supports) `high` reasoning effort.
     * - `xhigh` is supported for all models after `gpt-5.1-codex-max`.
     */
    reasoning_effort?: AssistantsAPI.ReasoningEffort | null;

    /**
     * An object specifying the format that the model must output.
     *
     * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
     * Outputs which ensures the model will match your supplied JSON schema. Learn more
     * in the [Structured Outputs guide](/docs/guides/structured-outputs).
     *
     * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
     * ensures the message the model generates is valid JSON. Using `json_schema` is
     * preferred for models that support it.
     */
    response_format?:
      | ChatCompletionsAPI.TextFormat
      | ChatCompletionsAPI.JsonSchemaFormat
      | ChatCompletionsAPI.JsonObjectFormat;

    /**
     * @deprecated This feature is in Beta. If specified, our system will make a best
     * effort to sample deterministically, such that repeated requests with the same
     * `seed` and parameters should return the same result. Determinism is not
     * guaranteed, and you should refer to the `system_fingerprint` response parameter
     * to monitor changes in the backend.
     */
    seed?: number | null;

    /**
     * Not supported with latest reasoning models `o3` and `o4-mini`.
     *
     * Up to 4 sequences where the API will stop generating further tokens. The
     * returned text will not contain the stop sequence.
     */
    stop?: CompletionsAPI.StopConfiguration | null;

    /**
     * Whether or not to store the output of this chat completion request for use in
     * our [model distillation](/docs/guides/distillation) or
     * [evals](/docs/guides/evals) products.
     *
     * Supports text and image inputs. Note: image inputs over 8MB will be dropped.
     */
    store?: boolean | null;

    /**
     * If set to true, the model response data will be streamed to the client as it is
     * generated using
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format).
     * See the [Streaming section below](/docs/api-reference/chat/streaming) for more
     * information, along with the
     * [streaming responses](/docs/guides/streaming-responses) guide for more
     * information on how to handle the streaming events.
     */
    stream?: boolean | null;

    /**
     * Options for streaming response. Only set this when you set `stream: true`.
     */
    stream_options?: CompletionsAPI.ChatCompletionStreamOptions | null;

    /**
     * Controls which (if any) tool is called by the model. `none` means the model will
     * not call any tool and instead generates a message. `auto` means the model can
     * pick between generating a message or calling one or more tools. `required` means
     * the model must call one or more tools. Specifying a particular tool via
     * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
     * call that tool.
     *
     * `none` is the default when no tools are present. `auto` is the default if tools
     * are present.
     */
    tool_choice?:
      | 'none'
      | 'auto'
      | 'required'
      | Body.ChatCompletionAllowedToolsChoice
      | Body.ChatCompletionNamedToolChoice
      | Body.ChatCompletionNamedToolChoiceCustom;

    /**
     * A list of tools the model may call. You can provide either
     * [custom tools](/docs/guides/function-calling#custom-tools) or
     * [function tools](/docs/guides/function-calling).
     */
    tools?: Array<ChatCompletionsAPI.ChatCompletionTool | Body.CustomToolChatCompletions>;

    /**
     * An integer between 0 and 20 specifying the number of most likely tokens to
     * return at each token position, each with an associated log probability.
     * `logprobs` must be set to `true` if this parameter is used.
     */
    top_logprobs?: number | null;

    /**
     * Constrains the verbosity of the model's response. Lower values will result in
     * more concise responses, while higher values will result in more verbose
     * responses. Currently supported values are `low`, `medium`, and `high`.
     */
    verbosity?: ChatCompletionsAPI.Verbosity | null;

    /**
     * This tool searches the web for relevant results to use in a response. Learn more
     * about the [web search tool](/docs/guides/tools-web-search?api-mode=chat).
     */
    web_search_options?: Body.WebSearchOptions;
  }

  export namespace Body {
    /**
     * Developer-provided instructions that the model should follow, regardless of
     * messages sent by the user. With o1 models and newer, `developer` messages
     * replace the previous `system` messages.
     */
    export interface Developer {
      /**
       * The contents of the developer message.
       */
      content: string | Array<ChatCompletionsAPI.TextContentPart>;

      /**
       * The role of the messages author, in this case `developer`.
       */
      role: 'developer';

      /**
       * An optional name for the participant. Provides the model information to
       * differentiate between participants of the same role.
       */
      name?: string;
    }

    /**
     * Developer-provided instructions that the model should follow, regardless of
     * messages sent by the user. With o1 models and newer, use `developer` messages
     * for this purpose instead.
     */
    export interface System {
      /**
       * The contents of the system message.
       */
      content: string | Array<ChatCompletionsAPI.TextContentPart>;

      /**
       * The role of the messages author, in this case `system`.
       */
      role: 'system';

      /**
       * An optional name for the participant. Provides the model information to
       * differentiate between participants of the same role.
       */
      name?: string;
    }

    /**
     * Messages sent by an end user, containing prompts or additional context
     * information.
     */
    export interface User {
      /**
       * The contents of the user message.
       */
      content:
        | string
        | Array<
            | ChatCompletionsAPI.TextContentPart
            | ChatCompletionsAPI.ImageContentPart
            | User.ChatCompletionRequestMessageContentPartAudio
            | User.ChatCompletionRequestMessageContentPartFile
          >;

      /**
       * The role of the messages author, in this case `user`.
       */
      role: 'user';

      /**
       * An optional name for the participant. Provides the model information to
       * differentiate between participants of the same role.
       */
      name?: string;
    }

    export namespace User {
      /**
       * Learn about [audio inputs](/docs/guides/audio).
       */
      export interface ChatCompletionRequestMessageContentPartAudio {
        input_audio: ChatCompletionRequestMessageContentPartAudio.InputAudio;

        /**
         * The type of the content part. Always `input_audio`.
         */
        type: 'input_audio';
      }

      export namespace ChatCompletionRequestMessageContentPartAudio {
        export interface InputAudio {
          /**
           * Base64 encoded audio data.
           */
          data: string;

          /**
           * The format of the encoded audio data. Currently supports "wav" and "mp3".
           */
          format: 'wav' | 'mp3';
        }
      }

      /**
       * Learn about [file inputs](/docs/guides/text) for text generation.
       */
      export interface ChatCompletionRequestMessageContentPartFile {
        file: ChatCompletionRequestMessageContentPartFile.File;

        /**
         * The type of the content part. Always `file`.
         */
        type: 'file';
      }

      export namespace ChatCompletionRequestMessageContentPartFile {
        export interface File {
          /**
           * The base64 encoded file data, used when passing the file to the model as a
           * string.
           */
          file_data?: string;

          /**
           * The ID of an uploaded file to use as input.
           */
          file_id?: string;

          /**
           * The name of the file, used when passing the file to the model as a string.
           */
          filename?: string;
        }
      }
    }

    /**
     * Messages sent by the model in response to user messages.
     */
    export interface Assistant {
      /**
       * The role of the messages author, in this case `assistant`.
       */
      role: 'assistant';

      /**
       * Data about a previous audio response from the model.
       * [Learn more](/docs/guides/audio).
       */
      audio?: Assistant.Audio | null;

      /**
       * The contents of the assistant message. Required unless `tool_calls` or
       * `function_call` is specified.
       */
      content?: string | Array<ChatCompletionsAPI.TextContentPart | Assistant.Refusal> | null;

      /**
       * @deprecated Deprecated and replaced by `tool_calls`. The name and arguments of a
       * function that should be called, as generated by the model.
       */
      function_call?: Assistant.FunctionCall | null;

      /**
       * An optional name for the participant. Provides the model information to
       * differentiate between participants of the same role.
       */
      name?: string;

      /**
       * The refusal message by the assistant.
       */
      refusal?: string | null;

      /**
       * The tool calls generated by the model, such as function calls.
       */
      tool_calls?: Array<ChatCompletionsAPI.MessageToolCall>;
    }

    export namespace Assistant {
      /**
       * Data about a previous audio response from the model.
       * [Learn more](/docs/guides/audio).
       */
      export interface Audio {
        /**
         * Unique identifier for a previous audio response from the model.
         */
        id: string;
      }

      export interface Refusal {
        /**
         * The refusal message generated by the model.
         */
        refusal: string;

        /**
         * The type of the content part.
         */
        type: 'refusal';
      }

      /**
       * @deprecated Deprecated and replaced by `tool_calls`. The name and arguments of a
       * function that should be called, as generated by the model.
       */
      export interface FunctionCall {
        /**
         * The arguments to call the function with, as generated by the model in JSON
         * format. Note that the model does not always generate valid JSON, and may
         * hallucinate parameters not defined by your function schema. Validate the
         * arguments in your code before calling your function.
         */
        arguments: string;

        /**
         * The name of the function to call.
         */
        name: string;
      }
    }

    export interface Tool {
      /**
       * The contents of the tool message.
       */
      content: string | Array<ChatCompletionsAPI.TextContentPart>;

      /**
       * The role of the messages author, in this case `tool`.
       */
      role: 'tool';

      /**
       * Tool call that this message is responding to.
       */
      tool_call_id: string;
    }

    /**
     * @deprecated
     */
    export interface Function {
      /**
       * The contents of the function message.
       */
      content: string | null;

      /**
       * The name of the function to call.
       */
      name: string;

      /**
       * The role of the messages author, in this case `function`.
       */
      role: 'function';
    }

    /**
     * Parameters for audio output. Required when audio output is requested with
     * `modalities: ["audio"]`. [Learn more](/docs/guides/audio).
     */
    export interface Audio {
      /**
       * Specifies the output audio format. Must be one of `wav`, `mp3`, `flac`, `opus`,
       * or `pcm16`.
       */
      format: 'wav' | 'aac' | 'mp3' | 'flac' | 'opus' | 'pcm16';

      /**
       * The voice the model uses to respond. Supported built-in voices are `alloy`,
       * `ash`, `ballad`, `coral`, `echo`, `fable`, `nova`, `onyx`, `sage`, `shimmer`,
       * `marin`, and `cedar`. You may also provide a custom voice object with an `id`,
       * for example `{ "id": "voice_1234" }`.
       */
      voice: AudioAPI.VoiceIDsOrCustomVoice;
    }

    /**
     * Specifying a particular function via `{"name": "my_function"}` forces the model
     * to call that function.
     */
    export interface ChatCompletionFunctionCallOption {
      /**
       * The name of the function to call.
       */
      name: string;
    }

    /**
     * @deprecated
     */
    export interface Function {
      /**
       * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain
       * underscores and dashes, with a maximum length of 64.
       */
      name: string;

      /**
       * A description of what the function does, used by the model to choose when and
       * how to call the function.
       */
      description?: string;

      /**
       * The parameters the functions accepts, described as a JSON Schema object. See the
       * [guide](/docs/guides/function-calling) for examples, and the
       * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for
       * documentation about the format.
       *
       * Omitting `parameters` defines a function with an empty parameter list.
       */
      parameters?: { [key: string]: unknown };
    }

    /**
     * Static predicted output content, such as the content of a text file that is
     * being regenerated.
     */
    export interface Prediction {
      /**
       * The content that should be matched when generating a model response. If
       * generated tokens would match this content, the entire model response can be
       * returned much more quickly.
       */
      content: string | Array<ChatCompletionsAPI.TextContentPart>;

      /**
       * The type of the predicted content you want to provide. This type is currently
       * always `content`.
       */
      type: 'content';
    }

    /**
     * Constrains the tools available to the model to a pre-defined set.
     */
    export interface ChatCompletionAllowedToolsChoice {
      /**
       * Constrains the tools available to the model to a pre-defined set.
       */
      allowed_tools: ChatCompletionAllowedToolsChoice.AllowedTools;

      /**
       * Allowed tool configuration type. Always `allowed_tools`.
       */
      type: 'allowed_tools';
    }

    export namespace ChatCompletionAllowedToolsChoice {
      /**
       * Constrains the tools available to the model to a pre-defined set.
       */
      export interface AllowedTools {
        /**
         * Constrains the tools available to the model to a pre-defined set.
         *
         * `auto` allows the model to pick from among the allowed tools and generate a
         * message.
         *
         * `required` requires the model to call one or more of the allowed tools.
         */
        mode: 'auto' | 'required';

        /**
         * A list of tool definitions that the model should be allowed to call.
         *
         * For the Chat Completions API, the list of tool definitions might look like:
         *
         * ```json
         * [
         *   { "type": "function", "function": { "name": "get_weather" } },
         *   { "type": "function", "function": { "name": "get_time" } }
         * ]
         * ```
         */
        tools: Array<{ [key: string]: unknown }>;
      }
    }

    /**
     * Specifies a tool the model should use. Use to force the model to call a specific
     * function.
     */
    export interface ChatCompletionNamedToolChoice {
      function: ChatCompletionNamedToolChoice.Function;

      /**
       * For function calling, the type is always `function`.
       */
      type: 'function';
    }

    export namespace ChatCompletionNamedToolChoice {
      export interface Function {
        /**
         * The name of the function to call.
         */
        name: string;
      }
    }

    /**
     * Specifies a tool the model should use. Use to force the model to call a specific
     * custom tool.
     */
    export interface ChatCompletionNamedToolChoiceCustom {
      custom: ChatCompletionNamedToolChoiceCustom.Custom;

      /**
       * For custom tool calling, the type is always `custom`.
       */
      type: 'custom';
    }

    export namespace ChatCompletionNamedToolChoiceCustom {
      export interface Custom {
        /**
         * The name of the custom tool to call.
         */
        name: string;
      }
    }

    /**
     * A custom tool that processes input using a specified format.
     */
    export interface CustomToolChatCompletions {
      /**
       * Properties of the custom tool.
       */
      custom: CustomToolChatCompletions.Custom;

      /**
       * The type of the custom tool. Always `custom`.
       */
      type: 'custom';
    }

    export namespace CustomToolChatCompletions {
      /**
       * Properties of the custom tool.
       */
      export interface Custom {
        /**
         * The name of the custom tool, used to identify it in tool calls.
         */
        name: string;

        /**
         * Optional description of the custom tool, used to provide more context.
         */
        description?: string;

        /**
         * The input format for the custom tool. Default is unconstrained text.
         */
        format?: Custom.TextFormat | Custom.GrammarFormat;
      }

      export namespace Custom {
        /**
         * Unconstrained free-form text.
         */
        export interface TextFormat {
          /**
           * Unconstrained text format. Always `text`.
           */
          type: 'text';
        }

        /**
         * A grammar defined by the user.
         */
        export interface GrammarFormat {
          /**
           * Your chosen grammar.
           */
          grammar: GrammarFormat.Grammar;

          /**
           * Grammar format. Always `grammar`.
           */
          type: 'grammar';
        }

        export namespace GrammarFormat {
          /**
           * Your chosen grammar.
           */
          export interface Grammar {
            /**
             * The grammar definition.
             */
            definition: string;

            /**
             * The syntax of the grammar definition. One of `lark` or `regex`.
             */
            syntax: 'lark' | 'regex';
          }
        }
      }
    }

    /**
     * This tool searches the web for relevant results to use in a response. Learn more
     * about the [web search tool](/docs/guides/tools-web-search?api-mode=chat).
     */
    export interface WebSearchOptions {
      /**
       * High level guidance for the amount of context window space to use for the
       * search. One of `low`, `medium`, or `high`. `medium` is the default.
       */
      search_context_size?: 'low' | 'medium' | 'high';

      /**
       * Approximate location parameters for the search.
       */
      user_location?: WebSearchOptions.UserLocation | null;
    }

    export namespace WebSearchOptions {
      /**
       * Approximate location parameters for the search.
       */
      export interface UserLocation {
        /**
         * Approximate location parameters for the search.
         */
        approximate: UserLocation.Approximate;

        /**
         * The type of location approximation. Always `approximate`.
         */
        type: 'approximate';
      }

      export namespace UserLocation {
        /**
         * Approximate location parameters for the search.
         */
        export interface Approximate {
          /**
           * Free text input for the city of the user, e.g. `San Francisco`.
           */
          city?: string;

          /**
           * The two-letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1) of
           * the user, e.g. `US`.
           */
          country?: string;

          /**
           * Free text input for the region of the user, e.g. `California`.
           */
          region?: string;

          /**
           * The [IANA timezone](https://timeapi.io/documentation/iana-timezones) of the
           * user, e.g. `America/Los_Angeles`.
           */
          timezone?: string;
        }
      }
    }
  }
}

export interface CompletionUpdateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata: Metadata | null;
}

export interface CompletionListParams {
  /**
   * Identifier for the last chat completion from the previous pagination request.
   */
  after?: string;

  /**
   * Number of Chat Completions to retrieve.
   */
  limit?: number;

  /**
   * A list of metadata keys to filter the Chat Completions by. Example:
   *
   * `metadata[key1]=value1&metadata[key2]=value2`
   */
  metadata?: Metadata | null;

  /**
   * The model used to generate the Chat Completions.
   */
  model?: string;

  /**
   * Sort order for Chat Completions by timestamp. Use `asc` for ascending order or
   * `desc` for descending order. Defaults to `asc`.
   */
  order?: 'asc' | 'desc';
}

export interface CompletionListMessagesParams {
  /**
   * Identifier for the last message from the previous pagination request.
   */
  after?: string;

  /**
   * Number of messages to retrieve.
   */
  limit?: number;

  /**
   * Sort order for messages by timestamp. Use `asc` for ascending order or `desc`
   * for descending order. Defaults to `asc`.
   */
  order?: 'asc' | 'desc';
}

export declare namespace Completions {
  export {
    type ChatCompletionTool as ChatCompletionTool,
    type CreateResponse as CreateResponse,
    type ImageContentPart as ImageContentPart,
    type JsonObjectFormat as JsonObjectFormat,
    type JsonSchemaFormat as JsonSchemaFormat,
    type MessageToolCall as MessageToolCall,
    type Metadata as Metadata,
    type ModelResponsePropertiesCreate as ModelResponsePropertiesCreate,
    type ResponseMessage as ResponseMessage,
    type ServiceTier as ServiceTier,
    type SharedModelIDs as SharedModelIDs,
    type TextContentPart as TextContentPart,
    type TextFormat as TextFormat,
    type TokenLogprob as TokenLogprob,
    type Usage as Usage,
    type Verbosity as Verbosity,
    type CompletionListResponse as CompletionListResponse,
    type CompletionDeleteResponse as CompletionDeleteResponse,
    type CompletionListMessagesResponse as CompletionListMessagesResponse,
    type CompletionCreateParams as CompletionCreateParams,
    type CompletionUpdateParams as CompletionUpdateParams,
    type CompletionListParams as CompletionListParams,
    type CompletionListMessagesParams as CompletionListMessagesParams,
  };
}
