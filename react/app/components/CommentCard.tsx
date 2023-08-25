import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

interface CommentCardProps {
  comment: {
    id: number;
    user: string;
    comment: string;
    dateCreated: string;
  };
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const [commentTimestamp, setCommentTimestamp] = useState('');

  useEffect(() => {
    const isoTimestamp: string = comment?.dateCreated;
    setCommentTimestamp(isoTimestamp);
  }, [comment])

  return (
    <div className="flex-col gap-20 space-y-3 rounded-lg p-5 bg-neutral-900 hover:bg-neutral-600 w-full ">
      <p className="font-bold text-sm text-neutral-400">{comment?.user}</p>
      <p className="ml-3">{comment?.comment}</p>
      <p className="text-xs text-neutral-400 text-right">{`${DateTime.fromISO(commentTimestamp).toRelative()}`}</p>
    </div>
  )
}

export default CommentCard;