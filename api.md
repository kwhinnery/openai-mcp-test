# Assistants

Types:

- <code><a href="./src/resources/assistants.ts">AssistantObject</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantSupportedModels</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantToolsCode</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantToolsFileSearch</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantToolsFunction</a></code>
- <code><a href="./src/resources/assistants.ts">FileSearchRanker</a></code>
- <code><a href="./src/resources/assistants.ts">FunctionObject</a></code>
- <code><a href="./src/resources/assistants.ts">ReasoningEffort</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantListResponse</a></code>
- <code><a href="./src/resources/assistants.ts">AssistantDeleteResponse</a></code>

Methods:

- <code title="post /assistants">client.assistants.<a href="./src/resources/assistants.ts">create</a>({ ...params }) -> AssistantObject</code>
- <code title="get /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants.ts">retrieve</a>(assistantID) -> AssistantObject</code>
- <code title="post /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants.ts">update</a>(assistantID, { ...params }) -> AssistantObject</code>
- <code title="get /assistants">client.assistants.<a href="./src/resources/assistants.ts">list</a>({ ...params }) -> AssistantListResponse</code>
- <code title="delete /assistants/{assistant_id}">client.assistants.<a href="./src/resources/assistants.ts">delete</a>(assistantID) -> AssistantDeleteResponse</code>

# Audio

Types:

- <code><a href="./src/resources/audio/audio.ts">TranscriptTextUsageDuration</a></code>
- <code><a href="./src/resources/audio/audio.ts">TranscriptTextUsageTokens</a></code>
- <code><a href="./src/resources/audio/audio.ts">TranscriptionSegment</a></code>
- <code><a href="./src/resources/audio/audio.ts">VoiceIDsOrCustomVoice</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioCreateCustomVoiceResponse</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioTranscribeAudioResponse</a></code>
- <code><a href="./src/resources/audio/audio.ts">AudioTranslateAudioResponse</a></code>

Methods:

- <code title="post /audio/voices">client.audio.<a href="./src/resources/audio/audio.ts">createCustomVoice</a>({ ...params }) -> AudioCreateCustomVoiceResponse</code>
- <code title="post /audio/speech">client.audio.<a href="./src/resources/audio/audio.ts">generateAudio</a>({ ...params }) -> Response</code>
- <code title="post /audio/transcriptions">client.audio.<a href="./src/resources/audio/audio.ts">transcribeAudio</a>({ ...params }) -> AudioTranscribeAudioResponse</code>
- <code title="post /audio/translations">client.audio.<a href="./src/resources/audio/audio.ts">translateAudio</a>({ ...params }) -> AudioTranslateAudioResponse</code>

## VoiceConsents

Types:

- <code><a href="./src/resources/audio/voice-consents.ts">VoiceConsentResource</a></code>
- <code><a href="./src/resources/audio/voice-consents.ts">VoiceConsentDeleteConsentResponse</a></code>
- <code><a href="./src/resources/audio/voice-consents.ts">VoiceConsentListConsentRecordingsResponse</a></code>

Methods:

- <code title="delete /audio/voice_consents/{consent_id}">client.audio.voiceConsents.<a href="./src/resources/audio/voice-consents.ts">deleteConsent</a>(consentID) -> VoiceConsentDeleteConsentResponse</code>
- <code title="get /audio/voice_consents">client.audio.voiceConsents.<a href="./src/resources/audio/voice-consents.ts">listConsentRecordings</a>({ ...params }) -> VoiceConsentListConsentRecordingsResponse</code>
- <code title="get /audio/voice_consents/{consent_id}">client.audio.voiceConsents.<a href="./src/resources/audio/voice-consents.ts">retrieveConsent</a>(consentID) -> VoiceConsentResource</code>
- <code title="post /audio/voice_consents/{consent_id}">client.audio.voiceConsents.<a href="./src/resources/audio/voice-consents.ts">updateConsent</a>(consentID, { ...params }) -> VoiceConsentResource</code>
- <code title="post /audio/voice_consents">client.audio.voiceConsents.<a href="./src/resources/audio/voice-consents.ts">uploadConsent</a>({ ...params }) -> VoiceConsentResource</code>

# Batches

Types:

- <code><a href="./src/resources/batches.ts">Batch</a></code>
- <code><a href="./src/resources/batches.ts">BatchListResponse</a></code>

Methods:

- <code title="post /batches">client.batches.<a href="./src/resources/batches.ts">create</a>({ ...params }) -> Batch</code>
- <code title="get /batches/{batch_id}">client.batches.<a href="./src/resources/batches.ts">retrieve</a>(batchID) -> Batch</code>
- <code title="get /batches">client.batches.<a href="./src/resources/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>
- <code title="post /batches/{batch_id}/cancel">client.batches.<a href="./src/resources/batches.ts">cancel</a>(batchID) -> Batch</code>

# Chat

## Completions

Types:

- <code><a href="./src/resources/chat/completions.ts">ChatCompletionTool</a></code>
- <code><a href="./src/resources/chat/completions.ts">CreateResponse</a></code>
- <code><a href="./src/resources/chat/completions.ts">ImageContentPart</a></code>
- <code><a href="./src/resources/chat/completions.ts">JsonObjectFormat</a></code>
- <code><a href="./src/resources/chat/completions.ts">JsonSchemaFormat</a></code>
- <code><a href="./src/resources/chat/completions.ts">MessageToolCall</a></code>
- <code><a href="./src/resources/chat/completions.ts">Metadata</a></code>
- <code><a href="./src/resources/chat/completions.ts">ModelResponsePropertiesCreate</a></code>
- <code><a href="./src/resources/chat/completions.ts">ResponseMessage</a></code>
- <code><a href="./src/resources/chat/completions.ts">ServiceTier</a></code>
- <code><a href="./src/resources/chat/completions.ts">SharedModelIDs</a></code>
- <code><a href="./src/resources/chat/completions.ts">TextContentPart</a></code>
- <code><a href="./src/resources/chat/completions.ts">TextFormat</a></code>
- <code><a href="./src/resources/chat/completions.ts">TokenLogprob</a></code>
- <code><a href="./src/resources/chat/completions.ts">Usage</a></code>
- <code><a href="./src/resources/chat/completions.ts">Verbosity</a></code>
- <code><a href="./src/resources/chat/completions.ts">CompletionListResponse</a></code>
- <code><a href="./src/resources/chat/completions.ts">CompletionDeleteResponse</a></code>
- <code><a href="./src/resources/chat/completions.ts">CompletionListMessagesResponse</a></code>

Methods:

- <code title="post /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">create</a>({ ...params }) -> CreateResponse</code>
- <code title="get /chat/completions/{completion_id}">client.chat.completions.<a href="./src/resources/chat/completions.ts">retrieve</a>(completionID) -> CreateResponse</code>
- <code title="post /chat/completions/{completion_id}">client.chat.completions.<a href="./src/resources/chat/completions.ts">update</a>(completionID, { ...params }) -> CreateResponse</code>
- <code title="get /chat/completions">client.chat.completions.<a href="./src/resources/chat/completions.ts">list</a>({ ...params }) -> CompletionListResponse</code>
- <code title="delete /chat/completions/{completion_id}">client.chat.completions.<a href="./src/resources/chat/completions.ts">delete</a>(completionID) -> CompletionDeleteResponse</code>
- <code title="get /chat/completions/{completion_id}/messages">client.chat.completions.<a href="./src/resources/chat/completions.ts">listMessages</a>(completionID, { ...params }) -> CompletionListMessagesResponse</code>

# Completions

Types:

