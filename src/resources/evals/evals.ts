// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from '../chat/completions';
import * as RunsAPI from './runs/runs';
import {
  APIError,
  CompletionsRunDataSource,
  EvalRun,
  JSONLFileContentSource,
  JSONLFileIDSource,
  JSONLRunDataSource,
  ResponsesRunDataSource,
  RunCancelParams,
  RunCreateParams,
  RunDeleteParams,
  RunDeleteResponse,
  RunListParams,
  RunListResponse,
  RunRetrieveParams,
  Runs,
} from './runs/runs';
import * as GradersAPI from '../fine-tuning/alpha/graders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Evals extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Create the structure of an evaluation that can be used to test a model's
   * performance. An evaluation is a set of testing criteria and the config for a
   * data source, which dictates the schema of the data used in the evaluation. After
   * creating an evaluation, you can run it on different models and model parameters.
   * We support several types of graders and datasources. For more information, see
   * the [Evals guide](/docs/guides/evals).
   */
  create(body: EvalCreateParams, options?: RequestOptions): APIPromise<Eval> {
    return this._client.post('/evals', { body, ...options });
  }

  /**
   * Get an evaluation by ID.
   */
  retrieve(evalID: string, options?: RequestOptions): APIPromise<Eval> {
    return this._client.get(path`/evals/${evalID}`, options);
  }

  /**
   * Update certain properties of an evaluation.
   */
  update(evalID: string, body: EvalUpdateParams, options?: RequestOptions): APIPromise<Eval> {
    return this._client.post(path`/evals/${evalID}`, { body, ...options });
  }

  /**
   * List evaluations for a project.
   */
  list(
    query: EvalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EvalListResponse> {
    return this._client.get('/evals', { query, ...options });
  }

  /**
   * Delete an evaluation.
   */
  delete(evalID: string, options?: RequestOptions): APIPromise<EvalDeleteResponse> {
    return this._client.delete(path`/evals/${evalID}`, options);
  }
}

/**
 * An Eval object with a data source config and testing criteria. An Eval
 * represents a task to be done for your LLM integration. Like:
 *
 * - Improve the quality of my chatbot
 * - See how well my chatbot handles customer support
 * - Check if o4-mini is better at my usecase than gpt-4o
 */
export interface Eval {
  /**
   * Unique identifier for the evaluation.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the eval was created.
   */
  created_at: number;

  /**
   * Configuration of data sources used in runs of the evaluation.
   */
  data_source_config:
    | Eval.EvalCustomDataSourceConfig
    | Eval.EvalLogsDataSourceConfig
    | Eval.EvalStoredCompletionsDataSourceConfig;

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
   * The name of the evaluation.
   */
  name: string;

  /**
   * The object type.
   */
  object: 'eval';

  /**
   * A list of testing criteria.
   */
  testing_criteria: Array<
    | GraderLabelModel
    | GraderStringCheckEval
    | GraderTextSimilarityEval
    | GraderPythonEval
    | GraderScoreEvalModel
  >;
}

export namespace Eval {
  /**
   * A CustomDataSourceConfig which specifies the schema of your `item` and
   * optionally `sample` namespaces. The response schema defines the shape of the
   * data that will be:
   *
   * - Used to define your testing criteria and
   * - What data is required when creating a run
   */
  export interface EvalCustomDataSourceConfig {
    /**
     * The json schema for the run data source items. Learn how to build JSON schemas
     * [here](https://json-schema.org/).
     */
    schema: { [key: string]: unknown };

    /**
     * The type of data source. Always `custom`.
     */
    type: 'custom';
  }

  /**
   * A LogsDataSourceConfig which specifies the metadata property of your logs query.
   * This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc. The
   * schema returned by this data source config is used to defined what variables are
   * available in your evals. `item` and `sample` are both defined when using this
   * data source config.
   */
  export interface EvalLogsDataSourceConfig {
    /**
     * The json schema for the run data source items. Learn how to build JSON schemas
     * [here](https://json-schema.org/).
     */
    schema: { [key: string]: unknown };

