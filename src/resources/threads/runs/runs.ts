// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantsAPI from '../../assistants';
import * as CompletionsAPI from '../../chat/completions';
import * as MessagesAPI from '../messages';
import * as ThreadsAPI from '../threads';
import * as StepsAPI from './steps';
import { RunStepObject, StepListParams, StepListResponse, StepRetrieveParams, Steps } from './steps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Runs extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Create a thread and run it in one request.
   *
   * @example
   * ```ts
   * const runObject = await client.threads.runs.create({
   *   assistant_id: 'assistant_id',
   * });
   * ```
   */
  create(body: RunCreateParams, options?: RequestOptions): APIPromise<RunObject> {
    return this._client.post('/threads/runs', { body, ...options });
  }

  /**
   * Retrieves a run.
   *
   * @example
   * ```ts
   * const runObject = await client.threads.runs.retrieve(
   *   'run_id',
   *   { thread_id: 'thread_id' },
   * );
   * ```
   */
  retrieve(runID: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<RunObject> {
    const { thread_id } = params;
    return this._client.get(path`/threads/${thread_id}/runs/${runID}`, options);
  }

  /**
   * Modifies a run.
   *
   * @example
   * ```ts
   * const runObject = await client.threads.runs.update(
   *   'run_id',
   *   { thread_id: 'thread_id' },
   * );
   * ```
   */
  update(runID: string, params: RunUpdateParams, options?: RequestOptions): APIPromise<RunObject> {
    const { thread_id, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}`, { body, ...options });
  }

  /**
   * Returns a list of runs belonging to a thread.
   *
   * @example
   * ```ts
   * const runs = await client.threads.runs.list('thread_id');
   * ```
   */
  list(
    threadID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/threads/${threadID}/runs`, { query, ...options });
  }

  /**
   * Cancels a run that is `in_progress`.
   *
   * @example
   * ```ts
   * const runObject = await client.threads.runs.cancel(
   *   'run_id',
   *   { thread_id: 'thread_id' },
   * );
   * ```
   */
  cancel(runID: string, params: RunCancelParams, options?: RequestOptions): APIPromise<RunObject> {
    const { thread_id } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}/cancel`, options);
  }

  /**
   * Create a run.
   *
   * @example
   * ```ts
   * const runObject = await client.threads.runs.createRun(
   *   'thread_id',
   *   { assistant_id: 'assistant_id' },
   * );
   * ```
   */
  createRun(threadID: string, params: RunCreateRunParams, options?: RequestOptions): APIPromise<RunObject> {
    const { include, ...body } = params;
    return this._client.post(path`/threads/${threadID}/runs`, { query: { include }, body, ...options });
  }

  /**
   * When a run has the `status: "requires_action"` and `required_action.type` is
   * `submit_tool_outputs`, this endpoint can be used to submit the outputs from the
   * tool calls once they're all completed. All outputs must be submitted in a single
   * request.
   *
   * @example
   * ```ts
   * const runObject =
   *   await client.threads.runs.submitToolOutputs('run_id', {
   *     thread_id: 'thread_id',
   *     tool_outputs: [{}],
   *   });
   * ```
   */
  submitToolOutputs(
    runID: string,
    params: RunSubmitToolOutputsParams,
    options?: RequestOptions,
  ): APIPromise<RunObject> {
    const { thread_id, ...body } = params;
    return this._client.post(path`/threads/${thread_id}/runs/${runID}/submit_tool_outputs`, {
      body,
      ...options,
    });
  }
}

/**
 * Specifies the format that the model must output. Compatible with
 * [GPT-4o](/docs/models#gpt-4o),
 * [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models
 * since `gpt-3.5-turbo-1106`.
 *
 * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
 * Outputs which ensures the model will match your supplied JSON schema. Learn more
 * in the [Structured Outputs guide](/docs/guides/structured-outputs).
 *
 * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the
 * message the model generates is valid JSON.
 *
 * **Important:** when using JSON mode, you **must** also instruct the model to
 * produce JSON yourself via a system or user message. Without this, the model may
 * generate an unending stream of whitespace until the generation reaches the token
 * limit, resulting in a long-running and seemingly "stuck" request. Also note that
 * the message content may be partially cut off if `finish_reason="length"`, which
 * indicates the generation exceeded `max_tokens` or the conversation exceeded the
 * max context length.
 */
export type AssistantsAPIResponseFormatOption =
  | 'auto'
  | CompletionsAPI.TextFormat
  | CompletionsAPI.JsonObjectFormat
  | CompletionsAPI.JsonSchemaFormat;

/**
 * Controls which (if any) tool is called by the model. `none` means the model will
 * not call any tools and instead generates a message. `auto` is the default value
 * and means the model can pick between generating a message or calling one or more
 * tools. `required` means the model must call one or more tools before responding
 * to the user. Specifying a particular tool like `{"type": "file_search"}` or
 * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
 * call that tool.
 */
export type AssistantsAPIToolChoiceOption =
  | 'none'
  | 'auto'
  | 'required'
  | AssistantsAPIToolChoiceOption.AssistantsNamedToolChoice;

export namespace AssistantsAPIToolChoiceOption {
  /**
   * Specifies a tool the model should use. Use to force the model to call a specific
   * tool.
   */
  export interface AssistantsNamedToolChoice {
    /**
     * The type of the tool. If type is `function`, the function name must be set
     */
    type: 'function' | 'code_interpreter' | 'file_search';

    function?: AssistantsNamedToolChoice.Function;
  }

  export namespace AssistantsNamedToolChoice {
    export interface Function {
      /**
       * The name of the function to call.
       */
      name: string;
    }
  }
}

/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export interface RunObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The ID of the [assistant](/docs/api-reference/assistants) used for execution of
   * this run.
   */
  assistant_id: string;

  /**
   * The Unix timestamp (in seconds) for when the run was cancelled.
   */
  cancelled_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was completed.
   */
  completed_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run was created.
   */
  created_at: number;

  /**
   * The Unix timestamp (in seconds) for when the run will expire.
   */
  expires_at: number | null;

  /**
   * The Unix timestamp (in seconds) for when the run failed.
   */
  failed_at: number | null;

  /**
   * Details on why the run is incomplete. Will be `null` if the run is not
   * incomplete.
   */
  incomplete_details: RunObject.IncompleteDetails | null;

  /**
   * The instructions that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  instructions: string;

  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  last_error: RunObject.LastError | null;

  /**
   * The maximum number of completion tokens specified to have been used over the
   * course of the run.
   */
  max_completion_tokens: number | null;

  /**
   * The maximum number of prompt tokens specified to have been used over the course
   * of the run.
   */
  max_prompt_tokens: number | null;

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
   * The model that the [assistant](/docs/api-reference/assistants) used for this
   * run.
   */
  model: string;

  /**
   * The object type, which is always `thread.run`.
   */
  object: 'thread.run';

  /**
   * Whether to enable
   * [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling)
   * during tool use.
   */
  parallel_tool_calls: boolean;

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  required_action: RunObject.RequiredAction | null;

  /**
   * Specifies the format that the model must output. Compatible with
   * [GPT-4o](/docs/models#gpt-4o),
   * [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models
   * since `gpt-3.5-turbo-1106`.
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
   * Outputs which ensures the model will match your supplied JSON schema. Learn more
   * in the [Structured Outputs guide](/docs/guides/structured-outputs).
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the
   * message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to
   * produce JSON yourself via a system or user message. Without this, the model may
   * generate an unending stream of whitespace until the generation reaches the token
   * limit, resulting in a long-running and seemingly "stuck" request. Also note that
   * the message content may be partially cut off if `finish_reason="length"`, which
   * indicates the generation exceeded `max_tokens` or the conversation exceeded the
   * max context length.
   */
  response_format: AssistantsAPIResponseFormatOption | null;

  /**
   * The Unix timestamp (in seconds) for when the run was started.
   */
  started_at: number | null;

  /**
   * The status of the run, which can be either `queued`, `in_progress`,
   * `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`,
   * `incomplete`, or `expired`.
   */
  status:
    | 'queued'
    | 'in_progress'
    | 'requires_action'
    | 'cancelling'
    | 'cancelled'
    | 'failed'
    | 'completed'
    | 'incomplete'
    | 'expired';

  /**
   * The ID of the [thread](/docs/api-reference/threads) that was executed on as a
   * part of this run.
   */
  thread_id: string;

  /**
   * Controls which (if any) tool is called by the model. `none` means the model will
   * not call any tools and instead generates a message. `auto` is the default value
   * and means the model can pick between generating a message or calling one or more
   * tools. `required` means the model must call one or more tools before responding
   * to the user. Specifying a particular tool like `{"type": "file_search"}` or
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that tool.
   */
  tool_choice: AssistantsAPIToolChoiceOption | null;

  /**
   * The list of tools that the [assistant](/docs/api-reference/assistants) used for
   * this run.
   */
  tools: Array<
    | AssistantsAPI.AssistantToolsCode
    | AssistantsAPI.AssistantToolsFileSearch
    | AssistantsAPI.AssistantToolsFunction
  >;

  /**
   * Controls for how a thread will be truncated prior to the run. Use this to
   * control the initial context window of the run.
   */
  truncation_strategy: TruncationObject | null;

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  usage: RunObject.Usage | null;

  /**
   * The sampling temperature used for this run. If not set, defaults to 1.
   */
  temperature?: number | null;

  /**
   * The nucleus sampling value used for this run. If not set, defaults to 1.
   */
  top_p?: number | null;
}

export namespace RunObject {
  /**
   * Details on why the run is incomplete. Will be `null` if the run is not
   * incomplete.
   */
  export interface IncompleteDetails {
    /**
     * The reason why the run is incomplete. This will point to which specific token
     * limit was reached over the course of the run.
     */
    reason?: 'max_completion_tokens' | 'max_prompt_tokens';
  }

  /**
   * The last error associated with this run. Will be `null` if there are no errors.
   */
  export interface LastError {
    /**
     * One of `server_error`, `rate_limit_exceeded`, or `invalid_prompt`.
     */
    code: 'server_error' | 'rate_limit_exceeded' | 'invalid_prompt';

    /**
     * A human-readable description of the error.
     */
    message: string;
  }

  /**
   * Details on the action required to continue the run. Will be `null` if no action
   * is required.
   */
  export interface RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    submit_tool_outputs: RequiredAction.SubmitToolOutputs;

    /**
     * For now, this is always `submit_tool_outputs`.
     */
    type: 'submit_tool_outputs';
  }

  export namespace RequiredAction {
    /**
     * Details on the tool outputs needed for this run to continue.
     */
    export interface SubmitToolOutputs {
      /**
       * A list of the relevant tool calls.
       */
      tool_calls: Array<SubmitToolOutputs.ToolCall>;
    }

    export namespace SubmitToolOutputs {
      /**
       * Tool call objects
       */
      export interface ToolCall {
        /**
         * The ID of the tool call. This ID must be referenced when you submit the tool
         * outputs in using the
         * [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs)
         * endpoint.
         */
        id: string;

        /**
         * The function definition.
         */
        function: ToolCall.Function;

        /**
         * The type of tool call the output is required for. For now, this is always
         * `function`.
         */
        type: 'function';
      }

      export namespace ToolCall {
        /**
         * The function definition.
         */
        export interface Function {
          /**
           * The arguments that the model expects you to pass to the function.
           */
          arguments: string;

          /**
           * The name of the function.
           */
          name: string;
        }
      }
    }
  }

  /**
   * Usage statistics related to the run. This value will be `null` if the run is not
   * in a terminal state (i.e. `in_progress`, `queued`, etc.).
   */
  export interface Usage {
    /**
     * Number of completion tokens used over the course of the run.
     */
    completion_tokens: number;

    /**
     * Number of prompt tokens used over the course of the run.
     */
    prompt_tokens: number;

    /**
     * Total number of tokens used (prompt + completion).
     */
    total_tokens: number;
  }
}

/**
 * Controls for how a thread will be truncated prior to the run. Use this to
 * control the initial context window of the run.
 */
export interface TruncationObject {
  /**
   * The truncation strategy to use for the thread. The default is `auto`. If set to
   * `last_messages`, the thread will be truncated to the n most recent messages in
   * the thread. When set to `auto`, messages in the middle of the thread will be
   * dropped to fit the context length of the model, `max_prompt_tokens`.
   */
  type: 'auto' | 'last_messages';

  /**
   * The number of most recent messages from the thread when constructing the context
   * for the run.
   */
  last_messages?: number | null;
}

export interface RunListResponse {
  data: Array<RunObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface RunCreateParams {
  /**
   * The ID of the [assistant](/docs/api-reference/assistants) to use to execute this
   * run.
   */
  assistant_id: string;

  /**
   * Override the default system message of the assistant. This is useful for
   * modifying the behavior on a per-run basis.
   */
  instructions?: string | null;

  /**
   * The maximum number of completion tokens that may be used over the course of the
   * run. The run will make a best effort to use only the number of completion tokens
   * specified, across multiple turns of the run. If the run exceeds the number of
   * completion tokens specified, the run will end with status `incomplete`. See
   * `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;

  /**
   * The maximum number of prompt tokens that may be used over the course of the run.
   * The run will make a best effort to use only the number of prompt tokens
   * specified, across multiple turns of the run. If the run exceeds the number of
   * prompt tokens specified, the run will end with status `incomplete`. See
   * `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;

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
   * The ID of the [Model](/docs/api-reference/models) to be used to execute this
   * run. If a value is provided here, it will override the model associated with the
   * assistant. If not, the model associated with the assistant will be used.
   */
  model?:
    | (string & {})
    | 'gpt-5'
    | 'gpt-5-mini'
    | 'gpt-5-nano'
    | 'gpt-5-2025-08-07'
    | 'gpt-5-mini-2025-08-07'
    | 'gpt-5-nano-2025-08-07'
    | 'gpt-4.1'
    | 'gpt-4.1-mini'
    | 'gpt-4.1-nano'
    | 'gpt-4.1-2025-04-14'
    | 'gpt-4.1-mini-2025-04-14'
    | 'gpt-4.1-nano-2025-04-14'
    | 'gpt-4o'
    | 'gpt-4o-2024-11-20'
    | 'gpt-4o-2024-08-06'
    | 'gpt-4o-2024-05-13'
    | 'gpt-4o-mini'
    | 'gpt-4o-mini-2024-07-18'
    | 'gpt-4.5-preview'
    | 'gpt-4.5-preview-2025-02-27'
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
    | 'gpt-3.5-turbo-0613'
    | 'gpt-3.5-turbo-1106'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-3.5-turbo-16k-0613'
    | null;

  /**
   * Whether to enable
   * [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling)
   * during tool use.
   */
  parallel_tool_calls?: boolean;

  /**
   * Specifies the format that the model must output. Compatible with
   * [GPT-4o](/docs/models#gpt-4o),
   * [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models
   * since `gpt-3.5-turbo-1106`.
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
   * Outputs which ensures the model will match your supplied JSON schema. Learn more
   * in the [Structured Outputs guide](/docs/guides/structured-outputs).
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the
   * message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to
   * produce JSON yourself via a system or user message. Without this, the model may
   * generate an unending stream of whitespace until the generation reaches the token
   * limit, resulting in a long-running and seemingly "stuck" request. Also note that
   * the message content may be partially cut off if `finish_reason="length"`, which
   * indicates the generation exceeded `max_tokens` or the conversation exceeded the
   * max context length.
   */
  response_format?: AssistantsAPIResponseFormatOption | null;

  /**
   * If `true`, returns a stream of events that happen during the Run as server-sent
   * events, terminating when the Run enters a terminal state with a `data: [DONE]`
   * message.
   */
  stream?: boolean | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
   */
  temperature?: number | null;

  /**
   * Options to create a new thread. If no thread is provided when running a request,
   * an empty thread will be created.
   */
  thread?: ThreadsAPI.CreateThreadRequest;

  /**
   * Controls which (if any) tool is called by the model. `none` means the model will
   * not call any tools and instead generates a message. `auto` is the default value
   * and means the model can pick between generating a message or calling one or more
   * tools. `required` means the model must call one or more tools before responding
   * to the user. Specifying a particular tool like `{"type": "file_search"}` or
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that tool.
   */
  tool_choice?: AssistantsAPIToolChoiceOption | null;

  /**
   * A set of resources that are used by the assistant's tools. The resources are
   * specific to the type of tool. For example, the `code_interpreter` tool requires
   * a list of file IDs, while the `file_search` tool requires a list of vector store
   * IDs.
   */
  tool_resources?: RunCreateParams.ToolResources | null;

  /**
   * Override the tools the assistant can use for this run. This is useful for
   * modifying the behavior on a per-run basis.
   */
  tools?: Array<
    | AssistantsAPI.AssistantToolsCode
    | AssistantsAPI.AssistantToolsFileSearch
    | AssistantsAPI.AssistantToolsFunction
  > | null;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;

  /**
   * Controls for how a thread will be truncated prior to the run. Use this to
   * control the initial context window of the run.
   */
  truncation_strategy?: TruncationObject | null;
}

