// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from './completions';
import {
  ChatCompletionTool,
  CompletionCreateParams,
  CompletionDeleteResponse,
  CompletionListMessagesParams,
  CompletionListMessagesResponse,
  CompletionListParams,
  CompletionListResponse,
  CompletionUpdateParams,
  Completions,
  CreateResponse,
  ImageContentPart,
  JsonObjectFormat,
  JsonSchemaFormat,
  MessageToolCall,
  Metadata,
  ModelResponsePropertiesCreate,
  ResponseMessage,
  ServiceTier,
  SharedModelIDs,
  TextContentPart,
  TextFormat,
  TokenLogprob,
  Usage,
  Verbosity,
} from './completions';

export class Chat extends APIResource {
  completions: CompletionsAPI.Completions = new CompletionsAPI.Completions(this._client);
}

Chat.Completions = Completions;

export declare namespace Chat {
  export {
    Completions as Completions,
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
