import Mock from 'mockjs'
import data from './data.json'

// 映射路由
Mock.mock('/api/classify', {
  code: 0,
  data: data.classify
})
