import React, { useState } from "react";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export default function LikeButton({
  toggleLike,
  itemId,
  likedItems,
  size = "26",
}: {
  toggleLike: (e: React.MouseEvent, id: number) => void;
  itemId: number;
  likedItems: { [id: number]: boolean };
  size?: string;
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleLike(e, itemId);
      }}
    >
      {likedItems[itemId] ? (
        <IconHeartFilled size={size} stroke={1.5} className="text-red-500" />
      ) : (
        <IconHeart size={size} stroke={1.5} className="text-gray-400" />
      )}
    </button>
  );
}
