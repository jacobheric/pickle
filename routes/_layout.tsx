import { type PageProps } from "fresh";
import { Partial } from "fresh/runtime";

export default function Layout(ctx: PageProps) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col justify-start">
        <div class="flex justify-start sm:w-[90%] md:max-w-6xl md:mx-auto mt-6">
          <Partial name="overlay-content">
            <ctx.Component />
          </Partial>
        </div>
      </div>
      <footer class="border-t flex flex-row items-center tracking-wide justify-center gap-1 h-14">
        <div className="w-full inline text-right">Made with</div>

        <div className="text-xl">&#9829;</div>

        <div className="flex flex-row justify-start w-full">in Maine</div>
      </footer>
    </div>
  );
}