    /**
     * The type of data source. Always `logs`.
     */
    type: 'logs';

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

  /**
   * @deprecated Deprecated in favor of LogsDataSourceConfig.
   */
  export interface EvalStoredCompletionsDataSourceConfig {
    /**
     * The json schema for the run data source items. Learn how to build JSON schemas
     * [here](https://json-schema.org/).
     */
    schema: { [key: string]: unknown };

    /**
     * The type of data source. Always `stored_completions`.
     */
    type: 'stored_completions';

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
}

/**
 * A LabelModelGrader object which uses a model to assign labels to each item in
 * the evaluation.
 */
export interface GraderLabelModel {
  input: Array<GradersAPI.EvalItem>;

  /**
   * The labels to assign to each item in the evaluation.
   */
  labels: Array<string>;

  /**
   * The model to use for the evaluation. Must support structured outputs.
   */
  model: string;

  /**
   * The name of the grader.
   */
  name: string;

  /**
   * The labels that indicate a passing result. Must be a subset of labels.
   */
  passing_labels: Array<string>;

  /**
   * The object type, which is always `label_model`.
   */
  type: 'label_model';
}

/**
 * A PythonGrader object that runs a python script on the input.
 */
export interface GraderPythonEval extends GradersAPI.GraderPythonScript {
  /**
   * The threshold for the score.
   */
  pass_threshold?: number;
}

/**
 * A ScoreModelGrader object that uses a model to assign a score to the input.
 */
export interface GraderScoreEvalModel extends GradersAPI.GraderScoreAssignmentModel {
  /**
   * The threshold for the score.
   */
  pass_threshold?: number;
}

/**
 * A StringCheckGrader object that performs a string comparison between input and
 * reference using a specified operation.
 */
export interface GraderStringCheckEval {
  /**
   * The input text. This may include template strings.
   */
  input: string;

  /**
   * The name of the grader.
   */
  name: string;

  /**
   * The string check operation to perform. One of `eq`, `ne`, `like`, or `ilike`.
   */
  operation: 'eq' | 'ne' | 'like' | 'ilike';

  /**
   * The reference text. This may include template strings.
   */
  reference: string;

  /**
   * The object type, which is always `string_check`.
   */
  type: 'string_check';
}

/**
 * A TextSimilarityGrader object which grades text based on similarity metrics.
 */
export interface GraderTextSimilarityEval extends GradersAPI.GraderTextSimilarityFineTuning {
  /**
   * The threshold for the score.
   */
  pass_threshold: number;
}

/**
 * An object representing a list of evals.
 */
export interface EvalListResponse {
  /**
   * An array of eval objects.
   */
  data: Array<Eval>;

  /**
   * The identifier of the first eval in the data array.
   */
  first_id: string;

  /**
   * Indicates whether there are more evals available.
   */
  has_more: boolean;

  /**
   * The identifier of the last eval in the data array.
   */
  last_id: string;

  /**
   * The type of this object. It is always set to "list".
   */
  object: 'list';
}

export interface EvalDeleteResponse {
  deleted: boolean;

  eval_id: string;

  object: string;
}

export interface EvalCreateParams {
  /**
   * The configuration for the data source used for the evaluation runs. Dictates the
   * schema of the data used in the evaluation.
   */
  data_source_config:
    | EvalCreateParams.CreateEvalCustomDataSourceConfig
    | EvalCreateParams.CreateEvalLogsDataSourceConfig
    | EvalCreateParams.CreateEvalStoredCompletionsDataSourceConfig;

