import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <span>
            本站所有内容均为原创、翻译或转载（转载都已注明原作者的原文链接），原创及翻译文章著作权归本人所有，所有文章以{" "}
          </span>
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">
            知识共享署名 4.0 国际许可协议
          </a>
          <span> 授权，转载请注明出处。</span>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target="_blank">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
