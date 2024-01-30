import React from 'react'
import ViewButton from './ViewButton'

function SearchResultTable() {
  return (
    <div class=" py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 lg:mb-8">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
            <thead>
                <tr>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">FILE NUMBER</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">FILE NAME</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">SECTION</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">SUBJECT</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">YEAR</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">LOCATION</th>
                </tr>
            </thead>
            <tbody class="bg-white">
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-4 py-2 whitespace-no-wrap border-b border-gray-500 text-center leading-5">
                            <ViewButton/>
                        </td>
              </tr>
              <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-4 py-2 whitespace-no-wrap border-b border-gray-500 text-center leading-5">
                            <ViewButton/>
                        </td>
              </tr>
              <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-4 py-2 whitespace-no-wrap border-b border-gray-500 text-center leading-5">
                            <ViewButton/>
                        </td>
              </tr>
              <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-4 py-2 whitespace-no-wrap border-b border-gray-500 text-center leading-5">
                            <ViewButton/>
                        </td>
              </tr>
              <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-center leading-5"></td>
                        <td class="px-4 py-2 whitespace-no-wrap border-b border-gray-500 text-center leading-5">
                            <ViewButton/>
                        </td>
              </tr>
            </tbody>
        </table>
      </div>
</div>
  )
}
export default SearchResultTable