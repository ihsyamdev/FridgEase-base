import React from 'react'
import { SidebarMenuItem } from './SidebarMenuItem'

export const SidebarMenu = () => {
  return (
    <div>
      <ul className='font-bold'>
        <li className='py-2 bg-gray-500'>
          食材
        </li>
        <li className='text-center'>
          <ul>
            <li className='py-2 bg-gray-400'>
              <SidebarMenuItem to='/ingredients/create' label='食材一覧' icon='' />
            </li>
            <li className='py-2 bg-gray-300'>
              <SidebarMenuItem to='/ingredients' label='' icon='食材の在庫を見る' />
            </li>
          </ul>
        </li>
        <li className='py-2 bg-gray-500'>
          レシピ
        </li>
        <li className='text-center'>
          <ul>
            <li className='py-2 bg-gray-400'>
            <SidebarMenuItem to='' label='レシピを検索' icon='' />
            </li>
          </ul>
        </li>
        <li className='py-2 bg-gray-500'>
          履歴
        </li>
        <li className='text-center'>
          <ul>
            <li className='py-2 bg-gray-400'>
            <SidebarMenuItem to='' label='料理記録を確認' icon='' />
            </li>
          </ul>
        </li>
        <li className='py-2 bg-gray-500'>
          その他
        </li>
        <ul>
          <li className='py-2 bg-gray-400 text-center'>
            <SidebarMenuItem to='' label='About this app' icon='' />
          </li>
          <li className='py-2 bg-gray-300 text-center'>
            <SidebarMenuItem to='' label='Contact us' icon='' />
          </li>
          <li className='py-2 bg-gray-400 text-center'>
            <SidebarMenuItem to='' label='FAQs' icon='' />
          </li>
          <li className='py-2 bg-gray-300 text-center'>
            <SidebarMenuItem to='' label='利用規約' icon='' />
          </li>
          <li className='py-2 bg-gray-400 text-center'>
            <SidebarMenuItem to='' label='プライバシーポリシー' icon='' />
          </li>
        </ul>
      </ul>
    </div>
  )
}
