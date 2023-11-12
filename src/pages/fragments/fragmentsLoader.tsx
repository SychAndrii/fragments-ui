import makeAPIRequest from "../../utils/makeAPIRequest";

export async function fragmentsLoader() {
    return makeAPIRequest("/fragments?expand=1");
}