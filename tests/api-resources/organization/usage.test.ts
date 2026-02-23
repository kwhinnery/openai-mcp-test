// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource usage', () => {
  // Mock server tests are disabled
  test.skip('audioSpeeches: only required params', async () => {
    const responsePromise = client.organization.usage.audioSpeeches({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('audioSpeeches: required and optional params', async () => {
    const response = await client.organization.usage.audioSpeeches({
      start_time: 0,
      api_key_ids: ['string'],
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('audioTranscriptions: only required params', async () => {
    const responsePromise = client.organization.usage.audioTranscriptions({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('audioTranscriptions: required and optional params', async () => {
    const response = await client.organization.usage.audioTranscriptions({
      start_time: 0,
      api_key_ids: ['string'],
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('codeInterpreterSessions: only required params', async () => {
    const responsePromise = client.organization.usage.codeInterpreterSessions({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('codeInterpreterSessions: required and optional params', async () => {
    const response = await client.organization.usage.codeInterpreterSessions({
      start_time: 0,
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      page: 'page',
      project_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('completions: only required params', async () => {
    const responsePromise = client.organization.usage.completions({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('completions: required and optional params', async () => {
    const response = await client.organization.usage.completions({
      start_time: 0,
      api_key_ids: ['string'],
      batch: true,
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('embeddings: only required params', async () => {
    const responsePromise = client.organization.usage.embeddings({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('embeddings: required and optional params', async () => {
    const response = await client.organization.usage.embeddings({
      start_time: 0,
      api_key_ids: ['string'],
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('images: only required params', async () => {
    const responsePromise = client.organization.usage.images({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('images: required and optional params', async () => {
    const response = await client.organization.usage.images({
      start_time: 0,
      api_key_ids: ['string'],
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      sizes: ['256x256'],
      sources: ['image.generation'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('moderations: only required params', async () => {
    const responsePromise = client.organization.usage.moderations({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('moderations: required and optional params', async () => {
    const response = await client.organization.usage.moderations({
      start_time: 0,
      api_key_ids: ['string'],
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      models: ['string'],
      page: 'page',
      project_ids: ['string'],
      user_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('vectorStores: only required params', async () => {
    const responsePromise = client.organization.usage.vectorStores({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('vectorStores: required and optional params', async () => {
    const response = await client.organization.usage.vectorStores({
      start_time: 0,
      bucket_width: '1m',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      page: 'page',
      project_ids: ['string'],
    });
  });
});
