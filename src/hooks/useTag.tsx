import React, {useState} from 'react';
import {createId} from '../lib/createId';

type TagsProps = {
  id: number, tagId: string, tagName: string
};
const Tags = [
  {id: createId(), tagId: '1', tagName: '住宿'},
  {id: createId(), tagId: '2', tagName: '早餐'},
  {id: createId(), tagId: '3', tagName: '午餐'},
  {id: createId(), tagId: '4', tagName: '晚餐'},
  {id: createId(), tagId: '5', tagName: '停车'},
  {id: createId(), tagId: '6', tagName: '亲子'},
  {id: createId(), tagId: '7', tagName: '景点'},
  {id: createId(), tagId: '8', tagName: '出行'},
  {id: createId(), tagId: '9', tagName: '购物'},
  {id: createId(), tagId: '10', tagName: '消费'},
  {id: createId(), tagId: '11', tagName: '餐饮'},
];
const useTags = () => {
  const [tags, setTags] = useState<TagsProps[]>(Tags);
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0];
  };

  return {tags, setTags, findTag};
};


export {useTags};