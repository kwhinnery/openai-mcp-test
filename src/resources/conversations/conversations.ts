// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompletionsAPI from '../chat/completions';
import * as ItemsAPI from './items';
import {
  ApplyPatchToolCall,
  ApplyPatchToolCallOutput,
  CodeInterpreterToolCall,
  ComputerCallSafetyCheckParam,
  ComputerScreenshotImage,
  ComputerToolCall,
  ComputerToolCallOutputResource,
  ContainerReferenceParam,
  ConversationItem,
  ConversationItemList,
  ConversationResource,
  CustomToolCall,
  CustomToolCallOutput,
  EasyInputMessage,
  FileSearchToolCall,
  FunctionAndCustomToolCallOutput,
  FunctionCallItemStatus,
  FunctionShellCall,
  FunctionShellCallItemStatus,
  FunctionShellCallOutput,
  FunctionToolCall,
  FunctionToolCallOutput,
  FunctionToolCallOutputResource,
  FunctionToolCallResource,
  ImageGenToolCall,
  IncludeEnum,
  InputContent,
  InputFileContent,
  InputImageContent,
  InputItem,
  InputMessage,
  InputTextContent,
  ItemCreateParams,
  ItemDeleteParams,
  ItemListParams,
  ItemRetrieveParams,
  Items,
  LocalEnvironmentParam,
  LocalShellToolCall,
  LocalShellToolCallOutput,
  McpApprovalRequest,
  McpApprovalResponseResource,
  McpListTools,
  McpToolCall,
  Message,
  OutputMessage,
  OutputTextContent,
  ReasoningItem,
  ReasoningTextContent,
  RefusalContent,
  SummaryTextContent,
  WebSearchToolCall,
} from './items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversations extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create a conversation.
   */
  create(
    body: ConversationCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemsAPI.ConversationResource> {
    return this._client.post('/conversations', { body, ...options });
  }

  /**
   * Get a conversation
   */
  retrieve(conversationID: string, options?: RequestOptions): APIPromise<ItemsAPI.ConversationResource> {
    return this._client.get(path`/conversations/${conversationID}`, options);
  }

  /**
   * Update a conversation
   */
  update(
    conversationID: string,
    body: ConversationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ItemsAPI.ConversationResource> {
    return this._client.post(path`/conversations/${conversationID}`, { body, ...options });
  }

  /**
   * Delete a conversation. Items in the conversation will not be deleted.
   */
  delete(conversationID: string, options?: RequestOptions): APIPromise<ConversationDeleteResponse> {
    return this._client.delete(path`/conversations/${conversationID}`, options);
  }
}

export interface ConversationDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'conversation.deleted';
}

export interface ConversationCreateParams {
  /**
   * Initial items to include in the conversation context. You may add up to 20 items
   * at a time.
   */
  items?: Array<ItemsAPI.InputItem> | null;

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

export interface ConversationUpdateParams {
  /**
   * Set of 16 key-value pairs that can be attached to an object. This can be useful
   * for storing additional information about the object in a structured format, and
   * querying for objects via API or the dashboard.
   *
   * Keys are strings with a maximum length of 64 characters. Values are strings with
   * a maximum length of 512 characters.
   */
  metadata: CompletionsAPI.Metadata | null;
}

Conversations.Items = Items;

export declare namespace Conversations {
  export {
    type ConversationDeleteResponse as ConversationDeleteResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
  };

  export {
    Items as Items,
    type ApplyPatchToolCall as ApplyPatchToolCall,
    type ApplyPatchToolCallOutput as ApplyPatchToolCallOutput,
    type CodeInterpreterToolCall as CodeInterpreterToolCall,
    type ComputerCallSafetyCheckParam as ComputerCallSafetyCheckParam,
    type ComputerScreenshotImage as ComputerScreenshotImage,
    type ComputerToolCall as ComputerToolCall,
    type ComputerToolCallOutputResource as ComputerToolCallOutputResource,
    type ContainerReferenceParam as ContainerReferenceParam,
    type ConversationItem as ConversationItem,
    type ConversationItemList as ConversationItemList,
    type ConversationResource as ConversationResource,
    type CustomToolCall as CustomToolCall,
    type CustomToolCallOutput as CustomToolCallOutput,
    type EasyInputMessage as EasyInputMessage,
    type FileSearchToolCall as FileSearchToolCall,
    type FunctionAndCustomToolCallOutput as FunctionAndCustomToolCallOutput,
    type FunctionCallItemStatus as FunctionCallItemStatus,
    type FunctionShellCall as FunctionShellCall,
    type FunctionShellCallItemStatus as FunctionShellCallItemStatus,
    type FunctionShellCallOutput as FunctionShellCallOutput,
    type FunctionToolCall as FunctionToolCall,
    type FunctionToolCallOutput as FunctionToolCallOutput,
    type FunctionToolCallOutputResource as FunctionToolCallOutputResource,
    type FunctionToolCallResource as FunctionToolCallResource,
    type ImageGenToolCall as ImageGenToolCall,
    type IncludeEnum as IncludeEnum,
    type InputContent as InputContent,
    type InputFileContent as InputFileContent,
    type InputImageContent as InputImageContent,
    type InputItem as InputItem,
    type InputMessage as InputMessage,
    type InputTextContent as InputTextContent,
    type LocalEnvironmentParam as LocalEnvironmentParam,
    type LocalShellToolCall as LocalShellToolCall,
    type LocalShellToolCallOutput as LocalShellToolCallOutput,
    type McpApprovalRequest as McpApprovalRequest,
    type McpApprovalResponseResource as McpApprovalResponseResource,
    type McpListTools as McpListTools,
    type McpToolCall as McpToolCall,
    type Message as Message,
    type OutputMessage as OutputMessage,
    type OutputTextContent as OutputTextContent,
    type ReasoningItem as ReasoningItem,
    type ReasoningTextContent as ReasoningTextContent,
    type RefusalContent as RefusalContent,
    type SummaryTextContent as SummaryTextContent,
    type WebSearchToolCall as WebSearchToolCall,
    type ItemCreateParams as ItemCreateParams,
    type ItemRetrieveParams as ItemRetrieveParams,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
  };
}
