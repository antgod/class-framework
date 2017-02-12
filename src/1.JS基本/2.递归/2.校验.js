const fs = require('fs');
const config = require('./data');

const checkTreeLeaf = rule => {
  let memoryCache = [];
  const renderTree = (leaf, path) => {
    leaf.children && leaf.children.map((subLeaf, i)=> {
      const subPath = [path, i].join('.');
      return renderTree(leaf.children[i], subPath)
    });

    if (!rule(leaf)) {
      memoryCache.push(path);
    }
    return memoryCache
  };
  return renderTree;
};

// 校验bind值必须是string且不能为空字符串
const rule = leaf => leaf.bind === undefined || typeof leaf.bind === 'string' && leaf.bind.length !== 0;

console.log(checkTreeLeaf(rule)(config, 'root'));