export namespace RunCreateParams {
  /**
   * A set of resources that are used by the assistant's tools. The resources are
   * specific to the type of tool. For example, the `code_interpreter` tool requires
   * a list of file IDs, while the `file_search` tool requires a list of vector store
   * IDs.
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
       * The ID of the [vector store](/docs/api-reference/vector-stores/object) attached
       * to this assistant. There can be a maximum of 1 vector store attached to the
       * assistant.
       */
      vector_store_ids?: Array<string>;
    }
  }
}

export interface RunRetrieveParams {
  /**
   * The ID of the [thread](/docs/api-reference/threads) that was run.
   */
  thread_id: string;
}

export interface RunUpdateParams {
  /**
   * Path param: The ID of the [thread](/docs/api-reference/threads) that was run.
   */
  thread_id: string;

  /**
   * Body param: Set of 16 key-value pairs that can be attached to an object. This
   * can be useful for storing additional information about the object in a
   * structured format, and querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata?: CompletionsAPI.Metadata | null;
}

export interface RunListParams {
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

export interface RunCancelParams {
  /**
   * The ID of the thread to which this run belongs.
   */
  thread_id: string;
}

export interface RunCreateRunParams {
  /**
   * Body param: The ID of the [assistant](/docs/api-reference/assistants) to use to
   * execute this run.
   */
  assistant_id: string;

