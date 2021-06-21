import React, {useState} from 'react';
import {createId} from '../lib/createId';

type TagsProps = {
  id: number, iconName: string, name: string
};
const Tags = [
  {id: createId(), iconName: '1', name: '住宿'},
  {id: createId(), iconName: '2', name: '早餐'},
  {id: createId(), iconName: '3', name: '午餐'},
  {id: createId(), iconName: '4', name: '晚餐'},
  {id: createId(), iconName: '5', name: '停车'},
  {id: createId(), iconName: '6', name: '亲子'},
  {id: createId(), iconName: '7', name: '景点'},
  {id: createId(), iconName: '8', name: '出行'},
  {id: createId(), iconName: '9', name: '购物'},
  {id: createId(), iconName: '10', name: '消费'},
  {id: createId(), iconName: '11', name: '餐饮'},
];
const useTags = () => {
  const [tags, setTags] = useState<TagsProps[]>(Tags);
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0];
  };
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };


  const updateTag = (id: number, obj: { name: string, iconName: string }) => {
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name, iconName: obj.iconName} : tag));
  };


  return {tags, setTags, findTag, updateTag, findTagIndex};
};


export {useTags};