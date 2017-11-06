const initialState =  {
  "content": [
    {
      "is_active": true,
      "value": "TEST",
      "state": "new",
      "costs": {
        "ctr": 0,
        "cost": 38.77,
        "clicks": 12,
        "cpc": 3.23,
        "shows": 57
      },
      "goals": [
        {
          "count": 0,
          "roi": -100.0,
          "revenue": 0.0,
          "cpa": 0.0,
          "drr": 0.0,
          "gross_profit": 0.0,
          "roas": 0.0,
          "cr": 0.0
        },
        {
          "count": 2,
          "cpa": 19.39,
          "cr": 16.67
        },
        {
          "count": 0,
          "roi": -100.0,
          "revenue": 0.0,
          "cpa": 0.0,
          "drr": 0.0,
          "gross_profit": 0.0,
          "roas": 0.0,
          "cr": 0.0
        },
        {
          "count": 4,
          "cpa": 9.69,
          "cr": 33.33
        }
      ]
    }
  ],
  "goals_list": [
    {
      "name": "Продажи из CRM",
      "goal_id": 38177
    },
    {
      "name": "Посещение страницы контактов",
      "goal_id": 38173
    },
    {
      "name": "Продажи из Google Analytics",
      "goal_id": 38136
    },
    {
      "name": "Просмотре раздела Агентсвам",
      "goal_id": 38164
    }
  ],
  "total": {
    "costs": {
      "ctr": 0,
      "cost": 0,
      "clicks": 0,
      "cpc": 0,
      "shows": 0
    },
    "goals": [
      {
        "count": 0,
        "roi": -100.0,
        "revenue": 0.0,
        "cpa": 0.0,
        "drr": 0.0,
        "gross_profit": 0.0,
        "roas": 0.0,
        "cr": 0.0
      },
      {
        "count": 5,
        "cpa": 2038.42,
        "cr": 1.23
      },
      {
        "count": 0,
        "roi": -100.0,
        "revenue": 0.0,
        "cpa": 0.0,
        "drr": 0.0,
        "gross_profit": 0.0,
        "roas": 0.0,
        "cr": 0.0
      },
      {
        "count": 11,
        "cpa": 926.55,
        "cr": 2.7
      }
    ]
  },
  "visibility": {
    "is_active": true,
    "value": true,
    "state": true,
    "costs": {
      "ctr": true,
      "cost": true,
      "clicks": true,
      "cpc": true,
      "shows": true
    },
    "goals-38177":{
      "count": true,
      "roi": true,
      "revenue": true,
      "cpa": true,
      "drr": false,
      "gross_profit": true,
      "roas": false,
      "cr": true
    },
    "goals-38173":{
      "count": false,
      "cpa": true,
      "cr": true
    },
    "goals-38136":{
      "count": true,
      "roi": true,
      "revenue": true,
      "cpa": true,
      "drr": true,
      "gross_profit": true,
      "roas": true,
      "cr": true
    },
    "goals-38164":{
      "count": true,
      "cpa": true,
       "cr": true
    }
  },
  "chooseFilter": "not_goal"  
};

module.exports = initialState;