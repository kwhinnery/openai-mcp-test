// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource runs', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.threads.runs.create({ assistant_id: 'assistant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.threads.runs.create({
      assistant_id: 'assistant_id',
      instructions: 'instructions',
      max_completion_tokens: 256,
      max_prompt_tokens: 256,
      metadata: { foo: 'string' },
      model: 'gpt-4o',
      parallel_tool_calls: true,
      response_format: 'auto',
      stream: true,
      temperature: 1,
      thread: {
        messages: [
          {
            content: 'string',
            role: 'user',
            attachments: [{ file_id: 'file_id', tools: [{ type: 'code_interpreter' }] }],
            metadata: { foo: 'string' },
          },
        ],
        metadata: { foo: 'string' },
        tool_resources: {
          code_interpreter: { file_ids: ['string'] },
          file_search: {
            vector_store_ids: ['string'],
            vector_stores: [
              {
                chunking_strategy: { type: 'auto' },
                file_ids: ['string'],
                metadata: { foo: 'string' },
              },
            ],
          },
        },
      },
      tool_choice: 'none',
      tool_resources: {
        code_interpreter: { file_ids: ['string'] },
        file_search: { vector_store_ids: ['string'] },
      },
      tools: [{ type: 'code_interpreter' }],
      top_p: 1,
      truncation_strategy: { type: 'auto', last_messages: 1 },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.threads.runs.retrieve('run_id', { thread_id: 'thread_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.threads.runs.retrieve('run_id', { thread_id: 'thread_id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.threads.runs.update('run_id', { thread_id: 'thread_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.threads.runs.update('run_id', {
      thread_id: 'thread_id',
      metadata: { foo: 'string' },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.threads.runs.list('thread_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.threads.runs.list(
        'thread_id',
        {
          after: 'after',
          before: 'before',
          limit: 0,
          order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.threads.runs.cancel('run_id', { thread_id: 'thread_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.threads.runs.cancel('run_id', { thread_id: 'thread_id' });
  });

  // Mock server tests are disabled
  test.skip('createRun: only required params', async () => {
    const responsePromise = client.threads.runs.createRun('thread_id', { assistant_id: 'assistant_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createRun: required and optional params', async () => {
    const response = await client.threads.runs.createRun('thread_id', {
      assistant_id: 'assistant_id',
      include: ['step_details.tool_calls[*].file_search.results[*].content'],
      additional_instructions: 'additional_instructions',
      additional_messages: [
        {
          content: 'string',
          role: 'user',
          attachments: [{ file_id: 'file_id', tools: [{ type: 'code_interpreter' }] }],
          metadata: { foo: 'string' },
        },
      ],
      instructions: 'instructions',
      max_completion_tokens: 256,
      max_prompt_tokens: 256,
      metadata: { foo: 'string' },
      model: 'gpt-4o',
      parallel_tool_calls: true,
      reasoning_effort: 'none',
      response_format: 'auto',
      stream: true,
      temperature: 1,
      tool_choice: 'none',
      tools: [{ type: 'code_interpreter' }],
      top_p: 1,
      truncation_strategy: { type: 'auto', last_messages: 1 },
    });
  });

  // Mock server tests are disabled
  test.skip('submitToolOutputs: only required params', async () => {
    const responsePromise = client.threads.runs.submitToolOutputs('run_id', {
      thread_id: 'thread_id',
      tool_outputs: [{}],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('submitToolOutputs: required and optional params', async () => {
    const response = await client.threads.runs.submitToolOutputs('run_id', {
      thread_id: 'thread_id',
      tool_outputs: [{ output: 'output', tool_call_id: 'tool_call_id' }],
      stream: true,
    });
  });
});
