import React, {useState} from 'react';

type TagsProps = {
  id: number, tagId: string, tagName: string
};
const Tags = [
  {id: 1, tagId: '1', tagName: '住宿'},
  {id: 2, tagId: '2', tagName: '早餐'},
  {id: 3, tagId: '3', tagName: '午餐'},
  {id: 4, tagId: '4', tagName: '晚餐'},
  {id: 5, tagId: '5', tagName: '停车'},
  {id: 6, tagId: '6', tagName: '亲子'},
  {id: 7, tagId: '7', tagName: '景点'},
  {id: 8, tagId: '8', tagName: '出行'},
  {id: 9, tagId: '9', tagName: '购物'},
  {id: 10, tagId: '10', tagName: '消费'},
  {id: 11, tagId: '11', tagName: '餐饮'},
];
const useTags = () => {
  const [tags, setTags] = useState<TagsProps[]>(Tags);

  return {tags, setTags};
};


export {useTags};