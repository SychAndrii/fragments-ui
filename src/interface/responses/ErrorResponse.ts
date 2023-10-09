export default interface ErrorResponse {
  status: "error";
  error: {
    code: number;
    message: string;
  };
}
