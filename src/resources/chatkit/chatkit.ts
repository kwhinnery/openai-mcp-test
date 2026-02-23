// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionsAPI from './sessions';
import { ChatSession, SessionCreateParams, Sessions } from './sessions';
import * as ThreadsAPI from './threads';
import {
  TaskType,
  Thread,
  ThreadDeleteResponse,
  ThreadListItemsParams,
  ThreadListItemsResponse,
  ThreadListParams,
  ThreadListResponse,
  Threads,
} from './threads';

export class Chatkit extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
}

Chatkit.Sessions = Sessions;
Chatkit.Threads = Threads;

export declare namespace Chatkit {
  export {
    Sessions as Sessions,
    type ChatSession as ChatSession,
    type SessionCreateParams as SessionCreateParams,
  };

  export {
    Threads as Threads,
    type TaskType as TaskType,
    type Thread as Thread,
    type ThreadListResponse as ThreadListResponse,
    type ThreadDeleteResponse as ThreadDeleteResponse,
    type ThreadListItemsResponse as ThreadListItemsResponse,
    type ThreadListParams as ThreadListParams,
    type ThreadListItemsParams as ThreadListItemsParams,
  };
}