  /**
   * Query param: A list of additional fields to include in the response. Currently
   * the only supported value is
   * `step_details.tool_calls[*].file_search.results[*].content` to fetch the file
   * search result content.
   *
   * See the
   * [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings)
   * for more information.
   */
  include?: Array<'step_details.tool_calls[*].file_search.results[*].content'>;

  /**
   * Body param: Appends additional instructions at the end of the instructions for
   * the run. This is useful for modifying the behavior on a per-run basis without
   * overriding other instructions.
   */
  additional_instructions?: string | null;

  /**
   * Body param: Adds additional messages to the thread before creating the run.
   */
  additional_messages?: Array<MessagesAPI.CreateMessageRequest> | null;

  /**
   * Body param: Overrides the
   * [instructions](/docs/api-reference/assistants/createAssistant) of the assistant.
   * This is useful for modifying the behavior on a per-run basis.
   */
  instructions?: string | null;

  /**
   * Body param: The maximum number of completion tokens that may be used over the
   * course of the run. The run will make a best effort to use only the number of
   * completion tokens specified, across multiple turns of the run. If the run
   * exceeds the number of completion tokens specified, the run will end with status
   * `incomplete`. See `incomplete_details` for more info.
   */
  max_completion_tokens?: number | null;

  /**
   * Body param: The maximum number of prompt tokens that may be used over the course
   * of the run. The run will make a best effort to use only the number of prompt
   * tokens specified, across multiple turns of the run. If the run exceeds the
   * number of prompt tokens specified, the run will end with status `incomplete`.
   * See `incomplete_details` for more info.
   */
  max_prompt_tokens?: number | null;

