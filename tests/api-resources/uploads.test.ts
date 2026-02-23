// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest, { toFile } from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource uploads', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.uploads.create({
      bytes: 0,
      filename: 'filename',
      mime_type: 'mime_type',
      purpose: 'assistants',
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
    const response = await client.uploads.create({
      bytes: 0,
      filename: 'filename',
      mime_type: 'mime_type',
      purpose: 'assistants',
      expires_after: { anchor: 'created_at', seconds: 3600 },
    });
  });

  // Mock server tests are disabled
  test.skip('addPart: only required params', async () => {
    const responsePromise = client.uploads.addPart('upload_abc123', {
      data: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('addPart: required and optional params', async () => {
    const response = await client.uploads.addPart('upload_abc123', {
      data: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Mock server tests are disabled
  test.skip('cancel', async () => {
    const responsePromise = client.uploads.cancel('upload_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('complete: only required params', async () => {
    const responsePromise = client.uploads.complete('upload_abc123', { part_ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('complete: required and optional params', async () => {
    const response = await client.uploads.complete('upload_abc123', { part_ids: ['string'], md5: 'md5' });
  });
});
