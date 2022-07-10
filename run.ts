export type RunContext = {
  run_id: string;
  chunk_id: string;
  timestamp: Date;
  trigger_type: "http" | "schedule" | "manual";
};

export type RunResponse = {
  [key: string]: string | number | boolean | RunResponse;
};

export type run = (context: RunContext) => RunResponse | Promise<RunResponse>;
