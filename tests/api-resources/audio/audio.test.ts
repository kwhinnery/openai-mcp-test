// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OpenAIMcpTest, { toFile } from 'openai-mcp-test';

const client = new OpenAIMcpTest({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audio', () => {
  // Mock server tests are disabled
  test.skip('createCustomVoice: only required params', async () => {
    const responsePromise = client.audio.createCustomVoice({
      audio_sample: await toFile(Buffer.from('# my file contents'), 'README.md'),
      consent: 'consent',
      name: 'name',
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
  test.skip('createCustomVoice: required and optional params', async () => {
    const response = await client.audio.createCustomVoice({
      audio_sample: await toFile(Buffer.from('# my file contents'), 'README.md'),
      consent: 'consent',
      name: 'name',
    });
  });

  // Mock server tests are disabled
  test.skip('generateAudio: required and optional params', async () => {
    const response = await client.audio.generateAudio({
      input: 'input',
      model: 'string',
      voice: 'ash',
      instructions: 'instructions',
      response_format: 'mp3',
      speed: 0.25,
      stream_format: 'sse',
    });
  });

  // Mock server tests are disabled
  test.skip('transcribeAudio: only required params', async () => {
    const responsePromise = client.audio.transcribeAudio({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'gpt-4o-transcribe',
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
  test.skip('transcribeAudio: required and optional params', async () => {
    const response = await client.audio.transcribeAudio({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'gpt-4o-transcribe',
      chunking_strategy: 'auto',
      include: ['logprobs'],
      known_speaker_names: ['string'],
      known_speaker_references: ['string'],
      language: 'language',
      prompt: 'prompt',
      response_format: 'json',
      stream: true,
      temperature: 0,
      timestamp_granularities: ['word'],
    });
  });

  // Mock server tests are disabled
  test.skip('translateAudio: only required params', async () => {
    const responsePromise = client.audio.translateAudio({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'whisper-1',
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
  test.skip('translateAudio: required and optional params', async () => {
    const response = await client.audio.translateAudio({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      model: 'whisper-1',
      prompt: 'prompt',
      response_format: 'json',
      temperature: 0,
    });
  });
});
