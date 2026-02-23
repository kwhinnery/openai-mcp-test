// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class VoiceConsents extends APIResource {
  /**
   * Delete a consent recording that was uploaded for creating custom voices.
   *
   * See the [custom voices guide](/docs/guides/text-to-speech#custom-voices). Custom
   * voices are limited to eligible customers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.audio.voiceConsents.deleteConsent(
   *     'consent_id',
   *   );
   * ```
   */
  deleteConsent(consentID: string, options?: RequestOptions): APIPromise<VoiceConsentDeleteConsentResponse> {
    return this._client.delete(path`/audio/voice_consents/${consentID}`, options);
  }

  /**
   * List consent recordings available to your organization for creating custom
   * voices.
   *
   * See the [custom voices guide](/docs/guides/text-to-speech#custom-voices). Custom
   * voices are limited to eligible customers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.audio.voiceConsents.listConsentRecordings();
   * ```
   */
  listConsentRecordings(
    query: VoiceConsentListConsentRecordingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VoiceConsentListConsentRecordingsResponse> {
    return this._client.get('/audio/voice_consents', { query, ...options });
  }

  /**
   * Retrieve consent recording metadata used for creating custom voices.
   *
   * See the [custom voices guide](/docs/guides/text-to-speech#custom-voices). Custom
   * voices are limited to eligible customers.
   *
   * @example
   * ```ts
   * const voiceConsentResource =
   *   await client.audio.voiceConsents.retrieveConsent(
   *     'consent_id',
   *   );
   * ```
   */
  retrieveConsent(consentID: string, options?: RequestOptions): APIPromise<VoiceConsentResource> {
    return this._client.get(path`/audio/voice_consents/${consentID}`, options);
  }

  /**
   * Update consent recording metadata used for creating custom voices. This endpoint
   * updates metadata only and does not replace the underlying audio.
   *
   * See the [custom voices guide](/docs/guides/text-to-speech#custom-voices). Custom
   * voices are limited to eligible customers.
   *
   * @example
   * ```ts
   * const voiceConsentResource =
   *   await client.audio.voiceConsents.updateConsent(
   *     'consent_id',
   *     { name: 'name' },
   *   );
   * ```
   */
  updateConsent(
    consentID: string,
    body: VoiceConsentUpdateConsentParams,
    options?: RequestOptions,
  ): APIPromise<VoiceConsentResource> {
    return this._client.post(path`/audio/voice_consents/${consentID}`, { body, ...options });
  }

  /**
   * Upload a consent recording that authorizes creation of a custom voice.
   *
   * See the [custom voices guide](/docs/guides/text-to-speech#custom-voices) for
   * requirements and best practices. Custom voices are limited to eligible
   * customers.
   *
   * @example
   * ```ts
   * const voiceConsentResource =
   *   await client.audio.voiceConsents.uploadConsent({
   *     language: 'language',
   *     name: 'name',
   *     recording: fs.createReadStream('path/to/file'),
   *   });
   * ```
   */
  uploadConsent(
    body: VoiceConsentUploadConsentParams,
    options?: RequestOptions,
  ): APIPromise<VoiceConsentResource> {
    return this._client.post(
      '/audio/voice_consents',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * A consent recording used to authorize creation of a custom voice.
 */
export interface VoiceConsentResource {
  /**
   * The consent recording identifier.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the consent recording was created.
   */
  created_at: number;

  /**
   * The BCP 47 language tag for the consent phrase (for example, `en-US`).
   */
  language: string;

  /**
   * The label provided when the consent recording was uploaded.
   */
  name: string;

  /**
   * The object type, which is always `audio.voice_consent`.
   */
  object: 'audio.voice_consent';
}

export interface VoiceConsentDeleteConsentResponse {
  /**
   * The consent recording identifier.
   */
  id: string;

  deleted: boolean;

  object: 'audio.voice_consent';
}

export interface VoiceConsentListConsentRecordingsResponse {
  data: Array<VoiceConsentResource>;

  has_more: boolean;

  object: 'list';

  first_id?: string | null;

  last_id?: string | null;
}

export interface VoiceConsentListConsentRecordingsParams {
  /**
   * A cursor for use in pagination. `after` is an object ID that defines your place
   * in the list. For instance, if you make a list request and receive 100 objects,
   * ending with obj_foo, your subsequent call can include after=obj_foo in order to
   * fetch the next page of the list.
   */
  after?: string;

  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and
   * 100, and the default is 20.
   */
  limit?: number;
}

export interface VoiceConsentUpdateConsentParams {
  /**
   * The updated label for this consent recording.
   */
  name: string;
}

export interface VoiceConsentUploadConsentParams {
  /**
   * The BCP 47 language tag for the consent phrase (for example, `en-US`).
   */
  language: string;

  /**
   * The label to use for this consent recording.
   */
  name: string;

  /**
   * The consent audio recording file. Maximum size is 10 MiB.
   *
   * Supported MIME types: `audio/mpeg`, `audio/wav`, `audio/x-wav`, `audio/ogg`,
   * `audio/aac`, `audio/flac`, `audio/webm`, `audio/mp4`.
   */
  recording: Uploadable;
}

export declare namespace VoiceConsents {
  export {
    type VoiceConsentResource as VoiceConsentResource,
    type VoiceConsentDeleteConsentResponse as VoiceConsentDeleteConsentResponse,
    type VoiceConsentListConsentRecordingsResponse as VoiceConsentListConsentRecordingsResponse,
    type VoiceConsentListConsentRecordingsParams as VoiceConsentListConsentRecordingsParams,
    type VoiceConsentUpdateConsentParams as VoiceConsentUpdateConsentParams,
    type VoiceConsentUploadConsentParams as VoiceConsentUploadConsentParams,
  };
}