  /**
   * Body param: Set of 16 key-value pairs that can be attached to an object. This
   * can be useful for storing additional information about the object in a
   * structured format, and querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata?: CompletionsAPI.Metadata | null;

  /**
   * Body param: The ID of the [Model](/docs/api-reference/models) to be used to
   * execute this run. If a value is provided here, it will override the model
   * associated with the assistant. If not, the model associated with the assistant
   * will be used.
   */
  model?: (string & {}) | AssistantsAPI.AssistantSupportedModels | null;

  /**
   * Body param: Whether to enable
   * [parallel function calling](/docs/guides/function-calling#configuring-parallel-function-calling)
   * during tool use.
   */
  parallel_tool_calls?: boolean;

  /**
   * Body param: Constrains effort on reasoning for
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
   * Body param: Specifies the format that the model must output. Compatible with
   * [GPT-4o](/docs/models#gpt-4o),
   * [GPT-4 Turbo](/docs/models#gpt-4-turbo-and-gpt-4), and all GPT-3.5 Turbo models
   * since `gpt-3.5-turbo-1106`.
   *
   * Setting to `{ "type": "json_schema", "json_schema": {...} }` enables Structured
   * Outputs which ensures the model will match your supplied JSON schema. Learn more
   * in the [Structured Outputs guide](/docs/guides/structured-outputs).
   *
   * Setting to `{ "type": "json_object" }` enables JSON mode, which ensures the
   * message the model generates is valid JSON.
   *
   * **Important:** when using JSON mode, you **must** also instruct the model to
   * produce JSON yourself via a system or user message. Without this, the model may
   * generate an unending stream of whitespace until the generation reaches the token
   * limit, resulting in a long-running and seemingly "stuck" request. Also note that
   * the message content may be partially cut off if `finish_reason="length"`, which
   * indicates the generation exceeded `max_tokens` or the conversation exceeded the
   * max context length.
   */
  response_format?: AssistantsAPIResponseFormatOption | null;

