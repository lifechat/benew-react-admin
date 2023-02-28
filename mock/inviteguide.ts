import { MockMethod } from "vite-plugin-mock";

interface params {
  body: any;
  query?: any;
}

export default [
  {
    url: "/api/invite/guide/",
    method: "get",
    response: ({ query }: params) => {
      return {
        code: 200,
        message: "ok",
        data: {
          attr: {
            codeHeadImg:
              "https://img.benewtech.cn/FozUPmz8dCOKnO69J6m286i1MPmM",
            inviteHeadImg:
              "https://img.benewtech.cn/FtVzu8nh9WoZcuBBJnnqjOCro7_L",
            inviteHeadTradeImg:
              "https://img.benewtech.cn/Fj_3OMD61YgaySxckvUVz-QH_urV",
            inviteRecordsTitleImg:
              "https://img.benewtech.cn/FpOFwNEW4qypiLKPXe4H63DjJMai",
            inviteRecordsTitleTradeImg:
              "https://img.benewtech.cn/Fm2iip7lBh5GPaBCNHV5PyEtHjWZ",
            inviteeImg: "https://img.benewtech.cn/FpC05D9qwy-_W8sJZjnwG2EVg6RH",
            newbieAwardImg:
              "https://img.benewtech.cn/FrIkabD4674DU69etCpFn95zVIRk",
            rankAppTitleImg:
              "https://img.benewtech.cn/FvyDpC9Y0aisfA6N4QVIY1TQ-VE7",
            rankDeviceTitleImg:
              "https://img.benewtech.cn/FuwEaJV_IKuU9pp97XuOY0_xfXx9",
            rankDeviceTitleTradeImg:
              "https://img.benewtech.cn/FlllWDYJTC_crG8Uig6_iXILtvpp",
            rankHeadImg:
              "https://img.benewtech.cn/FkmuXWZL_OSf2nlTt2M4GhuHJhIL",
            rankHeadTradeImg:
              "https://img.benewtech.cn/Fh-3fuDI2CXf6lFd_Z3vmY_1X_pP",
            rankImg: "https://img.benewtech.cn/FrwAlbq4hey7KUvkY9oV3FPQXXBc",
            rankTradeImg:
              "https://img.benewtech.cn/Fu8IeM8yiGRjy_wT7jYnKsPM16jR",
            stageAwardsTitleImg:
              "https://img.benewtech.cn/FvfHGvlZYO2JLiVqkvdNm-20LOpi",
            statisticsTitleImg:
              "https://img.benewtech.cn/Fq99a7a2WKqb5SxmoYG4tRLp9eMy",
            statisticsTitleTradeImg:
              "https://img.benewtech.cn/Fm5wn6BUbSV6rnKf5hxo7vvwiljq",
            stepsImg: "https://img.benewtech.cn/FkL6UKNPLLYQaBV6Q1mqsP7rBBvr",
            stepsTitleImg:
              "https://img.benewtech.cn/FhRWAgssrj08O2wJPMGbpxFi4d1D",
            taskGuideVideoUrl:
              "https://video.benewtech.cn/ac9c4378427de81eaa69fbe4dcf767011f1faa3a.m4v",
            taskHeadImg:
              "https://img.benewtech.cn/FigH2oj3cXAq8Oy_T8DrMoi4NchA",
            taskTitleImg:
              "https://img.benewtech.cn/FoFg4foPGF6qezwZNwY4LN_TtNKj",
            tutorialsImg:
              "https://img.benewtech.cn/FrEiirGuXiSJVF2JARe_DvPjEIQS",
            tutorialsTitleImg:
              "https://img.benewtech.cn/FrawpwM7pJ_flbmlQ2cUegVU__r3",
            tutorialsTitleTradeImg:
              "https://img.benewtech.cn/FmjGT57P5mq1xM7c2iU7LS5d_0Rs",
            tutorialsTradeImg:
              "https://img.benewtech.cn/Fn6X_C3S8OqCoYhAnmAmb0e5gX1Y",
            wreathImg: "https://img.benewtech.cn/Fu7Ljy2euf206yynOn-E0Wa3XJf5",
          },
          currentDate: 1663309683745,
          explainPageUrl: "https://cloud.benewtech.cn/fh5/article/23343",
          guideBuyAccessUrl:
            "http://coupon.m.jd.com/coupons/show.action?key=6f40fc4a24644f9099ea81c04a42b5d3&roleId=36543054&to=niutingting.jd.com",
          guideBuyNoAccessUrl:
            "http://coupon.m.jd.com/coupons/show.action?key=6f40fc4a24644f9099ea81c04a42b5d3&roleId=36543054&to=niutingting.jd.com",
          guideBuyPageUrl: "https://cloud.benewtech.cn/fh5/invite/share/20537",
          guideBuyTitle: "送了您一张100元现金券",
          interestFriendPageUrl: "https://cloud.benewtech.cn/fh5/article/20577",
          introduce:
            "多邀多得，最高可得20万牛币，还有各种实体奖品、终身会员等你来领~",
          isInvitee: false,
          isInviter: false,
          lastQuota: 442,
          title: "邀请有礼",
        },
      };
    },
  },
  {
    url:'/api/invite/rank',
    method:'get',
    response:({query}:params) => {
      return {
        code:200,
        message:'ok',
        data:{
          top20InviteRank: [
              {
                  "userName": "悦悦康康的小家",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 86,
                  "rank": 1
              },
              {
                  "userName": "1271109266",
                  "avatar": "",
                  "count": 27,
                  "rank": 2
              },
              {
                  "userName": "盼盼",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 20,
                  "rank": 3
              },
              {
                  "userName": "cindy860",
                  "avatar": "http://img.benewtech.cn/8765be95868eaf3c3d3b5c37dc6bb6291d8555dd.jpg",
                  "count": 15,
                  "rank": 4
              },
              {
                  "userName": "梁小若👑",
                  "avatar": "http://img.benewtech.cn/2689dbd710b4f5d78092eb94532e7d75524fbc49.jpg",
                  "count": 12,
                  "rank": 5
              },
              {
                  "userName": "时光不耐",
                  "avatar": "http://img.benewtech.cn/e8832b9359f3fbf48fda26f1162fb4f95d8ed365.jpg",
                  "count": 9,
                  "rank": 6
              },
              {
                  "userName": "miss无敌小惠",
                  "avatar": "http://img.benewtech.cn/97440a75d81df1bb0f0ad97c6dc71af5e9968638.jpg",
                  "count": 9,
                  "rank": 7
              },
              {
                  "userName": "1254829998",
                  "avatar": "",
                  "count": 9,
                  "rank": 8
              },
              {
                  "userName": "婷婷",
                  "avatar": "http://img.benewtech.cn/a44e7e6c5d39c112829049f51ff61db61ed422b2.jpg",
                  "count": 8,
                  "rank": 9
              },
              {
                  "userName": "樱桃小丸子",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 6,
                  "rank": 10
              },
              {
                  "userName": "只迷集团桃源张强15874221067",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 6,
                  "rank": 11
              },
              {
                  "userName": "EvelynCai",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 6,
                  "rank": 12
              },
              {
                  "userName": "琳琳|酸奶妈妈",
                  "avatar": "http://img.benewtech.cn/c35aeb2dba2feb879ca45c9a3c1e0cc26bbe7ea8.jpg",
                  "count": 5,
                  "rank": 13
              },
              {
                  "userName": "豆荚🌻",
                  "avatar": "http://img.benewtech.cn/e3b0c95d6bab99ae8c78db51b170f086e1c1c84b.jpg",
                  "count": 5,
                  "rank": 14
              },
              {
                  "userName": "1193306943",
                  "avatar": "",
                  "count": 5,
                  "rank": 15
              },
              {
                  "userName": "官方绘本组",
                  "avatar": "http://img.benewtech.cn/0fb76b6f52c28cd61c140c471c88c27eb708d021.jpg",
                  "count": 4,
                  "rank": 16
              },
              {
                  "userName": "cherry",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 4,
                  "rank": 17
              },
              {
                  "userName": "菜菜🌳☘",
                  "avatar": "http://img.benewtech.cn/7c1236654bb3b55eefc3b9b9364d0ac57639cf92.jpg",
                  "count": 4,
                  "rank": 18
              },
              {
                  "userName": "布布😄",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 4,
                  "rank": 19
              },
              {
                  "userName": "༺丹̎+小̎+蔼̎+༻",
                  "avatar": "http://img.benewtech.cn/b8f63d54d1e60ea2e152d712913b6c08b6eeb542.jpg",
                  "count": 4,
                  "rank": 20
              }
          ],
          top20SuccessInviteRank: [
              {
                  "userName": "悦悦康康的小家",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 35,
                  "rank": 1
              },
              {
                  "userName": "cindy860",
                  "avatar": "http://img.benewtech.cn/8765be95868eaf3c3d3b5c37dc6bb6291d8555dd.jpg",
                  "count": 9,
                  "rank": 2
              },
              {
                  "userName": "时光不耐",
                  "avatar": "http://img.benewtech.cn/e8832b9359f3fbf48fda26f1162fb4f95d8ed365.jpg",
                  "count": 7,
                  "rank": 3
              },
              {
                  "userName": "盼盼",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 5,
                  "rank": 4
              },
              {
                  "userName": "1271109266",
                  "avatar": "",
                  "count": 5,
                  "rank": 5
              },
              {
                  "userName": "菜菜🌳☘",
                  "avatar": "http://img.benewtech.cn/7c1236654bb3b55eefc3b9b9364d0ac57639cf92.jpg",
                  "count": 3,
                  "rank": 6
              },
              {
                  "userName": "1254829998",
                  "avatar": "",
                  "count": 3,
                  "rank": 7
              },
              {
                  "userName": "布布😄",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 2,
                  "rank": 8
              },
              {
                  "userName": "婷婷",
                  "avatar": "http://img.benewtech.cn/a44e7e6c5d39c112829049f51ff61db61ed422b2.jpg",
                  "count": 2,
                  "rank": 9
              },
              {
                  "userName": "10770346",
                  "avatar": "",
                  "count": 1,
                  "rank": 10
              },
              {
                  "userName": "琳琳|酸奶妈妈",
                  "avatar": "http://img.benewtech.cn/c35aeb2dba2feb879ca45c9a3c1e0cc26bbe7ea8.jpg",
                  "count": 1,
                  "rank": 11
              },
              {
                  "userName": "1268171168",
                  "avatar": "",
                  "count": 1,
                  "rank": 12
              },
              {
                  "userName": "赖小赖",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 1,
                  "rank": 13
              },
              {
                  "userName": "1247250264",
                  "avatar": "",
                  "count": 1,
                  "rank": 14
              },
              {
                  "userName": "Hannah+huang²⁰¹⁸",
                  "avatar": "http://img.benewtech.cn/9506f2dbe079057f5408fd11a29c3225df47e9de.jpg",
                  "count": 1,
                  "rank": 15
              },
              {
                  "userName": "1269621657",
                  "avatar": "",
                  "count": 1,
                  "rank": 16
              },
              {
                  "userName": "李明",
                  "avatar": "http://img.benewtech.cn/fa9795bea63320c8bf0466d2910dd67b75cd4763.jpg",
                  "count": 1,
                  "rank": 17
              },
              {
                  "userName": "Mandy",
                  "avatar": "http://img.benewtech.cn/6785ced1f196aec15aeb11275787816b52afc6b7.jpg",
                  "count": 1,
                  "rank": 18
              },
              {
                  "userName": "妮爱",
                  "avatar": "http://img.benewtech.cn/default%2Fntt%2Favatar.png",
                  "count": 1,
                  "rank": 19
              },
              {
                  "userName": "熙",
                  "avatar": "http://img.benewtech.cn/40a53f12b1ad94266267e36d7a4ed859b96e4524.jpg",
                  "count": 1,
                  "rank": 20
              }
          ]
      }
      }      
    }
  },
];
