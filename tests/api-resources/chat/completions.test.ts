// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.chat.completions.create({
      body: { messages: [{ content: 'string', role: 'developer' }], model: 'gpt-4o' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.chat.completions.create({
      body: {
        top_logprobs: 0,
        messages: [
          {
            content: 'string',
            role: 'developer',
            name: 'name',
          },
        ],
        model: 'gpt-4o',
        audio: { format: 'wav', voice: 'ash' },
        frequency_penalty: -2,
        function_call: 'none',
        functions: [
          {
            name: 'name',
            description: 'description',
            parameters: { foo: 'bar' },
          },
        ],
        logit_bias: { foo: 0 },
        logprobs: true,
        max_completion_tokens: 0,
        max_tokens: 0,
        modalities: ['text'],
        n: 1,
        parallel_tool_calls: true,
        prediction: { content: 'string', type: 'content' },
        presence_penalty: -2,
        reasoning_effort: 'none',
        response_format: { type: 'text' },
        seed: -9007199254740991,
        stop: '\n',
        store: true,
        stream: true,
        stream_options: { include_obfuscation: true, include_usage: true },
        tool_choice: 'none',
        tools: [
          {
            function: {
              name: 'name',
              description: 'description',
              parameters: { foo: 'bar' },
              strict: true,
            },
            type: 'function',
          },
        ],
        verbosity: 'low',
        web_search_options: {
          search_context_size: 'low',
          user_location: {
            approximate: {
              city: 'city',
              country: 'country',
              region: 'region',
              timezone: 'timezone',
            },
            type: 'approximate',
          },
        },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.chat.completions.retrieve('completion_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.chat.completions.update('completion_id', { metadata: { foo: 'string' } });
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
    const response = await client.chat.completions.update('completion_id', { metadata: { foo: 'string' } });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.chat.completions.list();
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
      client.chat.completions.list(
        {
          after: 'after',
          limit: 0,
          metadata: { foo: 'string' },
          model: 'model',
          order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.chat.completions.delete('completion_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMessages', async () => {
    const responsePromise = client.chat.completions.listMessages('completion_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listMessages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.chat.completions.listMessages(
        'completion_id',
        {
          after: 'after',
          limit: 0,
          order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });
});
