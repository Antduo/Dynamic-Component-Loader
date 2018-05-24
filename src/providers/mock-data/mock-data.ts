import { Injectable } from '@angular/core';


@Injectable()
export class MockDataProvider {

  constructor() {
    console.log('Hello MockDataProvider Provider');
  }

  /**
   * 广告数据
   * @type {string[]}
   */
  public sliderArray = [
    "https://img30.360buyimg.com/da/jfs/t12370/227/2247099377/197444/b45a2120/5a38e364N5df612f2.jpg",
    "https://img11.360buyimg.com/da/jfs/t5464/106/472798610/142359/66551a05/58ffffc8Naea1f2a2.jpg",
    "https://img10.360buyimg.com/babel/jfs/t14581/146/1598584414/167809/387a8d48/5a5314b8N6ffdba94.jpg",
    "https://img11.360buyimg.com/babel/jfs/t14335/125/1733254500/112204/905bade0/5a56c435N232330c6.jpg"
  ];


  /**
   * 社区动态数据
   * @type {{image: string; title: string}[]}
   */
  public noticeList = [
    {
      image: "",
      title: "督院社区审核养老服务金卡和高龄津贴的通知"
    },
    {
      image: "",
      title: "换新版社保卡的通知"
    },
    {
      image: "",
      title: "关于“长者移动通”用户更换手机的通知"
    },
  ];


  /**
   * menuList数据
   *
   * @type {{img: string; name: string}[]}
   */
  public menuList = [{
    "img": "http://120.25.192.115:9015/public/file/imgs/577010b9-d35f-4f84-9e1b-9735b5913504.gif",
    "name": "平安督院"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/d07da9fd-ffe0-48d3-8226-c1276921972b.png",
    "name": "巡查播报"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/6be63e4d-bb90-4c56-bf6a-870b1cb7b67e.png",
    "name": "社团活动"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/dd6765f3-35f7-4ec4-9cab-b91ddfd16f0c.png",
    "name": "督院文艺"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/2db85148-ed22-43a4-8c2e-62a6bd3bd973.png",
    "name": "户籍办理"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/9f94b7b8-1630-49e3-bb14-8872a9b9f6db.png",
    "name": "法律咨询"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/818ffca2-441c-47b3-a9aa-6e26408c0304.png",
    "name": "平安卫士"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/7e1ed6f8-1895-4201-b5fc-79fa61ae6ecd.png",
    "name": "随手拍"
  },{
    "img": "http://120.25.192.115:9015/public/file/imgs/577010b9-d35f-4f84-9e1b-9735b5913504.gif",
    "name": "平安督院"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/d07da9fd-ffe0-48d3-8226-c1276921972b.png",
    "name": "巡查播报"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/6be63e4d-bb90-4c56-bf6a-870b1cb7b67e.png",
    "name": "社团活动"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/dd6765f3-35f7-4ec4-9cab-b91ddfd16f0c.png",
    "name": "督院文艺"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/2db85148-ed22-43a4-8c2e-62a6bd3bd973.png",
    "name": "户籍办理"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/9f94b7b8-1630-49e3-bb14-8872a9b9f6db.png",
    "name": "法律咨询"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/818ffca2-441c-47b3-a9aa-6e26408c0304.png",
    "name": "平安卫士"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/7e1ed6f8-1895-4201-b5fc-79fa61ae6ecd.png",
    "name": "随手拍"
  },{
    "img": "http://120.25.192.115:9015/public/file/imgs/577010b9-d35f-4f84-9e1b-9735b5913504.gif",
    "name": "平安督院"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/d07da9fd-ffe0-48d3-8226-c1276921972b.png",
    "name": "巡查播报"
  }, {
    "img": "http://120.25.192.115:9015/public/file/imgs/6be63e4d-bb90-4c56-bf6a-870b1cb7b67e.png",
    "name": "社团活动"
  }];


  /**
   * 热门menu 数据1
   * @type {{img: string; name: string}[]}
   */
  public hotMenu1 = [{
    "img": "http://file.j1home.com/%E5%AE%89%E5%85%A8%E7%A4%BE%E5%8C%BA@2x.png",
    "name": "安全社区"
  }, {

    "img": "http://file.j1home.com/%E5%AE%89%E5%85%A8%E7%A4%BE%E5%8C%BA@2x.png",
    "name": "安全社区"
  }, {

    "img": "http://file.j1home.com/%E7%A4%BE%E5%8C%BA%E5%85%9A%E5%BB%BA@2x.png",
    "name": "社区党建"

  }];

