import { QuartzFilterPlugin } from "../types"

export const RemoveInternal: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveInternal",
  shouldPublish(_ctx, [_tree, vfile]) {
    const tags = (vfile.data?.frontmatter?.tags ?? []) as string[]
    return !tags.some((t) => t === "visibility/internal" || t === "visibility/pii")
  },
})
