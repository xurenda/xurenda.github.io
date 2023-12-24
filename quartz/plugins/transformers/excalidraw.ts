import { QuartzTransformerPlugin } from "../types"

interface Options {
  ext: "svg" | "png"
}

export const Excalidraw: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const ext = opts?.ext ?? "svg"
  return {
    name: "Excalidraw",
    textTransform(_ctx, src) {
      if (typeof src === "string") {
        return src.replace(/\[\[(.+?)\.excalidraw(\.md)?\]\]/g, "[[$1.excalidraw.svg]]")
      }
      return src
    },
  }
}
