export type JsonSerializable = {
  [key: string]: string | number | boolean | JsonSerializable;
};

export type RunContext = {
  run_id: string;
  chunk_id: string;
  timestamp: Date;
  trigger_type: "http" | "schedule" | "manual";
};

export type RunPayload = JsonSerializable;

export type RunResponse = JsonSerializable;

export type RunFunction = (
  context: RunContext,
  payload?: RunPayload
) => RunResponse | void | Promise<RunResponse | void>;
