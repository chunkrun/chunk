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

export const runChunk = async (
  slug: string,
  payload: JsonSerializable
): Promise<JsonSerializable> => {
  try {
    const res = await fetch(`https://live.chunk.run/${slug}`, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then((r) => r.json());
    return res;
  } catch (error) {
    throw Error(`Could not run chunk ${slug}. Reason: ${error.message}`);
  }
};
