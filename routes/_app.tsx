import { type PageProps } from "fresh";
import { define, type State } from "@/lib/state.ts";

function App({ Component, state }: PageProps<never, State>) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          A deno fresh template{state.title ? ` - ${state.title}` : ""}
        </title>
        <meta
          name="description"
          content={state.description || "A deno fresh template."}
        />

        <link rel="icon" type="image/png" href="/image/avatar.png" />
        <link rel="shortcut icon" type="image/png" href="/image/avatar.png" />

        <link rel="stylesheet" href="/styles.css" />
        <link rel="manifest" href="/manifest.json" />

        {state.script && <script src={state.script} defer />}
      </head>
      <body class="text-black dark:text-white bg-white dark:bg-gray-900">
        <Component />
      </body>
    </html>
  );
}

export default define.page(App);
