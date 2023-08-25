'use client';

import { useState } from "react";

import CommentSection from "./components/CommentSection";
import DateListSelect from "./components/DateListSelect";

const SamplePage = () => {
  const [displayPeriod, setDisplayPeriod] = useState('7 days');

  return (
    <div className="flex flex-col space-y-5 rounded-lg m-7 p-7 bg-neutral-800 place-items-start">
      <div className="grid grid-cols-2 w-full space-x-10">
        <h1 className="text-xl font-bold inline-block">Comments</h1>
        <DateListSelect setDisplayPeriod={setDisplayPeriod} />
      </div>
      <CommentSection commentsList={commentsList} displayPeriod={displayPeriod} />
    </div>
  )
};

export default SamplePage;

// DUMMY DATA
// Comments to display in SamplePage
const commentsList = [
  {
    id: 0,
    user: 'Liana',
    comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    dateCreated: '2023-08-24T10:31:17+0000',
  },
  {
    id: 1,
    user: 'Anna',
    comment: 'Lorem ipsum dolor sit amet.',
    dateCreated: '2023-07-14T03:22:06+0000',
  },
  {
    id: 2,
    user: 'Jonathon',
    comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, officia.',
    dateCreated: '2023-08-09T11:07:17+0000',
  },
  {
    id: 3,
    user: 'John',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    dateCreated: '2023-08-23T21:46:54+0000',
  },
  {
    id: 4,
    user: 'Juah',
    comment: 'Lorem ipsum dolor sit.',
    dateCreated: '2023-08-23T13:10:26+0000',
  },
  {
    id: 5,
    user: 'Holden',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam!',
    dateCreated: '2023-08-23T17:27:40+0000',
  },
  {
    id: 6,
    user: 'Michelle',
    comment: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel ratione culpa rerum architecto!',
    dateCreated: '2023-06-04T10:55:56+0000',
  },
  {
    id: 7,
    user: 'James',
    comment: 'Lorem, ipsum.',
    dateCreated: '2023-02-09T21:53:43+0000',
  },
  {
    id: 8,
    user: 'Tiffany',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis reprehenderit dolorem!',
    dateCreated: '2023-03-18T07:47:31+0000',
  },
  {
    id: 9,
    user: 'Stephanie',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod illum doloremque corporis voluptatum rem!',
    dateCreated: '2023-07-29T18:32:21+0000',
  },
  {
    id: 10,
    user: 'Ben',
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius itaque ut quia tempore delectus odit!',
    dateCreated: '2023-08-25T10:00:17+0000',
  },
  {
    id: 11,
    user: 'Melissa',
    comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nobis eos sequi est!',
    dateCreated: '2023-08-25T09:20:17+0000',
  },
]