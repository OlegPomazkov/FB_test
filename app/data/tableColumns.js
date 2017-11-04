var tableColumns = [
  "is_active", "value", "state",
  "costs__shows",  "costs__clicks", "costs__ctr", "costs__cpc", "costs__cost",  
  "goals-38177__cpa", "goals-38177__cr", "goals-38177__count", "goals-38177__revenue", "goals-38177__gross_profit", "goals-38177__roi", "goals-38177__drr", "goals-38177__roas",
  "goals-38173__cpa", "goals-38173__cr", "goals-38173__count",  
  "goals-38136__cpa", "goals-38136__cr", "goals-38136__count", "goals-38136__revenue", "goals-38136__gross_profit", "goals-38136__roi", "goals-38136__drr", "goals-38136__roas",
  "goals-38164__cpa", "goals-38164__cr", "goals-38164__count" 
]
var tableHeaders = {
  "is_active": '', 
  "value": 'Кампании', 
  "state":'Статус',
  "costs__shows":'Показы',
  "costs__clicks": 'Клики', 
  "costs__ctr": 'CTR', 
  "costs__cpc": 'CPC', 
  "costs__cost": 'Затраты',

  "goals-38177": 'Продажи из CRM',
  "goals-38173": 'Посещение страницы контактов',
  "goals-38136": 'Продажи из Google Analytics',
  "goals-38164": 'Просмотре раздела Агентсвам',

  "cpa": 'CPA,p.', 
  "cr": 'CR,%', 
  "count": 'Кол-во', 
  "revenue": 'Revenue,p', 
  "gross_profit": 'Gross Profit,p.', 
  "roi": 'ROI', 
  "drr": 'DRR', 
  "roas": 'ROAS'
}

module.exports = {tableColumns, tableHeaders};