- <code><a href="./src/resources/completions.ts">ChatCompletionStreamOptions</a></code>
- <code><a href="./src/resources/completions.ts">StopConfiguration</a></code>
- <code><a href="./src/resources/completions.ts">CompletionCreateResponse</a></code>

Methods:

- <code title="post /completions">client.completions.<a href="./src/resources/completions.ts">create</a>({ ...params }) -> CompletionCreateResponse</code>

# Containers

Types:

- <code><a href="./src/resources/containers/containers.ts">ContainerResource</a></code>
- <code><a href="./src/resources/containers/containers.ts">InlineSkillParam</a></code>
- <code><a href="./src/resources/containers/containers.ts">NetworkPolicyAllowlistParam</a></code>
- <code><a href="./src/resources/containers/containers.ts">NetworkPolicyDisabledParam</a></code>
- <code><a href="./src/resources/containers/containers.ts">SkillReferenceParam</a></code>
- <code><a href="./src/resources/containers/containers.ts">ContainerListResponse</a></code>

Methods:

- <code title="post /containers">client.containers.<a href="./src/resources/containers/containers.ts">create</a>({ ...params }) -> ContainerResource</code>
- <code title="get /containers/{container_id}">client.containers.<a href="./src/resources/containers/containers.ts">retrieve</a>(containerID) -> ContainerResource</code>
- <code title="get /containers">client.containers.<a href="./src/resources/containers/containers.ts">list</a>({ ...params }) -> ContainerListResponse</code>
- <code title="delete /containers/{container_id}">client.containers.<a href="./src/resources/containers/containers.ts">delete</a>(containerID) -> void</code>

## Files

Types:

- <code><a href="./src/resources/containers/files.ts">ContainerFileResource</a></code>
- <code><a href="./src/resources/containers/files.ts">FileListResponse</a></code>

Methods:

- <code title="post /containers/{container_id}/files">client.containers.files.<a href="./src/resources/containers/files.ts">create</a>(containerID, { ...params }) -> ContainerFileResource</code>
- <code title="get /containers/{container_id}/files/{file_id}">client.containers.files.<a href="./src/resources/containers/files.ts">retrieve</a>(fileID, { ...params }) -> ContainerFileResource</code>
- <code title="get /containers/{container_id}/files">client.containers.files.<a href="./src/resources/containers/files.ts">list</a>(containerID, { ...params }) -> FileListResponse</code>
- <code title="delete /containers/{container_id}/files/{file_id}">client.containers.files.<a href="./src/resources/containers/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="get /containers/{container_id}/files/{file_id}/content">client.containers.files.<a href="./src/resources/containers/files.ts">retrieveContent</a>(fileID, { ...params }) -> void</code>

# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">ConversationDeleteResponse</a></code>

Methods:

- <code title="post /conversations">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> ConversationResource</code>
- <code title="get /conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(conversationID) -> ConversationResource</code>
- <code title="post /conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">update</a>(conversationID, { ...params }) -> ConversationResource</code>
- <code title="delete /conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">delete</a>(conversationID) -> ConversationDeleteResponse</code>

## Items

Types:

- <code><a href="./src/resources/conversations/items.ts">ApplyPatchToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">ApplyPatchToolCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">CodeInterpreterToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">ComputerCallSafetyCheckParam</a></code>
- <code><a href="./src/resources/conversations/items.ts">ComputerScreenshotImage</a></code>
- <code><a href="./src/resources/conversations/items.ts">ComputerToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">ComputerToolCallOutputResource</a></code>
- <code><a href="./src/resources/conversations/items.ts">ContainerReferenceParam</a></code>
- <code><a href="./src/resources/conversations/items.ts">ConversationItem</a></code>
- <code><a href="./src/resources/conversations/items.ts">ConversationItemList</a></code>
- <code><a href="./src/resources/conversations/items.ts">ConversationResource</a></code>
- <code><a href="./src/resources/conversations/items.ts">CustomToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">CustomToolCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">EasyInputMessage</a></code>
- <code><a href="./src/resources/conversations/items.ts">FileSearchToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionAndCustomToolCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionCallItemStatus</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionShellCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionShellCallItemStatus</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionShellCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionToolCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionToolCallOutputResource</a></code>
- <code><a href="./src/resources/conversations/items.ts">FunctionToolCallResource</a></code>
- <code><a href="./src/resources/conversations/items.ts">ImageGenToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">IncludeEnum</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputFileContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputImageContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputItem</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputMessage</a></code>
- <code><a href="./src/resources/conversations/items.ts">InputTextContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">LocalEnvironmentParam</a></code>
- <code><a href="./src/resources/conversations/items.ts">LocalShellToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">LocalShellToolCallOutput</a></code>
- <code><a href="./src/resources/conversations/items.ts">McpApprovalRequest</a></code>
- <code><a href="./src/resources/conversations/items.ts">McpApprovalResponseResource</a></code>
- <code><a href="./src/resources/conversations/items.ts">McpListTools</a></code>
- <code><a href="./src/resources/conversations/items.ts">McpToolCall</a></code>
- <code><a href="./src/resources/conversations/items.ts">Message</a></code>
- <code><a href="./src/resources/conversations/items.ts">OutputMessage</a></code>
- <code><a href="./src/resources/conversations/items.ts">OutputTextContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">ReasoningItem</a></code>
- <code><a href="./src/resources/conversations/items.ts">ReasoningTextContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">RefusalContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">SummaryTextContent</a></code>
- <code><a href="./src/resources/conversations/items.ts">WebSearchToolCall</a></code>

Methods:

- <code title="post /conversations/{conversation_id}/items">client.conversations.items.<a href="./src/resources/conversations/items.ts">create</a>(conversationID, { ...params }) -> ConversationItemList</code>
- <code title="get /conversations/{conversation_id}/items/{item_id}">client.conversations.items.<a href="./src/resources/conversations/items.ts">retrieve</a>(itemID, { ...params }) -> ConversationItem</code>
- <code title="get /conversations/{conversation_id}/items">client.conversations.items.<a href="./src/resources/conversations/items.ts">list</a>(conversationID, { ...params }) -> ConversationItemList</code>
- <code title="delete /conversations/{conversation_id}/items/{item_id}">client.conversations.items.<a href="./src/resources/conversations/items.ts">delete</a>(itemID, { ...params }) -> ConversationResource</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingCreateResponse</a></code>

Methods:

- <code title="post /embeddings">client.embeddings.<a href="./src/resources/embeddings.ts">create</a>({ ...params }) -> EmbeddingCreateResponse</code>

# Evals

Types:

- <code><a href="./src/resources/evals/evals.ts">Eval</a></code>
- <code><a href="./src/resources/evals/evals.ts">GraderLabelModel</a></code>
- <code><a href="./src/resources/evals/evals.ts">GraderPythonEval</a></code>
- <code><a href="./src/resources/evals/evals.ts">GraderScoreEvalModel</a></code>
- <code><a href="./src/resources/evals/evals.ts">GraderStringCheckEval</a></code>
- <code><a href="./src/resources/evals/evals.ts">GraderTextSimilarityEval</a></code>
- <code><a href="./src/resources/evals/evals.ts">EvalListResponse</a></code>
- <code><a href="./src/resources/evals/evals.ts">EvalDeleteResponse</a></code>

Methods:

- <code title="post /evals">client.evals.<a href="./src/resources/evals/evals.ts">create</a>({ ...params }) -> Eval</code>
- <code title="get /evals/{eval_id}">client.evals.<a href="./src/resources/evals/evals.ts">retrieve</a>(evalID) -> Eval</code>
- <code title="post /evals/{eval_id}">client.evals.<a href="./src/resources/evals/evals.ts">update</a>(evalID, { ...params }) -> Eval</code>
- <code title="get /evals">client.evals.<a href="./src/resources/evals/evals.ts">list</a>({ ...params }) -> EvalListResponse</code>
- <code title="delete /evals/{eval_id}">client.evals.<a href="./src/resources/evals/evals.ts">delete</a>(evalID) -> EvalDeleteResponse</code>

## Runs

Types:

- <code><a href="./src/resources/evals/runs/runs.ts">APIError</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">CompletionsRunDataSource</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">EvalRun</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">JSONLFileContentSource</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">JSONLFileIDSource</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">JSONLRunDataSource</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">ResponsesRunDataSource</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/evals/runs/runs.ts">RunDeleteResponse</a></code>

Methods:

- <code title="post /evals/{eval_id}/runs">client.evals.runs.<a href="./src/resources/evals/runs/runs.ts">create</a>(evalID, { ...params }) -> EvalRun</code>
- <code title="get /evals/{eval_id}/runs/{run_id}">client.evals.runs.<a href="./src/resources/evals/runs/runs.ts">retrieve</a>(runID, { ...params }) -> EvalRun</code>
- <code title="get /evals/{eval_id}/runs">client.evals.runs.<a href="./src/resources/evals/runs/runs.ts">list</a>(evalID, { ...params }) -> RunListResponse</code>
- <code title="delete /evals/{eval_id}/runs/{run_id}">client.evals.runs.<a href="./src/resources/evals/runs/runs.ts">delete</a>(runID, { ...params }) -> RunDeleteResponse</code>
- <code title="post /evals/{eval_id}/runs/{run_id}">client.evals.runs.<a href="./src/resources/evals/runs/runs.ts">cancel</a>(runID, { ...params }) -> EvalRun</code>

### OutputItems

Types:

- <code><a href="./src/resources/evals/runs/output-items.ts">EvalRunOutputItem</a></code>
- <code><a href="./src/resources/evals/runs/output-items.ts">OutputItemListResponse</a></code>

Methods:

- <code title="get /evals/{eval_id}/runs/{run_id}/output_items/{output_item_id}">client.evals.runs.outputItems.<a href="./src/resources/evals/runs/output-items.ts">retrieve</a>(outputItemID, { ...params }) -> EvalRunOutputItem</code>
- <code title="get /evals/{eval_id}/runs/{run_id}/output_items">client.evals.runs.outputItems.<a href="./src/resources/evals/runs/output-items.ts">list</a>(runID, { ...params }) -> OutputItemListResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">FileExpirationAfter</a></code>
- <code><a href="./src/resources/files.ts">OpenAIFile</a></code>
- <code><a href="./src/resources/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/files.ts">FileRetrieveContentResponse</a></code>

Methods:

- <code title="get /files/{file_id}">client.files.<a href="./src/resources/files.ts">retrieve</a>(fileID) -> OpenAIFile</code>
- <code title="get /files">client.files.<a href="./src/resources/files.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="delete /files/{file_id}">client.files.<a href="./src/resources/files.ts">delete</a>(fileID) -> FileDeleteResponse</code>
- <code title="get /files/{file_id}/content">client.files.<a href="./src/resources/files.ts">retrieveContent</a>(fileID) -> string</code>
- <code title="post /files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> OpenAIFile</code>

# FineTuning

## Alpha

### Graders

Types:

- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">EvalItem</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">EvalItemContentItem</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderMulti</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderPythonScript</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderScoreAssignmentModel</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderStringCheckFineTuning</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderTextSimilarityFineTuning</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderRunResponse</a></code>
- <code><a href="./src/resources/fine-tuning/alpha/graders.ts">GraderValidateResponse</a></code>

Methods:

- <code title="post /fine_tuning/alpha/graders/run">client.fineTuning.alpha.graders.<a href="./src/resources/fine-tuning/alpha/graders.ts">run</a>({ ...params }) -> GraderRunResponse</code>
- <code title="post /fine_tuning/alpha/graders/validate">client.fineTuning.alpha.graders.<a href="./src/resources/fine-tuning/alpha/graders.ts">validate</a>({ ...params }) -> GraderValidateResponse</code>

## Checkpoints

### Permissions

Types:

- <code><a href="./src/resources/fine-tuning/checkpoints/permissions.ts">ListFineTuningCheckpointPermissionResponse</a></code>
- <code><a href="./src/resources/fine-tuning/checkpoints/permissions.ts">PermissionDeleteResponse</a></code>

Methods:

- <code title="post /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions">client.fineTuning.checkpoints.permissions.<a href="./src/resources/fine-tuning/checkpoints/permissions.ts">create</a>(fineTunedModelCheckpoint, { ...params }) -> ListFineTuningCheckpointPermissionResponse</code>
- <code title="get /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions">client.fineTuning.checkpoints.permissions.<a href="./src/resources/fine-tuning/checkpoints/permissions.ts">retrieve</a>(fineTunedModelCheckpoint, { ...params }) -> ListFineTuningCheckpointPermissionResponse</code>
- <code title="delete /fine_tuning/checkpoints/{fine_tuned_model_checkpoint}/permissions/{permission_id}">client.fineTuning.checkpoints.permissions.<a href="./src/resources/fine-tuning/checkpoints/permissions.ts">delete</a>(permissionID, { ...params }) -> PermissionDeleteResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/fine-tuning/jobs.ts">FineTuneMethod</a></code>
- <code><a href="./src/resources/fine-tuning/jobs.ts">FineTuningJob</a></code>
- <code><a href="./src/resources/fine-tuning/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/fine-tuning/jobs.ts">JobListCheckpointsResponse</a></code>
- <code><a href="./src/resources/fine-tuning/jobs.ts">JobListEventsResponse</a></code>

Methods:

- <code title="post /fine_tuning/jobs">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">create</a>({ ...params }) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">retrieve</a>(fineTuningJobID) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /fine_tuning/jobs/{fine_tuning_job_id}/cancel">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">cancel</a>(fineTuningJobID) -> FineTuningJob</code>
- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}/checkpoints">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">listCheckpoints</a>(fineTuningJobID, { ...params }) -> JobListCheckpointsResponse</code>
- <code title="get /fine_tuning/jobs/{fine_tuning_job_id}/events">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">listEvents</a>(fineTuningJobID, { ...params }) -> JobListEventsResponse</code>
- <code title="post /fine_tuning/jobs/{fine_tuning_job_id}/pause">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">pause</a>(fineTuningJobID) -> FineTuningJob</code>
- <code title="post /fine_tuning/jobs/{fine_tuning_job_id}/resume">client.fineTuning.jobs.<a href="./src/resources/fine-tuning/jobs.ts">resume</a>(fineTuningJobID) -> FineTuningJob</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageRefParam</a></code>
- <code><a href="./src/resources/images.ts">ImagesResponse</a></code>
- <code><a href="./src/resources/images.ts">PartialImages</a></code>

Methods:

- <code title="post /images/edits">client.images.<a href="./src/resources/images.ts">createEdit</a>({ ...params }) -> ImagesResponse</code>
- <code title="post /images/generations">client.images.<a href="./src/resources/images.ts">createGeneration</a>({ ...params }) -> ImagesResponse</code>
- <code title="post /images/variations">client.images.<a href="./src/resources/images.ts">createVariation</a>({ ...params }) -> ImagesResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Model</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelDeleteResponse</a></code>

Methods:

- <code title="get /models/{model}">client.models.<a href="./src/resources/models.ts">retrieve</a>(model) -> Model</code>
- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="delete /models/{model}">client.models.<a href="./src/resources/models.ts">delete</a>(model) -> ModelDeleteResponse</code>

