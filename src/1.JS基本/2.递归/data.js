const config = {
  text: '节点1',
  children: [
    {
      text: '节点1-1',
      children: [
        {
          text: '节点1-1-1',
          bind: '',
          children: []
        }
      ]
    },
    {
      text: '节点2',
    },
    {
      text: '节点3',
      children: [
        {
          text: '节点3-1-1',
          bind: 'node3',
          children: []
        },
        {
          text: '节点3-2-1',
          bind: false,
          children: []
        }
      ]
    }
  ],
};

module.exports = config;