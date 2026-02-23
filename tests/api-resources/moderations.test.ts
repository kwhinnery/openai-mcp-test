// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource moderations', () => {
  // Mock server tests are disabled
  test.skip('classify: only required params', async () => {
    const responsePromise = client.moderations.classify({ input: 'I want to kill them.' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('classify: required and optional params', async () => {
    const response = await client.moderations.classify({
      input: 'I want to kill them.',
      model: 'omni-moderation-2024-09-26',
    });
  });
});
