export const LOAD_RESPONSES = "LOAD_RESPONSES";

export const loadResponses = (responses) => ({
  type: LOAD_RESPONSES,
  payload: responses,
});