  /**
   * 热门menu 数据2
   * @type {{img: string; name: string}[]}
   */
  public hotMenu2 = [{

    "img": "http://file.j1home.com/%E5%AE%89%E5%85%A8%E7%A4%BE%E5%8C%BA@2x.png",
    "name": "社区安全"
  }, {

    "img": "http://file.j1home.com/%E7%A4%BE%E5%8C%BA%E5%85%9A%E5%BB%BA@2x.png",
    "name": "社区党建"

  }];

  /**
   * 活动列表数据
   * @type {{startTime: string; id: string; title: string; details: string; cratetTime: string; commentsNum: number; sendStatus: string; sendArea: string; registrationNum: number; imgsDesc: string; endTime: string; type: string}[]}
   */
  public activityList = [{
    "startTime": "2017-10-27 10:00:00",
    "id": "8af4a23c5f51bb44015f904490580052",
    "title": "开展“我们的节日重阳”座谈茶话会活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f904490580052.html",
    "cratetTime": "2017-11-06 15:38:53",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/334bfd0e-d639-415b-8d13-771e47ec1694.png\t",
    "endTime": "2017-10-27 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-10-26 14:00:00",
    "id": "8af4a23c5f51bb44015f907eee7a0054",
    "title": "开展2017年锦江区“走基层”文化惠民演出活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f907eee7a0054.html",
    "cratetTime": "2017-11-06 16:42:38",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/93b90dd0-d9bf-4b41-b6ad-14057602dc2d.png\t",
    "endTime": "2017-10-26 16:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-09-28 10:00:00",
    "id": "8af4a23c5f51bb44015f8ef567cc0045",
    "title": "开展“我们的节日中秋”民俗文化讲座活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f8ef567cc0045.html",
    "cratetTime": "2017-11-06 09:32:48",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/be81767d-e021-4165-a2ef-ae21b0ca0071.png\t",
    "endTime": "2017-09-28 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-08-24 10:00:00",
    "id": "8af4a23c5f51bb44015f8eed46290043",
    "title": "开展“我们的节日七夕”民俗文化讲座活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f8eed46290043.html",
    "cratetTime": "2017-11-06 09:23:55",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/b5906361-6c8f-439a-b44c-6b1cc5b0bc76.png\t",
    "endTime": "2017-08-24 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-08-10 10:00:00",
    "id": "8af4a23c5f51bb44015f8efecb1c0047",
    "title": "开展“小鬼当家”志愿服务活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f8efecb1c0047.html",
    "cratetTime": "2017-11-06 09:43:03",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/2cd075c0-8c5e-43df-8298-986c51e52cdf.png\t",
    "endTime": "2017-08-10 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-07-28 10:00:00",
    "id": "8af4a23c5f51bb44015f8efafa5d0046",
    "title": "开展“法制生活”公益讲座的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f8efafa5d0046.html",
    "cratetTime": "2017-11-06 09:38:53",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/a7d7e946-11de-48f9-a0ce-3988f5ce83e3.png\t",
    "endTime": "2017-07-28 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-07-27 10:00:00",
    "id": "8af4a23c5f51bb44015f7badd5480037",
    "title": "开展“暑期环保小卫士”志愿服务活动的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f7badd5480037.html",
    "cratetTime": "2017-11-02 15:41:50",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/ba4e5b69-fb4f-4c8a-a8ac-9f00e54ae9a4.png\t",
    "endTime": "2017-07-27 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-06-07 14:00:00",
    "id": "8af4a23c5f51bb44015f7b9338a80032",
    "title": "开展“老年维权”法律公益讲座的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f7b9338a80032.html",
    "cratetTime": "2017-11-02 15:12:46",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/9612bab4-7d6d-49a3-b19d-2dff9c831f31.png\t",
    "endTime": "2017-06-07 16:30:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-05-26 09:30:00",
    "id": "8af4a23c5f51bb44015f7b9f35080033",
    "title": "开展“我们的节日端午”民俗讲座的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f7b9f35080033.html",
    "cratetTime": "2017-11-02 15:25:52",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/3caccfdb-9045-4b32-9d24-212819a81f9b.png\t",
    "endTime": "2017-05-26 11:00:00",
    "type": "社区活动"
  }, {
    "startTime": "2017-03-31 10:00:00",
    "id": "8af4a23c5f51bb44015f7bb460b10039",
    "title": "开展“国学经典朗读”公益讲座的通知",
    "details": "/public/file/html/8af4a23c5f51bb44015f7bb460b10039.html",
    "cratetTime": "2017-11-02 15:48:59",
    "commentsNum": 0,
    "sendStatus": "sent",
    "sendArea": "8af4a23c5d86aec3015dbfcf91c101be",
    "registrationNum": 0,
    "imgsDesc": "http://smartsafecommunity.com:9015/public/file/imgs/9eec27fd-5a5c-4ed4-8055-ad2d1de3d18b.png\t",
    "endTime": "2017-03-31 11:00:00",
    "type": "社区活动"
  }];


}
