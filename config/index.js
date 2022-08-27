export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxd0fcfdce26740872",
    // 公众号appSecret
    appSecret: "41c359274f0b3347d6063fa2becd0e9d",
    // 模板消息id
    templateId: "1jW3ZoU3vtEfnYZvK97_a-yNVGgSQ92g4TKDVkyyU44",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["osT4j50HROgaXqu_XwSoQ-p7S0xQ", "osT4j54HTCAok84IiIK1jJNHLlW8"],
     
    // 信息配置
    // 所在省份
    province: "河北",
    // 所在城市
    city: "石家庄",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小宁", "year": "2001", "date": "12-01", "type": 'new'},
      {"name": "小狗", "year": "2002", "date": "05-11", "type": 'r'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-01-16",
    // 结婚纪念日
    marryDate: "2021-01-16"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
