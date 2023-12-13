import { MiniPosts } from "../../components"
import { FeedStyle } from "./Feed.element"

export const Feed = () => {
  return (
    <FeedStyle>Feed
        <MiniPosts></MiniPosts>
        <MiniPosts></MiniPosts>
        <MiniPosts></MiniPosts>
    </FeedStyle>
  )
}
