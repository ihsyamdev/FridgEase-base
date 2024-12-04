import React, { useState } from 'react'
import { Template } from '../../components/Template'
import { PrimaryButton } from '../../components/PrimaryButton'
import { SecondaryButton } from '../../components/SecondaryButton'
import { IngredientsAddModal }  from './IngredientsAddModal'
import { FaMinusCircle } from 'react-icons/fa'

export const IngredientsCreate: React.FC = () => {

  // MEMO: テスト用のデータ
  const sampleIngredients = [
    {name: '玉ねぎ', quantity: '3', expirationDate: '2024-12-31'},
    {name: 'にんじん', quantity: '2', expirationDate: '2024-12-30'},
    {name: 'じゃがいも', quantity: '4', expirationDate: '2024-12-29'},
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [foodCategory, setFoodCategory] = useState('')

  const openModal = (category: string) => () => {
    setFoodCategory(category)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Template>
      <div className='w-3/4 mx-auto'>
        <h1 className='text-center font-bold text-xl my-5'>
          食材の新規登録
        </h1>
        <div id='ingredient-table' className=''>
          {/* sampleIngredientsを表形式で表示 */}
          <ul>
            {sampleIngredients.map((ingredient, index) => (
              <li key={index} className='flex items-center border-b border-gray-300 py-2'>
                <div className='w-2/6 text-start'>{ingredient.name}</div>
                <div className='w-1/6 text-center'>{ingredient.quantity}</div>
                <div className='w-2/6'>
                  <div className='flex items-center'>
                    {ingredient.expirationDate}
                    <div className='text-sm text-end'>
                      までに消費
                    </div>
                  </div>
                </div>
                <div className='w-1/6 flex justify-center items-center text-2xl'>
                  <FaMinusCircle />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-center gap-20 my-10'>
          <PrimaryButton size='medium'>
            <div className='w-24'>
              登録
            </div>
          </PrimaryButton>
          <SecondaryButton size='medium'>
            <div className='w-24'>
              キャンセル
            </div>
          </SecondaryButton>
        </div>

      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-lg w-3/4'>
          <div className='flex justify-end'>
          <button className='text-gray-500 hover:text-gray-700 float-right' onClick={closeModal}>
              &times;
              モーダルを閉じる
            </button>

          </div>
            <IngredientsAddModal foodCategory={foodCategory}/>
          </div>
        </div>
      )}

      <div className='w-2/4 mx-auto'>
        <div className='text-center text-xl font-bold mb-2'>
          カテゴリから選択
        </div>
        <ul className='text-center font-semibold'>
          <li className='bg-slate-200 py-1' onClick={ openModal('野菜・果物') }>
            野菜・果物
          </li>
          <li className='bg-slate-300 py-1' onClick={ openModal('肉・魚') }>
            肉・魚
          </li>
          <li className='bg-slate-200 py-1' onClick={ openModal('卵・牛乳・乳製品') }>
            卵・牛乳・乳製品
          </li>
          <li className='bg-slate-300 py-1' onClick={ openModal('米・パン') }>
            米・パン
          </li>
          <li className='bg-slate-200 py-1' onClick={ openModal('麺類') }>
            麺類
          </li>
          <li className='bg-slate-300 py-1' onClick={ openModal('調味料') }>
            調味料
          </li>
        </ul>
      </div>

    </Template>
  )
}
