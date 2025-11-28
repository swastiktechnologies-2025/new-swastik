import React from "react"
import { Link } from "react-router-dom"

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group">
      {post.image && (
        <div className="h-56 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-6">
        <p className="text-xs text-sky-600 font-semibold uppercase tracking-wide mb-2">
          {post.category}
        </p>
        <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center text-sm text-slate-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-block mt-4 text-sky-600 font-semibold text-sm hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}
