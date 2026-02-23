// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organization', () => {
  // Mock server tests are disabled
  test.skip('getCosts: only required params', async () => {
    const responsePromise = client.organization.getCosts({ start_time: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCosts: required and optional params', async () => {
    const response = await client.organization.getCosts({
      start_time: 0,
      bucket_width: '1d',
      end_time: 0,
      group_by: ['project_id'],
      limit: 0,
      page: 'page',
      project_ids: ['string'],
    });
  });

  // Mock server tests are disabled
  test.skip('listAuditLogs', async () => {
    const responsePromise = client.organization.listAuditLogs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAuditLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organization.listAuditLogs(
        {
          actor_emails: ['string'],
          actor_ids: ['string'],
          after: 'after',
          before: 'before',
          effective_at: {
            gt: 0,
            gte: 0,
            lt: 0,
            lte: 0,
          },
          event_types: ['api_key.created'],
          limit: 0,
          project_ids: ['string'],
          resource_ids: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OpenAIMcpTest.NotFoundError);
  });
});