# Moderations

Types:

- <code><a href="./src/resources/moderations.ts">ModerationClassifyResponse</a></code>

Methods:

- <code title="post /moderations">client.moderations.<a href="./src/resources/moderations.ts">classify</a>({ ...params }) -> ModerationClassifyResponse</code>

# Organization

Types:

- <code><a href="./src/resources/organization/organization.ts">AuditLogActorUser</a></code>
- <code><a href="./src/resources/organization/organization.ts">AuditLogEventType</a></code>
- <code><a href="./src/resources/organization/organization.ts">UsageResponse</a></code>
- <code><a href="./src/resources/organization/organization.ts">OrganizationListAuditLogsResponse</a></code>

Methods:

- <code title="get /organization/costs">client.organization.<a href="./src/resources/organization/organization.ts">getCosts</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/audit_logs">client.organization.<a href="./src/resources/organization/organization.ts">listAuditLogs</a>({ ...params }) -> OrganizationListAuditLogsResponse</code>

## AdminAPIKeys

Types:

- <code><a href="./src/resources/organization/admin-api-keys.ts">AdminAPIKey</a></code>
- <code><a href="./src/resources/organization/admin-api-keys.ts">AdminAPIKeyListResponse</a></code>
- <code><a href="./src/resources/organization/admin-api-keys.ts">AdminAPIKeyDeleteResponse</a></code>

Methods:

- <code title="post /organization/admin_api_keys">client.organization.adminAPIKeys.<a href="./src/resources/organization/admin-api-keys.ts">create</a>({ ...params }) -> AdminAPIKey</code>
- <code title="get /organization/admin_api_keys/{key_id}">client.organization.adminAPIKeys.<a href="./src/resources/organization/admin-api-keys.ts">retrieve</a>(keyID) -> AdminAPIKey</code>
- <code title="get /organization/admin_api_keys">client.organization.adminAPIKeys.<a href="./src/resources/organization/admin-api-keys.ts">list</a>({ ...params }) -> AdminAPIKeyListResponse</code>
- <code title="delete /organization/admin_api_keys/{key_id}">client.organization.adminAPIKeys.<a href="./src/resources/organization/admin-api-keys.ts">delete</a>(keyID) -> AdminAPIKeyDeleteResponse</code>

## Certificates

Types:

- <code><a href="./src/resources/organization/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/organization/certificates.ts">ListCertificates</a></code>
- <code><a href="./src/resources/organization/certificates.ts">ToggleCertificates</a></code>
- <code><a href="./src/resources/organization/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="get /organization/certificates/{certificate_id}">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">retrieve</a>(certificateID, { ...params }) -> Certificate</code>
- <code title="post /organization/certificates/{certificate_id}">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">update</a>(certificateID, { ...params }) -> Certificate</code>
- <code title="get /organization/certificates">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">list</a>({ ...params }) -> ListCertificates</code>
- <code title="delete /organization/certificates/{certificate_id}">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">delete</a>(certificateID) -> CertificateDeleteResponse</code>
- <code title="post /organization/certificates/activate">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">activate</a>({ ...params }) -> ListCertificates</code>
- <code title="post /organization/certificates/deactivate">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">deactivate</a>({ ...params }) -> ListCertificates</code>
- <code title="post /organization/certificates">client.organization.certificates.<a href="./src/resources/organization/certificates.ts">upload</a>({ ...params }) -> Certificate</code>

## Groups

Types:

