// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource responses', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.responses.create({ body: {} });
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
    const response = await client.responses.create({
      body: {
        background: true,
        max_output_tokens: 0,
        max_tool_calls: 0,
        model: 'gpt-5.1',
        previous_response_id: 'previous_response_id',
        prompt: {
          id: 'id',
          variables: { foo: 'string' },
          version: 'version',
        },
        reasoning: {
          effort: 'none',
          generate_summary: 'auto',
          summary: 'auto',
        },
        text: {
          format: { type: 'text' },
          verbosity: 'low',
        },
        tool_choice: 'none',
        tools: [
          {
            name: 'name',
            parameters: { foo: 'bar' },
            strict: true,
            type: 'function',
            description: 'description',
          },
        ],
        truncation: 'auto',
        context_management: [{ type: 'type', compact_threshold: 1000 }],
        conversation: 'string',
        include: ['file_search_call.results'],
        input: 'string',
        instructions: 'instructions',
        parallel_tool_calls: true,
        store: true,
        stream: true,
        stream_options: { include_obfuscation: true },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.responses.retrieve('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.responses.retrieve(
        'resp_677efb5139a88190b512bc3fef8e535d',
        {
          include: ['file_search_call.results'],
          include_obfuscation: true,
          starting_after: 0,
          stream: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.responses.delete('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.responses.cancel('resp_677efb5139a88190b512bc3fef8e535d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('compact: only required params', async () => {
    const responsePromise = client.responses.compact({ model: 'gpt-5.2' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('compact: required and optional params', async () => {
    const response = await client.responses.compact({
      model: 'gpt-5.2',
      input: 'string',
      instructions: 'instructions',
      previous_response_id: 'resp_123',
    });
  });

  // Mock server tests are disabled
  test.skip('getInputTokens', async () => {
    const responsePromise = client.responses.getInputTokens();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getInputTokens: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.responses.getInputTokens(
        {
          conversation: 'string',
          input: 'string',
          instructions: 'instructions',
          model: 'model',
          parallel_tool_calls: true,
          previous_response_id: 'resp_123',
          reasoning: {
            effort: 'none',
            generate_summary: 'auto',
            summary: 'auto',
          },
          text: {
            format: { type: 'text' },
            verbosity: 'low',
          },
          tool_choice: 'none',
          tools: [
            {
              name: 'name',
              parameters: { foo: 'bar' },
              strict: true,
              type: 'function',
              description: 'description',
            },
          ],
          truncation: 'auto',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listInputItems', async () => {
    const responsePromise = client.responses.listInputItems('response_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listInputItems: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.responses.listInputItems(
        'response_id',
        {
          after: 'after',
          include: ['file_search_call.results'],
          limit: 0,
          order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });
});
