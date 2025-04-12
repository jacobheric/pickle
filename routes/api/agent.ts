import { pickelMe } from "@/lib/agentKit.ts";
import { define } from "@/lib/state.ts";

export const handler = define.handlers({
  async GET() {
    const recipe = await pickelMe();
    return new Response(JSON.stringify(recipe));
  },
});
