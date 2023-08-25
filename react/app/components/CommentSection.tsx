import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

import CommentCard from "./CommentCard";

interface CommentCardProps {
  commentsList: {
    id: number;
    user: string;
    comment: string;
    dateCreated: string;
  }[];
  displayPeriod: string;
}

const CommentSection = ({ commentsList, displayPeriod }: CommentCardProps) => {
  const [durationCheck, setDurationCheck] = useState(604800000);

  useEffect(() => {
    switch (displayPeriod) {
      case 'today':
        setDurationCheck(86400000);
        break;
      case 'last 7':
        setDurationCheck(604800000);
        break;
      case 'last 30':
        setDurationCheck(2592000000);
        break;
      case 'last year':
        setDurationCheck(31557600000);
        break;
    }
  }, [displayPeriod])

  return (
    <div className="flex flex-col space-y-4 w-full place-items-center">
      {commentsList.sort((a, b) => {
        let compare = 0
        if (DateTime.now().diff(DateTime.fromISO(a?.dateCreated)).milliseconds > DateTime.now().diff(DateTime.fromISO(b?.dateCreated)).milliseconds) {
          compare = 1;
        } else {
          compare = -1;
        }
        return compare;
      }).map((comment: any) => {
        return (
          (displayPeriod === 'all' || DateTime.now().diff(DateTime.fromISO(comment?.dateCreated)).milliseconds < durationCheck) &&
          <CommentCard key={comment.id} comment={comment} />
        )
      })}
    </div>
  );
};

export default CommentSection;