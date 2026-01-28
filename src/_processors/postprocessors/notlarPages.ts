import type { Postprocessor, TreeContext } from "jstatico";
import { FileResult, FileResultArray } from "jstatico";

const POSTS_PER_PAGE = 10;

export const processor: Postprocessor = {
  match: /^notlarPages\.processor\.ts$/,
  process(this: FileResult, context: TreeContext) {
    const posts = context.post as Record<string, FileResult>;
    const layouts = context._layouts as Record<string, FileResult>;

    const pages = Object.keys(posts)
      .reduceRight<FileResult[][]>((prev, cur) => {
        let latest = prev[prev.length - 1];
        if (latest.length === POSTS_PER_PAGE) {
          latest = [];
          prev.push(latest);
        }
        latest.push(posts[cur]);
        return prev;
      }, [[]])
      .map((postArray, index, postArrays) => {
        const path = this.path.replace(
          this.name,
          (index === 0 ? "index" : String(index + 1)) + ".html"
        );
        const result = new FileResult(path, {
          posts: postArray,
          pages: postArrays.map((_, i) => i + 1),
          currentPage: index + 1,
          cleanurl: index !== 0,
        });
        result.contents = layouts["_notlar.html"].contents;
        return result;
      });

    return new FileResultArray(pages);
  },
};
