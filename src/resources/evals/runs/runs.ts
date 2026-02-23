// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantsAPI from '../../assistants';
import * as ResponsesAPI from '../../responses';
import * as CompletionsAPI from '../../chat/completions';
import * as ItemsAPI from '../../conversations/items';
import * as OutputItemsAPI from './output-items';
import {
  EvalRunOutputItem,
  OutputItemListParams,
  OutputItemListResponse,
  OutputItemRetrieveParams,
  OutputItems,
} from './output-items';
import * as GradersAPI from '../../fine-tuning/alpha/graders';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Runs extends APIResource {
  outputItems: OutputItemsAPI.OutputItems = new OutputItemsAPI.OutputItems(this._client);

  /**
   * Kicks off a new run for a given evaluation, specifying the data source, and what
   * model configuration to use to test. The datasource will be validated against the
   * schema specified in the config of the evaluation.
   */
  create(evalID: string, body: RunCreateParams, options?: RequestOptions): APIPromise<EvalRun> {
    return this._client.post(path`/evals/${evalID}/runs`, { body, ...options });
  }

  /**
   * Get an evaluation run by ID.
   */
  retrieve(runID: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<EvalRun> {
    const { eval_id } = params;
    return this._client.get(path`/evals/${eval_id}/runs/${runID}`, options);
  }

  /**
   * Get a list of runs for an evaluation.
   */
  list(
    evalID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListResponse> {
    return this._client.get(path`/evals/${evalID}/runs`, { query, ...options });
  }

  /**
   * Delete an eval run.
   */
  delete(runID: string, params: RunDeleteParams, options?: RequestOptions): APIPromise<RunDeleteResponse> {
    const { eval_id } = params;
    return this._client.delete(path`/evals/${eval_id}/runs/${runID}`, options);
  }

  /**
   * Cancel an ongoing evaluation run.
   */
  cancel(runID: string, params: RunCancelParams, options?: RequestOptions): APIPromise<EvalRun> {
    const { eval_id } = params;
    return this._client.post(path`/evals/${eval_id}/runs/${runID}`, options);
  }
}

/**
 * An object representing an error response from the Eval API.
 */
export interface APIError {
  /**
   * The error code.
   */
  code: string;

  /**
   * The error message.
   */
  message: string;
}

/**
 * A CompletionsRunDataSource object describing a model sampling configuration.
 */
export interface CompletionsRunDataSource {
  /**
   * Determines what populates the `item` namespace in this run's data source.
   */
  source: JSONLFileContentSource | JSONLFileIDSource | CompletionsRunDataSource.EvalStoredCompletionsSource;

  /**
   * The type of run data source. Always `completions`.
   */
  type: 'completions';

  /**
   * Used when sampling from a model. Dictates the structure of the messages passed
   * into the model. Can either be a reference to a prebuilt trajectory (ie,
   * `item.input_trajectory`), or a template with variable references to the `item`
   * namespace.
   */
  input_messages?:
    | CompletionsRunDataSource.TemplateInputMessages
    | CompletionsRunDataSource.ItemReferenceInputMessages;

  /**
   * The name of the model to use for generating completions (e.g. "o3-mini").
   */
  model?: string;

  sampling_params?: CompletionsRunDataSource.SamplingParams;
}

export namespace CompletionsRunDataSource {
  /**
   * A StoredCompletionsRunDataSource configuration describing a set of filters
   */
  export interface EvalStoredCompletionsSource {
    /**
     * The type of source. Always `stored_completions`.
     */
    type: 'stored_completions';

    /**
     * An optional Unix timestamp to filter items created after this time.
     */
    created_after?: number | null;

    /**
     * An optional Unix timestamp to filter items created before this time.
     */
    created_before?: number | null;

    /**
     * An optional maximum number of items to return.
     */
    limit?: number | null;

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
     * An optional model to filter by (e.g., 'gpt-4o').
     */
    model?: string | null;
  }

  export interface TemplateInputMessages {
    /**
     * A list of chat messages forming the prompt or context. May include variable
     * references to the `item` namespace, ie {{item.name}}.
     */
    template: Array<ItemsAPI.EasyInputMessage | GradersAPI.EvalItem>;

    /**
     * The type of input messages. Always `template`.
     */
    type: 'template';
  }

  export interface ItemReferenceInputMessages {
    /**
     * A reference to a variable in the `item` namespace. Ie, "item.input_trajectory"
     */
    item_reference: string;

    /**
     * The type of input messages. Always `item_reference`.
     */
    type: 'item_reference';
  }

  export interface SamplingParams {
    /**
     * The maximum number of tokens in the generated output.
     */
    max_completion_tokens?: number;

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
      | CompletionsAPI.TextFormat
      | CompletionsAPI.JsonSchemaFormat
      | CompletionsAPI.JsonObjectFormat;

    /**
     * A seed value to initialize the randomness, during sampling.
     */
    seed?: number;

    /**
     * A higher temperature increases randomness in the outputs.
     */
    temperature?: number;

    /**
     * A list of tools the model may call. Currently, only functions are supported as a
     * tool. Use this to provide a list of functions the model may generate JSON inputs
     * for. A max of 128 functions are supported.
     */
    tools?: Array<CompletionsAPI.ChatCompletionTool>;

    /**
     * An alternative to temperature for nucleus sampling; 1.0 includes all tokens.
     */
    top_p?: number;
  }
}

/**
 * A schema representing an evaluation run.
 */
export interface EvalRun {
  /**
   * Unique identifier for the evaluation run.
   */
  id: string;

  /**
   * Unix timestamp (in seconds) when the evaluation run was created.
   */
  created_at: number;

  /**
   * Information about the run's data source.
   */
  data_source: JSONLRunDataSource | CompletionsRunDataSource | ResponsesRunDataSource;

  /**
   * An object representing an error response from the Eval API.
   */
  error: APIError;

  /**
   * The identifier of the associated evaluation.
   */
  eval_id: string;

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
   * The model that is evaluated, if applicable.
   */
  model: string;

  /**
   * The name of the evaluation run.
   */
  name: string;

  /**
   * The type of the object. Always "eval.run".
   */
  object: 'eval.run';

  /**
   * Usage statistics for each model during the evaluation run.
   */
  per_model_usage: Array<EvalRun.PerModelUsage>;

  /**
   * Results per testing criteria applied during the evaluation run.
   */
  per_testing_criteria_results: Array<EvalRun.PerTestingCriteriaResult>;

  /**
   * The URL to the rendered evaluation run report on the UI dashboard.
   */
  report_url: string;

  /**
   * Counters summarizing the outcomes of the evaluation run.
   */
  result_counts: EvalRun.ResultCounts;

  /**
   * The status of the evaluation run.
   */
  status: string;
}

export namespace EvalRun {
  export interface PerModelUsage {
    /**
     * The number of tokens retrieved from cache.
     */
    cached_tokens: number;

    /**
     * The number of completion tokens generated.
     */
    completion_tokens: number;

    /**
     * The number of invocations.
     */
    invocation_count: number;

    /**
     * The name of the model.
     */
    model_name: string;

    /**
     * The number of prompt tokens used.
     */
    prompt_tokens: number;

    /**
     * The total number of tokens used.
     */
    total_tokens: number;
  }

  export interface PerTestingCriteriaResult {
    /**
     * Number of tests failed for this criteria.
     */
    failed: number;

    /**
     * Number of tests passed for this criteria.
     */
    passed: number;

    /**
     * A description of the testing criteria.
     */
    testing_criteria: string;
  }

  /**
   * Counters summarizing the outcomes of the evaluation run.
   */
  export interface ResultCounts {
    /**
     * Number of output items that resulted in an error.
     */
    errored: number;

    /**
     * Number of output items that failed to pass the evaluation.
     */
    failed: number;

    /**
     * Number of output items that passed the evaluation.
     */
    passed: number;

    /**
     * Total number of executed output items.
     */
    total: number;
  }
}

export interface JSONLFileContentSource {
  /**
   * The content of the jsonl file.
   */
  content: Array<JSONLFileContentSource.Content>;

  /**
   * The type of jsonl source. Always `file_content`.
   */
  type: 'file_content';
}

export namespace JSONLFileContentSource {
  export interface Content {
    item: { [key: string]: unknown };

    sample?: { [key: string]: unknown };
  }
}

export interface JSONLFileIDSource {
  /**
   * The identifier of the file.
   */
  id: string;

  /**
   * The type of jsonl source. Always `file_id`.
   */
  type: 'file_id';
}

/**
 * A JsonlRunDataSource object with that specifies a JSONL file that matches the
 * eval
 */
export interface JSONLRunDataSource {
  /**
   * Determines what populates the `item` namespace in the data source.
   */
  source: JSONLFileContentSource | JSONLFileIDSource;

  /**
   * The type of data source. Always `jsonl`.
   */
  type: 'jsonl';
}

/**
 * A ResponsesRunDataSource object describing a model sampling configuration.
 */
export interface ResponsesRunDataSource {
  /**
   * Determines what populates the `item` namespace in this run's data source.
   */
  source: JSONLFileContentSource | JSONLFileIDSource | ResponsesRunDataSource.EvalResponsesSource;

  /**
   * The type of run data source. Always `responses`.
   */
  type: 'responses';

  /**
   * Used when sampling from a model. Dictates the structure of the messages passed
   * into the model. Can either be a reference to a prebuilt trajectory (ie,
   * `item.input_trajectory`), or a template with variable references to the `item`
   * namespace.
   */
  input_messages?:
    | ResponsesRunDataSource.InputMessagesTemplate
    | ResponsesRunDataSource.InputMessagesItemReference;

  /**
   * The name of the model to use for generating completions (e.g. "o3-mini").
   */
  model?: string;

  sampling_params?: ResponsesRunDataSource.SamplingParams;
}

export namespace ResponsesRunDataSource {
  /**
   * A EvalResponsesSource object describing a run data source configuration.
   */
  export interface EvalResponsesSource {
    /**
     * The type of run data source. Always `responses`.
     */
    type: 'responses';

    /**
     * Only include items created after this timestamp (inclusive). This is a query
     * parameter used to select responses.
     */
    created_after?: number | null;

    /**
     * Only include items created before this timestamp (inclusive). This is a query
     * parameter used to select responses.
     */
    created_before?: number | null;

    /**
     * Optional string to search the 'instructions' field. This is a query parameter
     * used to select responses.
     */
    instructions_search?: string | null;

    /**
     * Metadata filter for the responses. This is a query parameter used to select
     * responses.
     */
    metadata?: unknown | null;

    /**
     * The name of the model to find responses for. This is a query parameter used to
     * select responses.
     */
    model?: string | null;

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
     * Sampling temperature. This is a query parameter used to select responses.
     */
    temperature?: number | null;

    /**
     * List of tool names. This is a query parameter used to select responses.
     */
    tools?: Array<string> | null;

    /**
     * Nucleus sampling parameter. This is a query parameter used to select responses.
     */
    top_p?: number | null;

    /**
     * List of user identifiers. This is a query parameter used to select responses.
     */
    users?: Array<string> | null;
  }

  export interface InputMessagesTemplate {
    /**
     * A list of chat messages forming the prompt or context. May include variable
     * references to the `item` namespace, ie {{item.name}}.
     */
    template: Array<InputMessagesTemplate.ChatMessage | GradersAPI.EvalItem>;

    /**
     * The type of input messages. Always `template`.
     */
    type: 'template';
  }

  export namespace InputMessagesTemplate {
    export interface ChatMessage {
      /**
       * The content of the message.
       */
      content: string;

      /**
       * The role of the message (e.g. "system", "assistant", "user").
       */
      role: string;
    }
  }

  export interface InputMessagesItemReference {
    /**
     * A reference to a variable in the `item` namespace. Ie, "item.name"
     */
    item_reference: string;

    /**
     * The type of input messages. Always `item_reference`.
     */
    type: 'item_reference';
  }

  export interface SamplingParams {
    /**
     * The maximum number of tokens in the generated output.
     */
    max_completion_tokens?: number;

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
     * A seed value to initialize the randomness, during sampling.
     */
    seed?: number;

    /**
     * A higher temperature increases randomness in the outputs.
     */
    temperature?: number;

    /**
     * Configuration options for a text response from the model. Can be plain text or
     * structured JSON data. Learn more:
     *
     * - [Text inputs and outputs](/docs/guides/text)
     * - [Structured Outputs](/docs/guides/structured-outputs)
     */
    text?: SamplingParams.Text;

    /**
     * An array of tools the model may call while generating a response. You can
     * specify which tool to use by setting the `tool_choice` parameter.
     *
     * The two categories of tools you can provide the model are:
     *
     * - **Built-in tools**: Tools that are provided by OpenAI that extend the model's
     *   capabilities, like [web search](/docs/guides/tools-web-search) or
     *   [file search](/docs/guides/tools-file-search). Learn more about
     *   [built-in tools](/docs/guides/tools).
     * - **Function calls (custom tools)**: Functions that are defined by you, enabling
     *   the model to call your own code. Learn more about
     *   [function calling](/docs/guides/function-calling).
     */
    tools?: Array<ResponsesAPI.ResponseTool>;

    /**
     * An alternative to temperature for nucleus sampling; 1.0 includes all tokens.
     */
    top_p?: number;
  }

  export namespace SamplingParams {
    /**
     * Configuration options for a text response from the model. Can be plain text or
     * structured JSON data. Learn more:
     *
     * - [Text inputs and outputs](/docs/guides/text)
     * - [Structured Outputs](/docs/guides/structured-outputs)
     */
    export interface Text {
      /**
       * An object specifying the format that the model must output.
       *
       * Configuring `{ "type": "json_schema" }` enables Structured Outputs, which
       * ensures the model will match your supplied JSON schema. Learn more in the
       * [Structured Outputs guide](/docs/guides/structured-outputs).
       *
       * The default format is `{ "type": "text" }` with no additional options.
       *
       * **Not recommended for gpt-4o and newer models:**
       *
       * Setting to `{ "type": "json_object" }` enables the older JSON mode, which
       * ensures the message the model generates is valid JSON. Using `json_schema` is
       * preferred for models that support it.
       */
      format?: ResponsesAPI.TextResponseFormatConfiguration;
    }
  }
}

/**
 * An object representing a list of runs for an evaluation.
 */
export interface RunListResponse {
  /**
   * An array of eval run objects.
   */
  data: Array<EvalRun>;

  /**
   * The identifier of the first eval run in the data array.
   */
  first_id: string;

  /**
   * Indicates whether there are more evals available.
   */
  has_more: boolean;

  /**
   * The identifier of the last eval run in the data array.
   */
  last_id: string;

  /**
   * The type of this object. It is always set to "list".
   */
  object: 'list';
}

export interface RunDeleteResponse {
  deleted?: boolean;

  object?: string;

  run_id?: string;
}

export interface RunCreateParams {
  /**
   * Details about the run's data source.
   */
  data_source: JSONLRunDataSource | CompletionsRunDataSource | ResponsesRunDataSource;

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
   * The name of the run.
   */
  name?: string;
}

export interface RunRetrieveParams {
  /**
   * The ID of the evaluation to retrieve runs for.
   */
  eval_id: string;
}

export interface RunListParams {
  /**
   * Identifier for the last run from the previous pagination request.
   */
  after?: string;

  /**
   * Number of runs to retrieve.
   */
  limit?: number;

  /**
   * Sort order for runs by timestamp. Use `asc` for ascending order or `desc` for
   * descending order. Defaults to `asc`.
   */
  order?: 'asc' | 'desc';

  /**
   * Filter runs by status. One of `queued` | `in_progress` | `failed` | `completed`
   * | `canceled`.
   */
  status?: 'queued' | 'in_progress' | 'completed' | 'canceled' | 'failed';
}

export interface RunDeleteParams {
  /**
   * The ID of the evaluation to delete the run from.
   */
  eval_id: string;
}

export interface RunCancelParams {
  /**
   * The ID of the evaluation whose run you want to cancel.
   */
  eval_id: string;
}

Runs.OutputItems = OutputItems;

export declare namespace Runs {
  export {
    type APIError as APIError,
    type CompletionsRunDataSource as CompletionsRunDataSource,
    type EvalRun as EvalRun,
    type JSONLFileContentSource as JSONLFileContentSource,
    type JSONLFileIDSource as JSONLFileIDSource,
    type JSONLRunDataSource as JSONLRunDataSource,
    type ResponsesRunDataSource as ResponsesRunDataSource,
    type RunListResponse as RunListResponse,
    type RunDeleteResponse as RunDeleteResponse,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunDeleteParams as RunDeleteParams,
    type RunCancelParams as RunCancelParams,
  };

  export {
    OutputItems as OutputItems,
    type EvalRunOutputItem as EvalRunOutputItem,
    type OutputItemListResponse as OutputItemListResponse,
    type OutputItemRetrieveParams as OutputItemRetrieveParams,
    type OutputItemListParams as OutputItemListParams,
  };
}
