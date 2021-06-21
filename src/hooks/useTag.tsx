import React, {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

type TagsProps = {
  id: number, iconName: string, name: string
};

const useTags = () => {
  const [tags, setTags] = useState<TagsProps[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
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
    }
    setTags(localTags);
  }, []); // 组件挂在时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  // 查找tag
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0];
  };
  // 查找tag下标
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

  // 更新tag
  const updateTag = (id: number, obj: { name: string, iconName: string }) => {
    return setTags(tags.map(tag => tag.id === id ? {id, name: obj.name, iconName: obj.iconName} : tag));
  };

  // 删除
  const deleteTag = (id: number) => {
    return setTags((tags) => tags.filter(tag => tag.id !== id));
  };

  // 添加该标签
  const addTag = (name: string, iconName: string) => {
    if (name !== null && name !== '') {
      return setTags([...tags, {id: createId(), name, iconName}]);
    }
  };

  // 获取该tag的名字
  const getName = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0];
    return tag ? tag.name : '';
  };
  // 获取该tag的图标
  const getIcon = (id: number) => {
    const tag = tags.filter(tag => tag.id === id)[0];
    return tag ? tag.iconName : '9999';
  };

  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag, getIcon, getName};
};


export {useTags};