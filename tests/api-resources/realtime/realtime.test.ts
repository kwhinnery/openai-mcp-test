// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realtime', () => {
  // Mock server tests are disabled
  test.skip('createClientSecret', async () => {
    const responsePromise = client.realtime.createClientSecret({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createSession: only required params', async () => {
    const responsePromise = client.realtime.createSession({
      client_secret: { expires_at: 0, value: 'value' },
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
  test.skip('createSession: required and optional params', async () => {
    const response = await client.realtime.createSession({
      client_secret: { expires_at: 0, value: 'value' },
      input_audio_format: 'input_audio_format',
      input_audio_transcription: { model: 'model' },
      instructions: 'instructions',
      max_response_output_tokens: 0,
      modalities: ['text'],
      output_audio_format: 'output_audio_format',
      prompt: {
        id: 'id',
        variables: { foo: 'string' },
        version: 'version',
      },
      speed: 0.25,
      temperature: 0,
      tool_choice: 'tool_choice',
      tools: [
        {
          description: 'description',
          name: 'name',
          parameters: {},
          type: 'function',
        },
      ],
      tracing: 'auto',
      truncation: 'auto',
      turn_detection: {
        prefix_padding_ms: 0,
        silence_duration_ms: 0,
        threshold: 0,
        type: 'type',
      },
      voice: 'ash',
    });
  });

  // Mock server tests are disabled
  test.skip('createTranscriptionSession', async () => {
    const responsePromise = client.realtime.createTranscriptionSession({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
