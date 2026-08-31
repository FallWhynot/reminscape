"use client";

import { useState } from "react";
import { formatDate } from "@/lib/utils";

type Comment = {
  id: string;
  name: string;
  date: string;
  body: string;
  replies: Comment[];
};

const MOCK_COMMENTS: Comment[] = [
  {
    id: "1",
    name: "Reader",
    date: "2026-08-15",
    body: "Really well-written piece. The context you provide helps a lot — this is exactly the kind of reporting that's getting harder to find.",
    replies: [
      {
        id: "1-1",
        name: "Another Reader",
        date: "2026-08-16",
        body: "Agreed. The depth of analysis here is what keeps me coming back to reminscape.",
        replies: [],
      },
    ],
  },
  {
    id: "2",
    name: "Observer",
    date: "2026-08-17",
    body: "I had a different reading of the situation but this gave me a few things to reconsider. Good work.",
    replies: [],
  },
];

function CommentForm({
  onSubmit,
  placeholder = "Share your thoughts…",
}: {
  onSubmit: (name: string, email: string, body: string) => void;
  placeholder?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !body.trim()) return;
    onSubmit(name, email, body);
    setName("");
    setEmail("");
    setBody("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-[#5a5a64] mb-1" htmlFor="comment-name">
            Name *
          </label>
          <input
            id="comment-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#141416] border border-[#2a2a2e] rounded px-3 py-2 text-sm text-[#e8e8ec] placeholder-[#5a5a64] focus:border-[#b5a48a] focus:outline-none transition-colors"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-[#5a5a64] mb-1" htmlFor="comment-email">
            Email
          </label>
          <input
            id="comment-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#141416] border border-[#2a2a2e] rounded px-3 py-2 text-sm text-[#e8e8ec] placeholder-[#5a5a64] focus:border-[#b5a48a] focus:outline-none transition-colors"
            placeholder="Not published"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs text-[#5a5a64] mb-1" htmlFor="comment-body">
          Comment *
        </label>
        <textarea
          id="comment-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          className="w-full bg-[#141416] border border-[#2a2a2e] rounded px-3 py-2 text-sm text-[#e8e8ec] placeholder-[#5a5a64] focus:border-[#b5a48a] focus:outline-none transition-colors resize-none"
          placeholder={placeholder}
          required
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-[#b5a48a] hover:bg-[#c9b89e] text-[#0c0c0d] text-sm font-medium px-4 py-2 rounded transition-colors"
        >
          Post comment
        </button>
        {submitted && (
          <span className="text-xs text-emerald-400">Comment posted!</span>
        )}
      </div>
    </form>
  );
}

function CommentItem({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<Comment[]>(comment.replies);

  const handleReply = (name: string, _email: string, body: string) => {
    const newReply: Comment = {
      id: `${comment.id}-${replies.length + 1}`,
      name,
      date: new Date().toISOString().split("T")[0],
      body,
      replies: [],
    };
    setReplies((prev) => [...prev, newReply]);
    setShowReply(false);
  };

  return (
    <div className={`${depth > 0 ? "ml-6 pl-4 border-l border-[#2a2a2e]" : ""}`}>
      <div className="bg-[#1c1c1f] rounded p-4 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-[#2a2a2e] flex items-center justify-center text-xs text-[#8c8c96] font-medium">
            {comment.name[0]}
          </div>
          <span className="text-sm font-medium text-[#e8e8ec]">{comment.name}</span>
          <span className="text-xs text-[#5a5a64]">{formatDate(comment.date)}</span>
        </div>
        <p className="text-[#8c8c96] text-sm leading-relaxed">{comment.body}</p>
        {depth < 2 && (
          <button
            onClick={() => setShowReply(!showReply)}
            className="text-xs text-[#5a5a64] hover:text-[#b5a48a] mt-2 transition-colors"
          >
            Reply
          </button>
        )}
      </div>

      {showReply && (
        <div className="ml-4 mb-3 bg-[#141416] rounded p-4 border border-[#2a2a2e]">
          <CommentForm onSubmit={handleReply} placeholder="Write a reply…" />
        </div>
      )}

      {replies.map((reply) => (
        <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </div>
  );
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);

  const handleSubmit = (name: string, _email: string, body: string) => {
    const newComment: Comment = {
      id: String(comments.length + 1),
      name,
      date: new Date().toISOString().split("T")[0],
      body,
      replies: [],
    };
    setComments((prev) => [newComment, ...prev]);
  };

  const totalComments = comments.reduce(
    (acc, c) => acc + 1 + c.replies.length,
    0
  );

  return (
    <section className="mt-12 pt-8 border-t border-[#2a2a2e]">
      <h2 className="text-lg font-semibold text-[#e8e8ec] mb-6">
        {totalComments} {totalComments === 1 ? "Comment" : "Comments"}
      </h2>

      {/* Existing comments */}
      <div className="space-y-2 mb-8">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      {/* New comment form */}
      <div className="border border-[#2a2a2e] rounded p-5">
        <h3 className="text-sm font-medium text-[#e8e8ec] mb-4">Leave a comment</h3>
        <CommentForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
}
