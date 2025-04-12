import { createAgent, openai } from "@inngest/agent-kit";

import { OPENAI_API_KEY } from "@/lib/config.ts";

export const gatewayAgent = createAgent({
  name: "Agent to test our AI Gateway",
  system: "You are a helpful assistant.",
  model: openai({ model: "gpt-4o-mini", apiKey: OPENAI_API_KEY }),
});

export const pickelMe = () =>
  gatewayAgent.run("Give me a pickle recipe, please");
