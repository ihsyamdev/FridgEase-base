import React from 'react'

interface IngredientsAddModalProps {
  foodCategory: string
}

export const IngredientsAddModal: React.FC<IngredientsAddModalProps> = ({ foodCategory }) => {

  // MEMO: 食材を新規追加する際のカテゴリごとのマスタデータ
  const sampleIngredients = [
    {category: "野菜・果物", ingredients: [
      {name: "玉ねぎ", quantity: 0, unit: "個"},
      {name: "にんじん", quantity: 0, unit: "個"},
      {name: "じゃがいも", quantity: 0, unit: "個"}
    ]}, 
    {category: "肉・魚", ingredients: [
      {name: "牛カルビ", quantity: 0, unit: "g"},
      {name: "豚バラ肉", quantity: 0, unit: "g"},
      {name: "鶏むね肉", quantity: 0, unit: "枚"}
    ]}, 
    {category: "卵・牛乳・乳製品", ingredients: [
      {name: "卵", quantity: 0, unit: "個"},
      {name: "牛乳", quantity: 0, unit: "l"},
      {name: "チーズ", quantity: 0, unit: "g"}
    ]}
  ]

  return (
    <div>
      {sampleIngredients.filter(item => item.category == foodCategory).map((category, index) => (
        <div key={index}>
          <h1 className='font-bold text-xl text-center'>
            {category.category}
          </h1>
          <div>
            {category.ingredients.map((ingredient, index) => (
              <div key={index} className='flex justify-between border-b border-gray-300 py-2'>
                <div>{ingredient.name}</div>
                <div className='flex'>
                  <div>
                    {ingredient.quantity}
                  </div>
                  <div>
                    {ingredient.unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