  /**
   * Body param: If `true`, returns a stream of events that happen during the Run as
   * server-sent events, terminating when the Run enters a terminal state with a
   * `data: [DONE]` message.
   */
  stream?: boolean | null;

  /**
   * Body param: What sampling temperature to use, between 0 and 2. Higher values
   * like 0.8 will make the output more random, while lower values like 0.2 will make
   * it more focused and deterministic.
   */
  temperature?: number | null;

  /**
   * Body param: Controls which (if any) tool is called by the model. `none` means
   * the model will not call any tools and instead generates a message. `auto` is the
   * default value and means the model can pick between generating a message or
   * calling one or more tools. `required` means the model must call one or more
   * tools before responding to the user. Specifying a particular tool like
   * `{"type": "file_search"}` or
   * `{"type": "function", "function": {"name": "my_function"}}` forces the model to
   * call that tool.
   */
  tool_choice?: AssistantsAPIToolChoiceOption | null;

  /**
   * Body param: Override the tools the assistant can use for this run. This is
   * useful for modifying the behavior on a per-run basis.
   */
  tools?: Array<
    | AssistantsAPI.AssistantToolsCode
    | AssistantsAPI.AssistantToolsFileSearch
    | AssistantsAPI.AssistantToolsFunction
  > | null;

  /**
   * Body param: An alternative to sampling with temperature, called nucleus
   * sampling, where the model considers the results of the tokens with top_p
   * probability mass. So 0.1 means only the tokens comprising the top 10%
   * probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;

  /**
   * Body param: Controls for how a thread will be truncated prior to the run. Use
   * this to control the initial context window of the run.
   */
  truncation_strategy?: TruncationObject | null;
}

export interface RunSubmitToolOutputsParams {
  /**
   * Path param: The ID of the [thread](/docs/api-reference/threads) to which this
   * run belongs.
   */
  thread_id: string;

  /**
   * Body param: A list of tools for which the outputs are being submitted.
   */
  tool_outputs: Array<RunSubmitToolOutputsParams.ToolOutput>;

  /**
   * Body param: If `true`, returns a stream of events that happen during the Run as
   * server-sent events, terminating when the Run enters a terminal state with a
   * `data: [DONE]` message.
   */
  stream?: boolean | null;
}

export namespace RunSubmitToolOutputsParams {
  export interface ToolOutput {
    /**
     * The output of the tool call to be submitted to continue the run.
     */
    output?: string;

    /**
     * The ID of the tool call in the `required_action` object within the run object
     * the output is being submitted for.
     */
    tool_call_id?: string;
  }
}

Runs.Steps = Steps;

export declare namespace Runs {
  export {
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
    Steps as Steps,
    type RunStepObject as RunStepObject,
    type StepListResponse as StepListResponse,
    type StepRetrieveParams as StepRetrieveParams,
    type StepListParams as StepListParams,
  };
}
