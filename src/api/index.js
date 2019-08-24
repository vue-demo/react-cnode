export default {
  // 用户详情 GET /user/:loginname
  user: '/user/',

  // 获取用户详情信息 GET
  login: '/accesstoken',

  // 获取主题列表 GET
  topics: '/topics',

  // 获取主题详情包括回复 GET
  topicDetail: '/topic/',

  // 用户所收藏的主题 GET  /topic_collect/:loginname
  userCollections: '/topic_collect/',

  // 收藏主题 POST
  collection: '/topic_collect/collect',

  // 取消收藏主题 POST
  cancelCollection: '/topic_collect/de_collect',

  // 点赞/取消点赞 POST  /reply/:reply_id/ups 为评论点赞
  like: '/reply/',

  // 获取未读消息数 GET
  messageCount: '/message/count',

  // 获取已读和未读消息 GET
  fetchMessages: '/messages',

  // 标记全部已读 POST
  messageMarkAll: '/message/mark_all',

  // 标记单个消息为已读 POST  /message/mark_one/:msg_id
  messageMarkOne: '/message/mark_one/',

  // 新建评论 POST /topic/:topic_id/replies
  replies: '/topic/',

  // 新建主题 POST
  newTopics: '/topics',

  // 编辑主题 POST
  updateTopics: '/topics/update',
};