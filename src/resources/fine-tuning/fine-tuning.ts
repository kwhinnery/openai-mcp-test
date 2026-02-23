// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from './jobs';
import {
  FineTuneMethod,
  FineTuningJob,
  JobCreateParams,
  JobListCheckpointsParams,
  JobListCheckpointsResponse,
  JobListEventsParams,
  JobListEventsResponse,
  JobListParams,
  JobListResponse,
  Jobs,
} from './jobs';
import * as AlphaAPI from './alpha/alpha';
import { Alpha } from './alpha/alpha';
import * as CheckpointsAPI from './checkpoints/checkpoints';
import { Checkpoints } from './checkpoints/checkpoints';

export class FineTuning extends APIResource {
  alpha: AlphaAPI.Alpha = new AlphaAPI.Alpha(this._client);
  checkpoints: CheckpointsAPI.Checkpoints = new CheckpointsAPI.Checkpoints(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

FineTuning.Alpha = Alpha;
FineTuning.Checkpoints = Checkpoints;
FineTuning.Jobs = Jobs;

export declare namespace FineTuning {
  export { Alpha as Alpha };

  export { Checkpoints as Checkpoints };

  export {
    Jobs as Jobs,
    type FineTuneMethod as FineTuneMethod,
    type FineTuningJob as FineTuningJob,
    type JobListResponse as JobListResponse,
    type JobListCheckpointsResponse as JobListCheckpointsResponse,
    type JobListEventsResponse as JobListEventsResponse,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobListCheckpointsParams as JobListCheckpointsParams,
    type JobListEventsParams as JobListEventsParams,
  };
}
