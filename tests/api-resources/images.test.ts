// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest, { toFile } from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource images', () => {
  // Mock server tests are disabled
  test.skip('createEdit: only required params', async () => {
    const responsePromise = client.images.createEdit({
      images: [{}],
      prompt: 'Add a watercolor effect to this image',
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
  test.skip('createEdit: required and optional params', async () => {
    const response = await client.images.createEdit({
      images: [{ file_id: 'file-abc123', image_url: 'https://example.com/source-image.png' }],
      prompt: 'Add a watercolor effect to this image',
      background: 'transparent',
      input_fidelity: 'high',
      mask: { file_id: 'file-abc123', image_url: 'https://example.com/source-image.png' },
      model: 'gpt-image-1.5',
      moderation: 'auto',
      n: 1,
      output_compression: 100,
      output_format: 'png',
      partial_images: 1,
      quality: 'high',
      size: '1024x1024',
      stream: false,
      user: 'user-1234',
    });
  });

  // Mock server tests are disabled
  test.skip('createGeneration: only required params', async () => {
    const responsePromise = client.images.createGeneration({ prompt: 'A cute baby sea otter' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createGeneration: required and optional params', async () => {
    const response = await client.images.createGeneration({
      prompt: 'A cute baby sea otter',
      background: 'transparent',
      model: 'gpt-image-1.5',
      moderation: 'low',
      n: 1,
      output_compression: 100,
      output_format: 'png',
      partial_images: 1,
      quality: 'medium',
      response_format: 'url',
      size: '1024x1024',
      stream: false,
      style: 'vivid',
      user: 'user-1234',
    });
  });

  // Mock server tests are disabled
  test.skip('createVariation: only required params', async () => {
    const responsePromise = client.images.createVariation({
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('createVariation: required and optional params', async () => {
    const response = await client.images.createVariation({
      image: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'dall-e-2',
      n: 1,
      response_format: 'url',
      size: '1024x1024',
      user: 'user-1234',
    });
  });
});
