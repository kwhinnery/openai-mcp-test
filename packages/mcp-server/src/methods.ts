// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.completions.create',
    fullyQualifiedName: 'completions.create',
    httpMethod: 'post',
    httpPath: '/completions',
  },
  {
    clientCallName: 'client.chat.completions.create',
    fullyQualifiedName: 'chat.completions.create',
    httpMethod: 'post',
    httpPath: '/chat/completions',
  },
  {
    clientCallName: 'client.chat.completions.retrieve',
    fullyQualifiedName: 'chat.completions.retrieve',
    httpMethod: 'get',
    httpPath: '/chat/completions/{completion_id}',
  },
  {
    clientCallName: 'client.chat.completions.update',
    fullyQualifiedName: 'chat.completions.update',
    httpMethod: 'post',
    httpPath: '/chat/completions/{completion_id}',
  },
  {
    clientCallName: 'client.chat.completions.list',
    fullyQualifiedName: 'chat.completions.list',
    httpMethod: 'get',
    httpPath: '/chat/completions',
  },
  {
    clientCallName: 'client.chat.completions.delete',
    fullyQualifiedName: 'chat.completions.delete',
    httpMethod: 'delete',
    httpPath: '/chat/completions/{completion_id}',
  },
  {
    clientCallName: 'client.chat.completions.messages.list',
    fullyQualifiedName: 'chat.completions.messages.list',
    httpMethod: 'get',
    httpPath: '/chat/completions/{completion_id}/messages',
  },
  {
    clientCallName: 'client.embeddings.create',
    fullyQualifiedName: 'embeddings.create',
    httpMethod: 'post',
    httpPath: '/embeddings',
  },
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.retrieve',
    fullyQualifiedName: 'files.retrieve',
    httpMethod: 'get',
    httpPath: '/files/{file_id}',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/files/{file_id}',
  },
  {
    clientCallName: 'client.files.content',
    fullyQualifiedName: 'files.content',
    httpMethod: 'get',
    httpPath: '/files/{file_id}/content',
  },
  {
    clientCallName: 'client.images.createVariation',
    fullyQualifiedName: 'images.createVariation',
    httpMethod: 'post',
    httpPath: '/images/variations',
  },
  {
    clientCallName: 'client.images.edit',
    fullyQualifiedName: 'images.edit',
    httpMethod: 'post',
    httpPath: '/images/edits',
  },
  {
    clientCallName: 'client.images.generate',
    fullyQualifiedName: 'images.generate',
    httpMethod: 'post',
    httpPath: '/images/generations',
  },
  {
    clientCallName: 'client.audio.transcriptions.create',
    fullyQualifiedName: 'audio.transcriptions.create',
    httpMethod: 'post',
    httpPath: '/audio/transcriptions',
  },
  {
    clientCallName: 'client.audio.translations.create',
    fullyQualifiedName: 'audio.translations.create',
    httpMethod: 'post',
    httpPath: '/audio/translations',
  },
  {
    clientCallName: 'client.audio.speech.create',
    fullyQualifiedName: 'audio.speech.create',
    httpMethod: 'post',
    httpPath: '/audio/speech',
  },
  {
    clientCallName: 'client.moderations.create',
    fullyQualifiedName: 'moderations.create',
    httpMethod: 'post',
    httpPath: '/moderations',
  },
  {
    clientCallName: 'client.models.retrieve',
    fullyQualifiedName: 'models.retrieve',
    httpMethod: 'get',
    httpPath: '/models/{model}',
  },
  {
    clientCallName: 'client.models.list',
    fullyQualifiedName: 'models.list',
    httpMethod: 'get',
    httpPath: '/models',
  },
  {
    clientCallName: 'client.models.delete',
    fullyQualifiedName: 'models.delete',
    httpMethod: 'delete',
    httpPath: '/models/{model}',
  },
  {
    clientCallName: 'client.fineTuning.jobs.create',
    fullyQualifiedName: 'fineTuning.jobs.create',
    httpMethod: 'post',
    httpPath: '/fine_tuning/jobs',
  },
  {
    clientCallName: 'client.fineTuning.jobs.retrieve',
    fullyQualifiedName: 'fineTuning.jobs.retrieve',
    httpMethod: 'get',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}',
  },
  {
    clientCallName: 'client.fineTuning.jobs.list',
    fullyQualifiedName: 'fineTuning.jobs.list',
    httpMethod: 'get',
    httpPath: '/fine_tuning/jobs',
  },
  {
    clientCallName: 'client.fineTuning.jobs.cancel',
    fullyQualifiedName: 'fineTuning.jobs.cancel',
    httpMethod: 'post',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}/cancel',
  },
  {
    clientCallName: 'client.fineTuning.jobs.listEvents',
    fullyQualifiedName: 'fineTuning.jobs.listEvents',
    httpMethod: 'get',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}/events',
  },
  {
    clientCallName: 'client.fineTuning.jobs.pause',
    fullyQualifiedName: 'fineTuning.jobs.pause',
    httpMethod: 'post',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}/pause',
  },
  {
    clientCallName: 'client.fineTuning.jobs.resume',
    fullyQualifiedName: 'fineTuning.jobs.resume',
    httpMethod: 'post',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}/resume',
  },
  {
    clientCallName: 'client.fineTuning.jobs.checkpoints.list',
    fullyQualifiedName: 'fineTuning.jobs.checkpoints.list',
    httpMethod: 'get',
    httpPath: '/fine_tuning/jobs/{fine_tuning_job_id}/checkpoints',
  },
  {
    clientCallName: 'client.fineTuning.checkpoints.permissions.create',
    fullyQualifiedName: 'fineTuning.checkpoints.permissions.create',
    httpMethod: 'post',
    httpPath: '/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions',
  },
  {
    clientCallName: 'client.fineTuning.checkpoints.permissions.retrieve',
    fullyQualifiedName: 'fineTuning.checkpoints.permissions.retrieve',
    httpMethod: 'get',
    httpPath: '/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions',
  },
  {
    clientCallName: 'client.fineTuning.checkpoints.permissions.delete',
    fullyQualifiedName: 'fineTuning.checkpoints.permissions.delete',
    httpMethod: 'delete',
    httpPath: '/fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}',
  },
  {
    clientCallName: 'client.fineTuning.alpha.graders.run',
    fullyQualifiedName: 'fineTuning.alpha.graders.run',
    httpMethod: 'post',
    httpPath: '/fine_tuning/alpha/graders/run',
  },
  {
    clientCallName: 'client.fineTuning.alpha.graders.validate',
    fullyQualifiedName: 'fineTuning.alpha.graders.validate',
    httpMethod: 'post',
    httpPath: '/fine_tuning/alpha/graders/validate',
  },
  {
    clientCallName: 'client.vectorStores.create',
    fullyQualifiedName: 'vectorStores.create',
    httpMethod: 'post',
    httpPath: '/vector_stores',
  },
  {
    clientCallName: 'client.vectorStores.retrieve',
    fullyQualifiedName: 'vectorStores.retrieve',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}',
  },
  {
    clientCallName: 'client.vectorStores.update',
    fullyQualifiedName: 'vectorStores.update',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}',
  },
  {
    clientCallName: 'client.vectorStores.list',
    fullyQualifiedName: 'vectorStores.list',
    httpMethod: 'get',
    httpPath: '/vector_stores',
  },
  {
    clientCallName: 'client.vectorStores.delete',
    fullyQualifiedName: 'vectorStores.delete',
    httpMethod: 'delete',
    httpPath: '/vector_stores/{vector_store_id}',
  },
  {
    clientCallName: 'client.vectorStores.search',
    fullyQualifiedName: 'vectorStores.search',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}/search',
  },
  {
    clientCallName: 'client.vectorStores.files.create',
    fullyQualifiedName: 'vectorStores.files.create',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}/files',
  },
  {
    clientCallName: 'client.vectorStores.files.retrieve',
    fullyQualifiedName: 'vectorStores.files.retrieve',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.vectorStores.files.update',
    fullyQualifiedName: 'vectorStores.files.update',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.vectorStores.files.list',
    fullyQualifiedName: 'vectorStores.files.list',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}/files',
  },
  {
    clientCallName: 'client.vectorStores.files.delete',
    fullyQualifiedName: 'vectorStores.files.delete',
    httpMethod: 'delete',
    httpPath: '/vector_stores/{vector_store_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.vectorStores.files.content',
    fullyQualifiedName: 'vectorStores.files.content',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}/files/{file_id}/content',
  },
  {
    clientCallName: 'client.vectorStores.fileBatches.create',
    fullyQualifiedName: 'vectorStores.fileBatches.create',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}/file_batches',
  },
  {
    clientCallName: 'client.vectorStores.fileBatches.retrieve',
    fullyQualifiedName: 'vectorStores.fileBatches.retrieve',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}/file_batches/{batch_id}',
  },
  {
    clientCallName: 'client.vectorStores.fileBatches.cancel',
    fullyQualifiedName: 'vectorStores.fileBatches.cancel',
    httpMethod: 'post',
    httpPath: '/vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel',
  },
  {
    clientCallName: 'client.vectorStores.fileBatches.listFiles',
    fullyQualifiedName: 'vectorStores.fileBatches.listFiles',
    httpMethod: 'get',
    httpPath: '/vector_stores/{vector_store_id}/file_batches/{batch_id}/files',
  },
  { clientCallName: 'client.webhooks.unwrap', fullyQualifiedName: 'webhooks.unwrap' },
  {
    clientCallName: 'client.beta.chatkit.sessions.create',
    fullyQualifiedName: 'beta.chatkit.sessions.create',
    httpMethod: 'post',
    httpPath: '/chatkit/sessions',
  },
  {
    clientCallName: 'client.beta.chatkit.sessions.cancel',
    fullyQualifiedName: 'beta.chatkit.sessions.cancel',
    httpMethod: 'post',
    httpPath: '/chatkit/sessions/{session_id}/cancel',
  },
  {
    clientCallName: 'client.beta.chatkit.threads.retrieve',
    fullyQualifiedName: 'beta.chatkit.threads.retrieve',
    httpMethod: 'get',
    httpPath: '/chatkit/threads/{thread_id}',
  },
  {
    clientCallName: 'client.beta.chatkit.threads.list',
    fullyQualifiedName: 'beta.chatkit.threads.list',
    httpMethod: 'get',
    httpPath: '/chatkit/threads',
  },
  {
    clientCallName: 'client.beta.chatkit.threads.delete',
    fullyQualifiedName: 'beta.chatkit.threads.delete',
    httpMethod: 'delete',
    httpPath: '/chatkit/threads/{thread_id}',
  },
  {
    clientCallName: 'client.beta.chatkit.threads.listItems',
    fullyQualifiedName: 'beta.chatkit.threads.listItems',
    httpMethod: 'get',
    httpPath: '/chatkit/threads/{thread_id}/items',
  },
  {
    clientCallName: 'client.beta.assistants.create',
    fullyQualifiedName: 'beta.assistants.create',
    httpMethod: 'post',
    httpPath: '/assistants',
  },
  {
    clientCallName: 'client.beta.assistants.retrieve',
    fullyQualifiedName: 'beta.assistants.retrieve',
    httpMethod: 'get',
    httpPath: '/assistants/{assistant_id}',
  },
  {
    clientCallName: 'client.beta.assistants.update',
    fullyQualifiedName: 'beta.assistants.update',
    httpMethod: 'post',
    httpPath: '/assistants/{assistant_id}',
  },
  {
    clientCallName: 'client.beta.assistants.list',
    fullyQualifiedName: 'beta.assistants.list',
    httpMethod: 'get',
    httpPath: '/assistants',
  },
  {
    clientCallName: 'client.beta.assistants.delete',
    fullyQualifiedName: 'beta.assistants.delete',
    httpMethod: 'delete',
    httpPath: '/assistants/{assistant_id}',
  },
  {
    clientCallName: 'client.beta.threads.create',
    fullyQualifiedName: 'beta.threads.create',
    httpMethod: 'post',
    httpPath: '/threads',
  },
  {
    clientCallName: 'client.beta.threads.retrieve',
    fullyQualifiedName: 'beta.threads.retrieve',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}',
  },
  {
    clientCallName: 'client.beta.threads.update',
    fullyQualifiedName: 'beta.threads.update',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}',
  },
  {
    clientCallName: 'client.beta.threads.delete',
    fullyQualifiedName: 'beta.threads.delete',
    httpMethod: 'delete',
    httpPath: '/threads/{thread_id}',
  },
  {
    clientCallName: 'client.beta.threads.createAndRun',
    fullyQualifiedName: 'beta.threads.createAndRun',
    httpMethod: 'post',
    httpPath: '/threads/runs',
  },
  {
    clientCallName: 'client.beta.threads.runs.create',
    fullyQualifiedName: 'beta.threads.runs.create',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/runs',
  },
  {
    clientCallName: 'client.beta.threads.runs.retrieve',
    fullyQualifiedName: 'beta.threads.runs.retrieve',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.beta.threads.runs.update',
    fullyQualifiedName: 'beta.threads.runs.update',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.beta.threads.runs.list',
    fullyQualifiedName: 'beta.threads.runs.list',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/runs',
  },
  {
    clientCallName: 'client.beta.threads.runs.cancel',
    fullyQualifiedName: 'beta.threads.runs.cancel',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/runs/{run_id}/cancel',
  },
  {
    clientCallName: 'client.beta.threads.runs.submitToolOutputs',
    fullyQualifiedName: 'beta.threads.runs.submitToolOutputs',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/runs/{run_id}/submit_tool_outputs',
  },
  {
    clientCallName: 'client.beta.threads.runs.steps.retrieve',
    fullyQualifiedName: 'beta.threads.runs.steps.retrieve',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/runs/{run_id}/steps/{step_id}',
  },
  {
    clientCallName: 'client.beta.threads.runs.steps.list',
    fullyQualifiedName: 'beta.threads.runs.steps.list',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/runs/{run_id}/steps',
  },
  {
    clientCallName: 'client.beta.threads.messages.create',
    fullyQualifiedName: 'beta.threads.messages.create',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/messages',
  },
  {
    clientCallName: 'client.beta.threads.messages.retrieve',
    fullyQualifiedName: 'beta.threads.messages.retrieve',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/messages/{message_id}',
  },
  {
    clientCallName: 'client.beta.threads.messages.update',
    fullyQualifiedName: 'beta.threads.messages.update',
    httpMethod: 'post',
    httpPath: '/threads/{thread_id}/messages/{message_id}',
  },
  {
    clientCallName: 'client.beta.threads.messages.list',
    fullyQualifiedName: 'beta.threads.messages.list',
    httpMethod: 'get',
    httpPath: '/threads/{thread_id}/messages',
  },
  {
    clientCallName: 'client.beta.threads.messages.delete',
    fullyQualifiedName: 'beta.threads.messages.delete',
    httpMethod: 'delete',
    httpPath: '/threads/{thread_id}/messages/{message_id}',
  },
  {
    clientCallName: 'client.batches.create',
    fullyQualifiedName: 'batches.create',
    httpMethod: 'post',
    httpPath: '/batches',
  },
  {
    clientCallName: 'client.batches.retrieve',
    fullyQualifiedName: 'batches.retrieve',
    httpMethod: 'get',
    httpPath: '/batches/{batch_id}',
  },
  {
    clientCallName: 'client.batches.list',
    fullyQualifiedName: 'batches.list',
    httpMethod: 'get',
    httpPath: '/batches',
  },
  {
    clientCallName: 'client.batches.cancel',
    fullyQualifiedName: 'batches.cancel',
    httpMethod: 'post',
    httpPath: '/batches/{batch_id}/cancel',
  },
  {
    clientCallName: 'client.uploads.create',
    fullyQualifiedName: 'uploads.create',
    httpMethod: 'post',
    httpPath: '/uploads',
  },
  {
    clientCallName: 'client.uploads.cancel',
    fullyQualifiedName: 'uploads.cancel',
    httpMethod: 'post',
    httpPath: '/uploads/{upload_id}/cancel',
  },
  {
    clientCallName: 'client.uploads.complete',
    fullyQualifiedName: 'uploads.complete',
    httpMethod: 'post',
    httpPath: '/uploads/{upload_id}/complete',
  },
  {
    clientCallName: 'client.uploads.parts.create',
    fullyQualifiedName: 'uploads.parts.create',
    httpMethod: 'post',
    httpPath: '/uploads/{upload_id}/parts',
  },
  {
    clientCallName: 'client.responses.create',
    fullyQualifiedName: 'responses.create',
    httpMethod: 'post',
    httpPath: '/responses',
  },
  {
    clientCallName: 'client.responses.retrieve',
    fullyQualifiedName: 'responses.retrieve',
    httpMethod: 'get',
    httpPath: '/responses/{response_id}',
  },
  {
    clientCallName: 'client.responses.delete',
    fullyQualifiedName: 'responses.delete',
    httpMethod: 'delete',
    httpPath: '/responses/{response_id}',
  },
  {
    clientCallName: 'client.responses.cancel',
    fullyQualifiedName: 'responses.cancel',
    httpMethod: 'post',
    httpPath: '/responses/{response_id}/cancel',
  },
  {
    clientCallName: 'client.responses.compact',
    fullyQualifiedName: 'responses.compact',
    httpMethod: 'post',
    httpPath: '/responses/compact',
  },
  {
    clientCallName: 'client.responses.inputItems.list',
    fullyQualifiedName: 'responses.inputItems.list',
    httpMethod: 'get',
    httpPath: '/responses/{response_id}/input_items',
  },
  {
    clientCallName: 'client.responses.inputTokens.count',
    fullyQualifiedName: 'responses.inputTokens.count',
    httpMethod: 'post',
    httpPath: '/responses/input_tokens',
  },
  {
    clientCallName: 'client.realtime.clientSecrets.create',
    fullyQualifiedName: 'realtime.clientSecrets.create',
    httpMethod: 'post',
    httpPath: '/realtime/client_secrets',
  },
  {
    clientCallName: 'client.realtime.calls.accept',
    fullyQualifiedName: 'realtime.calls.accept',
    httpMethod: 'post',
    httpPath: '/realtime/calls/{call_id}/accept',
  },
  {
    clientCallName: 'client.realtime.calls.hangup',
    fullyQualifiedName: 'realtime.calls.hangup',
    httpMethod: 'post',
    httpPath: '/realtime/calls/{call_id}/hangup',
  },
  {
    clientCallName: 'client.realtime.calls.refer',
    fullyQualifiedName: 'realtime.calls.refer',
    httpMethod: 'post',
    httpPath: '/realtime/calls/{call_id}/refer',
  },
  {
    clientCallName: 'client.realtime.calls.reject',
    fullyQualifiedName: 'realtime.calls.reject',
    httpMethod: 'post',
    httpPath: '/realtime/calls/{call_id}/reject',
  },
  {
    clientCallName: 'client.conversations.create',
    fullyQualifiedName: 'conversations.create',
    httpMethod: 'post',
    httpPath: '/conversations',
  },
  {
    clientCallName: 'client.conversations.retrieve',
    fullyQualifiedName: 'conversations.retrieve',
    httpMethod: 'get',
    httpPath: '/conversations/{conversation_id}',
  },
  {
    clientCallName: 'client.conversations.update',
    fullyQualifiedName: 'conversations.update',
    httpMethod: 'post',
    httpPath: '/conversations/{conversation_id}',
  },
  {
    clientCallName: 'client.conversations.delete',
    fullyQualifiedName: 'conversations.delete',
    httpMethod: 'delete',
    httpPath: '/conversations/{conversation_id}',
  },
  {
    clientCallName: 'client.conversations.items.create',
    fullyQualifiedName: 'conversations.items.create',
    httpMethod: 'post',
    httpPath: '/conversations/{conversation_id}/items',
  },
  {
    clientCallName: 'client.conversations.items.retrieve',
    fullyQualifiedName: 'conversations.items.retrieve',
    httpMethod: 'get',
    httpPath: '/conversations/{conversation_id}/items/{item_id}',
  },
  {
    clientCallName: 'client.conversations.items.list',
    fullyQualifiedName: 'conversations.items.list',
    httpMethod: 'get',
    httpPath: '/conversations/{conversation_id}/items',
  },
  {
    clientCallName: 'client.conversations.items.delete',
    fullyQualifiedName: 'conversations.items.delete',
    httpMethod: 'delete',
    httpPath: '/conversations/{conversation_id}/items/{item_id}',
  },
  {
    clientCallName: 'client.evals.create',
    fullyQualifiedName: 'evals.create',
    httpMethod: 'post',
    httpPath: '/evals',
  },
  {
    clientCallName: 'client.evals.retrieve',
    fullyQualifiedName: 'evals.retrieve',
    httpMethod: 'get',
    httpPath: '/evals/{eval_id}',
  },
  {
    clientCallName: 'client.evals.update',
    fullyQualifiedName: 'evals.update',
    httpMethod: 'post',
    httpPath: '/evals/{eval_id}',
  },
  {
    clientCallName: 'client.evals.list',
    fullyQualifiedName: 'evals.list',
    httpMethod: 'get',
    httpPath: '/evals',
  },
  {
    clientCallName: 'client.evals.delete',
    fullyQualifiedName: 'evals.delete',
    httpMethod: 'delete',
    httpPath: '/evals/{eval_id}',
  },
  {
    clientCallName: 'client.evals.runs.create',
    fullyQualifiedName: 'evals.runs.create',
    httpMethod: 'post',
    httpPath: '/evals/{eval_id}/runs',
  },
  {
    clientCallName: 'client.evals.runs.retrieve',
    fullyQualifiedName: 'evals.runs.retrieve',
    httpMethod: 'get',
    httpPath: '/evals/{eval_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.evals.runs.list',
    fullyQualifiedName: 'evals.runs.list',
    httpMethod: 'get',
    httpPath: '/evals/{eval_id}/runs',
  },
  {
    clientCallName: 'client.evals.runs.delete',
    fullyQualifiedName: 'evals.runs.delete',
    httpMethod: 'delete',
    httpPath: '/evals/{eval_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.evals.runs.cancel',
    fullyQualifiedName: 'evals.runs.cancel',
    httpMethod: 'post',
    httpPath: '/evals/{eval_id}/runs/{run_id}',
  },
  {
    clientCallName: 'client.evals.runs.outputItems.retrieve',
    fullyQualifiedName: 'evals.runs.outputItems.retrieve',
    httpMethod: 'get',
    httpPath: '/evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}',
  },
  {
    clientCallName: 'client.evals.runs.outputItems.list',
    fullyQualifiedName: 'evals.runs.outputItems.list',
    httpMethod: 'get',
    httpPath: '/evals/{eval_id}/runs/{run_id}/output_items',
  },
  {
    clientCallName: 'client.containers.create',
    fullyQualifiedName: 'containers.create',
    httpMethod: 'post',
    httpPath: '/containers',
  },
  {
    clientCallName: 'client.containers.retrieve',
    fullyQualifiedName: 'containers.retrieve',
    httpMethod: 'get',
    httpPath: '/containers/{container_id}',
  },
  {
    clientCallName: 'client.containers.list',
    fullyQualifiedName: 'containers.list',
    httpMethod: 'get',
    httpPath: '/containers',
  },
  {
    clientCallName: 'client.containers.delete',
    fullyQualifiedName: 'containers.delete',
    httpMethod: 'delete',
    httpPath: '/containers/{container_id}',
  },
  {
    clientCallName: 'client.containers.files.create',
    fullyQualifiedName: 'containers.files.create',
    httpMethod: 'post',
    httpPath: '/containers/{container_id}/files',
  },
  {
    clientCallName: 'client.containers.files.retrieve',
    fullyQualifiedName: 'containers.files.retrieve',
    httpMethod: 'get',
    httpPath: '/containers/{container_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.containers.files.list',
    fullyQualifiedName: 'containers.files.list',
    httpMethod: 'get',
    httpPath: '/containers/{container_id}/files',
  },
  {
    clientCallName: 'client.containers.files.delete',
    fullyQualifiedName: 'containers.files.delete',
    httpMethod: 'delete',
    httpPath: '/containers/{container_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.containers.files.content.retrieve',
    fullyQualifiedName: 'containers.files.content.retrieve',
    httpMethod: 'get',
    httpPath: '/containers/{container_id}/files/{file_id}/content',
  },
  {
    clientCallName: 'client.skills.create',
    fullyQualifiedName: 'skills.create',
    httpMethod: 'post',
    httpPath: '/skills',
  },
  {
    clientCallName: 'client.skills.retrieve',
    fullyQualifiedName: 'skills.retrieve',
    httpMethod: 'get',
    httpPath: '/skills/{skill_id}',
  },
  {
    clientCallName: 'client.skills.update',
    fullyQualifiedName: 'skills.update',
    httpMethod: 'post',
    httpPath: '/skills/{skill_id}',
  },
  {
    clientCallName: 'client.skills.list',
    fullyQualifiedName: 'skills.list',
    httpMethod: 'get',
    httpPath: '/skills',
  },
  {
    clientCallName: 'client.skills.delete',
    fullyQualifiedName: 'skills.delete',
    httpMethod: 'delete',
    httpPath: '/skills/{skill_id}',
  },
  {
    clientCallName: 'client.skills.content.retrieve',
    fullyQualifiedName: 'skills.content.retrieve',
    httpMethod: 'get',
    httpPath: '/skills/{skill_id}/content',
  },
  {
    clientCallName: 'client.skills.versions.create',
    fullyQualifiedName: 'skills.versions.create',
    httpMethod: 'post',
    httpPath: '/skills/{skill_id}/versions',
  },
  {
    clientCallName: 'client.skills.versions.retrieve',
    fullyQualifiedName: 'skills.versions.retrieve',
    httpMethod: 'get',
    httpPath: '/skills/{skill_id}/versions/{version}',
  },
  {
    clientCallName: 'client.skills.versions.list',
    fullyQualifiedName: 'skills.versions.list',
    httpMethod: 'get',
    httpPath: '/skills/{skill_id}/versions',
  },
  {
    clientCallName: 'client.skills.versions.delete',
    fullyQualifiedName: 'skills.versions.delete',
    httpMethod: 'delete',
    httpPath: '/skills/{skill_id}/versions/{version}',
  },
  {
    clientCallName: 'client.skills.versions.content.retrieve',
    fullyQualifiedName: 'skills.versions.content.retrieve',
    httpMethod: 'get',
    httpPath: '/skills/{skill_id}/versions/{version}/content',
  },
  {
    clientCallName: 'client.videos.create',
    fullyQualifiedName: 'videos.create',
    httpMethod: 'post',
    httpPath: '/videos',
  },
  {
    clientCallName: 'client.videos.retrieve',
    fullyQualifiedName: 'videos.retrieve',
    httpMethod: 'get',
    httpPath: '/videos/{video_id}',
  },
  {
    clientCallName: 'client.videos.list',
    fullyQualifiedName: 'videos.list',
    httpMethod: 'get',
    httpPath: '/videos',
  },
  {
    clientCallName: 'client.videos.delete',
    fullyQualifiedName: 'videos.delete',
    httpMethod: 'delete',
    httpPath: '/videos/{video_id}',
  },
  {
    clientCallName: 'client.videos.downloadContent',
    fullyQualifiedName: 'videos.downloadContent',
    httpMethod: 'get',
    httpPath: '/videos/{video_id}/content',
  },
  {
    clientCallName: 'client.videos.remix',
    fullyQualifiedName: 'videos.remix',
    httpMethod: 'post',
    httpPath: '/videos/{video_id}/remix',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
