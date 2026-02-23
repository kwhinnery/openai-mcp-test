// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roles', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.groups.roles.list('group_id', { project_id: 'project_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.projects.groups.roles.list('group_id', {
      project_id: 'project_id',
      after: 'after',
      limit: 0,
      order: 'asc',
    });
  });

  // Mock server tests are disabled
  test.skip('assign: only required params', async () => {
    const responsePromise = client.projects.groups.roles.assign('group_id', {
      project_id: 'project_id',
      role_id: 'role_id',
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.projects.groups.roles.assign('group_id', {
      project_id: 'project_id',
      role_id: 'role_id',
    });
  });

  // Mock server tests are disabled
  test.skip('unassign: only required params', async () => {
    const responsePromise = client.projects.groups.roles.unassign('role_id', {
      project_id: 'project_id',
      group_id: 'group_id',
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
  test.skip('unassign: required and optional params', async () => {
    const response = await client.projects.groups.roles.unassign('role_id', {
      project_id: 'project_id',
      group_id: 'group_id',
    });
  });
});
