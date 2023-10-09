import Fragment from "../data/Fragment";
import SuccessResponse from "../responses/SuccessResponse";

export default interface AllFragmentsResponse extends SuccessResponse {
  fragments: Fragment[];
}
