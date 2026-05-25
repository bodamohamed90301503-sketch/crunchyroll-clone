"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Comment = {
    id: number;
    comment: string;
    user_name: string;
};

export default function CommentsClient({ animeId }: { animeId: number }) {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchComments() {
        const { data, error } = await supabase
            .from("comments")
            .select("*")
            .eq("anime_id", animeId)
            .order("created_at", { ascending: false });

        if (error) {
            console.log(error.message);
            return;
        }

        setComments(data || []);
    }

    async function addComment() {
        if (!comment.trim()) return;

        setLoading(true);

        const { error } = await supabase.from("comments").insert({
            anime_id: animeId,
            comment,
            user_name: "Guest",
        });

        setLoading(false);

        if (error) {
            console.log(error.message);
            return;
        }

        setComment("");
        fetchComments();
    }

    useEffect(() => {
        fetchComments();
    }, [animeId]);

    return (
        <div>
            <div className="flex gap-2 mb-6">
                <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-3 rounded bg-white/10 text-white outline-none"
                />

                <button
                    onClick={addComment}
                    disabled={loading}
                    className="bg-purple-600 px-5 rounded"
                >
                    {loading ? "..." : "Send"}
                </button>
            </div>

            <div className="space-y-3">
                {comments.length === 0 && (
                    <p className="text-gray-500">No comments yet</p>
                )}

                {comments.map((c) => (
                    <div
                        key={c.id}
                        className="bg-white/5 p-3 rounded border border-white/10"
                    >
                        <p className="text-gray-400 text-sm">{c.user_name}</p>
                        <p>{c.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}