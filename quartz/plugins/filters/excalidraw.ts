import { QuartzFilterPlugin } from "../types"

export const ExcalidrawFilter: QuartzFilterPlugin<{}> = () => ({
  name: "ExcalidrawFilter",
  shouldPublish(_ctx, [_tree, vfile]) {
    return !vfile.data?.frontmatter?.tags?.includes("excalidraw")
  },
})