  /**
   * A list of graders for all eval runs in this group. Graders can reference
   * variables in the data source using double curly braces notation, like
   * `{{item.variable_name}}`. To reference the model's output, use the `sample`
   * namespace (ie, `{{sample.output_text}}`).
   */
  testing_criteria: Array<
    | EvalCreateParams.CreateEvalLabelModelGrader
    | GraderStringCheckEval
    | GraderTextSimilarityEval
    | GraderPythonEval
    | GraderScoreEvalModel
  >;

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
   * The name of the evaluation.
   */
  name?: string;
}

export namespace EvalCreateParams {
  /**
   * A CustomDataSourceConfig object that defines the schema for the data source used
   * for the evaluation runs. This schema is used to define the shape of the data
   * that will be:
   *
   * - Used to define your testing criteria and
   * - What data is required when creating a run
   */
  export interface CreateEvalCustomDataSourceConfig {
    /**
     * The json schema for each row in the data source.
     */
    item_schema: { [key: string]: unknown };

    /**
     * The type of data source. Always `custom`.
     */
    type: 'custom';

    /**
     * Whether the eval should expect you to populate the sample namespace (ie, by
     * generating responses off of your data source)
     */
    include_sample_schema?: boolean;
  }

  /**
   * A data source config which specifies the metadata property of your logs query.
   * This is usually metadata like `usecase=chatbot` or `prompt-version=v2`, etc.
   */
  export interface CreateEvalLogsDataSourceConfig {
    /**
     * The type of data source. Always `logs`.
     */
    type: 'logs';

    /**
     * Metadata filters for the logs data source.
     */
    metadata?: { [key: string]: unknown };
  }

  /**
   * @deprecated Deprecated in favor of LogsDataSourceConfig.
   */
  export interface CreateEvalStoredCompletionsDataSourceConfig {
    /**
     * The type of data source. Always `stored_completions`.
     */
    type: 'stored_completions';

    /**
     * Metadata filters for the stored completions data source.
     */
    metadata?: { [key: string]: unknown };
  }

  /**
   * A LabelModelGrader object which uses a model to assign labels to each item in
   * the evaluation.
   */
  export interface CreateEvalLabelModelGrader {
    /**
     * A list of chat messages forming the prompt or context. May include variable
     * references to the `item` namespace, ie {{item.name}}.
     */
    input: Array<CreateEvalLabelModelGrader.SimpleInputMessage | GradersAPI.EvalItem>;

    /**
     * The labels to classify to each item in the evaluation.
     */
    labels: Array<string>;

    /**
     * The model to use for the evaluation. Must support structured outputs.
     */
    model: string;

    /**
     * The name of the grader.
     */
    name: string;

    /**
     * The labels that indicate a passing result. Must be a subset of labels.
     */
    passing_labels: Array<string>;

    /**
     * The object type, which is always `label_model`.
     */
    type: 'label_model';
  }

  export namespace CreateEvalLabelModelGrader {
    export interface SimpleInputMessage {
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
}

export interface EvalUpdateParams {
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
   * Rename the evaluation.
   */
  name?: string;
}

export interface EvalListParams {
  /**
   * Identifier for the last eval from the previous pagination request.
   */
  after?: string;

  /**
   * Number of evals to retrieve.
   */
  limit?: number;

  /**
   * Sort order for evals by timestamp. Use `asc` for ascending order or `desc` for
   * descending order.
   */
  order?: 'asc' | 'desc';

  /**
   * Evals can be ordered by creation time or last updated time. Use `created_at` for
   * creation time or `updated_at` for last updated time.
   */
  order_by?: 'created_at' | 'updated_at';
}

Evals.Runs = Runs;

export declare namespace Evals {
  export {
    type Eval as Eval,
    type GraderLabelModel as GraderLabelModel,
    type GraderPythonEval as GraderPythonEval,
    type GraderScoreEvalModel as GraderScoreEvalModel,
    type GraderStringCheckEval as GraderStringCheckEval,
    type GraderTextSimilarityEval as GraderTextSimilarityEval,
    type EvalListResponse as EvalListResponse,
    type EvalDeleteResponse as EvalDeleteResponse,
    type EvalCreateParams as EvalCreateParams,
    type EvalUpdateParams as EvalUpdateParams,
    type EvalListParams as EvalListParams,
  };

  export {
    Runs as Runs,
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
}