- <code><a href="./src/resources/organization/groups/groups.ts">GroupResponse</a></code>
- <code><a href="./src/resources/organization/groups/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/organization/groups/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/organization/groups/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /organization/groups">client.organization.groups.<a href="./src/resources/organization/groups/groups.ts">create</a>({ ...params }) -> GroupResponse</code>
- <code title="post /organization/groups/{group_id}">client.organization.groups.<a href="./src/resources/organization/groups/groups.ts">update</a>(groupID, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /organization/groups">client.organization.groups.<a href="./src/resources/organization/groups/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /organization/groups/{group_id}">client.organization.groups.<a href="./src/resources/organization/groups/groups.ts">delete</a>(groupID) -> GroupDeleteResponse</code>

### Roles

Types:

- <code><a href="./src/resources/organization/groups/roles.ts">AssignGroupRole</a></code>
- <code><a href="./src/resources/organization/groups/roles.ts">DeletedRoleAssignment</a></code>
- <code><a href="./src/resources/organization/groups/roles.ts">GroupRoleAssignment</a></code>
- <code><a href="./src/resources/organization/groups/roles.ts">RoleListAssigned</a></code>

Methods:

- <code title="get /organization/groups/{group_id}/roles">client.organization.groups.roles.<a href="./src/resources/organization/groups/roles.ts">list</a>(groupID, { ...params }) -> RoleListAssigned</code>
- <code title="post /organization/groups/{group_id}/roles">client.organization.groups.roles.<a href="./src/resources/organization/groups/roles.ts">assign</a>(groupID, { ...params }) -> GroupRoleAssignment</code>
- <code title="delete /organization/groups/{group_id}/roles/{role_id}">client.organization.groups.roles.<a href="./src/resources/organization/groups/roles.ts">unassign</a>(roleID, { ...params }) -> DeletedRoleAssignment</code>

### Users

Types:

- <code><a href="./src/resources/organization/groups/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organization/groups/users.ts">UserAddResponse</a></code>
- <code><a href="./src/resources/organization/groups/users.ts">UserRemoveResponse</a></code>

Methods:

- <code title="get /organization/groups/{group_id}/users">client.organization.groups.users.<a href="./src/resources/organization/groups/users.ts">list</a>(groupID, { ...params }) -> UserListResponse</code>
- <code title="post /organization/groups/{group_id}/users">client.organization.groups.users.<a href="./src/resources/organization/groups/users.ts">add</a>(groupID, { ...params }) -> UserAddResponse</code>
- <code title="delete /organization/groups/{group_id}/users/{user_id}">client.organization.groups.users.<a href="./src/resources/organization/groups/users.ts">remove</a>(userID, { ...params }) -> UserRemoveResponse</code>

## Invites

Types:

- <code><a href="./src/resources/organization/invites.ts">Invite</a></code>
- <code><a href="./src/resources/organization/invites.ts">InviteListResponse</a></code>
- <code><a href="./src/resources/organization/invites.ts">InviteDeleteResponse</a></code>

Methods:

- <code title="post /organization/invites">client.organization.invites.<a href="./src/resources/organization/invites.ts">create</a>({ ...params }) -> Invite</code>
- <code title="get /organization/invites/{invite_id}">client.organization.invites.<a href="./src/resources/organization/invites.ts">retrieve</a>(inviteID) -> Invite</code>
- <code title="get /organization/invites">client.organization.invites.<a href="./src/resources/organization/invites.ts">list</a>({ ...params }) -> InviteListResponse</code>
- <code title="delete /organization/invites/{invite_id}">client.organization.invites.<a href="./src/resources/organization/invites.ts">delete</a>(inviteID) -> InviteDeleteResponse</code>

## Projects

Types:

- <code><a href="./src/resources/organization/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/organization/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /organization/projects">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /organization/projects/{project_id}">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">retrieve</a>(projectID) -> Project</code>
- <code title="post /organization/projects/{project_id}">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">update</a>(projectID, { ...params }) -> Project</code>
- <code title="get /organization/projects">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="post /organization/projects/{project_id}/archive">client.organization.projects.<a href="./src/resources/organization/projects/projects.ts">archive</a>(projectID) -> Project</code>

### APIKeys

Types:

- <code><a href="./src/resources/organization/projects/api-keys.ts">ProjectAPIKey</a></code>
- <code><a href="./src/resources/organization/projects/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/organization/projects/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="get /organization/projects/{project_id}/api_keys/{key_id}">client.organization.projects.apiKeys.<a href="./src/resources/organization/projects/api-keys.ts">retrieve</a>(keyID, { ...params }) -> ProjectAPIKey</code>
- <code title="get /organization/projects/{project_id}/api_keys">client.organization.projects.apiKeys.<a href="./src/resources/organization/projects/api-keys.ts">list</a>(projectID, { ...params }) -> APIKeyListResponse</code>
- <code title="delete /organization/projects/{project_id}/api_keys/{key_id}">client.organization.projects.apiKeys.<a href="./src/resources/organization/projects/api-keys.ts">delete</a>(keyID, { ...params }) -> APIKeyDeleteResponse</code>

### Certificates

Methods:

- <code title="get /organization/projects/{project_id}/certificates">client.organization.projects.certificates.<a href="./src/resources/organization/projects/certificates.ts">list</a>(projectID, { ...params }) -> ListCertificates</code>
- <code title="post /organization/projects/{project_id}/certificates/activate">client.organization.projects.certificates.<a href="./src/resources/organization/projects/certificates.ts">activate</a>(projectID, { ...params }) -> ListCertificates</code>
- <code title="post /organization/projects/{project_id}/certificates/deactivate">client.organization.projects.certificates.<a href="./src/resources/organization/projects/certificates.ts">deactivate</a>(projectID, { ...params }) -> ListCertificates</code>

### Groups

Types:

- <code><a href="./src/resources/organization/projects/groups.ts">ProjectGroup</a></code>
- <code><a href="./src/resources/organization/projects/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/organization/projects/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /organization/projects/{project_id}/groups">client.organization.projects.groups.<a href="./src/resources/organization/projects/groups.ts">create</a>(projectID, { ...params }) -> ProjectGroup</code>
- <code title="get /organization/projects/{project_id}/groups">client.organization.projects.groups.<a href="./src/resources/organization/projects/groups.ts">list</a>(projectID, { ...params }) -> GroupListResponse</code>
- <code title="delete /organization/projects/{project_id}/groups/{group_id}">client.organization.projects.groups.<a href="./src/resources/organization/projects/groups.ts">delete</a>(groupID, { ...params }) -> GroupDeleteResponse</code>

### RateLimits

Types:

- <code><a href="./src/resources/organization/projects/rate-limits.ts">ProjectRateLimit</a></code>
- <code><a href="./src/resources/organization/projects/rate-limits.ts">RateLimitRetrieveResponse</a></code>

Methods:

- <code title="get /organization/projects/{project_id}/rate_limits">client.organization.projects.rateLimits.<a href="./src/resources/organization/projects/rate-limits.ts">retrieve</a>(projectID, { ...params }) -> RateLimitRetrieveResponse</code>
- <code title="post /organization/projects/{project_id}/rate_limits/{rate_limit_id}">client.organization.projects.rateLimits.<a href="./src/resources/organization/projects/rate-limits.ts">update</a>(rateLimitID, { ...params }) -> ProjectRateLimit</code>

### ServiceAccounts

Types:

- <code><a href="./src/resources/organization/projects/service-accounts.ts">ProjectServiceAccount</a></code>
- <code><a href="./src/resources/organization/projects/service-accounts.ts">ServiceAccountCreateResponse</a></code>
- <code><a href="./src/resources/organization/projects/service-accounts.ts">ServiceAccountListResponse</a></code>
- <code><a href="./src/resources/organization/projects/service-accounts.ts">ServiceAccountDeleteResponse</a></code>

Methods:

- <code title="post /organization/projects/{project_id}/service_accounts">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">create</a>(projectID, { ...params }) -> ServiceAccountCreateResponse</code>
- <code title="get /organization/projects/{project_id}/service_accounts/{service_account_id}">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">retrieve</a>(serviceAccountID, { ...params }) -> ProjectServiceAccount</code>
- <code title="get /organization/projects/{project_id}/service_accounts">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">list</a>(projectID, { ...params }) -> ServiceAccountListResponse</code>
- <code title="delete /organization/projects/{project_id}/service_accounts/{service_account_id}">client.organization.projects.serviceAccounts.<a href="./src/resources/organization/projects/service-accounts.ts">delete</a>(serviceAccountID, { ...params }) -> ServiceAccountDeleteResponse</code>

### Users

Types:

- <code><a href="./src/resources/organization/projects/users.ts">ProjectUser</a></code>
- <code><a href="./src/resources/organization/projects/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organization/projects/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="get /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">retrieve</a>(userID, { ...params }) -> ProjectUser</code>
- <code title="post /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">update</a>(userID, { ...params }) -> ProjectUser</code>
- <code title="get /organization/projects/{project_id}/users">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">list</a>(projectID, { ...params }) -> UserListResponse</code>
- <code title="delete /organization/projects/{project_id}/users/{user_id}">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">delete</a>(userID, { ...params }) -> UserDeleteResponse</code>
- <code title="post /organization/projects/{project_id}/users">client.organization.projects.users.<a href="./src/resources/organization/projects/users.ts">add</a>(projectID, { ...params }) -> ProjectUser</code>

## Roles

Types:

- <code><a href="./src/resources/organization/roles.ts">CreateRole</a></code>
- <code><a href="./src/resources/organization/roles.ts">DeletedRole</a></code>
- <code><a href="./src/resources/organization/roles.ts">Role</a></code>
- <code><a href="./src/resources/organization/roles.ts">RoleListAvailable</a></code>
- <code><a href="./src/resources/organization/roles.ts">UpdateRole</a></code>

Methods:

- <code title="post /organization/roles">client.organization.roles.<a href="./src/resources/organization/roles.ts">create</a>({ ...params }) -> Role</code>
- <code title="post /organization/roles/{role_id}">client.organization.roles.<a href="./src/resources/organization/roles.ts">update</a>(roleID, { ...params }) -> Role</code>
- <code title="get /organization/roles">client.organization.roles.<a href="./src/resources/organization/roles.ts">list</a>({ ...params }) -> RoleListAvailable</code>
- <code title="delete /organization/roles/{role_id}">client.organization.roles.<a href="./src/resources/organization/roles.ts">delete</a>(roleID) -> DeletedRole</code>

## Usage

Methods:

- <code title="get /organization/usage/audio_speeches">client.organization.usage.<a href="./src/resources/organization/usage.ts">audioSpeeches</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/audio_transcriptions">client.organization.usage.<a href="./src/resources/organization/usage.ts">audioTranscriptions</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/code_interpreter_sessions">client.organization.usage.<a href="./src/resources/organization/usage.ts">codeInterpreterSessions</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/completions">client.organization.usage.<a href="./src/resources/organization/usage.ts">completions</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/embeddings">client.organization.usage.<a href="./src/resources/organization/usage.ts">embeddings</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/images">client.organization.usage.<a href="./src/resources/organization/usage.ts">images</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/moderations">client.organization.usage.<a href="./src/resources/organization/usage.ts">moderations</a>({ ...params }) -> UsageResponse</code>
- <code title="get /organization/usage/vector_stores">client.organization.usage.<a href="./src/resources/organization/usage.ts">vectorStores</a>({ ...params }) -> UsageResponse</code>

## Users

Types:

- <code><a href="./src/resources/organization/users/users.ts">User</a></code>
- <code><a href="./src/resources/organization/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/organization/users/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="get /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users/users.ts">retrieve</a>(userID) -> User</code>
- <code title="post /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users/users.ts">update</a>(userID, { ...params }) -> User</code>
- <code title="get /organization/users">client.organization.users.<a href="./src/resources/organization/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /organization/users/{user_id}">client.organization.users.<a href="./src/resources/organization/users/users.ts">delete</a>(userID) -> UserDeleteResponse</code>

### Roles

Types:

- <code><a href="./src/resources/organization/users/roles.ts">UserRoleAssignment</a></code>

Methods:

- <code title="get /organization/users/{user_id}/roles">client.organization.users.roles.<a href="./src/resources/organization/users/roles.ts">list</a>(userID, { ...params }) -> RoleListAssigned</code>
- <code title="post /organization/users/{user_id}/roles">client.organization.users.roles.<a href="./src/resources/organization/users/roles.ts">assign</a>(userID, { ...params }) -> UserRoleAssignment</code>
- <code title="delete /organization/users/{user_id}/roles/{role_id}">client.organization.users.roles.<a href="./src/resources/organization/users/roles.ts">unassign</a>(roleID, { ...params }) -> DeletedRoleAssignment</code>

# Projects

## Groups

### Roles

Methods:

- <code title="get /projects/{project_id}/groups/{group_id}/roles">client.projects.groups.roles.<a href="./src/resources/projects/groups/roles.ts">list</a>(groupID, { ...params }) -> RoleListAssigned</code>
- <code title="post /projects/{project_id}/groups/{group_id}/roles">client.projects.groups.roles.<a href="./src/resources/projects/groups/roles.ts">assign</a>(groupID, { ...params }) -> GroupRoleAssignment</code>
- <code title="delete /projects/{project_id}/groups/{group_id}/roles/{role_id}">client.projects.groups.roles.<a href="./src/resources/projects/groups/roles.ts">unassign</a>(roleID, { ...params }) -> DeletedRoleAssignment</code>

## Roles

Methods:

- <code title="post /projects/{project_id}/roles">client.projects.roles.<a href="./src/resources/projects/roles.ts">create</a>(projectID, { ...params }) -> Role</code>
- <code title="post /projects/{project_id}/roles/{role_id}">client.projects.roles.<a href="./src/resources/projects/roles.ts">update</a>(roleID, { ...params }) -> Role</code>
- <code title="get /projects/{project_id}/roles">client.projects.roles.<a href="./src/resources/projects/roles.ts">list</a>(projectID, { ...params }) -> RoleListAvailable</code>
- <code title="delete /projects/{project_id}/roles/{role_id}">client.projects.roles.<a href="./src/resources/projects/roles.ts">delete</a>(roleID, { ...params }) -> DeletedRole</code>

## Users

### Roles

Methods:

- <code title="get /projects/{project_id}/users/{user_id}/roles">client.projects.users.roles.<a href="./src/resources/projects/users/roles.ts">list</a>(userID, { ...params }) -> RoleListAssigned</code>
- <code title="post /projects/{project_id}/users/{user_id}/roles">client.projects.users.roles.<a href="./src/resources/projects/users/roles.ts">assign</a>(userID, { ...params }) -> UserRoleAssignment</code>
- <code title="delete /projects/{project_id}/users/{user_id}/roles/{role_id}">client.projects.users.roles.<a href="./src/resources/projects/users/roles.ts">unassign</a>(roleID, { ...params }) -> DeletedRoleAssignment</code>

# Realtime

Types:

- <code><a href="./src/resources/realtime/realtime.ts">AudioTranscription</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">NoiseReductionType</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">RealtimeFunctionTool</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">VoiceIDsShared</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">RealtimeCreateClientSecretResponse</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">RealtimeCreateSessionResponse</a></code>
- <code><a href="./src/resources/realtime/realtime.ts">RealtimeCreateTranscriptionSessionResponse</a></code>

Methods:

- <code title="post /realtime/client_secrets">client.realtime.<a href="./src/resources/realtime/realtime.ts">createClientSecret</a>({ ...params }) -> RealtimeCreateClientSecretResponse</code>
- <code title="post /realtime/sessions">client.realtime.<a href="./src/resources/realtime/realtime.ts">createSession</a>({ ...params }) -> RealtimeCreateSessionResponse</code>
- <code title="post /realtime/transcription_sessions">client.realtime.<a href="./src/resources/realtime/realtime.ts">createTranscriptionSession</a>({ ...params }) -> RealtimeCreateTranscriptionSessionResponse</code>

## Calls

Types:

- <code><a href="./src/resources/realtime/calls.ts">McpTool</a></code>
- <code><a href="./src/resources/realtime/calls.ts">McpToolFilter</a></code>
- <code><a href="./src/resources/realtime/calls.ts">Prompt</a></code>
- <code><a href="./src/resources/realtime/calls.ts">RealtimeAudioFormats</a></code>
- <code><a href="./src/resources/realtime/calls.ts">RealtimeSessionCreate</a></code>
- <code><a href="./src/resources/realtime/calls.ts">RealtimeTruncation</a></code>
- <code><a href="./src/resources/realtime/calls.ts">RealtimeTurnDetection</a></code>
- <code><a href="./src/resources/realtime/calls.ts">ToolChoiceFunction</a></code>
- <code><a href="./src/resources/realtime/calls.ts">ToolChoiceMcp</a></code>
- <code><a href="./src/resources/realtime/calls.ts">ToolChoiceOptions</a></code>

Methods:

- <code title="post /realtime/calls">client.realtime.calls.<a href="./src/resources/realtime/calls.ts">create</a>({ ...params }) -> Response</code>
- <code title="post /realtime/calls/{call_id}/accept">client.realtime.calls.<a href="./src/resources/realtime/calls.ts">accept</a>(callID, { ...params }) -> void</code>
- <code title="post /realtime/calls/{call_id}/hangup">client.realtime.calls.<a href="./src/resources/realtime/calls.ts">hangup</a>(callID) -> void</code>
- <code title="post /realtime/calls/{call_id}/refer">client.realtime.calls.<a href="./src/resources/realtime/calls.ts">refer</a>(callID, { ...params }) -> void</code>
- <code title="post /realtime/calls/{call_id}/reject">client.realtime.calls.<a href="./src/resources/realtime/calls.ts">reject</a>(callID, { ...params }) -> void</code>

# Responses

Types:

- <code><a href="./src/resources/responses.ts">CompactionBody</a></code>
- <code><a href="./src/resources/responses.ts">ContainerMemoryLimit</a></code>
- <code><a href="./src/resources/responses.ts">ConversationParam</a></code>
- <code><a href="./src/resources/responses.ts">ModelIDs</a></code>
- <code><a href="./src/resources/responses.ts">ModelResponsePropertiesStandard</a></code>
- <code><a href="./src/resources/responses.ts">Reasoning</a></code>
- <code><a href="./src/resources/responses.ts">Response</a></code>
- <code><a href="./src/resources/responses.ts">ResponseProperties</a></code>
- <code><a href="./src/resources/responses.ts">ResponseTextParam</a></code>
- <code><a href="./src/resources/responses.ts">ResponseTool</a></code>
- <code><a href="./src/resources/responses.ts">ResponseUsage</a></code>
- <code><a href="./src/resources/responses.ts">TextResponseFormatConfiguration</a></code>
- <code><a href="./src/resources/responses.ts">ToolChoiceParam</a></code>
- <code><a href="./src/resources/responses.ts">ResponseCompactResponse</a></code>
- <code><a href="./src/resources/responses.ts">ResponseGetInputTokensResponse</a></code>
- <code><a href="./src/resources/responses.ts">ResponseListInputItemsResponse</a></code>

Methods:

- <code title="post /responses">client.responses.<a href="./src/resources/responses.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /responses/{response_id}">client.responses.<a href="./src/resources/responses.ts">retrieve</a>(responseID, { ...params }) -> Response</code>
- <code title="delete /responses/{response_id}">client.responses.<a href="./src/resources/responses.ts">delete</a>(responseID) -> void</code>
- <code title="post /responses/{response_id}/cancel">client.responses.<a href="./src/resources/responses.ts">cancel</a>(responseID) -> Response</code>
- <code title="post /responses/compact">client.responses.<a href="./src/resources/responses.ts">compact</a>({ ...params }) -> ResponseCompactResponse</code>
- <code title="post /responses/input_tokens">client.responses.<a href="./src/resources/responses.ts">getInputTokens</a>({ ...params }) -> ResponseGetInputTokensResponse</code>
- <code title="get /responses/{response_id}/input_items">client.responses.<a href="./src/resources/responses.ts">listInputItems</a>(responseID, { ...params }) -> ResponseListInputItemsResponse</code>

# Threads

Types:

- <code><a href="./src/resources/threads/threads.ts">CreateThreadRequest</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadObject</a></code>
- <code><a href="./src/resources/threads/threads.ts">ThreadDeleteResponse</a></code>

Methods:

- <code title="post /threads">client.threads.<a href="./src/resources/threads/threads.ts">create</a>({ ...params }) -> ThreadObject</code>
- <code title="get /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">retrieve</a>(threadID) -> ThreadObject</code>
- <code title="post /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">update</a>(threadID, { ...params }) -> ThreadObject</code>
- <code title="delete /threads/{thread_id}">client.threads.<a href="./src/resources/threads/threads.ts">delete</a>(threadID) -> ThreadDeleteResponse</code>

## Runs

Types:

- <code><a href="./src/resources/threads/runs/runs.ts">AssistantsAPIResponseFormatOption</a></code>
- <code><a href="./src/resources/threads/runs/runs.ts">AssistantsAPIToolChoiceOption</a></code>
- <code><a href="./src/resources/threads/runs/runs.ts">RunObject</a></code>
- <code><a href="./src/resources/threads/runs/runs.ts">TruncationObject</a></code>
- <code><a href="./src/resources/threads/runs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="post /threads/runs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">create</a>({ ...params }) -> RunObject</code>
- <code title="get /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">retrieve</a>(runID, { ...params }) -> RunObject</code>
- <code title="post /threads/{thread_id}/runs/{run_id}">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">update</a>(runID, { ...params }) -> RunObject</code>
- <code title="get /threads/{thread_id}/runs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">list</a>(threadID, { ...params }) -> RunListResponse</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/cancel">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">cancel</a>(runID, { ...params }) -> RunObject</code>
- <code title="post /threads/{thread_id}/runs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">createRun</a>(threadID, { ...params }) -> RunObject</code>
- <code title="post /threads/{thread_id}/runs/{run_id}/submit_tool_outputs">client.threads.runs.<a href="./src/resources/threads/runs/runs.ts">submitToolOutputs</a>(runID, { ...params }) -> RunObject</code>

### Steps

Types:

- <code><a href="./src/resources/threads/runs/steps.ts">RunStepObject</a></code>
- <code><a href="./src/resources/threads/runs/steps.ts">StepListResponse</a></code>

Methods:

- <code title="get /threads/{thread_id}/runs/{run_id}/steps/{step_id}">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">retrieve</a>(stepID, { ...params }) -> RunStepObject</code>
- <code title="get /threads/{thread_id}/runs/{run_id}/steps">client.threads.runs.steps.<a href="./src/resources/threads/runs/steps.ts">list</a>(runID, { ...params }) -> StepListResponse</code>

## Messages

Types:

- <code><a href="./src/resources/threads/messages.ts">AssistantToolsFileSearchTypeOnly</a></code>
- <code><a href="./src/resources/threads/messages.ts">CreateMessageRequest</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageContentImageFileObject</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageContentImageURLObject</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageObject</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/threads/messages.ts">MessageDeleteResponse</a></code>

Methods:

- <code title="post /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages.ts">create</a>(threadID, { ...params }) -> MessageObject</code>
- <code title="get /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">retrieve</a>(messageID, { ...params }) -> MessageObject</code>
- <code title="post /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">update</a>(messageID, { ...params }) -> MessageObject</code>
- <code title="get /threads/{thread_id}/messages">client.threads.messages.<a href="./src/resources/threads/messages.ts">list</a>(threadID, { ...params }) -> MessageListResponse</code>
- <code title="delete /threads/{thread_id}/messages/{message_id}">client.threads.messages.<a href="./src/resources/threads/messages.ts">delete</a>(messageID, { ...params }) -> MessageDeleteResponse</code>

# Uploads

Types:

- <code><a href="./src/resources/uploads.ts">Upload</a></code>
- <code><a href="./src/resources/uploads.ts">UploadAddPartResponse</a></code>

Methods:

- <code title="post /uploads">client.uploads.<a href="./src/resources/uploads.ts">create</a>({ ...params }) -> Upload</code>
- <code title="post /uploads/{upload_id}/parts">client.uploads.<a href="./src/resources/uploads.ts">addPart</a>(uploadID, { ...params }) -> UploadAddPartResponse</code>
- <code title="post /uploads/{upload_id}/cancel">client.uploads.<a href="./src/resources/uploads.ts">cancel</a>(uploadID) -> Upload</code>
- <code title="post /uploads/{upload_id}/complete">client.uploads.<a href="./src/resources/uploads.ts">complete</a>(uploadID, { ...params }) -> Upload</code>

# VectorStores

Types:

- <code><a href="./src/resources/vector-stores/vector-stores.ts">AutoChunkingStrategyRequestParam</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">ComparisonFilter</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">CompoundFilter</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">StaticChunkingStrategy</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">StaticChunkingStrategyRequestParam</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreExpirationAfter</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreObject</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreListResponse</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreDeleteResponse</a></code>
- <code><a href="./src/resources/vector-stores/vector-stores.ts">VectorStoreSearchResponse</a></code>

Methods:

- <code title="post /vector_stores">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">create</a>({ ...params }) -> VectorStoreObject</code>
- <code title="get /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">retrieve</a>(vectorStoreID) -> VectorStoreObject</code>
- <code title="post /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">update</a>(vectorStoreID, { ...params }) -> VectorStoreObject</code>
- <code title="get /vector_stores">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">list</a>({ ...params }) -> VectorStoreListResponse</code>
- <code title="delete /vector_stores/{vector_store_id}">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">delete</a>(vectorStoreID) -> VectorStoreDeleteResponse</code>
- <code title="post /vector_stores/{vector_store_id}/search">client.vectorStores.<a href="./src/resources/vector-stores/vector-stores.ts">search</a>(vectorStoreID, { ...params }) -> VectorStoreSearchResponse</code>

## FileBatches

Types:

- <code><a href="./src/resources/vector-stores/file-batches.ts">ChunkingStrategyRequestParam</a></code>
- <code><a href="./src/resources/vector-stores/file-batches.ts">ListVectorStoreFilesResponse</a></code>
- <code><a href="./src/resources/vector-stores/file-batches.ts">VectorStoreFileAttributes</a></code>
- <code><a href="./src/resources/vector-stores/file-batches.ts">VectorStoreFileBatchObject</a></code>

Methods:

- <code title="post /vector_stores/{vector_store_id}/file_batches">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches.ts">create</a>(vectorStoreID, { ...params }) -> VectorStoreFileBatchObject</code>
- <code title="get /vector_stores/{vector_store_id}/file_batches/{batch_id}">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches.ts">retrieve</a>(batchID, { ...params }) -> VectorStoreFileBatchObject</code>
- <code title="post /vector_stores/{vector_store_id}/file_batches/{batch_id}/cancel">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches.ts">cancel</a>(batchID, { ...params }) -> VectorStoreFileBatchObject</code>
- <code title="get /vector_stores/{vector_store_id}/file_batches/{batch_id}/files">client.vectorStores.fileBatches.<a href="./src/resources/vector-stores/file-batches.ts">listFiles</a>(batchID, { ...params }) -> ListVectorStoreFilesResponse</code>

## Files

Types:

- <code><a href="./src/resources/vector-stores/files.ts">CreateVectorStoreFileRequest</a></code>
- <code><a href="./src/resources/vector-stores/files.ts">VectorStoreFileObject</a></code>
- <code><a href="./src/resources/vector-stores/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/vector-stores/files.ts">FileRetrieveContentResponse</a></code>

Methods:

- <code title="post /vector_stores/{vector_store_id}/files">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">create</a>(vectorStoreID, { ...params }) -> VectorStoreFileObject</code>
- <code title="get /vector_stores/{vector_store_id}/files/{file_id}">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">retrieve</a>(fileID, { ...params }) -> VectorStoreFileObject</code>
- <code title="post /vector_stores/{vector_store_id}/files/{file_id}">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">update</a>(fileID, { ...params }) -> VectorStoreFileObject</code>
- <code title="get /vector_stores/{vector_store_id}/files">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">list</a>(vectorStoreID, { ...params }) -> ListVectorStoreFilesResponse</code>
- <code title="delete /vector_stores/{vector_store_id}/files/{file_id}">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">delete</a>(fileID, { ...params }) -> FileDeleteResponse</code>
- <code title="get /vector_stores/{vector_store_id}/files/{file_id}/content">client.vectorStores.files.<a href="./src/resources/vector-stores/files.ts">retrieveContent</a>(fileID, { ...params }) -> FileRetrieveContentResponse</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">OrderEnum</a></code>
- <code><a href="./src/resources/videos.ts">VideoModel</a></code>
- <code><a href="./src/resources/videos.ts">VideoResource</a></code>
- <code><a href="./src/resources/videos.ts">VideoSeconds</a></code>
- <code><a href="./src/resources/videos.ts">VideoSize</a></code>
- <code><a href="./src/resources/videos.ts">VideoListResponse</a></code>
- <code><a href="./src/resources/videos.ts">VideoDeleteResponse</a></code>
- <code><a href="./src/resources/videos.ts">VideoDownloadContentResponse</a></code>

Methods:

- <code title="post /videos">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoResource</code>
- <code title="get /videos/{video_id}">client.videos.<a href="./src/resources/videos.ts">retrieve</a>(videoID) -> VideoResource</code>
- <code title="get /videos">client.videos.<a href="./src/resources/videos.ts">list</a>({ ...params }) -> VideoListResponse</code>
- <code title="delete /videos/{video_id}">client.videos.<a href="./src/resources/videos.ts">delete</a>(videoID) -> VideoDeleteResponse</code>
- <code title="post /videos/{video_id}/remix">client.videos.<a href="./src/resources/videos.ts">createRemix</a>(videoID, { ...params }) -> VideoResource</code>
- <code title="get /videos/{video_id}/content">client.videos.<a href="./src/resources/videos.ts">downloadContent</a>(videoID, { ...params }) -> string</code>

# Skills

Types:

- <code><a href="./src/resources/skills/skills.ts">SkillResource</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillListResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillDownloadContentResponse</a></code>

Methods:

- <code title="post /skills">client.skills.<a href="./src/resources/skills/skills.ts">create</a>({ ...params }) -> SkillResource</code>
- <code title="get /skills/{skill_id}">client.skills.<a href="./src/resources/skills/skills.ts">retrieve</a>(skillID) -> SkillResource</code>
- <code title="get /skills">client.skills.<a href="./src/resources/skills/skills.ts">list</a>({ ...params }) -> SkillListResponse</code>
- <code title="delete /skills/{skill_id}">client.skills.<a href="./src/resources/skills/skills.ts">delete</a>(skillID) -> SkillDeleteResponse</code>
- <code title="get /skills/{skill_id}/content">client.skills.<a href="./src/resources/skills/skills.ts">downloadContent</a>(skillID) -> string</code>
- <code title="post /skills/{skill_id}">client.skills.<a href="./src/resources/skills/skills.ts">updateVersionPointer</a>(skillID, { ...params }) -> SkillResource</code>

## Versions

Types:

- <code><a href="./src/resources/skills/versions.ts">SkillVersionResource</a></code>
- <code><a href="./src/resources/skills/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/skills/versions.ts">VersionDeleteResponse</a></code>
- <code><a href="./src/resources/skills/versions.ts">VersionDownloadContentResponse</a></code>

Methods:

- <code title="post /skills/{skill_id}/versions">client.skills.versions.<a href="./src/resources/skills/versions.ts">create</a>(skillID, { ...params }) -> SkillVersionResource</code>
- <code title="get /skills/{skill_id}/versions/{version}">client.skills.versions.<a href="./src/resources/skills/versions.ts">retrieve</a>(version, { ...params }) -> SkillVersionResource</code>
- <code title="get /skills/{skill_id}/versions">client.skills.versions.<a href="./src/resources/skills/versions.ts">list</a>(skillID, { ...params }) -> VersionListResponse</code>
- <code title="delete /skills/{skill_id}/versions/{version}">client.skills.versions.<a href="./src/resources/skills/versions.ts">delete</a>(version, { ...params }) -> VersionDeleteResponse</code>
- <code title="get /skills/{skill_id}/versions/{version}/content">client.skills.versions.<a href="./src/resources/skills/versions.ts">downloadContent</a>(version, { ...params }) -> string</code>

# Chatkit

## Sessions

Types:

- <code><a href="./src/resources/chatkit/sessions.ts">ChatSession</a></code>

Methods:

- <code title="post /chatkit/sessions">client.chatkit.sessions.<a href="./src/resources/chatkit/sessions.ts">create</a>({ ...params }) -> ChatSession</code>
- <code title="post /chatkit/sessions/{session_id}/cancel">client.chatkit.sessions.<a href="./src/resources/chatkit/sessions.ts">cancel</a>(sessionID) -> ChatSession</code>

## Threads

Types:

- <code><a href="./src/resources/chatkit/threads.ts">TaskType</a></code>
- <code><a href="./src/resources/chatkit/threads.ts">Thread</a></code>
- <code><a href="./src/resources/chatkit/threads.ts">ThreadListResponse</a></code>
- <code><a href="./src/resources/chatkit/threads.ts">ThreadDeleteResponse</a></code>
- <code><a href="./src/resources/chatkit/threads.ts">ThreadListItemsResponse</a></code>

Methods:

- <code title="get /chatkit/threads/{thread_id}">client.chatkit.threads.<a href="./src/resources/chatkit/threads.ts">retrieve</a>(threadID) -> Thread</code>
- <code title="get /chatkit/threads">client.chatkit.threads.<a href="./src/resources/chatkit/threads.ts">list</a>({ ...params }) -> ThreadListResponse</code>
- <code title="delete /chatkit/threads/{thread_id}">client.chatkit.threads.<a href="./src/resources/chatkit/threads.ts">delete</a>(threadID) -> ThreadDeleteResponse</code>
- <code title="get /chatkit/threads/{thread_id}/items">client.chatkit.threads.<a href="./src/resources/chatkit/threads.ts">listItems</a>(threadID, { ...params }) -> ThreadListItemsResponse</code>
