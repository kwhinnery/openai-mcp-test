// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OpenAIMcpTest } from '../client';

export abstract class APIResource {
  protected _client: OpenAIMcpTest;

  constructor(client: OpenAIMcpTest) {
    this._client = client;
  }
}
