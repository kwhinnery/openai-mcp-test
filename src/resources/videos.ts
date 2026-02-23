// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Videos extends APIResource {
  /**
   * Create a new video generation job from a prompt and optional reference assets.
   */
  create(body: VideoCreateParams, options?: RequestOptions): APIPromise<VideoResource> {
    return this._client.post('/videos', maybeMultipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Fetch the latest metadata for a generated video.
   */
  retrieve(videoID: string, options?: RequestOptions): APIPromise<VideoResource> {
    return this._client.get(path`/videos/${videoID}`, options);
  }

  /**
   * List recently generated videos for the current project.
   */
  list(
    query: VideoListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoListResponse> {
    return this._client.get('/videos', { query, ...options });
  }

  /**
   * Permanently delete a completed or failed video and its stored assets.
   */
  delete(videoID: string, options?: RequestOptions): APIPromise<VideoDeleteResponse> {
    return this._client.delete(path`/videos/${videoID}`, options);
  }

  /**
   * Create a remix of a completed video using a refreshed prompt.
   */
  createRemix(
    videoID: string,
    body: VideoCreateRemixParams,
    options?: RequestOptions,
  ): APIPromise<VideoResource> {
    return this._client.post(
      path`/videos/${videoID}/remix`,
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Download the generated video bytes or a derived preview asset.
   *
   * Streams the rendered video content for the specified video job.
   */
  downloadContent(
    videoID: string,
    query: VideoDownloadContentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/videos/${videoID}/content`, { query, ...options });
  }
}

export type OrderEnum = 'asc' | 'desc';

export type VideoModel =
  | (string & {})
  | 'sora-2'
  | 'sora-2-pro'
  | 'sora-2-2025-10-06'
  | 'sora-2-pro-2025-10-06'
  | 'sora-2-2025-12-08';

/**
 * Structured information describing a generated video job.
 */
export interface VideoResource {
  /**
   * Unique identifier for the video job.
   */
  id: string;

  /**
   * Unix timestamp (seconds) for when the job completed, if finished.
   */
  completed_at: number | null;

  /**
   * Unix timestamp (seconds) for when the job was created.
   */
  created_at: number;

  /**
   * Error payload that explains why generation failed, if applicable.
   */
  error: VideoResource.Error | null;

  /**
   * Unix timestamp (seconds) for when the downloadable assets expire, if set.
   */
  expires_at: number | null;

  /**
   * The video generation model that produced the job.
   */
  model: VideoModel;

  /**
   * The object type, which is always `video`.
   */
  object: 'video';

  /**
   * Approximate completion percentage for the generation task.
   */
  progress: number;

  /**
   * The prompt that was used to generate the video.
   */
  prompt: string | null;

  /**
   * Identifier of the source video if this video is a remix.
   */
  remixed_from_video_id: string | null;

  /**
   * Duration of the generated clip in seconds.
   */
  seconds: VideoSeconds;

  /**
   * The resolution of the generated video.
   */
  size: VideoSize;

  /**
   * Current lifecycle status of the video job.
   */
  status: 'queued' | 'in_progress' | 'completed' | 'failed';
}

export namespace VideoResource {
  /**
   * Error payload that explains why generation failed, if applicable.
   */
  export interface Error {
    /**
     * A machine-readable error code that was returned.
     */
    code: string;

    /**
     * A human-readable description of the error that was returned.
     */
    message: string;
  }
}

export type VideoSeconds = '4' | '8' | '12';

export type VideoSize = '720x1280' | '1280x720' | '1024x1792' | '1792x1024';

export interface VideoListResponse {
  /**
   * A list of items
   */
  data: Array<VideoResource>;

  /**
   * The ID of the first item in the list.
   */
  first_id: string | null;

  /**
   * Whether there are more items available.
   */
  has_more: boolean;

  /**
   * The ID of the last item in the list.
   */
  last_id: string | null;

  /**
   * The type of object returned, must be `list`.
   */
  object: 'list';
}

/**
 * Confirmation payload returned after deleting a video.
 */
export interface VideoDeleteResponse {
  /**
   * Identifier of the deleted video.
   */
  id: string;

  /**
   * Indicates that the video resource was deleted.
   */
  deleted: boolean;

  /**
   * The object type that signals the deletion response.
   */
  object: 'video.deleted';
}

export type VideoDownloadContentResponse = string;

export interface VideoCreateParams {
  /**
   * Text prompt that describes the video to generate.
   */
  prompt: string;

  /**
   * Optional image reference that guides generation.
   */
  input_reference?: Uploadable;

  /**
   * The video generation model to use (allowed values: sora-2, sora-2-pro). Defaults
   * to `sora-2`.
   */
  model?: VideoModel;

  /**
   * Clip duration in seconds (allowed values: 4, 8, 12). Defaults to 4 seconds.
   */
  seconds?: VideoSeconds;

  /**
   * Output resolution formatted as width x height (allowed values: 720x1280,
   * 1280x720, 1024x1792, 1792x1024). Defaults to 720x1280.
   */
  size?: VideoSize;
}

export interface VideoListParams {
  /**
   * Identifier for the last item from the previous pagination request
   */
  after?: string;

  /**
   * Number of items to retrieve
   */
  limit?: number;

  /**
   * Sort order of results by timestamp. Use `asc` for ascending order or `desc` for
   * descending order.
   */
  order?: OrderEnum;
}

export interface VideoCreateRemixParams {
  /**
   * Updated text prompt that directs the remix generation.
   */
  prompt: string;
}

export interface VideoDownloadContentParams {
  /**
   * Which downloadable asset to return. Defaults to the MP4 video.
   */
  variant?: 'video' | 'thumbnail' | 'spritesheet';
}

export declare namespace Videos {
  export {
    type OrderEnum as OrderEnum,
    type VideoModel as VideoModel,
    type VideoResource as VideoResource,
    type VideoSeconds as VideoSeconds,
    type VideoSize as VideoSize,
    type VideoListResponse as VideoListResponse,
    type VideoDeleteResponse as VideoDeleteResponse,
    type VideoDownloadContentResponse as VideoDownloadContentResponse,
    type VideoCreateParams as VideoCreateParams,
    type VideoListParams as VideoListParams,
    type VideoCreateRemixParams as VideoCreateRemixParams,
    type VideoDownloadContentParams as VideoDownloadContentParams,
  };
}
