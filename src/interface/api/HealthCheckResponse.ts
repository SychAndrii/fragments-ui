import SuccessResponse from "../responses/SuccessResponse";

export default interface HealthCheckResponse extends SuccessResponse {
  author: string;
  githubUrl: string;
  version: string;
}
