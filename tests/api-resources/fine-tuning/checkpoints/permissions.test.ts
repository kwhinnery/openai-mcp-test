// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource permissions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.fineTuning.checkpoints.permissions.create(
      'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
      { project_ids: ['string'] },
    );
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
    const response = await client.fineTuning.checkpoints.permissions.create(
      'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
      { project_ids: ['string'] },
    );
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.fineTuning.checkpoints.permissions.retrieve('ft-AF1WoRqd3aJAHsqc9NY7iL8F');
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
      client.fineTuning.checkpoints.permissions.retrieve(
        'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
        {
          after: 'after',
          limit: 0,
          order: 'ascending',
          project_id: 'project_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.fineTuning.checkpoints.permissions.delete('cp_zc4Q7MP6XxulcVzj4MZdwsAB', {
      fine_tuned_model_checkpoint: 'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.fineTuning.checkpoints.permissions.delete('cp_zc4Q7MP6XxulcVzj4MZdwsAB', {
      fine_tuned_model_checkpoint: 'ft:gpt-4o-mini-2024-07-18:org:weather:B7R9VjQd',
    });
  });
});
