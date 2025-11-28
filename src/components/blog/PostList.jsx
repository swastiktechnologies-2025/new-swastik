import React from "react"
import PostCard from "./PostCard"
import Container from "../layout/Container"

export default function PostList({ posts = [] }) {
  if (!posts.length) {
    return (
      <section className="py-20 bg-slate-50 text-center">
        <Container>
          <h2 className="text-2xl font-semibold text-slate-700">
            No blog posts found
          </h2>
          <p className="text-slate-500 mt-2">
            Stay tuned — new articles are coming soon!
          </p>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  )
}
