// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AssistantsAPI from './assistants';
import * as CompletionsAPI from './chat/completions';
import * as RunsAPI from './threads/runs/runs';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Assistants extends APIResource {
  /**
   * Create an assistant with a model and instructions.
   *
   * @deprecated
   */
  create(body: AssistantCreateParams, options?: RequestOptions): APIPromise<AssistantObject> {
    return this._client.post('/assistants', { body, ...options });
  }

  /**
   * Retrieves an assistant.
   *
   * @deprecated
   */
  retrieve(assistantID: string, options?: RequestOptions): APIPromise<AssistantObject> {
    return this._client.get(path`/assistants/${assistantID}`, options);
  }

  /**
   * Modifies an assistant.
   *
   * @deprecated
   */
  update(
    assistantID: string,
    body: AssistantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantObject> {
    return this._client.post(path`/assistants/${assistantID}`, { body, ...options });
  }

  /**
   * Returns a list of assistants.
   *
   * @deprecated
   */
  list(
    query: AssistantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssistantListResponse> {
    return this._client.get('/assistants', { query, ...options });
  }

  /**
   * Delete an assistant.
   *
   * @deprecated
   */
  delete(assistantID: string, options?: RequestOptions): APIPromise<AssistantDeleteResponse> {
    return this._client.delete(path`/assistants/${assistantID}`, options);
  }
}

/**
 * @deprecated Represents an `assistant` that can call the model and use tools.
 */
export interface AssistantObject {
  /**
   * The identifier, which can be referenced in API endpoints.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the assistant was created.
   */
  created_at: number;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description: string | null;

  /**
   * The system instructions that the assistant uses. The maximum length is 256,000
   * characters.
   */
  instructions: string | null;

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
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model: string;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name: string | null;

  /**
   * The object type, which is always `assistant`.
   */
  object: 'assistant';

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `file_search`, or
   * `function`.
   */
  tools: Array<AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction>;

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
  response_format?: RunsAPI.AssistantsAPIResponseFormatOption | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
   */
  temperature?: number | null;

  /**
   * A set of resources that are used by the assistant's tools. The resources are
   * specific to the type of tool. For example, the `code_interpreter` tool requires
   * a list of file IDs, while the `file_search` tool requires a list of vector store
   * IDs.
   */
  tool_resources?: AssistantObject.ToolResources | null;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;
}

export namespace AssistantObject {
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
       * `code_interpreter`` tool. There can be a maximum of 20 files associated with the
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

export type AssistantSupportedModels =
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
  | 'o3-mini'
  | 'o3-mini-2025-01-31'
  | 'o1'
  | 'o1-2024-12-17'
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
  | 'gpt-3.5-turbo-16k-0613';

export interface AssistantToolsCode {
  /**
   * The type of tool being defined: `code_interpreter`
   */
  type: 'code_interpreter';
}

export interface AssistantToolsFileSearch {
  /**
   * The type of tool being defined: `file_search`
   */
  type: 'file_search';

  /**
   * Overrides for the file search tool.
   */
  file_search?: AssistantToolsFileSearch.FileSearch;
}

export namespace AssistantToolsFileSearch {
  /**
   * Overrides for the file search tool.
   */
  export interface FileSearch {
    /**
     * The maximum number of results the file search tool should output. The default is
     * 20 for `gpt-4*` models and 5 for `gpt-3.5-turbo`. This number should be between
     * 1 and 50 inclusive.
     *
     * Note that the file search tool may output fewer than `max_num_results` results.
     * See the
     * [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings)
     * for more information.
     */
    max_num_results?: number;

    /**
     * The ranking options for the file search. If not specified, the file search tool
     * will use the `auto` ranker and a score_threshold of 0.
     *
     * See the
     * [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings)
     * for more information.
     */
    ranking_options?: FileSearch.RankingOptions;
  }

  export namespace FileSearch {
    /**
     * The ranking options for the file search. If not specified, the file search tool
     * will use the `auto` ranker and a score_threshold of 0.
     *
     * See the
     * [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings)
     * for more information.
     */
    export interface RankingOptions {
      /**
       * The score threshold for the file search. All values must be a floating point
       * number between 0 and 1.
       */
      score_threshold: number;

      /**
       * The ranker to use for the file search. If not specified will use the `auto`
       * ranker.
       */
      ranker?: AssistantsAPI.FileSearchRanker;
    }
  }
}

export interface AssistantToolsFunction {
  function: FunctionObject;

  /**
   * The type of tool being defined: `function`
   */
  type: 'function';
}

/**
 * The ranker to use for the file search. If not specified will use the `auto`
 * ranker.
 */
export type FileSearchRanker = 'auto' | 'default_2024_08_21';

export interface FunctionObject {
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

  /**
   * Whether to enable strict schema adherence when generating the function call. If
   * set to true, the model will follow the exact schema defined in the `parameters`
   * field. Only a subset of JSON Schema is supported when `strict` is `true`. Learn
   * more about Structured Outputs in the
   * [function calling guide](/docs/guides/function-calling).
   */
  strict?: boolean | null;
}

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
export type ReasoningEffort = 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | null;

export interface AssistantListResponse {
  data: Array<AssistantObject>;

  first_id: string;

  has_more: boolean;

  last_id: string;

  object: string;
}

export interface AssistantDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'assistant.deleted';
}

export interface AssistantCreateParams {
  /**
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model: (string & {}) | AssistantSupportedModels;

  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;

  /**
   * The system instructions that the assistant uses. The maximum length is 256,000
   * characters.
   */
  instructions?: string | null;

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
   * The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;

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
  reasoning_effort?: ReasoningEffort | null;

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
  response_format?: RunsAPI.AssistantsAPIResponseFormatOption | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
   */
  temperature?: number | null;

  /**
   * A set of resources that are used by the assistant's tools. The resources are
   * specific to the type of tool. For example, the `code_interpreter` tool requires
   * a list of file IDs, while the `file_search` tool requires a list of vector store
   * IDs.
   */
  tool_resources?: AssistantCreateParams.ToolResources | null;

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `file_search`, or
   * `function`.
   */
  tools?: Array<AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction>;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;
}

export namespace AssistantCreateParams {
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
       * The [vector store](/docs/api-reference/vector-stores/object) attached to this
       * assistant. There can be a maximum of 1 vector store attached to the assistant.
       */
      vector_store_ids?: Array<string>;

      /**
       * A helper to create a [vector store](/docs/api-reference/vector-stores/object)
       * with file_ids and attach it to this assistant. There can be a maximum of 1
       * vector store attached to the assistant.
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

export interface AssistantUpdateParams {
  /**
   * The description of the assistant. The maximum length is 512 characters.
   */
  description?: string | null;

  /**
   * The system instructions that the assistant uses. The maximum length is 256,000
   * characters.
   */
  instructions?: string | null;

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
   * ID of the model to use. You can use the
   * [List models](/docs/api-reference/models/list) API to see all of your available
   * models, or see our [Model overview](/docs/models) for descriptions of them.
   */
  model?: (string & {}) | AssistantSupportedModels;

  /**
   * The name of the assistant. The maximum length is 256 characters.
   */
  name?: string | null;

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
  reasoning_effort?: ReasoningEffort | null;

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
  response_format?: RunsAPI.AssistantsAPIResponseFormatOption | null;

  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will
   * make the output more random, while lower values like 0.2 will make it more
   * focused and deterministic.
   */
  temperature?: number | null;

  /**
   * A set of resources that are used by the assistant's tools. The resources are
   * specific to the type of tool. For example, the `code_interpreter` tool requires
   * a list of file IDs, while the `file_search` tool requires a list of vector store
   * IDs.
   */
  tool_resources?: AssistantUpdateParams.ToolResources | null;

  /**
   * A list of tool enabled on the assistant. There can be a maximum of 128 tools per
   * assistant. Tools can be of types `code_interpreter`, `file_search`, or
   * `function`.
   */
  tools?: Array<AssistantToolsCode | AssistantToolsFileSearch | AssistantToolsFunction>;

  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the
   * model considers the results of the tokens with top_p probability mass. So 0.1
   * means only the tokens comprising the top 10% probability mass are considered.
   *
   * We generally recommend altering this or temperature but not both.
   */
  top_p?: number | null;
}

export namespace AssistantUpdateParams {
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
       * Overrides the list of [file](/docs/api-reference/files) IDs made available to
       * the `code_interpreter` tool. There can be a maximum of 20 files associated with
       * the tool.
       */
      file_ids?: Array<string>;
    }

    export interface FileSearch {
      /**
       * Overrides the [vector store](/docs/api-reference/vector-stores/object) attached
       * to this assistant. There can be a maximum of 1 vector store attached to the
       * assistant.
       */
      vector_store_ids?: Array<string>;
    }
  }
}

export interface AssistantListParams {
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

export declare namespace Assistants {
  export {
    type AssistantObject as AssistantObject,
    type AssistantSupportedModels as AssistantSupportedModels,
    type AssistantToolsCode as AssistantToolsCode,
    type AssistantToolsFileSearch as AssistantToolsFileSearch,
    type AssistantToolsFunction as AssistantToolsFunction,
    type FileSearchRanker as FileSearchRanker,
    type FunctionObject as FunctionObject,
    type ReasoningEffort as ReasoningEffort,
    type AssistantListResponse as AssistantListResponse,
    type AssistantDeleteResponse as AssistantDeleteResponse,
    type AssistantCreateParams as AssistantCreateParams,
    type AssistantUpdateParams as AssistantUpdateParams,
    type AssistantListParams as AssistantListParams,
  };
}
