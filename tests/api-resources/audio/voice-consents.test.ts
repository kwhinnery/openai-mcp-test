// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest, { toFile } from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource voiceConsents', () => {
  // Mock server tests are disabled
  test.skip('deleteConsent', async () => {
    const responsePromise = client.audio.voiceConsents.deleteConsent('consent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listConsentRecordings', async () => {
    const responsePromise = client.audio.voiceConsents.listConsentRecordings();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listConsentRecordings: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.audio.voiceConsents.listConsentRecordings(
        { after: 'after', limit: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveConsent', async () => {
    const responsePromise = client.audio.voiceConsents.retrieveConsent('consent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateConsent: only required params', async () => {
    const responsePromise = client.audio.voiceConsents.updateConsent('consent_id', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateConsent: required and optional params', async () => {
    const response = await client.audio.voiceConsents.updateConsent('consent_id', { name: 'name' });
  });

  // Mock server tests are disabled
  test.skip('uploadConsent: only required params', async () => {
    const responsePromise = client.audio.voiceConsents.uploadConsent({
      language: 'language',
      name: 'name',
      recording: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('uploadConsent: required and optional params', async () => {
    const response = await client.audio.voiceConsents.uploadConsent({
      language: 'language',
      name: 'name',
      recording: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
